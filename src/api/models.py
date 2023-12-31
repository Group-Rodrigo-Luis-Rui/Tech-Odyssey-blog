from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from datetime import datetime
import enum

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_image = db.Column(db.String(255))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    posts = db.relationship("Post", back_populates="user")
    comments = db.relationship("Comment", back_populates="user")

    myreading = db.relationship('MyReading', backref='user', lazy=True, uselist=False)


    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "user_image": self.user_image
            # "posts": self.posts.serialize(),
            # "comments": self.comments.serialize()
            # do not serialize the password, its a security breach
        }
    
class Category(enum.Enum):
    COM = 'Computer'
    MT = 'Movie Tech'
    AI = 'AI - Artificial intelligence'
    EVM = 'EV Mobility'
    OTHER = 'Other Stuff'

class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.Enum(Category), nullable=False)
    title = db.Column(db.String(60), unique=False, nullable=False)
    subtitle = db.Column(db.String(100), unique=False, nullable=True)
    abstract = db.Column(db.String(300), unique=False, nullable=False)
    main_text = db.Column(db.String(5000), unique=False, nullable=False)
    image_post = db.Column(db.String(255))
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    user = db.relationship("User", back_populates="posts")

    myreading_id = db.Column(db.Integer, ForeignKey('myreading.id'))
    myreading = db.relationship("MyReading", back_populates="posts")

    comments = db.relationship("Comment", back_populates="post")


    def __repr__(self):
        return '<Posts %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "category": self.category.name if self.category else None,
            "title": self.title,
            "subtitle": self.subtitle,
            "abstract": self.abstract,
            "main_text": self.main_text,
            "date_created": self.date_created,
            "image_post": self.image_post,
            "comments": [comments.serialize() for comments in self.comments] if self.comments else []
        }
    
class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(120), unique=False, nullable=False)

    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    user = db.relationship("User", back_populates="comments")

    post_id = db.Column(db.Integer, ForeignKey('post.id'))
    post = db.relationship("Post", back_populates="comments")

    def __repr__(self):
        return '<MyReadings %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text
        }


class MyReading(db.Model):
    __tablename__ = 'myreading'
    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    posts = db.relationship("Post", back_populates="myreading", cascade="all, delete-orphan")

    def __repr__(self):
        return '<MyReadings %r>' % self.id

    def serialize(self):
        print("serialize: ", self.id)
        for post in self.posts: 
            print("post: ", post.id)
            print(post.serialize())
        return {
            "id": self.id,
            "posts": [post.serialize() for post in self.posts],
            "user": self.user_id
        }
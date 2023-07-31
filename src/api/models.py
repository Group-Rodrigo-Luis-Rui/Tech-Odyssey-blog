from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name
            # do not serialize the password, its a security breach
        }

# class CategoriesEnum(Enum):
#     pass

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    users_id = db.Column(db.Integer, ForeignKey('users.id'))
    users = relationship("Users")
    category = db.Column(db.Enum("Computer", "Movie Tech", "AI - Artificial intelligence", "EV Mobility", "Other Stuff"))
    title = db.Column(db.String(60), unique=False, nullable=False)
    subtitle = db.Column(db.String(100), unique=False, nullable=True)
    abstract = db.Column(db.String(300), unique=False, nullable=False)
    main_text = db.Column(db.String(5000), unique=False, nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)


    def __repr__(self):
        return '<Posts %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "users": self.users.serialize(),
            "category": self.category,
            "title": self.title,
            "subtitle": self.subtitle,
            "abstract": self.abstract,
            "main_text": self.main_text,
            "date_created": self.date_created,
            "comments": self.comments
        }

class MyReadings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    users_id = db.Column(db.Integer, ForeignKey('users.id'))
    users = relationship("Users")
    posts_id = db.Column(db.Integer, ForeignKey('posts.id'))
    users = relationship("Posts")


    def __repr__(self):
        return '<MyReadings %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "users": self.users.serialize(),
            "posts": self.posts.serialize()
        }
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.models import db, User, Post, Comment, MyReading, Category
from api.data import populate_user, populate_post_user1, populate_post_user2, populate_post_user3
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    populate_post_user1()
    populate_post_user2()
    populate_post_user3()
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# USER endpoints
@api.route('/user', methods=['POST'])
def add_user():
    try:

        data = request.get_json()
        name = data.get("name")
        email = data.get("email")
        password = data.get("password")
        is_active = data.get("is_active")

        if not email or not password:
            return jsonify({"Invalid input data"}), 400

        # Check if a user with the same email already exists
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({"User with this email already exists"}), 409

        # Create a new User object and add it to the database
        new_user = User(name=name, email=email, password=password, is_active=is_active)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User added successfully"}), 201

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/user/<int:id>', methods=['GET'])
def get_user(id):
    try:
        user = User.query.get(id)

        if not user:
            return jsonify({"User not found"}), 404

        # response_body = {
        #     "id": user.id,
        #     "name": user.name,
        #     "email": user.email,
        # }
        serialized_user = user.serialize()

        return jsonify(serialized_user), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/user/<int:id>', methods=['PUT'])
def update_user(id):
    try:
        # Get the user from the database using the user_id
        user = User.query.get(id)

        if not user:
            return jsonify({"User not found"}), 404

        data = request.get_json()
        name = data.get("name")
        email = data.get("email")
        password = data.get("password")

        if email:
            user.email = email
        if name:
            user.name = name
        if password:
            user.password = password

        db.session.commit()

        return jsonify({"message": "User updated successfully"}), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    try:
        user = User.query.get(id)

        if not user:
            return jsonify({"User not found"}), 404

        db.session.delete(user)
        db.session.commit()

        return jsonify({"message": "User deleted successfully"}), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

# POST endpoints
@api.route('/posts', methods=['GET'])
def get_all_posts():
    try:
        posts = Post.query.all()

        serialized_posts = [post.serialize() for post in posts]

        return jsonify(serialized_posts), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/posts/category/<string:category>', methods=['GET'])
def get_posts_by_category(category):
    try:
        # Check if the given category exists in the Category enum

        if category not in Category.__members__:
            return jsonify({"Invalid category"}), 400

        posts = Post.query.filter_by(category=Category[category]).all()

        categorized_posts = [post.serialize() for post in posts]

        return jsonify(categorized_posts), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/posts/category/<string:category>', methods=['GET'])
def get_posts_by_user(category):
    try:
        # Check if the given category exists in the Category enum

        if category not in Category.__members__:
            return jsonify({"Invalid category"}), 400

        posts = Post.query.filter_by(category=Category[category]).all()

        categorized_posts = [post.serialize() for post in posts]

        return jsonify(categorized_posts), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/post/<int:id>', methods=['GET'])
def get_one_post(id):
    try:
        post = Post.query.get(id)

        if not post:
            return jsonify({"Post not found"}), 404

        serialized_post = post.serialize()

        return jsonify(serialized_post), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/post/<int:id>', methods=['DELETE'])
def delete_post(id):
    try:
        # Get the post from the database using the post_id
        post = Post.query.get(id)

        if not post:
            return jsonify({"Post not found"}), 404

        db.session.delete(post)
        db.session.commit()

        return jsonify({"message": "Post deleted successfully"}), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

# MYREADINGS
@api.route('/myreadings', methods=['POST'])
def add_my_readings():
    try:
        data = request.get_json()
        user_id = data.get("user_id")

        user = User.query.get(user_id)
        if not user:
            return jsonify({"User not found"}), 404

        new_myreading = MyReading(user_id=user_id)
        db.session.add(new_myreading)
        db.session.commit()

        return jsonify({"message": "My readings added successfully"}), 201

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/myreadings/<int:id>', methods=['GET'])
def get_my_readings(id):
    try:
        myreading = MyReading.query.filter_by(user_id=id).first()

        if not myreading:
            return jsonify({"My readings not found"}), 404

        serialized_myreading = myreading.serialize()

        return jsonify(serialized_myreading), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/myreadings/<int:user_id>', methods=['DELETE'])
def delete_my_readings(id):
    try:
        # Get the MyReading for the given user_id from the database
        myreading = MyReading.query.filter_by(user_id=id).first()

        if not myreading:
            return jsonify({"My readings not found"}), 404

        db.session.delete(myreading)
        db.session.commit()

        return jsonify({"message": "My readings deleted successfully"}), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

# COMMENT endpoints
@api.route('/comment', methods=['POST'])
def add_comment():
    try:
        data = request.get_json()
        user_id = data.get("user_id")
        post_id = data.get("post_id")
        text = data.get("text")

        user = User.query.get(user_id)
        if not user:
            return jsonify({"User not found"}), 404

        post = Post.query.get(post_id)
        if not post:
            return jsonify({"Post not found"}), 404

        new_comment = Comment(user_id=user_id, post_id=post_id, text=text)
        db.session.add(new_comment)
        
        return jsonify({"message": "Comment added successfully"}), 201

    except NameError:
        return jsonify({"error" : "Namerror"}), 500
    
@api.route('/comments/<int:id>', methods=['GET'])
def get_comments_by_post(id):
    try:
        post = Post.query.get(id)

        if not post:
            return jsonify({"Post not found"}), 404

        comments = Comment.query.filter_by(post_id=post_id).all()

        serialized_comments = [comment.serialize() for comment in comments]

        return jsonify(serialized_comments), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500

@api.route('/comment/<int:id>', methods=['DELETE'])
def delete_comment(comment_id):
    try:
        comment = Comment.query.get(comment_id)

        if not comment:
            return jsonify({"Comment not found"}), 404

        db.session.delete(comment)
        db.session.commit()

        return jsonify({"message": "Comment deleted successfully"}), 200

    except NameError:
        return jsonify({"error" : "Namerror"}), 500


# AUTHENTICATION
@api.route('/login', methods=['POST'])
def login_user():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if email is None:
        response_body = {
            "message": "Email does not exist"
        }
        return jsonify(response_body), 400
    
    if password is None:
        response_body = {
            "message": "Password does not exist"
        }
        return jsonify(response_body), 400
    
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route('/tasks', methods=['GET'])
@jwt_required()
def get_tasks():

    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    res_user = user.serialize()

    print(' Authenticated Users Data', user)
    return jsonify(res_user), 200
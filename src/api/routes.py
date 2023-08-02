"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



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
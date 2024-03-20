from flask import Flask, request, jsonify, session
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# members api routes
@app.route('/')
def hello_world():
    data = {'message': 'Hello, World!'}
    return jsonify(data)


@app.route('/api')
def api():
    data = {'message': 'Hello, I am sending DATA to NASA!'}
    return jsonify(data) 


if __name__ == '__main__':
    app.run(debug=True )
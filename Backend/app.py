from Flask import Flask, request, jsonify
from Flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS for all domains on all routes

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    expression = data.get('expression')
    try:
        result = eval(expression)  # Note: eval() can be dangerous, use with caution
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'result': 'Error'}), 400

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, jsonify

app = Flask(__name__)

# Sample data for certificates
certificates = [
    {"id": 1, "name": "Angular: Ecosystems", "date": "4/29/2024", "link": "CertificateOfCompletion_Angular Ecosystems.pdf"},
    # Add more certificate data here
]

# Endpoint to get all certificates
@app.route('/certificates')
def get_certificates():
    return jsonify(certificates)

if __name__ == '__main__':
    app.run(debug=True)
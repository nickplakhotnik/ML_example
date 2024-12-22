from transformers import pipeline
from flask import Flask, request, jsonify

app = Flask(__name__)
model = pipeline("sentiment-analysis")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        if not data or "text" not in data:
            return jsonify({"error": "Invalid input. 'text' field is required"}), 400
        predictions = model(data["text"])
        return jsonify(predictions), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)

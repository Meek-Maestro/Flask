from flask import Flask, render_template, jsonify
import requests



app = Flask(__name__)

# App routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")
@app.route("/gallery")
def gallery():
    return render_template("gallery.html")

#Api routes
@app.route("/getProducts", methods=["GET"])
def getData():
    response = requests.get("https://fakestoreapi.com/products")
    data = response.json()
    print(data)
    return jsonify(data)
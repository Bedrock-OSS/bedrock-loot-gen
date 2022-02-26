from flask import Flask
from flask import render_template

app = Flask(__name__,  template_folder='', static_folder='')

@app.route("/")
def main():
    return render_template('index.html')
from flask import Flask, render_template, request, redirect, url_for
from util import db

@app.route("/")
def home():
    return render_template("index.html") 

@app.route("/result")
def result():
    return 

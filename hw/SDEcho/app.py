from flask import Flask, render_template, request, redirect, url_for


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("form.html")

@app.route("/authenticate")
def auth():
    print "\n\n\n\n\n"
    print "*** DIAG: THIS FLASK OBJ ***"
    print app
    print "*** DIAG: request.args ***"
    print request.args
    str1 = request.args["firstname"] + " " + request.args["lastname"] + "?"
    return render_template("greeting.html", name=str1)

if __name__ == "__main__":
    app.debug = True
    app.run()

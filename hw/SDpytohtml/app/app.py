# Terry Guan
# SoftDev1 pd 7
# HW#04: Fill up yer Flask
# 2017-09-21

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('image.html', title='home', redirect='/lancelot', image='static/YouShallNotPass.jpg')

@app.route("/lancelot")
def lancelot():
    return render_template('image.html', title='lancelot', redirect='/galahad', image='static/TisButAScratch.gif')

@app.route("/galahad")
def galahad():
    #print "i forgot to get into the horse" #doesnt print
    ret = ""
    ret += "<div style= 'text-align:center'>"
    ret += "<a  href = 'http://127.0.0.1:5000/'>"
    ret += "<iframe style= 'padding-top: 50px' width='1500' height='800' src='https://www.youtube.com/embed/dhRUe-gz690' frameborder='0' allowfullscreen></iframe>"
    ret += "</a>"
    ret += "</div>"
    return ret

if __name__ == "__main__":
    app.debug = True
    app.run()

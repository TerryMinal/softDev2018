from flask import Flask, render_template, request, redirect, url_for
from util import db

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/result", methods=["post"])
def result():
    # print request.form
    fil = request.form.get('filter')
    resu = request.form.get('res')
    if fil == "category":
        print "getting category"
        result = db.get_category(resu)
    elif fil == "year":
        print "getting year"
        result = db.get_year(resu)
    else:
        print "getting name"
        print db.get_laureate(resu)
        result = db.get_laureate(resu)
    print "result: ", result
    if len(result) == 0:
        return render_template("result.html", message = "no info found")
    else:
        return render_template("result.html", l = get_info(result))

def get_info(info_list):
    r = []
    for i in info_list:
        r.append(build(i))
    return r

def build(dict_build):
    category = dict_build['category'] + '\n'
    laureates = "".join([ d['firstname'] + " " + d["surname"] + ", Motivation: " + d['motivation'] + "\n" for d in dict_build['laureates'] ]) + '\n'
    year = dict_build['year'] + '\n'
    return [year, category, laureates]

if __name__ == "__main__":
    app.debug = True
    app.run()

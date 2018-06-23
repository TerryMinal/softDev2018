#Team OccupyWallStreet: Terry Guan Jasper Cheung
#SoftDev pd7
#HW#5:... and now enjoy its content
#2017-09-26

from flask import Flask, render_template, redirect, url_for
from util import csv_parse

app = Flask(__name__)

@app.route("/")
def home():
    return redirect(url_for('occupations'))

@app.route("/occupations")
def occupations():
    table_data = csv_parse.get_table_data('data/occupations.csv')
    job = csv_parse.get_rand_job('data/occupations.csv')
    return render_template('occupations.html', title = 'jobs', lists = table_data, randJob = job)


if __name__ == "__main__":
    app.debug = True
    app.run()

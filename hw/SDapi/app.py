# Terry Guan
# SoftDev
# HW14: MORE REST API
# 2017-11-12

from flask import Flask, render_template, flash, request, redirect, url_for
import urllib2, json, os

nasa_key = "mVletWJSBnRHGPjENuHCe6omNxrhbl9etcxKBNTc"
nasa_url = "https://api.nasa.gov/planetary/apod?api_key=mVletWJSBnRHGPjENuHCe6omNxrhbl9etcxKBNTc"

ny_times_key = "825524c00ebd4964b19da98d9022603f"
ny_times_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=825524c00ebd4964b19da98d9022603f"

darksky_key = "1235d091e83d9f7fb4dd2587b4cf1663"
darksky_url = "https://api.darksky.net/forecast/1235d091e83d9f7fb4dd2587b4cf1663/40.7180,74.0139"
#lat and long of stuy

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route("/")
def home():
    nasa = urllib2.urlopen(nasa_url)
    info = nasa.read()
    jo = json.loads(info)
    image = jo[u'hdurl']
    title = jo[u'title']
    description = jo[u'explanation']
    return render_template("home.html", nav_link_1 = "#", nav_link_2 = "/darksky", nav_link_3 = "/nytimes_search", image = image, description = description)

@app.route("/darksky")
def darksky():
    darksky = urllib2.urlopen(darksky_url)
    info = darksky.read()
    jo = json.loads(info)
    # print jo[u'currently']
    return render_template("darksky.html", nav_link_1 = "/", nav_link_2 = "#", nav_link_3 = "/nytimes_search", data = jo[u'currently'])

@app.route("/nytimes_search", methods = ["GET"])
def nytimes_search():
    return render_template("nytimes_search.html")

@app.route("/nytimes")
def nytimes():
    temp_url = ny_times_url
    #the url takes parameters that filters out content. Below takes form data and generates a url
    #with parameters
    for item in request.args:
        c = request.args.get(item)
        if c != "": #empty strings creates error 400... this prevents it 
            temp_url += "&" + item + "=" + c
        # print temp_url
    try: #if there are any errors, take them back to the form
        nytimes = urllib2.urlopen(temp_url)
        info = nytimes.read()
        jo = json.loads(info)
        jo_articles = jo[u'response'][u'docs']
        relevant_info = []
        temp = []
        for article in jo_articles: #filters necessary data and creates a 2D list
            temp.append(article[u'headline'][u'main'])
            temp.append(article[u'web_url'])
            relevant_info.append(temp)
            temp = []
        return render_template("nytimes.html", nav_link_1 = "/", nav_link_2 = "/darksky", nav_link_3 = "/nytimes_search",  articles = relevant_info)
    except:
        flash("No results found: Please try again", "error")
        return redirect(url_for("nytimes_search"))


if __name__ == "__main__":
    app.debug = True
    app.run()

# Nobel Prize dataset: a dataset of all the nobel prize winners
# Download link: http://api.nobelprize.org/v1/prize.json
# PLEASE NOTICE: We DID NOT download the file. It is much faster to just use requests to retrieve an object
# and then json that object than to have to retrieve a string from a file and then properly format it
# Import mechanism:
#   * obtained the data by using requests to retrieve the json
#   * formatted it into proper json dictionary with json() function
#   * used insert_many and list comprehension to structure and insert the data into the database

from pprint import pprint # used to print the collection obj nicely
import requests
import json
from pymongo import MongoClient
# retrieves data in json format
data = requests.get('http://api.nobelprize.org/v1/prize.json')
data = data.json()
data = data['prizes']

# mongo statements
c = MongoClient('lisa.stuy.edu', 27017)
c.carbonara.drop() #removes collection carbonara
db = c.carbonara #recreate collection carbonara
nobel = db.nobel 
# below statement imports all data
coll.insert_many([{'year': d['year'], 'category': d['category'], 'laureates': d['laureates']} for d in data])

def print_obj(obj):
    for d in obj:
        pprint(d)
    return

def get_category(category):
    x = nobel.find( {'category': category} )
    print_obj(x)
    return x

def get_year(year):
    x = nobel.find( {'year': year} )
    print_obj(x)
    return x

def get_laureate(Name):
    x = nobel.find( {'laureates.firstname': Name} )
    print_obj(x)
    return x

def get_year_category(category, year):
    x = nobel.find( { "$and": [ {"category": category}, {"year": year} ]} )
    print_obj(x)
    return x

# debug statements
# get_category('physics')
# get_year('2009')
# get_laureate("Barack H.")
# get_year_category('peace', '2009')

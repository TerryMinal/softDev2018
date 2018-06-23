 # Team Carbonara: Terry Guan, Alessandro Cartegni
# SoftDev2 pd7
# K#04: MongoDB practice
# 2018-02-14

from pymongo import MongoClient

c = MongoClient('lisa.stuy.edu', 27017)
res = c.test.restaurants

def print_obj(obj):
    for d in obj:
        print d

def get_bor(borough):
    x = res.find( {"borough": borough} )
    print_obj(x)
    return x


def get_zip(z):
    x = res.find( {"zipcode": z} )
    print_obj(x)
    return x

def get_zip_grade(z, grade):
    x = res.find( { "$and": [ {"zipcode": z}, {"grade": grade}] } )
    print_obj(x)
    return x

def get_zip_score(z, score):
    x = res.find( { "$and": [ {"zipcode": z}, { "score": {"$lt": score }} ]})
    print_obj(x)
    return x

# gets docs with cuisine and a good score
def get_cuisine(cuisine, score):
    x = res.find( { "$and": [ {"cuisine": cuisine}, { "score": {"$lt": score }} ]})
    print_obj(x)
    return x


# debug statements
get_bor("Queens")
get_zip(11368)
get_zip_grade(11368, 400)
get_zip_score(11368, 10)
get_cuisine("Other")

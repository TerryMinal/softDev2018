import csv
from random import random

with open ('data/occupations.csv', 'rU') as f:
    with open ('data/occupations.csv', 'rU') as f:
        occ = csv.reader(f, delimiter = ",", quotechar = "\"") #parses the csv into jobs and percents
        occ2 = csv.DictReader(f)
        rand = random() * 99.8
        curr = 0
        job = ''
        for dic in occ2:
            print dic
            if curr > rand:
                job = dic['Job Class']
                break
            else:
                curr += float(dic['Percentage'])
        table_data = list(occ) #list of lists of jobs & percentages... to be tablified
    print job

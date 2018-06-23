# Terry Guan
# SoftDev pd7
# HW09: No Treble
# 2017-10-16
import sqlite3   #enable control of an sqlite database
import csv       #facilitates CSV I/O


def csv_to_sqltable(database, tbl_name, csvFile, datatypes):
    db = sqlite3.connect(database) #open if f exists, otherwise create
    c = db.cursor()    #facilitate db ops
    tb = []
    tb_keys = []
    command = "CREATE TABLE " + tbl_name + " ("           #put SQL statement in this string
    with open(csvFile, 'rU') as foo:
        occ = csv.DictReader(foo)
        tb = list(occ)
        foo.seek(0)
        tb_keys = list(csv.reader(foo))
        tb_keys = tb_keys[0]
        for i in range(0, len(tb_keys)):
            a = tb_keys[i] + " " + datatypes[i]
            if (i < len(tb_keys) - 1):
                a += ", "
            command += a
        command += ")"
    # print command
    c.execute(command)
    db.commit()
    ins_command = "INSERT INTO " + tbl_name + " VALUES ("
    for row in tb:
        a = ins_command
        i = 0
        for key in tb_keys:
            a += "'" + row[key] + "'"
            if (i < len(tb_keys) - 1):
                a += ", "
            i += 1
        a += ")"
        # print a
        c.execute(a)
        db.commit()
    db.close()
    return

csv_to_sqltable("hw", "courses", "courses.csv", ["TEXT", "NUMERIC", "NUMERIC"])
csv_to_sqltable("hw", "peeps", "peeps.csv", ["TEXT", "NUMERIC", "NUMERIC"])
# c.execute(command)    #run SQL statement

#==========================================================
# db.commit() #save changes
# db.close()  #close database

#every element in a set must be unique (as defined by wikipedia)
def intersect (a, b) :
    if (len(a) > len(b)):
        return intersect(b, a)
    else:
        #a < b
        return [i for i in a if i in b]

def union (a, b):
    return a + [i for i in b if i not in a]


def set_difference(a, b):
    return [i for i in a if i not in b]

def symmetric_difference(a, b):
    return union(set_difference(a, b), set_difference(b, a))

def cartesian_product(a, b):
    return [(i, j) for i in a for j in b]

l1 = [12,5,7,9,23,785]
l2 = [785,4,36,2,5,9,21]

print "=======================UNION=========================="
print union(l1, l2) #expected output: 12, 5, 9, 23, 785, 4, 36, 2, 5, 9, 21
print union([1,5,7,8], [2,4,6,9]) #expected output: 1,2,3,4,5,6,7,8,9
print "==========================END OF UNION=========================="

print "==========================INTERSECT=========================="
print intersect(l1,l2) # expected output: 5, 9, 785
print intersect(l2,l1) # expected output: same as above
print intersect([1,2,3,4,5,6,7,8,9,0], [5,7,8]) #expected output: 5,7,8
print "==========================END OF INTERSECT=========================="

print "==========================SET DIFFERENCE=========================="
print set_difference(l1, l2) #expected output: 12, 7, 9, 23
print set_difference(l2, l1) #expected output: 4, 36, 2, 21
print "==========================END OF SET DIFFERENCE=========================="

print "==========================SYMMETRIC DIFFERENCE=========================="
print symmetric_difference(l1, l2) #expected output: 12, 7, 9, 23, 4, 36, 2, 11
print symmetric_difference([1,3,5,7,9], [2,4,6,8]) #expected output: 1,2,3,4,5,6,7,8,9
print "==========================END OF SYMMETRIC DIFFERNCE=========================="

print "==========================CARTESIAN PRODUCT=========================="
print cartesian_product(l1, l2)
print cartesian_product([1,2,3,4,5,6,7,8,9,0], ["red", "white", "blue"])
print "==========================END OF CARTESIAN PRODUCT=========================="

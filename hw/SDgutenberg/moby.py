# Terry Guan Ibnul Jahan
# SoftDev Pd7
# K18: Reductio ad Absurdum
# Due 2018-05-01

s = []
with open("moby_dick.txt", "rb") as f:
    s = [i for i in f.read().splitlines()]

t = [x for i in s for x in i.split(" ")]

for i in range(len(t)):
    t[i] = t[i].translate(None, "\",?.!")

t.sort()
print t
# for i in t:
#     print i


def single(l, word):
    return len( [i for i in l if i == word] )

def group(l, *words):
    return len( [i for i in l if i in words] )

def mostFrequent(l):
    l.sort()
    currentWord = l[0]
    ret = ""
    a = 0
    g = 0
    for i in l:
        if i == currentWord:
            a += 1
        else:
            currentWord = i
            if a > g:
                g = a
                ret = currentWord
    return ret

print single(t, "who")
print group(t, "where", "who", "tis")
print mostFrequent(t)

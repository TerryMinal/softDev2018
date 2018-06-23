from math import sqrt as sqrt
def check_pass(str):
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    characters = "!@#$%^&*()_+:;?"
    numbers = "1234567890"
    lstr = [i for i in str if i not in characters]
    if len(str) - len(lstr) == len(str):
        print "no special characters"
        return False
    num = 0
    uc_letter = 0
    lw_letter = 0
    for i in lstr:
        if i in letters:
            uc_letter += 1
        elif i in letters.lower():
            lw_letter += 1
        elif i in numbers:
            num += 1
    if num == 0 or uc_letter == 0 or lw_letter == 0:
        print "hahaha you would a thought. Make a stronger password"
        return False
    else:
        if (num + uc_letter + lw_letter + len(str)) > 10:
            return 10
        else:
            return (num + uc_letter + lw_letter + len(str))


print check_pass("a!a^dowa79iod*i&ajd:o0J*H(8AD)PU7%I77A$SHD;oi12aDWDoi123j")
print check_pass("WhatIsMyName718&^%")
print check_pass("ohyeah")
print check_pass("123912837")
print check_pass("12937123jh12o391j3lku09")

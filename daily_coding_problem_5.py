# This problem was asked by Jane Street.
#
# cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first
# and last element of that pair. For example, car(cons(3, 4)) returns 3, and
# cdr(cons(3, 4)) returns 4.
#
# Given this implementation of cons:
#
# def cons(a, b):
#     return lambda f : f(a, b)
# Implement car and cdr.

def cons(a, b):
    return lambda f : f(a, b)

def car(pair):
    return pair(lambda x, y : x)

def cdr(pair):
    return pair(lambda x, y : y)


# tests
if car(cons(3,4)) == 3:
    print("pass")
else:
    print("fail")

if cdr(cons(3,4)) == 4:
    print("pass")
else:
    print("fail")

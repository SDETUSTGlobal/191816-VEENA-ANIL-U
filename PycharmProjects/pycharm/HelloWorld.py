f=101;
e=200;
print (f)
print (e)
def some():
    global f
    print(f)
    f="I am learning";

some()
print (f)
del e
print (e)
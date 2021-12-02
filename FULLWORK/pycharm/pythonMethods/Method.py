dict={"v":55,"j":18}
print("length is %d" %len(dict))
print("variable is %s" %type(dict))
print("printable string is %s" % str(dict))
dict2={"ve":6,"lo":7}
dict.update(dict2)
print(dict)
dict1={**dict,**dict2}
print(dict1)
d={"n":[],"a":[]}
d["n"].append("gur")
d["a"].append("mum")
print(d)
print(d["n"])
print(d["a"])
d.clear()
print(d)

dict2.pop("ve")
print(dict2)
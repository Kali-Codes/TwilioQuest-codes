import sys

items = [sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5]]

for index, item in enumerate(items, start=1):
    print(f"{index}. {item}")

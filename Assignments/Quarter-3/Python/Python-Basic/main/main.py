# # 1st python code
# print("\nHello variables!")

# full_name = "Abrar Abbas"
# age = 26
# gpa = 2.4
# is_student = True

# print(f"Heyi {full_name}, You are {age} years old. and your gpa is {gpa}, you are still student: {is_student}")

# # 2nd python code
# print("\nHello arithmetics!")
# friends = 10                          # var
# friends += 1                          # Addition +
# friends -= 2                          # Subtration -
# friends *=3                           # Multiplication *
# friends /= 2                          # Dividion / (returns a float)
# friends //=3                          # Integar Division // (returns a Intergar)
# remaing_friend = friends % 2          # reminder %
# print(friends)

# # 3rd python code
# print("\nHello Typecasting")   # The Process of Converting a variable from one data type to another.
#                                 # str(), int(), float(), bool()

# name = "Abrar"
# age = 27
# gpa = 2.4
# is_Living = True

# # print (type(name))

# gpa = float(age)
# print(gpa)

# # 4th python code
# print("\nHello user Input")
# name = input("Enter Your Name: ")
# age = int(input("Enter your age: "))
# age += 1
# print(f"Heyiz {name}")
# print(f"Your are {age} years old.")


# # 5th python code
# print("\nHello Statements!") #if, else, elif

# age = int(input("Enter your age: "))
# has_ticket = True
# Price = 10

# if age >= 18:
#     print("You are eligible to vote")
#     print(f"As you adult, price will be ${Price * 7.5}")
# elif age == 9:
#     print("You aren't yet, baby!")
# elif age <= 8:
#     print("You are just born!")
# else:
#     print("You are too young to vote")
#     print(f"As you adult, price will be ${Price * 0.5}")


# if has_ticket:
#     print("You have a ticket, Enjoy!")
# else:
#     print("You don't have a ticket, buy one!")

# # 6th python code

# print("\nHello Logical Operator!") # or , and, not

# temp = 13
# is_raining = False

# if temp > 80 and is_raining == False:
#     print("It's boiling outside!")
# elif temp >=50 and not is_raining: 
#     print("It's extremely hot outside!")
# elif temp >= 25 or temp < 1 or is_raining: 
#     print("It's hot outside!")
# else:
#     print("It's not hot outside!")

# # 7th python
# print("\nHello Loops!\n") # for, while

# name = input("Enter Your Name: ")

# while name == "":
#     print("Name can't be empty")
#     name = input("Enter Your Name: ")
# print(f"Hey {name}")

# age = int(input("Enter Your Age: "))

# while age <= 0:
#     print("Age can't be less than 0")
#     age = int(input("Enter Your Age: "))
# print(f"Hey {name}. You are {age} years old")

#----------------------------------------------------------------

import time
for i in range(10, 0, -1):
    print(f"{i}  \n")
    time.sleep(1)
print("Happy New Year 🎇🎆🙌\n")

# # 8th python
# print("\nHello List, Tuple, Sets!\n") # List [], Tuple (), Set {}
# print("Lists:")            # mutable, means we can change the elements. Most Flexible.

# fruits = ["apple", "orange", "banana", "peach"]

# fruits[0] = "mango"
# fruits.append("mango")
# fruits.remove("apple")
# fruits.pop(1)
# fruits.clear()

# for fruit in fruits:
#     print(fruit, end=" ")

# print("Tuples")      # immutable, cant change elements. but it is Faster. if you need collection, then Tuple is good
# fruitz = ("apple", "orange", "banana", "peach")
# fruitz.append("apple")

# print("Sets")      # mutable, (add/remove), it is unordered, dont allow duplicates. best to check if something exists or not.
# fruitzs = {"apple", "orange", "banana", "peach"}
# # fruits.remove("apple")
# fruits.pop(1)
# fruits.clear()
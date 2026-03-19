from models import Animal, Dog, Cat


animal = Animal("Generic", 5, "gray")
dog = Dog("Buddy", 3, "brown", "Labrador")
cat = Cat("Whiskers", 2, "white", 9)

animals = [animal, dog, cat]

for a in animals:
    print(a)
    print(a.info())
    print(a.speak())
    print("-" * 30)

print(dog.fetch())
print(cat.climb())

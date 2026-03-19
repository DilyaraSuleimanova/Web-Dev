from models import Animal, Dog, Cat


animal = Animal("Koala", 5, "gray")
dog = Dog("Aktos", 3, "brown", "Labrador")
cat = Cat("Baggy", 2, "white", 9)

animals = [animal, dog, cat]

for a in animals:
    print(a)
    print(a.info())
    print(a.speak())
    print("-" * 30)

print(dog.fetch())
print(cat.climb())

from django.contrib import admin # Di; admin_12
from .models import Category, Product

admin.site.register(Category)
admin.site.register(Product)
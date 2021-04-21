from django.contrib import admin

# Register your models here.
from booksApp.models import Author, Book, Publisher

admin.site.register(Author)
admin.site.register(Publisher)
admin.site.register(Book)

# user: fabiosparta
# pass: djangogay
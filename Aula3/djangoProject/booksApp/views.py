from django.shortcuts import render
from booksApp.models import Author, Book, Publisher


def home(request):
    tparams = {
        'title': 'Home Page',
    }
    return render(request, 'index.html', tparams)


def authors(request):
    tparams = {
        'title': 'Authors',
        'authors': Author.objects.all()
    }
    return render(request, 'Authors.html', tparams)


def books(request):
    tparams = {
        'title': 'Books',
        'books': Book.objects.all()
    }
    return render(request, 'Books.html', tparams)


def publishers(request):
    tparams = {
        'title': 'Publishers',
        'publishers': Publisher.objects.all()
    }
    return render(request, 'Publishers.html', tparams)


def show_more_author(request, _id):
    tparams = {
        'title': 'Show_More_Author',
        'author': Author.objects.get(id=_id)
    }
    return render(request, 'Show_More_Author.html', tparams)

def show_author_books(request, _id):
    a = Author.objects.get(id=_id)
    tparams = {
        'title': 'Show_More_Author',
        'books': Book.objects.filter(authors__name=a.name)
    }
    return render(request, 'Books.html', tparams)

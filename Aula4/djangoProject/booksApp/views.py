from django.shortcuts import render

from booksApp.forms import BookQueryForm, BookFullQuery
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

def booksearch(request):
    if 'query' in request.POST:
        query = request.POST['query']
        if query:
            books = Book.objects.filter(title__icontains = query)
            return render(request, 'Books.html', {'books':books, 'query':query})
        else:
            return render(request, 'BookSearch.html', {'error':True})
    else:
        return render(request, 'BookSearch.html', {'error':False})

def bookquery(request):
    if request.method == 'POST' :
        form = BookQueryForm(request.POST)
        if form.is_valid():
            query = form.cleaned_data['query']
            books = Book.objects.filter(title__icontains=query)
            return render(request, 'Books.html', {"books": books,"query": query })
    else:
        form = BookQueryForm()
    return render(request, 'BookQuery.html', {'form':form})

def bookqueryfull(request):
    if request.method == 'POST':
        form = BookFullQuery(request.POST)
        if form.is_valid():
            title = form.cleaned_data['title']
            author = form.cleaned_data['author']
            publisher = form.cleaned_data['publisher']
            books = Book.objects.filter(title__icontains=title, authors__name__icontains=author, publisher__name__icontains=publisher)
            return render(request, 'Books.html', {"books": books, "query" : "Title: " + title + ", Author: " + author + ", Publisher: " + publisher })
    else:
        print('Empty Form')
        form = BookFullQuery()
    return render(request, 'BookQuery.html', {'form': form})
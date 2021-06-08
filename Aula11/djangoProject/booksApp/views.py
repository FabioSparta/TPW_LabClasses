from django.shortcuts import render
from booksApp.forms import BookQueryForm, BookFullQuery, EditBookForm
from booksApp.models import Author, Book, Publisher

# API REST IMPORTS
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from booksApp.serializers import AuthorSerializer

# REST API VIEWS

@api_view(['GET'])
def get_author(request):
    id = int(request.GET['id'])
    try:
        author = Author.objects.get(id=id)
    except Author.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = AuthorSerializer(author)
    return Response(serializer.data)


@api_view(['GET'])
def get_authors(request):
    authors = Author.objects.all()
    if 'num' in request.GET:
        num = int(request.GET['num'])
        authors = authors[:num]

    serializer = AuthorSerializer(authors, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_author(request):
    serializer = AuthorSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT'])
def update_author(request):
    id = request.data['id']
    try:
        author = Author.objects.get(id=id)
    except Author.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = AuthorSerializer(author, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def del_author(request,id):
    try:
        author = Author.objects.get(id=id)
    except Author.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    author.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

# DJANGO APP VIEWS
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
            books = Book.objects.filter(title__icontains=query)
            return render(request, 'Books.html', {'books': books, 'query': query})
        else:
            return render(request, 'BookSearch.html', {'error': True})
    else:
        return render(request, 'BookSearch.html', {'error': False})


def bookquery(request):
    if request.method == 'POST':
        form = BookQueryForm(request.POST)
        if form.is_valid():
            query = form.cleaned_data['query']
            books = Book.objects.filter(title__icontains=query)
            return render(request, 'Books.html', {"books": books, "query": query})
    else:
        form = BookQueryForm()
    return render(request, 'BookQuery.html', {'form': form})


def bookqueryfull(request):
    if request.method == 'POST':
        form = BookFullQuery(request.POST)
        if form.is_valid():
            title = form.cleaned_data['title']
            author = form.cleaned_data['author']
            publisher = form.cleaned_data['publisher']
            books = Book.objects.filter(title__icontains=title, authors__name__icontains=author,
                                        publisher__name__icontains=publisher)
            return render(request, 'Books.html', {"books": books,
                                                  "query": "Title: " + title + ", Author: " + author + ", Publisher: " + publisher})
    else:
        print('Empty Form')
        form = BookFullQuery()
    return render(request, 'BookQuery.html', {'form': form})


def edit(request, type, val):
    if request.method == 'POST':
        if type == 'pub':
            pu = Publisher.objects.get(name=val)
            """
            form = EditPubForm(request.POST, instance=pu)

            if form.is_valid():
                form.save()
                return render(request, 'forms.html', {'msg': 'Publisher ' + pu.name + ' updated successfully!'})
            """
        elif type == 'book':
            # request.user.groups.filter(name="admin").exists()
            bo = Book.objects.get(title=val)
            form = EditBookForm(request.POST, instance=bo)

            if form.is_valid():
                form.save()
                return render(request, 'Edit.html', {'msg': 'Book ' + bo.title + ' updated successfully!'})
        elif type == 'author':
            """
            au = Author.objects.get(name=val)
            form = EditAuthorForm(request.POST, instance=au)

            if form.is_valid():
                form.save()
                return render(request, 'forms.html', {'msg': 'Author ' + au.name + ' updated successfully!'})
            """
        else:
            return render(request, 'error.html')
    else:
        if type == 'pub':
            pu = Publisher.objects.get(name=val)
            # return render(request, 'forms.html', {'form': EditPubForm(instance=pu)})
        elif type == 'book':
            bo = Book.objects.get(title=val)
            return render(request, 'Edit.html', {'form': EditBookForm(instance=bo)})
        else:
            au = Author.objects.get(name=val)
            # return render(request, 'forms.html', {'form': EditAuthorForm(instance=au)})

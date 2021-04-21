from django import forms
from django.forms import ModelForm

from booksApp.models import Publisher, Book


class BookQueryForm(forms.Form):
    query = forms.CharField(label='Search:', max_length=100)

class BookFullQuery(forms.Form):
    title = forms.CharField(label='Title:', max_length=100, required=False)
    author = forms.CharField(label='Author', max_length=100,required=False)
    publisher = forms.CharField(label='Publisher:', max_length=100, required=False)


class EditBookForm(ModelForm):
    class Meta:
        model = Book
        fields = '__all__'
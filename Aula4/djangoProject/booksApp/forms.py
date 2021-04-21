from django import forms

class BookQueryForm(forms.Form):
    query = forms.CharField(label='Search:', max_length=100)

class BookFullQuery(forms.Form):
    title = forms.CharField(label='Title:', max_length=100, required=False)
    author = forms.CharField(label='Author', max_length=100,required=False)
    publisher = forms.CharField(label='Publisher:', max_length=100, required=False)
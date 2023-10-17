from django.shortcuts import render

def inicio(request):
    return render(request, 'inicio.html')

def vista2(request):
    return render(request, 'vistaDos.html')
def chatTest(request):
    return render(request, 'test.html')

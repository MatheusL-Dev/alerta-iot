from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from alarm_iot.arduino.main import Main


def index(request):
    return render(request, 'index.html')

@api_view(['GET'])
def gas_data_view(request):

    try:
        data = Main.get_gas_data()
        return Response(data=data, status=status.HTTP_200_OK)

    except Exception as err:
        print("Ocorreu um error...", err)
        return Response(data={}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def people_data_view(request):

    try:
        data = Main.get_people_data()
        return Response(data=data, status=status.HTTP_200_OK)

    except Exception as err:
        print("Ocorreu um error...", err)
        return Response(data={}, status=status.HTTP_400_BAD_REQUEST)

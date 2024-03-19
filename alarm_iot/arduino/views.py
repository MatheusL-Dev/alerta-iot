from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from alarm_iot.arduino.models import Sensores
from alarm_iot.arduino.serializer import SensoresMS
from alarm_iot.arduino.simulador import Simulador 


def index(request):
    return render(request, 'index.html')

@api_view(['GET'])
def sensores_data_view(request):

    try:
        data = Sensores.objects.order_by('-id').first() 
        serializer = SensoresMS(data)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    except Exception as err:
        print("Ocorreu um error...", err)
        return Response(data={}, status=status.HTTP_400_BAD_REQUEST)

from alarm_iot.arduino.models import *
from rest_framework import serializers

class SensoresMS(serializers.ModelSerializer):
    class Meta:
        model = Sensores 
        fields = '__all__'

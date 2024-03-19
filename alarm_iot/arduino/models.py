from django.db import models

class Sensores(models.Model):
    id = models.BigAutoField(primary_key=True)
    dt_evento = models.DateField()
    nivel_gas = models.IntegerField()
    salas = models.JSONField()

    def __str__(self):
        return f"Sensor {self.id}"

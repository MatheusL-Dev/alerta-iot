import time
import random
from datetime import datetime
from numpy.random import default_rng
from alarm_iot.arduino.models import Sensores


class Sensor():


    def __init__(self, tipo, media, desvio_padrao, min_value, max_value):
        self.tipo = tipo
        self.media = media
        self.desvio_padrao = desvio_padrao
        self.min_value = min_value
        self.max_value = max_value
        self.rng = default_rng()

    def gerar_dado(self):

        dado = self.rng.normal(self.media, self.desvio_padrao)
        if self.tipo == "gas":
            dado = max(min(dado, self.max_value), self.min_value)
        return int(dado)


class Sala():


    def __init__(self, nome, capacidade):
        self.nome = nome
        self.capacidade = capacidade
        self.pessoas = 0

    def entrar_pessoa(self):

        if self.pessoas < self.capacidade:
            self.pessoas += 1

    def sair_pessoa(self):

        if self.pessoas > 0:
            self.pessoas -= 1

    def get_dados(self):
        return {"sala": self.nome, "quantidade": self.pessoas}


class Simulador():


    def __init__(self):
        self.sensor_gas = Sensor("gas", 65, 5, 0, 100)
        self.salas = [
            Sala("Área Comercial", 50),
            Sala("Área Gerencial", 30),
            Sala("Área Administrativa", 40),
            Sala("T.I.", 20),
        ]

    def get_gas_data(self):
        return self.sensor_gas.gerar_dado()

    def get_people_data(self):

        for sala in self.salas:
            probabilidade_entrada = 0.5 * random.random()
            probabilidade_saida = 0.2 * random.random()

            if random.random() < probabilidade_entrada:
                sala.entrar_pessoa()
            elif random.random() < probabilidade_saida:
                sala.sair_pessoa()

            data = []
            for sala in self.salas:
                data += [sala.get_dados()]

        return data

    def executar(self):

        all_data = Sensores.objects.all().delete()

        while True:
            sensor_data = self.get_gas_data()
            sensor_pessoa = self.get_people_data()

            print("Dados do nível de gás:", sensor_data)
            print("Dados da quantidade de pessoas:\n", sensor_pessoa)

            data = Sensores(
                dt_evento=datetime.now(),
                nivel_gas=sensor_data,
                salas=sensor_pessoa
            )

            data.save()

            time.sleep(1)


if __name__ == "__main__":
    simulador = Simulador()
    simulador.executar()

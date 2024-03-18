import random
import time


class Main:

    @staticmethod
    def get_gas_data():
        return random.randint(0, 100)

    @staticmethod
    def get_people_data():

        return [
            { "sala": "Área Comercial", "quantidade": random.randint(0, 200) },
            { "sala": "Área Gerencial", "quantidade": random.randint(0, 200) },
            { "sala": "Área Administrativa", "quantidade": random.randint(0, 200) },
            { "sala": "T.I.", "quantidade": random.randint(0, 200) }
        ]

    @staticmethod
    def execute():

        while True:
            gas_data = Main.get_gas_data()
            people_data = Main.get_people_data()

            print("Dados do nível de gás:")
            for data in gas_data:
                print(data)

            print("\nDados da quantidade de pessoas:")
            for data in people_data:
                print(data)

            time.sleep(1)


if __name__ == "__main__":
    main = Main()
    main.execute()

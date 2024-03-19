# alerta-iot
Projeto extensionista da faculdade.

# Como inicializar;
# Back-End: Garantir o python 3^
- Na raiz do projeto:
pip install -r requirements.txt
python3 manager.py runserver

# Front-End: Garantir node 16^
- No diretorio: "/alarm_iot/frontend"
npm install
npm start

# Inicializar o Simulador:
- Na raiz do projeto:
python3 manager.py shell
from alarm_iot.arduino.simulador import Simulador
simulador = Simulador()
simulador.executar()

CTRL + C para finalizar

# alerta-iot

Projeto extensionista da faculdade.

## Como Inicializar o Back-End

Certifique-se de ter o Python 3^ instalado. Na raiz do projeto, execute os seguintes comandos:

```bash
pip install -r requirements.txt
python3 manager.py runserver
```

## Como Inicializar o Front-End

Certifique-se de ter o Node.js 16^ instalado. No diretório "/alarm_iot/frontend", execute os seguintes comandos:

```bash
npm install
npm start
```

## Na raiz do projeto, execute os seguintes comandos para inicializar o simulador:

```bash
python3 manager.py migrate
python3 manager.py shell
from alarm_iot.arduino.simulador import Simulador
simulador = Simulador()
simulador.executar()

Pressione CTRL + C para finalizar a execução do simulador.
```

---
title: Plantilla de github actions
---

Esta es una plantilla para poder utilizar un script de github actions, que permite que se haga un pull automatico al servidor (en caso de usarse) cuando se sube algo a las ramas Master o Staging

---

## Prerequisitos para utilizar este github actions

1. Agregar al repositorio los secretos necesarios:
   - DEPLOY_KEY: esta es la llave privada (generalmente .pem) para acceder y copiar repositorios de github mediante ssh, tambien tiene que ser agregada a las llaves ssh del usuario
   - SERVER_IP: esta es la ip del servidor, puede ser tanto la ip del servidor o el dns del servidor
   - PROJECT_PATH: este es el path del directorio donde se encuentra el repositorio del proyecto que se quiere desplegar
   - GIT_REPO: este es el link del repositorio
   - PM2_PROCESS_PRODUCTION y PM2_PROCESS_STAGING: es el nombre que se le dio al proceso en pm2. ejemplo: index-staging, index-production

![alt text](/img/github-secrets.png)

```yaml
# Nombre del workflow
name: Node.js CI/CD

# Accion en la que se va a ejecutar el script
on:
  # El script se ejecuta cuando se hace push a las ramas Master (Se puede cambiar al nombre de la rama principal del proyecto) o a Staging.

  # Es necesario que las ramas esten nombradas exactamente igual, teniendo en cuenta las mayusculas
  push:
    branches:
      - Master
      - Staging

# Aqui estan los trabajos o acciones que se llevaran acabo una vez se haga el push a las ramas de arriba

jobs:
  # Este job hace el despliegue a produccion
  deploy-production:
    # Se hace si la referencia o branch actual es igual a Master (si es necesario cambiar el nombre de la rama se cambia aqui).
    if: github.ref == 'refs/heads/Master'
    # Aqui se especifica la version y el sistema operativo del servidor con la que se esta trabajando (cambiar de ser necesario)
    runs-on: ubuntu-22.04
    # Estos son los pasos que realizara el script
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      # El script hace la configuracion ssh para acceder al servidor
      # Es importante checar los prerequisitos para que se use correctamente esta parte
      - name: Setup SSH
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
          SERVER_IP: ${{ secrets.SERVER_IP }}
        # Aqui se corren los comandos para guardar las llaves en el directorio del agente lo que
        # permite que se acceda al servidor mediante ssh
        run: |
          mkdir -p ~/.ssh
          echo "$DEPLOY_KEY" > ~/.ssh/id_ed25519
          chmod 600 ~/.ssh/id_ed25519
          ssh-keyscan -H $SERVER_IP >> ~/.ssh/known_hosts
          ssh-keyscan -H github.com >> ~/.ssh/known_hosts

      # Configuramos el entorno, en este caso se esta usando nodejs
      - name: Set up Node.js
        uses: actions/setup-node@v2
        # Cambiar la version de nodejs a la que se este utilizando
        with:
          node-version: "20.18"

      # Aqui se instalan las dependencias del proyecto en el agente
      - name: Install dependencies
        run: npm install

      # Este es el apartado donde se hace el despliegue
      - name: Deploy to Production
        env:
          SERVER_IP: ${{ secrets.SERVER_IP }}
          PROJECT_PATH: ${{ secrets.PROJECT_PATH }}
          GIT_REPO: ${{ secrets.GIT_REPO }}
          PM2_PROCESS: ${{ secrets.PM2_PROCESS_PRODUCTION }}

        # Correr los comandos necesarios tanto para acceder al servidor por medio de SSH
        # Nota: en este caso se usa root@$SERVER_IP pero si se utiliza algo como un ec2,
        # se be cambiar al usuario ubuntu o otro usuario que se desee

        # Se ubica en el path donde se encuentra el proyecto
        # Configura el origen del repo usando la variable $GIT_REPO
        # hace un git pull
        # hace un npm instal para instalar todas las librerias que se pudieran agregar
        # Hace un reload del proceso que se usar en pm2.

        # Si no se esta usando pm2, investigar cual es la forma en la que se reinicia un proceso en la herramienta seleccionada
        run: |
          ssh -i ~/.ssh/id_ed25519 -o StrictHostKeyChecking=no root@$SERVER_IP "
            cd $PROJECT_PATH &&
            git remote set-url origin $GIT_REPO &&
            git pull &&
            npm install &&
            pm2 reload ecosystem.config.js --only $PM2_PROCESS
          "

  # En este trabajo se hace lo mismo que en el anterior, solo que se usa el proceso de staging

  deploy-staging:
    if: github.ref == 'refs/heads/Staging'
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup SSH
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
          SERVER_IP: ${{ secrets.SERVER_IP }}
        run: |
          mkdir -p ~/.ssh
          echo "$DEPLOY_KEY" > ~/.ssh/id_ed25519
          chmod 600 ~/.ssh/id_ed25519
          ssh-keyscan -H $SERVER_IP >> ~/.ssh/known_hosts
          ssh-keyscan -H github.com >> ~/.ssh/known_hosts

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "20.18"

      - name: Install dependencies
        run: npm install

      - name: Deploy to Staging
        env:
          SERVER_IP: ${{ secrets.SERVER_IP }}
          PROJECT_PATH: ${{ secrets.PROJECT_PATH }}
          GIT_REPO: ${{ secrets.GIT_REPO }}
          PM2_PROCESS: ${{ secrets.PM2_PROCESS_STAGING }}
        run: |
          ssh -i ~/.ssh/id_ed25519 -o StrictHostKeyChecking=no root@$SERVER_IP "
            cd $PROJECT_PATH &&
            git remote set-url origin $GIT_REPO &&
            git pull &&
            npm install &&
            pm2 reload ecosystem.config.js --only $PM2_PROCESS
          "
```

---

## Historial de cambios

| **Tipo de versión** | **Descripción**                        | **Fecha** | **Colaborador**            |
| ------------------- | -------------------------------------- | --------- | -------------------------- |
| **1.0**             | Se creó la plantilla de GitHub Actions. |           | Diego Ricardo Alfaro Pinto |
| **1.1**             | Se agregó la tabla de versionamiento.   |  08/05/2025  | Diego Ricardo Alfaro Pinto |

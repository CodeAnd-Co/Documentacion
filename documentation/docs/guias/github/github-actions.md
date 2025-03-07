---
title: Plantilla de github actions
---

Esta es una plantilla para poder utilizar un script de github actions, que permite que se haga un pull automatico al servidor (en caso de usarse) cuando se sube algo a las ramas Master o Staging

---

```yaml
name: Node.js CI/CD

on:
  push:
    branches:
      - Master
      - Staging

jobs:
  deploy-production:
    if: github.ref == 'refs/heads/Master'
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

      - name: Deploy to Production
        env:
          SERVER_IP: ${{ secrets.SERVER_IP }}
          PROJECT_PATH: ${{ secrets.PROJECT_PATH }}
          GIT_REPO: ${{ secrets.GIT_REPO }}
          PM2_PROCESS: ${{ secrets.PM2_PROCESS_PRODUCTION }}
        run: |
          ssh -i ~/.ssh/id_ed25519 -o StrictHostKeyChecking=no root@$SERVER_IP "
            cd $PROJECT_PATH &&
            git remote set-url origin $GIT_REPO &&
            git pull &&
            npm install &&
            pm2 reload ecosystem.config.js --only $PM2_PROCESS
          "

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

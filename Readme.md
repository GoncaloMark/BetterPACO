# BetterPACO

O BetterPACO é uma extensão que melhora, garantidamente o UI/UX do Portal Académico Online da UA.
Ao injetar React e utilizando MaterialUI na página, faz-se também o parsing das páginas originais do PACO, mantendo portanto a informação consistente tudo com código Client-Side.
Fiz este projeto pois é uma ótima forma de praticar Web App Reverse Engineering, e nunca tinha feito uma extensão do browser.

## Instalação

Funciona apenas no Google Chrome ou Chromium based Browsers (Opera, etc...)

### Step 1

```bash 
    cd BetterPACO
    npm install
```

### Step 2

```bash 
    npm run build
```

### Step 3

Ir a gerir extensões no Chrome. Selecionar "Carregar Expandida", e selecionar a pasta "dist" gerada pelo comando em "Step 2".
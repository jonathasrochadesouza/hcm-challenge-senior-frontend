# HCM CHALLENGE (Senior Sistemas) - Frontend.

Senior Labs challenge, desafio 'software engineer'.

## Instalação

1. Clone o repositório em sua máquina
2. Abra o projeto com uma editor/IDE de sua preferência (utilizei Visual Studio Code)
3. Instale os pacotes do projeto (juntamente com o NodeJS)
   ```sh
   npm install
   ```

## Executando o Frontend

1. Verifique se o backend está rodando. Você pode acessar aqui: [projeto backend](https://github.com/jonathasrochadesouza/hcm-challenge-senior-backend)
<!-- 2. O backend deve estar sendo executado na porta `8080` -->
2. Para executar o Frontend, basta executar o comando abaixo
    ```sh
    npm run dev
    ```

⚠ OBS: Verifique o seguinte antes de executar o front: 
* Instalação dos pacotes
* Verificar a porta no `.env` 
* Verificar se o backend estar rodando

O frontend tentará subir na `porta 3000`, no `host localhost` (inicialmente). Essas configurações podem ser alteradas através da váriavel de ambiente `PORT` no `.env`.

## API (Backend)

O Frontend espera que a API (back - producer), esteja rodando na `porta 8080`, no `host localhost` (inicialmente).

Esta configuração (host e porta de entrada da api) pode ser alterada através da váriavel de ambiente `API_URL`, encontrada no `.env`.

## Ideia Inicial (Protótipo)

![](https://github.com/jonathasrochadesouza/hcm-challenge-senior-frontend/git_assets_readme/hcm_front_prototipo.png)

## Executando Aplicação (back + front)

![](https://github.com/jonathasrochadesouza/hcm-challenge-senior-frontend/git_assets_readme/hcm-challenge-gif-eventos-marcacao-de-ponto.gif)

## Saiba Mais

### `Tecnologias`
* Nodejs
* Reactjs

### `Pacotes e Ferramentas`

* Visual Studio Code 
* Material UI
* Axios

## `Projeto desenvolvido por Jonathas Rocha`

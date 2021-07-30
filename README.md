# Exemplo de Refresh Token

Exemplo de como realizar autenticação e refresh token com Node, TypeScript e PostgreSQL

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

### Docker

Tenha o docker instalado em sua máquina para criar uma imagem do PostgreSQL localmente.

* [Docker](https://www.docker.com/products/docker-desktop) - Site para baixar e instalar o Docker

### Node

Node será utilizado para roda sua aplicação.

* [Node](https://nodejs.org/pt-br/download/) - Site para baixar e instalar o Node

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Antes de começar execute o comando para ser baixado os pacotes das bibliotecas que serão utilizadas na aplicação.

```bash
# com npm

npm install

# ou com yarn

yarn install
```

Começando pelo **Banco de dados**, execute o comando a seguir na raiz do projeto para criar uma imagem do PostgreSQL com o docker-composer

```bash
# ./

docker-compose up -d
```

Logo em seguida, rode as migrations para ser criado as tabelas do banco da forma correta.

```bash
# ./

npm typeorm migration:run

# ou com yarn

yarn typeorm migration:run
```

Agora é só executar a aplicação

```bash
# ./

npm dev

# ou com yarn

yarn dev
```

E pronto, sua aplicação já está funcionando.

## Rotas para testar com o Insomina

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Refresh-token&uri=https%3A%2F%2Fgithub.com%2Freinaldo-silva%2Frefresh-token%2Fblob%2Fmain%2FinsominiaJson.json)

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Node](https://nodejs.org/pt-br/) - Para o desenvolvimento da aplicação
* [TypeScript](https://www.typescriptlang.org/pt/) - Superset do JavaScript
* [JWT](https://jwt.io/) - Usado para criar os tokens
* [PostgreSql](https://www.postgresql.org/) - Banco de dados utilizado
* [Docker](https://www.docker.com/) - Docker

## ✒️ Autores

* **Desenvolvedor** - *Realizou todo projeto* - [Reinaldo Silva](https://github.com/reinaldo-silva)

---
[Reinaldo Silva](https://github.com/reinaldo-silva) 😊

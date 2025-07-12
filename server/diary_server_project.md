# Diário projeto NLW - Agency - Server

## Instalar ou verificar instalação node

```
    # Download and install nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

    # in lieu of restarting the shell
    \. "$HOME/.nvm/nvm.sh"

    # Download and install Node.js
    nvm install 22

    # verificando versão do Node.js
    node -v # print "v22.17.0"
    nvm current # print "v22.17.0"
    npm -v # print "10.9.2"

    # mostra todas as versões para instalação
    nvm ls-remote

    # verificar versões instaladas localmente
    nvm ls

```

## Criando package.json

```
    # executar dentro da pasta server criada dentro do diretorio do projeto
    npm init -y
```

## Instalando dependências de desenvolvimento (TS)

```
    npm i typescript @types/node -D
```

## Criando arquivo tsconfig.json

```
    npx tsc --init
```

## O TS será usado para type-checking

- No projeto, não será efetuado build, convertendo TS para JS,
  pois, desde a versao 20 do none, já tem suporte nativo a TS.

## Instalando as depedencias:

```
    npm i fastify @fastify/cors fastify-type-provider-zod zod
```

- Fastify, fastify/cors, fastify-type-provider-zod e zod

  1. Fastify

  - É um framework web para Node.js, focado em ser rápido, leve e eficiente. Ideal para construir APIs modernas e performáticas.

  2. Cors

  - Política de segurança implementada pelos navegadores que controla quais domínios externos podemp acessar recursos (APIs, arquivos e etc.) de um servidor web.

  3. fastify-type-provider-zod e zod

     - Zod:

       - É uma biblioteca de validação de dados baseda em TypeScript-first schemas.
       - O zod permite validar objetos, strings, números, arrays e etc, de forma simples e com tipagem estática garantida.

       - Instalação:
         ```
             npm install zod
         ```

     - fastify-type-provider-zod:

       - É um pacote que conecta o zod ao fastify de forma nativa para:

         - Validar entradas (body, query, params) com zod
         - Gerar tipos TypeScript automaticamente
         - Melhorar a DX com IntelliSense e segurança de tipo

       - Instalação

         ```
             npm install fastify-type-provider-zod zod
         ```

     Vantagens:
     | Recurso | Benefício |
     |---------|-----------|
     | Validação automática | Garante que o corpo da requisição seja válido |
     | Tipagem automática com TS | Menos erro e maior produtividade |
     | Facilidade de uso | Sem necessidade de bibliotecas extras como Joi |
     | Compatível com Fastify v4+ | Integração moderna e fluída |

## TSX

- É uma ferramenta moderna para executar arquivos TS diretamente no Node.js, sem precisar compilar antes com tsc. Usado bastante em ambiente de desenvolvimento.

  ```
      npm install -D tsx
  ```

## Biome

- É uma ferramenta moderna de desenvolvimento para JavaScript, TypeScript e JSON - como uma alternativa all-in-one para ferramentas como ESLint, Prettier, Babel, etc.
- Biome é uma ferramenta de formatação, linting e análise de código criada para ser rápida, leve e moderna.
- Pense nela como um substituto mais rápido e unificado para ferramentas como:
  - ESLint(lint)
  - Prettier(format)
  - tsc(análise estática)
  - (futuramente) Babel (transformações)

```
    # instalando como dependencia dev
    npm i @biomejs/biome -D

    # instalando uma versão especifica
    npm install --save-dev --save-exact @biomejs/biome@1.4.0

    # Format all files
    npx @biomejs/biome format --write

    # Format specific files
    npx @biomejs/biome format --write <files>

    # Lint files and apply safe fixes to all files
    npx @biomejs/biome lint --write

    # Lint files and apply safe fixes to specific files
    npx @biomejs/biome lint --write <files>

    # Format, lint, and organize imports of all files
    npx @biomejs/biome check --write

    # Format, lint, and organize imports of specific files
    npx @biomejs/biome check --write <files>
```

## [Ultracite](https://www.ultracite.ai/)

- Um preset de configurações do Biome
- Conjunto de configurações pré-estabelecidas para não ter que configurar o Biome do zero

- Instalação

  ```
    npx ultracite@latest init
  ```

## Docker

```
    # instalando via brew MacOS
    brew install docker

    # comando para rodar docker em modo detached, ou seja, sem a janela ficar travada com logs
    docker compose up -d

    # para rodar sem ser em modo detached
    docker compose up
```

- É uma plataforma que permite empacotar, distribuir e executar a aplicação de forma isolada e padronizada, usando containers.
- Conceito principal: Container

  - Um container é como uma mini máquina virtual leve, que contém:

    - sua aplicação
    - todas as depedências necessárias
    - bibliotecas do sistema
    - Confogurações

  - Tudo isso rodando de forma isolada, mas compartilhando o mesmo sistema operacional do host (diferente de VMs que rodam um SO completo)

- Benefícios do Docker:

| Vantagem          | Explicação                                     |
| ----------------- | ---------------------------------------------- |
| Portabilidade     | Funcional igual no seu PC, servidor ou Cloud   |
| Isolamento        | Cada app tem seu próprio ambiente              |
| Reprodutibilidade | "Roda na minha máquina" deixa de ser problema  |
| Automação         | Pode automatizar builds, testes e deploys      |
| Escalabilidade    | Muito usado com orquestradores como Kubernetes |

## Dockerhub PGVector

- É uma imagem que já vem com suporte para executar o pgvector
- PGVector: é uma extensão que realiza busca por similaridade
  - Busca por similaridade:
    - É um conceito para quando estamos trabalhando com IA, que visa encontrar itens semelhantes a uma consulta específica em um conjunto de dados, mesmo que não haja uma correspondência exata.
    - É uma técnica amplamente utilizada em diversas aplicações, como sistemas de recomendação, recuperação de informações e mineração de dados

## Postgres

- Um poderoso banco de dados relacional de código aberto, amplamente usado por desenvolvedores e empresas por ser:

  - Seguro
  - Escalável
  - Com suporte a consultas complexas
  - Altamente extensível (tipos personalizados, JSON, extensões como PostGIS, etc)

- Principais características do Postgres

  | Recurso                     | Descrição                                           |
  | --------------------------- | --------------------------------------------------- |
  | ACID compliant              | Garante integridade nas transações                  |
  | Suporte a dados complexos   | Arrays, JSON, JSONB, enums e mais                   |
  | Controle de acesso avançado | Permissões detalhadas por usuário e função          |
  | Extensível                  | Criação de tipos, funções e operadores customizados |
  | Índices potentes            | Suporte a índices B-tree, GIN, GiST, etc.           |

- instalando bilbioteca

  ```
    npm i postgres
  ```

## Drizzle ORM

- ORM(Object-Relational Mapping): É uma técnica de programação que permite interagir com um banco de dados relacional usando objetos e classes da linguagem de programação em vez de escrever SQL diretamente.
- Em outras palavras: Um ORM traduz comandos da linguagem que está sendo utilizada(Como Python, JavaScript, etc.) para comando SQL que o banco entende - e vice-versa.

- Exemplos:

  - Python: SQLAlchemy, Django ORM
  - JavaScript/TypeScript: Sequelize, TypeORM, Prisma
  - Java: Hibernate

- Vantagem:

  - Menos SQL manual -> mais produtividade
  - Código mais limpo e orientado a objetos
  - Abstração de diferentes bancos (MySQL, PostgreSQL, SQLite)
  - Validação e migrações integradas (em alguns ORMs)

- Drizzle ORM

  - É um ORM moderno para TypeScript/JavaScript que foca em:

    - Performance e tipagem forte (totalmente baseado em TypeScript)
    - Consultas SQL estáticas e seguras em tempo de compilação
    - Compatibilidade com bancos como PostGreSQL, MySQL e SQLite
    - Geração de migrações automatizadas com base nos modelos

  - Porque usar o Drizzle ORM?
    - Ele combina o melhor de dois mundos: sintaxe SQL-like com segurança de tipos TypeScript
    - Geração de queries segura: Se você errar o nome de uma tabela/coluna, o erro aparece em tempo de compilação
    - É leve, moderno e com foco em desenvolvedores fullstack (especialmente em projetos com frameworks como Next.js ou Remix)

  ```
    npm i drizzle-orm
  ```

## Drizzle-kit

- Ferramenta oficial do Drizzle ORM usada para gerenciar o esquema do banco de dados, ou seja, é a CLIR (Command Line Interface) do Drizzle ORM.
- Principais funcionalidades:
  - Gerar migrações automaticamente a partir dos seus arquivos de schema TypeScript
  - Rodar migrações no banco de dados
  - Sincronizar o estado do banco com o código
  - Inspecionar o banco de dados e gerar schemas baseadas nele
- Instalação
  ```
    npm i drizzle-kit -D
  ```

## Gerando tabelas/schemas
- Processo para gerar em /migrations arquivos que vao criar as tabelas do nosso db:
  ```
    npx drizzle-kit generate
  ```

## Rodando as migrations
  ```
    npx drizzle-kit migrate
  ```

## Verificando consistencia do Banco
- Comando para verificar se o banco foi populado corretamente
  ```
    npx drizzle-kit studio
  ```

## Drizzle-seed
- Pacote para realizar o 'seed' através do drizzle no banco de dados
- Seed é nada mais que um arquivo que realiza uma pré-população com dados fictícios no banco de dados

<!-- parado aos 58 minutos -->
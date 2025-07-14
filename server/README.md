# Projeto LetMeAsk - NLW Agents - Server

## Objetivo

- Contruir uma API eficiente e robusta para realizar comunicação e disponibilizar todos os dados para o front-end.

## Tecnologias Back-end
- Node.js com **TypeScript nativo** (experimental strip types).
- PostgreSQL com extensão **pgvector** para vetores.
- Fastify - **Framework** web para Node.js rápido, leve e eficiente.
- Zod - Biblioteca de **validação** de dados baseda em TypeScript-first schemas
- Docker - Plataforma que permite **empacotar**, **distribuir** e **executar** a aplicação de forma isolada
- Drizzle ORM - É um **ORM** moderno para TypeScript/JavaScript com foco em operações em bancos
- Biome - Ferramenta com foco em **Lint** e **formatação** de código

## Arquitetura
- Esta parte do projeto tem uma arquitetura toda modular, com:
  * Separação das responsabildiades através de rotas, schemas e conexões com banco.
  * Validaçãos dos schemas através do Zod para type safety
  * OPE type-safe com Drizzle para operações em banco de dados
  * Validação das variáveis de ambiente centralizadas

## Setup e Configuração
### Pré-requisitos
  * Node.js **(versão com suporte para --experimental-strip-types)**
  * Docker e Docker Compose

## Scripts

## Endpoints


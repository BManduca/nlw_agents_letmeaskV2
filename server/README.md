# LetMeAsk - Server 🚀

Projeto desenvolvido por **Brunno Manduca** durante a **NLW Agents** da Rocketseat.

## ✨ Sobre o Projeto

API robusta, eficiente e moderna para gerenciamento de salas, construída com foco em boas práticas, performance e DX.

---

## 🛠️ Tecnologias & Bibliotecas

- **Node.js** (TypeScript nativo)
- **Fastify** - Framework web rápido e leve
- **Zod** & **fastify-type-provider-zod** - Validação de dados e schemas tipados
- **Drizzle ORM** & **Drizzle Kit** - ORM moderno e CLI para migrações
- **PostgreSQL** com extensão **pgvector** - Banco de dados relacional e busca vetorial
- **Docker** - Ambientes isolados e reprodutíveis
- **Biome** & **Ultracite** - Lint, formatação e análise de código
- **Drizzle-seed** - População inicial do banco de dados

---

## 🏗️ Padrões & Arquitetura

- **TypeScript nativo** (sem build, usando suporte do Node.js 20+)
- **Validação centralizada** com Zod
- **ORM tipado** (Drizzle) para queries seguras
- **Migrations automáticas** e versionadas
- **Ambiente isolado** via Docker
- **Lint e formatação** padronizados com Biome + Ultracite

---

## ⚡ Setup Rápido

1. **Clone o repositório**
   ```bash
   git clone <repo-url>
   cd server
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o ambiente**
   - Crie um arquivo `.env` com:
     ```
     PORT=3333
     DATABASE_URL=postgresql://{user}:{password}@localhost:{PORT}/{DB}
     ```
   - As informções entre {} acima, serão as mesmas informações cadastradas no arquivo docker-compose

4. **Suba o banco de dados com Docker**
   ```bash
   docker compose up -d
   ```

5. **Rode as migrations**
   ```bash
   npx drizzle-kit migrate
   ```

6. **Popule o banco (opcional)**
   ```bash
   npm run db:seed
   ```

7. **Inicie o servidor**
   ```bash
   npm run dev
   ```

---

## ⚙️ Scripts Úteis

- `npm run dev` — Inicia o servidor em modo desenvolvimento
- `npm start` — Inicia o servidor em produção
- `npm run db:seed` — Popula o banco com dados fictícios
- `npx drizzle-kit migrate` — Executa as migrations
- `npx drizzle-kit generate` — Gera novas migrations
- `npx @biomejs/biome check --write` — Lint, formatação e organização de imports

---

## 🗂️ Estrutura do Projeto

```
server/
  ├─ docker/
  │   └─ setup.sql
  ├─ src/
  │   ├─ db/
  │   │   ├─ connection.ts
  │   │   ├─ migrations/
  │   │   ├─ schema/
  │   │   └─ seed.ts
  │   ├─ env.ts
  │   ├─ http/
  │   │   └─ routes/
  │   │       └─ get-rooms.ts
  │   └─ server.ts
  ├─ docker-compose.yml
  ├─ drizzle.config.ts
  ├─ package.json
  ├─ tsconfig.json
  └─ README.md
```

--- 

## 📝 Observações

- Requer **Node.js 20+** (suporte nativo a TypeScript)
- Banco de dados padrão: **PostgreSQL** (porta 5432)
- Extensão **pgvector** já configurada via Docker

--- 
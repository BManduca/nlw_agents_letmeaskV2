# LetMeAsk - Web 🌐

Projeto desenvolvido por **Brunno Manduca** durante a **NLW Agents** da Rocketseat.

---

## ✨ Descrição

LetMeAsk é uma aplicação web moderna para criação e participação em salas de perguntas e respostas em tempo real, com suporte a temas claro/escuro e interface responsiva.

---

## 🛠️ Tecnologias & Bibliotecas Principais

- **React 19** – Biblioteca principal para construção da interface.
- **Vite** – Bundler e ambiente de desenvolvimento rápido.
- **TypeScript** – Tipagem estática para maior segurança.
- **React Router DOM** – Roteamento SPA.
- **@tanstack/react-query** – Gerenciamento de dados assíncronos e cache.
- **Tailwind CSS** – Utilitário para estilização rápida e responsiva.
- **@radix-ui/react-dropdown-menu** – Componentes acessíveis de menu.
- **lucide-react** – Ícones modernos em SVG.
- **next-themes** – Gerenciamento de tema (claro/escuro).
- **shadcn/ui** – Componentes de UI prontos e customizáveis.
- **biome** – Linter e formatter para código.

---

## 🧩 Padrões de Projeto

- **Componentização**: Interface dividida em componentes reutilizáveis.
- **Hooks**: Uso extensivo de hooks para estado, tema e dados.
- **Provider Pattern**: Contextos para tema e dados globais.
- **SPA (Single Page Application)**: Navegação sem recarregar a página.
- **Alias de Imports**: Utilização de `@/` para importar arquivos de `src/`.

---

## 🚀 Setup do Projeto

1. **Pré-requisitos**:
   - Node.js 18+
   - npm 9+

2. **Instalação**:
   ```bash
   npm install
   ```

3. **Rodando em modo desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Build de produção**:
   ```bash
   npm run build
   ```

5. **Preview do build**:
   ```bash
   npm run preview
   ```

---

## ⚙️ Configurações Importantes

- **Tailwind CSS**: Configurado via plugin no Vite e importado em `src/index.css`.
- **Alias `@/`**: Configurado em `vite.config.ts` e `tsconfig.json` para facilitar imports.
- **Tema (Dark/Light/System)**: Gerenciado via `ThemeProvider` e `ModeToggle`, com persistência no `localStorage`.
- **Rotas**: Definidas em `src/app.tsx` usando `BrowserRouter` e `Routes`.
- **Query Client**: Instanciado e provido globalmente para gerenciamento de dados.

---

## 📜 Scripts Disponíveis

- `npm run dev` – Inicia o servidor de desenvolvimento.
- `npm run build` – Gera o build de produção.
- `npm run preview` – Visualiza o build localmente.

---

## 💡 Observações

- O projeto utiliza padrões modernos de frontend e segue boas práticas de acessibilidade e performance.
- Para customização de temas, edite as variáveis CSS em `src/index.css`. 
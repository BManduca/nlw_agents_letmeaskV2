# Diário projeto NLW - Agency - Web

## Instalar dependências do projeto
    - acessar pasta web e executar:
    ```
        npm i
    ```

## [Shadcn/ui](https://ui.shadcn.com/)
- Biblioteca de componentes de interface (UI) construída sobre o Radix UI e estilizada com Tailwind CSS, voltada para aplicações modernas em React (especialmente com Next.js).
- A Biblioteca oferece componentes prontos, acessíveis e altamente personalizáveis, como botões, menus, modais, inputs...
    ### Componentes utilizados
    1. [Card]('https://ui.shadcn.com/docs/components/card')
       * instalação: npx shadcn@latest add card
       * Construa cartões de maneira agil, com Header, Content e Footer.
    2. [Badge]('https://ui.shadcn.com/docs/components/badge')
       * instalação: npx shadcn@latest add badge.
       * Exiba um botão, um componente ou algo do gênero literalmente como uma Badge(emblema).

## [Dark/Light mode](https://ui.shadcn.com/docs/dark-mode/vite) 
- Documentação para implementar Dark/light mode via [shadcn/ui](https://ui.shadcn.com/) em um projeto vite + react.

## React Router Dom
- Biblioteca de roteamento para aplicações React.
- Ela permite que seja criado rotas de navegação entre diferentes páginas ou componentes da aplicação de forma declarativa, ou seja, usando os componentes do próprio React.
- Possível criar redirecionamentos e proteger rotas (por exemplo, para login)
- Controlar quais components irão aparecer com base na URL atual.

- BrowserRouter
  1. Instalação
        ```
            npm i react-router-dom
        ```
  2. componente do próprio React Router, usado para navegação entre páginas em aplicações React.
  3. Ele permite que seja criado rotas(URLs) no navegador que correspondem a diferentes componentes da aplicação, como se fossem páginas diferentes, sem recarregar a página inteira(princípio de SPA - Single Page Application)
  4. **O que o BrowserRouter faz**?
     * Gerencia o **histórico do navegador** usado API History
     * Permite criar URLs mais limpas como **/home**, **/contato**, etc.
     * Atualiza a interface da aplicação sem recarregar a página inteira.

## React query
1. Instalação
        ```
            npm i @tanstack/react-query
        ```
3. Biblioteca para gerenciamento de estado assíncrono em aplicações React, focada especialmente em requisições de **dados(fetching)**, **cache**, **sincronização** e **atualização de dados do servidor**.
4. O que o React Query faz?
   * **Busca de dados(fetching)**: Facilita requisições HTTP, geralmente com fetch ou axios
   * **Cache inteligente**: Mantém dados armazenados em cache, para evitar que ocorra requisições repetidas de forma desnecessária
   * **Atualização automática(refetching)**: Atualiza os dados automaticamente em eventos como foco da aba, reconexão da internet, etc.
   * **Mutations**: Gerenciamento de operações de escrita(POST, PUT, DELETE)com feedback de carregamento, erro ou sucesso.
   * **Sincronização entre componentes**: Compartilhar os dados buscados entre múltiplos componentes sem duplicar as requisições.
   * **Paginação e infinitas requisições**: Suporte nativo para paginação ou scroll infinito.


<!-- https://gist.github.com/sidneyroberto/5f0b837c2d27f791fc494c164d2a7d74 -->
<!-- https://github.com/rocketseat-education/nlw-agents-aulas-server -->
<!-- https://github.com/rocketseat-education/nlw-agents-aulas-web -->

<!-- https://www.youtube.com/watch?v=pynRw8RzqcQ -->

# 🛒 E-commercer AI

Aplicação **frontend** desenvolvida com **React 19 + TypeScript + Vite 7**, simulando uma pequena loja virtual. O sistema exibe uma lista de produtos e permite ao usuário **adicionar ou remover itens do carrinho**, com atualização em tempo real do ícone de notificação.

---

## 🧠 Contexto do Projeto

Este projeto foi criado para explorar boas práticas com:

- **Componentização reutilizável** no React
- **Gerenciamento de estado global com [Constate](https://github.com/diegohaz/constate)** (wrapper moderno para Context API)
- **Persistência de estado com `localStorage`**
- **Testes com Vitest + Testing Library**
- Código modular e organizado com **SASS Modules**

---

## 📦 Principais Componentes

### 🔹 ProductCard
> `src/components/ProductCard/`

Renderiza o cartão individual de cada produto, com imagem, descrição e botão de ação (adicionar/remover do carrinho). Os dados são mockados e manipulados via hook.

### 🔹 CartIcon
> `src/components/CartIcon/`

Ícone do carrinho com contador. Exibe o número de itens no carrinho em tempo real. Conectado ao hook `useCart`.

### 🔹 Header
> `src/components/Header/`

Cabeçalho fixo do site que exibe o nome do sistema e o `CartIcon`.

---

## 🧰 Hooks Customizados

### 🔸 useCart
> `src/hooks/useCart.ts`

Hook responsável por centralizar o estado do carrinho. Utiliza **Constate** para criar um provider e hook especializado.

### 🔸 useLocalStorageState
> `src/hooks/useLocalStorageState.tsx`

Hook reutilizável que sincroniza o estado com o `localStorage`, garantindo persistência mesmo ao atualizar a página.

---

## 🧪 Testes

O projeto utiliza:

- [`Vitest`](https://vitest.dev/) como test runner
- [`Testing Library`](https://testing-library.com/) para testes de UI
- [`jsdom`](https://github.com/jsdom/jsdom) como ambiente de simulação do navegador

### Comandos disponíveis

```bash
# Rodar todos os testes
npm run test

# Rodar com cobertura
npm run test:coverage
```

Os testes já estão implementados para os principais componentes e hooks (`ProductCard`, `CartIcon`, `useCart`, etc).

---

## ▶️ Como executar o projeto

### ✅ Pré-requisitos

- Node.js `>= 16`
- npm ou yarn

### 🚀 Passos para rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Acessar no navegador
http://localhost:5173
```

---

## 📁 Estrutura de Pastas

```bash
src/
├── components/         # Componentes visuais reutilizáveis
│   ├── ProductCard/
│   ├── CartIcon/
│   └── Header/
├── hooks/              # Hooks customizados (useCart, useLocalStorage)
├── utils/              # Funções auxiliares (se necessário)
├── App.tsx             # Componente raiz
├── main.tsx            # Entrada principal da aplicação
└── vite-env.d.ts       # Tipagens do Vite
```

---

## 💡 Melhorias Futuras

- Paginação ou lazy loading para lista de produtos
- Filtros por categoria/preço
- Integração com API externa para carregar produtos reais
- Animações com Framer Motion
- Deploy via Vercel, Netlify ou GitHub Pages
- Adição de testes E2E com Cypress ou Playwright
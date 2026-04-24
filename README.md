# 💼 Gerenciador de Projetos - Backend

Este é o backend da aplicação *Gerenciador de Projetos*, desenvolvido com Node.js, Express e MongoDB. A API fornece uma estrutura completa para o gerenciamento de portfólios ou listas de tarefas, permitindo o cadastro, edição, listagem e remoção de projetos de forma persistente.

---

## 🚀 Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para o servidor.
- **Express**: Framework para criação de rotas e manipulação de requisições HTTP.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados.
- **Mongoose**: ODM para modelagem e interação com o MongoDB.
- **CORS**: Middleware para permitir o acesso do frontend à API.
- **Dotenv**: Gestão de variáveis de ambiente seguras.

---

## 📦 Funcionalidades
- ✔ **Criar projeto**: Cadastro de título, descrição, tecnologias, links e data.
- ✔ **Listar projetos**: Recuperação de todos os registros salvos.
- ✔ **Atualizar projeto**: Modificação de dados de um projeto via ID.
- ✔ **Deletar projeto**: Exclusão definitiva de registros.

---

## 🧠 Estrutura do Projeto
A organização segue o padrão MVC (Model-View-Controller) para facilitar a manutenção:

backend/
├── controllers/
│   └── projectController.js   # Lógica das operações (CRUD)
├── models/
│   └── Project.js            # Definição do Schema do Banco de Dados
├── routes/
│   └── projectRoutes.js       # Definição dos caminhos da API
├── .env                       # Variáveis de ambiente (não versionado)
├── .gitignore                 # Arquivos ignorados pelo Git
├── package.json               # Gerenciamento de scripts e dependências
└── server.js                  # Ponto de entrada e conexão com DB

---

## 🔗 Rotas da API
Base URL: `http://localhost:3000/api/projects`

| Método | Rota | Descrição |
|--------|------|-----------|
| **GET** | `/` | Listar todos os projetos |
| **POST** | `/` | Criar um novo projeto |
| **PUT** | `/:id` | Atualizar um projeto existente |
| **DELETE** | `/:id` | Deletar um projeto |

---

## ⚙️ Como rodar o projeto localmente

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/maricmoutinho/Gerenciador-de-projetos-Backend.git](https://github.com/maricmoutinho/Gerenciador-de-projetos-Backend.git)
   cd Gerenciador-de-projetos-Backend
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Configurar arquivo .env:**
   Crie um arquivo chamado `.env` na raiz e adicione sua conexão:
   ```env
   MONGO_URI=sua_string_do_mongodb_atlas
   ```

4. **Rodar o servidor:**
   ```bash
   npm start

---

## 🔐 Observações Técnicas
- **CORS**: Configurado para permitir a integração fluida com o frontend.
- **Body Parser**: A API está preparada para receber dados no formato JSON via `express.json()`.
- **Porta**: O servidor roda por padrão na porta `3000`.

---

## 👨‍💻 Autor
Maria Clara Moutinho

Projeto desenvolvido para fins de gerenciamento e organização de portfólio acadêmico/profissional.
```

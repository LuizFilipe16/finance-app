# 💰 FinanceApp - Backend

API RESTful desenvolvida em **Node.js**, **Express** e **TypeScript**, com banco de dados **PostgreSQL**, voltada para controle financeiro pessoal.  
O sistema permitirá que usuários gerenciem **entradas, saídas, gráficos e metas financeiras**, com **autenticação** e **segurança de dados** (em desenvolvimento).

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **PostgreSQL**
- **dotenv** para variáveis de ambiente
- **pg** para conexão com o banco de dados
- **ESM Modules**
- **UUID** para geração de IDs únicos
- **bcrypt / JWT** (planejado para autenticação)

---

## 📂 Estrutura de Pastas

```bash
src/
 ├── controllers/        # Controladores das rotas (lógica de entrada/saída)
 ├── use-cases/          # Casos de uso (regras de negócio)
 ├── services/           # Serviços e integrações
 ├── repositories/       # Camada de acesso a dados (PostgreSQL)
 ├── entities/           # Modelos e entidades principais
 ├── helpers/            # Funções auxiliares
 ├── factories/          # Injeção de dependências e criação de controladores
 ├── errors/             # Tratamento de erros e respostas padronizadas
 ├── config/             # Configurações de ambiente e banco
 └── index.ts            # Ponto de entrada da aplicação

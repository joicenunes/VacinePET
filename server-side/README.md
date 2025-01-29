# Server-side

1. Configure seu supabase com a estrutura de tabelas presente no [arquivo de estrutura de tabelas](./db_config/table_structure_dump.sql)
2. Utilize suas variáveis de projeto no .env, utilizando o [.env.example](./.env.example) como base para seus secrets
    * Ache seus secrets de projeto em `Project Settings > Configuration > API`
    * O JWT_SECRET para rodar local fica a seu critérito

# Instale depedências

Rode `npm install` no terminal dentro da pasta server-side para instalar as depedências do projeto

# Rode o projeto

Rode `npm run dev` para iniciar o projeto com nodemon

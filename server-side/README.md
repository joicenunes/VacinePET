# Server-side

1. Configure seu supabase com a estrutura de tabelas presente no [arquivo de estrutura de tabelas](./db_config/table_structure_dump.sql)
2. Utilize suas variáveis de projeto no .env, utilizando o [.env.example](./.env.example) como base para seus secrets
    * Ache seus secrets de projeto do SUPABASE em `Project Settings > Configuration > API`
    * O JWT_SECRET para rodar local fica a seu critérito

# Instale depedências

Para rodar o projeto na sua máquina, é necessário ter o [node](https://nodejs.org/pt/download) e o npm (vem na instalação do node) instalados. Rode `npm install` no terminal dentro da pasta server-side para instalar as depedências do projeto.

As versões utilizadas na criação do projeto foram
- Node: v22.8.0
- npm: 10.9.0
Caso encontre problemas na intalação dos pacotes ou na hora de rodar o projeto, tente manter as versões de acordo com essas.

# Rode o projeto

Rode `npm run dev` para iniciar o projeto com nodemon

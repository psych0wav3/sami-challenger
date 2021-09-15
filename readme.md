# Primeiros passos


### Apps recomendados:
##### Insominia REST -> Chamadas API.
##### Beekeeper Studio -> Gerenciamento de banco de dados.
### Comandos iniciais
##### Instalando dependências:
`yarn`
ou
`npm install`

##### Executando rollback das migrations:
`yarn knex:migrate:rollback`
ou
`npm run knex:migrate:rollback`

##### Executando as migrations no banco de dados:
`yarn knex:migrate:run`
ou
`npn run knex:migrate:run`

##### Gravando Seeds no banco de dados:
`yarn knex:seeds:run`
ou
`npn run knex:seeds:run`

##### Iniciando o servidor da API :
`yarn dev`
ou
`npm run dev`

## Preparando Insominia

Na pastas `src` da aplicação há um arquivo chamado `colection_API.json` importe ele no insominia que ele ja carregara todas as configurações de ambiente e endpoints.


## Preparando Beekeeper Studio

No campo de `Connection Type` selecione SQLite.
Em `Database File` navegue dentro de `src` até `shared -> infra -> database` e selecione o arquivo `dev.sqlite`.
De um nome para ele e salve, no lado esquerdo sua conexão ficará salve conecte e ja tera acesso as tabelas.

*Lembre-se sempre de dar rollback e run nas migrations sempre antes de conectar ao banco para garantir que as tabelas seja criadas.*

## Documentação
Após rodas a API acesse no navegador http://localhost:3333/docs para visualizar e testar todas as rotas documentadas com Swagger.



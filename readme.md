# MySoil - API

Essa API faz parte da solução do time Yapuhcakip para o Hackathon CPAmazônia - Desafio SERPRO. A api foi feita com Node.js + Express e seu banco de dados está hospedado no firebase.

### Para rodar a aplicação na sua máquina local, rode o seguinte comando:

    npm install

![npmInstall](https://github.com/menezes-dev/mysoil-backend/assets/102121794/f8f6498b-66e4-480f-b527-5ae643757b2f)

### Ou se preferir, acessa a URL base através de seu ApiClient preferido:

    https://api-mysoil.onrender.com

\*Caso você use o Insomnia com ApiClient, você pode baixar a Coleção de requisições [aqui](https://drive.google.com/file/d/1fayqkK0OjF5_tVXnP31c8NMneGeLxzhJ/view?usp=drive_link), e importar como mostra o vídeo abaixo:

https://github.com/menezes-dev/mysoil-backend/assets/102121794/1339e7b7-57ee-4d51-b49f-dda9e73b3038

# Endpoints da API

# Sessão

### `POST /session`

Rota utilizada para fazer login na aplicação

### Request

```json
{
  "email": "menezes@teste.com",
  "password": "12345678"
}
```

### Response:

```json
{
  "token": "eyJjbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE5MzEyOThiZjczYTJjMzk5ZDJkNCIsImlhdCI6MTcwNTY4OTExNywiZXhwIjoxNzA1NzY1NTE3LCJzdWIiOiI2NWFhOTMxMjk4YmY3M2EyazM5oWQyZDQifQ.4cIsSmbKYrZVw1BHUobONC4wx7mL0K9soaZxyz_PJoA",
  "id": "35ab831298bf73a2c399d2d7",
  "email": "menezes@teste.com"
}
```

</br>

# Usuários

### `POST /user`

Rota para criação de um usuário

### Request

```json
{
  "email": "menezes@teste.com",
  "password": "12345678",
  "username": "menezes-teste"
}
```

### Response

```json
{
  "email": "menezes@teste.com",
  "password": "$2a$10$/Y/9.DveK1AAzjyumzF/nOlRUObYbp6pURb6FI6iXjgG5dxcoHDIW",
  "username": "menezes-teste",
  "_id": "65ae7f26388e750efec54443",
  "__v": 0
}
```

### `GET /user/:id`

Rota para buscar um usuário específico, informando um id

### Response

```json
{
  "_id": "65ae7f26388e750efec54443",
  "email": "menezes@teste.com",
  "password": "$2a$10$/Y/9.DveK1AAzjyumzF/nOlRUObYbp6pURb6FI6iXjgG5dxcoHDIW",
  "username": "menezes-teste",
  "__v": 0
}
```

### `GET /user`

Rota para listar todos os usuários

### Response

```json
[
  {
    "_id": "65ab17a3abc9f9121c7bd468",
    "email": "zedamanga@teste.com",
    "password": "$2a$10$z.9NULI5c7ZEjI0Oq9dXmuJqHEsXt1VNXFBK.wWGswMO.8Cr3VHsq",
    "username": "Ain Zé da Manga",
    "__v": 0
  },
  {
    "_id": "65ab17bcabc9f9121c7bd46a",
    "email": "cartuchodecarabina@teste.com",
    "password": "$2a$10$WnR3G84OfTgLWxOxpKmYFuZk3/xKDao0uBzpUWAeyISRItpL5at.y",
    "username": "O povo quer gozar",
    "__v": 0
  },
  {
    "_id": "65ae7f26388e750efec54443",
    "email": "menezes@teste.com",
    "password": "$2a$10$/Y/9.DveK1AAzjyumzF/nOlRUObYbp6pURb6FI6iXjgG5dxcoHDIW",
    "username": "menezes-teste",
    "__v": 0
  }
]
```

### `PATCH /user/:id`

Rota para atualizar um usuário específico, informando seu id

### Request

```json
{
  "email": "emaileditado@teste.com"
}
```

### Response

```json
{
  "_id": "65ae7f26388e750efec54443",
  "email": "emaileditado@teste.com",
  "password": "$2a$10$/Y/9.DveK1AAzjyumzF/nOlRUObYbp6pURb6FI6iXjgG5dxcoHDIW",
  "username": "menezes-teste",
  "__v": 0
}
```

### `DELETE /user/:id`

Rota para deletar um usuário específico

### Response

    No body returned for response

import express from "express"


const app = express ()

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.send('Ok post')
})

app.get('/usuarios', (req, res) =>{
    res.json(users)
})


app.listen(3000)



/*
1) Tipo de rota / Método HTTP
2) Endereço

Criar a API de Usuários

- Criar um usuário
- Listar tosdos os usuários
- Editar um usuário
-Deletar um usuário

*/
import express from 'express';
import pkg from './generated/prisma/index.js'; // caminho correto para o Prisma Client gerado
import { ObjectId } from 'bson';

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

// auteraça~de usuários

app.put('/usuarios/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
            where:{
                id: req.params.id
            },
            data: {
                name: req.body.name,
                testimony: req.body.testimony
            }
        })

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar usuário.', detalhes: error.message });
    }
})

app.get('/usuarios', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários.', detalhes: error.message })
    }
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
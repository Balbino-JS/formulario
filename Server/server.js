import express from 'express';
import pkg from './generated/prisma/index.js';
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

// auteraça~de usuários



app.delete('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await prisma.user.delete({
            where: {
                id: new ObjectId(id)
            }
        });
        res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ error: 'Erro ao deletar usuário.', detalhes: error.message });
    }
})


app.listen(3000)




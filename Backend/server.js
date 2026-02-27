import 'dotenv/config'
import express from 'express'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const app = express()

app.use(express.json())


//Rotas =>>

// criar 

app.post('/create', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário', details: error.message })
    }
})

// mostrar

app.get('/home', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message })
    }
})

// atualizar / editar

app.put('/atualizar/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message })
    }
})

// deletar
app.delete('/deletar/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ message: 'Usuário deletado com sucesso!' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário', details: error.message })
    }
})

app.listen(3000)
console.log('Servidor rodando na porta http://localhost:3000/home')
# Sucesso: Servidor Rodando (Prisma 6)

O servidor foi corrigido e está online. Voltamos para o **Prisma 6** para garantir a estabilidade com o MongoDB sem precisar de configurações complexas.

## 1. Status do Servidor
O servidor está rodando em: `http://localhost:3000`

## 2. Testando com Thunder Client

Siga os mesmos passos anteriores, mas agora com a garantia de que o banco está conectado:

````carousel
### 1. Criar Usuário (POST)
**URL:** `http://localhost:3000/create`  
**Body JSON:**
```json
{
  "name": "Igor Ryan",
  "email": "igor@prisma6.com",
  "age": "20"
}
```
<!-- slide -->
### 2. Listar Todos (GET)
**URL:** `http://localhost:3000/home`  
*Verifique se o usuário que você criou aparece na lista.*
<!-- slide -->
### 3. Atualizar (PUT)
**URL:** `http://localhost:3000/atualizar/{ID}`  
*Troque o {ID} pelo código que apareceu no passo 1.*
<!-- slide -->
### 4. Deletar (DELETE)
**URL:** `http://localhost:3000/deletar/{ID}`
````

## 3. O que foi feito:
- [x] Downgrade para Prisma 6 (mais estável para MongoDB hoje).
- [x] Remoção do arquivo conflitante [prisma.config.ts](file:///c:/Users/Raiado/Documents/Aplicacao-Full-Stack-/Backend/prisma.config.ts).
- [x] Ajuste no [server.js](file:///C:/Users/Raiado/Documents/Aplicacao-Full-Stack-/Backend/server.js) para usar `dotenv` e importar o Prisma corretamente.
- [x] Limpeza e reinstalação completa da `node_modules`.

> [!IMPORTANT]
> O servidor está travando o terminal agora porque está "ouvindo" as requisições. Você já pode abrir o **Thunder Client** e começar os testes!

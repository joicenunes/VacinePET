/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Gerenciamento de pets
 */

/**
 * @swagger
 * /pets:
 *   get:
 *     tags: [Pets]
 *     summary: Lista todos os pets
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pets
 *       400:
 *         descriptiion: Erro ao buscar pets
 */

/**
 * @swagger
 * /pets/{id}:
 *   get:
 *     tags: [Pets]
 *     summary: Obtém um pet por ID
 *     description: Retorna as informações de um pet específico pertencente ao usuário autenticado.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pet a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Retorna os detalhes do pet.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 species:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 breed:
 *                   type: string
 *                 birthday:
 *                   type: string
 *                   format: date
 *                 weight:
 *                   type: number
 *                   format: float
 *       400:
 *         descriptiion: Erro ao buscar pets
 *       403:
 *         description: Ação não permitida (usuário tentando acessar um pet que não pertence a ele).
 */

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Cria um novo pet
 *     description: Permite que um usuário autenticado cadastre um novo pet.
 *     tags: [Pets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - species
 *               - owner
 *               - breed
 *               - birthday
 *               - weight
 *               - gender
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do pet.
 *               species:
 *                 type: string
 *                 description: Espécie do pet
 *               owner:
 *                 type: integer
 *                 description: ID do dono do pet.
 *               breed:
 *                 type: string
 *                 description: Raça do pet.
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: Data de nascimento do pet.
 *               weight:
 *                 type: number
 *                 format: float
 *                 description: Peso do pet em kg.
 *               description:
 *                 type: string
 *                 description: Descrição do pet.
 *               gender:
 *                 type: string
 *                 description: Gênero do pet.
 *     responses:
 *       201:
 *         description: Pet criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *       400:
 *         description: Erro ao criar pet.
 */

/**
 * @swagger
 * /pets/{id}:
 *   delete:
 *     tags: [Pets]
 *     summary: Deleta um usuário pelo ID
 *     description: Permite que um usuário autenticado delete sua própria conta. O usuário só pode excluir sua própria conta, não a de outros.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pet a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pet deletado com sucesso.
 *       400:
 *         description: Erro ao deletar pet.
 *       403:
 *         description: Ação não permitida.
 */
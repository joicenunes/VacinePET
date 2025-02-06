/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Gerenciamento de pets
 */

/**
 * @swagger
 * /api/pets:
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
 * /api/pets/{id}:
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
 * /api/pets:
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
 * /api/pets/{id}:
 *   put:
 *     summary: Edita um pet
 *     description: Permite que um usuário autenticado edite um pet.
 *     tags: [Pets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pet a ser editado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - species
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
 * /api/pets/{id}/add-vaccine:
 *   post:
 *     summary: Atribuir uma vacinação a um pet
 *     description: Registra uma vacinação para um pet específico.
 *     tags: [Pets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do pet que receberá a vacinação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - vaccine_id
 *               - applied_in
 *             properties:
 *               vaccine_id:
 *                 type: string
 *                 example: "12345"
 *               applied_in:
 *                 type: string
 *                 format: date
 *                 example: "2024-02-06"
 *     responses:
 *       201:
 *         description: Vacinação atribuída com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Vacinação atribuída com sucesso!
 *                 vaccine:
 *                   type: object
 *       400:
 *         description: Erro ao criar vacinação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Erro ao criar Vacinação.
 */

/**
 * @swagger
 * /api/pets/{id}:
 *   delete:
 *     tags: [Pets]
 *     summary: Deleta um pet pelo ID
 *     description: Permite que um usuário autenticado delete um pet próprio. O usuário só pode excluir pets que o pertencem, não é permitido excluir pets de outros usuários.
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
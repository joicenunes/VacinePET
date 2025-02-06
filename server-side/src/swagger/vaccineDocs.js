/**
 * @swagger
 * tags:
 *   name: Vaccines
 *   description: Gerenciamento de vacinas
 */

/**
 * @swagger
 * /api/vaccines:
 *   post:
 *     summary: Criar uma nova vacina
 *     description: Adiciona uma nova vacina ao sistema.
 *     tags: [Vaccines]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Vacina XYZ
 *     responses:
 *       201:
 *         description: Vacina criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Vacina criada com sucesso!
 *                 vaccine:
 *                   type: object
 *       400:
 *         description: Erro ao criar vacina
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Erro ao criar Vacina.
 *
 *   get:
 *     summary: Buscar todas as vacinas
 *     description: Retorna uma lista com todas as vacinas cadastradas.
 *     tags: [Vaccines]
 *     responses:
 *       200:
 *         description: Lista de vacinas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       400:
 *         description: Erro ao buscar vacinas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Erro ao buscar Vacinas.
 *
 * /api/vaccines/{id}:
 *   delete:
 *     summary: Deletar uma vacina
 *     description: Remove uma vacina do sistema pelo ID.
 *     tags: [Vaccines]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da vacina a ser deletada
 *     responses:
 *       204:
 *         description: Vacina deletada com sucesso
 *       400:
 *         description: Erro ao deletar vacina
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Erro ao deletar Vacina.
 */
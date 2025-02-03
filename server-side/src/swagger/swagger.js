import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import path from 'path';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'VacinePET API',
      version: '1.0.0',
      // description: 'Documentação da API',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Ajuste para o URL da sua API
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerAuth: 'jwt',
        }
      }
    }
  },
  apis: ['./src/swagger/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

export default setupSwagger;

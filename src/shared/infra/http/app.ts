import 'reflect-metadata';
import 'express-async-errors';
import swaggerDocument from '@config/swagger.json';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import '@shared/container';
import userRoutes from '@modules/users/infra/http/routes/routes';

import { AppError } from '@shared/errors/AppError';

const DisableTryItOutPlugin = function () {
  return {
    statePlugins: {
      spec: {
        wrapSelectors: {
          allowTryItOutFor: () => () => false,
        },
      },
    },
  };
};

export const options = {
  // swaggerOptions: {
  //   plugins: [DisableTryItOutPlugin],
  // },
  explorer: false,
  customCss: '.swagger-ui .topbar { display: none }',
};

const app = express();
app.use(express.json());
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
dotenv.config();
app.use(userRoutes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ error: err.message });
    }
    return response.status(500).json({ error: err.message });
  },
);
export { app };

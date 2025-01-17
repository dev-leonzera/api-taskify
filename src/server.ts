import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema';
import { root } from './resolvers';

const app = express();

app.use('/graphql', createHandler({
  schema,
  rootValue: root,
}));

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});

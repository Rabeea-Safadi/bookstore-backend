import * as express from 'express';
import * as cors from 'cors';
import * as env from './config/env';
import bookRouter from './routes/book.routes';
import { connect } from 'mongoose';

async function main() {
  const app = express();

  await connect(env.DATABASE_URI).then(() => {
    console.log('connected to database.');
  });

  // middleware used
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  // routes used
  app.use('/api/v1/book', bookRouter);

  app.listen(env.PORT, () => {
    console.log(`server started on port ${env.PORT}.`);
  });
}

main().catch((err) => {
  console.log(err.message);
  process.exit(1);
});

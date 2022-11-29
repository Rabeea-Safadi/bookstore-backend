import * as express from 'express';
import * as cors from 'cors';
import * as env from './config/env';

async function main() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.listen(env.PORT, () => {
    console.log(`server started on port ${env.PORT}`);
  });
}

main().catch((err) => {
  console.log(err.message);
  process.exit(1);
});

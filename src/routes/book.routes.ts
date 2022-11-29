import { Router } from 'express';
import { addNewBook, getAllBooks } from '../controllers/book.controller';

const bookRouter = Router();

bookRouter.route('/').get(getAllBooks).post(addNewBook);

export default bookRouter;

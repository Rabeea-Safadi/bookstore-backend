import { Response, Request } from 'express';
import { Types } from 'mongoose';
import bookModel from '../models/book.model';

export interface IBookRequestBody {
  author: string;
  title: string;
  price: number;
  coverURL: string;
}

// returns all books
// GET /api/v1/book
export async function getAllBooks(req: Request, res: Response) {
  const books = await bookModel.find();
  res.status(200).json(books);
}

// sends status codes (200 - OK) | (500 - Failed)
// POST /api/v1/book
// { author, title, price, coverURL }
export async function addNewBook(req: Request, res: Response) {
  const { author, title, price, coverURL } = req.body as IBookRequestBody;

  try {
    await bookModel.create({
      author,
      coverURL,
      price,
      title,
    });

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
}

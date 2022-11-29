import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3030;
export const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/bookstore';

import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  coverURL: {
    type: String,
    required: true,
  },
});

export default model('book', bookSchema);

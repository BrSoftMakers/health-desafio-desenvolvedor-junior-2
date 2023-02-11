import { model, Schema } from 'mongoose';

export const Pet = model('Pet', new Schema({
  imagePath: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  animalType: {
    type: String,
    required: true,
  },
  animalBreed: {
    type: String,
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  instructorNumber: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }
}));

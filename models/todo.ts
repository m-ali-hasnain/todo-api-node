import { ITodo } from '../types/todo';
import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (v: string) {
          return v.length >= 3;
        },
        message: () => 'Name should be atleast 3 character long',
      },
    },
    description: {
      type: String,
      default: '',
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model<ITodo>('Todo', todoSchema);

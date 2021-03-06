import { Joi } from 'celebrate'

import { authorSchema } from '../authors/schemas'
import { publisherSchema } from '../publishers/schemas'

export const bookSchema = Joi.object({
  title: Joi.string().required(),
  cutter: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  author: authorSchema,
  authorId: Joi.number().positive(),
  publisher: publisherSchema,
  publisherId: Joi.number().positive(),
})

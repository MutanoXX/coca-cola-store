import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(2).max(100),
  description: z.string().max(500),
  price: z.number().positive(),
  image: z.string().url(),
  category: z.enum(['refrigerante', 'zero', 'energy', 'pack']),
  ml: z.number().positive(),
  stock: z.number().int().nonnegative(),
})

export const CartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().positive().max(99),
})

export const CheckoutSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10,11}$/),
  address: z.object({
    street: z.string().min(5),
    number: z.string().min(1),
    complement: z.string().optional(),
    neighborhood: z.string().min(2),
    city: z.string().min(2),
    state: z.string().length(2),
    zipCode: z.string().regex(/^\d{5}-?\d{3}$/),
  }),
})

export type Product = z.infer<typeof ProductSchema>
export type CartItem = z.infer<typeof CartItemSchema>
export type CheckoutForm = z.infer<typeof CheckoutSchema>
import api from './api'

export type ProductProps = {
  id: string
  name: string
  amount: number
  discount_amount: number
  img_url: string
}

type ResponseProps = {
  data: { sneakers: ProductProps[] }
}

export const getProducts = async (): Promise<ProductProps[]> => {
  const {
    data: { sneakers },
  }: ResponseProps = await api.get('/sneakers.json')

  return sneakers
}

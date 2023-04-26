import React, { useState, createContext, useContext, ReactNode } from 'react'
import { showMessage } from 'react-native-flash-message'

import { ProductProps } from '../../services/procucts'

export type CartItemProps = ProductProps & {
  quantity: number;
};

type CartContextProps = {
  cartItems: CartItemProps[];
  addProduct: (product: ProductProps) => void;
  deleteProduct: (product: ProductProps) => void;
  handleItem: (product: CartItemProps, action: 'add' | 'remove') => void;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])

  const addProduct = (product: ProductProps): void => {
    setCartItems([...cartItems, { ...product, quantity: 1 }])

    showMessage({
      message: 'Sucesso!',
      description: `${product.name} adicionado ao carrinho.`,
      type: 'success',
      icon: 'success',
    })
  };

  const deleteProduct = (product: ProductProps): void => {
    setCartItems(cartItems.filter(item => item.id !== product.id))

    showMessage({
      message: 'Removido',
      description: `${product.name} removido do carrinho.`,
      type: 'danger',
      icon: 'success',
    })
  };

  const handleItem = (item: CartItemProps, action: 'add' | 'remove'): void => {
    const arrayItems = cartItems.map(current => {
      if (current.id === item.id) {
        return {
          ...current,
          quantity:
            action === 'add'
              ? Number(current.quantity) + 1
              : Number(current.quantity) - 1,
        }
      };

      return current
    });

    setCartItems(arrayItems)
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addProduct, deleteProduct, handleItem }}
    >
      {children}
    </CartContext.Provider>
  )
};

export const useCart = (): CartContextProps => useContext(CartContext)

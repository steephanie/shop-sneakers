import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import { useCart, CartItemProps } from '../../components/ContextMessage'
import { formatCurrency } from '../../utils/format'
import { StatusBar, Layout, Heading, CartItem, Loader } from '../../components'

import {
  ModalProps,
  RenderDeleteProductModal,
} from '../../components/DeleteProductModal'

import {
  Header,
  BackButton,
  Container,
  CartItemList,
  EmptyContainer,
  EmptyImageContainer,
  EmptyImage,
  Description,
  AllProductsInfo,
  AllProductsText,
  BuyButton,
  BuyButtonText,
} from './styles'

import emptyCart from '../../assets/images/carrinho-vazio.png'

export const Cart = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [modal, setModal] = useState<ModalProps>({ visible: false })
  const [totalAmount, setTotalAmount] = useState<number>(0)

  const navigation = useNavigation()
  const { cartItems, handleItem, deleteProduct } = useCart()

  const navigateToBack = () => navigation.goBack()

  const handleDeleteProduct = (product: CartItemProps): void =>
    setModal({
      visible: true,
      productName: product.name,
      onRemove: () => deleteProduct(product),
    })

  const SumAllItems = () => {
    let totalAmount = 0

    cartItems.forEach(item => {
      totalAmount += Number(item.discount_amount) * Number(item.quantity)
    })

    setTotalAmount(totalAmount)
  }

  useEffect(() => {
    if (cartItems.length) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)

      return
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    SumAllItems()
  }, [cartItems])

  if (loading) {
    return (
      <>
        <StatusBar variant="secondary" />
        <Loader />
      </>
    )
  }

  return (
    <>
      <Layout>
        <StatusBar variant="secondary" />

        <Header>
          <BackButton onPress={navigateToBack} />
        </Header>

        <Container>
          {!!cartItems.length && (
            <Heading>
              {`${cartItems.length} ${
                cartItems.length > 1
                  ? 'produtos adicionados'
                  : 'produto adicionado'
              }:`}
            </Heading>
          )}

          <CartItemList
            data={cartItems}
            keyExtractor={(item: CartItemProps) => item.id}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => (
              <CartItem
                key={item.id}
                data={item}
                onAdd={() => handleItem(item, 'add')}
                onRemove={() => handleItem(item, 'remove')}
                onDelete={() => handleDeleteProduct(item)}
              />
            )}
            ListEmptyComponent={() => (
              <EmptyContainer>
                <EmptyImageContainer>
                  <EmptyImage source={emptyCart} resizeMode="contain" />
                </EmptyImageContainer>

                <Heading>Carrinho vazio</Heading>
                <Description>
                  Não sabe qual tenis comprar? {'\n'} Fica tranquilo estamos aqui
                  para ajudar você! :D
                </Description>
              </EmptyContainer>
            )}
          />
        </Container>

        {RenderDeleteProductModal({
          ...modal,
          onClose: () => setModal({ visible: false }),
        })}
      </Layout>

      {!!cartItems.length && (
        <AllProductsInfo>
          <AllProductsText>
            {`Valor total: ${formatCurrency(totalAmount)}`}
          </AllProductsText>

          <BuyButton>
            <BuyButtonText>Comprar</BuyButtonText>
          </BuyButton>
        </AllProductsInfo>
      )}
    </>
  )
}

import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'

import { useCart } from '../../components/ContextMessage'
import { getProducts, ProductProps } from '../../services/procucts'

import {
  Layout,
  ProductCard,
  Heading,
  StatusBar,
  Loader,
} from '../../components'

import {
  ModalProps,
  RenderDeleteProductModal,
} from '../../components/DeleteProductModal'

import {
  Header,
  Logo,
  CartButton,
  CartIcon,
  NumberOfCartProducts,
  Container,
  ProductList,
  MenuIcon,
} from './styles'

import logoImg from '../../assets/logo.png'
import { Text, TouchableOpacity, View } from 'react-native'

export const Products = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<ProductProps[]>([])
  const [modal, setModal] = useState<ModalProps>({ visible: false })

  const navigation = useNavigation()
  const { cartItems, addProduct, deleteProduct } = useCart()
  

  const loadProducts = async (): Promise<void> => {
    setLoading(true)

    try {
      const response = await getProducts()
      setProducts(response)
    } catch {
      showMessage({
        message: 'Ops!',
        description: 'Não foi possível carregar os produtos.',
        type: 'danger',
      })
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  const navigateToCart = (): void => navigation.navigate('Cart')
  const navigateToMenu = (): void => navigation.navigate('Menu')

  const findProduct = (product: ProductProps): boolean =>
    !!cartItems.find(item => item.id === product.id)

  const handleDeleteProduct = (product: ProductProps): void =>
    setModal({
      visible: true,
      productName: product.name,
      onRemove: () => deleteProduct(product),
    })

  const handleProduct = (product: ProductProps): void =>
    findProduct(product) ? handleDeleteProduct(product) : addProduct(product)

  useEffect(() => {
    loadProducts()
  }, [])

  if (loading) {
    return (
      <Layout>
        <StatusBar variant="primary" />

        <Header>
        <TouchableOpacity onPress={navigateToMenu} style={{ flexDirection: 'row' }}>
          <MenuIcon />
        </TouchableOpacity>

          <Logo source={logoImg} resizeMode="contain" />
          <CartButton onPress={navigateToCart} style={{ flexDirection: 'row' }}>
            <CartIcon />
            <NumberOfCartProducts>{''}</NumberOfCartProducts>
          </CartButton>
        </Header>

        <Loader />
      </Layout>
    )
  }

  return (
    <Layout>
      <StatusBar variant="primary" />

      <Header>
        <TouchableOpacity onPress={navigateToMenu}>
          <MenuIcon />
        </TouchableOpacity>

        <Logo source={logoImg} resizeMode="contain" />

        <CartButton onPress={navigateToCart} style={{ flexDirection: 'row' }}>
          <CartIcon />
          <NumberOfCartProducts>{cartItems.length || ''}</NumberOfCartProducts>
        </CartButton>
      </Header>

      <Container>
        <Heading>Escolha seu tenis</Heading>

        <ProductList
          data={products}
          keyExtractor={(item: ProductProps) => item.id}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <ProductCard
              data={item}
              onPress={() => handleProduct(item)}
              hasCurrentProduct={findProduct(item)}
            />
          )}
        />
      </Container>

      {RenderDeleteProductModal({
        ...modal,
        onClose: () => setModal({ visible: false }),
      })}
    </Layout>
  )
}

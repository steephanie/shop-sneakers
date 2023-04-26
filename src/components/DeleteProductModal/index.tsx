import React from 'react'
import { Modal, ModalProps as RNModalProps, } from 'react-native'

import { Heading } from '../Heading'

import {
  Container,
  Content,
  Description,
  ButtonGroup,
  Button,
  ButtonText,
} from './styles'

type DeleteProductModalProps = RNModalProps & {
  productName: string;
  onClose: () => void;
  onRemove: () => void;
}

export type ModalProps = {
  visible: boolean;
  productName?: string;
  onClose?: () => void;
  onRemove?: () => void;
}

export const DeleteProductModal = ({
  productName,
  onClose,
  onRemove,
  ...rest
}: DeleteProductModalProps) => {
  const actions = [
    { id: '1', text: 'Cancelar', type: 'cancel', onPress: onClose },
    { id: '2', text: 'Remover', type: 'remove', onPress: onRemove },
  ]

  return (
    <Modal transparent animationType="fade" {...rest}>
      <Container>
        <Content>
          <Heading>Remover produto</Heading>
          <Description>
            {`Você deseja realmente remover ${productName} do carrinho?`}
          </Description>

          <ButtonGroup>
            {actions.map(item => (
              <Button key={item.id} type={item.type} onPress={item.onPress}>
                <ButtonText type={item.type}>{item.text}</ButtonText>
              </Button>
            ))}
          </ButtonGroup>
        </Content>
      </Container>
    </Modal>
  )
};

export const RenderDeleteProductModal = (modal: ModalProps) => {
  const { visible, productName, onClose, onRemove } = modal

  return (
    <DeleteProductModal
      visible={visible}
      productName={productName as string}
      onClose={() => onClose && onClose()}
      onRemove={() => {
        onRemove && onRemove()
        onClose && onClose()
      }}
    />
  )
};

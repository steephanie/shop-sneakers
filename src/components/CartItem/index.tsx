import React from 'react'

import { CartItemProps } from '../ContextMessage'
import { formatCurrency } from '../../utils/format'

import {
  Container,
  QuantityOfItems,
  AddItem,
  NumberContainer,
  NumberText,
  RemoveItem,
  RemoveIcon,
  Item,
  Image,
  TextGroup,
  Name,
  Amount,
  DeleteButton,
  TrashIcon,
} from './styles'

type CartItemComponentProps = {
  data: CartItemProps;
  onAdd: () => void;
  onRemove: () => void;
  onDelete: () => void;
}

export const CartItem = ({
  data,
  onAdd,
  onRemove,
  onDelete,
}: CartItemComponentProps) => {
  const { name, discount_amount, img_url, quantity } = data

  return (
    <Container>

      <QuantityOfItems>
        <AddItem onPress={onAdd} />

        <NumberContainer>
          <NumberText>{quantity}</NumberText>
        </NumberContainer>

        <RemoveItem>
          {quantity > 1 && <RemoveIcon onPress={onRemove} />}
        </RemoveItem>
      </QuantityOfItems>

      <Item>
        <Image source={{ uri: img_url }} resizeMode="contain" />

        <TextGroup>
          <Name>{name}</Name>
          <Amount>
            {formatCurrency(Number(discount_amount) * Number(quantity))}
          </Amount>
        </TextGroup>
      </Item>

      <DeleteButton onPress={onDelete}>
        <TrashIcon />
      </DeleteButton>
    </Container>
  )
}

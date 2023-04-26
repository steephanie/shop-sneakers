import React from 'react'

import { Text } from './styles'

type HeadingProps = {
  children: string
}

export const Heading = ({ children }: HeadingProps) => <Text>{children}</Text>

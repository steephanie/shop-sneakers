import React, { ReactNode } from 'react'

import { Container } from './styles'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <Container>{children}</Container>
)

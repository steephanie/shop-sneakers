import styled from "styled-components/native";
import { colors } from "../../styles/theme/colors";
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 20px;
  //align-items: center;
`

export const Description = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const Header = styled.View`
  background-color: #F1F1F1 ;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
`

export const MenuIcon = styled(Ionicons).attrs({
  name: 'menu',
  size: 32,
})`
  color: ${colors.GREEN100};
`;

export const Content = styled.View`
  display: flex;
  margin: 20px 10px;
`;

export const Box = styled.View`
  display: flex;
  border-style: solid;
  border-color: red;
  border-radius: 8px;
`; 

export const Title = styled.Text`
  font-size: 15px;
  padding: 0px 8px ;
`;

export const FooterImage = styled.View`
  display: flex;
  margin-top: 10px;
`;

export const Image = styled.Image`
  width: 302px;
  height: 170px;
  align-self: center;
`

export const LabelFooter = styled.Text`
  font-size: 12px;
   padding: 0px 35px ;
   text-align: center;
   color: ${colors.GRAY100};

`;
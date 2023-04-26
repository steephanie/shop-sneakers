import { useNavigation } from "@react-navigation/native";
import { Heading, Layout, StatusBar } from "../../components";
import { Box, Container, Content, Description, FooterImage, Header, Image, LabelFooter, Title } from "./styles";
import { BackButton } from "../Cart/styles";

export type MenuProps = {
    title?: string;
};

import michaeljordan from '../../assets/images/michael-jordan.png'

export const Menu = ({
    title,
}: MenuProps) => {
    const navigation = useNavigation()
    const navigateToBack = () => navigation.goBack()

    return (
        <>
            <Layout>
                <StatusBar variant="secondary" />
                <Header>
                    <BackButton onPress={navigateToBack} />
                </Header>

                <Container>
                    <Description>Sobre o mundo Sneakers</Description>

                    <Content>
                        <Box>
                            <Title>
                            Os tênis fazem parte da vida da maioria das pessoas, podem compor looks casuais, esportivos e até produções mais sofisticadas. Ao longo da história, foram símbolos de jovialidade, rebeldia, e conquistaram uma legião de fãs graças a lendas do basquete e do hip hop, que deram origem à cultura sneaker.
                            {'\n'}{'\n'}
                            Criados para a prática esportiva, ainda no século 19, esses calçados se tornaram um verdadeiro estilo de vida no fim do século 20. Eles têm uma história interessante. Nasceram, basicamente, para a prática de esportes. Antes mesmo de tomarem a forma que se conhece atualmente, alguns marcos históricos foram importantes na trajetória desta peça.
                            {'\n'}{'\n'}
                            Os rappers e astros do hip hop popularizaram ainda mais a cultura dos sneakers
                            {'\n'}{'\n'}
                            Atualmente, existem tênis para todos os gostos, possibilitando inúmeras possibilidades para o guarda-roupa feminino e masculino. Além disso, não há sinais de que a cultura dos sneakerheads, como são chamados os fãs de tênis, vai acabar tão cedo. Segundo artigo da Vogue Paris, existe uma projeção de 2018 indicando que esse mercado atingirá U$ 95,14 bilhões até o ano de 2025.
                            </Title>
                        </Box>

                        <FooterImage>
                            <Image source={michaeljordan} resizeMode="contain" />
                            <LabelFooter>
                                Michael Jordan com um Nike Air Jordan 1. O Tênis foi para leilão o lance do vencedor foi de US$ 560.000 (valor equivalente a mais de R$ 3 milhões).
                            </LabelFooter>
                        </FooterImage>

                    </Content>

                </Container>
            </Layout>
        </>
    )
}
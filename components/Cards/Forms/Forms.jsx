import { Textarea, Text, Container, css} from "@nextui-org/react";
import { Wrap } from './style'
import ButtonLinkedin from '../../Buttons/ButtonLinkedin'
import ButtonGithub from '../../Buttons/ButtonGithub'
import { WrapperButtons } from "../../../styles/WrapperButtons";

export default function Forms () {
    return (
        <Container>
            <Container xs >
                <Text
                    h1
                    css=
                    {{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        display:'inline-flex'
                    }
                    }
                    > 👩‍🎤 Informações Gerais
                    </Text>
                <Wrap>
                    <Textarea
                    placeholder='Nome'
                    width="100%"
                    bordered
                    status="success"
                    animated={true}
                    />
                    <Textarea
                    placeholder='E-mail'
                    width="100%"
                    bordered
                    status="success"
                    />
                    <Textarea
                    placeholder='#Apresente-se'
                    width='100%'
                    bordered
                    status="success"
                    />
                </Wrap>
                <WrapperButtons>
                    <ButtonLinkedin />
                    <ButtonGithub />
                </WrapperButtons>
            </Container> 
        </Container>
    )
}
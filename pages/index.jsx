import { Container, Text } from "@nextui-org/react"
import { ContainerAddons, Content } from "../styles/pages/Home"
import { GotoRegister } from "../components/Buttons/GotoRegister"
import Link from "next/link"

const web3devCopy = 'A Web3dev tem parceria com grandes empresas que nos disponibilizam vagas 🌏'

export default function Home () {
    return (
    <Container css={ContainerAddons} >
        <Content>
            <div>
                <Text h1 css={{textAlign:'Center'}}>
                Entre para o banco de talentos da
                </Text>
                <Text
                h1
                css={{
                textGradient: "45deg, $green600 -20%, $purple600 50%",
                textAlign:'center',
                }}
                weight="bold"
                >
                    WEB3DEV 🔥
                </Text>
            </div>

            <Link href='/register'>
                <GotoRegister />
            </Link>

            <Text css={{textAlign:'Center'}} >
                {web3devCopy}
            </Text>
        </Content>
    </Container>
    )
}
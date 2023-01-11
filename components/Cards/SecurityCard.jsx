import { Container, Button, Text, Popover } from "@nextui-org/react";

import { MdDoneOutline } from 'react-icons/md'

export default function SecurityCard () {
    return (
        <Container>
            <Popover>
                <Popover.Trigger>
                    <Button auto flat color={"success"} bordered size='xs' shadow ripple animated> <MdDoneOutline /> </Button>
                </Popover.Trigger>
                <Popover.Content>
                    <Text>A Web3dev não divulga seus dados para terceiros.</Text>
                </Popover.Content>
            </Popover>
        </Container>
    )
}


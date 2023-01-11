import { Button, Text} from "@nextui-org/react";
import { AiFillLinkedin } from 'react-icons/ai'

export default function ButtonLinkedin () {
    return (
        <>
        <Button 
        color='primary'
        shadow
        size='lg'
        icon={<AiFillLinkedin size={30}/>}
        center
        >   
            Conectar Linkedin
        </Button>    
        </>
    )
}
import { Button, Text } from "@nextui-org/react";
import { AiFillGithub } from 'react-icons/ai'

export default function ButtonLinkedin () {
    return (
        <>
        <Button 
        color={"secondary"}
        size='lg'
        shadow
        icon={<AiFillGithub size={30}/>}
        
        >  
            Conectar Github
        </Button>    
        </>
    )
}
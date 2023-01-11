import { Button } from "@nextui-org/react";
import { MdDoneOutline } from 'react-icons/md'

export default function SubmitButton () {
    return (
        <>
        <Button 
        color="success"
        shadow
        icon={ <MdDoneOutline size={20} color={'white'} />}
        >    
        </Button>    
        </>
    )
}
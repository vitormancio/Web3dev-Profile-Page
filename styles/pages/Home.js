import { styled } from "@nextui-org/react";

export const ContainerAddons = {
    height:'87vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}

export const Content = styled('div', {
    display:'flex',
    flexDirection:'column',
    gap:'$10',

    'button': {
        width:'100%'
    }
})
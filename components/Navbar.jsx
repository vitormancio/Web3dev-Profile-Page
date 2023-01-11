import { Navbar, Text } from "@nextui-org/react";
import { Avatar } from '@nextui-org/react';

import Image from 'next/image'
import Link from "next/link";
import SecurityCard from "./Cards/SecurityCard";

const logoStyle = {
    textTransform:'uppercase',
    fontWeight:'bold'
}

export function Navigation () {
    return (
        <Navbar>
            <Link href='/'>
                <Navbar.Brand>
                    <Image 
                        src='/web3dev-logo.svg'
                        width={50}
                        height={50}
                        alt='web3dev logo'
                    />
                    <Text css={logoStyle}>web3dev</Text>
                </Navbar.Brand>
            </Link>
            <Navbar.Content>
                <SecurityCard/>
                <Avatar
                src="https://i.imgur.com/u89SADo.png" 
                bordered 
                color='success'
                />
                <Text css={logoStyle} >
                    vitordev
                </Text>
            </Navbar.Content>
        </Navbar>   
    )
}

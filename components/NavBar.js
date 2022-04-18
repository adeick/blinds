import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import {
    Flex,
    Text,
    Button,
    IconButton,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useColorMode,
    useColorModeValue,
    useBreakpointValue,
    Spacer
} from '@chakra-ui/react'

import { MdGraphicEq } from 'react-icons/md';
import { SunIcon, MoonIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react';

const NavBar = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        setWindowSize(window.outerWidth);
        let resize = function () { setWindowSize(window.outerWidth) };
        window.addEventListener('resize', resize, false);
        return (() => {
            window.removeEventListener('resize', resize, false);
        });
    }, [windowSize]);

    const phone = windowSize < 768; //number should be adjusted

    const { data: session } = useSession();

    let button;

    if (props.login) {
        button = <Link href="../">
            <Button mr="10%" h="30px" as="a">
                <Text>
                    Home
                </Text>
            </Button>
        </Link>;
    }
    else if (session) {
        button = <Button mr="10%" h="30px" onClick={signOut}>
            <Text>
                Logout
            </Text>
        </Button>;
    } else {
        button =
            <Link href="../login">
                <Button mr="10%" h="30px"
                    as="a">
                    {/* // onClick={signIn}> */}
                    <Text>
                        Login
                    </Text>
                </Button>
            </Link>;
    }

    return (
        <Flex bg={useColorModeValue("gray.300", "gray.800")} h="6vh" w="100%"
            alignItems="center" px="30px" position="fixed" top="0" zIndex="2">
            <IconButton size="md" mr="30px" aria-label='Color Mode' icon={useColorModeValue(<MoonIcon />, <SunIcon />)} onClick={toggleColorMode} />
            <Spacer />
            {button}
        </Flex>
    )
};

export default NavBar;

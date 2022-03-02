
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

import Link from "next/link"

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


    return (
        <Flex bg={useColorModeValue("gray.300", "gray.800")} h="6vh" w="100%"
            alignItems="center" px="30px" position="fixed" top="0" zIndex="2">
            <IconButton size="md" mr="30px" aria-label='Search database' icon={useColorModeValue(<MoonIcon />, <SunIcon />)} onClick={toggleColorMode} />
            <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        //as={Link} to='#'
                        href="#"
                    >
                        Locations
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {phone ? <></> :
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            //as={Link} to='#'
                            href="#"
                        >
                            Coover
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                }
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink><Text as="b">{useBreakpointValue({ base: props.shortPage, md: props.page })}</Text></BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Spacer />
            <Button mr="10%" h="30px">
                <Text>
                    Log In
                </Text>
            </Button>
        </Flex>
    )
};

export default NavBar;

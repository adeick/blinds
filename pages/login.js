import Head from 'next/head'
import {
    Image,
    Box,
    Flex,
    Icon,
    IconButton,
    Button,
    ButtonGroup,
    Drawer,
    Text,
    useColorMode,
    useColorModeValue,
    VStack, Stack, Spacer,
    useBreakpointValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';


import { ArrowForwardIcon } from '@chakra-ui/icons'
import { FaMoon, FaCloudSun, FaCloud, FaSun } from 'react-icons/fa';

import BlindSlider from '../components/BlindSlider'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';





const Login = () => {
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

    const bgHeight = useBreakpointValue({ base: '144vh', md: '94vh' });
    const presetTextMargin = useBreakpointValue({ base: '1vh', md: "6vh" });
    const rowColumn = useBreakpointValue({ base: 'row', md: 'column' });
    const columnRow = useBreakpointValue({ base: 'column', md: 'row' });
    const smallMedium = useBreakpointValue({ base: 'sm', md: 'md' });
    const manualBoxHeight = useBreakpointValue({ base: '100vh', md: '50vh' });
    const trueFalse = useBreakpointValue({ base: true, md: false });

    const phone = windowSize < 768; //number should be adjusted

    return (
        <div id="Home">
            <NavBar page="Authentication" />
            {/* TODO */}
            <Flex bgGradient={useColorModeValue('linear-gradient(to-t, orange.300 0%, orange.200 33%, blue.100 83%, blue.200 100%)',
                'linear-gradient(to-t, orange.900 0%, #4d1215 33%, gray.900 83%, #0c0d12 100%)')}
                h="150vh" w="100%" pt="5vh" direction="column" alignItems="center" mt="6vh">
                <Text as="b" fontSize={["32px", "32px", "48px", "64px"]} align="center" maxWidth={["85vw", "55vw"]}
                    mb={phone ? "1vh" : "6vh"}>
                    Automate your Windows with <Text as="b" color={useColorModeValue("orange.300", "orange.300")}>ISU Blind Controller</Text>
                </Text>
                <Text fontSize={["16px", "16px", "20px", "28px"]} align="center" maxWidth={["90vw", "55vw"]}>
                    The ISU Blind Controller is a project designed to minimize
                    glare from the sun while maximizing productivity. We are retrofitting blinds in the
                    TLA with motor controllers to allow for easy and accessible control of the shades.
                    {/* The shadiest Senior Design Project yet! */}
                </Text>
                <Stack direction={["column", "row"]} spacing="20px" mt="50px">
                    <Button size="lg"
                        bg={useColorModeValue("orange.300", "orange.400")} _hover={{ bg: useColorModeValue("orange.400", "orange.300") }} _active={{ bg: useColorModeValue("orange.500", "orange.200") }}
                        rightIcon={<Icon as={ArrowForwardIcon} color="black" />}
                    >
                        <Text color="black">
                            Log In
                        </Text>
                    </Button>
                    <Button size="lg">
                        <Text>
                            Try a Demo
                        </Text>
                    </Button>
                </Stack>
                <VStack spacing="5vh" w="100%">
                    {/* <Flex bg={'orange.200'} w="80vw" py="3vh" pr="80px" pl="30px" borderRadius="15px" direction={rowColumn}>
                        <Text color="black" as="b" mb={phone ? "1vh" : "6vh"} position="absolute">
                            Get Started with the ISU Blind Controller
                        </Text>


                    </Flex> */}
                    {/* <Image w="30%" src="/blinds.png" /> */}
                    {/* <Image w="30%" src="/blinds.png" /> */}
                    {/* <Flex bg={useColorModeValue("orange.300", "orange.300")} direction="column" h={phone ? "100vh" : "50vh"} w="80vw" borderRadius="15px">
                        <Text pl="30px" py="3vh" color="black" as="b" position="absolute">
                            Manual
                        </Text>
                    </Flex> */}

                </VStack>
                <Spacer />
                <Footer />
            </Flex >
        </div >
    )
};

export default Login;

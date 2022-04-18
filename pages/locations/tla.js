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
    HStack,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { FaMoon, FaCloudSun, FaCloud, FaSun } from 'react-icons/fa';

import BlindSlider from '../components/BlindSlider';
import NavBar from '../components/NavBar';

const TLA = () => {
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

    const rowColumn = useBreakpointValue({ base: 'row', md: 'column' });
    const smallMedium = useBreakpointValue({ base: 'sm', md: 'md' });

    const phone = windowSize < 768; //number should be adjusted

    return (
        <div id="TLA">
            <NavBar page="Transformative Learning Area (TLA)" shortPage="TLA" />
            <Flex bg={useColorModeValue("gray.200", "gray.900")} h={phone ? "144vh" : "94vh"} w="100%" mt="6vh" py="5vh">
                <VStack spacing="5vh" w="100%">
                    <Flex bg={'orange.200'} h="25vh" w="80vw" py="3vh" pr="80px" pl="30px" borderRadius="15px" direction={rowColumn}>
                        <Text color="black" as="b" mb={phone ? "1vh" : "6vh"} position="absolute">
                            Presets
                        </Text>
                        <Stack direction={['column', 'row']} w="100%" h="100%" alignItems='flex-end'>
                            <Spacer />
                            <Button my="5px" w="110px" variant="solid" size={smallMedium}
                                bg="gray.900" _hover={{ bg: "gray.700" }} _active={{ bg: "gray.800" }} leftIcon={<Icon as={FaMoon} color="yellow.200" />}>
                                <Text color="white">
                                    All Closed
                                </Text>
                            </Button>
                            <Spacer />
                            <Button my="5px" w="110px" variant="solid" size={smallMedium}
                                bg="gray.600" _hover={{ bg: "gray.500" }} _active={{ bg: "gray.400" }} leftIcon={<Icon as={FaCloud} color="gray.300" />}>
                                <Text color="white">
                                    All Dim
                                </Text>
                            </Button>
                            <Spacer />
                            <Button my="5px" w="110px" variant="solid" size={smallMedium}
                                bg="gray.50" _hover={{ bg: "gray.200" }} _active={{ bg: "gray.100" }} leftIcon={<Icon as={FaSun} color="yellow.500" />}>
                                <Text color="black">
                                    All Open
                                </Text>
                            </Button>
                            <Spacer />
                        </Stack>
                    </Flex>
                    <Flex bg={useColorModeValue("orange.300", "orange.300")} direction="column" h={phone ? "100vh" : "50vh"} w="80vw" borderRadius="15px">
                        <Text pl="30px" py="3vh" color="black" as="b" position="absolute">
                            Manual
                        </Text>
                        <Flex w="100%" h="100%" pt="8%"
                            direction={phone ? "column" : "row"}
                            alignItems="center" pb="30px">
                            <Spacer />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <Spacer />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <Spacer />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <Spacer />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <Spacer />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <BlindSlider phone={phone} />
                            <Spacer />
                        </Flex>
                    </Flex>
                </VStack>
            </Flex >
        </div >
    )
};

export default TLA;

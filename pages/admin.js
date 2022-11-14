import Head from 'next/head'
import Link from 'next/link'

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
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { FaMoon, FaCloudSun, FaCloud, FaSun } from 'react-icons/fa';
import { ArrowForwardIcon } from '@chakra-ui/icons';


import BlindSlider from '/components/BlindSlider';
import NavBar from '/components/NavBar';
import Footer from '/components/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { updateBlinds } from "/store/blinds/action";

import { signIn, signOut, useSession } from 'next-auth/react'



const Admin = () => {
    //const initialState = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
    //const { tlaBlinds, setTlaBlinds } = useState(initialState);
    const dispatch = useDispatch();
    const { data: session } = useSession();

    const { colorMode, toggleColorMode } = useColorMode();
    const [windowSize, setWindowSize] = useState(0);
    //0 is manual, 1 is closed, 2 is dim, 3 is open
    let admin = false;

    useEffect(() => {
        setWindowSize(window.outerWidth);
        let resize = function () { setWindowSize(window.outerWidth) };
        window.addEventListener('resize', resize, false);
        return (() => {
            window.removeEventListener('resize', resize, false);
        });
    }, [windowSize]);


    // useEffect(() => {

    // }, [session]);

    const applyChanges = (blindArray) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blindArray)
        };
        // fetch('https://reqres.in/api/posts', requestOptions) //TODO
        //     .then(response => response.json());

        // fetch('http://sddec22-11.ece.iastate.edu:8080/blinds') //Un-comment THIS one
        //     .then(response => response.json())
        //     .then(data => dispatch(updateBlinds((data.total)))); //This will be post request not GET request
        // console.log("HERE!");
        //dispatch(updateBlinds(blindArray)); //comment this
        //     getChanges();
    }

    // const getChanges = () => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('http://sddec22-11.ece.iastate.edu:8080/blinds')
    //         .then(response => response.json())
    //         .then(data => dispatch(updateBlinds((data.total)))); //TODO
    // }

    const rowColumn = useBreakpointValue({ base: 'row', md: 'column' });
    const smallMedium = useBreakpointValue({ base: 'sm', md: 'md' });

    const phone = windowSize < 768; //number should be adjusted
    let lastSpacer = phone ? <></> : <Spacer />;

    const determineAdmin = () => {
        let adminList = ["adeick"];
        admin = false;
        adminList.forEach(name => {
            if (session.user.email == name + "@iastate.edu") {
                admin = true;
            }
        });
        return admin;
    }

    return (
        <>
            {session && determineAdmin() && (
                <div id="Demo">
                    <NavBar page="Admin" shortPage="Admin" />
                    <Flex bgGradient={useColorModeValue('linear-gradient(to-t, orange.300 0%, orange.200 33%, blue.100 83%, blue.200 100%)',
                        'linear-gradient(to-t, orange.900 0%, #4d1215 33%, gray.900 83%, #0c0d12 100%)')}
                        h={phone ? "170vh" : "130vh"} w="100%" mt="6vh" pt="5vh">
                        <VStack spacing="5vh" w="100%">
                            <Flex bg={useColorModeValue('orange.300', 'orange.800')} maxH="105vh" w="80vw" py="3vh" pr="80px" pl="30px" borderRadius="15px" direction={rowColumn}>
                                <TableContainer>
                                    <Table variant='striped' colorScheme='orange'>
                                        <TableCaption placement="top">Admin Page</TableCaption>
                                        <Thead>
                                            <Tr>
                                                <Th>User</Th>
                                                <Th>Email</Th>
                                                <Th isNumeric>Timestamp</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>Naughty Guy</Td>
                                                <Td>verybad@iastate.edu</Td>
                                                <Td isNumeric>Thu, 10 Nov 2022 19:26:12 +0000</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Naughty Guy</Td>
                                                <Td>verybad@iastate.edu</Td>
                                                <Td isNumeric>Thu, 10 Nov 2022 19:25:35 +0000</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Naughty Guy</Td>
                                                <Td>verybad@iastate.edu</Td>
                                                <Td isNumeric>Thu, 10 Nov 2022 19:24:25 +0000</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Productive Student</Td>
                                                <Td>fourpointoh@iastate.edu</Td>
                                                <Td isNumeric>Wed, 09 Nov 2022 19:24:25 +0000</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Mister Golden Sun</Td>
                                                <Td>mgs@iastate.edu</Td>
                                                <Td isNumeric>Wed, 02 Nov 2022 19:24:25 +0000</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Place Holder</Td>
                                                <Td>placeholder@iastate.edu</Td>
                                                <Td isNumeric>Tue, 01 Nov 2022 18:24:25 +0000</Td>
                                            </Tr>
                                        </Tbody>
                                        <Tfoot>
                                            <Tr>
                                                <Th>User</Th>
                                                <Th>Email</Th>
                                                <Th isNumeric>Timestamp</Th>
                                            </Tr>
                                        </Tfoot>
                                    </Table>
                                </TableContainer>
                            </Flex>
                        </VStack>
                        <Spacer />
                        <Footer />
                    </Flex >
                </div >
            )}
            {!(session && determineAdmin()) && (
                <>
                    <NavBar page="Transformative Learning Area (TLA)" shortPage="TLA" />
                    <Flex bgGradient={useColorModeValue('linear-gradient(to-t, orange.300 0%, orange.200 33%, blue.100 83%, blue.200 100%)',
                        'linear-gradient(to-t, orange.900 0%, #4d1215 33%, gray.900 83%, #0c0d12 100%)')}
                        h={phone ? "170vh" : "130vh"} w="100%" mt="6vh" pt="5vh">
                        <VStack spacing="5vh" w="100%">
                            <Text fontSize={["16px", "16px", "20px", "28px"]} align="center" maxWidth={["70vw", "35vw"]} mt="20vh" mb="50px">
                                This page is only for the admins of ISU Blind Controller!
                                {/* The shadiest Senior Design Project yet! */}
                            </Text>
                            <Stack direction={["column", "row"]} spacing="20px">
                                <Button size="lg"
                                    bg={useColorModeValue("orange.300", "orange.400")} _hover={{ bg: useColorModeValue("orange.400", "orange.300") }} _active={{ bg: useColorModeValue("orange.500", "orange.200") }}
                                    rightIcon={<Icon as={ArrowForwardIcon} color="black" />}
                                    onClick={() => signIn()}
                                >
                                    <Text color="black">
                                        Log In
                                    </Text>
                                </Button>

                                <Link href="/demo">
                                    <Button size="lg" as="a">
                                        <Text>
                                            Try a Demo
                                        </Text>
                                    </Button>
                                </Link>
                            </Stack>
                        </VStack>
                        <Spacer />
                        <Footer />
                    </Flex >
                </>
            )}
        </>
    )
};

export default Admin;

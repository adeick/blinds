import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
    useBreakpointValue,
} from '@chakra-ui/react'

import { MdGraphicEq } from 'react-icons/md';
import { useState } from 'react';


const BlindSlider = ({ phone, updateVar }) => {
    //This variable is for ALL sliders, not just this component
    // const [updated, setUpdated] = useState(updateVar);


    return (
        <Box h={phone ? "4.5%" : "70%"} w={phone ? "70%" : "4%"}>
            <Slider
                aria-label='slider-ex-3'
                defaultValue={60}
                orientation={phone ? 'horizontal' : 'vertical'}
                minH={phone ? "40px" : '100px'}
                minW={phone ? '100px' : '10px'}
                step={10}
                onChangeEnd={() => {
                    updateVar(true)
                }}
            >
                <SliderTrack bg='red.100'>

                    <SliderFilledTrack bg='tomato' />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                    <Box
                        color="tomato"
                        as={MdGraphicEq}
                    />
                </SliderThumb>
            </Slider>

        </Box >
    )
};

export default BlindSlider;

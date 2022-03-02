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

const BlindSlider = (props) => {

    return (
        <Box h={props.phone ? "4%" : "70%"} w={props.phone ? "70%" : "4%"}>
            <Slider
                aria-label='slider-ex-3'
                defaultValue={60}
                orientation={props.phone ? 'horizontal' : 'vertical'}
                minH={props.phone ? "40px" : '100px'}
                minW={props.phone ? '100px' : '10px'}
                step={10}
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

import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
} from '@chakra-ui/react'

import { MdGraphicEq } from 'react-icons/md';

const BlindSlider = (props) => {
    return (
        <Box h="70%" w="4%">
            <Slider
                aria-label='slider-ex-3'
                defaultValue={60}
                orientation='vertical'
                minH='32'
            >
                <SliderTrack bg='red.100'>

                    <SliderFilledTrack bg='tomato' />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                    <Box color='tomato' as={MdGraphicEq} />
                </SliderThumb>
            </Slider>
        </Box>
    )
};

export default BlindSlider;

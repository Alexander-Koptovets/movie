import React, { FC } from 'react';
import { SlideType } from '../../types';

import { SlideBox } from '../Slide';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Box, ButtonGroup, Button } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { Link } from 'react-router-dom';

import { slides } from '../../mock';

import styles from './Style.module.css';

export const Welcome: FC = () => {
    return (
        <Box className={styles.home}>
            {(window.localStorage.getItem('name') ||
            window.localStorage.getItem('email') ||
            window.localStorage.getItem('password')) && (
                <Link to='/signup'>
                    <Button>Continue registration</Button>
                </Link>
            )}
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={40}
                totalSlides={3}
            >
                <Slider>
                    {slides.map((slide: SlideType, index: number) => {
                        return (
                            <Slide key={slide.path} index={index}>
                                <SlideBox
                                    image={slide.image}
                                    text={slide.text}
                                    path={slide.path}
                                    btnText={slide.btnText}
                                />
                            </Slide>
                        )
                    })}
                </Slider>
                <ButtonGroup variant='contained' className={styles.btns}>
                    <ButtonBack >
                        <ArrowCircleLeftIcon />
                    </ButtonBack>
                    <ButtonNext>
                        <ArrowCircleRightIcon />
                    </ButtonNext>
                </ButtonGroup>
            </CarouselProvider>
        </Box>
    )
}
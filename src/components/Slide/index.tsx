import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { Grid, Button, Typography, Box } from '@mui/material';

import styles from './Style.module.css';

interface SlideBoxType {
    image: string,
    text: string,
    path: string,
    btnText: string,
}

export const SlideBox: FC<SlideBoxType> = ({ image, text, path, btnText }) => {
    return (
        <Grid 
            className={styles.slide}
            container
            spacing={4}
            direction='column'
            justifyContent='center'
            alignItems='center'
            width='100%'
            height='100%'
            style={{ backgroundImage: `url(${image})` }}
        >
            <Box className={styles.text}>
                <Typography color='#fff'>{text}</Typography>
            </Box>
            <Link to={path}>
                <Button variant='contained'>{btnText}</Button>
            </Link>
        </Grid>
    )
}
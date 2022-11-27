import React, { FC, useState, useCallback } from 'react';

import { Modal } from '../Modal';
import { Grid, Typography, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import styles from './Style.module.css';

interface CardMovieProps {
    isLogged: boolean,
    name: string,
    genre: string,
    director: string,
    year: string,
    img: string,
    imdb: number,
    plot: string, 
    writer: string,
    actors: string,
}

export const CardMovie: FC<CardMovieProps> = ({
    isLogged,
    name,
    genre,
    director,
    year,
    img,
    imdb,
    plot, 
    writer,
    actors,
}) => {
    const [isModal, setIsModal] = useState<boolean>(false);

    const onCloseModal = useCallback(() => setIsModal(false), [isModal]);

    return (
        <Grid className={styles.card} container direction='column' alignItems='center' padding='10px'>
            <Grid
                className={styles.img}
                container
                justifyContent='center'
                alignItems='center'
                style={{ backgroundImage: `url(${img})` }}
            >
                <Typography className={styles.name} color='#fff'>{name}</Typography>
                {imdb < 7 && (
                    <Box className={styles.icon}>
                        <ThumbDownIcon />
                    </Box>
                )}
            </Grid>
            {isLogged && (
                <Grid container justifyContent='space-around' alignItems='center' padding='10px'>
                    <InfoIcon onClick={() => setIsModal(true)} />
                    <Typography>{`Genre: ${genre}`}</Typography>
                    <Typography>{`Director: ${director}`}</Typography>
                <Typography>{`Year: ${year}`}</Typography>
            </Grid>
            )}
            {isModal && (
                <Modal
                    imdb={imdb}
                    plot={plot}
                    writer={writer}
                    actors={actors}
                    onCloseModal={onCloseModal}
                />
            )}
        </Grid>
    )
}
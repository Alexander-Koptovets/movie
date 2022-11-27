import React, { FC } from 'react';

import { Grid, Card, CardContent, CardHeader, Button, Typography } from '@mui/material';

import styles from './Style.module.css';

interface ModalProps {
    plot: string, 
    writer: string,
    actors: string,
    imdb: number,
    onCloseModal: () => void,
}

export const Modal: FC<ModalProps> = ({
    onCloseModal,
    plot, 
    writer,
    actors,
    imdb,
}) => {
    return (
        <Grid className={styles.modal} container>
            <Card variant='outlined'>
                <CardHeader
                    title='Info'
                    action={<Button onClick={() => onCloseModal()}>X</Button>} 
                />
                <CardContent>
                    <Typography>{`Plot: ${plot}`}</Typography>
                    <Typography>{`Writer: ${writer}`}</Typography>
                    <Typography>{`Actors: ${actors}`}</Typography>
                    <Typography>{`IMDB: ${imdb}`}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
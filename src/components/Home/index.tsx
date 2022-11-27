import React, { FC, useState, useMemo, useEffect } from 'react';
import { CardDataType } from '../../types';

import { CardMovie } from '../CardMovie';
import { Grid, Button, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

import { cards } from '../../mock';

export const Home: FC = () => {
    const [allCards, setAllCards] = useState<CardDataType[]>(JSON.parse(cards));
    const [currentCards, setcurrentCards] = useState(allCards.slice(0, 20));
    const [logged, setLogged] = useState<string | null>(window.sessionStorage.getItem('name'));

    const data = useMemo(() => currentCards, [currentCards]);

    const scrollHandler = (e: any) => {
        if ((e.target.documentElement.scrollHeight - 
            (e.target.documentElement.scrollTop + window.innerHeight) < 100) && 
            currentCards.length < 40) {
                setcurrentCards(allCards.slice(0, 40));
            }
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function() {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    useEffect(() => {
        if (logged) {
            window.sessionStorage.clear();
        }
    }, [logged]);

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            justifyContent='start'
        >
            {logged ? (
                <Grid 
                    container
                    alignItems='center' 
                    justifyContent='end'
                    padding='10px'
                    width='100%'
                >
                    <Typography>{logged}</Typography>
                </Grid>
            ) : (
                <Grid 
                    container
                    alignItems='center' 
                    justifyContent='start'
                    padding='10px'
                    width='100%'
                >
                    <Link to='/signin'>
                        <Button variant='text'>Sign In</Button>
                    </Link>
                    <Typography> or </Typography>
                    <Link to='/signup'>
                        <Button variant='text'>Sign Up</Button>
                    </Link>
                </Grid>
            )}
            <Grid container spacing={2} padding='10px'>
                {data.map((card: CardDataType) => {
                    return (
                        <Grid key={card.id} item xs={6}>
                            <CardMovie 
                                key={card.id}
                                isLogged={!!logged}
                                name={card.name}
                                genre={card.genre}
                                director={card.director}
                                year={card.year}
                                img={card.img}
                                imdb={card.imdb}
                                plot={card.plot}
                                writer={card.writer}
                                actors={card.actors}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}
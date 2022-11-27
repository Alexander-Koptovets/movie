import { TEXT } from "../constants";
import { CardDataType } from '../types';

export const slides = [
    {
        image: 'https://image.mel.fm/i/f/fStX4Mfj4o/640.jpg',
        text: TEXT.SIGNIN,
        path: '/signin',
        btnText: 'Sign In',
    },
    {
        image: 'https://storage1.censor.net/images/e/0/1/e/e01e842d8fc33294697d2649975fb226/original.jpg',
        text: TEXT.SIGNUP,
        path: '/signup',
        btnText: 'Sign Up',
    },
    {
        image: 'https://fbc.ua/wp-content/uploads/2020/09/15-5.jpg',
        text: TEXT.BROWSE,
        path: '/home',
        btnText: 'Browse',
    },
];

const createCards = (n: number): string => {
    const arr: CardDataType[] = [];

    for (let i = 0; i < n; i++) {
        const imdb = Number((Math.random() * 10).toFixed(2));
        arr.push(
            {
                id: i + 1, 
                name: 'Harry Potter and Room of secrets',
                genre: 'Fantasy',
                director: 'Chris Columbus',
                year: '2002',
                img: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Harry_Potter_and_the_Chamber_of_Secrets_—_movie.jpg',
                imdb: imdb,
                plot: 'Harry Potter is in his second year at Hogwarts School of Witchcraft and Wizardry. Dobby the elf warns Harry of the danger that awaits him there and asks him not to return to school again.', 
                writer: 'J. K. Rowling',
                actors: 'Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Griffiths, Fiona Shaw, Harry Melling, Toby Jones, Jim Norton',
            }
        );
    }

    return JSON.stringify(arr);
};

export const cards: string = createCards(40);

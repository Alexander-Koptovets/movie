import React, { FC } from 'react';

import { Form } from '../Form';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';

export const SignIn: FC = () => {
    return (
        <>
            <Link to='/'>
                <Button variant='text'>To Start Page</Button>
            </Link>
            <Form />
        </>
    )
}
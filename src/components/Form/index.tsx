import React, { FC, useCallback, useState, useMemo, useEffect } from 'react';
import { LOGIN, MESSAGE, REG } from '../../constants';

import { Grid, Card, CardContent, CardHeader, TextField, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import styles from './Style.module.css';

interface FormProps {
    isSignUp?: boolean,
}

export const Form: FC<FormProps> = ({ isSignUp = false }) => {
    const [name, setName] = useState<string>(window.localStorage.getItem('name') || '');
    const [nameError, setNameError] = useState<string>('');
    const [email, setEmail] = useState<string>(window.localStorage.getItem('email') || '');
    const [emailError, setEmailError] = useState<string>('');
    const [password, setPassword] = useState<string>(window.localStorage.getItem('password') || '');
    const [passwordError, setPasswordError] = useState<string>('');

    const history = useNavigate();

    useEffect(() => {
        if (!isSignUp) {
            window.localStorage.clear();
            setName('');
            setEmail('');
            setPassword('');
        }
    }, [isSignUp]);

    const onChangeName = useCallback((value: string) => {
        setName(value);
        isSignUp && window.localStorage.setItem('name', value);

        if (!value.length) {
            setNameError(MESSAGE.REQUIRED);
        } else {
            setNameError('');
        }
    }, [name]);

    const onChangeEmail = useCallback((value: string) => {
        setEmail(value);
        isSignUp && window.localStorage.setItem('email', value);

        if (!value.length) {
            setEmailError(MESSAGE.REQUIRED);
        } else if (value !== LOGIN) {
            setEmailError(MESSAGE.EMAIL);
        } else {
            setEmailError('');
        }
    }, [email]);

    const onChangePassword = useCallback((value: string) => {
        setPassword(value);
        isSignUp && window.localStorage.setItem('password', value);
        const reg = value.match(REG);

        if (!value.length) {
            setPasswordError(MESSAGE.REQUIRED);
        } else if (!reg) {
            setPasswordError(MESSAGE.PASSWORD);
        } else {
            setPasswordError('');
        }
    }, [password]);

    const isDisabled = useMemo(() => {
        const reg = !password.match(REG);

        if (isSignUp) {
            return !name || reg || email !== LOGIN;
        }

        return reg || email !== LOGIN;
    }, [email, password]);

    const onClick = useCallback(() => {
        if (!isSignUp && !isDisabled) {
            window.sessionStorage.setItem('name', email);
            history('/home');
        } else if (isSignUp && !isDisabled) {
            window.localStorage.clear();
            window.sessionStorage.setItem('name', name);
            history('/home');
        }
    }, [isDisabled, isSignUp]);

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            padding='1rem'
        >
            <Card variant='outlined'>
                <CardHeader title={isSignUp ? 'Sign Up' : 'Sign In'} />
                <CardContent>
                    <Grid container direction='column' justifyContent='space-around'>
                        {isSignUp && (
                            <TextField
                                id='name'
                                className={styles.textfield}
                                variant="outlined"
                                label="Name"
                                error={!!nameError}
                                helperText={nameError}
                                value={name}
                                onChange={(e) => onChangeName(e.target.value)}
                                required
                        />
                        )}
                        <TextField
                            id='email'
                            className={styles.textfield}
                            variant="outlined"
                            label="Email"
                            error={!!emailError}
                            helperText={emailError}
                            value={email}
                            onChange={(e) => onChangeEmail(e.target.value)}
                            required
                        />
                        <TextField
                            id='password'
                            className={styles.textfield}
                            variant="outlined"
                            label="Password"
                            type='password'
                            error={!!passwordError}
                            helperText={passwordError}
                            value={password}
                            onChange={(e) => onChangePassword(e.target.value)}
                            required
                        />
                        <Button
                            variant='contained'
                            disabled={isDisabled}
                            onClick={() => onClick()}
                        >
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}
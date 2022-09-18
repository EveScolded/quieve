import React, { useState } from 'react';

import './WelcomePage.css'
import { Box, Input, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { getTestData } from '../../getTestData';

export const WelcomePage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const searchTest = async () => {
        setIsLoading(true);
        const input = document.getElementById('testName') as HTMLInputElement | null;
        const inputValue = input?.value;
        if (inputValue) {
            const data = await getTestData(inputValue);
            // pass data 
            console.log(data);
            setIsLoading(false);
        }
    } 

    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') searchTest()
    }

    return (
        <Box mt={30} className='content'>
            <Typography variant='h4' className='welcomeHeader' >Podaj nazwę testu</Typography>
            <Input id='testName' disableUnderline={true} className='input' placeholder='np. ulc-pp-2022' onKeyPress={handleSearch}></Input>
            <Box className='buttonWrapper'>
                <LoadingButton loading={isLoading} loadingPosition='center' variant='outlined' onClick={searchTest} >Szukaj</LoadingButton>
                       
            </Box>
            <div>
                
            </div>

        </Box>
    )
}
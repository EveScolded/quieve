import React, { useState } from 'react';

import './WelcomePage.css'
import { Input } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { getTestData } from '../../getTestData';

export const WelcomePage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        const input = document.getElementById('testName') as HTMLInputElement | null; 
    const inputValue = input?.value;
    if (inputValue) {
        const data = await getTestData(inputValue);
        // pass data 
        setIsLoading(false);

    }

    }

    return (
        <div className='content'>
            <header>Podaj nazwę testu</header>
            <Input id='testName' disableUnderline={true} className='input' placeholder='np. Parasuperlotnia'></Input>
            <div className='buttonWrapper'>
                <LoadingButton loading={isLoading} loadingPosition='center' variant='outlined' onClick={handleSearch} >Szukaj</LoadingButton>
                       
            </div>
            <div>
                
            </div>

        </div>
    )
}
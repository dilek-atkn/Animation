'use client'

import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className="flex relative text-white">
            <img src='/footer/footer.svg' alt='footer' className="w-full h-full bg-cover z-0"/>
            <div className='flex gap-2 absolute z-10 top-3/4 left-10'>
                <InstagramIcon htmlColor='#fff' fontSize='large'/>
                <FacebookIcon htmlColor='#fff' fontSize='large'/>
                <TwitterIcon htmlColor='#fff' fontSize='large'/>
            </div>
        </div>
    );
};

export default Footer;

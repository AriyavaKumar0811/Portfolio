import { Grid } from '@mui/material'
import React from 'react'
import { BounceInDownButton, FadeInWhenVisible } from '../animation/bounceIn'
import profile from '../assets/skill2c.png'
import { Parallax } from 'react-scroll-parallax'
import Slide from "react-reveal/Slide";

function Aboutme() {
    return (
        <Grid container spacing={2} className='items-center'>
            <Grid item md={6} className='flex justify-center w-full'>
                <Parallax speed={10}>
                <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
                </Parallax>
            </Grid>
            <Grid item md={6}>
                <FadeInWhenVisible>
                    <p className='dark:text-white text-xs md:text-md opacity-60'>Get to know</p>
                    <BounceInDownButton>
                        <p className='text-purple-600 font-bold mb-4 text-2xl md:text-4xl'>About me</p>
                    </BounceInDownButton>
                    <p className='mb-3 text-sm leading-6 md:text-md'>
                        &nbsp;&nbsp;&nbsp;&nbsp;I have been a Software Developer work for over 3.6 years and currently work for a Osiz Technologies. 
                        </p>
                        <p className='mb-3 text-sm leading-6 md:text-md'>
                        &nbsp;&nbsp;&nbsp;&nbsp; I am skilled in React.Js , Javascript , Node Js, Express Js, Mongodb have worked with both web-based, multi-threaded applications as well as front-end and back-end development using the latest web technologies and good in developing customer service-oriented applications with solid test automation strategies.
                        </p>
                        <p className='mb-3 text-sm leading-6 md:text-md'>
                        &nbsp;&nbsp;&nbsp;&nbsp;In past have worked on both service and project side in service projects utilizing Blockchain technologies like Trade , Swap ,Liquidity , stake , NFT, explorer, Mining and Game technologies like candy crush, poker with 3D unity integration, 
In addition to my skills in coding
                        </p>
                        <p className='mb-3 text-sm leading-6 md:text-md'>
                        &nbsp;&nbsp;&nbsp;&nbsp;I am skilled in conducting technical analysis as well as assisting clients in project management.
                        </p>
                        <p className='mb-3 text-sm md:text-md leading-6'>
                        &nbsp;&nbsp;&nbsp;&nbsp;Software Engineer | React Developer | Web Developer | Node Developer
                    </p>
                </FadeInWhenVisible>
            </Grid>
        </Grid>
    )
}

export default Aboutme
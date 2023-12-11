'use client'

import {NextPage} from 'next'
import {framerData, linksData, springData} from '@/app/data'
import React from 'react'
import Cursor from '@/components/Cursor/Cursor'
import CardContent from '@mui/material/CardContent'
import Card from "@mui/material/Card";

const Home: NextPage = () => {
    return (
        <div id="animation" className="flex justify-center flex-col">
            <Cursor/>
            <h1 className="mb-8 mt-8 w-full text-center text-4xl font-bold text-gray-800">
                Demo verschiedener Animationen
            </h1>
            <div className="flex justify-center gap-6">
                <Card className="w-80 bg-white rounded-lg shadow-lg">
                    <CardContent>
                        <h2 className="text-lg font-bold text-gray-700">Framer Motion</h2>
                        <hr/>
                        <div className="flex flex-col">
                            {framerData.map((item, index) => (
                                <a href={item.link} key={item.text} className="m-2 text-indigo-500">
                                    {index + 1}. {item.text}
                                </a>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-80 bg-white rounded-lg shadow-lg">
                    <CardContent>
                        <h2 className="text-lg font-bold text-gray-700">React Spring</h2>
                        <hr/>
                        <div className="flex flex-col">
                            {springData.map((item, index) => (
                                <a href={item.link} key={item.text} className="m-2 text-indigo-500">
                                    {index + 1}. {item.text}
                                </a>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-80 bg-white rounded-lg shadow-lg">
                    <CardContent>
                        <h2 className="text-lg font-bold text-gray-700 m-0">GSAP</h2>
                        <hr/>
                        <div className="flex flex-col">
                            {linksData.map((item, index) => (
                                <a href={item.link} key={item.text} className="m-2 text-indigo-500">
                                    {index + 1}. {item.text}
                                </a>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { BounceInDownButton, FadeInWhenVisible } from '../animation/bounceIn'
import { Parallax } from 'react-scroll-parallax'

function Skills() {

    const Skillpercent = [
        {
            title: "Javascript",
            Percent: "80%",
            rate: 8
        },
        {
            title: "React",
            Percent: "90%",
            rate: 9
        },
        {
            title: "Node",
            Percent: "70%",
            rate: 7
        },
        {
            title: "Web design",
            Percent: "50%",
            rate: 5
        },
        {
            title: "MongoDB",
            Percent: "70%",
            rate: 7

        },
       
    ]
    return (
        <Parallax speed={10}>
            <section className='my-12'>
            <p className='dark:text-white text-xs md:text-md opacity-60'>Know about my</p>
                <BounceInDownButton>
                    <p className='text-purple-600 font-bold mb-4 text-2xl md:text-4xl'>Professional Skills</p>
                </BounceInDownButton>
                <div className='flex text-sm leading-6 md:text-md flex-col lg:flex-row'>
                <div className='lg:basis-1/2'>
                    
                    <FadeInWhenVisible>
                        <ul className='list-disc pl-6'>
                            <li>
                            Experienced MERN Stack Developer with 3.4 years of expertise in designing, developing, and deploying full-stack web applications.
                            </li>
                            <li>
                            Proficient in MongoDB, Express.js, React.js, and Node.js, with a strong understanding of RESTful APIs, state management (Redux, Context API), and modern front-end frameworks. 
                            </li>
                            <li>
                                Developing user-friendly and interactive web features such as buttons, forms, and menus Using JavaScript libraries and frameworks to build complex web applications and interactive features.
                            </li>
                            <li>Skilled in writing clean, maintainable, and scalable code, implementing authentication and security best practices, and optimizing performance.
                            </li>
                            <li> Adept at working with Agile methodologies, version control (Git/GitHub), CI/CD pipelines, and cloud platforms like AWS.</li>
                            <li>Passionate about delivering high-quality user experiences and collaborating in dynamic team environments.</li>
                        </ul>
                    </FadeInWhenVisible>
                </div>
                <div className='lg:basis-1/2'>
                        <Parallax speed={5}>
                            <Card className="dark:bg-[#0b0b0b] dark:border-none w-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center mb-5">
                                        <p className="font-medium dark:text-white">Skill Rating.</p>
                                    </div>
                                    {Skillpercent.map((item, i) => (
                                        <dl key={i}>
                                            <dt className="text-sm font-medium text-gray-500">{item.title}</dt>
                                            <dd className="flex items-center mb-3 w-full">
                                                <div className="w-full bg-gray-200 rounded h-2">
                                                    <div className="bg-purple-700 h-2 rounded" style={{ width: item.Percent }}></div>
                                                </div>
                                                <span className="text-md font-medium text-gray-500 pl-2">{item.rate}/10</span>
                                            </dd>
                                        </dl>
                                    ))}
                                </CardContent>
                            </Card>
                        </Parallax>
                    </div>
                   
                    
                </div>
            </section>
        </Parallax>
    )
}

export default Skills
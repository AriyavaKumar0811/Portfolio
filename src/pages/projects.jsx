import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card"
import {
    CustomModal,
    CNMoadlContent,
    CNMoadlText,
    CNMoadlHeader,
} from '@/components/ui/modal';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Network, Scale, Timer } from 'lucide-react';
import { BounceInDownButton } from '../animation/bounceIn';

function Projects() {

    const [showData, setShoData] = useState({});
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const projects = [
        {
            title: "B-Game",
            link: "https://bgame.one",
            stack: "React, Node.js, Express, MongoDB",
            development: "Frontend",
            duration: "May 2024 - Present",
            team: 6,
            content: "Developed a scripted gaming project where users can deposit their cryptocurrencies and play Plinko, Mines, Crash, SpinWheel. They can earn rewards by winning the game and withdraw these rewards to their wallet.The game utilizes JavaScript, with points updated in real-time through socket integrations for instant updates. Users can deposit and withdraw using  BNB network native token B-Coin. Prior to playing, users select a coin and the betting amount.Rewards are distributed in the cryptocurrency that was bet. An admin manages the betting amount and fee percentage. Admin can create new betting plans and set reasonable fees for the bets",
            description:["Developed a scripted gaming project where users can deposit their cryptocurrencies and play Plinko, Mines, Crash, SpinWheel. They can earn rewards by winning the game and withdraw these rewards to their wallet.The game utilizes JavaScript, with points updated in real-time through socket integrations for instant updates. Users can deposit and withdraw using BNB network native token B-Coin. Prior to playing, users select a coin and the betting amount.Rewards are distributed in the cryptocurrency that was bet. An admin manages the betting amount and fee percentage. Admin can create new betting plans and set reasonable fees for the bets."]
        },
        {
            title: "B-Coin",
            link: "https://bcoin.one",
            stack: "React, Node.js, Express, MongoDB",
            development: "Frontend",
            duration: "May 2024 - Present",
            team: 6,
            content: "Developed end to end MERN Stack website provide real-time delivery tracking, management and analytics and I Worked on Stake, Referral, Deposit, Withdraw",
            description: ["Best Coin is a Singapore Crypto Community an Automated Market Maker and Exchange is at the heart of BCOIN. Experience seamless decentralized trading with BCoin, the leading AMM on Binance Smart Chain. Enjoy fast, affordable swaps of BEP20 tokens and earn rewards through staking."]
        },
        {
            title: "Eternal Life Of Blockchain",
            link: "",
            development: "Frontend & Backend",
            stack: "React, Node.js, Express, MongoDB, Solidity, Unity",
            duration: "Jan 2024 - May 2024",
            team: 12,
            content: "Developed end to end MERN Stack website provide real-time delivery tracking, management and analytics and I Worked Application Mining and Rewards , Account Details, support chat and help , API Helper to call API In comman page and Error handling also chart functionality these module’s are worked in Frontend in server side I Worked block , transaction , account , support chat , cron, contract deployment and verification, application Mining 24 hours scheuld based on reward in contract balance and total active users based on reward to user wallet address functionality and address generation functionality using web3 concept.",
            description: ["Eternal Life of Blockchain is explore site and it’s concept is Binance explore. It will be Network mining, application Mining , Block Details and mining based reward for users , Voting concepts, Transaction Details, Accounts Details, contract deployment, deposit withdraw like coin to coin."]
        },
        {
            title: "Koinpark",
            link: "https://koinpark.com",
            stack: "React, Node.js, Express, MongoDB, Solidity, Unity",
            duration: "Jan 2024 - May 2024",
            development: "Frontend",
            team: 20,
            content: "Developed end to end React js website provide real-time delivery tracking, management and analytics and  I worked for koinpark Admin panel , Support Panel, wallet panel, CRM Panel, and Frontend trade chart, depth chart Redux setup and API Helper and Error handling ",
            description: ["Koinpark is the largest Bitcoin and cryptocurrency exchange platform offering a wide range of trading options. You can quickly buy, sell, and trade using our Koinpark app with the lowest trading fee. The Koinpark app has an intuitive interface, is very user-friendly, and makes itself more accessible to you anywhere."]
        },
        {
            title: "MEVR Diamond",
            link: "https://mevr.app/",
            stack: "React, Node.js, Express, MongoDB, Solidity, Unity",
            development: "Frontend & Backend",
            duration: "Jan 2024 - May 2024",
            team: 3,
            content: "Developed a decentralized Candy cursh game with 30 levels with the security, transparency, and efficiency of block-chain technology. with binance network and native (MEVR) Token",
            description: ["MEVR Diamond is play to earn game, user can log in with Metamask, Chain wallet or any crypto wallet. User can deposit Meta verse token to play the game, on winning of each level user get points, on completing the game user can withdraw their diamond tokens based on points. Leaderboard reward treasure will be generated each day for top players."]
        },
        {
            title: "XPet Game",
            link: "https://xpetgame.osiztechnologies.in/",
            stack: "React JS, Express JS, MongoDB, Node JS.",
            duration: "May 2023 - Sep 2023",
            development: "Frontend",
            team: 2,
            content: "It's a live score updating project where users can view live scores, scheduled matches, and completed status for nine different games. Such as Soccer, Tennis, Volleyball, Badminton, Golf, Basketball, etc.",
            description: ["Xpet Game is an NFT site . It's a kind of cryptokitties website using Blockchain web3 concept where user can buy a pet initially and can sale or breed with some other pet and give a born to new pet , where the new born pet can also sell or transfer as per user choice."]
        },
        {
            title: "Parifi",
            link: "https://parifi.osiztech.com/",
            stack: "React, Node.js, Express, MongoDB, Solidity.",
            development: "Frontend & Backend",
            team: 5,
            content: "Developed end-to-end React js website provide real-time delivery tracking, management and analytics Where use can add and remove fund in liquidity pool for interest , swap currencies , stake fund and get rewards To service trading operations, user can be borrower and also lender where lender can provide fund by adding Matic inpool for some interest and borrower can use the fund for trade , swap and return fund with interest rate Worked close with Smart contract team to optimize web3 concept ,smart contract and payment integration using metamask and mobile wallet connection with implement frontend.",
            description: ["Parifi is Crypto Trade site with Ethereum Blockchain Decentralized ,Polygon platform for exchange, profitable farming using BEP-20 tokens , which holds entire concepts of block chain as trade , liquidity , swap , borrow , lending , deposit , withdraw , stake and governance . The site has its own token (MATIC) and include a two type of trades where regular Spot,Limit, and stop and other one is margin trade"]
        },

    ]

    return (
        <section>
            <p className='dark:text-white opacity-60 text-xs md:text-md'>Visite my</p>
            <BounceInDownButton>
                <p className='text-purple-600 font-bold mb-4 text-xl md:text-4xl'>Projects</p>
            </BounceInDownButton>
            <div className='mx-8'>
                <Carousel>
                    <CarouselContent>
                        {projects.map((row, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3"
                                onClick={() => setShoData(row)}>
                                <div className="p-1">
                                    <Card className='dark:bg-[#0b0b0b] dark:border-none'>
                                        <CardContent className='dark:text-white pt-6'>
                                            <div className='mb-3'>
                                                <p className='text-lg font-semibold'>{row.title}</p>
                                            </div>
                                            <div className='cardScrl max-h-[250px] overflow-auto text-sm'>
                                                {row?.description?.map((list, i) => (
                                                    <p className=' ark:text-gray-400' key={i}>{list}</p>
                                                ))}
                                            </div>
                                            <button className='text-purple-600 border border-purple-600
                                            duration-300 hover:text-white hover:bg-purple-600 rounded-md w-full mt-2 py-2' onClick={toggle}>Know more</button>
                                        </CardContent>
                                    </Card>
                                </div>

                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <CustomModal open={modal} className='md:min-w-[80vw] lg:min-w-[60vw]'>
                    <CNMoadlHeader toggle={toggle}>
                        <p className='text-2xl font-bold uppercase'>{showData?.title}</p>
                        <CNMoadlText>{showData?.stack}</CNMoadlText>
                    </CNMoadlHeader>
                    <CNMoadlContent>
                        <article className="md:gap-8 md:grid md:grid-cols-3">
                            <div>
                                <ul className="mb-4 space-y-4 text-sm text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <Network size={14} className='mr-2' />Methodology : Scrum, Agile.</li>
                                    <li className="flex items-center">
                                        <Scale size={14} className='mr-2' />Role : {showData?.development} Development</li>
                                    <li className="flex items-center"><svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                                        <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                                        <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                                    </svg>Team : {showData?.team || "---"} Members</li>
                                </ul>
                            </div>
                            <div className="col-span-2 mt-6 md:mt-0 text-white">
                                <ul className='list-disc pl-6 opacity-60'>
                                    {showData?.description?.map((list, i) => (
                                        <li key={i}>{list}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                        <aside className="flex justify-end my-3">
                            <a target='_blank' href={showData?.link} className="inline-flex items-center text-sm font-medium text-purple-500 hover:underline cursor-pointer group ms-5" onClick={toggle}>
                                View site
                            </a>
                            <p className="inline-flex items-center text-sm font-medium text-purple-500 hover:underline cursor-pointer group ms-5" onClick={toggle}>
                                Close
                            </p>
                        </aside>
                    </CNMoadlContent>
                </CustomModal>
            </div>
        </section>
    )
}

export default Projects
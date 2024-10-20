import Lottie from 'lottie-react';
import { FC } from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { SiGithub, SiLinkedin, SiWhatsapp, SiYoutube } from 'react-icons/si';
import ArrowRight from '../../assets/Lottie/ArrowRight.json';
import Developer from '../../assets/Lottie/Developer.json';
import { Grid } from '../../Components';
import { Block } from '../../Components/Grid';
const HeaderBlocks: FC = () => {
    return (
        <Block className="col-span-12 row-span-2 rounded-md border border-zinc-700 bg-zinc-800 p-6 text-zinc-50 md:col-span-6">
            <div className="flex w-full items-start justify-between">
                <div className="inline-block size-28 overflow-hidden rounded-md">
                    <Lottie animationData={Developer} className="" />
                </div>
                <h2 className="mt-4 inline-block text-3xl font-bold">OrelYoFolio</h2>
            </div>
            <p className="mt-4 text-lg">
                A portfolio website for Orel, a fictional developer. This project is built with React and Tailwind CSS.
            </p>
            <a
                href="#"
                className="mt-4 inline-flex w-full items-center justify-between text-red-300 hover:text-zinc-100"
            >
                <span>View project</span>
                <Lottie animationData={ArrowRight} className="size-16" />
            </a>
        </Block>
    );
};
const SocialLinks: FC = () => {
    return (
        <>
            <Block className="col-span-6 bg-red-600 md:col-span-3">
                <a href="#" className="grid h-full place-content-center text-3xl">
                    <SiYoutube />
                </a>
            </Block>
            <Block className="col-span-6 bg-slate-600 md:col-span-3">
                <a
                    href="https://github.com/orelchalfon"
                    target="_blank"
                    className="grid h-full place-content-center text-3xl"
                >
                    <SiGithub />
                </a>
            </Block>
            <Block className="col-span-6 bg-green-500 md:col-span-3">
                <a href="" className="grid h-full place-content-center text-3xl">
                    <SiWhatsapp />
                </a>
            </Block>
            <Block className="col-span-6 bg-blue-600 md:col-span-3">
                <a
                    href="https://www.linkedin.com/in/orel-chalfon-9398b0190/"
                    target="_blank"
                    className="grid h-full place-content-center text-3xl"
                >
                    <SiLinkedin />
                </a>
            </Block>
        </>
    );
};

const LocationBlock: FC = () => {
    return (
        <Block className="col-span-12 grid place-items-center text-center md:col-span-3">
            <h3 className="text-2xl font-bold">
                <FaLocationPin />
            </h3>
            <p className="mt-2 text-nowrap text-lg">
                12, Orel Street, <br />
                TLV
            </p>
        </Block>
    );
};
const SubscriptionBlock: FC = () => {
    return (
        <Block className="col-span-12 md:col-span-9">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold">Subscribe to my newsletter</h3>
                <h3 className="mt-2 text-lg">Get updates on my latest projects and articles</h3>
                <div className="grid grid-flow-dense grid-cols-8 gap-4">
                    <input
                        type="email"
                        className="col-span-6 mt-4 rounded-md border border-zinc-700 bg-zinc-800 p-2 text-zinc-50"
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        className="col-span-2 mt-4 rounded-md bg-red-500 p-2 text-zinc-50 hover:bg-red-400"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </Block>
    );
};

const Orelfolio: FC = () => {
    return (
        <div className="h-[100svh] bg-zinc-900 px-4 py-12">
            <Grid>
                <HeaderBlocks />
                <SocialLinks />
                <LocationBlock />
                <SubscriptionBlock />
            </Grid>
        </div>
    );
};

export default Orelfolio;

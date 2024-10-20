import Lottie from 'lottie-react';
import { FC } from 'react';
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
const Orelfolio: FC = () => {
    return (
        <div className="h-[100svh] bg-zinc-900 px-4 py-12">
            <Grid>
                <HeaderBlocks />
                <SocialLinks />
            </Grid>
        </div>
    );
};

export default Orelfolio;

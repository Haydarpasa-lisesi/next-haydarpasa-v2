import ContainerComp from '@/ui/global/Container';
import Image from 'next/image';
import Tick from './Tick';
import { heroConstants, tickArray } from './constants';
import HeroBody from './HeroBody';
const Hero = () => {
  return (
    <ContainerComp classNames="bg-gradient-to-r from-red-200  to-primary-2 py-12 flex items-center justify-center mx-auto max-w-screen">
      <div className="grid grid-rows-1  items-center justify-center  rounded-lg lg:grid-cols-2 lg:place-content-center ">
        <div className="z-10 mb-12  rounded-lg bg-white md:mt-12 lg:mt-0 lg:mb-0">
          <div className="block rounded-lg py-6  px-3 shadow-lg backdrop-blur-[2px] md:px-12 lg:-mr-8 ">
            <div className="relative my-2 block h-[50vw] w-full md:mb-12 lg:mb-0 lg:hidden lg:h-[25vw]  lg:min-h-[25rem]">
              <Image
                src={heroConstants.HERO_IMAGE}
                className="w-full rounded-lg shadow-lg"
                alt={heroConstants.HERO_IMAGE_ALT}
                fill
              />
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:mb-6 md:text-5xl xl:text-6xl">
              {heroConstants.HERO_TITLE} <br />
              <span className="text-primary-3">
                {heroConstants.HERO_SUBTITLE}
              </span>
            </h2>

            <HeroBody>{heroConstants.HERO_BODY}</HeroBody>
            <div className="grid grid-cols-12 gap-3">
              {tickArray.map((tick) => (
                <Tick tick={tick} key={tick} />
              ))}
            </div>
          </div>
        </div>
        <div className="relative hidden md:mb-12 lg:mb-0 lg:block lg:h-[25vw] lg:min-h-[25rem] ">
          <Image
            src={heroConstants.HERO_IMAGE}
            className="w-full rounded-lg shadow-lg"
            alt={heroConstants.HERO_IMAGE_ALT}
            fill
          />
        </div>
      </div>
    </ContainerComp>
  );
};

export default Hero;

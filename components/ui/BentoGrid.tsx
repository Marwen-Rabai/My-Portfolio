'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-full mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setcopied] = useState(false)

  const handleCopy = () => {
    console.log("WHAT")
    navigator.clipboard.writeText('contact@Bowei2017818@gmail.com');
    setcopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(77,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute"> 
          {img && (
            <img 
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img 
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/ bento: translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:10'
        )} >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w0fit absolute -right-3 lg:right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {['React.js', 'Next.js', 'Tailwind'].map(
                (item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                    {item}
                  </span>
                ))}
                <span className="py-4 p-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 p-3 rounded-lg text-center bg-[#10132e]" />
                {['SpringBoot', 'PostgreSQL', 'AWS'].map(
                (item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                    {item}
                  </span>
                ))}
              </div>
            </div> 
          )}
         </div>
      </div>
    </div>
  );
};

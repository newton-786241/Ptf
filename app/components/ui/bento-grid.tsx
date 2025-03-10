"use client"

import { cn } from "@/app/lib/utils";
import { AuroraBackground } from "./aurora-background";
import Magicbutton from "../magicbutton";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

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
        "grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto lg:grid-cols-5 md:grid-rows-7 lg:gap-8 p-8",
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
  titleClassname,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number,
  img?:string
  imgClassName?:string
  titleClassname?:string
  spareImg?:string
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "24tamseelanam11@gmail.com"
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-0",
        className
      )}
      style={{
        background:'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      <div>
        <div className={`${img && 'w-full h-full absolute'}`}>
          {img && (
            <img 
              src={img} 
              alt={img} 
              className={cn(imgClassName, `object-cover object-center`)}/>
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img 
              src={spareImg} 
              alt={spareImg}
              className="object-cover object-center w-full h-full" />
           )}
        </div>
      </div>
      <div
          className={cn(
            titleClassname,
            `${id!=6 && 'group-hover/bento:translate-x-2 transition duration-200'} relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:px-10 lg:py-7`
          )}
        >
        <div className={`font-sans font-extralight md:max-w-45 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 ${id===2 && 'sm:hidden'} ${id===3 && 'hidden'} `}>
          {description}
        </div>
        <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ${id===6 && 'flex justify-center items-center cursor-pointer group-hover/bento:-translate-y-4 transition duration-200 w-full'} ${id===1 && 'py-10 px-5'}`}>
          {title}
        </div>
        {id===6 && (
          <div className="flex justify-center items-center w-full">
          <AuroraBackground className="absolute flex -right-10 top-0 object-cover inset-0 pointer-events-none" style={{width:'100%', height:'100%'}}> 
            <div></div>
          </AuroraBackground></div>
        )}
        {id===3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
              <div className="flex flex-col font-extralight md:gap-3 lg:gap-8">
                {['React.js', 'Next.js', 'Tyepscript',''].map(
                  (item)=>(
                    <span key={item} className="lg:py-4 font-extralight md:py-6 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                    )
                )}
              </div>
              <div className="flex flex-col font-extralight md:gap-3 lg:gap-8">
                {['','Django', 'MongoDB', 'GraphQL'].map(
                  (item)=>(
                    <span key={item} className="lg:py-4 md:py-6 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
            )
          }
          {id===6 && (
            <div className="mt-5 relative">
              <Magicbutton
              title={copied ? "Email is Copied!" : 'Copy Email Address'}
              icon={<IoCopyOutline />}
              position=""
              handleClick={handleCopy}
              otherClasses=""/>
            </div>
          )}
          {id===2 && (
            <div className="hidden sm:block sm:gap-2 leading-8 my-6 text-sm sm:text-lg text-[#C1C2D3] font-sans font-extralight">
              <p>Elegant Frontend design <br />Robust Backend Development<br />Responsive Websites <br /> Hosting Services <br /> All you need in one place. With a design of your choosing.</p>
            </div>
          )}
          {id===3 && (
            <div className="text-[#C1C2D3] font-sans font-extralight my-3">
              Modern tools for speed, <br /> performance and scalability.
            </div>
          )}
      </div>
    </div>
  );
};

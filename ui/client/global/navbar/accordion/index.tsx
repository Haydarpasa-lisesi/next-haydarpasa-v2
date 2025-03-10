import { useState } from 'react';
import './accordion.css';
import MainLink from './MainLink';
import AccordionButton from './AccordionButton';
import AccordionLink from './AccordionLink';
interface AccordionProps {
  links: { title: string; href: string }[];
  main: { title: string; href: string };
}
function Accordion({ links, main }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex w-full flex-col gap-2   ">
      <div className=" my-[0.33rem] flex w-full items-center justify-between border-y-[1px] border-primary-1/50  bg-primary-3  hover:bg-primary-1 md:border-slate-200/50 md:bg-transparent md:hover:bg-primary-2 ">
        <MainLink main={main} />
        <AccordionButton setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div
        className={` grid overflow-hidden  duration-300  ${
          isOpen ? 'accordionactive' : 'accordion'
        }`}
      >
        <div className={`flex flex-col gap-3 overflow-hidden md:gap-2   `}>
          {links.map((link) => (
            <AccordionLink key={link.title} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;

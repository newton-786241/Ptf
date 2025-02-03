import { FaLocationArrow } from "react-icons/fa";
import Magicbutton from "./magicbutton";
import { socialMedia } from "../data";

const Contact = () => {
    return ( 
        <footer className="w-full pt-20 min-h-96 flex flex-col justify-between" id="contact">
            <div className="w-full absolute left-0 -bottom-10 min-h-96">
                <img src="/footer-grid.svg" alt="grid"
                className="w-50 opacity-50" />
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-white-200 heading mb-6 sm:mb-0">Ready to take 
                    <span className="text-purple"> Your </span>
                    digital <br /> presence to the next level?
                </h1>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjq0kLecnk1Oy8VA5c_buAI1_iMwihjeWr4gIXQT-FiPwTDA/viewform" target="_blank" className="mb-20 sm:mb-0">
                <Magicbutton 
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position=""
                    otherClasses=""
                /></a>
            </div>
            <div className="text-white-200 pb-4 flex justify-between">
                <p>Copyright by Tamseel Anam</p>
                <div className="flex gap-3">
                    {socialMedia.map((icon)=>(
                        <img src={icon.img} alt="social media" key={icon.id}/>
                    ))}
                </div>
            </div>
        </footer>
     );
}
 
export default Contact;
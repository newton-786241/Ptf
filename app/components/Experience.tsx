import { workExperience } from "../data";
import { Button } from "./ui/moving-border";

const Experience = () => {
    return ( 
        <div className="py-10 px-5" id="testimonials">
            <h1 className="heading sm:mx-10">
                My
                <span className="text-purple"> work experience</span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 gird-cols-1 gap-14">
                {workExperience.map((experience)=>(
                    <Button 
                        key={experience.id}
                        duration={Math.floor((Math.random())*10000 + 1000)}
                    >
                        <div key={experience.id} className="flex items-center" >
                            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <img src={experience.thumbnail} alt={experience.thumbnail} className="w-16 lg:w-32 md:w-20"/>
                            <div>
                                <div className="font-bold text-xl text-start md:text-2xl">
                                    {experience.title}
                                </div>
                                <div className="font-semibold text-start mt-4 text-white-200">
                                    {experience.desc}
                                </div>
                                </div>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
     );
}
 
export default Experience;
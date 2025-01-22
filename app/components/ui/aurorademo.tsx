import { AuroraBackground } from "./aurora-background";

const Demo = () => {
    return ( 
        <div className="w-full border border-white/[0.1]">
            <AuroraBackground >
                <div className="absolute z-10 text-3xl  text-white">
                    Do you want to start a project together?
                </div>
            </AuroraBackground>
        </div>
     );
}
 
export default Demo;
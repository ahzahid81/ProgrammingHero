import { useState } from "react";

export default function ToogleText (){
    const [isVisible, setIsVisible] = useState(true);


    return(
        <div>
            {isVisible && <h1>Hello React Learner</h1>}

            <button onClick={()=> setIsVisible(!isVisible)}>{!isVisible?'Show':'Hide'}</button>
        </div>
    )
}
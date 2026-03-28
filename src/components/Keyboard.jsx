import ActionButton from "./ActionButton";
import Display from "./Display";
import "./Keyboard.css"
export default function Keyboard({handleNumber}) {

    const buttonsNames = ["7","8","9", "-", "4","5","6","*","1","2","3","/","0","+","="]
    
    return(
        <div className="keyboard">
            
            {buttonsNames.map((button) => 
                <ActionButton handleNumber= {handleNumber} buttonName={button}/>
            )}
        </div>
    )
}
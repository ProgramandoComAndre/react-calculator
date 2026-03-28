import "./ActionButton.css"

export default function ActionButton({buttonName, handleNumber}) {
    return(
       <div onClick={(e) => handleNumber(buttonName)} className={`action-button ${buttonName=="0"?"action-button-zero":""}`}>
        <p className="display-action">
           {buttonName}
        </p>
       </div> 
    )
}
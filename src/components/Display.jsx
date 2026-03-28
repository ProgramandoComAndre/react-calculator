import "./Display.css"
export default function Display({display}) {
    return(
        <div className="display">
            <p className="display-number">{display}</p>
        </div>
    )
}
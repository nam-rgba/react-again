
import Theme from "./theme"
export default function Header(){
    return(
        <div className="w-full max-w-full h-12 flex flex-row items-center justify-between">
            <h1>NoType</h1>
            <div>
                <Theme/>
            </div>
        </div>
    )
}
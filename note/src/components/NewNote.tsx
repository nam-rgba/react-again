import { NoteData } from "../App";
import NoteForm from "./NoteForm";


type NewNoteProps={
    onSubmitF: (data: NoteData) => void
}
export default function NewNote({onSubmitF}: NewNoteProps){
    return(
        <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="w-full text-left text-3xl text-green_1">New Note</h1>
            <div className="w-1/2 shadow-st">
                <NoteForm onSubmitF={onSubmitF} />
            </div>
        </div>
    )

}
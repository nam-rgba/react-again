import NoteForm from "./NoteForm";

export default function NewNote(){
    return(
        <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="">New Note</h1>
            <div className="w-1/2 ">
            <NoteForm/>

            </div>
        </div>
    )

}
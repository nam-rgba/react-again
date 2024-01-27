import {SubmitHandler, useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import { NoteData, Tag } from "../App";
import CreatableReactSelect from "react-select/creatable";
import { useState } from "react";


type NoteFormProps = {
    onSubmitF: (data: NoteData) => void
}


export default function NoteForm({onSubmitF}: NoteFormProps) {

    const {register, handleSubmit, formState:{errors, isSubmitting}}= useForm<NoteData>()
    const [tags, setTags]=useState<Tag[]>([])
    const onSubmit: SubmitHandler<NoteData> = async (data) => {
        await new Promise ((r) => setTimeout(r, 3000))
        console.log(data)
        onSubmitF(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col p-8">

            {/* Title */}
            <input {...register("title",{
                required:"* Title is required",
                pattern: /^[a-zA-Z0-9 ]+$/,
                maxLength:{
                    value:160,
                    message:"* Title is too long"
                }
                })} 
                type="text" 
                placeholder="Title"
                className="w-full focus:border-2 focus: border-green_2 p-2 mb-4 rounded-md outline-none shadow-st"
                 />
            {errors.title && <p>{errors.title.message}</p>}


              {/* Tags */}
            <CreatableReactSelect isMulti={true} 
                placeholder="Tags"
                onChange={tags=>{
                    setTags(tags.map((tag) => {
                        return {label: tag.label, id: tag.value}
                    }))
                }}
                value={tags.map((tag) => ({label: tag.label, value: tag.id}))} />
        

            {/* Content */}
            <textarea {...register('body',{
                required: "* Content is required",
                pattern: /^[a-zA-Z0-9]+$/,
                })} 
                placeholder="Content" 
                rows={15}
                className="w-full focus:border-2 focus:border-green_2 p-2 mb-4 rounded-md my-4 outline-none shadow-st "
                ></textarea>
            {errors.body && <p className="">{errors.body.message}</p>}


            {/* Buttons */}
            <div className="">
                <Link to={".."}>
                     <button className="secondary_button">Cancle</button>
                </Link>
                <button className="primary_button" type="submit" disabled={isSubmitting} >{isSubmitting?"Saving...":"Save" }</button>
            </div>
        </form>
    )
}
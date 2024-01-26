import {SubmitHandler, useForm} from "react-hook-form";


type FormFileds = {
    title: string;
    content: string;
}
export default function NoteForm() {

    const {register, handleSubmit, formState:{errors, isSubmitting}}= useForm<FormFileds>({
        defaultValues:{
            title:"Your way",
            content:"Why dont you write your own way"
        }
    })
    const onSubmit: SubmitHandler<FormFileds> = async (data: FormFileds) => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            <input {...register("title",{
                required:"Title is required",
                pattern: /^[a-zA-Z0-9 ]+$/,
                maxLength:{
                    value:160,
                    message:"Title is too long"
                }
            })} type="text" placeholder="Title" />
            {errors.title && <p>{errors.title.message}</p>}
            <textarea {...register('content',{
                required: "Content is required",
            pattern: /^[a-zA-Z0-9]+$/,
            })} placeholder="Content" rows={15}></textarea>
            {errors.content && <p>{errors.content.message}</p>}
            <div>
                <button>Cancle</button>
                <button type="submit" disabled={isSubmitting}>{isSubmitting?"Saving...":"Save"}</button>
            </div>
        </form>
    )
}
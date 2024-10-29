`use client`
import { addNote } from "@/action/action"
import { useState } from "react"
const newNoteForm = () => {
    const [content , setContent] = useState('')
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(content.trim() !== ''){
            await addNote(content)
            setContent('')
        }
    }
    return(
        <form onSubmit= {handleSubmit}>
            <textarea
            value = {content}
            onChange = {(e) =>setContent(e.target.value)}
            placeholder="write your note here..."
            />
            <button type = "submit">Add Note</button>
        </form> 
    )
}
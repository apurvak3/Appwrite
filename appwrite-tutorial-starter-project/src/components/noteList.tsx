`use client`
import { useState } from "react"
export default function NoteList({initialNotes} : {initialNotes:Note[]})
const [notes, setNotes] = useState<Note[]>(initialNotes)
 const handleDelete = async(noteId:string) =>{

 }  
 return(
    <ul>
{notes.map((note) =>(
    <li key = {note.$id} onClick={() => handleDelete()}></li>
))}

    </ul>
 ) 
}
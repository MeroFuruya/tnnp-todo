import Image from 'next/image'
import note from './note'
import {api} from '../../../shared'

function Note(note: api.Note.Get) {
  return (
    // store note id
    <div key={note.id}>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
    </div>
  )
}

export default async function Home() {
  return (
    <div>
      <h1>Notes</h1>
      <div>
        {(await note.getMany()).notes.map((note) => (
          <Note {...note} />
        ))}
      </div>
    </div>
  )
}

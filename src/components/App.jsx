import React from 'react'
import notes from '../notes'
import Footer from './Footer'
import Header from './Header'
import Notes from './Notes'

const App = () => {
  return (
    <div>
      <Header/>
      {notes.map((note) => (
      
          <Notes
           key={note.id}
           title={note.title}
           content={note.content}
           />
      
      ))}
      
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import { findNote } from '../notes-helpers'
import './NotePageMain.css'

export default class NotePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteNote = noteid => {
    this.props.history.push(`/`)
  }

  render() {
    const { notes=[] } = this.context
    const { noteid } = this.props.match.params
    const note = findNote(notes, noteid) || { content: '' }
    return (
      <section className='NotePageMain'>
        <Note
          noteid={note.noteid}
          note_name={note.note_name}
          modified={note.modified}
          content={note.content}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}

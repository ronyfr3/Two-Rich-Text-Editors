import React from 'react'
import TextEditor from './Editor/Wysiwyg'
import TinyApiEditor from './Editor/TinyApiEditor'

const App = () => {
  return (
    <div className='app'>
      <TextEditor />
      <TinyApiEditor/>
    </div>
  )
}

export default App

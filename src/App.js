import React from 'react'
import AppFunction from './AppFunction'
import AppClass from './AppClass'

function App() {
  return (
    <>
      <AppClass title="類別型元件" initValue={99} />
      <AppFunction title="函式型元件" initValue={101} />
    </>
  )
}

export default App
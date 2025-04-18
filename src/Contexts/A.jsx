import React, { createContext } from 'react'
import B from './B'

const Name=createContext()

function A() {
  return (
    <Name.Provider value={'Helloo'} >
        <B/>
        Inside A
        </Name.Provider>
  )
}

export default A
export {Name};
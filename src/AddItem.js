import React, { useRef, useState } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

const inputRef = useRef();

  return (
    <form className='add-form' onSubmit={(e) => handleSubmit() }>
        <input
            autoFocus
            type="text"
            ref={inputRef}
            id = "addItem" 
            placeholder='Add Item'
            required
            value = {newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
    <button 
          type='submit'
          onClick={() => inputRef.current.focus()}
          >+
    </button>
    </form>
  )
}

export default AddItem
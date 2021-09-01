import { useState } from 'react'

export default function useInput() {
  const [searchInput, setSearchInput] = useState('')

  function handleOnChange(event) {
    setSearchInput(event.target.value)
  }

  return { searchInput, handleOnChange }
}

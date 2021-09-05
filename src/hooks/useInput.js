import { useState } from 'react'

export default function useInput() {
  const [searchInput, setSearchInput] = useState('')

  function updateInput(string) {
    setSearchInput(string)
  }

  return { searchInput, updateInput }
}

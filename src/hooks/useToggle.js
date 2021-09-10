import { useState } from 'react'

export default function useToggle() {
  const [bool, setBool] = useState(false)

  function toggle() {
    setBool(!bool)
  }
  return [bool, toggle]
}

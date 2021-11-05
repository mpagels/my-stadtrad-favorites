import { useContext, createContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router'

export const ToggleContext = createContext({
  listOfOpenStates: [],
  toggle: () => undefined,
})

export function ToggleContextProvider({ children }) {
  const [listOfOpenStates, setlistOfOpenStates] = useState([
    { id: 'availability', isOpen: false },
    { id: 'language', isOpen: false },
    { id: 'source', isOpen: false },
    { id: 'data', isOpen: false },
    { id: 'contact', isOpen: false },
  ])

  let location = useLocation().key

  useEffect(() => {
    setlistOfOpenStates([
      { id: 'availability', isOpen: false },
      { id: 'language', isOpen: false },
      { id: 'source', isOpen: false },
      { id: 'data', isOpen: false },
      { id: 'contact', isOpen: false },
    ])
  }, [location])

  function toggle(id) {
    const updatedListOfOpenStates = listOfOpenStates.map((state) => {
      if (state.id === id) {
        const { isOpen } = state
        state.isOpen = !isOpen
        return state
      }
      return state
    })
    setlistOfOpenStates(updatedListOfOpenStates)
  }

  return (
    <ToggleContext.Provider
      value={{
        listOfOpenStates,
        toggle,
      }}
    >
      {children}
    </ToggleContext.Provider>
  )
}

export function useOpen(id) {
  const { listOfOpenStates, toggle } = useContext(ToggleContext)

  const [openState] = listOfOpenStates.filter((state) => state.id === id)
  return [openState, toggle]
}

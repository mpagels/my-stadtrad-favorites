import { useContext, useState, createContext } from 'react'

export const SettingContext = createContext({
  availability: 'X',
  changeAvailability: () => undefined,
})

export function SettingContextProvider({ children }) {
  const [availability, setAvailability] = useState('X')

  function changeAvailability(availability) {
    setAvailability(availability)
  }

  return (
    <SettingContext.Provider
      value={{
        availability,
        changeAvailability,
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}

export function useAvailability() {
  const { availability } = useContext(SettingContext)
  return availability
}

export function useChangeAvailability() {
  const { changeAvailability } = useContext(SettingContext)
  return changeAvailability
}

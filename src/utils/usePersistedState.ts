import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import useStorage from './useStorage'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: any): Response<T> {
  const { getItem } = useStorage()
  
  const [state, setState] = useState(() => {
    const storageValue = getItem('theme', 'local')

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState

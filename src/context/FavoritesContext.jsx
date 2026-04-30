import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (item) => {
    setFavorites(prev =>
      prev.find(f => f.id === item.id && f.type === item.type)
        ? prev.filter(f => !(f.id === item.id && f.type === item.type))
        : [...prev, item]
    )
  }

  const isFavorite = (id, type) =>
    favorites.some(f => f.id === id && f.type === type)

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
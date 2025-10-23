import React, { Children, createContext, useContext, useState } from 'react'

const WishlistContext = createContext()

export const WishlistProvider = ({Children}) => {
  const [wishlist, setWishlist] = useState([])

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // check if product already exixt in wishlist
      if (!prevWishlist.some((item) => item.id ===product.id)) {
        return [...prevWishlist,product]
      }
      return prevWishlist
    })
  }

  const removeFromWishlist =(productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id != productId))
  }

  return (
    <WishlistContext.Provider value={{wishlist, addToWishlist,removeFromWishlist}}>
      {Children}
    </WishlistContext.Provider>
  )
}
export const useWishlist = () => useContext(WishlistContext)
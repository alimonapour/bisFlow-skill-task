import { useEffect, useState } from 'react'
import { ICartItemType } from '../types/CartItem'

export function useCartItems() {
  const [data, setData] = useState<ICartItemType[]>(getDataFromStorage())

  useEffect(() => {
    setDataToStorage(data)
  }, [data])

  function addItemToCart(item: ICartItemType) {
    setData([item, ...data])
  }

  function removeItemFromCart(itemId: string) {
    const index = data.findIndex((item) => item.id === itemId)
    setData([...data.slice(0, index), ...data.slice(index + 1)])
  }

  return {
    cartItems: data,
    addItemToCart,
    removeItemFromCart,
  }
}

function getDataFromStorage(): ICartItemType[] {
  return JSON.parse(localStorage.getItem('cart') ?? '[]')
}

function setDataToStorage(data: ICartItemType[]) {
  localStorage.setItem('cart', JSON.stringify(data))
}

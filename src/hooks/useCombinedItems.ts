import React from 'react'
import { ICartItemType } from '../types/CartItem'

export const useCombinedItems = (
  cartItems: ICartItemType[],
): ICartItemType[] => {
  const combinedItems = React.useMemo(() => {
    const result: ICartItemType[] = []
    const itemMap: Record<string, ICartItemType> = {}

    cartItems.forEach((item) => {
      if (itemMap[item.name]) {
        itemMap[item.name].count += item.count
        itemMap[item.name].price += item.price
      } else {
        const newItem = { ...item }
        result.push(newItem)
        itemMap[item.name] = newItem
      }
    })

    return result
  }, [cartItems])

  return combinedItems
}

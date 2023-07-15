import React from 'react'
import { XCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ICartItemType } from '../../types/CartItem'

interface PropType {
  cartItems: ICartItemType[]
  closeCart: React.Dispatch<React.SetStateAction<boolean>>
  removeItem(itemIdToDelete: string): void
}

export const Cart = ({ cartItems, closeCart, removeItem }: PropType) => {
  let allPrices = cartItems.map((item) => item.price)
  let sum = allPrices.reduce((a, b) => a + b, 0)

  return (
    <div className='w-full mt-12 h-screen overflow-auto no-scrollbar'>
      <XMarkIcon
        onClick={() => closeCart(false)}
        className='h-10 w-10 text-red-500 cursor-pointer text-center ml-7'
      />
      <div className='w-[70%] flex flex-col items-center justify-between'>
        {cartItems.length === 0 && (
          <h1 className='text-[#0B7171] text-[15px] font-bold tracking-[-0.4px]'>
            You haven't any item's in your cart.
          </h1>
        )}
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col w-[360px] h-[170px] bg-white rounded-[29px] shadow-3xl my-2 p-5'
            >
              <div className='flex items-center mt-3'>
                <div className='bg-[#F6F6F6] w-[86px] h-[86px] rounded-full flex items-center justify-center relative'>
                  {item && item.images.length === 1 && (
                    <img
                      src={item.images[0]}
                      alt={`image of ${item.name}`}
                      className='w-12 h-12'
                    />
                  )}
                  {item && item.images.length > 1 && (
                    <>
                      <img
                        src={item.images[0]}
                        alt={`image of ${item.name}`}
                        className='w-10 h-10 absolute left-2 top-6 z-20'
                      />
                      <img
                        src={item.images[1]}
                        alt={`image of ${item.name}`}
                        className='w-10 h-10 absolute left-5 top-4'
                      />
                      <img
                        src={item.images[2]}
                        alt={`image of ${item.name}`}
                        className='w-10 h-10 absolute left-8 top-6 z-10'
                      />
                    </>
                  )}
                </div>
                <div className='ml-10'>
                  <h1 className='text-[#0B7171] text-[15px] font-bold tracking-[-0.4px]'>
                    {item.name}
                  </h1>
                  <h2 className='text-[#B3B3B3] text-[12px] font-medium tracking-[-0.32px]'>
                    {item.description}
                  </h2>
                  <h2 className='text-[#0B7171] text-[16px] font-medium tracking-[-0.32px]'>
                    *{item.count} = {item.price}.00 $
                  </h2>
                </div>
              </div>
              <div className='flex items-end justify-end w-full'>
                <XCircleIcon
                  onClick={() => removeItem(item.id)}
                  className='h-10 w-10 text-red-500 cursor-pointer text-center'
                />
              </div>
            </div>
          )
        })}

        {cartItems.length > 0 && (
          <div className='flex flex-col items-center w-[360px] h-auto bg-white rounded-[29px] shadow-3xl my-5 p-5'>
            {cartItems.map((item) => {
              return (
                <div key={item.id} className='flex mt-3'>
                  <div>
                    <h1 className='text-[#0B7171] text-[15px] font-bold tracking-[-0.4px]'>
                      {item.name} * {item.count} = {item.price}.00 $
                    </h1>
                  </div>
                </div>
              )
            })}
            <h1 className='w-full text-[#23A0A5] text-xl text-center font-bold mt-3 border-t-2 border-sky-500 '>
              Sum : {sum}.00 $
            </h1>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className='flex flex-col h-full items-center justify-between'>
            <button className='rounded-3xl bg-[#23A0A5] text-white text-xl font-bold w-[360px] p-2 my-1'>
              Continue
            </button>
            <button
              className='rounded-3xl bg-teal-700 text-white text-xl font-bold w-[360px] p-2 my-1'
              onClick={() => closeCart(false)}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

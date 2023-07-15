import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { v4 as uuidv4 } from 'uuid'
import diamondSvg from '../../assets/images/diamond.svg'
import rectangleSvg from '../../assets/images/Rectangle.png'
import { Cart } from '../cart'
import { useCombinedItems } from '../../hooks/useCombinedItems'
import { useCartItems } from '../../hooks/useCartItems'

export const Home = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useCartItems()
  const [showBasket, setShowBasket] = useState(false)
  const basketItemsCount = cartItems.length

  function addItemToCartHandler(
    name: string,
    imagSrc: string[],
    description: string,
    itemPrice: number,
  ) {
    const newItem = {
      id: uuidv4(),
      name: name,
      description: description,
      price: itemPrice,
      count: 1,
      images: imagSrc,
    }
    addItemToCart(newItem)
  }

  const combinedItems = useCombinedItems(cartItems)

  const removeTaskHandler = (itemId: string): void => {
    removeItemFromCart(itemId)
  }

  return (
    <div className='w-full max-h-screen grid grid-cols-5 overflow-x-hidden'>
      <div className='col-span-3 bg-greenRectangle bg-no-repeat w-full h-full'>
        <div className='flex flex-col w-[90%] mt-10 mx-auto'>
          <div className='flex items-center w-full justify-start ml-5'>
            <h2 className='text-[#0B7171] text-[35px] font-medium'>Lotus</h2>
            <img
              src={diamondSvg}
              alt='diamond-svg'
              className='w-5 h-5 ml-4 mt-1'
            />
          </div>
          <div className='w-[70%] ml-5 flex items-center justify-between'>
            <h1 className='text-white text-[60px] font-bold tracking-[-1.6px]'>
              Best Sellers
            </h1>
            <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center'>
              <img
                src={rectangleSvg}
                alt='rectangles-svg'
                className='w-3 h-1'
              />
            </div>
          </div>
        </div>
        <div className='flex w-[80%] justify-evenly mt-10'>
          <div className='flex flex-col items-center hover:scale-110 transition duration-500'>
            <div className='rounded-3xl w-[298px] h-[348px] bg-white drop-shadow-l'>
              <div className='bg-jarBackground bg-no-repeat w-full h-full rounded-[25px] mx-auto'></div>
            </div>
            <div className='rounded-[51px] bg-bgInfoColor w-[298px] h-[298px]  -mt-14 p-6 flex flex-col justify-around'>
              <div className='flex flex-col'>
                <h1 className='text-white text-4xl font-bold tracking-[-1.067px]'>
                  Lotus Jar
                </h1>
                <span className='text-white text-[14px] font-medium tracking-[-0.373px]'>
                  Green Fruit Jelly
                </span>
              </div>
              <p className='text-white text-[10px] font-medium tracking-[-0.267px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>
              <div className='flex w-full items-center justify-between'>
                <h6 className='text-white text-[20px] font-medium tracking-[-0.553px]'>
                  4.00$
                </h6>
                <button
                  className='bg-addButton rounded-full bg-no-repeat w-[40px] h-[40px]'
                  onClick={() =>
                    addItemToCartHandler(
                      'Lotus Jar',
                      ['/src/assets/images/JAR.png'],
                      'Green Fruit Jelly',
                      4.0,
                    )
                  }
                ></button>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center hover:scale-110 transition duration-500'>
            <div className='rounded-3xl w-[298px] h-[348px] bg-white drop-shadow-l flex items-center'>
              <div className='bg-jarBackground bg-no-repeat w-full h-full rounded-[25px]'></div>
            </div>
            <div className='rounded-[51px] bg-bgInfoColor  w-[298px] h-[298px] -mt-14 p-6 flex flex-col justify-around'>
              <div className='flex flex-col'>
                <h1 className='text-white text-4xl font-bold tracking[-1.067px]'>
                  Lotus Mi
                </h1>
                <span className='text-white text-[14px] font-medium tracking-[-0.373px]'>
                  Green Fruit Jelly
                </span>
              </div>
              <p className='text-white text-[10px] font-medium tracking-[-0.267px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>
              <div className='flex w-full items-center justify-between'>
                <h6 className='text-white text-[20px] font-medium tracking-[-0.553px]'>
                  2.00$
                </h6>
                <button
                  className='bg-addButton rounded-full bg-no-repeat w-[40px] h-[40px] group-hover:bg-addButtonWhite'
                  onClick={() =>
                    addItemToCartHandler(
                      'Lotus Mi',
                      ['/src/assets/images/JAR.png'],
                      'Green Fruit Jelly',
                      2.0,
                    )
                  }
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        {!showBasket && (
          <div>
            <div className='flex items-center w-[70%] justify-between mt-12 ml-7'>
              <div className='relative border border-[#CFCFCF] p-2 rounded-full '>
                <input
                  placeholder='Search'
                  className='ml-4 w-[261px] placeholder:text-[#0B7171] placeholder:text-[15px] font-medium tracking-[-0.482px] outline-none'
                />
                <img
                  src='/src/assets/images/search.png'
                  className='absolute top-3 right-4 w-5 h-5'
                  alt='search icon'
                />
              </div>
              <div
                className='bg-basketIcon bg-no-repeat w-10 h-10 cursor-pointer relative'
                onClick={() => setShowBasket(!showBasket)}
              >
                <span className='absolute top-1 right-1 w-4 h-4 bg-[#23A0A5] border border-[#23A0A5] rounded-full text-center text-white text-xs'>
                  {basketItemsCount}
                </span>
              </div>
            </div>
            <div className='flex flex-col w-[90%] mx-auto mt-10'>
              <h1 className='text-[#0B7171] text-[35px] font-medium tracking-[-0.6px]'>
                More Items
              </h1>
              <div className='flex flex-col w-[360px] h-[170px] bg-white rounded-[29px] shadow-3xl my-5 p-5 group hover:w-[400px] hover:bg-bgInfoColor hover:scale-110 transition duration-500'>
                <div className='flex items-center mt-3'>
                  <div className='bg-[#25A2A6] w-[90px] h-[30px] rounded-[14px] p-1 hidden group-hover:block rotate-90'>
                    <h1 className='text-white text-[15px] font-medium tracking-[-0.4px] text-center'>
                      10.00$
                    </h1>
                  </div>
                  <div className='bg-[#F6F6F6] w-[86px] h-[86px] rounded-full flex items-center justify-center'>
                    <img
                      src='/src/assets/images/apple.png'
                      alt='apple image'
                      className='w-12 h-12'
                    />
                  </div>
                  <div className='ml-10 group '>
                    <h1 className='text-[#0B7171]  text-[15px] font-bold tracking-[-0.4px] group-hover:text-white'>
                      Apple Fruit
                    </h1>
                    <h2 className='text-[#B3B3B3] text-[12px] font-medium tracking-[-0.32px] group-hover:text-white'>
                      Original Taste
                    </h2>
                  </div>
                </div>
                <div className='flex items-end justify-end '>
                  <button
                    className='bg-addButton rounded-full bg-no-repeat w-[40px] h-[40px] group-hover:bg-addButtonWhite'
                    onClick={() =>
                      addItemToCartHandler(
                        'Apple',
                        ['/src/assets/images/apple.png'],
                        'Original Taste',
                        10.0,
                      )
                    }
                  ></button>
                </div>
              </div>
              <div className='flex flex-col w-[360px] h-[170px] bg-white rounded-[29px] shadow-3xl my-5 p-5 group hover:w-[400px] hover:bg-bgInfoColor hover:scale-110 transition duration-500'>
                <div className='flex items-center mt-3'>
                  <div className='bg-[#25A2A6] w-[90px] h-[30px] rounded-[14px] p-1 hidden group-hover:block rotate-90'>
                    <h1 className='text-white text-[15px] font-medium tracking-[-0.4px] text-center'>
                      12.00$
                    </h1>
                  </div>
                  <div className='bg-[#F6F6F6] w-[86px] h-[86px] rounded-full flex items-center justify-center relative'>
                    <img
                      src='/src/assets/images/cherry.png'
                      alt='cherry image'
                      className='w-10 h-10 absolute left-2 top-6 z-20'
                    />
                    <img
                      src='/src/assets/images/orange.png'
                      alt='orange image'
                      className='w-10 h-10 absolute left-5 top-4'
                    />
                    <img
                      src='/src/assets/images/banana.png'
                      alt='banana image'
                      className='w-10 h-10 absolute left-8 top-6 z-10'
                    />
                  </div>
                  <div className='ml-10'>
                    <h1 className='text-[#0B7171] text-[15px] font-bold tracking-[-0.4px] group-hover:text-white'>
                      Triple Fruit
                    </h1>
                    <h2 className='text-[#B3B3B3] text-[12px] font-medium tracking-[-0.32px] group-hover:text-white'>
                      Original Taste
                    </h2>
                  </div>
                </div>
                <div className='flex items-end justify-end '>
                  <button
                    className='bg-addButton rounded-full bg-no-repeat w-[40px] h-[40px] group-hover:bg-addButtonWhite'
                    onClick={() =>
                      addItemToCartHandler(
                        'Triple',
                        [
                          '/src/assets/images/cherry.png',
                          '/src/assets/images/orange.png',
                          '/src/assets/images/banana.png',
                        ],
                        'Original Taste',
                        12.0,
                      )
                    }
                  ></button>
                </div>
              </div>
              <div className='flex flex-col w-[360px] h-[170px] bg-white rounded-[29px] shadow-3xl my-5 p-5 group hover:w-[400px] hover:bg-bgInfoColor hover:scale-110 transition duration-500'>
                <div className='flex items-center mt-3'>
                  <div className='bg-[#25A2A6] w-[90px] h-[30px] rounded-[14px] p-1 hidden group-hover:block rotate-90'>
                    <h1 className='text-white text-[15px] font-medium tracking-[-0.4px] text-center'>
                      14.00$
                    </h1>
                  </div>
                  <div className='bg-[#F6F6F6] w-[86px] h-[86px] rounded-full flex items-center justify-center'>
                    <img
                      src='/src/assets/images/grape.png'
                      alt='grape image'
                      className='w-12 h-12'
                    />
                  </div>
                  <div className='ml-10'>
                    <h1 className='text-[#0B7171] text-[15px] font-bold tracking-[-0.4px] group-hover:text-white'>
                      Grape Fruit
                    </h1>
                    <h2 className='text-[#B3B3B3] text-[12px] font-medium tracking-[-0.32px] group-hover:text-white'>
                      Original Taste
                    </h2>
                  </div>
                </div>
                <div className='flex items-end justify-end '>
                  <button
                    className='bg-addButton rounded-full bg-no-repeat w-[40px] h-[40px] group-hover:bg-addButtonWhite'
                    onClick={() =>
                      addItemToCartHandler(
                        'Grape',
                        ['/src/assets/images/grape.png'],
                        'Original Taste',
                        14.0,
                      )
                    }
                  ></button>
                </div>
              </div>
            </div>
          </div>
        )}

        <Transition
          show={showBasket}
          enter='transition ease-in-out duration-500 transform'
          enterFrom='translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-500 transform'
          leaveFrom='translate-x-0'
          leaveTo='translate-x-full'
        >
          {(ref) => (
            <div ref={ref} className='fixed top-0 right-0 h-screen w-full z-10'>
              <Cart
                cartItems={combinedItems}
                closeCart={setShowBasket}
                removeItem={removeTaskHandler}
              />
            </div>
          )}
        </Transition>
      </div>
    </div>
  )
}

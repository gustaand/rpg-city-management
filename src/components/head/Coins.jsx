import { useState, useEffect } from 'react'
import { GiTwoCoins } from 'react-icons/gi'

const Coins = () => {

  const [coins, setCoins] = useState(JSON.parse(localStorage.getItem('coins')) ?? 0)
  const [change, setChange] = useState(JSON.parse(localStorage.getItem('change')) ?? false)
  const [changeCoins, setChangeCoins] = useState(false)
  const [addCoins, setAddCoins] = useState('')
  const [coinsOparation, setCoinsOperation] = useState(0)

  useEffect(() => {
    localStorage.setItem('coins', JSON.stringify(coins));
  }, [coins])

  useEffect(() => {
    localStorage.setItem('change', JSON.stringify(change));
  }, [change])

  const handleSubmit = (e) => {
    e.preventDefault();

    setChange(true)
  }

  const handleCoins = (e) => {
    e.preventDefault();

    // Coins Operation
    if (addCoins == true) {
      setCoins(parseInt(coins + coinsOparation))
    } else {
      setCoins(parseInt(coins - coinsOparation))
    }

    // Reset States
    setChangeCoins(false)
    setCoinsOperation(0)
  }

  return (
    <div className='flex flex-col items-center'>

      {!change ? (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            onChange={(e) => setCoins(parseInt(e.target.value))}
          />
          <input type="submit" value='ok' />
        </form>

      ) : (

        <div >
          <div
            className='flex justify-center m-1 font-bold text-2xl border-solid border-2 rounded-lg p-3 border-orange-500 bg-slate-500 bg-gold-gradient'
          >{coins}
            <span className='text-amber-400 m-1'>
              <GiTwoCoins />
            </span>
          </div>

          <div>
            {/* {!changeCoins &&

            } */}
            {changeCoins &&
              <div>
                <form onSubmit={handleCoins}>
                  <input
                    className='bg-transparent border-b-2 border-gray-700  focus:outline-none text-dec w-20'
                    type="number"
                    onChange={(e) => setCoinsOperation(parseInt(e.target.value))}
                  />
                  <input
                    className={
                      addCoins ? 'bg-green-900 px-5 text-center rounded-md font-bold text-2xl text-white m-2 hover:bg-green-800 duration-150'
                        : 'bg-blue-900 px-5 text-center rounded-md font-bold text-2xl text-white m-2 hover:bg-blue-800 duration-150'
                    }
                    type="submit" value={addCoins ? '+' : '-'}
                  />
                </form>
              </div>
            }

            <div className='flex justify-between p-2'>

              <button
                className='bg-blue-900 px-5 text-center rounded-md font-bold text-2xl text-white m-2 hover:bg-blue-800 duration-150'
                onClick={() => { setChangeCoins(true); setAddCoins(false) }}
              >-</button>

              <button
                className='bg-green-900 px-5 text-center rounded-md font-bold text-2xl text-white m-2 hover:bg-green-800 duration-150'
                onClick={() => { setChangeCoins(true); setAddCoins(true) }}
              >+</button>

            </div>
          </div>

        </div>

      )
      }

    </div>
  )
}

export default Coins
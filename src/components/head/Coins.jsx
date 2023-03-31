import { useState, useEffect } from 'react'

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
    <div>

      {!change ? (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            onChange={(e) => setCoins(parseInt(e.target.value))}
          />
          <input type="submit" value='ok' />
        </form>

      ) : (

        <div className='block border-2'>
          <div>{coins} $</div>
          <div>
            {/* {!changeCoins &&

            } */}
            {changeCoins &&
              <div>
                <form onSubmit={handleCoins}>
                  <input
                    type="number"
                    onChange={(e) => setCoinsOperation(parseInt(e.target.value))}
                  />
                  <input type="submit" value={addCoins ? '+' : '-'} />
                </form>
              </div>
            }
            <button
              onClick={() => { setChangeCoins(true); setAddCoins(true) }}
            >+</button>

            <button
              onClick={() => { setChangeCoins(true); setAddCoins(false) }}
            >-</button>
          </div>

        </div>

      )
      }

    </div>
  )
}

export default Coins
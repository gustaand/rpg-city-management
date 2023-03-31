import { useState, useEffect } from 'react'

const Discount = () => {

  const [discount, setDiscount] = useState(JSON.parse(localStorage.getItem('discount')) ?? 0)
  const [change, setChange] = useState(JSON.parse(localStorage.getItem('change')) ?? false)
  const [changeDiscount, setChangeDiscount] = useState(false)

  useEffect(() => {
    localStorage.setItem('discount', JSON.stringify(discount));
  }, [discount])

  useEffect(() => {
    localStorage.setItem('change', JSON.stringify(change));
  }, [change])

  const handleSubmit = (e) => {
    e.preventDefault();

    setChange(true)
  }

  const handleDiscount = (e) => {
    e.preventDefault();

    setChangeDiscount(false)
  }

  return (
    <div>

      {!change ? (
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            onChange={(e) => setDiscount(e.target.value)}
          />
          <input
            type="submit"
            value='ok'
          />
        </form>

      ) : (

        <div className='block border-2'>
          <div>
            Discount: {discount} %
          </div>
          {changeDiscount &&
            <form
              onSubmit={handleDiscount}
            >
              <input
                type="number"
                onChange={(e) => setDiscount(e.target.value)}
              />
              <input
                type="submit"
                value='ok'
              />
            </form>
          }
          <button onClick={() => setChangeDiscount(true)}>Apply</button>
        </div>

      )
      }

    </div>
  )
}

export default Discount
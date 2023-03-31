import { useState, useEffect } from "react"
import '../management/animations.css'


const CityLevel = () => {

  const [level, setLevel] = useState(JSON.parse(localStorage.getItem('level')) ?? 0)
  const [change, setChange] = useState(JSON.parse(localStorage.getItem('change')) ?? false)
  const [changeLevel, setChangeLevel] = useState(false)

  useEffect(() => {
    localStorage.setItem('level', JSON.stringify(level));
  }, [level])

  useEffect(() => {
    localStorage.setItem('change', JSON.stringify(change));
  }, [change])

  const handleSubmit = (e) => {
    e.preventDefault();

    setChange(true)
  }

  const levelSubmit = (e) => {
    e.preventDefault();

    setChangeLevel(false)
  }

  return (
    <div>

      {!change ? (
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            onChange={(e) => setLevel(e.target.value)}
          />
          <input
            type="submit"
            value='ok'
          />
        </form>

      ) : (

        <div className='flex flex-col items-center justify-center text-center border-2'>
          <div className="flex text-center items-center">
            city level:
            {!changeLevel &&
              <div className="font-bold p-5">{level}</div>
            }
            {changeLevel &&
              <form onSubmit={levelSubmit}>
                <input
                  className="font-bold py-5 w-10 text-center bg-transparent "
                  type="number"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                />
                <input type="submit" value='ok' />
              </form>
            }
          </div>
          <button onClick={() => setChangeLevel(true)}>Apply</button>

        </div>
      )
      }
    </div>
  )
}


export default CityLevel
import { useState, useEffect } from "react"

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

        <div className='block border-2'>
          <div className="flex">
            city level:
            {!changeLevel &&
              <div className="px-2">{level}</div>
            }
            {changeLevel &&
              <form onSubmit={levelSubmit}>
                <input
                  className="h-10 w-10"
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
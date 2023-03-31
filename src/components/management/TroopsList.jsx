import { useState, useEffect } from 'react'
import './animations.css'
import Troops from './Troops'
import TroopsForm from './TroopsForm'

const TroopsList = () => {

  const [troops, setTroops] = useState(JSON.parse(localStorage.getItem('troops')) ?? [])
  const [troop, setTroop] = useState({})
  const [addTroop, setAddTroop] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    localStorage.setItem('troops', JSON.stringify(troops));
  }, [troops])

  const deleteTroop = (id) => {
    const troopsUpdate = troops.filter(troop => troop.id !== id)

    setTroops(troopsUpdate)
  }

  return (
    <div className='component-transition'>
      <h2>Troops</h2>

      {!addTroop &&
        <div
          className='py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          onClick={() => setAddTroop(true)}
        >
          ADD BUILDING
        </div>
      }

      {addTroop &&
        <TroopsForm
          troops={troops}
          setTroops={setTroops}
          troop={troop}
          setTroop={setTroop}
          setAddTroop={setAddTroop}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      }

      <div className='flex flex-wrap justify-center'>
        {troops.map((tropas) => (
          <Troops
            key={tropas.id}
            tropas={tropas}
            setTroop={setTroop}
            deleteTroop={deleteTroop}
            setAddTroop={setAddTroop}
            setIsEdit={setIsEdit}
          />
        ))}
      </div>
    </div>
  )
}

export default TroopsList
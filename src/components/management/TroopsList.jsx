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
    <div className='flex flex-col component-transition align-middle items-center'>

      <div
        className='inline-block bg-green-800 hover:bg-green-700 duration-150 max-w-max text-white
            px-5 py-2 select-none cursor-pointer button-add rounded-lg text-center my-10 box-border font-bold'
        onClick={() => setAddTroop(true)}
      >
        RECRUIT
      </div>

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

      <div className='flex flex-wrap justify-evenly box-border'>
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
import { useState, useEffect } from 'react'
import './animations.css'
import BuildingForm from './BuildingForm'
import Buildings from './Buildings'

const BuildingsList = () => {

  const [buildings, setBuildings] = useState(JSON.parse(localStorage.getItem('buildings')) ?? [])
  const [building, setBuilding] = useState({})
  const [addBuilding, setAddBuilding] = useState(false)

  useEffect(() => {
    localStorage.setItem('buildings', JSON.stringify(buildings));
  }, [buildings])

  const deleteBuilding = id => {
    //With filter passing !== we bring all those that are different from the id that we have put.
    const updateBuildings = buildings.filter(building => building.id !== id)
    setBuildings(updateBuildings);
  }

  return (
    <div className='component-transition'>
      <h2>Buildings</h2>

      <div>
        {!addBuilding &&
          <div
            className='py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
            onClick={() => setAddBuilding(true)}
          >
            ADD BUILDING
          </div>
        }
        {addBuilding &&

          <BuildingForm
            buildings={buildings}
            setBuildings={setBuildings}
            building={building}
            setBuilding={setBuilding}
            setAddBuilding={setAddBuilding}
          />
        }
      </div>

      <div className='flex flex-wrap justify-center'>

        {buildings.map(build => (
          <Buildings
            key={build.id}
            build={build}
            setBuilding={setBuilding}
            deleteBuilding={deleteBuilding}
            setAddBuilding={setAddBuilding}
          />
        ))}
      </div>
    </div>
  )
}

export default BuildingsList
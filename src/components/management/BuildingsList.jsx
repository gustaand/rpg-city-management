import { useState, useEffect } from 'react'
import './animations.css'
import BuildingForm from './BuildingForm'
import Buildings from './Buildings'

const BuildingsList = () => {

  const [buildings, setBuildings] = useState(JSON.parse(localStorage.getItem('buildings')) ?? [])
  const [building, setBuilding] = useState({})
  const [addBuilding, setAddBuilding] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    localStorage.setItem('buildings', JSON.stringify(buildings));
  }, [buildings])

  const deleteBuilding = id => {
    //With filter passing !== we bring all those that are different from the id that we have put.
    const updateBuildings = buildings.filter(building => building.id !== id)
    setBuildings(updateBuildings);
  }

  return (
    <div className='flex flex-col component-transition align-middle items-center'>

      <div
        className='inline-block bg-green-800 hover:bg-green-700 duration-150 max-w-max text-white
            px-5 py-2 select-none cursor-pointer button-add rounded-lg text-center my-10 box-border font-bold'
        onClick={() => setAddBuilding(true)}
      >
        ADD BUILDING
      </div>

      {addBuilding &&
        <BuildingForm
          buildings={buildings}
          setBuildings={setBuildings}
          building={building}
          setBuilding={setBuilding}
          setAddBuilding={setAddBuilding}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      }


      <div className='flex flex-wrap justify-evenly box-border'>

        {buildings.map(build => (
          <Buildings
            key={build.id}
            build={build}
            setBuilding={setBuilding}
            deleteBuilding={deleteBuilding}
            setAddBuilding={setAddBuilding}
            setIsEdit={setIsEdit}
          />
        ))}
      </div>
    </div>
  )
}

export default BuildingsList
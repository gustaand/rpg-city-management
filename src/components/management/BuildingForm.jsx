import { useState, useEffect } from 'react'

//Adcionar uma lista com imagens e iterar o index no botão de proximo e anterior (index ++ ou index --)

const BuildingForm = ({ buildings, setBuildings, building, setBuilding, setAddBuilding }) => {

  const [buildingName, setBuildingName] = useState('')
  const [buildingLevel, setBuildingLevel] = useState('')
  const [buildingDescription, setBuildingDescription] = useState('')

  useEffect(() => {
    if (Object.keys(building).length > 0) {
      setBuildingName(building.buildingName)
      setBuildingLevel(building.buildingLevel)
      setBuildingDescription(building.buildingDescription)
    }
  }, [building])

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const data = Date.now().toString(36)
    return random + data
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const objectBuilding = {
      buildingName,
      buildingLevel,
      buildingDescription,
    }

    if (building.id) {
      //editing
      objectBuilding.id = building.id

      const buildingsUpdate = buildings.map(buildingState =>
        buildingState.id === building.id ? objectBuilding : buildingState
      )

      setBuildings(buildingsUpdate)
      setBuilding({})

    } else {
      //NEW
      objectBuilding.id = generateId();
      setBuildings([...buildings, objectBuilding]);
    }

    //Reset Form
    setBuildingName('')
    setBuildingLevel('')
    setBuildingDescription('')
    setAddBuilding(false)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder='Building Name'
          value={buildingName}
          onChange={(e) => setBuildingName(e.target.value)}
        />

        <input
          type="number"
          placeholder='Level'
          value={buildingLevel}
          onChange={(e) => setBuildingLevel(e.target.value)}
        />

        <textarea
          placeholder='Description'
          value={buildingDescription}
          onChange={(e) => setBuildingDescription(e.target.value)}
        />

        <input
          type="submit"
          value={building.id ? 'Edit Building' : 'Create Building'}
        />
      </form>
    </div>
  )
}

export default BuildingForm
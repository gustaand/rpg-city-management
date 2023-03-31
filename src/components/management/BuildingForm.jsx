import { useState, useEffect } from 'react'
import { TiDelete } from 'react-icons/ti'
import { BiRightArrow } from 'react-icons/bi'
import { BiLeftArrow } from 'react-icons/bi'
import './animations.css'
import barracks from '../../assets/rpg-buildings-icons/barracks.png'
import bridge2 from '../../assets/rpg-buildings-icons/bridge-2.png'
import bridge3 from '../../assets/rpg-buildings-icons/bridge-3.png'
import bridge from '../../assets/rpg-buildings-icons/bridge.png'
import cavern from '../../assets/rpg-buildings-icons/cavern-entrance.png'
import farm from '../../assets/rpg-buildings-icons/farm.png'
import fisherCabin from '../../assets/rpg-buildings-icons/fisherman-cabin.png'
import forge from '../../assets/rpg-buildings-icons/forge.png'
import fort from '../../assets/rpg-buildings-icons/fort.png'
import graveyard2 from '../../assets/rpg-buildings-icons/graveyard-2.png'
import graveyard from '../../assets/rpg-buildings-icons/graveyard.png'
import harbor from '../../assets/rpg-buildings-icons/harbor.png'
import inn2 from '../../assets/rpg-buildings-icons/inn-2.png'
import jail from '../../assets/rpg-buildings-icons/jail.png'
import magicCircle from '../../assets/rpg-buildings-icons/magic-circle.png'
import mill from '../../assets/rpg-buildings-icons/mill.png'
import mine from '../../assets/rpg-buildings-icons/mine-entrance.png'
import monument from '../../assets/rpg-buildings-icons/monument.png'
import tavern from '../../assets/rpg-buildings-icons/tavern.png'
import temple from '../../assets/rpg-buildings-icons/temple.png'
import tower2 from '../../assets/rpg-buildings-icons/tower-2.png'
import tower from '../../assets/rpg-buildings-icons/tower.png'
import townhall from '../../assets/rpg-buildings-icons/townhall.png'
import wallGate from '../../assets/rpg-buildings-icons/wall-gate.png'
import warehouse from '../../assets/rpg-buildings-icons/warehouse.png'
import waterPit from '../../assets/rpg-buildings-icons/water-pit.png'

const BuildingForm = ({ buildings, setBuildings, building, setBuilding, setAddBuilding, isEdit, setIsEdit }) => {

  const [buildingName, setBuildingName] = useState('')
  const [buildingLevel, setBuildingLevel] = useState('')
  const [buildingDescription, setBuildingDescription] = useState('')

  const [image, setImage] = useState(isEdit ? building.imageId : 0)
  const buildingsIcons = [barracks, bridge2, bridge3, bridge, cavern, farm, fisherCabin, forge, fort, graveyard2, graveyard, harbor,
    inn2, jail, magicCircle, mill, mine, monument, tavern, temple, tower2, tower, townhall, wallGate, warehouse, waterPit]

  useEffect(() => {
    if (Object.keys(building).length > 0) {
      setBuildingName(building.buildingName)
      setBuildingLevel(building.buildingLevel)
      setBuildingDescription(building.buildingDescription)
      setImage(building.imageId)
    }
  }, [building])

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const data = Date.now().toString(36)
    return random + data
  }

  const handleImageNext = (e) => {
    e.preventDefault()

    if (image < buildingsIcons.length - 1) {
      setImage(image + 1)
    } else {
      setImage(0)
    }
  }

  const handleImagePrev = (e) => {
    e.preventDefault()

    if (image > 0) {
      setImage(image - 1)
    } else {
      setImage(buildingsIcons.length - 1)
    }
  }

  const handleClose = () => {
    setBuildingName('')
    setBuildingLevel('')
    setBuildingDescription('')
    setAddBuilding(false)
    setIsEdit(false)
    setBuilding({})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const objectBuilding = {
      buildingName,
      buildingLevel,
      buildingDescription,
      image: buildingsIcons[image],
      imageId: image
    }

    if (building.id) {
      objectBuilding.id = building.id

      const buildingsUpdate = buildings.map(buildingState =>
        buildingState.id === building.id ? objectBuilding : buildingState
      )
      setImage(building.imageId)
      setBuildings(buildingsUpdate)
      setBuilding({})

    } else {
      objectBuilding.id = generateId();
      setBuildings([...buildings, objectBuilding]);
    }

    //Reset Form
    setBuildingName('')
    setBuildingLevel('')
    setBuildingDescription('')
    setAddBuilding(false)
    setIsEdit(false)
  }

  return (
    <div className='absolute flex justify-center w-full h-full p-2 bg-zinc-900 bg-opacity-50 box-border component-transition'>
      <form
        className='flex flex-wrap h-max justify-center flex-col items-center box-border border-ridge border-amber-400
          rounded-sm card-bg-build'
        onSubmit={handleSubmit}
      >
        <div
          className='box-border select-none cursor-pointer self-end text-red-800 text-3xl active:scale-95'
          onClick={handleClose}
        >
          <TiDelete />
        </div>

        <img
          className='p-4 inline-block max-h-72 max-w-xs sm:max-h-80 select-none'
          src={buildingsIcons[image]}
        />

        <div className='flex justify-center py-2'>
          <div
            className='px-2 active:scale-95 cursor-pointer text-3xl'
            onClick={handleImagePrev}
          ><BiLeftArrow /></div>

          <div
            className='px-2 active:scale-95 cursor-pointer text-3xl'
            onClick={handleImageNext}
          ><BiRightArrow /></div>
        </div>

        <input
          className='bg-transparent border-none border-b-2 font-bold border-b-slate-600 focus:outline-none placeholder:text-center
            placeholder:text-stone-600 text-center mb-2'
          type="text"
          placeholder='Building Name'
          value={buildingName}
          onChange={(e) => setBuildingName(e.target.value)}
        />

        <input
          className='bg-transparent border-none border-b-2 font-bold border-b-slate-600 focus:outline-none placeholder:text-center
            placeholder:text-stone-600 text-center mb-2'
          type="number"
          placeholder='Level'
          value={buildingLevel}
          onChange={(e) => setBuildingLevel(e.target.value)}
        />

        <textarea
          className='bg-transparent border-none border-b-2 font-bold border-b-slate-600 focus:outline-none placeholder:text-center
            placeholder:text-stone-600 text-center mb-2'
          placeholder='Description'
          value={buildingDescription}
          onChange={(e) => setBuildingDescription(e.target.value)}
        />

        <input
          className='text-center px-7 py-2 bg-orange-400 hover:bg-orange-500 duration-150 cursor-pointer rounded-xl mb-3'
          type="submit"
          value={building.id ? 'Edit Building' : 'Create Building'}
        />
      </form>
    </div>
  )
}

export default BuildingForm
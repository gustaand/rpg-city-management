import { useState, useEffect } from 'react'
import { TiDelete } from 'react-icons/ti'
import { BiRightArrow } from 'react-icons/bi'
import { BiLeftArrow } from 'react-icons/bi'
import './animations.css'
import alchemy from '../../assets/rpg-icons/alchemy.png'
import assasin from '../../assets/rpg-icons/assasin.png'
import barbarian from '../../assets/rpg-icons/barbarian.png'
import crossbow from '../../assets/rpg-icons/crossbow.png'
import druid from '../../assets/rpg-icons/druid.png'
import monk from '../../assets/rpg-icons/monk.png'
import ninja from '../../assets/rpg-icons/ninja.png'
import swordsman from '../../assets/rpg-icons/swordsman.png'
import thief from '../../assets/rpg-icons/thief.png'
import wizard from '../../assets/rpg-icons/wizard.png'

const TroopsForm = ({ troops, setTroops, troop, setTroop, setAddTroop, isEdit, setIsEdit }) => {

  const [troopName, setTroopName] = useState('')
  const [troopLevel, setTroopLevel] = useState('')
  const [troopUnits, setTroopUnits] = useState('')
  const [troopDescription, setTroopDescription] = useState('')

  const [image, setImage] = useState(isEdit ? troop.imageId : 0)
  const troopsIcons = [alchemy, assasin, barbarian, crossbow, druid, monk, ninja, swordsman, thief, wizard]

  useEffect(() => {
    if (Object.keys(troop).length > 0) {
      setTroopName(troop.troopName)
      setTroopLevel(troop.troopLevel)
      setTroopUnits(troop.troopUnits)
      setTroopDescription(troop.troopDescription)
      setImage(troop.imageId)
    }
  }, [troop])

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const data = Date.now().toString(36)
    return random + data
  }

  const handleImageNext = (e) => {
    e.preventDefault()

    if (image < troopsIcons.length - 1) {
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
      setImage(troopsIcons.length - 1)
    }
  }

  const handleClose = () => {
    setTroopName('')
    setTroopLevel('')
    setTroopUnits(0)
    setTroopDescription('')
    setAddTroop(false)
    setIsEdit(false)
    setTroop({})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const objectTroop = {
      troopName,
      troopLevel,
      troopUnits,
      troopDescription,
      image: troopsIcons[image],
      imageId: image
    }

    if (troop.id) {
      objectTroop.id = troop.id

      const troopsUpdate = troops.map(troopState =>
        troopState.id === troop.id ? objectTroop : troopState
      )
      setImage(troop.imageId)
      setTroops(troopsUpdate)
      setTroop({})

    } else {
      objectTroop.id = generateId();
      setTroops([...troops, objectTroop]);
    }


    //reset from
    setTroopName('')
    setTroopLevel('')
    setTroopUnits(0)
    setTroopDescription('')
    setAddTroop(false)
    setIsEdit(false)
  }

  return (
    <div className='absolute flex justify-center w-full h-full p-2 bg-zinc-900 bg-opacity-50 box-border component-transition'>
      <form
        className='flex flex-wrap h-max justify-center flex-col items-center box-border border-ridge border-amber-400
          rounded-sm card-bg'
        onSubmit={handleSubmit}
      >
        <div
          className='box-border select-none cursor-pointer self-end text-red-800 text-3xl active:scale-95'
          onClick={handleClose}
        >
          <TiDelete />
        </div>

        <img
          className='inline-block max-h-72 max-w-xs sm:max-h-80 select-none'
          src={troopsIcons[image]}
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
          className='bg-transparent border-none border-b-2 font-bold border-b-slate-600 focus:outline-none placeholder:text-center text-center mb-2'
          type="text"
          placeholder='Troop Name'
          value={troopName}
          onChange={(e) => setTroopName(e.target.value)}
        />
        <input
          className='bg-transparent border-none border-b-2 font-bold border-b-slate-600 focus:outline-none placeholder:text-center text-center mb-2'
          type="number"
          placeholder='Level'
          value={troopLevel}
          onChange={(e) => setTroopLevel(e.target.value)}
        />
        <input
          className='bg-transparent border-none border-b-2 font-bold border-b-slate-600 focus:outline-none placeholder:text-center text-center mb-2'
          type="number"
          placeholder='Units'
          value={troopUnits}
          onChange={(e) => setTroopUnits(e.target.value)}
        />
        <textarea
          className='bg-transparent border-none border-b-2 font-bold border-b-slate-600 focus:outline-none placeholder:text-center text-center mb-2'
          placeholder='Description'
          value={troopDescription}
          onChange={(e) => setTroopDescription(e.target.value)}
        />
        <input
          className='text-center px-7 py-2 bg-orange-400 hover:bg-orange-500 duration-150 cursor-pointer rounded-xl mb-3'
          type="submit"
          value={troop.id ? 'Edit Unit' : 'Recruit Troop'}
        />
      </form>
    </div>
  )
}

export default TroopsForm
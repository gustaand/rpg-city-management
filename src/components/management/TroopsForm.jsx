import { useState, useEffect } from 'react'
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
  const [troopUnits, setTroopUnits] = useState(0)
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
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <img
            src={troopsIcons[image]}
          />

          <div
            onClick={handleImagePrev}
          >prev</div>

          <div
            onClick={handleImageNext}
          >next</div>
        </div>

        <input
          type="text"
          placeholder='Troop Name'
          value={troopName}
          onChange={(e) => setTroopName(e.target.value)}
        />
        <input
          type="number"
          placeholder='Level'
          value={troopLevel}
          onChange={(e) => setTroopLevel(e.target.value)}
        />
        <input
          type="number"
          placeholder='Units'
          value={troopUnits}
          onChange={(e) => setTroopUnits(parseInt(e.target.value))}
        />
        <textarea
          placeholder='Description'
          value={troopDescription}
          onChange={(e) => setTroopDescription(e.target.value)}
        />
        <input
          type="submit"
          value={troop.id ? 'Edit Troop' : 'Create Troop'}
        />
      </form>
    </div>
  )
}

export default TroopsForm
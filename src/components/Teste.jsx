import { useState } from 'react'
import alchemy from '../assets/rpg-icons/alchemy.png'
import assasin from '../assets/rpg-icons/assasin.png'
import barbarian from '../assets/rpg-icons/barbarian.png'
import crossbow from '../assets/rpg-icons/crossbow.png'
import druid from '../assets/rpg-icons/druid.png'
import monk from '../assets/rpg-icons/monk.png'
import ninja from '../assets/rpg-icons/ninja.png'
import swordsman from '../assets/rpg-icons/swordsman.png'
import thief from '../assets/rpg-icons/thief.png'
import wizard from '../assets/rpg-icons/wizard.png'

const Teste = () => {

  const [image, setImage] = useState(0)
  const troopsIcons = [alchemy, assasin, barbarian, crossbow, druid, monk, ninja, swordsman, thief, wizard]

  const handleImage = () => {
    if (image < troopsIcons.length - 1) {
      setImage(image + 1)
    } else {
      setImage(0)
    }
  }

  return (
    <div>
      <div className='flex justify-center'>
        <img
          className='block h-32 w-36'
          src={troopsIcons[image]}
        />
        <button onClick={handleImage}>clic</button>
      </div>
    </div>
  )
}

export default Teste
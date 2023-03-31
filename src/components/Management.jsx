import { useState } from 'react'
import BuildingsList from './management/BuildingsList'
import TroopsList from './management/TroopsList'
import './management/animations.css'

const Management = () => {

  const [change, setChange] = useState('buildings')

  return (
    <div >

      <div className='flex justify-center pb-4'>
        <div
          onClick={() => setChange('buildings')}
          className='mx-3 cursor-pointer select-none border-solid border-2 border-stone-600 rounded-xl p-2 
            active:scale-95 duration-150 font-bold bg-silver-gradient'
        >Buildings</div>

        <div
          onClick={() => setChange('troops')}
          className='mx-3 cursor-pointer select-none border-solid border-2 border-stone-600 rounded-xl py-2 
            active:scale-95 px-4 duration-150 font-bold bg-silver-gradient'
        >Troops</div>
      </div>

      <div className='flex text-center justify-center min-h-screen'>
        {change == 'buildings' &&
          <BuildingsList />
        }
        {change == 'troops' &&
          <TroopsList />
        }
      </div>

    </div>
  )
}

export default Management
import React from 'react'
import './animations.css'

const Troops = ({ tropas, setTroop, deleteTroop, setAddTroop, setIsEdit }) => {

  const handleDelete = () => {
    const answer = confirm('Do Do you want to delete this building?')
    if (answer) {
      deleteTroop(tropas.id)
    }
  }

  const handleEdit = () => {
    setAddTroop(true)
    setTroop(tropas)
    setIsEdit(true)
  }

  return (
    <div className='flex flex-col justify-center items-center my-4 mx-1 sm:m-4 shadow-md bg-image bg-slate-200 px-5 py-10 rounded-xl max-w-xs box-border'>
      <div>
        <img className='h-32 w-32' src={tropas.image} />
      </div>
      <p className='font-bold mb-3 text-gray-900 uppercase'>{tropas.troopName}</p>

      <p className='font-bold mb-3 text-gray-900 uppercase'>Level:
        <span className='font-extrabold text-xl'>{tropas.troopLevel}</span>
      </p>

      <p className='font-bold mb-3 text-gray-900 uppercase'>Troop Units:
        <span className='font-extrabold text-xl'>{tropas.troopUnits}</span>
      </p>

      <p className='font-normal normal-case'>
        {tropas.troopDescription}
      </p>

      <div className='flex justify-between mt-10'>
        <div
          className='py-2 mx-2 px-10 select-none cursor-pointer bg-indigo-800 hover:bg-indigo-900 text-white font-bold duration-150 uppercase rounded-lg'
          onClick={handleEdit}
        >Edit</div>

        <div
          className='py-2 mx-2 px-8 select-none cursor-pointer bg-red-800 hover:bg-red-900 text-white font-bold duration-150 uppercase rounded-lg'
          onClick={handleDelete}
        >Delete</div>
      </div>

    </div>
  )
}

export default Troops
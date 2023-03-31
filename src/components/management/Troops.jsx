import React from 'react'

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
    <div className='m-3 shadow-md px-5 py-10 rounded-xl max-w-md'>
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
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          onClick={handleEdit}
        >Edit</button>

        <button
          type='button'
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          onClick={handleDelete}
        >Delete</button>
      </div>

    </div>
  )
}

export default Troops
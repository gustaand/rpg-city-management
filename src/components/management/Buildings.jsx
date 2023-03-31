import React from 'react'

const Buildings = ({ build, setBuilding, deleteBuilding, setAddBuilding }) => {

  const handleDelete = () => {
    const answer = confirm('Do Do you want to delete this building?')
    if (answer) {
      deleteBuilding(build.id)
    }
  }

  const handleEdit = () => {
    setAddBuilding(true)
    setBuilding(build)
  }

  return (
    <div className='m-3 shadow-md px-5 py-10 rounded-xl max-w-md'>
      <p className='font-bold mb-3 text-gray-900 uppercase'>{build.buildingName}</p>

      <p className='font-bold mb-3 text-gray-900 uppercase'>Level:
        <span className='font-extrabold text-xl'>{build.buildingLevel}</span>
      </p>

      <p className='font-normal normal-case'>
        {build.buildingDescription}
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

export default Buildings
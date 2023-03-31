import React from 'react'
import './animations.css'

const Buildings = ({ build, setBuilding, deleteBuilding, setAddBuilding, setIsEdit }) => {

  const handleDelete = () => {
    const answer = confirm('Do Do you want to delete this building?')
    if (answer) {
      deleteBuilding(build.id)
    }
  }

  const handleEdit = () => {
    setAddBuilding(true)
    setBuilding(build)
    setIsEdit(true)
  }

  return (
    <div className='flex flex-col justify-center items-center my-4 mx-1 sm:m-4 shadow-md bg-image bg-slate-200 px-5 py-10 rounded-xl max-w-xs box-border'>
      <div>
        <img className='h-32 w-32' src={build.image} />
      </div>
      <p
        className='font-bold mb-3 text-gray-900 uppercase'
      >{build.buildingName}</p>

      <p className='font-bold mb-3 text-gray-900 uppercase'>Level:
        <span className='font-extrabold text-xl'>{build.buildingLevel}</span>
      </p>

      <p className='font-normal normal-case'>
        {build.buildingDescription}
      </p>

      <div className='flex justify-between mt-10'>
        <button
          type='button'
          className='py-2 mx-2 px-10 select-none cursor-pointer bg-indigo-800 hover:bg-indigo-900 text-white font-bold duration-150 uppercase rounded-lg'
          onClick={handleEdit}
        >Edit</button>

        <button
          type='button'
          className='py-2 mx-2 px-8 select-none cursor-pointer bg-red-800 hover:bg-red-900 text-white font-bold duration-150 uppercase rounded-lg'
          onClick={handleDelete}
        >Delete</button>

      </div>
    </div>
  )
}

export default Buildings
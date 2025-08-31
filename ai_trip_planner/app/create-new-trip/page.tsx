import React from 'react'
import Chatbox from './_components/Chatbox'
import Itinerary from './_components/Itinerary'

function CreateNewTrip () {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10'>
      <div>
        <Chatbox />
      </div>
      <div><Itinerary /></div>
    </div>
  )
}

export default CreateNewTrip

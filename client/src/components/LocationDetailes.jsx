import React, { useState } from 'react'
import Button from './layout/Button'

export default function LocationDetailes({ locationData , handleLocationID}) {
    const [details, setDetails] = useState(locationData.properties)


    return (
        <div>
            <h1 className='text-2xl py-1 font-semibold'>{details.address_line1}</h1>
            <h3 className='italic text-gray-500'>{details.address_line2}</h3>
            <h1 className='text-base py-1 font-semibold'>{details.city}, {details.state}, {details.country}</h1>
            <h4 className='font-semibold text-base mt-1'>Details</h4>
            <div className='mx-5 my-2'>
                <ul style={{ listStyleType: 'disc' }}>
                    {details.contact && <li className='font-semibold text-base mt-2'>Contact No: <span className='font-medium'>{details.contact.phone}</span></li>}
                    <li className='font-semibold text-base'>Distance: <span className='font-medium'>{details.distance} m</span></li>
                    <li className='font-semibold text-base'>Postcode: <span className='font-medium'>{details.postcode}</span> </li>
                </ul>
                   
            </div>
            
            <Button onClick={() => handleLocationID(details.place_id)} className='w-full my-3'>Know More</Button>
            
        </div>
    )
}

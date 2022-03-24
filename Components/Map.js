import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
const Map = () => {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  return (
    <div className='w-full h-full'>
      <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDhmPmuJkgBDEb-6aaEWbfkcKZI-drCosI' }}
      defaultCenter={location}
      defaultZoom={5}>
        <Marker text={location.address}/>
      </GoogleMapReact>
    </div>
  )
}

export default Map
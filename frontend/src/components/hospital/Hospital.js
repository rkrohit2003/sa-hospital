import React from 'react'
import Navbar from '../navbar/Navbar'
import BasicTable from '../hospitalDetails/HospitalDetails'

export const Hospital = ( {setIsLoggedIn} ) => {
  return (
    <>
    <Navbar setIsLoggedIn={setIsLoggedIn}/>
    <BasicTable/></>
  )
}

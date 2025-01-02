import React from 'react'
import ProductDetail from '../components/imagecardprodut'
import Emailinput from '../components/email'
import Feature from '../components/Feature '
import Listing from '../components/listling'

export default function page() {
  return (
    <div>
      <ProductDetail/>
      <Listing/>
      <Feature/>
      <Emailinput/>
    </div>
  )
}

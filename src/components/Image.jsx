import React from 'react'
import { KIESEL_SALE_URL } from '../utils/constants'
 
const Image = (props) => {

  const regExSrc = props.guitarId
  const regEx = /(\d+)/g
  const guitar = regEx.exec(regExSrc).toString()
  const guitarNumber = guitar.slice(7)

  return (
    <a href={KIESEL_SALE_URL + guitarNumber}>
      <img 
        className="guitarImages" 
        src={props.src} 
        alt={props.alt} 
      />
    </a>
  )
}

export default Image
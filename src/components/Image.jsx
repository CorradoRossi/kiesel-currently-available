import React from 'react'

const Image = (props) => {

  const regExSrc = props.guitarId
  const regEx = /(\d+)/g
  const guitar = regEx.exec(regExSrc).toString()
  const guitarNumber = guitar.slice(7)

  return (
    <a href={`https://www.kieselguitars.com/guitars-in-stock/${guitarNumber}`}>
      <img 
        className="guitarImages" 
        src={props.src} 
        alt={props.alt} 
      />
    </a>
  )
}

export default Image
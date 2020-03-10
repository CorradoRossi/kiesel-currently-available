import React from 'react'

const Img = (props) => {
  return (
    <img className="guitarImages" src={props.src} alt={props.alt} />
  )
}

export default Img
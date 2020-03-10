import React from 'react'

const Img = (props) => {
  const regExSrc = props.src.toString()
  const regExp = /https:\/\/www.kieselguitars.com\/images\/guitars-in-stock([^'>]+)/g
  const guitarId = regExSrc.exec(regExp)
  return (
    <a href={"https://www.kieselguitars.com/guitars-in-stock" + guitarId}>
      <img className="guitarImages" src={props.src} alt={props.alt} />
    </a>
  )
}

export default Img
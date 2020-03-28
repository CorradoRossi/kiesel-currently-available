import React from 'react'

const Img = (props) => {
  const regExSrc = props.src.toString()
  console.log(regExSrc)
  const regExp = /https:\/\/www.kieselguitars.com\/images\/guitars-in-stock([^'>]+)/g
  const regExp2 = /(^[0-9]*)/g
  const guitarId = regExp2.exec(regExSrc)
  console.log(guitarId)
  return (
    <a href={`https://www.kieselguitars.com/guitars-in-stock/${guitarId}`}>
      <img className="guitarImages" src={props.src} alt={props.alt} />
    </a>
  )
}

export default Img
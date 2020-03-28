import React from 'react'

const Img = (props) => {
  const regExSrc = props.guitarId
  console.log(regExSrc)
  const regEx = /(\d+)/g
  const guitarNumber = regEx.exec(regExSrc).toString()
  const hacky = guitarNumber.slice(7)
  console.log(hacky)
  return (
    <a href={`https://www.kieselguitars.com/guitars-in-stock/${hacky}`}>
      <img className="guitarImages" src={props.src} alt={props.alt} />
    </a>
  )
}

export default Img
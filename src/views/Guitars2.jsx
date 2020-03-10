import React from 'react'
import Img from '../components/Img'

let guitarImages = []

async function GuitarsInStock() {
  
  let m
  let urls = []

  const corsUrl = `https://cors-anywhere.herokuapp.com/`
  const searchUrl = `https://www.kieselguitars.com/guitarsinstock/electric-guitars`;
  const regEx = /<img[^>]+src='https:\/\/([^'>]+)/g

  const response = await fetch(corsUrl + searchUrl)  
  const htmlString = await response.text();

  while (m = regEx.exec(htmlString)) {
    urls.push(m[1]);
  }
  console.log(urls);
  return urls
}

GuitarsInStock()

const mockGuitarImages = [
  'https://www.kieselguitars.com/images/guitars-in-stock/small/121978.jpg', 
  'https://www.kieselguitars.com/images/guitars-in-stock/small/130073.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/130087.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/130137.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/130301.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/130336.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/130337.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/130355.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/130367.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/130481.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/131333.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/131517.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/137024.jpg',
  'https://www.kieselguitars.com/images/guitars-in-stock/small/139260.jpg',
]

function Guitars() {
  return (
    <div>
      {
        mockGuitarImages.map(guitar => (
          <Img key={guitar} src={guitar} alt={guitar} />
        ))
      }
    </div>
  )
}

export default Guitars
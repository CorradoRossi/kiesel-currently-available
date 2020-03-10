import React from 'react'
import Img from '../../components/Img'

const guitarImages = []

//const getData = async () => {
//  return Promise.all(guitarImages.map(item => (
//    <Img key={item} src={item} alt={item} />
//  )))
//}

async function GuitarsInStock() {
  let m
  let urls = []
  const corsUrl = `https://cors-anywhere.herokuapp.com/`
  const searchUrl = `https://www.kieselguitars.com/guitarsinstock/electric-guitars`;
  const regEx = /<img[^>]+src='https:\/\/([^'>]+)/g

  const response = await fetch(corsUrl + searchUrl);  
  const htmlString = await response.text();

  while (m = regEx.exec(htmlString)) {
    urls.push(m[1]);
  }
  console.log(urls);
  return urls
}

GuitarsInStock()

//const guitarImages = [
//  'https://www.kieselguitars.com/images/guitars-in-stock/small/121978.jpg', 
//  'https://www.kieselguitars.com/images/guitars-in-stock/small/130073.jpg',
//  'https://www.kieselguitars.com/images/guitars-in-stock/small/130087.jpg',
//  'https://www.kieselguitars.com/images/guitars-in-stock/small/130137.jpg',
//  'https://www.kieselguitars.com/images/guitars-in-stock/small/130301.jpg',
//  'https://www.kieselguitars.com/images/guitars-in-stock/small/130336.jpg',
//  'https://www.kieselguitars.com/images/guitars-in-stock/small/130337.jpg',
//  'https://www.kieselguitars.com/images/guitars-in-stock/small/130355.jpg'
//]

function Guitars() {
  return (
    <div>
      {
        guitarImages.map(guitar => (
          <Img key={guitar} src={guitar} alt={guitar} />
        ))
      }
    </div>
  )
}

export default Guitars
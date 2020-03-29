import React from 'react'
//import { mockImages } from '../utils/utils.js'
import Image from '../../components/Image'

class Guitars extends React.Component {
  constructor() {
    super(); 
    this.state = {
      guitars: []
    }
  }

  useFetch() {
    let m
    let urls = []
  
    const corsUrl = `https://cors-anywhere.herokuapp.com/`
    const searchUrl = `https://www.kieselguitars.com/guitarsinstock/electric-guitars`;
    const regEx = /<img[^>]+src='https:\/\/www.kieselguitars.com\/images\/guitars-in-stock([^'>]+)/g
  
    fetch(corsUrl + searchUrl)  
    .then(response => response.text())
    .then(result => {
      while (m = regEx.exec(result)) {
        urls.push(m[1]);
      }
    })
    setTimeout(function() {
      //console.log(urls)
      this.setState({ guitars: urls });
    }
    .bind(this), 
    5000)
  }
  
  componentDidMount() {
    this.useFetch()
  }
  
  render() {
    return (
      <div className="container">
        {
          this.state.guitars.map(guitar => (
            <Image key={guitar} src={"https://www.kieselguitars.com/images/guitars-in-stock" + guitar} alt={guitar} />
          //mockImages.map(guitar => (
          //  <Img2 key={guitar} src={guitar} alt={guitar} />
          ))
        }
      </div>
    )
  }
}

export default Guitars
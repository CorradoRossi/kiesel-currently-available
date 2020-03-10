import React from 'react'
import Img from '../components/Img'

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
    const regEx = /<img[^>]+src='https:\/\/(gis-namm-20.jpg\W)([^'>]+)/g
  
    fetch(corsUrl + searchUrl)  
    .then(response => response.json())
    .then(result => {
      while (m = regEx.exec(result)) {
        urls.push(m[1]);
      }
    })
    console.log(urls)
    this.setState({
      guitars: urls
    })
  }
  
  componentDidMount() {
    this.useFetch()
  }
  
  render() {
    return (
      <div>
        {
          this.state.guitars.map(guitar => (
            <Img key={guitar} src={"https://" + guitar} alt={guitar} />
          ))
        }
      </div>
    )
  }
}

export default Guitars
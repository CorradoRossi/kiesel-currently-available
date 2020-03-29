import React from 'react'
import Image from '../components/Image'
import { CORS_ANYWHERE_URL, KIESEL_BASS_SEARCH_URL, KIESEL_GUITARS_URL } from '../utils/constants'

class Guitars extends React.Component {
  constructor() {
    super(); 
    this.state = {
      guitars: []
    }
  }

  async useFetch() {
    let response = await fetch(CORS_ANYWHERE_URL + KIESEL_BASS_SEARCH_URL)
    let data = await response.text()
    return data
  }
  
  componentDidMount() {
    let m
    let urls = []
    let regEx = /<img[^>]+src='https:\/\/www.kieselguitars.com\/images\/guitars-in-stock([^'>]+)/g
    this.useFetch().then(result => {
      while (m = regEx.exec(result)) {
        urls.push(m[1]);
      }
    })
    .then(() => this.setState({ guitars: urls }));
  }
  
  render() {
    return (
      <div className="container">
        {
          this.state.guitars.map(guitar => (
            <Image 
              key={guitar} 
              src={KIESEL_GUITARS_URL + guitar} 
              guitarId={guitar} 
              alt={guitar} 
            />
          ))
        }
      </div>
    )
  }
}

export default Guitars
import React from 'react'
import Image from '../components/Image'

class Guitars extends React.Component {
  constructor() {
    super(); 
    this.state = {
      guitars: []
    }
  }

  async useFetch() {
    const corsUrl = `https://cors-anywhere.herokuapp.com/`
    const searchUrl = `https://www.kieselguitars.com/guitarsinstock/electric-guitars`;
    let response = await fetch(corsUrl + searchUrl)
    let data = await response.text()
    return data
  }
  
  componentDidMount() {
    //this.setState({guitars: mockImages})
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
            <Image key={guitar} src={"https://www.kieselguitars.com/images/guitars-in-stock" + guitar} guitarId={guitar} alt={guitar} />
          ))
        }
      </div>
    )
  }
}

export default Guitars
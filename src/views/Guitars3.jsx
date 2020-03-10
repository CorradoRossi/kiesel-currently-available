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
      
      this.setState({
        guitars: urls
      })
      return urls
    }
    GuitarsInStock()
  }

  //useFetch() {
  //  let m
  //  let urls = []
  //
  //  const corsUrl = `https://cors-anywhere.herokuapp.com/`
  //  const searchUrl = `https://www.kieselguitars.com/guitarsinstock/electric-guitars`;
  //  const regEx = /<img[^>]+src='https:\/\/(gis-namm-20.jpg\W)([^'>]+)/g
  //
  //  fetch(corsUrl + searchUrl)  
  //  .then(response => response.text())
  //  .then(result => {
  //    while (m = regEx.exec(result)) {
  //      console.log(urls)
  //      urls.push(m[1]);
  //    }
  //  })
  //  this.setState({
  //    guitars: urls
  //  })
  //}
  
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
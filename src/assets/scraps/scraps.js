function parseHtmlString(yourHtmlString) {
  let element = document.createElement('div'); 
  element.innerHTML = yourHtmlString; 
  var imgSrcUrls = element.getElementsByTagName("img");
   for (var i = 0; i < imgSrcUrls.length; i++) { 
          var urlValue = imgSrcUrls[i].getAttribute("src"); 
          if (urlValue) { 
          imgSrcUrls[i].setAttribute("src", "You Desired Change");
          }
      }
  }

  //useFetch() {
  //  async function GuitarsInStock() {
  //
  //    let m
  //    let urls = []
  //  
  //    const corsUrl = `https://cors-anywhere.herokuapp.com/`
  //    const searchUrl = `https://www.kieselguitars.com/guitarsinstock/electric-guitars`;
  //    const regEx = /<img[^>]+src='https:\/\/([^'>]+)/g
  //  
  //    const response = await fetch(corsUrl + searchUrl)  
  //    const htmlString = await response.text();
  //  
  //    while (m = regEx.exec(htmlString)) {
  //      urls.push(m[1]);
  //    }
  //    console.log(urls);
  //    
  //    this.setState({
  //      guitars: urls
  //    })
  //    return urls
  //  }
  //  GuitarsInStock()
  //}
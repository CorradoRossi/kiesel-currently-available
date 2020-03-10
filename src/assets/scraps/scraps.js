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
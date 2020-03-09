const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

var data = null; 
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=New York", true); 
xhr.setRequestHeader("Authorization", "Bearer lNsIRYPGSFJMX8oD93nl4hD89iueKMgv12lLEr_Jbb_ei0KjFOIwYJJKWtnqwXCWr-et9s3arwLq1VQzZnXoU7tvVf1Y2GhDsgh6vBMBFgvKRelL9Urfblatig1gXnYx");

xhr.onload = function() {
    var data = JSON.parse(this.response)
    if (xhr.status >= 200 && xhr.status < 400) {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
      const h1 = document.createElement('h1')
      h1.textContent = console.log(data.businesses[0].name)
      console.log(data.businesses[1].name);
      console.log(data.businesses[2].name);
      console.log(data.businesses[3].name);
      console.log(data.businesses[4].name);
      console.log(data.businesses[5].name);
      container.appendChild(card)
      card.appendChild(h1)
     }
 else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Not working!`
    app.appendChild(errorMessage)
  }
}
xhr.send()

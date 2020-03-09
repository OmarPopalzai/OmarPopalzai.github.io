var data = null;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Houston"); 
xhr.setRequestHeader("Authorization", "Bearer CZCIY3AdgHRjF6VM7Xcpx7RiwMpHn0XnIfxhmQDU5GCh3paMSJAUjSSj09mrkFbdRe11JR3jBxZgMgmlFK_Ozyd68YdLZb7kOaYq9e2DYHZ-Gq-vXPMw8uVJn01kXnYx");
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    data = JSON.parse(this.responseText);
    data.forEach(businesses => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    }
    console.log(data);
  }
});
xhr.send(data);

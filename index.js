console.log("This is the Index JavaScript file for the Project-3");
// a2d5d02818c642889e1c4a607e00e159

/*
Other categories may be:
entertainment
business
health
sports
technology 
science
*/

// Initialize the news api parameters
let source = 'in';
let choice = 'Health';

document.getElementById("unOrderedList").addEventListener('click', function (e) {
  console.log("You have clicked on the UnorderList Tag");
  choice = e.target.innerText;
  // console.log(choice);
  
  let apikey = 'a2d5d02818c642889e1c4a607e00e159';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();

// open the xhr object for the GET request
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&category=${choice}&apiKey=${apikey}`, true);
// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="accordion-item">
                              <h2 class="accordion-header" id="heading${index}">
                               <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                aria-expanded="true" aria-controls="collapse${index}"><strong>Breaking News ${index + 1} :- </strong>
                                 ${element["title"]}
                               </button>
                              </h2>
                              <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                               data-bs-parent="#newsAccordion">
                               <div class="accordion-body">
                                ${element["content"]} <a href="${element['url']}" target="_blank">Read more here!</a>
                                </div>
                              </div>
               </div>`
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
  else {
    console.error('Some Error Occurred!');
  }
}
xhr.send()
console.log("The current Selected choice is:=",choice);
});



let apikey = 'a2d5d02818c642889e1c4a607e00e159';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();

// open the xhr object for the GET request
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&category=${choice}&apiKey=${apikey}`, true);
// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="accordion-item">
                              <h2 class="accordion-header" id="heading${index}">
                               <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                aria-expanded="true" aria-controls="collapse${index}"><strong>Breaking News ${index + 1} :- </strong>
                                 ${element["title"]}
                               </button>
                              </h2>
                              <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                               data-bs-parent="#newsAccordion">
                               <div class="accordion-body">
                                ${element["content"]} <a href="${element['url']}" target="_blank">Read more here!</a>
                                </div>
                              </div>
               </div>`
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
  else {
    console.error('Some Error Occurred!');
  }
}
xhr.send()


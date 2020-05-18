// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  // const articles = response.data.articles;
  // const keys = Object.keys(articles);
  // console.log(keys);
  // console.log(articles);
  // keys.forEach(article => {
  //   // console.log(articles[article]);
  //   entry.appendChild(cardComponent(article));
  // })
  response.data.articles.bootstrap.forEach( article => {
    entry.append(cardComponent(article));
  })
})
.catch(error => error);

function cardComponent(obj) {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  img.setAttribute('href', `${obj.authorPhoto}`);
  authorName.textContent = `By ${obj.authorName}`;

  card.append(headline, author);
  author.append(imgContainer, authorName);
  imgContainer.append(img);

  return card;
}

const entry = document.querySelector('.cards-container');
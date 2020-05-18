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


function cardComponent(obj) {
  // Creating elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  // Adding classes and properties
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  headline.textContent = `${obj.headline}`; 
  img.setAttribute('src', `${obj.authorPhoto}`) 
  span.textContent = `By ${obj.authorName}`

  // Combining elements
  card.append(headline, author);
  author.append(imgContainer, span);
  imgContainer.append(img);

  // console.log(card);
  return card;
}

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  console.log(response.data.articles);
  const keys = Object.keys(response.data.articles)
  // console.log(response.data.articles[keys]);
  keys.forEach(topic => {
    response.data.articles[topic].forEach(obj => {
      cardContainer.appendChild(cardComponent(obj));
    })
    
  })
  // keys.forEach(topic => {
  //   // console.log(topic);
  //   // console.log(response.data.articles[topic]);
  //   cardContainer.appendChild(cardComponent(topic));
  // })
  // console.log(keys);
  // const bootstrap = response.data.articles.bootstrap;
  // const js = response.data.articles.javascript;
  // const technology = response.data.articles.technology;
  // const jquery = response.data.articles.jquery;
  // const node = response.data.articles.node;
  // const [bootstrap, javascript, technology, jquery, node] = response.data.articles;
  // console.log(bootstrap);
  // console.log(bootstrap);
  // bootstrap.forEach(article => {
  //   // console.log(article);
  //   cardContainer.append(cardComponent(article));
  // })

  // js.forEach(article => {
  //   // console.log(article);
  //   cardContainer.append(cardComponent(article));
  // })

  // technology.forEach(article => {
  //   // console.log(article);
  //   cardContainer.append(cardComponent(article));
  // })

  // jquery.forEach(article => {
  //   // console.log(article);
  //   cardContainer.append(cardComponent(article));
  // })

  // node.forEach(article => {
  //   // console.log(article);
  //   cardContainer.append(cardComponent(article));
  // })
})
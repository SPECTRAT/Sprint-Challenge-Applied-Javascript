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

  .then((results) => {
    console.log(results);
    
    function Card(subject) {
      const newCard = document.createElement('div'); 
      const headline = document.createElement('div');
      const author = document.createElement('div');
      const imageCont = document.createElement('div');
      const authImage = document.createElement('img');
      const credit = document.createElement('span');

      headline.textContent = subject.headline;
      authImage.src = subject.authorPhoto;
      authImage.alt = `picture of ${subject.authorName}`;
      credit.textContent = `By ${subject.authorName}`;

      newCard.classList.add('card');
      headline.classList.add('headline');
      author.classList.add('author');
      imageCont.classList.add('img-container');

      imageCont.appendChild(authImage);
      imageCont.appendChild(credit);
      author.appendChild(imageCont);
      newCard.appendChild(headline);
      newCard.appendChild(author);
      
      return newCard;
    };
       
    // !VVV This whole section...DRY...fix! //
    results.data.articles.bootstrap.forEach(article => {
      const newCard = Card(article);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newCard);
    });

    results.data.articles.javascript.forEach(article => {
      const newCard = Card(article);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newCard);
    });
    
    results.data.articles.jquery.forEach(article => {
      const newCard = Card(article);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newCard);
    });
    
    results.data.articles.node.forEach(article => {
      const newCard = Card(article);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newCard);
    });

    results.data.articles.technology.forEach(article => {
      const newCard = Card(article);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newCard);
    });
    
  });


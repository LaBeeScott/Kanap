// ----  Script lié à la page index.html  ----
/*******************************************/
// ----  Lancement de l'API avec fetch  ----
// ----  Et création des liens des fiches produits, une fiche par produit  ----

const url = "http://localhost:3000/api/products";

fetch(url)
  .then((response) => response.json())
  .then((data) => addCards(data))
  .catch((error => console.log("Une erreur s'est produite !", error)))

// for (i=0; i>7; i++) {

// }

function addCards() {
  
  const items = document.getElementById('items');
  const linkTag = document.createElement('a');
  linkTag.setAttribute('href', "./product.html?id=42");
  const articleTag = document.createElement('article');
  const imageTag = new Image();
  const titleTag = document.createElement('h3');
  const paragraphTag = document.createElement('p');


  items.appendChild(linkTag)
  linkTag.appendChild(articleTag)
  articleTag.appendChild(imageTag)
  imageTag.src = 'http://localhost:3000/images/kanap01.jpeg'
  titleTag.classList.add('productName')
  titleTag.textContent = 'Kanap Sinopé';
  articleTag.appendChild(titleTag)
  paragraphTag.classList.add('productDescription')
  paragraphTag.textContent = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  articleTag.appendChild(paragraphTag)
}



/* 

  Je dois récupérer les données sur l'API avec la méthode fetch.
  Puis je crée les fiches produits en récupérant les données de chaque objet de l'API,
  en utilisant la méthode .createElement.
      -> a href="./product.html?id=42"
        #items
          ->  article
            ->  image
            ->  h3 class="productName"
            ->  p class="productDescription"
          ->/  article

  Je viens ensuite parcourir le document de l'adresse mise dans l'API,
  à l'aide d'une boucle for, pour en obtenir les données et les utiliser dans une fonction?

*/
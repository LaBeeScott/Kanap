// ----  Script lié à la page index.html  ----  //

/* ***************************************** */

// ----  Lancement de l'API avec fetch  ----  //

fetch("http://localhost:3000/api/products")
.then(function(response) {
  if (response.ok) {
    return response.json();
  };  
})
.then(function(allKanaps) {  // Ici, on récupère les données du fichier JSON pour pouvoir les utiliser
  for (let article in allKanaps) {
    addCards(allKanaps[article]);
  }
  console.log(allKanaps);
})
.catch(function(err) {
  console.log("Une erreur est survenue !");
});

// ----  Création des liens des fiches produits, une fiche par produit  ----  //

function addCards(kanap) {

  // ----  Accès à 'items' / Création des balises  ----  //

  const items = document.getElementById('items');
  const linkTag = document.createElement('a');
  const articleTag = document.createElement('article');
  const imageTag = new Image();
  const titleTag = document.createElement('h3');
  const paragraphTag = document.createElement('p');

  // ----  Ici, on rattache les éléments à leur "parent" et on leur donne un attribut ----  //
  // ----  On récupère aussi les données dont on a besoin (id, texte alt et description) ----  //

  items.appendChild(linkTag);
  linkTag.appendChild(articleTag);
  linkTag.setAttribute('href', "./product.html?id=" + kanap._id);
  articleTag.appendChild(imageTag);
  imageTag.src = kanap.imageUrl;
  imageTag.setAttribute('alt', `${kanap.altTxt}`);
  titleTag.classList.add('productName');
  titleTag.textContent = kanap.name;
  articleTag.appendChild(titleTag);
  paragraphTag.classList.add('productDescription');
  paragraphTag.textContent = kanap.description;
  articleTag.appendChild(paragraphTag);
};

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
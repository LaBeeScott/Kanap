// ----  Script lié à la page product.html  ----  //

/* ***************************************** */

// ----  Ici on veut accéder aux données de l'url  ---- //
// ----  Pour ne créer qu'une seule page qui se dupliquera  ---- //
// ----  Pour chaque article   ---- //



// ----  Je récupère les données dans l'url  ---- //
// ----  Pour créer une page par article avec son id  ---- //

const kanapDatas = window.location.search;
const urlParams = new URLSearchParams(kanapDatas);
const id = urlParams.get('id');

fetch(`http://localhost:3000/api/products/${id}`)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        };
    })
    .then((res) => displayKanaps(res))


// ----  Je crée les balises nécéssaires  ---- //

function displayKanaps(kanap) {

    // Image

    const item__img = document.getElementsByClassName('item__img')[0];
    const kanapImg = new Image();
    kanapImg.src = kanap.imageUrl;
    kanapImg.setAttribute('alt', `${kanap.altTxt}`);
    item__img.appendChild(kanapImg);

    // Name

    const title = document.getElementById('title');
    title.textContent = kanap.name;

    // Prix

    const price = document.getElementById('price');
    price.textContent = kanap.price;

    // Description

    const description = document.getElementById('description');
    description.textContent = kanap.description;

    // Options
    // ----  La partie 'option' a une particularité, il faut créer une balise par option  ---- //
    
    const colorOptions = kanap.colors;
    const colors = document.getElementById('colors');

    for (i=0; i<kanap.colors.length; i++) {
        const addOption = document.createElement('option');
        colors.appendChild(addOption);
        addOption.textContent = kanap.colors[i];
    };

    console.log(colorOptions);

}
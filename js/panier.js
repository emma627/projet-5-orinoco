function afficheContent() {
  const bigContainerPanier = document.getElementById("panier-page");
  // bien vider le contenu html ds bigContainer
  bigContainerPanier.innerHTML = "";

  //création de message si le panier est vide -row,col,h3,img
  if (basketContentArray == null || basketContentArray.length === 0) {
    let panierVideRow = document.createElement("div");
    panierVideRow.className = "row";
    bigContainerPanier.appendChild(panierVideRow);

    let panierVideCol = document.createElement("div");
    panierVideCol.setAttribute("class", "col mt-5 mb-2");
    panierVideCol.id = "panier-vide";
    panierVideRow.appendChild(panierVideCol);

    let panierVideH3 = document.createElement("h3");
    panierVideH3.textContent = "Votre panier est actuellement vide...";
    panierVideCol.appendChild(panierVideH3);

    let panierVideImg = document.createElement("img");
    panierVideImg.src = "./images/empty-cart.png";
    panierVideImg.setAttribute("width", "150px");
    panierVideCol.appendChild(panierVideImg);
  } else {
    //si il y des articles choisis dans le panier,afficher les détailles
    for (let i = 0; i < basketContentArray.length; i++) {
      console.log(basketContentArray[i]);
      //création de row
      let basketItemRow = document.createElement("div");
      basketItemRow.setAttribute("class", "row mt-3");
      basketItemRow.id = "basket-items";
      bigContainerPanier.appendChild(basketItemRow);
      //création de col
      let basketItemCol = document.createElement("div");
      basketItemCol.setAttribute("class", "col-12 col-md-6 mt-3 mb-3");
      basketItemCol.id = "baksketItemGauche";
      basketItemRow.appendChild(basketItemCol);
      //création de l'image
      let imgSpan = document.createElement("span");
      imgSpan.className = "item-img";
      basketItemCol.appendChild(imgSpan);
      let itemImg = document.createElement("img");
      itemImg.src = basketContentArray[i].image;
      itemImg.setAttribute("width", "150px");
      imgSpan.appendChild(itemImg);
      //nom,lentille,quantité de l'appareill photo
      let itemDescription = document.createElement("p");
      itemDescription.setAttribute("class", "item-description ml-3");
      basketItemCol.appendChild(itemDescription);
      let itemName = document.createElement("span");
      itemName.textContent = basketContentArray[i].name;
      let br1 = document.createElement("br");
      itemName.append(br1);
      itemDescription.appendChild(itemName);
      let itemLentille = document.createElement("span");
      itemLentille.textContent = "Lentille: " + basketContentArray[i].lentille;
      itemDescription.appendChild(itemLentille);
      let br2 = document.createElement("br");
      itemLentille.appendChild(br2);
      let itemQuantite = document.createElement("span");
      itemQuantite.textContent = "Quantitié: " + basketContentArray[i].quantite;
      itemDescription.appendChild(itemQuantite);
      //prix,supprimer item de l'appareill photo
      let basketItemColDroite = document.createElement("div");
      basketItemColDroite.setAttribute(
        "class",
        "col-12 col-md-6 mt-3 mb-3 droite"
      );
      basketItemRow.appendChild(basketItemColDroite);
      let itemPrixP = document.createElement("p");
      basketItemColDroite.appendChild(itemPrixP);
      let itemPrix = document.createElement("span");
      itemPrix.className = "text-primary";
      itemPrix.textContent = "Prix: ";
      itemPrixP.appendChild(itemPrix);
      let itemPrice = document.createElement("span");
      itemPrice.textContent =
        basketContentArray[i].price * basketContentArray[i].quantite + "€";
      itemPrixP.appendChild(itemPrice);
      let supprimerButton = document.createElement("button");
      supprimerButton.setAttribute("type", "button");
      supprimerButton.setAttribute("class", "btn btn-warning");
      supprimerButton.setAttribute("data-index", i);
      supprimerButton.id = "supprimerButton";
      supprimerButton.textContent = "Supprimer";

      supprimerButton.addEventListener("click", function (event) {
        event.preventDefault();
        let i = this.getAttribute("data-index");
        alert("Cet article a bien été supprimé !");
        //on efface ds le tableau js
        basketContentArray.splice(i, 1);
        // on enregistre le nouveau tableau ds localStorage
        localStorage.setItem(
          "basketContentArray",
          JSON.stringify(basketContentArray)
        );
        // re afficher le partie html
        afficheContent();
      });
      let trashIconItem = document.createElement("i");
      trashIconItem.setAttribute("class", "fas fa-trash-alt");
      supprimerButton.appendChild(trashIconItem);
      basketItemColDroite.appendChild(supprimerButton);
    }
  }
}

// récuperer des données depuis localStorage
let basketContentArray = JSON.parse(localStorage.getItem("basketContentArray"));
console.log(basketContentArray);

afficheContent();

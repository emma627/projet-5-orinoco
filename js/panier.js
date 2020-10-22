// récuperer des données depuis localStorage
let basketContentArray = JSON.parse(localStorage.getItem("basketContentArray"));
console.log(basketContentArray);

function afficheContent() {
  const bigContainerPanier = document.getElementById("panier-page");
  // bien vider le contenu html dans bigContainer
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
      supprimerButton.textContent = "Supprimer ";
      supprimerButton.addEventListener("click", function (event) {
        event.preventDefault();
        let i = this.getAttribute("data-index");
        alert("Cet article a bien été supprimé !");
        //on efface dans le tableau js
        basketContentArray.splice(i, 1);
        // on enregistre le nouveau tableau dans localStorage
        localStorage.setItem(
          "basketContentArray",
          JSON.stringify(basketContentArray)
        );
        // re afficher la partie html
        afficheContent();
      });
      let trashIconItem = document.createElement("i");
      trashIconItem.setAttribute("class", "fas fa-trash-alt");
      supprimerButton.appendChild(trashIconItem);
      basketItemColDroite.appendChild(supprimerButton);
    }
    //affiche du prix total ou vider le panier
    let prixTotalRow = document.createElement("div");
    prixTotalRow.setAttribute("class", "row prix-total mt-3");
    bigContainerPanier.appendChild(prixTotalRow);
    //col
    let prixTotalCol = document.createElement("div");
    prixTotalCol.className = "col-auto";
    prixTotalRow.appendChild(prixTotalCol);
    //p
    let prixTotalP = document.createElement("p");
    prixTotalCol.appendChild(prixTotalP);
    let itemsTotalSpan = document.createElement("span");
    itemsTotalSpan.className = "items-total";
    itemsTotalSpan.textContent = "Total: ";
    prixTotalP.appendChild(itemsTotalSpan);
    let calculSpan = document.createElement("span");
    calculSpan.setAttribute("class", "text-primary items-price");
    //calcul du prix total
    let prixTotal = 0;
    for (let item of basketContentArray) {
      prixTotal += item.quantite * item.price;
    }
    calculSpan.textContent = prixTotal + "€";
    prixTotalP.appendChild(calculSpan);
    //vider le panier
    let buttonCol = document.createElement("div");
    buttonCol.className = "col-auto";
    prixTotalRow.appendChild(buttonCol);
    let buttonBtn = document.createElement("button");
    buttonBtn.setAttribute("type", "button");
    buttonBtn.setAttribute("class", "btn btn-info");
    buttonBtn.textContent = "Vider votre panier ";
    buttonBtn.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.clear("basketContentArray");
      alert("Votre panier a bien été vidé !");
      window.location.href = "panier.html";
    });
    buttonCol.appendChild(buttonBtn);
    let viderPanierIcon = document.createElement("i");
    viderPanierIcon.setAttribute("class", "fas fa-trash-alt");
    buttonBtn.appendChild(viderPanierIcon);

    //création de form
    let form = document.createElement("form");
    form.id = "form";
    bigContainerPanier.appendChild(form);
    //h4
    let formH4 = document.createElement("h4");
    formH4.id = "formH4";
    formH4.innerHTML =
      "Pour valider votre commande,<br> merci de remplir ce formulaire";
    form.appendChild(formH4);

    let formRow = document.createElement("div");
    formRow.setAttribute("class", "form-row mt-4");
    form.appendChild(formRow);

    // création fonctions de validité prénom, nom, ville
    function isValid(value) {
      return /^[A-Z-a-z\s]{3,40}$/.test(value);
    }

    // création fonctions de validité adresse
    function isValidAddresse(value) {
      return /^[A-Z-a-z-0-9\s]{5,80}$/.test(value);
    }

    // création fonctions de validité mail
    function isValidMail(value) {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }

    //création funcions de validité téléphone
    function isValidPhone(value){
      return /(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}/.test(value);
    }

    //prénom
    let prenomFormGroup = document.createElement("div");
    prenomFormGroup.setAttribute("class", "form-group col-md-6 pl-4 pr-4");
    formRow.appendChild(prenomFormGroup);
    let labelPrenom = document.createElement("label");
    labelPrenom.setAttribute("for", "prénom");
    labelPrenom.textContent = "Prénom:";
    prenomFormGroup.appendChild(labelPrenom);
    let prenomInput = document.createElement("input");
    prenomInput.setAttribute("type", "text");
    prenomInput.className = "form-control";
    prenomInput.setAttribute("name", "prénom");
    prenomInput.setAttribute("placeholder", "votre prénom");
    prenomInput.required = true;
    // Vérification de la validité du prénom
    prenomInput.addEventListener("change", function (event) {
      if (isValid(prenomInput.value) == false) {
        event.preventDefault();
        alert("veuillez saisir uniquement des lettres dans votre prénom.");
      }
    });
    prenomFormGroup.appendChild(prenomInput);
    //nom
    let nomFormGroup = document.createElement("div");
    nomFormGroup.setAttribute("class", "form-group col-md-6 pl-4 pr-4");
    formRow.appendChild(nomFormGroup);
    let labelNom = document.createElement("label");
    labelNom.setAttribute("for", "nom");
    labelNom.textContent = "Nom:";
    nomFormGroup.appendChild(labelNom);
    let nomInput = document.createElement("input");
    nomInput.setAttribute("type", "text");
    nomInput.className = "form-control";
    nomInput.setAttribute("name", "nom");
    nomInput.setAttribute("placeholder", "votre nom");
    nomInput.required = true;
    // Vérification de la validité du nom
    nomInput.addEventListener("change",function(event){
      if(isValid(nomInput.value)==false){
        event.preventDefault();
        alert("veuillez saisir uniquement des lettres dans votre nom.")
      }
    });
    nomFormGroup.appendChild(nomInput);
    //addresse email
    let emailFormGroup = document.createElement("div");
    emailFormGroup.className = "form-group col-md-6 pl-4 pr-4";
    formRow.appendChild(emailFormGroup);
    let emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "addresseMail");
    emailLabel.textContent = "Addresse Email:";
    emailFormGroup.appendChild(emailLabel);
    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "text");
    emailInput.className = "form-control";
    emailInput.setAttribute("name", "addresseMail");
    emailInput.setAttribute("placeholder", "votre addresse email");
    emailInput.required = true;
    //vérification de la validité du mail
    emailInput.addEventListener("change",function(event){
      if(isValidMail(emailInput.value) == false){
        event.preventDefault();
        alert("veuillez saisir correctement votre addresse mail.")
      }
    })
    emailFormGroup.appendChild(emailInput);
    //addresse
    let addresseFormGroup = document.createElement("div");
    addresseFormGroup.className = "form-group col-md-6 pl-4 pr-4";
    formRow.appendChild(addresseFormGroup);
    let addresseLabel = document.createElement("label");
    addresseLabel.setAttribute("for", "addresse");
    addresseLabel.textContent = "Addresse:";
    addresseFormGroup.appendChild(addresseLabel);
    let addresseInput = document.createElement("input");
    addresseInput.setAttribute("type", "text");
    addresseInput.className = "form-control";
    addresseInput.setAttribute("name", "addresse");
    addresseInput.setAttribute("placeholder", "votre addresse");
    addresseInput.required = true;
    //vérification de la viladiaté de l'addresse
    addresseInput.addEventListener("change",function(event){
      if(isValidAddresse(addresseInput.value) == false){
        event.preventDefault();
        alert("veuillez ne pas saisir de symbole dans votre addresse.")
      }
    })
    addresseFormGroup.appendChild(addresseInput);
    //numéro de téléphone
    let phoneFormGroup = document.createElement("div");
    phoneFormGroup.className = "form-group col-md-6 pl-4 pr-4";
    formRow.appendChild(phoneFormGroup);
    let phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", "téléphone");
    phoneLabel.textContent = "Numéro de téléphone:";
    phoneFormGroup.appendChild(phoneLabel);
    let phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "text");
    phoneInput.className = "form-control";
    phoneInput.setAttribute("name", "téléphone");
    phoneInput.setAttribute("placeholder", "votre numéro de téléphone");
    phoneInput.required = true;
    //vérification de la validité du téléphone
    phoneInput.addEventListener("change",function(event){
    if (isValidPhone(phoneInput.value) == false){
      event.preventDefault();
      alert("veuillez saisir correctement votre numéro de téléphone.")
    }
    })
    phoneFormGroup.appendChild(phoneInput);
    //ville
    let villeFormGroup = document.createElement("div");
    villeFormGroup.className = "form-group col-md-6 pl-4 pr-4";
    formRow.appendChild(villeFormGroup);
    let villeLabel = document.createElement("label");
    villeLabel.setAttribute("for", "ville");
    villeLabel.textContent = "Ville:";
    villeFormGroup.appendChild(villeLabel);
    let villeInput = document.createElement("input");
    villeInput.setAttribute("type", "text");
    villeInput.className = "form-control";
    villeInput.setAttribute("name", "ville");
    villeInput.setAttribute("placeholder", "votre ville");
    villeInput.required = true;
    //vérification de la validaté de la ville
    villeInput.addEventListener("change",function(event){
      if(isValid(villeInput.value) == false){
        event.preventDefault();
        alert("veuillez saisir corrtement votre  ville.")
      }
    })
    villeFormGroup.appendChild(villeInput);
    // commander button
    let commanderButton = document.createElement("button");
    commanderButton.setAttribute("type", "submit");
    commanderButton.setAttribute("class", "btn btn-primary mt-3 mb-4");
    commanderButton.id = "commanderButton";
    commanderButton.textContent = "COMMANDER";
    form.appendChild(commanderButton);
  }
}

afficheContent();

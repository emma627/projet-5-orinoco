//récupérerqtion de l'ID URL de la page
const queryString = window.location.search;
console.log(window.location);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log(id);
// function getId(){
//     const queryString = window.location.search;
//     const id = queryString.replace("?id=","");
//     return id;
// }


function loadCamera() {
  let request = new XMLHttpRequest();

  request.open("get", "http://localhost:3000/api/cameras/" + id, true);
  request.onload = function () {
    if (request.status == 200) {
    
      var camera = JSON.parse(request.responseText);
console.log(camera);
      let bigContainer = document.getElementById("product");

      // création h1 de la page
      const h1Div = document.getElementById("h1Div");
      const h1 = document.createElement("h1");
      h1Div.classList.add("col");
      h1Div.classList.add("mt-3");
      h1Div.classList.add("mb-2");
      h1Div.appendChild(h1);
      h1.textContent = "Orinoco " + camera.name;
      //création de row
      let productRow = document.createElement("div");
      productRow.className = "row";
      bigContainer.appendChild(productRow);
      //création de col
      let productCol = document.createElement("div");
      productCol.className = "col";
      productRow.appendChild(productCol);
      //création de card
      let ProductCard = document.createElement("div");
      ProductCard.classList.add("card");
      ProductCard.classList.add("mb-4");
      ProductCard.classList.add("mb-lg-0");
      ProductCard.classList.add("border-light");
      ProductCard.classList.add("shadow-sm");
      productCol.appendChild(ProductCard);
      //création de l'image
      let imageImg = document.createElement("img");
      imageImg.className = "card-img-top";
      imageImg.src = camera.imageUrl;
      imageImg.alt = "caméra vintage" + camera.name;
      ProductCard.appendChild(imageImg);
      //création de card-body
      let productCardBody = document.createElement("div");
      productCardBody.className = "card-body";
      ProductCard.appendChild(productCardBody);
      //création de h5
      let ProductH5 = document.createElement("h5");
      ProductH5.classList.add("card-title");
      ProductH5.classList.add("text-center");
      ProductH5.textContent = camera.name;
      productCardBody.appendChild(ProductH5);
      //création de paragrah - camera description
      let productCardTextP = document.createElement("p");
      productCardTextP.className = "card-text";
      productCardTextP.textContent = camera.description;
      productCardBody.appendChild(productCardTextP);
      //création de paragragh pour le prix
      let prductPrixP = document.createElement("p");
      prductPrixP.classList.add("mt-2");
      prductPrixP.classList.add("text-center");
      productCardBody.appendChild(prductPrixP);
      //création de span à ajouter au parent prix paragragh
      let productPrixSpan = document.createElement("span");
      productPrixSpan.className = "text-primary";
      productPrixSpan.textContent = "Prix: ";
      prductPrixP.appendChild(productPrixSpan);
      //création de span pour mettre la chiffre du prix et à ajouter au parent prix paragraph
      let productChiffreSpan = document.createElement("span");
      productChiffreSpan.textContent = camera.price / 100 + "€";
      prductPrixP.appendChild(productChiffreSpan);
      //création de form
      let formDiv = document.createElement("form");
      productCardBody.appendChild(formDiv);
      //création de row
      let productRowDiv = document.createElement("div");
      productRowDiv.classList.add("row");
      productRowDiv.classList.add("justify-content-around");
      formDiv.appendChild(productRowDiv);
      //création de col pour le choix de lentilles
      let lensesColDiv = document.createElement("div");
      lensesColDiv.className = "col-auto";
      productRowDiv.appendChild(lensesColDiv);
      //création de form-group lenses
      let formGroupLenses = document.createElement("div");
      formGroupLenses.classList.add("form-group");
      formGroupLenses.classList.add("text-center");
      lensesColDiv.appendChild(formGroupLenses);
      //création de label lenses
      let labelLenses = document.createElement("label");
      labelLenses.setAttribute("for", "choix de lentilles" + camera.name);
      labelLenses.textContent = "Lentilles";
      formGroupLenses.appendChild(labelLenses);
      //création de select lenses
      let selectLenses = document.createElement("select");
      selectLenses.classList.add("form-control");
      selectLenses.classList.add("w-auto");
      selectLenses.id = "lenses";
      labelLenses.appendChild(selectLenses);

      //choix de lentilles
      const lenses = camera.lenses;

      for (i = 0; i < lenses.length; i++) {
        let selectOptionLenses = document.createElement("option");
        selectOptionLenses.setAttribute("value", lenses[i]);
        selectOptionLenses.textContent = lenses[i];
        selectLenses.appendChild(selectOptionLenses);
      }

      //création de col pour le choix de quantité
      let quantiteColDiv = document.createElement("div");
      quantiteColDiv.className = "col-auto";
      productRowDiv.appendChild(quantiteColDiv);
      //création de form-group quantité
      let formGroupQuantite = document.createElement("div");
      formGroupQuantite.classList.add("form-group");
      formGroupQuantite.classList.add("text-center");
      quantiteColDiv.appendChild(formGroupQuantite);
      //création de labal quantité
      let labelQuantite = document.createElement("label");
      labelQuantite.setAttribute("for", "quantité");
      labelQuantite.textContent = "Quantité";
      formGroupQuantite.appendChild(labelQuantite);
      //création de select quantité
      let selectQuantite = document.createElement("select");
      selectQuantite.classList.add("form-control");
      selectQuantite.classList.add("w-auto");
      selectQuantite.id = "quantite";
      labelQuantite.appendChild(selectQuantite);
      //création de option quantité
      let selectOptionQuantite1 = document.createElement("option");
      selectOptionQuantite1.setAttribute("value", "1");
      selectOptionQuantite1.textContent = "1";
      selectQuantite.appendChild(selectOptionQuantite1);
      let selectOptionQuantite2 = document.createElement("option");
      selectOptionQuantite2.setAttribute("value", "2");
      selectOptionQuantite2.textContent = "2";
      selectQuantite.appendChild(selectOptionQuantite2);
      let selectOptionQuantite3 = document.createElement("option");
      selectOptionQuantite3.setAttribute("value", "3");
      selectOptionQuantite3.textContent = "3";
      selectQuantite.appendChild(selectOptionQuantite3);

      //création de button pour ajouter au panier
      let addButton = document.createElement("button");
      addButton.type = "submit";
      addButton.classList.add("btn");
      addButton.classList.add("btn-warning");
      addButton.id = "addCamera";
      productCardBody.appendChild(addButton);
      //création de span pour "ajouter au panier"
      let ajouterAuPanierSpan = document.createElement("span");
      ajouterAuPanierSpan.textContent = "ajouter au panier ";
      addButton.appendChild(ajouterAuPanierSpan);
      //création de icon cart
      let shoppingCart = document.createElement("i");
      shoppingCart.classList.add("fas");
      shoppingCart.classList.add("fa-shopping-cart");
      addButton.appendChild(shoppingCart);

      addButton.addEventListener("click", function (event) {
        event.preventDefault();
        //stocker des données  comme un objet au localStorage
        let cameraChoisi = {
          name: camera.name,
          image: camera.imageUrl,
          ID: camera._id,
          price: camera.price / 100 ,
          lentille: selectLenses.value,
          quantite: selectQuantite.value,
        };
        console.log(cameraChoisi);
        //récupérer des données et envoyer au panier
        function addToBasket(cameraChoisi) {
          //récupérer des données véritables si le tableau exsite déjà
          let basketContentArray = JSON.parse(
            localStorage.getItem("basketContent")
          );
          //si le tableau n'existe pas, créer un tableau
          if (basketContentArray == null) {
            basketContentArray = [];
          basketContentArray.push(cameraChoisi);
          localStorage.setItem(
            "basketContent",
            JSON.stringify(basketContentArray)
          );
          }
          let test = confirm('voulez-vous ajouter cet article dans votre panier?');
          if (test){
            window.location.href = "panier.html";
          }else{
            window.location.href = "index.html";
          }
          
        }

        // //récupérer des données véritables si le tableau exsite déjà
        // let basketContentArray = JSON.parse(localStorage.getItem("basketContentArray"));
        // //si le tableau n'est pas vide
        // console.log(basketContentArray);
        // if (basketContentArray != undefined){
        //     //ajouter l'objet(articles choisis) au taleau
        //     basketContentArray.push(cameraChoisi);
        //     //ajouter l'objet serialied au localStorage
        //     localStorage.setItem("basketContentArray",JSON.stringify(basketContentArray));
        //     console.log(basketContentArray);
        //     // if (window.confirm(camera.name + "a bien été ajouté au panier")){
        //     //     window.location.href = "panier.html";
        //     // } else{
        //     //     window.location.href = "index.html";
        //     // }

        // //si le tableau n'existe pas, créer un tableau
        // } else{
        //     basketContentArray = [];
        //     basketContentArray.push(cameraChoisi);
        //     //ajouter l'objet serialied au localStorage
        //     localStorage.setItem("basketContentArray",JSON.stringify(basketContentArray));
        //     console.log(basketContentArray);
        // };
        addToBasket(cameraChoisi);
      });
    }
  };
  request.send();
}
loadCamera();

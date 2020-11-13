// récupération de l'id de la commande
let orderId = localStorage.getItem('responseOrder');
console.log(orderId);

//recupération du produits choisi
let camerasChoisis=JSON.parse(localStorage.getItem("camerasChoisis"));
console.log(camerasChoisis);

// récupération du prix total de la commande
let totalPrice = localStorage.getItem('totalPrice');
console.log(totalPrice);

//récupération du contact
let contact = JSON.parse(localStorage.getItem("contact"));
console.log(contact);

let bigContainerConfirmation = document.getElementById("confirmation");

// message de remerciement
let remercierSection = document.createElement("section");
remercierSection.setAttribute("class","section-content text-center");
bigContainerConfirmation.appendChild(remercierSection);
let confirmationImg = document.createElement("img");
confirmationImg.id = "confirmation-img";
confirmationImg.setAttribute("src","./images/email.png");
remercierSection.appendChild(confirmationImg);
let remercierH1 = document.createElement("h1");
remercierH1.setAttribute("class","mt-3");
remercierH1.textContent = "Orinoco vous remercie de votre commande !";
remercierSection.appendChild(remercierH1);
//customer info
let customerSection = document.createElement("section");
customerSection.setAttribute("class","customer-info section-content grid-container");
bigContainerConfirmation.appendChild(customerSection);
let customerRow = document.createElement("div");
customerRow.setAttribute("class","row text-center");
customerSection.appendChild(customerRow);
//column numéro de commande
let commandeDiv = document.createElement("div");
commandeDiv.className = "col-sm";
customerRow.appendChild(commandeDiv);
let commandeH5 = document.createElement("h5");
commandeH5.textContent = "Commande:";
commandeDiv.appendChild(commandeH5);
let commandeP = document.createElement("p");
commandeDiv.appendChild(commandeP);
let commandeStrong = document.createElement("strong");
commandeStrong.textContent = "commande #:";
commandeP.appendChild(commandeStrong);
let commandeSpan = document.createElement("span");
commandeSpan.textContent = orderId;
commandeP.appendChild(commandeSpan);
let livreurP = document.createElement("p");
commandeDiv.appendChild(livreurP);
let livreurStrong = document.createElement("strong");
livreurStrong.textContent = "Livreur:";
livreurP.appendChild(livreurStrong);
let livreurSpan = document.createElement("span");
livreurSpan.textContent = "Colissimo";
livreurP.appendChild(livreurSpan);
//column adresse de livraison
let livraisonDiv = document.createElement("div");
livraisonDiv.className = "col-sm";
customerRow.appendChild(livraisonDiv);
let livraisonH5 = document.createElement("h5");
livraisonH5.textContent = "Adresse de livraison:";
livraisonDiv.appendChild(livraisonH5);
let nameP = document.createElement("p");
nameP.textContent = contact.firstName + " " +contact.lastName;
livraisonDiv.appendChild(nameP);
let adresseP = document.createElement("p");
adresseP.textContent = contact.address;
livraisonDiv.appendChild(adresseP);
let cityP = document.createElement("p");
cityP.textContent = contact.city;
livraisonDiv.appendChild(cityP);
// column adresse de facturation
let facturationDiv = document.createElement("div");
facturationDiv.className = "col-sm";
customerRow.appendChild(facturationDiv);
let facturationH5 = document.createElement("h5");
facturationH5.textContent = "Adresse de facturation:";
facturationDiv.appendChild(facturationH5);
let nomP = document.createElement("p");
nomP.textContent = contact.firstName + " " +contact.lastName;
facturationDiv.appendChild(nomP);
let addressP = document.createElement("p");
addressP.textContent = contact.address;
facturationDiv.appendChild(addressP);
let villeP = document.createElement("p");
villeP.textContent = contact.city;
facturationDiv.appendChild(villeP);
//section item
let itemSection = document.createElement("section");
itemSection.setAttribute("class","items mt-4 section-content item-content");
bigContainerConfirmation.appendChild(itemSection);
let total = 0;
for(cameraChoisi of camerasChoisis){
let itemRow = document.createElement("div");
itemRow.className = "row";
itemSection.appendChild(itemRow);
let productImgDiv = document.createElement("div");
productImgDiv.setAttribute("class","col-sm product");
itemRow.appendChild(productImgDiv);
let confirmationProductImg = document.createElement("img");
//image 
confirmationProductImg.src = cameraChoisi.image;
confirmationProductImg.setAttribute("alt", "product image");
confirmationProductImg.setAttribute("width","150px;");
productImgDiv.appendChild(confirmationProductImg);
//product name
let  productNameDiv = document.createElement("div");
productNameDiv.setAttribute("class","col-sm name-desc");
itemRow.appendChild(productNameDiv);
let productNameP = document.createElement("p");
productNameP.textContent = cameraChoisi.name;
productNameDiv.appendChild(productNameP);
let productLentilleP = document.createElement("p");
productLentilleP.textContent = cameraChoisi.lentille;
productNameDiv.appendChild(productLentilleP);
let productQantiteP = document.createElement("p");
//quantité
productQantiteP.textContent = "Quantité: "+ cameraChoisi.quantite;
productNameDiv.appendChild(productQantiteP);
//prix pour chaque produit
let productprixDiv = document.createElement("div");
productprixDiv.setAttribute("class","col-sm price text-right");
itemRow.appendChild(productprixDiv);
let confirmationPrixP = document.createElement("p");
confirmationPrixP.textContent = "Prix: " + cameraChoisi.price*cameraChoisi.quantite+ "€";
productprixDiv.appendChild(confirmationPrixP);
total+=cameraChoisi.price*cameraChoisi.quantite;
}

//section amout
let amoutSection = document.createElement("section");
amoutSection.setAttribute("class","total-amount section-content mt-4");
bigContainerConfirmation.appendChild(amoutSection);
let amoutRow = document.createElement("div");
amoutRow.className = "row";
amoutSection.appendChild(amoutRow);
let leftDiv = document.createElement("div");
leftDiv.setAttribute("class","col-8 text-right");
amoutRow.appendChild(leftDiv);
let totalHorsTaxP = document.createElement("p");
totalHorsTaxP.textContent = "Total Hors Tax: "
leftDiv.appendChild(totalHorsTaxP);
let TVAp = document.createElement("p");
TVAp.textContent = "TVA: ";
leftDiv.appendChild(TVAp);
let TTCp = document.createElement("p");
TTCp.className = "font-weight-bold";
TTCp.textContent = "TTC :"
leftDiv.appendChild(TTCp);
let rightDiv = document.createElement("div");
rightDiv.setAttribute("class","col-4 text-right");
amoutRow.appendChild(rightDiv);
let totalNetP = document.createElement("p");
totalNetP.textContent = total.toFixed(2) +"€";
rightDiv.appendChild(totalNetP);
let calculTVAp = document.createElement("p");
//calculTVAp.textContent = Math.round((total *0.2)*10)/10 +"€";
calculTVAp.textContent = (total *0.2).toFixed(2) +"€";
rightDiv.appendChild(calculTVAp);
let costTotalp = document.createElement("p");
costTotalp.textContent =(total *1.2).toFixed(2)+"€"
rightDiv.appendChild(costTotalp);




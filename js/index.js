

function loadCameras(){
let request = new XMLHttpRequest();
request.open("get","http://localhost:3000/api/cameras", true);
request.onload = function (){
    if(request.status == 200){
        var cameras = JSON.parse(request.responseText);
      var output = "";
       for (let i in cameras){
         
       
         const camerasRowDiv = document.getElementById("cameras");
       
        //création de div col bootstrap  
         let colDiv = document.createElement("div");
         colDiv.classList.add("col-12");
         colDiv.classList.add("col-md-4");
         colDiv.classList.add("col-lg-3");
         camerasRowDiv.appendChild(colDiv);
         //création de card    
         let cardDiv = document.createElement("div");
         colDiv.classList.add("card");
         colDiv.classList.add("mb-4");
         colDiv.classList.add("mb-lg-0");
         colDiv.classList.add("border-light");
         colDiv.classList.add("shadow-sm");
         colDiv.appendChild(cardDiv);
         //création de image - camera image  
         let cameraImg = document.createElement("img");
         cameraImg.className ="card-img-top";
         cameraImg.src = cameras[i].imageUrl;
         cameraImg.alt = "vintage camera" + cameras[i].name;
         cardDiv.appendChild(cameraImg);
         //création de card-body   
         let cardBodyDiv = document.createElement("div");
         cardBodyDiv.className = "card-body";
         cardDiv.appendChild(cardBodyDiv);
         //création de h5 - camera name
         let h5 = document.createElement("h5");
         h5.classList.add("card-title");
         h5.classList.add("text-center");
         h5.textContent = cameras[i].name;
         cardBodyDiv.appendChild(h5);
         //création de paragrah withe classname card-text - camera description
         let cardTextP = document.createElement("p");
         cardTextP.className = "card-text";
         cardTextP.textContent = cameras[i].description;
         cardBodyDiv.appendChild(cardTextP);
         //création de paragrash pour le prix
         let prixP = document.createElement("p");
         prixP.classList.add("mt-2");
         prixP.classList.add("text-center");
         //création de span à ajouter au parent prixP
         let prixSpan = document.createElement("span");
         prixSpan.className="text-primary";
         prixSpan.textContent = "Prix: " 
         prixP.textContent = cameras[i].price +"€";
         
         prixP.appendChild(prixSpan);
         cardBodyDiv.appendChild(prixP);
         //création de button div
         let decouvrirBtnDiv = document.createElement("div");
         decouvrirBtnDiv.classList.add("text-center");
         decouvrirBtnDiv.classList.add("decouvrir-btn");
         cardBodyDiv.appendChild(decouvrirBtnDiv);
         //création de lien à ajouter au parent button div
         let produitLien = document.createElement("a");
         produitLien.href = "produit.html?id=" + cameras[i]._id;
         produitLien.classList.add("btn");
         produitLien.classList.add("btn-warning");
         produitLien.classList.add("stretched-link");
         decouvrirBtnDiv.appendChild(produitLien);
         //création des icons à ajouter au  parent lien
         let cameraIcon = document.createElement("i");
         cameraIcon.classList.add("fas");
         cameraIcon.classList.add("fa-camera");
         cameraIcon.classList.add("mr-2");
         produitLien.appendChild(cameraIcon);
         
         let arrowIcon = document.createElement("i");
         arrowIcon.classList.add("fas");
         arrowIcon.classList.add("fa-arrow-right");
         arrowIcon.classList.add("ml-2");
         produitLien.appendChild(arrowIcon);
        

           

          ;
       }
       document.getElementById("fcameras").innerHTML = output;

    }
}
request.send();
}

loadCameras();
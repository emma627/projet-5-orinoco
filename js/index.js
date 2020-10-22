
function loadCameras(){
let request = new XMLHttpRequest();
request.open("get","http://localhost:3000/api/cameras", true);
request.onload = function (){
    if(request.status == 200){
        let cameras = JSON.parse(request.responseText);
        console.log(cameras);
       for (let camera of cameras){
         
         const camerasRowDiv = document.getElementById("cameras");

        //création de div col bootstrap  
         let colDiv = document.createElement("div");
         colDiv.classList.add("col-12");
         colDiv.classList.add("col-md-4");
         colDiv.classList.add("col-lg-3");
         camerasRowDiv.appendChild(colDiv);
         //création de card    
         let cardDiv = document.createElement("div");
         cardDiv.classList.add("card");
         cardDiv.classList.add("mb-4");
         cardDiv.classList.add("mb-lg-0");
         cardDiv.classList.add("border-light");
         cardDiv.classList.add("shadow-sm");
         colDiv.appendChild(cardDiv);
         //création de image - camera image  
         let cameraImg = document.createElement("img");
         cameraImg.className ="card-img-top";
         cameraImg.src = camera.imageUrl;
         cameraImg.alt = "vintage camera" + camera.name;
         cardDiv.appendChild(cameraImg);
         //création de card-body   
         let cardBodyDiv = document.createElement("div");
         cardBodyDiv.className = "card-body";
         cardDiv.appendChild(cardBodyDiv);
         //création de h5 - camera name
         let h5 = document.createElement("h5");
         h5.classList.add("card-title");
         h5.classList.add("text-center");
         h5.textContent = camera.name;
         cardBodyDiv.appendChild(h5);
         //création de paragrah - camera description
         let cardTextP = document.createElement("p");
         cardTextP.className = "card-text";
         cardTextP.textContent = camera.description;
         cardBodyDiv.appendChild(cardTextP);
         //création de paragragh pour le prix
         let prixP = document.createElement("p");
         prixP.classList.add("mt-2");
         prixP.classList.add("text-center");
         cardBodyDiv.appendChild(prixP);
         //création de span à ajouter au parent prix paragragh
         let prixSpan = document.createElement("span");
         prixSpan.className="text-primary";
         prixSpan.textContent = "Prix: ";
         prixP.appendChild(prixSpan);
         //création de span pour mettre la chiffre du prix et à ajouter au parent prix paragraph
         let chiffreSpan = document.createElement("span");
         chiffreSpan.textContent = (camera.price /100)+"€";
         prixP.appendChild(chiffreSpan);
         //création de button div
         let decouvrirBtnDiv = document.createElement("div");
         decouvrirBtnDiv.classList.add("text-center");
         decouvrirBtnDiv.classList.add("decouvrir-btn");
         cardBodyDiv.appendChild(decouvrirBtnDiv);
         //création de lien à ajouter au parent button div
         let produitLien = document.createElement("a");
         produitLien.href = "produit.html?id=" + camera._id;
         produitLien.classList.add("btn");
         produitLien.classList.add("btn-warning");
         produitLien.classList.add("stretched-link");
         decouvrirBtnDiv.appendChild(produitLien);
         //création de icon appareil photo à ajouter au  parent lien
         let cameraIcon = document.createElement("i");
         cameraIcon.classList.add("fas");
         cameraIcon.classList.add("fa-camera");
         cameraIcon.classList.add("mr-2");
         produitLien.appendChild(cameraIcon);
         //création de span pour mettre le mot "Découvrir"
         let decouvrirSpan = document.createElement("span");
         decouvrirSpan.textContent = "Découvrir"
         produitLien.appendChild(decouvrirSpan);
         //création de icon arrow à ajouter au  parent lien
         let arrowIcon = document.createElement("i");
         arrowIcon.classList.add("fas");
         arrowIcon.classList.add("fa-arrow-right");
         arrowIcon.classList.add("ml-2");
         produitLien.appendChild(arrowIcon);
          ;
       }
    }
}
request.send();
}
loadCameras();

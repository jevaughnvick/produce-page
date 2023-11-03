import db from "./db.json" assert {type: "json"};

// initialize variable with array of objects containing crop info
const produce = db.CropInventory;

const gridContainer = document.querySelector(".grid-container");

// render elements for each crop
for(let crop of produce){
    createCropCard(crop);
};


// declare function to display crop
function createCropCard(crop){
    // initialize variables with HTML elements
    const cropCard = document.createElement("div");
    const imgWrap = document.createElement("div");
    // const cropImg = document.createElement("img");

    // temp
    const tempDiv = document.createElement("div");
    const infoDiv = document.createElement("div");
    const nameWrap = document.createElement("div");
    const name = document.createElement("p");
    const quantityWrap = document.createElement("div");
    const quantity = document.createElement("div");
    const number = document.createElement("span");
    const units = document.createElement("p");
    const btnWrap = document.createElement("div");
    const btn = document.createElement("button");
    const annotWrap = document.createElement("div");
    const annot = document.createElement("p");

    // set element classes to recieve respective CSS styling
    cropCard.setAttribute("class", "crop-card");
    imgWrap.setAttribute("class", "img-wrap");
    infoDiv.setAttribute("class", "info");
    nameWrap.setAttribute("class", "name-wrap");
    name.setAttribute("class", "name");
    quantityWrap.setAttribute("class", "quantity-wrap");
    quantity.setAttribute("class", "quantity");
    number.setAttribute("class", "number");
    btnWrap.setAttribute("class", "btn-wrap");
    annotWrap.setAttribute("class", "annot-wrap");
    annot.setAttribute("class", "annot");

    // set image source
    // cropImg.setAttribute("src", "");

    
    name.textContent = crop.CropType;
    number.textContent = crop.Quantity;
    units.textContent = "units";
    btn.textContent = "Reserve for pickup";
    annot.textContent = "FREE";
    tempDiv.textContent = "img placeholder";

    cropCard.appendChild(imgWrap);
    cropCard.appendChild(infoDiv);
    // imgWrap.appendChild(cropImg);
    imgWrap.appendChild(tempDiv);

    infoDiv.appendChild(nameWrap);
    infoDiv.appendChild(quantityWrap);
    infoDiv.appendChild(btnWrap);
    infoDiv.appendChild(annotWrap);

    nameWrap.appendChild(name);
    quantityWrap.appendChild(quantity);
    quantity.appendChild(number);
    quantity.appendChild(units);
    btnWrap.appendChild(btn);
    annotWrap.appendChild(annot);

    gridContainer.appendChild(cropCard);

};
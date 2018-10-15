const request = require('request');

import Unsplash, { toJson } from "unsplash-js";
//endpoint for random search

https://source.unsplash.com/1600x900/?nature,water
const numImagesAvailable = 1000;

const renderGalleryItem =(randomNumber) =>{
    fetch(`https://source.unsplash.com/1600x900/?${keyword}`) 
      .then((response)=> {    
        let galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
          <img class="gallery-image" src="${response.url}" alt="gallery image"/>
        `
        $galleryContainer.appendChild(galleryItem);
      })
  }
  
  for(let i=0;i<numItemsToGenerate;i++){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    renderGalleryItem(randomImageIndex);
  }
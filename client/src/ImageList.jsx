import React from 'react';
import Image from './Image.jsx';

const ImageList = (props) => {
  const results = props.data;

  let images = results.map(image => <Image url={image.urls.small} key={image.id}/>)
  
  return (
     <div>
       {images}
    </div>
  );
}

export default ImageList;
import React from 'react';
import Image from './Image.jsx';

const ImageList = props => {
  const results = props.data;
  const images = results.map (image => (
    <Image
      url={image.urls.small}
      key={image.id}
      selectImage={props.selectImage}
      toggleHidden={props.toggleHidden}
    />
  ));

  return (
    <div className="img-list">
      {images}
    </div>
  );
};

export default ImageList;

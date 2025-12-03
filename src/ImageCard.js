import React from 'react'

function ImageCard(props) {
  return (
    <div>

      <img src={props.imgUrl}/>
      <hr/>
      <h1 className='text-3xl'>{props.title}</h1>


    </div>
  )
};

export default ImageCard;
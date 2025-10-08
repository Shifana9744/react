import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import Button from '../Button/Button';

const Cards = ({image, name, price}) => {
  return (
    <div>

      {/* card icons */}
      <div>
        <span>
          <FavoriteIcon />
        </span>

        <button>
          <AddIcon />
        </button>       
      </div>

      {/* card image */}
      <div>
        {/* <img src={image} alt="image" /> */}
      </div>

      {/* Card content */}
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <Button content='Shop Now'/>
      </div>
    </div>
  )
}

export default Cards
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import Button from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = ({ image, name, price }) => {

  const [isFavorite, setFavorite] = useState(false)

  const handleFavorite = () => {
    setFavorite(!isFavorite)
  }

  return (
    <div className="card h-100 shadow-sm" style={{ borderRadius: '10px',
                                                   maxWidth: '220px',
                                                   width: '100%',
                                                   margin: 'auto'
                                                }}>
      {/* Icon Container */}
      <div className="d-flex justify-content-between align-items-center p-2">
        <button
          className="btn btn-light btn-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none', 
            borderRadius: '0', 
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleFavorite}
        >
          <FavoriteIcon style={{ color: isFavorite ? '#ff0000' : '#555', fontSize: '18px' }} />
        </button>
        <button
          className="btn btn-sm"
          style={{
            background: '#ff9500',
            border: 'none',
            borderRadius: '6px', // Square shape
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <AddIcon style={{ color: '#fff', fontSize: '18px' }} />
        </button>
      </div>

      {/* Card Image */}
      <div>
        <img
          src={image}
          alt={name}
          className="card-img-top"
          style={{ height: '140px', objectFit: 'contain', borderRadius: '0 0 10px 10px' }}
        />
      </div>

      {/* Card Content */}
      <div className="card-body text-center" style={{padding:'8px'}}>
        <h5 className="card-title" style={{ fontSize: '0.95rem', marginBottom: '6px' }}>{name}</h5>
        <p className="card-text text-muted" style={{ fontSize: '0.85rem', marginBottom: '8px' }}>${price.toFixed(2)}</p>
        <Button content="Shop Now" className="btn btn-primary w-100" style={{ fontSize: '0.8rem', padding: '5px' }}/>
      </div>
    </div>
  );
};

export default Cards;
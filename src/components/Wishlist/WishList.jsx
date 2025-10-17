import React from 'react'
import { useWishlist } from './WishlistContext'
import 'bootstrap/dist/css/bootstrap.min.css';

const WishList = () => {

  const {wishlist, removeFromWishlist} =useWishlist()

  // const handleAddToCart = (product) => {
  //   alert(`Added ${product.name} to cart!`)
  // }

  return (
    // <section className="py-4" id="wishlist-section">
    //   <div className="container px-3" style={{ maxWidth: '1400px' }}>
    //     <div
    //       className="w-75 m-5 mx-auto"
    //       style={{ height: '2px', backgroundColor: 'orange' }}
    //     ></div>
    //     <h2 className="text-center mb-5" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
    //       Your Wishlist
    //     </h2>

    //     {wishlist.length === 0 ? (
    //       <p className="text-center">Your wishlist is empty.</p>
    //     ) : (
    //       <div className="row g-3">
    //         {wishlist.map((product) => (
    //           <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={product.id}>
    //             <div
    //               className="card h-100 shadow-sm"
    //               style={{
    //                 borderRadius: '10px',
    //                 maxWidth: '220px',
    //                 width: '100%',
    //                 margin: 'auto',
    //               }}
    //             >
    //               {/* Card Image */}
    //               <div>
    //                 <img
    //                   src={product.image}
    //                   alt={product.name}
    //                   className="card-img-top"
    //                   style={{
    //                     height: '140px',
    //                     objectFit: 'contain',
    //                     borderRadius: '0 0 10px 10px',
    //                   }}
    //                 />
    //               </div>

    //               {/* Card Content */}
    //               <div className="card-body text-center" style={{ padding: '8px' }}>
    //                 <h5
    //                   className="card-title"
    //                   style={{ fontSize: '0.95rem', marginBottom: '6px' }}
    //                 >
    //                   {product.name}
    //                 </h5>
    //                 <p
    //                   className="card-text text-muted"
    //                   style={{ fontSize: '0.85rem', marginBottom: '8px' }}
    //                 >
    //                   ${product.price.toFixed(2)}
    //                 </p>
    //                 <div className="d-flex justify-content-center gap-2">
    //                   <Button
    //                     content="Remove"
    //                     className="btn btn-danger btn-sm"
    //                     style={{ fontSize: '0.8rem', padding: '5px' }}
    //                     onClick={() => removeFromWishlist(product.id)}
    //                   />
    //                   <Button
    //                     content="Add to Cart"
    //                     className="btn btn-primary btn-sm"
    //                     style={{ fontSize: '0.8rem', padding: '5px' }}
    //                     onClick={() => handleAddToCart(product)}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </section>

    <div className="container py-4">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="row g-3">
          {wishlist.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <div className="card h-100 shadow-sm" style={{ borderRadius: '10px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: '140px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-muted">${item.price.toFixed(2)}</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WishList
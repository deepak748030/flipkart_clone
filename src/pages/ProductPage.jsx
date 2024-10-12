import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { useNavigate } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams(); // Destructure id from params
    const navigate = useNavigate()

    return (
        <div style={{
            backgroundColor: ' rgba(180, 211, 239, 0.342)',
            position: 'relative', // Set relative position to the container
            minHeight: '100vh', // Ensure the height is sufficient for absolute positioning
            paddingBottom: '4rem' // Give padding at the bottom to prevent content overlap
        }}>
            <Navbar product={'true'} />

            <div className='container' style={{ backgroundColor: 'white' }}>
                <Slider />
                <div className='border p-3'>
                    <div className='mb-2 fs-5'>
                        Amazfit GTR 3 Pro Smart Watch
                    </div>
                    <img src='../fassured.png' alt="F-Assured" />
                    <div className='mt-2 fw-bold fs-4'>
                        <span className='text text-success '>90% off</span> 10999 Rs 399
                    </div>
                </div>

                <div className='text-muted text-center border fw-bold p-3 fs-5'>
                    Offer ends in <span className='text text-danger'>01min 23Sec</span>
                </div>

                <div className='d-flex border p-4 justify-content-between align-items-center'>
                    <div className='text text-center'>
                        <img src='http://stvoffers.shop/assets/images/replacement.png' alt="Replacement" />
                        <div className='mt-2'>7 days Replacement</div>
                    </div>
                    <div className='text text-center'>
                        <img src='http://stvoffers.shop/assets/images/non-cod.png' alt="No COD" />
                        <div className='mt-2'>No Cash on Delivery</div>
                    </div>
                    <div className='text text-center'>
                        <img src='../fassured.png' alt="F-Assured" />
                        <div className='mt-2'>Plus (F-Assured)</div>
                    </div>
                </div>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                display: 'flex'
            }}>
                <button style={{
                    width: '50%',
                    backgroundColor: 'aliceblue',
                    color: 'black',
                    border: 'none',
                    padding: '1rem',
                    fontSize: '1.1rem',
                    cursor: 'pointer'
                }} onClick={() => {
                    navigate('/add');
                    console.log('hi')
                }} >
                    Add to Cart
                </button>
                <button style={{
                    width: '50%',
                    backgroundColor: '#fdd835',
                    color: 'black',
                    border: 'none',
                    padding: '1rem',
                    fontSize: '1.1rem',
                    cursor: 'pointer'
                }} onClick={() => { navigate('/add') }} >
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default ProductPage;

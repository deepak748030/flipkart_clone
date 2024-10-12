import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Slider() {
    useEffect(() => {
        const interval = setInterval(() => {
            const carousel = document.querySelector('#carouselExampleIndicators');
            if (carousel && window.jQuery) {
                window.jQuery(carousel).carousel('next');
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 img-fluid" style={{ height: '25rem', objectFit: 'contain' }} src="https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715663074-1000093739.webp" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 img-fluid" style={{ height: '25rem', objectFit: 'contain' }} src="https://stvoffers.shop/admin/uploads/product/Gallery-14-05-2024-17156631551000093740.webp" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 img-fluid" style={{ height: '25rem', objectFit: 'contain' }} src="https://via.placeholder.com/800x400?text=Third+Slide" alt="Third slide" />
                </div>
            </div>
        </div>
    );
}

export default Slider;

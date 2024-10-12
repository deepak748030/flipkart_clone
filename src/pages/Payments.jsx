import React from 'react';

function Payments() {
    const handlePayment = () => {
        const phonePeURL = 'phonepe://pay?pa=sbipmopad.022211900285222-yc017549@sbipay&pn=Vishal%20Kirana%20Store&am=599.00&cu=INR&url=&mc=8099&mode=02&purpose=00&orgid=159028&sign=MEYCIQCgpTe2xeoNfYGFQ8SsqsibjjRtneNFQFlmLfZYC/vC5wIhANeXald38G4FMySMNEoGC0/zfwLlPGfpNRrDrwF7d3Ex&tn=5144278425';

        // Create an invisible iframe to trigger the PhonePe deep link
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = phonePeURL;
        document.body.appendChild(iframe);

        // Fallback: If PhonePe is not installed, redirect to Play Store after 2 seconds
        setTimeout(() => {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.phonepe.app';
        }, 2000);
    };

    return (
        <div className='px-3 mb-4'>
            {/* Header with back icon and title */}
            <div className='d-flex gap-4 fs-4 my-3 align-items-center'>
                <div style={{ cursor: 'pointer' }}>
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div>Payment</div>
            </div>

            {/* Order image */}
            <div className='d-flex justify-content-center'>
                <img src='../payment.png' className='mx-auto' style={{ height: '4rem' }} alt="Order Icon" />
            </div>

            <div className='fw-bold d-flex flex-column gap-2'>
                <div className='p-3 border rounded' style={{ cursor: 'pointer' }} ><img src='../phonePay.png' className='mx-2 fs-5' style={{ height: '2rem' }} /> Phonepe </div>
                <div className='p-3 border rounded' style={{ cursor: 'pointer' }} ><img src='../payTm.png' className='mx-2 fs-5' style={{ height: '2rem' }} /> Paytm </div>
                <div className='p-3 border rounded' style={{ cursor: 'pointer' }} ><img src='../googlePay.png' className='mx-2 fs-5' style={{ height: '2rem' }} /> Google Pay </div>
                <div className='p-3 border rounded' style={{ cursor: 'pointer' }} ><img src='../bhim.png' className='mx-2 fs-5' style={{ height: '2rem' }} /> BHIM UPI </div>
            </div>

            {/* Price Details */}
            <div className='mt-4'>
                <div className='fs-4'>Price Details</div>
                <div className='d-flex justify-content-between mt-4' style={{ fontSize: '1.1rem' }}>
                    <div className='d-flex flex-column gap-3'>
                        <div>Price (1 item)</div>
                        <div>Delivery charges</div>
                        <div>Amount Payable</div>
                    </div>
                    <div className='d-flex flex-column text-end gap-3'>
                        <div>₹12499</div>
                        <div className='text-success'>FREE DELIVERY</div>
                        <div>₹599</div>
                    </div>
                </div>
            </div>

            {/* Payment Security Section */}
            <div className='my-3 d-flex justify-content-center align-items-center gap-2 p-3' style={{ backgroundColor: 'rgb(241, 243, 246)' }}>
                <img src='../safePay.png' style={{ height: '3rem' }} alt="Safe Payment" />
                <div style={{ color: 'rgb(113, 116, 120)', fontWeight: '600', width: '230px', fontSize: '12px' }}>
                    Safe and secure payments. Easy returns. 100% Authentic product.
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <img src='../paycard.png' className='w-100' alt="Payment Methods" />
            </div>

            {/* Bottom fixed payment section */}
            <div className='d-flex justify-content-between align-items-center px-3 py-2'
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: '#fff',
                    boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000
                }}>
                <div className='d-flex flex-column'>
                    <div style={{ textDecoration: 'line-through', color: 'grey' }}>₹12499</div>
                    <div style={{ color: '#fb641b', fontWeight: 'bold' }}>₹599</div>
                </div>
                <button className='btn btn-warning mx-4 px-4' style={{ backgroundColor: '#ffc107' }} onClick={handlePayment}>
                    Order Now
                </button>
            </div>
        </div>
    );
}

export default Payments;

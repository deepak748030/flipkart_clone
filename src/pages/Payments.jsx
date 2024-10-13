import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation to access passed state

function Payments() {
    const navigate = useNavigate();
    const location = useLocation(); // Get the location object
    const { price, additionalPrice } = location.state || { price: 0, additionalPrice: 0 }; // Destructure price and additionalPrice from state

    const [selectedPayment, setSelectedPayment] = useState(null); // State to hold selected payment method

    // Use `price` if it's greater than 0, otherwise use `additionalPrice`
    const payableAmount = price > 0 ? additionalPrice : additionalPrice;

    // Define payment URLs with the correct amount
    const phonePeUrl = `phonepe://pay?pa=7049578457@okbizaxis&pn=Raja%20Jatav&am=${payableAmount}&cu=INR`;
    const upiUrl = `upi://pay?pa=7049578457@okbizaxis&pn=Raja%20Jatav&am=${payableAmount}&cu=INR`;
    const paytmUrl = `paytmmp://pay?pa=7049578457@okbizaxis&pn=Raja%20Jatav&am=${payableAmount}&cu=INR`;
    const googlePayUrl = `tez://upi/pay?pa=7049578457@okbizaxis&pn=Raja%20Jatav&am=${payableAmount}&cu=INR`;

    const handlePayment = () => {
        let paymentURL;

        // Determine the payment URL based on the selected payment method
        switch (selectedPayment) {
            case 'PhonePe':
                paymentURL = phonePeUrl;
                break;
            case 'UPI':
                paymentURL = upiUrl;
                break;
            case 'Paytm':
                paymentURL = paytmUrl;
                break;
            case 'Google Pay':
                paymentURL = googlePayUrl;
                break;
            default:
                alert('Please select a payment method');
                return;
        }

        // Create an invisible iframe to trigger the payment deep link
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = paymentURL;
        document.body.appendChild(iframe);

        // Fallback: If the payment app is not installed, redirect to Play Store after 2 seconds
        setTimeout(() => {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.phonepe.app'; // Change this based on the payment app
        }, 2000);
    };

    return (
        <div className='px-3'>
            {/* Header with back icon and title */}
            <div className='d-flex gap-4 fs-4 my-3 align-items-center'>
                <div style={{ cursor: 'pointer' }}>
                    <i className="bi bi-arrow-left" onClick={() => { navigate(-1) }} ></i>
                </div>
                <div>Payment</div>
            </div>

            {/* Order image */}
            <div className='d-flex justify-content-center'>
                <img src='../payment.png' className='mx-auto' style={{ height: '4rem' }} alt="Order Icon" />
            </div>

            <div className='fw-bold d-flex flex-column gap-2'>
                {/* PhonePe Option */}
                <div
                    className={`p-3 border rounded ${selectedPayment === 'PhonePe' ? 'bg-light border border-black' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedPayment('PhonePe')}
                >
                    <img src='../phonePay.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="PhonePe" /> PhonePe
                </div>

                {/* UPI Option */}
                <div
                    className={`p-3 border rounded ${selectedPayment === 'UPI' ? 'bg-light border border-black' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedPayment('UPI')}
                >
                    <img src='../bhim.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="UPI" /> UPI
                </div>

                {/* Paytm Option */}
                <div
                    className={`p-3 border rounded ${selectedPayment === 'Paytm' ? 'bg-light border border-black' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedPayment('Paytm')}
                >
                    <img src='../payTm.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="Paytm" /> Paytm
                </div>

                {/* Google Pay Option */}
                <div
                    className={`p-3 border rounded ${selectedPayment === 'Google Pay' ? 'bg-light border border-black' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedPayment('Google Pay')}
                >
                    <img src='../googlePay.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="Google Pay" /> Google Pay
                </div>
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
                        <div>{price}</div>
                        <div className='text-success'>FREE DELIVERY</div>
                        <div>{payableAmount}</div>
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
                    <div style={{ textDecoration: 'line-through', color: 'grey' }}>{price}</div>
                    <div style={{ color: '#fb641b', fontWeight: 'bold' }}>{payableAmount}</div>
                </div>
                <button className='btn btn-warning mx-4 px-4' style={{ backgroundColor: '#ffc107' }}
                    onClick={handlePayment}
                >
                    Order Now
                </button>
            </div>
        </div>
    );
}

export default Payments;

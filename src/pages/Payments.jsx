import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Payments() {
    const navigate = useNavigate();
    const location = useLocation();
    const { additionalPrice, price } = location.state || { additionalPrice: 0 };

    const [selectedPayment, setSelectedPayment] = useState(null);
    const [payableAmount, setPayableAmount] = useState(0);

    useEffect(() => {
        const amount = parseInt(additionalPrice.replace(/[₹,]/g, '').trim(), 10);
        setPayableAmount(amount);
    }, [additionalPrice]);

    // Construct URLs for different payment methods
    const baseURL = `shivamkushwah135704.rzp@icici`;
    const paymentAmount = payableAmount;

    const gpayUrl = `tez://upi/pay?ver=01&mode=19&pa=${baseURL}&pn=Shivamkuswah&tr=RZPOpmeJbqqnEXEJbqrv2&cu=INR&mc=8241&qrMedium=04&tn=PaymenttoRechargestore&am=${paymentAmount}`;
    const phonePayUrl = `phonepe://pay?ver=01&mode=19&pa=${baseURL}&pn=Shivamkuswah&tr=RZPOpmeJbqqnEXEJbqrv2&cu=INR&mc=8241&qrMedium=04&tn=PaymenttoRechargestore&am=${paymentAmount}`;
    const paytmUrl = `paytmmp://pay?ver=01&mode=19&pa=${baseURL}&pn=Shivamkuswah&tr=RZPOpmeJbqqnEXEJbqrv2&cu=INR&mc=8241&qrMedium=04&tn=PaymenttoRechargestore&am=${paymentAmount}`;

    const handlePayment = () => {
        let paymentURL;

        switch (selectedPayment) {
            case 'Google Pay':
                paymentURL = gpayUrl;
                break;
            case 'PhonePe':
                paymentURL = phonePayUrl;
                break;
            case 'Paytm':
                paymentURL = paytmUrl;
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

        // Fallback if the payment app is not installed
        setTimeout(() => {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.phonepe.app'; // Adjust based on selected payment app
        }, 2000);
    };

    return (
        <div className='px-3'>
            <div className='d-flex gap-4 fs-4 my-3 align-items-center'>
                <div style={{ cursor: 'pointer' }}>
                    <i className="bi bi-arrow-left" onClick={() => { navigate(-1) }} ></i>
                </div>
                <div>Payment</div>
            </div>

            <div className='d-flex justify-content-center'>
                <img src='../payment.png' className='mx-auto' style={{ height: '4rem' }} alt="Order Icon" />
            </div>

            <div className='fw-bold d-flex flex-column gap-2'>
                {/* Payment Options */}
                <div className={`p-3 border rounded ${selectedPayment === 'Google Pay' ? 'bg-light border border-black' : ''}`} style={{ cursor: 'pointer' }} onClick={() => setSelectedPayment('Google Pay')}>
                    <img src='../googlePay.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="Google Pay" /> Google Pay
                </div>
                <div className={`p-3 border rounded ${selectedPayment === 'PhonePe' ? 'bg-light border border-black' : ''}`} style={{ cursor: 'pointer' }} onClick={() => setSelectedPayment('PhonePe')}>
                    <img src='../phonePay.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="PhonePe" /> PhonePe
                </div>
                <div className={`p-3 border rounded ${selectedPayment === 'Paytm' ? 'bg-light border border-black' : ''}`} style={{ cursor: 'pointer' }} onClick={() => setSelectedPayment('Paytm')}>
                    <img src='../payTm.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="Paytm" /> Paytm
                </div>
            </div>

            <div className='mt-4'>
                <div className='fs-4'>Price Details</div>
                <div className='d-flex justify-content-between mt-4' style={{ fontSize: '1.1rem' }}>
                    <div className='d-flex flex-column gap-3'>
                        <div>Price (1 item)</div>
                        <div>Delivery charges</div>
                        <div>Amount Payable</div>
                    </div>
                    <div className='d-flex flex-column text-end gap-3'>
                        <div>{additionalPrice}</div>
                        <div className='text-success'>FREE DELIVERY</div>
                        <div>₹{payableAmount}.00</div>
                    </div>
                </div>
            </div>

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
                    <div style={{ color: '#fb641b', fontWeight: 'bold' }}>₹{payableAmount}.00</div>
                </div>
                <button className='btn btn-warning mx-4 px-4' style={{ backgroundColor: '#ffc107' }} onClick={handlePayment}>
                    Order Now
                </button>
            </div>
        </div>
    );
}

export default Payments;

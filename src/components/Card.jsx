import React from 'react';
import { useNavigate } from 'react-router-dom';


function Card() {

    const navigate = useNavigate();


    const cards = [
        {
            "id": 1,
            "title": "Khaitan 3 Burner BP JIO Black MS Frame Toughened Glass Manual Gas",
            "image": "https://stvoffers.shop/admin/uploads/product/product-02-02-2024-1706895592-WhatsApp%20Image%202024-02-02%20at%2011.09.11%20PM%20(2).webp",
            "discount": "90% Off",
            "price": "₹5,199",
            "additionalPrice": "₹379"
        },
        {
            "id": 2,
            "title": "OnePlus Bullets Wireless Z2 Bluetooth Headset (Acoustic Red, In the Ear)",
            "image": "https://stvoffers.shop/admin/uploads/product/product-02-02-2024-1706895960-WhatsApp%20Image%202024-02-02%20at%2011.13.14%20PM%20(3).webp",
            "discount": "90% Off",
            "price": "₹2,299",
            "additionalPrice": "₹299"
        },
        {
            "id": 3,
            "title": "boAt Airdopes 200 Plus in Ear TWS Earbuds, 100 Hours Playback, Quad",
            "image": "https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715661993-1000093709.webp",
            "discount": "90% Off",
            "price": "₹969",
            "additionalPrice": "₹2,399"
        },
        {
            "id": 4,
            "title": "Thomson Alpha 80 cm (32 inch) HD Ready LED Smart Linux TV 2022 Edition",
            "image": "https://stvoffers.shop/admin/uploads/product/product-02-02-2024-1706896410-WhatsApp%20Image%202024-02-02%20at%2011.22.15%20PM%20(1).webp",
            "discount": "90% Off",
            "price": "₹14,999",
            "additionalPrice": "₹899"
        },
        {
            "id": 5,
            "title": "Zebronics Juke bar 9550 pro",
            "image": "https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715662282-1000093717.webp",
            "discount": "90% Off",
            "price": "₹9,999",
            "additionalPrice": "₹449"
        },
        {
            "id": 6,
            "title": "SONY WH1000XM4/LM Bluetooth Headset (Blue, On the Ear)",
            "image": "https://stvoffers.shop/admin/uploads/product/product-02-02-2024-1706897364-WhatsApp%20Image%202024-02-02%20at%2011.37.46%20PM%20(1).webp",
            "discount": "90% Off",
            "price": "₹6,999",
            "additionalPrice": "₹349"
        },
        {
            "id": 7,
            "title": "Amazfit GTR 3 Pro Smart Watch",
            "image": "https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715663074-1000093739.webp",
            "discount": "90% Off",
            "price": "₹399"
        },
        {
            "id": 8,
            "title": "HyperX Cloud Gaming Headset for PC",
            "image": "https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715663850-1000093762.webp",
            "discount": "90% Off",
            "price": "₹400",
            "additionalPrice": "₹339"
        },
        {
            "id": 9,
            "title": "Crompton Silentpro Enso 1225 mm 3 Blade Ceiling Fan (All White, Pack of 1)",
            "image": "https://stvoffers.shop/admin/uploads/product/product-02-02-2024-1706898017-WhatsApp%20Image%202024-02-02%20at%2011.49.50%20PM.webp",
            "discount": "90% Off",
            "price": "₹14,997",
            "additionalPrice": "₹318"
        },
        {
            "id": 10,
            "title": "Samsung Soundbar (HW-B67E/XL) 5.1 Channel, Wireless Subwoofer",
            "image": "https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715663602-1000093753.webp",
            "discount": "90% Off",
            "price": "₹10,999",
            "additionalPrice": "₹449"
        },
        {
            "id": 11,
            "title": "HAVELLS 701 Desert Air Cooler (Dark Teal Altima)",
            "image": "https://stvoffers.shop/admin/uploads/product/product-25-04-2024-1714022395-altima-havells-original-imag2axzwhw9hu8v.webp",
            "discount": "90% Off",
            "price": "₹10,590",
            "additionalPrice": "₹498"
        },
        {
            "id": 12,
            "title": "BAJAJ 25 L Storage Water Geyser Suitable for large wall spaces (Popular Plus 25 L, White)",
            "image": "https://stvoffers.shop/admin/uploads/product/product-03-02-2024-1706899430-WhatsApp%20Image%202024-02-03%20at%2012.13.07%20AM%20(1).webp",
            "discount": "90% Off",
            "price": "₹14,996",
            "additionalPrice": "₹498"
        },
        {
            "id": 13,
            "title": "LG Al Convertible 6-in-1 Cooling 2024 Model 1.5 Ton 5 Star Split Dual Inverter",
            "image": "https://stvoffers.shop/admin/uploads/product/product-28-04-2024-1714301507-IMG_20240428_162132.webp",
            "discount": "90% Off",
            "price": "₹46,596",
            "additionalPrice": "₹599"
        },
        {
            "id": 14,
            "title": "vivo V30 Pro 5G (Andaman Blue, 256 GB) (8 GB RAM)",
            "image": "https://stvoffers.shop/admin/uploads/product/product-01-04-2024-1711911772-IMG_20240326_105457.webp",
            "discount": "90% Off",
            "price": "₹41,999",
            "additionalPrice": "₹699"
        },
        {
            "id": 15,
            "title": "ZEBRONICS Newly Launched 525 Watts Soundbar JUKE BAR 9400 PRO",
            "image": "https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715663307-1000093746.webp",
            "discount": "90% Off",
            "price": "₹9,999",
            "additionalPrice": "₹498"
        },
        {
            "id": 16,
            "title": "Noise Loop",
            "image": "https://stvoffers.shop/admin/uploads/product/product-13-02-2024-1707768649-Screenshot_2024-02-13-01-36-47-206_com.flipkart.android-edit.webp",
            "discount": "90% Off",
            "price": "₹599",
            "additionalPrice": "₹329"
        },
        {
            "id": 17,
            "title": "boAt AAVANTE Bluetooth Soundbar",
            "image": "https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715661250-1000093684.webp",
            "discount": "90% Off",
            "price": "₹599"
        },
        {
            "id": 18,
            "title": "SONY SA-D40 80 W Bluetooth Home Theatre (Black, 4.1 Channel)",
            "image": "https://stvoffers.shop/admin/uploads/product/product-03-05-2024-1714711119-IMG_20240503_100735-min.webp",
            "discount": "90% Off",
            "price": "₹499"
        },
        {
            "id": 19,
            "title": "OnePlus Buds 3 in Ear TWS Bluetooth Earbuds with Upto 49dB Smart Adaptive Noise Cancellation,Hi-Res",
            "image": "https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715661600-1000093693.webp",
            "discount": "90% Off",
            "price": "₹349"
        },
        {
            "id": 20,
            "title": "JBL Flip 6 with 12Hr Playtime, Customize Audio by JBL App, IP67 Rating, Portable 30 W Bluetooth Speaker (Black, Mono Channel)",
            "image": "https://stvoffers.shop/admin/uploads/product/product-02-08-2024-1722552330--original-imahfcgyekg4fmgm.webp",
            "discount": "90% Off",
            "price": "₹491"
        }
    ];


    return (
        <div className="cardbg">
            <div className="row g-1"> {/* Use g-1 to reduce the gap between cards */}
                {cards.map((card) => (
                    <div className="col-6 mb-1" key={card.id} style={{
                        cursor: 'pointer'
                    }} onClick={() => { navigate(`/product/${card.id}`) }} > {/* Reduce mb-4 to mb-2 */}
                        <div className="card border-0" style={{ borderRadius: '0' }}> {/* Remove border and border-radius */}
                            <div className="position-relative" style={{ height: '200px' }}>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="img-fluid py-4" // Ensures the image is responsive
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        height: '100%', // Maintain height
                                        width: 'auto', // Auto width to maintain aspect ratio
                                        transform: 'translate(-50%, -50%)', // Center the image
                                        objectFit: 'contain', // Maintain aspect ratio within the box
                                    }}
                                />
                            </div>
                            <div className="card-body p-2 px-4"> {/* Adjust padding if needed */}
                                <div
                                    className="card-title"
                                    style={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap', // Prevent line breaks
                                        maxWidth: '100%', // Limit width to the card
                                    }}
                                >
                                    {card.title}
                                </div>
                                <span className="text-success">{card.discount}</span>
                                <div className="text-muted text-decoration-line-through">{card.price}</div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-price">{card.additionalPrice}</h5>
                                    <img src="assured.png" style={{ height: '1.4rem' }} alt="Assured" />
                                </div>
                                <div className=" delivery text text-center p-2 text-muted " >
                                    Free Delivery in Two Days
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;

import React from 'react';

export default function Index() {
  return (<div dangerouslySetInnerHTML={{ __html: `<style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            /* Set the second image (photo_1.jpg) as a static background */
            background-image: url('Rastriya yuva Viksas Sangh_2019_page-0036.jpg'); /* Path to the second image */
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* Makes the background static */
            background-repeat: no-repeat;
            /* Fallback background color in case the image fails to load */
            background-color: #f0f4f8;
        }

        #wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            /* Semi-transparent background for readability */
            background: rgba(255, 255, 255, 0.85);
        }

        /* Navigation Bar */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            padding: 10px 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .nav-logo {
            display: flex;
            align-items: center;
        }

        .nav-logo img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
        }

        .nav-logo span {
            font-size: 20px;
            font-weight: bold;
        }

        .navbar ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }

        .navbar ul li {
            position: relative;
            margin: 0 15px;
        }

        .navbar ul li a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
        }

        .nav-hover-img {
            display: none;
            position: absolute;
            top: 30px;
            width: 100px;
            height: auto;
        }

        .navbar ul li:hover .nav-hover-img {
            display: block;
        }

        /* Logo Section */
        .logo-section {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .logo img {
            width: 300px;
            height: 300px;
        }

        /* Adjacent Content */
        .adjacent-content {
            margin-left: 20px;
            max-width: 400px;
        }

        .mission-image {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        .mission-statement {
            font-size: 18px;
            font-style: italic;
            color: #333;
            margin-bottom: 20px;
        }

        .cta-buttons button {
            background-color: #32cd32;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            border-radius: 5px;
        }

        .cta-buttons button:hover {
            background-color: #28a428;
        }

        .stats {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }

        .stat-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .stat-item img {
            width: 40px;
            height: 40px;
            margin-bottom: 5px;
        }

        .stat-item h3 {
            font-size: 24px;
            color: #ff4500;
            margin: 0;
        }

        .stat-item p {
            font-size: 14px;
            color: #555;
            margin: 5px 0 0;
        }

        /* Center Banner */
        .center-banner {
            position: relative;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin: 20px 0;
        }

        .banner-text {
            font-size: 48px;
            font-weight: bold;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            position: relative;
            animation: moveText 10s linear infinite;
        }

        @keyframes moveText {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(-100%);
            }
        }

        /* Card Section */
        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
        }

        .card {
            background-color: #fff;
            width: 300px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            padding: 10px;
        }

        .card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
        }

        .card p {
            font-size: 16px;
            margin: 10px 0;
        }

        .card .btn {
            display: inline-block;
            background-color: #ff4500;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
        }

        .card .btn:hover {
            background-color: #e03e00;
        }

        /* Footer Section */
        .footer {
            background-color: #333;
            color: white;
            padding: 20px;
            margin-top: auto;
        }

        .footer-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
        }

        .footer-section h3 {
            font-size: 18px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }

        .footer-section p, .footer-section ul {
            font-size: 14px;
            margin: 0;
        }

        .footer-section ul {
            list-style: none;
            padding: 0;
        }

        .footer-section ul li {
            margin: 5px 0;
        }

        .footer-section ul li a {
            color: #ccc;
            text-decoration: none;
        }

        .footer-section ul li a:hover {
            color: #fff;
        }

        .download-button {
            display: inline-block;
            background-color: #ff4500;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
        }

        .download-button:hover {
            background-color: #e03e00;
        }

        .footer-line {
            border-top: 1px solid #555;
            margin: 20px 0;
        }

        .footer-bottom {
            text-align: center;
            font-size: 14px;
            margin: 0;
        }

        /* Footer Gallery Section */
        .footer-section.gallery {
            color: white;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            max-width: 220px;
        }

        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item img {
            width: 100%;
            height: 80px;
            object-fit: cover;
            display: block;
            transition: transform 0.3s ease, filter 0.3s ease;
        }

        .gallery-item:hover img {
            transform: scale(1.1);
            filter: brightness(70%);
        }

        .gallery-item::before {
            content: 'View';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
        }

        .gallery-item:hover::before {
            opacity: 1;
        }

        .gallery-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .gallery-item:hover::after {
            opacity: 1;
        }
    </style>
    <div id="wrapper">
        <!-- Navigation Bar -->
        <nav class="navbar">
            <div class="nav-logo">
                <img src="/my_image.png" alt="Betiya Nidhi Logo">
                <span>राष्ट्रीय युवा विकास संघ</span>
            </div>
            <ul>
                <li>
                    <a href="#home">Home</a>
                    <img src="hover1.jpg" class="nav-hover-img" alt="Home Preview">
                </li>
                <li>
                    <a href="about.html">About Us</a>
                    <img src="hover2.jpg" class="nav-hover-img" alt="About Us Preview">
                </li>
                <li>
                    <a href="#schemes">Our Schemes</a>
                    <img src="hover3.jpg" class="nav-hover-img" alt="Schemes Preview">
                </li>
                <li>
                    <a href="Gallery.html">Gallery</a>
                    <img src="hover4.jpg" class="nav-hover-img" alt="Gallery">
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                    <img src="hover5.jpg" class="nav-hover-img" alt="Contact Preview">
                </li>
                <li>
                    <a href="#download">Download</a>
                    <img src="hover6.jpg" class="nav-hover-img" alt="Download Preview">
                </li>
            </ul>
        </nav>

        <!-- Logo Section with Adjacent Content -->
        <div class="logo-section">
            <div class="logo">
                <img src="my_image.png" alt="RYVS Logo">
            </div>
            <div class="adjacent-content">
                <img src="mission_image.jpg" alt="Youth Empowerment" class="mission-image">
                <div class="mission-statement">
                    Empowering Youth for a Brighter Future – Since 2010.
                </div>
                <div class="cta-buttons">
                    <button>Join Us</button>
                    <button>Donate Now</button>
                    <button>Learn More</button>
                </div>
                <div class="stats">
                    <div class="stat-item">
                        <img src="youth_icon.png" alt="Youth Icon">
                        <h3>10,000+</h3>
                        <p>Youth Empowered</p>
                    </div>
                    <div class="stat-item">
                        <img src="project_icon.png" alt="Project Icon">
                        <h3>500+</h3>
                        <p>Community Projects</p>
                    </div>
                    <div class="stat-item">
                        <img src="years_icon.png" alt="Years Icon">
                        <h3>15</h3>
                        <p>Years of Service</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Central Banner Image Section -->
        <div class="center-banner">
            <div class="banner-text">राष्ट्रीय युवा विकास संघ</div>
        </div>

        <!-- Card Section -->
        <div class="card-container">
            <div class="card">
                <img src="WhatsApp Image 2025-05-26 at 12.18.26.jpeg" alt="img">
                <p>राष्ट्रीय युवा विकास संगठन की कार्यकारिणी बैठक की कार्यवाही</p>
                <a href="/hello1.html" class="btn">Read More</a>
            </div>
            <div class="card">
                <img src="WhatsApp Image 2025-05-26 at 12.24.09.jpeg" alt="img">
                <p>राष्ट्रीय युवा विकास संगठन</p>
                <a href="/hello2.html" class="btn">Read More</a>
            </div>
            <div class="card">
                <img src="WhatsApp Image 2025-05-26 at 12.20.34.jpeg" alt="img">
                <p>राष्ट्रीय युवा विकास संगठन का संविधान</p>
                <a href="/hello3.html" class="btn">Read More</a>
            </div>
            <div class="card">
                <img src="WhatsApp Image 2025-05-26 at 12.21.54.jpeg" alt="img">
                <p>राष्ट्रीय युवा विकास संगठन का संविधान नियमावली</p>
                <a href="/hello4.html" class="btn">Read More</a>
            </div>
            <div class="card">
                <img src="WhatsApp Image 2025-05-26 at 12.22.24.jpeg" alt="img">
                <p>12 जुलाई: युवा दिवस और राष्ट्रीय सशस्त्र बल दिवस पर युवाओं और सैनिकों का सम्मान</p>
                <a href="/hello5.html" class="btn">Read More</a>
            </div>
            <div class="card">
                <img src="WhatsApp Image 2025-05-26 at 12.23.20.jpeg" alt="img">
                <p>राष्ट्रीय युवा संगठन अंतिम परीक्षा तिथि</p>
                <a href="/hello6.html" class="btn">Read More</a>
            </div>
        </div>

        <!-- Footer Section -->
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-section about">
                    <h3>ABOUT OUR COMPANY</h3>
                    <p>C/O ANUP KUMAR KESHRI RAJ KUMAR KESHRI,<br>00, MESRA, MESRA, RANCHI JH 835217</p>
                    <p>📞 +91 9471503579</p>
                    <p>✉️ info@betiyannidhi.com</p>
                </div>
                <div class="footer-section quick-links">
                    <h3>QUICK LINK</h3>
                    <ul>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#schemes">Our Services</a></li>
                        <li><a href="#schemes">Our Schemes</a></li>
                        <li><a href="#download">Download</a></li>
                        <li><a href="#contact">Contact us</a></li>
                    </ul>
                </div>
                <div class="footer-section gallery">
                    <h3>GALLERY</h3>
                    <div class="gallery-grid">
                        <a href="Gallery.html" class="gallery-item">
                            <img src="WhatsApp Image 2025-05-26 at 12.18.26.jpeg" alt="President Narendra Singh">
                        </a>
                        <a href="Gallery.html" class="gallery-item">
                            <img src="WhatsApp Image 2025-05-26 at 12.19.44.jpeg" alt="Secretary Subodh Kumar Sahu">
                        </a>
                    </div>
                </div>
                <!-- <div class="footer-section app-link">
                    <h3>APP LINK</h3>
                    <p>Members can download the app from the link below and get started.</p>
                    <a href="#" class="download-button">⬇ DOWNLOAD</a>
                </div> -->
            </div>
            <hr class="footer-line">
            <p class="footer-bottom">© Copyright 2021 National Youth Organization Development</p>
        </footer>
    </div>
` }} />);
}

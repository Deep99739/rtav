import React from 'react';

export default function Gallery() {
  return (<div dangerouslySetInnerHTML={{ __html: `<style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
            color: #333;
            position: relative;
        }

        /* Add a subtle textured overlay to the background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://www.transparenttextures.com/patterns/canvas.png');
            opacity: 0.1;
            z-index: -1;
        }

        /* Gallery Section */
        .gallery-section {
            padding: 60px 20px;
            background-color: rgba(255, 255, 255, 0.9);
            min-height: 100vh;
            border-radius: 20px;
            margin: 20px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .gallery-section h2 {
            text-align: center;
            font-size: 48px;
            color: #ff4500;
            margin-bottom: 50px;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 35px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .gallery-item {
            background-color: #fff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
            position: relative;
            border: 3px solid transparent;
        }

        .gallery-item:hover {
            transform: translateY(-15px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
            border: 3px solid #ff4500;
        }

        .gallery-item img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
        }

        .gallery-item:hover img {
            transform: scale(1.1);
        }

        .gallery-item .description {
            padding: 20px;
            text-align: center;
            background: linear-gradient(180deg, #f9f9f9 0%, #fff 100%);
        }

        .gallery-item .description p {
            margin: 0;
            font-size: 16px;
            color: #444;
            line-height: 1.6;
            font-style: italic;
        }

        /* Overlay Effect */
        .gallery-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 220px;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .gallery-item:hover::before {
            opacity: 1;
        }

        /* Add a subtle badge-like effect on hover */
        .gallery-item::after {
            content: 'View More';
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #ff4500;
            color: #fff;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 14px;
            opacity: 0;
            transform: translateY(-10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .gallery-item:hover::after {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
    <!-- Gallery Section -->
    <section class="gallery-section">
        <h2>Our Gallery</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.18.26.jpeg" alt="Youth Workshop 2023">
                <div class="description">
                    <p>"The president of RYVS is Mr. Narendra Singh."</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.19.44.jpeg" alt="Community Outreach">
                <div class="description">
                    <p>"The Secretary of RYVS is Mr. Subodh Kumar Sahu."</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.20.34.jpeg" alt="Annual Sports Day">
                <div class="description">
                    <p>"Padma Shri award winner Mr. Mukund Nayak is one of the guests."</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.21.54.jpeg" alt="Skill Development">
                <div class="description">
                    <p>"Mr. Sanjay Seth, Member of Parliament from Ranchi."</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.22.24.jpeg" alt="Environmental Awareness">
                <div class="description">
                    <p>"Mr. Sudesh Oraon is the Vice President of RYVS."</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.23.20.jpeg" alt="Cultural Festival">
                <div class="description">
                    <p>"Mr. Arjun Munda was the Central Minister at that time."</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.24.09.jpeg" alt="Health Camp">
                <div class="description">
                    <p>"Swami Vivekananda Gold Football Tournament 2024"</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.25.40.jpeg" alt="Leadership Summit">
                <div class="description">
                    <p>"MP Arjun Munda along with local MLA Dr. Jitucharan Ram."</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.26.49.jpeg" alt="Charity Drive">
                <div class="description">
                    <p>"Respected Madam President 🙏"</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.39.12.jpeg" alt="Art Exhibition">
                <div class="description">
                    <p>Respected President Smt. Draupadi Murmu ji with Ex-MP Ranchi Sri Ramtahal Choudhary ji and present Rajya Sabha MP Sri Aaditya Sahu ji.</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="WhatsApp Image 2025-05-26 at 12.52.05.jpeg" alt="Youth Day Celebration">
                <div class="description">
                    <p>Welcome of President Draupadi Murmu</p>
                </div>
            </div>
        </div>
    </section>
` }} />);
}

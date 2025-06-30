import React from 'react';

export default function About() {
  return (<div dangerouslySetInnerHTML={{ __html: `<style>
        html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #eaf6ff; /* Soft sky blue background */
    color: #333;
}


/* Centered Heading */
.page-heading {
    text-align: center;
    padding: 30px 0;
    margin: 0;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    color: #ff4500;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Gallery Container */
.gallery-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two boxes side by side */
    gap: 40px;
    padding: 40px;
    max-width: 1400px;
    margin: 0 auto;
}

/* Image Box */
.image-box {
    background-color: #fff8e7; /* Light warm background color */
    width: 100%;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.image-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.image-box img {
    width: 100%;
    height: 400px; /* Increased image height */
    object-fit: contain;
    border-bottom: 1px solid #ddd;
}

/* Caption Styling */
.image-caption {
    text-align: center;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

.image-caption p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

/* Responsive: stack vertically on smaller screens */
@media (max-width: 768px) {
    .gallery-container {
        grid-template-columns: 1fr;
    }
}
    </style>
    <!-- Centered Heading -->
    <h1 class="page-heading">Rastriya Yuva Viksas Sangh-2019</h1>

    <!-- Gallery Container -->
    <div class="gallery-container">
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0001.jpg" alt="Image 1">
            <div class="image-caption">
                <p>Page 1</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0002.jpg" alt="Image 2">
            <div class="image-caption">
                <p>Page 2</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0003.jpg" alt="Image 3">
            <div class="image-caption">
                <p>Page 3</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0004.jpg" alt="Image 4">
            <div class="image-caption">
                <p>Page 4</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0005.jpg" alt="Image 5">
            <div class="image-caption">
                <p>Page 5</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0006.jpg" alt="Image 6">
            <div class="image-caption">
                <p>Page 6</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0007.jpg" alt="Image 7">
            <div class="image-caption">
                <p>Page 7</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0008.jpg" alt="Image 8">
            <div class="image-caption">
                <p>Page 8</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0009.jpg" alt="Image 9">
            <div class="image-caption">
                <p>Page 9</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0010.jpg" alt="Image 10">
            <div class="image-caption">
                <p>Page 10</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0011.jpg" alt="Image 11">
            <div class="image-caption">
                <p>Page 11</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0012.jpg" alt="Image 12">
            <div class="image-caption">
                <p>Page 12</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0013.jpg" alt="Image 13">
            <div class="image-caption">
                <p>Page 13</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0014.jpg" alt="Image 14">
            <div class="image-caption">
                <p>Page 14</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0015.jpg" alt="Image 15">
            <div class="image-caption">
                <p>Page 15</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0016.jpg" alt="Image 16">
            <div class="image-caption">
                <p>Page 16</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0017.jpg" alt="Image 17">
            <div class="image-caption">
                <p>Page 17</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0018.jpg" alt="Image 18">
            <div class="image-caption">
                <p>Page 18</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0019.jpg" alt="Image 19">
            <div class="image-caption">
                <p>Page 19</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0020.jpg" alt="Image 20">
            <div class="image-caption">
                <p>Page 20</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0021.jpg" alt="Image 21">
            <div class="image-caption">
                <p>Page 21</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0022.jpg" alt="Image 22">
            <div class="image-caption">
                <p>Page 22</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0023.jpg" alt="Image 23">
            <div class="image-caption">
                <p>Page 23</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0024.jpg" alt="Image 24">
            <div class="image-caption">
                <p>Page 24</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0025.jpg" alt="Image 25">
            <div class="image-caption">
                <p>Page 25</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0026.jpg" alt="Image 26">
            <div class="image-caption">
                <p>Page 26</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0027.jpg" alt="Image 27">
            <div class="image-caption">
                <p>Page 27</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0028.jpg" alt="Image 28">
            <div class="image-caption">
                <p>Page 28</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0029.jpg" alt="Image 29">
            <div class="image-caption">
                <p>Page 29</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0030.jpg" alt="Image 30">
            <div class="image-caption">
                <p>Page 30</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0031.jpg" alt="Image 31">
            <div class="image-caption">
                <p>Page 31</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0032.jpg" alt="Image 32">
            <div class="image-caption">
                <p>Page 32</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0033.jpg" alt="Image 33">
            <div class="image-caption">
                <p>Page 33</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0034.jpg" alt="Image 34">
            <div class="image-caption">
                <p>Page 34</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0035.jpg" alt="Image 35">
            <div class="image-caption">
                <p>Page 35</p>
            </div>
        </div>
        <div class="image-box">
            <img src="Rastriya yuva Viksas Sangh_2019_page-0036.jpg" alt="Image 36">
            <div class="image-caption">
                <p>Page 36</p>
            </div>
        </div>
    </div>
` }} />);
}

import React from 'react';

export default function Hello1() {
  return (<div dangerouslySetInnerHTML={{ __html: `<style>
        body {
            font-family: 'Noto Serif Devanagari', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #2c3e50;
            text-align: center;
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        h2 {
            font-size: 1.8em;
            margin-bottom: 20px;
        }
        h3 {
            font-size: 1.4em;
            margin-top: 20px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
        }
        p {
            font-size: 1.1em;
            margin: 15px 0;
            text-align: justify;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            h1 {
                font-size: 2em;
            }
            h2 {
                font-size: 1.5em;
            }
            h3 {
                font-size: 1.2em;
            }
            p {
                font-size: 1em;
            }
        }
    </style>
    <div class="container">
        <h1>लक्ष्य का संविधान</h1>
        <h2>राष्ट्रीय युवा विकास संगठन</h2>

        <p>आज दिनांक ------------------------- को "राष्ट्रीय युवा विकास संगठन" नामक संगठन की कार्यकारिणी की बैठक श्री लुकेश कुमार की अध्यक्षता में संगठन के कार्यालय (1) स्थायी कार्यालय – लाज्यू सिसल, ओ. पी. पी. पोस्ट ऑफिस, नोवारी पोस्ट – नोवारी विकास, थाना – लांज, जिला – बालाघाट में संपन्न हुई जिसमें सर्वसम्मति से निम्नलिखित प्रस्ताव पारित किए गए:</p>

        <h3>प्रस्ताव क्रमांक 1:</h3>
        <p>सर्वसम्मति से प्रस्ताव पारित किया गया कि "राष्ट्रीय युवा विकास संगठन" नामक एक सामाजिक संगठन राष्ट्रहित के लिए स्थापित किया जाए और यह संगठन राष्ट्रीय निर्माण के लिए प्रशिक्षित युवा समूह द्वारा संचालित किया जाएगा। यह संगठन हमेशा राष्ट्रीय निर्माण प्रशिक्षित युवा समूह की इकाई के रूप में कार्य करेगा। यह समूह विधिवत पंजीकृत है जिसका पंजीकरण क्रमांक 922/2010-11 है।</p>

        <h3>प्रस्ताव क्रमांक 2:</h3>
        <p>सर्वसम्मति से प्रस्ताव पारित किया गया कि "राष्ट्रीय युवा विकास संगठन" नामक संगठन को सम्पूर्ण भारत देश में विस्तारित करने हेतु संचालक पद पर सर्वसम्मति से श्री नरसिंह कुमार को नियुक्त किया गया है।</p>
    </div>
` }} />);
}

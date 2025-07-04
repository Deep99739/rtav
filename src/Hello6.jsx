import React from 'react';

export default function Hello6() {
  return (<div dangerouslySetInnerHTML={{ __html: `<style>
        body {
            font-family: 'Noto Sans Devanagari', Arial, sans-serif;
            line-height: 1.8;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #00539C;
            font-size: 2.5em;
            margin-bottom: 30px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        ol {
            padding-left: 30px;
            font-size: 1.1em;
        }
        ol li {
            margin-bottom: 15px;
            text-align: justify;
            padding: 10px;
            border-left: 3px solid #1976d2;
            background-color: #f8fafc;
            border-radius: 4px;
            transition: background-color 0.3s ease;
        }
        ol li:hover {
            background-color: #e8f0fe;
        }
        .highlight {
            font-weight: bold;
            color: #d32f2f;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            h1 {
                font-size: 2em;
            }
            ol {
                padding-left: 20px;
            }
            ol li {
                font-size: 1em;
                padding: 8px;
            }
        }
    </style>
    <div class="container">
        <h1>राष्ट्रीय युवा विकास संगठन<br>कार्य विभाग की समीक्षा रिपोर्ट</h1>
        <ol>
            <li>कार्यक्रमों (कार्यशालाओं) एवं युवाओं के सहभागिता को सुनिश्चित करने के लिए योजना बनाई गई है जिससे कार्यक्रमों को व्यापक स्तर पर पहुँचाया जा सके। इसके अंतर्गत युवाओं को आकर्षित किया गया है। संस्था ने विभिन्न स्तरों पर उनकी भागीदारी सुनिश्चित की है। संस्था ने कई अवसरों पर कार्यक्रमों को <span class="highlight">विद्यालयों तक पहुँचाया</span> है।</li>
            <li>महिला मोर्चा को भी संस्था द्वारा विभिन्न कार्यक्रमों में सम्मिलित किया गया है। संगठन द्वारा कई ग्राम स्तर पर कार्यक्रम तथा उनसे जुड़े मुद्दों पर <span class="highlight">कार्यकर्ता के रूप में भी महिला मोर्चा</span> को सम्मिलित किया गया है।</li>
            <li>लोकसभा चुनाव के लिए युवा वर्ग के युवाओं को <span class="highlight">जागरूकता कार्यक्रम</span> के तहत प्रभावी रूप से संस्था द्वारा समाविष्ट किया जा रहा है।</li>
            <li>युवा बच्चे को विधायिका में प्रतिनिधित्व दिलाने हेतु संस्था के द्वारा प्रयास किए गए हैं। संस्था के पिछले निर्देशों में <span class="highlight">300 बच्चे को शैक्षणिक संस्थानों में शामिल</span> किया गया है।</li>
            <li>अन्य कार्यों का समन्वय करते हुए <span class="highlight">सरकारी सहायता कार्य</span> एवं निजी प्रोजेक्ट किए गए हैं।</li>
            <li>विभिन्न संस्थाओं से संपर्क कर ग्रामीण क्षेत्रों के लोगों को <span class="highlight">बीमा तथा चिकित्सा सुविधाओं</span> के लाभ हेतु जानकारी प्रदान की जा रही है।</li>
            <li>अभियान के तहत चलाए जाने वाले कार्यक्रमों में <span class="highlight">नेतृत्व को सुनिश्चित</span> किया गया है।</li>
            <li>सामाजिक जागरूकता कार्यक्रम के अंतर्गत लगभग <span class="highlight">चार व्यक्तियों को मानसिक स्वास्थ्य जागरूकता</span> का नेतृत्व दिया गया है।</li>
            <li>घरों तक जाकर बच्चों का समन्वय किया गया और <span class="highlight">सामाजिक जागरूकता कार्यक्रम</span> किया गया।</li>
            <li>सामाजिक सुरक्षा के लिए <span class="highlight">मृत्यु प्रमाण पत्र</span> संस्था द्वारा जारी किया गया।</li>
            <li>अन्य कार्यों को क्रमशः आयोजित कर उनका <span class="highlight">लेखा जोखा</span> रखा गया है।</li>
            <li>बच्चों के समूह में संस्था का <span class="highlight">नेतृत्व</span> किया गया तथा प्रभावी कार्यवाही करते हुए समूह की कार्यवाही का संचालन किया गया।</li>
            <li>सामाजिक सुरक्षा के तहत अधिकांश <span class="highlight">सरकारी योजनाओं</span> एवं ग्रामीण कार्यों का समन्वय किया गया।</li>
            <li>विद्यालयीन बच्चों के <span class="highlight">विद्यालय के संचालन</span> एवं कई कार्यक्रम भी आयोजित किए गए।</li>
            <li><span class="highlight">राष्ट्रीय कार्यक्रम</span> सरकार द्वारा जारी किए गए हैं जिससे कार्यक्रम का समन्वय हुआ है।</li>
            <li>स्थानीय अन्य <span class="highlight">सरकारी राष्ट्रीय कार्यक्रमों</span> के साथ तालमेल बिठाया जा रहा है।</li>
            <li><span class="highlight">पंचायत कार्यक्रम</span> को भी संस्था द्वारा नियम बनाया गया है।</li>
            <li>स्वास्थ्य संरक्षण एवं <span class="highlight">सफाई अभियान</span> में संस्था का प्रभावी नेतृत्व दिया गया।</li>
            <li>सरकार द्वारा चलाए जा रहे <span class="highlight">स्वच्छता कार्यक्रम</span> को सरकार तक पहुंचाया गया।</li>
            <li><span class="highlight">महिला विकास के कार्यों</span> को कई संस्थाओं द्वारा संचालित किया गया।</li>
            <li><span class="highlight">प्रशिक्षण कार्यक्रम</span> भी आयोजित किए गए।</li>
            <li>विभिन्न गांवों के युवाओं के बीच <span class="highlight">जागरूकता अभियान</span> चलाया गया।</li>
            <li>पंचायत से लेकर जिला पंचायत तक युवाओं को लेकर <span class="highlight">पंचायत के स्तर पर कार्य</span> किया गया।</li>
            <li><span class="highlight">मतदाता पहचान पत्र</span> बनवाने हेतु कई जगहों पर अभियान चलाए गए।</li>
            <li>कृषि विभाग / खाद्य विभाग के तहत <span class="highlight">खेतों की जांच</span> हेतु लोगों को जागरूक किया गया।</li>
            <li><span class="highlight">सरकारी योजनाओं का लाभार्थी</span> व्यक्तियों का चयन किया गया।</li>
            <li>शासकीय एवं गैर सरकारी संगठनों से समन्वय करते हुए <span class="highlight">प्रभावी कार्यक्रम</span> किए गए।</li>
            <li>युवाओं में <span class="highlight">रोजगार</span> हेतु उपयुक्त कार्यक्रम चलाए गए और इसके अंतर्गत महिलाओं को भी शामिल किया गया।</li>
            <li>कई परिवारों में महिलाओं को <span class="highlight">स्वरोजगार</span> से जोड़ने हेतु योजना बनाई गई।</li>
            <li>सामाजिक, आर्थिक, प्रभावी <span class="highlight">प्रेस प्रकाशनों</span> के लिए संस्था के द्वारा लेखन कार्य किए गए।</li>
            <li><span class="highlight">मित्रों के समूह</span> भी प्रभावी ढंग से कार्यक्रमों के संचालन में समन्वय कर रहे हैं।</li>
        </ol>
    </div>
` }} />);
}

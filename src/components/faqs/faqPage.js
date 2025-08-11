import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Faqs/faqPage.css';

const Faq_content = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur molestie?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Volutpat eu elit interdum in. Adipiscing urna diam pellentesque amet non tellus morbi sit urna. Nulla dolor et fusce tellus fringilla. Fermentum amet in sagittis amet. Non ullamcorper ac mattis a. Consequat porttitor ipsum elit aliquet integer non. Blandit non eu purus id. Amet posuere erat eget orci donec. Sodales risus arcu id amet tristique cum nunc purus pulvinar.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Tincidunt adipiscing integer sed imperdiet in nam in tempus?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Volutpat eu elit interdum in. Adipiscing urna diam pellentesque amet non tellus morbi sit urna. Nulla dolor et fusce tellus fringilla. Fermentum amet in sagittis amet. Non ullamcorper ac mattis a. Consequat porttitor ipsum elit aliquet integer non. Blandit non eu purus id. Amet posuere erat eget orci donec. Sodales risus arcu id amet tristique cum nunc purus pulvinar.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Tincidunt adipiscing integer sed?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Volutpat eu elit interdum in. Adipiscing urna diam pellentesque amet non tellus morbi sit urna. Nulla dolor et fusce tellus fringilla. Fermentum amet in sagittis amet. Non ullamcorper ac mattis a. Consequat porttitor ipsum elit aliquet integer non. Blandit non eu purus id. Amet posuere erat eget orci donec. Sodales risus arcu id amet tristique cum nunc purus pulvinar.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Tincidunt adipiscing integer sed imperdiet in nam in tempus?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Volutpat eu elit interdum in. Adipiscing urna diam pellentesque amet non tellus morbi sit urna. Nulla dolor et fusce tellus fringilla. Fermentum amet in sagittis amet. Non ullamcorper ac mattis a. Consequat porttitor ipsum elit aliquet integer non. Blandit non eu purus id. Amet posuere erat eget orci donec. Sodales risus arcu id amet tristique cum nunc purus pulvinar.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Tincidunt adipiscing integer sed?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Volutpat eu elit interdum in. Adipiscing urna diam pellentesque amet non tellus morbi sit urna. Nulla dolor et fusce tellus fringilla. Fermentum amet in sagittis amet. Non ullamcorper ac mattis a. Consequat porttitor ipsum elit aliquet integer non. Blandit non eu purus id. Amet posuere erat eget orci donec. Sodales risus arcu id amet tristique cum nunc purus pulvinar.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Tincidunt adipiscing?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Volutpat eu elit interdum in. Adipiscing urna diam pellentesque amet non tellus morbi sit urna. Nulla dolor et fusce tellus fringilla. Fermentum amet in sagittis amet. Non ullamcorper ac mattis a. Consequat porttitor ipsum elit aliquet integer non. Blandit non eu purus id. Amet posuere erat eget orci donec. Sodales risus arcu id amet tristique cum nunc purus pulvinar.'
    }
  ];

  return (
    <div className="faqs-container">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <div className='FirstC'></div>
      <div className='SecondC'></div>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div 
            className="faq-question" 
            onClick={() => toggleFAQ(index)}
          >
            <h2>{faq.question}</h2>
            <FontAwesomeIcon 
              icon={activeIndex === index ? faMinus : faPlus} 
              className="faq-icon"
            />
          </div>
          
          {activeIndex === index && (
            <div className="faq-answer">
                <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq_content;
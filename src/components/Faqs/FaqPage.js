import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Faqs/FaqPage.module.css';

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
    <>
      <div className={styles.header}>
        <div className={styles.ContactUs}>Frequently Asked Questions</div>
        <div className={styles.fcircle}></div>
        <div className={styles.scircle}></div>
      </div>
      <div className={styles["faqs-container"]}>

        {/* FAQ List Section */}
        <div style={{ marginTop: "2rem" }}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <h2 className={styles.faqQuestionTitle}>{faq.question}</h2>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faMinus : faPlus}
                  className={styles.faqIcon}
                />
              </div>
              {activeIndex === index && (
                <div className={styles.faqAnswer}>
                  <p className={styles.faqAnswerText}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq_content;
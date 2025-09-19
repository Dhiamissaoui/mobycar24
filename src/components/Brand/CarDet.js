
import style from '../../styles/Brand/carDet.module.css'
import img1 from '../../images/xx.png'
import img2 from '../../images/audiTwo.png'
import img3 from '../../images/rides_audi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { GB, FR, DE } from 'country-flag-icons/react/3x2';



import profile_Img from '../../images/profile pic.png'
import audisedan from '../../images/audiA6sedan.png'
import audietron from '../../images/audiA6sedanEtron.png'
import audisportpack from '../../images/audiA6sportpack.png'
import {
    faCalendar,
    faCaretLeft,
    faCaretRight,
    faCheck,
    faGaugeHigh,
    faHeart,
    faPhone,
    faStar,
    faX
} from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function CarDet() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [contactActive, setcontactActive] = useState(false);
    const [ThanksCont, setThanksCont] = useState(false);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const [language, setLanguage] = useState('EN');
    const FlagIcon = {
        EN: GB,
        FR: FR,
        DE: DE
    }[language];




    const accordionData = [
        {
            title: "Lorem ipsum dolor sit amet consectetur molestie?",
            content: "Lorem ipsum dolor sit amet consectetur. Auctor porttitor vitae varius vitae. Sem in nisl vel sapien velit egestas tincidunt a. Ridiculus iaculis amet aliquam volutpat fermentum tempor nulla vitae."
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur molestie?",
            content: "Lorem ipsum dolor sit amet consectetur. Auctor porttitor vitae varius vitae. Sem in nisl vel sapien velit egestas tincidunt a. Ridiculus iaculis amet aliquam volutpat fermentum tempor nulla vitae."
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur molestie?",
            content: "Lorem ipsum dolor sit amet consectetur. Auctor porttitor vitae varius vitae. Sem in nisl vel sapien velit egestas tincidunt a. Ridiculus iaculis amet aliquam volutpat fermentum tempor nulla vitae."
        }
    ];

    return (
        <>
            <div className={style.cont}>
                <div className={style.leftSide}>
                    <div className={style.textHead}>Rent Audi A6 (Blue), 2024</div>
                    <img className={style.leftImg} src={img3} alt='ss' />
                    <div className={style.descTitle}>Description</div>
                    <div className={style.desc}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. Vulputate nisl vel diam eu. Risus natoque consectetur ultricies turpis ac. Facilisis dolor fermentum commodo facilisis ornare feugiat nisl. Vitae cras convallis hendrerit velit sed a vitae. Amet commodo sit vitae urna vitae donec.</div>
                    <div className={style.descTitle}>Rental price</div>
                    <div className={style.table}>
                        <table className="table  table-light ">
                            <thead >
                                <tr>
                                    <th scope="col">Rental period</th>
                                    <th scope="col">Price per day</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>1 day</td>
                                    <td>£ 153</td>

                                </tr>
                                <tr>

                                    <td>2 day</td>
                                    <td>£ 153</td>

                                </tr>
                                <tr>
                                    <td>3-6 day</td>
                                    <td>£ 153</td>
                                </tr>
                                <tr>
                                    <td>7-29 day</td>
                                    <td>£ 153</td>
                                </tr>
                                <tr>
                                    <td>30+ day</td>
                                    <td>£ 153</td>
                                </tr>
                                <tr style={{ borderBottomColor: 'transparent' }}>
                                    <td>VAT Tax</td>
                                    <td>+5%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={style.descTitle}>More Audi A6</div>
                    <div className={style.cardCont}>
                        <div className={style.card}>
                            <img src={audisedan} alt='' />
                            <div className={style.carName}>Audi A6 sedan</div>
                            <div className={style.para}>£570/day</div>
                        </div>
                        <div className={style.card}>
                            <img src={audietron} alt='' />
                            <div className={style.carName}>Audi A6 e-tron</div>
                            <div className={style.para}>£570/day</div>
                        </div>
                        <div className={style.card}>
                            <img src={audisportpack} alt='' />
                            <div className={style.carName}>2024 Audi A6 Exterior</div>
                            <div className={style.para}>£570/day</div>
                        </div>
                    </div>
                    <div className={style.descTitle}>Specification</div>
                    <div className={style.contGrid}>
                        <div className={style.spec}>
                            <span className={style.label}>Year</span>
                            <span className={style.value}>2023</span>
                        </div>
                        <div className={style.spec}>
                            <span className={style.label}>Colour</span>
                            <span className={style.value}>Blue</span>
                        </div>
                        <div className={style.spec}>
                            <span className={style.label}>0-100KM/H</span>
                            <span className={style.value}>8.4 SEC</span>
                        </div>
                        <div className={style.spec}>
                            <span className={style.label}>Transmission</span>
                            <span className={style.value}>Automatic</span>
                        </div>
                        <div className={style.spec}>
                            <span className={style.label}>Motor</span>
                            <span className={style.value}>2.4L 4 Cylinder</span>
                        </div>
                        <div className={style.spec}>
                            <span className={style.label}>Max. speed</span>
                            <span className={style.value}>232</span>
                        </div>
                        <div className={style.spec}>
                            <span className={style.label}>Horsepower</span>
                            <span className={style.value}>340</span>
                        </div>
                        <div className={style.spec}>
                            <span className={style.label}>Type of fuel</span>
                            <span className={style.value}>Gas</span>
                        </div>
                        <div className={style.spec}>
                            <span className={style.label}>Body type</span>
                            <span className={style.value}>Sedan</span>
                        </div>
                    </div>
                    <div className={style.descTitle}>reviews</div>
                    <div className={style.revCont}><FontAwesomeIcon style={{ transform: 'scale(0.8)' }} icon={faStar} />4.5 ( 54 Reviews) </div>
                    <div className={style.reviewGrid}>
                        <div className={style.boxReview}>
                            <div className={style.headReview}>
                                <div className={style.nameReview}>Chance Bergson </div>
                                <div className={style.starRev}><FontAwesomeIcon style={{ transform: 'scale(0.8)' }} icon={faStar} />4.5 </div>
                            </div>
                            <div className={style.label}>Warsaw, Poland</div>
                            <div style={{ color: '#919191' }}>“Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.”</div>
                        </div>
                        <div className={style.boxReview}>
                            <div className={style.headReview}>
                                <div className={style.nameReview}>Chance Bergson </div>
                                <div className={style.starRev}><FontAwesomeIcon style={{ transform: 'scale(0.8)' }} icon={faStar} />4.5 </div>
                            </div>
                            <div className={style.label}>Warsaw, Poland</div>
                            <div style={{ color: '#919191' }}>“Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.”</div>
                        </div>
                        <div className={style.boxReview}>
                            <div className={style.headReview}>
                                <div className={style.nameReview}>Chance Bergson </div>
                                <div className={style.starRev}><FontAwesomeIcon style={{ transform: 'scale(0.8)' }} icon={faStar} />4.5 </div>
                            </div>
                            <div className={style.label}>Warsaw, Poland</div>
                            <div style={{ color: '#919191' }}>“Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.”</div>
                        </div>
                    </div>
                    <div className={style.descTitle}>Report</div>
                    <div className={style.formRepo}>
                        <div className='d-flex w-100 gap-4 mt-4'>
                            <div className='w-50'>
                                <div className={style.textRepo}>full name</div>
                                <input type='text' className='bg-grey mt-2' placeholder='enter first Name' />
                            </div>
                            <div className='w-50'>
                                <div className={style.textRepo}>Booking ID</div>
                                <input type='text' className='bg-grey mt-2' placeholder='enter Booking ID' />
                            </div>
                        </div>
                        <div className='w-100 mt-4'>
                            <div className={style.textRepo}>Description</div>
                            <textarea type='text' style={{ resize: 'vertical', minHeight: '100px', fontSize: '15px' }} className={`bg-light mt-2 pt-2 ${style.textar}`} placeholder='enter Booking ID' />
                        </div>
                        <button className={style.submit}>Submit</button>
                    </div>
                    <div className={style.descTitle}>Frequently Asked Questions</div>
                    <div style={{ marginLeft: '-12px', marginTop: '20px', width: '100%' }} className={`container`}>
                        <div className="row w-100">
                            <div className="col-md-10 w-100">
                                {/* Accordion Items */}
                                {accordionData.map((item, index) => (
                                    <div key={index} className={`accordion-item border p-3 shadow rounded mb-3`}>
                                        <h2 className="accordion-header" id={`heading-${index}`}>
                                            <button
                                                className={`accordion-button fs-5 ${activeIndex === index ? '' : 'collapsed'} fw-bold py-3`}
                                                type="button"
                                                onClick={() => toggleAccordion(index)}
                                                aria-expanded={activeIndex === index}
                                                aria-controls={`collapse-${index}`}
                                            >
                                                {item.title}
                                                <span className={`fs-2 ${style.plusBtn}`}>
                                                    {activeIndex === index ? '-' : '+'}
                                                </span>
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse-${index} ${style.red}`}
                                            className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                                            aria-labelledby={`heading-${index}`}
                                        >
                                            <div className="accordion-body pt-3" style={{ color: '#919191' }}>
                                                {item.content}

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.rightSide}>
                    <FontAwesomeIcon style={{ display: 'flex', justifySelf: 'flex-end', height: '55px' }} icon={faHeart} className={style.heart} />
                    <img src={img1} className={style.imgrightOne} alt='' />
                    <img src={img2} className={style.imgrightTwo} alt='' />
                    <div style={{ color: '#919191', marginTop: '30px' }}>Price for a day</div>
                    <div className=' fs-1 fw-bold'>£153</div>
                    <div className={` d-flex gap-3  justify-content-between`}>
                        <div className={style.rightdet}><FontAwesomeIcon style={{ transform: 'scale(0.8)' }} icon={faCalendar} />Available now </div>
                        <div className={style.rightdet}><FontAwesomeIcon style={{ transform: 'scale(0.8)' }} icon={faGaugeHigh} />250 km/day</div>
                        <div className={style.rightdet}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '20px' }} className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                            250 km/day </div>
                    </div>
                    <div className={style.cardetDiv}></div>
                    <div className=' d-flex w-100  justify-content-between  align-items-center'>
                        <img src={profile_Img} className='rounded-circle' style={{ width: '70px' }} alt='ss' />
                        <div style={{ marginLeft: '-50px' }}>
                            <div style={{ color: '#919191' }}>Provider</div>
                            <div className='fs-6 fw-bold'>Esther Howard</div>
                        </div>
                        <button onClick={() => setcontactActive(true)} className={style.contactBtn}>Contact</button>
                    </div>
                    <div className={style.cardetDiv}></div>
                    <div className={style.descTitle}>Book online</div>
                    <div className={style.bookCont}>
                        <div className=' fw-bold'>Choose a rental date</div>
                        <div className={style.cardetDiv}></div>
                        <div className='d-flex gap-5'>
                            <div className="dropdown show">
                                <button
                                    style={{ backgroundColor: '#F2F2F2', color: 'black', width: '110%' }}
                                    className="btn  d-flex align-items-center justify-content-between ms-auto  dropdown-toggle "
                                    type="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div style={{ color: '#B1B1B1' }}>25 Feb 2024</div>
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><button className="dropdown-item" type='button'>25 Feb 2024</button></li>
                                    <li><button className="dropdown-item" type='button'>25 Feb 2024</button></li>
                                    <li><button className="dropdown-item" type='button'>25 Feb 2024</button></li>
                                </ul>
                            </div>
                            <div className="dropdown show">
                                <button
                                    style={{ backgroundColor: '#F2F2F2', color: 'black', width: '110%' }}
                                    className="btn d-flex align-items-center justify-content-between ms-auto   dropdown-toggle "
                                    type="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div style={{ color: '#B1B1B1' }}>27 Feb 2024</div>
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><button className="dropdown-item" >27 Feb 2024</button></li>
                                    <li><button className="dropdown-item" >27 Feb 2024</button></li>
                                    <li><button className="dropdown-item" >27 Feb 2024</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown show">
                            <button
                                style={{ backgroundColor: '#F2F2F2', color: 'black' }}
                                className="btn w-100 d-flex align-items-center justify-content-between mt-4  dropdown-toggle "
                                type="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <div style={{ color: '#B1B1B1' }}>12:00 pm</div>
                            </button>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><button className="dropdown-item" >12:00 pm</button></li>
                                <li><button className="dropdown-item" >12:00 pm</button></li>
                                <li><button className="dropdown-item" >12:00 pm</button></li>
                            </ul>
                        </div>
                        <div className={style.dateCar}>
                            <FontAwesomeIcon icon={faCaretLeft} />
                            <div>February 2024</div>
                            <FontAwesomeIcon icon={faCaretRight} />
                        </div>
                        <div className="container mt-4 w-100">
                            <table className="table text-center">
                                <thead>
                                    <tr style={{ border: '0px solid white' }}>
                                        <th style={{ color: '#9E4DB6' }}>Sun</th>
                                        <th style={{ color: '#9E4DB6' }}>Mon</th>
                                        <th style={{ color: '#9E4DB6' }}>Tue</th>
                                        <th style={{ color: '#9E4DB6' }}>Wed</th>
                                        <th style={{ color: '#9E4DB6' }}>Thu</th>
                                        <th style={{ color: '#9E4DB6' }}>Fri</th>
                                        <th style={{ color: '#9E4DB6' }}>Sat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ border: '0px solid white' }}>
                                        <td style={{ color: '#ABABAB' }}>31</td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr style={{ border: '0px solid white' }}>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>9</td>
                                        <td><div style={{ backgroundColor: '#F6EEF8', color: "#9E4DB6", borderRadius: '50%' }}>10</div></td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>13</td>
                                    </tr>
                                    <tr style={{ border: '0px solid white' }}>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>16</td>
                                        <td>17</td>
                                        <td>18</td>
                                        <td>19</td>
                                        <td>20</td>
                                    </tr>
                                    <tr style={{ border: '0px solid white' }}>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                    </tr>
                                    <tr style={{ border: '0px solid white' }}>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                        <td style={{ color: '#ABABAB' }}>1</td>
                                        <td style={{ color: '#ABABAB' }}>2</td>
                                        <td style={{ color: '#ABABAB' }}>3</td>
                                        <td style={{ color: '#ABABAB' }}>4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className={style.descTitle}>Your booking details</div>

                    <div className={style.bookCont}>
                        <div className=' fs-6 fw-bold mb-2'>Phone number</div>
                        <div className={`input-group mb-3  rounded-1 ${style.continput} `}>
                            <button
                                className="btn btn-outline-trnasparent d-flex justify-content-between align-items-center dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ borderRight: '1px solid #DFDFDF', margin: '15px', padding: '0', paddingRight: '5px' }}
                            >
                                <div style={{ width: '100%', height: '30px' }}>
                                    <FlagIcon style={{ width: '50%', height: '100%', borderRadius: '50%' }} />
                                    +44
                                </div>

                            </button>
                            <ul className="dropdown-menu">
                                <li><div className="dropdown-item" > <div style={{ width: '100%', height: '30px' }}>
                                    <GB style={{ width: '50%', height: '100%', borderRadius: '50%' }} />
                                    +44
                                </div></div></li>
                                <li><div className="dropdown-item" > <div style={{ width: '100%', height: '30px' }}>
                                    <FR style={{ width: '50%', height: '100%', borderRadius: '50%' }} />
                                    +44
                                </div></div></li>
                                <li><div className="dropdown-item" > <div style={{ width: '100%', height: '30px' }}>
                                    <DE style={{ width: '50%', height: '100%', borderRadius: '50%' }} />
                                    +44
                                </div></div></li>
                            </ul>
                            <input
                                type="number"
                                className="form-control bg-transparent border-0"
                                placeholder="102 524 1236"
                                aria-label="Text input with dropdown button"
                            />
                        </div>
                        <div className=' fs-6 fw-bold mb-2'>Special request</div>
                        <textarea type='text' style={{ resize: 'vertical', height: '150px', fontSize: '15px', backgroundColor: '#F2F2F2' }} className={` mt-2 pt-2 border-0 ${style.textar}`} placeholder='enter Booking ID' />
                    </div>

                    <div className={style.descTitle}>booking Summary</div>
                    <div className='w-100 rounded-2 p-3' style={{ backgroundColor: '#F6EEF8', height: 'auto' }}>
                        <div className='d-flex justify-content-between p-2'>
                            <div style={{ color: '#919191' }}>Rental (1 day)</div>
                            <div>£153</div>
                        </div>
                        <div className='d-flex justify-content-between p-2'>
                            <div style={{ color: '#919191' }}>VAT Tax (5%)</div>
                            <div>+ £8</div>
                        </div>
                        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(158, 77, 182, 0.12)' }} className='m-2'></div>
                        <div className='d-flex justify-content-between p-2'>
                            <div className='fw-bold'>VAT Tax (5%)</div>
                            <div style={{ color: '#9E4DB6' }}>+ £8</div>
                        </div>
                    </div>
                    <button onClick={() => setThanksCont(true)} style={{ backgroundColor: '#9E4DB6', color: 'white', width: '100%', textAlign: 'center', borderColor: 'transparent', borderRadius: '10px', padding: '10px 0', margin: '15px 0' }}>Reserve</button>
                </div>
                {contactActive &&
                    <div className={style.contactPopUp}>
                        <FontAwesomeIcon icon={faX} onClick={() => setcontactActive(false)} className={style.fax} />
                        <div className='fw-bold fs-3 mt-5'>How do you like to contact?</div>
                        <div className={style.paraContactPop}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. Vulputate nisl vel diam eu. Risus natoque.</div>
                        <div className='fw-bold fs-1 mt-4'>+44 120 125 1236</div>
                        <button className='d-flex align-items-center fw-bold justify-content-center gap-2 text-center mt-5' style={{ width: '80%', color: '#9E4DB6', backgroundColor: 'transparent', border: '1px solid #9E4DB6', borderRadius: '5px', padding: '10px 0' }}>
                            <FontAwesomeIcon icon={faPhone} />
                            Make a call
                        </button>
                        <div className='d-flex gap-3' id={style.move} style={{ width: '80%' }}>
                            <button className='d-flex align-items-center fw-bold justify-content-center gap-2 text-center mt-5' style={{ width: '80%', color: '#9E4DB6', backgroundColor: 'transparent', border: '1px solid #9E4DB6', borderRadius: '5px', padding: '10px 0' }}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                                Make a call
                            </button>
                            <button className='d-flex align-items-center fw-bold justify-content-center gap-2 text-center mt-5' style={{ width: '80%', color: '#9E4DB6', backgroundColor: 'transparent', border: '1px solid #9E4DB6', borderRadius: '5px', padding: '10px 0' }}>
                                <FontAwesomeIcon icon={faTelegram} />
                                Make a call
                            </button>
                        </div>

                    </div>
                }
                {ThanksCont &&
                    <div className={style.thanku}>
                        <FontAwesomeIcon icon={faX} onClick={() => setThanksCont(false)} className={style.fax} />

                        <div className={style.checkCont}><FontAwesomeIcon icon={faCheck} className={style.check} /></div>
                        <div className='fw-bold fs-3 mt-5'>Thank You!</div>
                        <div className={style.paraContactPop}>Your request has been sent successfully</div>
                        <Link className={style.btndet} to='/confirmReserve'>View details</Link>


                    </div>
                }
            </div >

        </>
    );
}

export default CarDet;
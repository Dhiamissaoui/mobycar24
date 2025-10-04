import style from '../../styles/Brand/CarConfirm.module.css'
import audi from '../../images/rides_audi.png'
import profile from '../../images/profile pic.png'
import {
    faPhone,
    faGaugeHigh,
    faStar,
    faChevronLeft,
    faBell,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
function ConfirmCarReserve({ setActiveTab, toggleSideMenu }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleBackClick = () => {
        if (setActiveTab) {
            setActiveTab('rides');
        }
    };

    return (
        <>
            {/* Mobile Header */}
            {isMobile && (
                <div className={style.mobileHeader}>
                    <button className={style.backBtn} onClick={handleBackClick}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <div className={style.headerActions}>
                        <button onClick={() => setActiveTab('notifications')} className={style.iconButton}>
                            <FontAwesomeIcon icon={faBell} className={style.headerIcon} />
                        </button>
                        <button className={style.iconButton} onClick={toggleSideMenu}>
                            <FontAwesomeIcon icon={faBars} className={style.headerIcon} />
                        </button>
                    </div>
                </div>
            )}



            <div className={style.cont}>
                {/* Mobile Layout */}
                {isMobile ? (
                    <div className={style.mobileContainer}>
                        {/* Thank You Section */}
                        <div className={style.thankYouSection}>
                            <h1 className={style.thankYouTitle}>Thank You! Your Request Was Sent Successfully</h1>
                            <p className={style.thankYouDescription}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. Vulputate nisl vel diam eu. Risus natoque consectetur.</p>
                        </div>

                        {/* Car Details Card */}
                        <div className={style.carDetailsCard}>
                            <div className={style.carImageContainer}>
                                <img src={audi} alt='Audi A6' className={style.carImage} />
                            </div>
                            <div className={style.carInfo}>
                                <div className={style.carCategory}>SUV • 2024</div>
                                <div className='d-flex gap-2'>
                                    <div className={style.carName}>Rent Audi A6 (Blue)</div>
                                    <div className={style.carRating}>
                                        <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                                        <span className={style.ratingText}>4.5</span>
                                    </div>
                                </div>


                                <div className={style.carSpecs}>
                                    <div className={style.specItem}>
                                        <FontAwesomeIcon icon={faGaugeHigh} className={style.specIcon} />
                                        <span>250 Km/Day</span>
                                    </div>
                                    <div className={style.specItem}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={style.specIcon}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>
                                        <span>Insurance Included</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Selection Card */}
                        <div className={style.locationCard}>
                            <div style={{ borderBottom: '1px solid #ECECEC', paddingBottom: '20px', marginBottom: '20px' }}>
                                <h2 className={style.requestIdTitle}>Your Request ID Is 12345</h2>
                                <p className={style.requestIdDescription}>Vestibulum condimentum, massa eu consectetur congue, diam tortor fringilla</p>
                            </div>

                            <h2 className={style.locationTitle}>Select The Pickup And Drop Location</h2>
                            <div className={style.locationInputs}>
                                <div className={style.locationInput}>
                                    <label className={style.locationLabel}>Pick-up location</label>
                                    <div className="dropdown">
                                        <button
                                            className="btn d-flex align-items-center justify-content-between dropdown-toggle bg-white w-100"
                                            type="button"
                                            id="pickupDropdown"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{ borderRadius: '8px', border: '1px solid #ddd', padding: '12px 15px' }}
                                        >
                                            <span style={{ color: '#666', fontSize: '12px' }}>61549 N Lincoln Street, Brentwood 52011</span>
                                        </button>
                                        <ul className="dropdown-menu w-100" aria-labelledby="pickupDropdown">
                                            <li><button className="dropdown-item" type="button" style={{ fontSize: '12px' }}>61549 N Lincoln Street, Brentwood 52011</button></li>
                                            <li><button className="dropdown-item" type="button" style={{ fontSize: '12px' }}>123 Main Street, Downtown 12345</button></li>
                                            <li><button className="dropdown-item" type="button" style={{ fontSize: '12px' }}>456 Oak Avenue, Uptown 67890</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={style.locationInput}>
                                    <label className={style.locationLabel}>Drop-off location</label>
                                    <div className="dropdown">
                                        <button
                                            className="btn d-flex align-items-center justify-content-between dropdown-toggle bg-white w-100"
                                            type="button"
                                            id="dropoffDropdown"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{ borderRadius: '8px', border: '1px solid #ddd', padding: '12px 15px' }}
                                        >
                                            <span style={{ color: '#666', fontSize: '12px' }}>9968 Zion Corners, Port Alan 87441-8774</span>
                                        </button>
                                        <ul className="dropdown-menu w-100" aria-labelledby="dropoffDropdown">
                                            <li><button className="dropdown-item" type="button" style={{ fontSize: '12px' }}>9968 Zion Corners, Port Alan 87441-8774</button></li>
                                            <li><button className="dropdown-item" type="button" style={{ fontSize: '12px' }}>789 Pine Street, Harbor 54321</button></li>
                                            <li><button className="dropdown-item" type="button" style={{ fontSize: '12px' }}>321 Elm Drive, Suburb 98765</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button className={style.saveButton}>Save</button>
                        </div>

                        {/* Booking Summary Card */}
                        <div className={style.bookingSummaryCard}>
                            <h2 className={style.bookingTitle}>Booking Summary</h2>
                            <div className={style.bookingDetails}>
                                <div className={style.bookingRow}>
                                    <span className={style.bookingLabel}>From</span>
                                    <span className={style.bookingValue}>15 Feb 2024 - 12:00 pm</span>
                                </div>
                                <div className={style.bookingRow}>
                                    <span className={style.bookingLabel}>To</span>
                                    <span className={style.bookingValue}>16 Feb 2024 - 02:00 pm</span>
                                </div>
                                <div className={style.bookingRow}>
                                    <span className={style.bookingLabel}>Rental (1 Day)</span>
                                    <span className={style.bookingValue}>£ 153</span>
                                </div>
                                <div className={style.bookingRow}>
                                    <span className={style.bookingLabel}>Insurance</span>
                                    <span className={style.bookingValue}>Free</span>
                                </div>
                                <div className={style.bookingSeparator}></div>
                                <div className={style.bookingRow}>
                                    <span className={style.bookingLabel}>Subtotal</span>
                                    <span className={style.bookingValue}>£153</span>
                                </div>
                                <div className={style.bookingRow}>
                                    <span className={style.bookingLabel}>VAT Tax (5%)</span>
                                    <span className={style.bookingValue}>+ £8</span>
                                </div>
                                <div className={style.bookingSeparator}></div>
                                <div className={style.bookingRow}>
                                    <span className={style.bookingLabel}>Total</span>
                                    <span className={style.bookingTotal}>£161</span>
                                </div>
                            </div>
                        </div>

                        {/* Service Provider Card */}
                        <div className={style.serviceProviderCard}>
                            <h2 className={style.serviceProviderTitle}>Service Provider Details</h2>
                            <div className={style.serviceProviderInfo}>
                                <img src={profile} alt='Service Provider' className={style.providerImage} />
                                <div className={style.providerDetails}>
                                    <div className={style.providerName}>Esther Howard</div>
                                    <div className={style.providerStats}>2,719 Trips | Joined Oct 2015</div>
                                    <div className={style.providerResponse}>Typically responds in 4 minutes</div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Information Card */}
                        <div className={style.additionalInfoCard}>
                            <h2 className={style.additionalInfoTitle}>Additional Information</h2>
                            <p className={style.additionalInfoText}>Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam pretium. Imperdiet faucibus feugiat vitae id at nullam vitae etiam venenatis. Tortor rhoncus elementum.</p>
                        </div>

                        {/* Confirm Button */}
                        <button className={style.confirmButton} onClick={() => setActiveTab('rides')}>Confirm Ride By Paying</button>
                    </div>
                ) : (
                    // Desktop Layout (unchanged)
                    <>
                        <div className={style.leftSide}>
                            <div className='fw-bold  fs-3'>Thank You! Your request was sent successfully</div>
                            <div style={{ color: '#919191' }}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. Vulputate nisl vel diam eu. Risus natoque consectetur.</div>
                            <div style={{ height: '1px', backgroundColor: '#ECECEC', width: '100%', margin: '20px 0' }}></div>
                            <div className='d-flex gap-2 mt-3 mb-3'>
                                <img src={audi} alt='ddd' className={style.carCont} />
                                <div style={{ marginLeft: '40px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                    <div className='fw-bold fs-4'>Rent Audi A6 (Blue), 2024</div>
                                    <div className={` d-flex gap-3 `}>
                                        <div className={style.rightdetStar}><FontAwesomeIcon style={{ transform: 'scale(0.8)' }} icon={faStar} />4.5 </div>
                                        <div className={style.rightdet}><FontAwesomeIcon style={{ transform: 'scale(0.8)' }} icon={faGaugeHigh} />250 km/day</div>
                                        <div className={style.rightdet}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '20px' }} className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>
                                            insurance Included </div>
                                    </div>
                                    <div className={style.para}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam.</div>
                                </div>
                            </div>
                            <div style={{ height: '1px', backgroundColor: '#ECECEC', width: '100%', margin: '20px 0' }}></div>
                            <div className='fw-bold fs-3'>Specification</div>
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
                            <div style={{ height: '1px', backgroundColor: '#ECECEC', width: '100%', margin: '20px 0' }}></div>
                            <div className='fw-bold fs-3 mb-3'>Service provider details</div>
                            <div className='d-flex gap-3'>
                                <img src={profile} alt='dd' className={style.profile} />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div className='fw-bold fs-6'>Esther Howard</div>
                                    <div style={{ color: '#919191', fontSize: '14px' }}>2,719 trips  |  Joined Oct 2015</div>
                                    <div style={{ color: '#6FB64D', fontSize: '10px' }}>Typically responds in 4 minutes</div>
                                </div>
                            </div>
                            <div style={{ height: '1px', backgroundColor: '#ECECEC', width: '100%', margin: '20px 0' }}></div>
                            <div className='fw-bold fs-3'>Additional Information</div>
                            <div style={{ color: '#919191' }}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. Vulputate nisl vel diam eu. Risus natoque consectetur ultricies turpis ac. Facilisis dolor fermentum commodo facilisis ornare feugiat nisl.</div>
                            <div style={{ height: '1px', backgroundColor: '#ECECEC', width: '100%', margin: '20px 0' }}></div>
                            <div className='fw-bold fs-3'>Support</div>
                            <div style={{ color: '#919191' }}>If you have any questions contact support directly</div>

                            <div className='w-100 d-flex gap-3'>
                                <button className='d-flex align-items-center fw-bold justify-content-center gap-2 text-center mt-3' style={{ width: '80%', color: '#9E4DB6', backgroundColor: 'transparent', border: '1px solid #9E4DB6', borderRadius: '5px', padding: '10px 0' }}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    Make a call
                                </button>
                                <button className='d-flex align-items-center fw-bold justify-content-center gap-2 text-center mt-3' style={{ width: '80%', color: '#9E4DB6', backgroundColor: 'transparent', border: '1px solid #9E4DB6', borderRadius: '5px', padding: '10px 0' }}>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    Make a call
                                </button>
                                <button className='d-flex align-items-center fw-bold justify-content-center gap-2 text-center mt-3' style={{ width: '80%', color: '#9E4DB6', backgroundColor: 'transparent', border: '1px solid #9E4DB6', borderRadius: '5px', padding: '10px 0' }}>
                                    <FontAwesomeIcon icon={faTelegram} />
                                    Make a call
                                </button>
                            </div>
                            <div style={{ color: '#9E4DB6', margin: '10px 0', fontWeight: 'bold', fontSize: '13px' }}>Our working hours are: 9:00 to 20:00</div>
                        </div>
                        <div className={style.rightSide}>
                            <div style={{ backgroundColor: '#F6F6F6', borderRadius: '10px', padding: '20px' }}>
                                <div className='d-flex fw-bold' style={{ fontSize: '24px' }}>Your request ID is <div style={{ color: '#9E4DB6' }}>12345</div></div>
                                <div style={{ color: '#919191' }}>Vestibulum condimentum, massa eu consectetur congue, diam tortor fringilla </div>
                                <div style={{ backgroundColor: 'white', borderRadius: '10px', margin: '20px 0', padding: '10px' }}>
                                    <div className='fw-bold'>Select the Pickup and Drop location </div>
                                    <div style={{ height: '1px', backgroundColor: '#ECECEC', width: '90%', margin: '20px 10px', display: 'flex', justifySelf: 'center' }}></div>
                                    <div className='d-flex gap-5 w-100 justify-content-start '>
                                        <div className="dropdown show" style={{ width: '40%' }}>
                                            <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Pick-up location</div>
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
                                        <div className="dropdown show " style={{ width: '40%' }}>
                                            <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Drop-off location</div>
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
                                    <Link to="/brand" className={style.SaveBtn}>Save</Link>
                                </div>
                                <div className='d-flex fw-bold' style={{ fontSize: '24px' }}>booking Summary</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'white', borderRadius: '10px', margin: '20px 0', padding: '10px' }}>
                                    <div className='d-flex justify-content-between'>
                                        <div style={{ color: '#919191' }}>Form</div>
                                        <div className='fw-bold'>15 Feb 2024 -12:00 pm</div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div style={{ color: '#919191' }}>To</div>
                                        <div className='fw-bold'>16 Feb 2024 - 02:00 pm</div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div style={{ color: '#919191' }}>Rental (1 day)</div>
                                        <div className='fw-bold'>£ 153</div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div style={{ color: '#919191' }}>Insurance</div>
                                        <div className='fw-bold'>Free</div>
                                    </div>
                                    <div style={{ height: '1px', backgroundColor: '#ECECEC', width: '100%', margin: '10px 0' }}></div>
                                    <div className='d-flex justify-content-between'>
                                        <div style={{ color: '#919191' }}>Rental (1 day)</div>
                                        <div className='fw-bold'>£153</div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div style={{ color: '#919191' }}>VAT Tax (5%)</div>
                                        <div className='fw-bold'>+ £8</div>
                                    </div>
                                    <div style={{ height: '1px', backgroundColor: '#ECECEC', width: '100%', margin: '10px 0' }}></div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='fw-bold' >Total</div>
                                        <div style={{ color: '#9E4DB6', fontWeight: 'bold' }}>£161</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </>
                )}

            </div >
        </>
    );
}
export default ConfirmCarReserve;
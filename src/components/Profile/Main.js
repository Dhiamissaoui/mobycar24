import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faCar,
  faEnvelope,
  faHeart,
  faHistory,
  faUser, // For insurance
  faTachometerAlt,   // For mileage
  faChevronRight,
  faChevronLeft,
  faShieldAlt,
  faStar,
  faCalendarAlt,
  faClock,
  faCircleXmark,
  faEye,
  faPowerOff,
  faEyeSlash,
  faSearch,
  faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons';

import Styles from '../../styles/profile/Main.module.css';
import Messages from '../../styles/profile/Messages.module.css';
import Fav from '../../styles/profile/Favorities.module.css';
import Payement from '../../styles/profile/Payment.module.css';
import Rides from '../../styles/profile/Rides.module.css';
import Img from '../../images/profile pic.png';
import mapsImage from '../../images/maps.png';


import PorscheImage from '../../images/porsche.png';
import CadillacImage from '../../images/car-cadillac.png';
import RollsRoyceImage from '../../images/car-rolls.png';
import LamborghiniImage from '../../images/car-lambo.png';
import MiniCooperImage from '../../images/car-mini.png';

import ProfileImg from '../../images/profile pic.png';

import Audixrides from '../../images/rides_audi.png';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function ProfilePage({ slideOut, setSlideOut, removeFilter, setremoveFilter }) {
  // --profile part -- //

  const [activeTab, setActiveTab] = useState('profile');
  const [RidesTab, setRidesTab] = useState('active');
  const [isEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Esther Howard',
    email: 'esther@email.com',
    phone: '+44 126 456 8595'
  });
  const profileMainRef = useRef(null);
  const profileContainerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const [isActiveCancel, setIsActiveCancel] = useState(false);
  const [isChangedActive, setChangeActive] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState('password');

  const [isVisibleO, setIsVisibleO] = useState(false);
  const [setPasswordO] = useState('password');

  const [isVisibleT, setIsVisibleT] = useState(false);
  const [setPasswordT] = useState('password');

  const [isfeedbackActive, setisfeedbackActive] = useState(false);




  const [pickupAddress] = useState('1813 Casper Mountains, East Alycia 72127-5384');
  const [dropoffAddress] = useState('199 Kling Coves, Morissetteside 63526-7183');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };


  // --Messages part -- //

  const conversations = [
    { name: 'Ashlynn Press', time: '09:39pm', preview: 'Lorem ipsum dolor sit...', unread: false },
    { name: 'Craig Saris', time: '07:36pm', preview: 'Lorem ipsum dolor sit...', unread: true },
    { name: 'Craig Culhane', time: '04:12pm', preview: 'Lorem ipsum dolor sit...', unread: false },
    { name: 'Aspen Botosh', time: '02:28pm', preview: 'Lorem ipsum dolor sit...', unread: false },
    { name: 'Aspen Botosh', time: '09:39pm', preview: 'Lorem ipsum dolor sit...', unread: false },
    { name: 'Craig Saris', time: '07:30pm', preview: 'Lorem ipsum dolor sit...', unread: false },
    { name: 'Craig Culhane', time: '04:12pm', preview: 'Lorem ipsum dolor sit...', unread: false },
  ];

  const activeChat = {
    name: 'Craig Saris',
    status: 'Online',
    messages: [
      { sender: 'them', time: '09:25pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt.' },
      { sender: 'me', time: '09:26pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt eget.' },
      { sender: 'them', time: '09:28pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt eget.' },
      { sender: 'me', time: '09:28pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt eget.' }
    ]
  };
  // --Favorites Part -- //
  const car = [
    {
      car: 'Porsche Cayenne',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: PorscheImage
    },
    {
      car: 'Cadillac Escalade',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: CadillacImage
    },
    {
      car: 'Rolls Royce Dawn',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: RollsRoyceImage
    },
    {
      car: 'Lamborghini Urus',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: LamborghiniImage
    },
    {
      car: 'Rolls Royce Cullinan',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: RollsRoyceImage
    },
    {
      car: 'Mini Cooper',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: MiniCooperImage
    }
  ];

  const paymentHistory = [
    {
      id: 1,
      title: "Porsche Cayenne",
      date: "15 Feb 2024 · 12:00 pm - 16 Feb 2024 · 12:00 pm",
      user: "Sergey Ray",
      rating: 4.9,
      amount: 250,
      currency: "£",
      status: "Paid",
      Img: PorscheImage
    },
    {
      id: 2,
      title: "BMW X5",
      date: "5 Apr 2024 · 2:00 pm - 7 Apr 2024 · 2:00 pm",
      user: "Jamie Lee",
      rating: 3.80,
      amount: 320,
      currency: "£",
      status: "Paid",
      Img: RollsRoyceImage
    },
    {
      id: 3,
      title: "Audi Q7",
      date: "20 May 2024 · 10:00 am - 22 May 2024 · 10:00 am",
      user: "Taylor Smith",
      rating: 4.50,
      amount: 290,
      currency: "£",
      status: "Paid",
      Img: LamborghiniImage
    },
    {
      id: 4,
      title: "Rolls Royce Cullinan",
      date: "20 May 2024 · 10:00 am - 22 May 2024 · 10:00 am",
      user: "Sergey Ray",
      rating: 4.50,
      amount: 290,
      currency: "£",
      status: "Paid",
      Img: RollsRoyceImage
    }
  ];


  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className={Styles["profile-content"]}>
            <div className={Styles["profile-camera"]}>
              <img src={Img} alt='' className={Styles['image']} />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={Styles['cam']}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>


            </div>

            <div className={Styles["profile-field"]}>
              <h2>Full Name</h2>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className={Styles["profile-input"]}
                />
              ) : (
                <div className={Styles["profile-info"]}>{profile.name}</div>
              )}
              <div className='d-flex gap-1' style={{ cursor: 'pointer', padding: '0 10px', width: '70px', position: 'absolute', right: '50px', borderRadius: '40px', backgroundColor: 'rgba(158, 77, 182, 0.1)', color: '#9E4DB6' }}>
                <svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <div>edit</div>
              </div>
            </div>

            <div className={Styles["profile-field"]}>
              <h2>Email Address</h2>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className={Styles["profile-input"]}
                />
              ) : (
                <div className={Styles["profile-info"]}>{profile.email}</div>
              )}
              <div className='d-flex gap-1' style={{ cursor: 'pointer', padding: '0 10px', width: '70px', position: 'absolute', right: '50px', borderRadius: '40px', backgroundColor: 'rgba(158, 77, 182, 0.1)', color: '#9E4DB6' }}>
                <svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <div>edit</div>
              </div>

            </div>
            <div className={Styles["profile-field"]}>
              <h2>Phone Number</h2>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className={Styles["profile-input"]}
                />
              ) : (
                <div className={Styles["profile-info"]}>{profile.phone}</div>
              )}
              <div className='d-flex gap-1' style={{ cursor: 'pointer', padding: '0 10px', width: '70px', position: 'absolute', right: '50px', borderRadius: '40px', backgroundColor: 'rgba(158, 77, 182, 0.1)', color: '#9E4DB6' }}>
                <svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <div>edit</div>
              </div>
            </div>

            <div className={Styles["edit-buttons"]}>
              <button
                className={Styles["password-btn"]}
                onClick={() => setChangeActive(prev => !prev)}
              >
                Change Password
              </button>
            </div>

          </div >
        );
      case 'Rides':
        switch (RidesTab) {
          case 'completed':
            return (
              <div className={Rides.complitedCont}>
                <div className={Rides.contB}>
                  <button
                    onClick={() => {
                      setRidesTab('active');
                      profileMainRef.current.style.height = '1900px';
                      profileContainerRef.current.style.height = '2000px';
                    }}
                    className={`${Rides.mainTitle} ${RidesTab === 'active' ? Rides.activeTab : ''}`}
                  >
                    Active Rides
                  </button>
                  <button
                    onClick={() => {
                      setRidesTab('completed');
                      profileMainRef.current.style.height = '800px';
                      profileContainerRef.current.style.height = '1000px';
                    }}
                    className={`${Rides.mainTitle} ${RidesTab === 'completed' ? Rides.activeTab : ''}`}
                  >
                    Completed Rides
                  </button>
                </div>
                <div className={Fav['rent-car-container']}>
                  <div className={Fav['cars-grid']}>
                    {car.map((car, index) => (
                      <div key={index} className={Fav['car-cardx']} onClick={() => {
                        setRidesTab('complitedRideCar');
                        profileMainRef.current.style.height = '1900px';
                        profileContainerRef.current.style.height = '2000px';
                      }}>
                        <div className={Fav['image-card']}>
                          <img src={car.image} alt='' className={Fav['img']} />
                          <FontAwesomeIcon icon={faHeart} className={Fav['heart-icon']} />
                        </div>
                        <div className={Fav['car-header']}>
                          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{car.car}</div>
                        </div>
                        <div className={Fav['car-details']}>
                          <div className={Fav['insurance']}>
                            <FontAwesomeIcon icon={faCalendarAlt} /> 15 Feb 2024 to 19 Feb 2024
                          </div>
                        </div>
                        <div style={{ backgroundColor: 'rgba(47, 50, 64, 0.2)', width: '100%', margin: '10px 0', height: '1px' }}></div>
                        <div className={Fav['price-section']}>
                          {car.price.slice(0, -3)} <div style={{ fontSize: '10px', display: 'flex', alignSelf: 'flex-end' }}>total</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={Fav['btns']}>
                    <div className={Fav['btn-left']}><FontAwesomeIcon icon={faChevronLeft} /></div>
                    <div className={Fav['btn-p']}>1</div>
                    <div className={Fav['btn-p']}>2</div>
                    <div className={Fav['btn-p']}>...</div>
                    <div className={Fav['btn-p']}>9</div>
                    <div className={Fav['btn-p']}>10</div>
                    <div className={Fav['btn-right']}><FontAwesomeIcon icon={faChevronRight} /></div>
                  </div>
                </div>
              </div >
            );
          case 'complitedRideCar':
            return (
              <div className={Rides.complitedRideCarCont}>
                <div className={Rides.rideAlert} style={{ marginTop: '20px' }}>
                  <div>
                    <h2 className={Rides.alertTitle}>Your ride is Completed on 16 Feb 2024</h2>
                    <div className={Rides.paraRideComp}>
                      Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam.
                      Vulputate nisl vel diam eu. Risus natoque consectetur.
                    </div>
                  </div>

                  <button className={Rides.share} onClick={() => { setIsActive(prev => !prev); setremoveFilter(true); }}>Share</button>
                </div>
                <div className={Rides.carDetails}>
                  <div className={Rides.Fsec}>
                    <img src={Audixrides} alt='' className={Rides.imgaudi} />
                  </div>
                  <div className={Rides.Ssec}>
                    <h3 className={Rides.carTitle}>Rent Audi A6 (Blue), 2024</h3>
                    <div className={Rides.carSpecs}>
                      <div className={Rides.rate}>
                        <FontAwesomeIcon icon={faStar} className={Rides.starIcon} />
                        <div>4.5</div>
                      </div>
                      <div className={Rides.kilo}>
                        <FontAwesomeIcon className={Rides.iconx} icon={faTachometerAlt} />
                        <div>250 Km/Day</div>
                      </div>
                      <div className={Rides.mil}>
                        <FontAwesomeIcon className={Rides.iconx} icon={faShieldAlt} />
                        <div >Insurance Included</div>
                      </div>
                    </div>
                    <div className={Rides.carInfo}>
                      <div>Car number: <span style={{ color: "#919191" }}>8022A1245</span></div>
                      <div>Registration Number:<span style={{ color: "#919191" }}> 12548879</span></div>
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%', backgroundColor: '#ECECEC', margin: '40px 0', height: '1px' }} />
                <div className={Rides.providerDetails}>
                  <h3 className={Rides.sectionTitle}>Service Provider Details</h3>
                  <div className={Rides.providerInfo}>
                    <img src={ProfileImg} alt='' className={Rides.Pimg} />
                    <div className={Rides.info}>
                      <strong>Esther Howard</strong><br />
                      <p style={{ color: '#919191' }}>2,719 Trips | Joined Oct 2015</p><br />
                      <p className={Rides.responseNote}>Typically responds in 4 min</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%', backgroundColor: '#ECECEC', margin: '40px 0', height: '1px' }} />
                <div className='d-flex flex-column gap-2' style={{ marginBottom: '40px', padding: '20px', borderRadius: '8px', boxShadow: '4px 5px 5px 7px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ margin: '0' }} className={Rides.sectionTitle}>Feedback by the Service Provider</div>
                  <div>
                    <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#FFD700' }} />
                    <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#FFD700' }} />
                    <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#FFD700' }} />
                    <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#FFD700' }} />
                    <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#E0E0E0' }} />
                  </div>

                  <div style={{ color: '#4E515F' }}>“Lorem ipsum dolor sit amet consectetur. Ac vitae at cursus venenatis lectus. Leo vestib pulvinar porttitor scelerisque vestibulum a nulla. Varius turpis in rhocus”.</div>
                </div>
                <div style={{ width: '100%', backgroundColor: '#ECECEC', margin: '20px 0', height: '1px' }} />
                <div className={Rides.datetime_container}>
                  {/* Pick-up Section */}
                  <div className={Rides.datetime_section}>
                    <h3 className={Rides.datetime_title}>Pick-up date & time</h3>
                    <div className={Rides.datetime_cont}>
                      <div className={Rides.datetime_row}>
                        <FontAwesomeIcon icon={faCalendarAlt} className={Rides.datetime_icon} />
                        <div>25 Feb 2024</div>
                      </div>
                      <div className={`${Rides.datetime_row} ${Rides.x}`}>
                        <FontAwesomeIcon icon={faClock} className={Rides.datetime_icon} />
                        <div>12:05 Pm</div>
                      </div>
                    </div>

                  </div>

                  {/* Drop-off Section */}
                  <div className={Rides.datetime_section}>
                    <h3 className={Rides.datetime_title}>Drop-off date & time</h3>
                    <div className={Rides.datetime_cont}>
                      <div className={Rides.datetime_row}>
                        <FontAwesomeIcon icon={faCalendarAlt} className={Rides.datetime_icon} />
                        <span>25 Feb 2024</span>
                      </div>
                      <div className={`${Rides.datetime_row} ${Rides.x}`}>
                        <FontAwesomeIcon icon={faClock} className={Rides.datetime_icon} />
                        <span>12:05 Pm</span>
                      </div>
                    </div>

                  </div>
                </div>
                <div style={{ width: '100%', backgroundColor: '#ECECEC', margin: '20px 0', height: '1px' }} />
                <div className={Rides.totalCont}>
                  <div className={Rides.totalOne}>
                    <div className={Rides.totalPara}>Remaining amount</div>
                    <div className={Rides.totalAmount}>£112.70</div>
                  </div>
                  <button className={Rides.pay} onClick={() => setActiveTab('confirmPay')}>Pay</button>
                </div>
                <button className={Rides.cancel} onClick={() => { setisfeedbackActive(true); setremoveFilter(true) }}>Send feedback</button>
              </div>
            )
          default:
            return (
              <div className={Rides.rideContainer}>
                <div className={Rides.contB}>
                  <button
                    onClick={() => {
                      setRidesTab('active');
                      profileMainRef.current.style.height = '1900px';
                      profileContainerRef.current.style.height = '2000px';
                    }}
                    className={`${Rides.mainTitle} ${RidesTab === 'active' ? Rides.activeTab : ''}`}
                  >
                    Active Rides
                  </button>
                  <button
                    onClick={() => {
                      setRidesTab('completed');
                      profileMainRef.current.style.height = '1000px';
                      profileContainerRef.current.style.height = '1100px';
                    }}
                    className={`${Rides.mainTitle} ${RidesTab === 'completed' ? Rides.activeTab : ''}`}
                  >
                    Completed Rides
                  </button>
                </div>


                <div className={Rides.rideAlert}>
                  <div>
                    <h2 className={Rides.alertTitle}>Your ride is starting soon!</h2>
                    <div className={Rides.alertText}>
                      Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam.
                      Vulputate nisl vel diam eu. Risus natoque consectetur.
                    </div>
                  </div>

                  <button className={Rides.share} onClick={() => { setIsActive(prev => !prev); setremoveFilter(true); }}>Share</button>
                </div>

                <div className={Rides.carDetails}>
                  <div className={Rides.Fsec}>
                    <img src={Audixrides} alt='' className={Rides.imgaudi} />
                  </div>
                  <div className={Rides.Ssec}>
                    <h3 className={Rides.carTitle}>Rent Audi A6 (Blue), 2024</h3>
                    <div className={Rides.carSpecs}>
                      <div className={Rides.rate}>
                        <FontAwesomeIcon icon={faStar} className={Rides.starIcon} />
                        <div>4.5</div>
                      </div>
                      <div className={Rides.kilo}>
                        <FontAwesomeIcon className={Rides.iconx} icon={faTachometerAlt} />
                        <div>250 Km/Day</div>
                      </div>
                      <div className={Rides.mil}>
                        <FontAwesomeIcon className={Rides.iconx} icon={faShieldAlt} />
                        <div >Insurance Included</div>
                      </div>
                    </div>
                    <div className={Rides.carInfo}>
                      <div>Car number: <span style={{ color: "#919191" }}>8022A1245</span></div>
                      <div>Registration Number:<span style={{ color: "#919191" }}> 12548879</span></div>
                    </div>
                  </div>
                </div>

                <div className={Rides.divider}></div>

                <div className={Rides.providerDetails}>
                  <h3 className={Rides.sectionTitle}>Service Provider Details</h3>
                  <div className={Rides.providerInfo}>
                    <img src={ProfileImg} alt='' className={Rides.Pimg} />
                    <div className={Rides.info}>
                      <strong>Esther Howard</strong><br />
                      <p style={{ color: '#919191' }}>2,719 Trips | Joined Oct 2015</p><br />
                      <p className={Rides.responseNote}>Typically responds in 4 min</p>
                    </div>
                  </div>
                </div>

                <div className={Rides.divider}></div>
                <div className={Rides.datetime_container}>
                  {/* Pick-up Section */}
                  <div className={Rides.datetime_section}>
                    <h3 className={Rides.datetime_title}>Pick-up date & time</h3>
                    <div className={Rides.datetime_cont}>
                      <div className={Rides.datetime_row}>
                        <FontAwesomeIcon icon={faCalendarAlt} className={Rides.datetime_icon} />
                        <div>25 Feb 2024</div>
                      </div>
                      <div className={`${Rides.datetime_row} ${Rides.x}`}>
                        <FontAwesomeIcon icon={faClock} className={Rides.datetime_icon} />
                        <div>12:05 Pm</div>
                      </div>
                    </div>

                  </div>

                  {/* Drop-off Section */}
                  <div className={Rides.datetime_section}>
                    <h3 className={Rides.datetime_title}>Drop-off date & time</h3>
                    <div className={Rides.datetime_cont}>
                      <div className={Rides.datetime_row}>
                        <FontAwesomeIcon icon={faCalendarAlt} className={Rides.datetime_icon} />
                        <span>25 Feb 2024</span>
                      </div>
                      <div className={`${Rides.datetime_row} ${Rides.x}`}>
                        <FontAwesomeIcon icon={faClock} className={Rides.datetime_icon} />
                        <span>12:05 Pm</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className={Rides.divider}></div>
                <div className={Rides.mapContainer}>
                  <div className={Rides.mapLeftSection}>
                    {/* Pick-up Location */}
                    <div className={Rides.locationSection}>
                      <div className={Rides.locationHeader}>
                        <div className={Rides.locationTitle}>Pick-up location</div>
                        <div className={Rides.editControls}>
                          <button className={Rides.editButton}>
                            <FontAwesomeIcon icon={faEdit} className={Rides.editIcon} />
                            Edit
                          </button>
                          {/* <FontAwesomeIcon icon={faCircleExclamation} className={Rides.warningIcon} /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={Rides.warningIcon}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                          </svg>
                        </div>
                      </div>
                      <div className={Rides.addressDisplay}>
                        {/* <FontAwesomeIcon icon={faLocationDot} className={Rides.locationIcon} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={Rides.locationIcon}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        <span>{pickupAddress}</span>
                      </div>
                    </div>

                    {/* Drop-off Location */}
                    <div className={Rides.locationSection}>
                      <div className={Rides.locationHeader}>
                        <div className={Rides.locationTitle}>Drop-off location</div>
                        <div className={Rides.editControls}>
                          <button className={Rides.editButton}>
                            <FontAwesomeIcon icon={faEdit} className={Rides.editIcon} />
                            Edit
                          </button>
                          {/* <FontAwesomeIcon icon={faCircleExclamation} className={Rides.warningIcon} /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={Rides.warningIcon}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                          </svg>

                        </div>
                      </div>
                      <div className={Rides.addressDisplay}>
                        {/* <FontAwesomeIcon icon={faLocationDot} className={Rides.locationIcon} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={Rides.locationIcon}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>{dropoffAddress}</span>
                      </div>
                    </div>
                  </div>

                  <div className={Rides.mapRightSection}>
                    <img src={mapsImage} className={Rides.mapImage} alt="Map view" />
                  </div>
                </div>
                <div className={Rides.totalCont}>
                  <div className={Rides.totalOne}>
                    <div className={Rides.totalPara}>Total amount</div>
                    <div className={Rides.totalAmount}>£161</div>
                  </div>
                  <button className={Rides.pay} onClick={() => setActiveTab('confirmPay')}>Pay</button>
                </div>
                <button className={Rides.cancel} onClick={() => { setIsActiveCancel(true); setremoveFilter(true) }}>Cancel</button>
                <div className={Rides.reportCont}>
                  <div className={Rides.reportHead}>Report</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>Booking Id</div>
                    <input placeholder='Enter booking ID' className={Rides.reportInput} type='text' />
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>Description</div>
                    <textarea placeholder='inputs' className={Rides.reportInput} style={{ height: '150px', resize: 'vertical' }} ></textarea>
                    <button type='submit' className={Rides.reportSub}>Submit</button>
                  </div>
                </div>

              </div >
            );
        };
      case 'favorites':
        return (
          <div className={Fav['rent-car-container']}>
            <div className={Fav['cars-grid']}>
              {car.map((car, index) => (
                <div key={index} className={Fav['car-card']}>
                  <div className={Fav['image-card']}>
                    <img src={car.image} alt='' className={Fav['img']} />
                    <FontAwesomeIcon icon={faHeart} className={Fav['heart-icon']} />
                  </div>
                  <div className={Fav['car-headerx']}>
                    <div style={{ fontWeight: 'bold' }}>{car.car}</div>
                    <div className={Fav['availability']}>{car.availability}</div>
                  </div>
                  <div className={Fav['car-detailsx']}>
                    <div className={Fav['insurance']}>
                      <FontAwesomeIcon style={{ marginTop: '-3px' }} icon={car.insurance} /> Insurance Included
                    </div>
                    <div className={Fav['mileage']}>
                      <FontAwesomeIcon style={{ marginTop: '-3px' }} icon={faTachometerAlt} /> {car.mileage}
                    </div>
                  </div>
                  <div style={{ height: '1px', width: '100%', backgroundColor: 'rgba(165, 165, 165, 0.2)', margin: '10px 0' }}></div>
                  <div className={Fav['price-sectionFav']}>
                    <div className={Fav['price']}>{car.price}</div>
                    <button className={Fav['reserve-button']}>Reserve</button>
                  </div>
                </div>
              ))}
            </div>
            <div className={Fav['btns']}>
              <div className={Fav['btn-left']}><FontAwesomeIcon icon={faChevronLeft} /></div>
              <div className={Fav['btn-p']}>1</div>
              <div className={Fav['btn-p']}>2</div>
              <div className={Fav['btn-p']}>...</div>
              <div className={Fav['btn-p']}>9</div>
              <div className={Fav['btn-p']}>10</div>
              <div className={Fav['btn-right']}><FontAwesomeIcon icon={faChevronRight} /></div>
            </div>
          </div >

        );
      case 'messages':
        return (
          <div className={Messages['messages-container']}>
            {/* Left sidebar - Conversation list */}
            <div className={Messages['conversation-list']}>
              <div className={Messages['search-bar']}>
                <FontAwesomeIcon icon={faSearch} className={Messages['search-icon']} />
                <input type='text' placeholder='search here ...' className={Messages['searchB']} />

              </div>
              <div>
                {conversations.map((convo, index) => (
                  <div
                    key={index}
                    className={`${Messages['conversation-item']} ${convo.unread ? Messages['unread'] : ''}`}
                  >
                    <div className={Messages['conversation-avatar']}></div>
                    <div className={Messages['conversation-details']}>
                      <div className={Messages['conversation-header']}>
                        <h3 className={Messages['conversation-name']}>{convo.name}</h3>
                        <span className={Messages['conversation-time']}>{convo.time}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className={Messages['conversation-preview']}>{convo.preview}</div>
                        {convo.name === 'Ashlynn Press' && <div style={{ borderRadius: '50%', backgroundColor: 'black', color: 'white', height: '20px', width: '20px', fontWeight: 'bold', textAlign: 'center', alignContent: 'center', fontSize: '10px' }}>2</div>}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Active chat */}



            < div className={Messages['active-chat']} >
              {/* Chat header */}
              < div className={Messages['chat-header']} >
                <div className={Messages['chat-user']}>
                  <div className='d-flex'>
                    <div className={Messages['chat-avatar']}></div>
                    <div>
                      <div>{activeChat.name}</div>
                      <p className={Messages['user-status']}>{activeChat.status}</p>
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisVertical} className={Messages.iconDots} />
                </div>
              </div>
              <div style={{ height: '1px', backgroundColor: '#ECECEC', width: '95%', margin: '0 auto' }}></div>
              {/* Messages area */}
              <div className={Messages['messages-area']}>
                {activeChat.messages.map((msg, index) => (
                  <div style={{ width: '100%' }}>
                    < div
                      key={index}
                      className={`${Messages['message']} ${msg.sender === 'me' ? Messages['my-message'] : Messages['their-message']
                        }`}
                    >
                      <div className={Messages['message-content']}>
                        {msg.content}
                      </div>
                    </div>
                    <div className={`${Messages['message-time']} ${msg.sender === 'me' ? Messages['right'] : Messages['left']
                      }`}>{msg.time}</div>
                  </div>

                ))}
              </div>

              {/* Message input */}
              <div className={Messages['message-input-container']}>
                <input
                  type="text"
                  placeholder="Type A Message..."
                  className={Messages['message-input']}

                />
                <div className={Messages.contIconInput}>
                  <svg className={Messages.iconInput} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                  </svg>
                  <svg className={Messages.iconInput} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                  <svg className={Messages.iconInput} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </div>


              </div>
            </div >
          </div >

        );
      case 'payments':
        return (
          <div className={Payement.payments_container}>
            {paymentHistory.map((payment) => (

              <div key={payment.id} className={Payement.payment_card}>
                <div className={Rides.carImg}>
                  <img src={payment.Img} alt='' className={Payement.payement_Img} />
                </div>
                <div className={Payement.paymentSpart}>
                  <h2 className={Payement.payment_title}>{payment.title}</h2>
                  <div className={Payement.payment_date}><FontAwesomeIcon icon={faCalendarAlt} style={{ width: '15px' }} />{payment.date}</div>
                  <div className={Payement.payment_user}>
                    <img src={ProfileImg} alt='' className={Payement.imgProfile} />
                    <span className={Payement.user_name}>{payment.user}</span>
                    <div className={Payement.user_rating}>★<div style={{ color: '#919191', fontSize: '10px', marginTop: '3px' }}>{payment.rating}</div></div>
                  </div>
                </div>

                <div className={Payement.payment_footer}>
                  <span className={Payement.payment_status}>{payment.status}</span>
                  <span className={Payement.payment_amount}>{payment.currency} {payment.amount}</span>
                </div>

              </div>
            ))}
          </div>
        );
      case 'confirmPay':
        return (
          <div className={Payement.paymentContainer}>
            <div style={{ height: '1px', width: '100%', backgroundColor: '#ECECEC', marginBottom: '30px' }}></div>
            <h1 className={Payement.paymentTitle}>Card Information</h1>
            <div className={Payement.row}>
              <div className={Payement.formGroup}>
                <div className={Payement.sectionTitle}>Card Holder Name</div>
                <input
                  type="text"
                  className={Payement.inputField}
                  placeholder="Enter Card Holder Name"
                />
              </div>
              <div className={Payement.formGroup}>
                <div className={Payement.sectionTitle}>Card Number</div>
                <input
                  type="text"
                  className={Payement.inputField}
                  placeholder="Enter Card Number"
                />
              </div>
            </div>
            <div className={Payement.row}>
              <div className={Payement.formGroup}>
                <div className={Payement.sectionTitle}>Expiry Date</div>
                <input
                  type="text"
                  className={Payement.inputField}
                  placeholder="00/00"
                />
              </div>
              <div className={Payement.formGroup}>
                <div className={Payement.sectionTitle}>CVV Number</div>
                <input
                  type="text"
                  className={Payement.inputField}
                  placeholder="Enter CVV Number"
                />
              </div>
            </div>

            <div className={Payement.buttonGroup}>
              <button className={Payement.payButton} onClick={() => setActiveTab('Rides')}>Pay Now</button>
              <button className={Payement.cancelButton}>Cancel</button>
            </div>
          </div>
        );;

      default:
        return <div>Profile Content</div>;
    }
  };

  return (
    <div ref={profileContainerRef} className={Styles["profile-container"]}>
      <div className={Styles["profile-sidebar"]}>
        <div className='d-flex gap-2 flex-column'>
          <div className={Styles["profile-header"]}>
            <div className={Styles["profile-avatar"]}></div>
            <h1>Esther Howard</h1>
            <p>Joined Oct 2015</p>
          </div>
          <div style={{ backgroundColor: 'rgba(47, 50, 64, 0.2)', width: '100%', margin: '20px 0', height: '1px' }}></div>
          <nav className={Styles["profile-nav"]}>
            <button
              className={`${Styles["nav-item"]} ${activeTab === 'profile' ? Styles.active : ''}`}
              onClick={() => {
                setActiveTab('profile');
                document.querySelector(`.${Styles["profile-main"]}`).style.height = '850px';
              }}
            >
              <FontAwesomeIcon className={Styles['logo']} icon={faUser} /> <div className={Styles['cate']}>My Profile</div>
            </button>
            {/* Other nav items similarly updated */}
          </nav>

          <nav className={Styles["profile-nav"]}>
            <button
              className={`${Styles["nav-item"]} ${activeTab === 'Rides' || activeTab === 'confirmPay' ? Styles.active : ''}`}
              onClick={() => {
                setActiveTab('Rides');
                setRidesTab('active');
                profileMainRef.current.style.height = '1800px';
                profileContainerRef.current.style.height = '1900px';
              }}
            >
              <FontAwesomeIcon className={Styles['logo']} icon={faCar} /> <div className={Styles['cate']}>Rides</div>
            </button>
            {/* Other nav items similarly updated */}
          </nav>

          <nav className={Styles["profile-nav"]}>
            <button
              className={`${Styles["nav-item"]} ${activeTab === 'favorites' ? Styles.active : ''}`}
              onClick={() => {
                setActiveTab('favorites');
                document.querySelector(`.${Styles["profile-main"]}`).style.height = '900px';
                document.querySelector(`.${Styles["profile-container"]}`).style.height = '1000px';
              }}
            >
              <FontAwesomeIcon className={Styles['logo']} icon={faHeart} /> <div className={Styles['cate']}>My Favorites</div>
            </button>
            {/* Other nav items similarly updated */}
          </nav>

          <nav className={Styles["profile-nav"]}>
            <button
              className={`${Styles["nav-item"]} ${activeTab === 'messages' ? Styles.active : ''}`}
              onClick={() => {
                setActiveTab('messages')
                document.querySelector(`.${Styles["profile-main"]}`).style.height = '800px';
                document.querySelector(`.${Styles["profile-container"]}`).style.height = '900px';
              }}
            >
              <FontAwesomeIcon className={Styles['logo']} icon={faEnvelope} /> <div className={Styles['cate']}>My Messages</div>
            </button>
            {/* Other nav items similarly updated */}
          </nav>

          <nav className={Styles["profile-nav"]}>
            <button
              className={`${Styles["nav-item"]} ${activeTab === 'payments' ? Styles.active : ''}`}
              onClick={() => {
                setActiveTab('payments')
                profileContainerRef.current.style.height = '1000px'
                profileMainRef.current.style.height = '900px'
              }}

            >
              <FontAwesomeIcon className={Styles['logo']} icon={faHistory} /> <div className={Styles['cate']}>Payement History</div>
            </button>
            {/* Other nav items similarly updated */}
          </nav>
        </div>

      </div>

      <div ref={profileMainRef} className={Styles["profile-main"]}>
        <h1 className={Styles["content-title"]}>
          {activeTab === 'ConfirmPay' && 'Payement'}
          {activeTab === 'profile' && 'Profile'}
          {activeTab === 'Rides' && 'My Rides'}
          {activeTab === 'favorites' && 'My Favorites'}
          {activeTab === 'messages' && 'My Messages'}
          {activeTab === 'payments' && 'Payment History'}
          {activeTab === 'confirmPay' && 'Payement'}
          {activeTab === 'complitedRideCar' && 'Rides'}
        </h1>
        {renderContent()}
      </div>
      {removeFilter && <div className={Rides.overlay}></div>}
      <div className={`${Rides.ShareCont} ${isActive ? Rides.active : ""}`}>
        <FontAwesomeIcon icon={faCircleXmark} className={Rides.shareX} onClick={() => {
          setIsActive(false);
          setremoveFilter(false);
        }} /> <br />
        {/* <FontAwesomeIcon icon={faShareNodes} className={Rides.shareIcon} /> */}
        <div style={{ width: '100px', height: '100px', backgroundColor: 'rgba(158, 77, 182, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', margin: '0 auto' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={Rides.shareIcon}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
        </div>


        <div className={Rides.shareHeader}>Share the trip via</div>
        <div className={Rides.sharePara}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. Vulputate nisl vel diam eu. Risus natoque.</div>
        <div className={Rides.btnCont}>
          <button className={Rides.btns}>
            <FontAwesomeIcon icon={faWhatsapp} className={Rides.icon} />
            Whatsapp
          </button>
          <button className={Rides.btns}>
            <FontAwesomeIcon icon={faFacebook} className={Rides.icon} />
            Facebook
          </button>
        </div>
      </div>
      <div className={`${Rides.CancelCont} ${isActiveCancel ? Rides.activeCancel : ""}`}>
        <FontAwesomeIcon icon={faCircleXmark} className={Rides.shareX} onClick={() => { setIsActiveCancel(false); setremoveFilter(false); }} /> <br />
        <div className={Rides.cancelHeader}>Are you sure want to cancel?</div>
        <div style={{ backgroundColor: '#ECECEC', margin: '10px 0', height: '1px', width: '94%', display: 'flex', justifySelf: 'center' }}></div>
        <div className={Rides.cancelMain}>
          <div className={Rides.cancelH}>Cancellation Policy</div>
          <div className={Rides.cancelPara}>Lorem ipsum dolor sit amet consectetur. Fermentum mi sed turpis adipiscing pellentesque ut odio mauris praesent. Neque adipiscing ut at est id tortor feugiat. Non enim blandit tincidunt molestie commodo diam arcu fermentum. Eget felis urna placerat lobortis volutpat sed lorem sit. </div>
          <div className={Rides.cancelPara}>Nullam elit amet tortor gravida odio enim. Mauris ut at mattis gravida sed neque mattis at. Dui nascetur velit non et felis. Lectus ornare mauris adipiscing et et faucibus pellentesque nulla. Id aliquam elit fermentum tincidunt risus.</div>
          <div className={Rides.cancelP}>Let us know the reason</div>
          {/* <select className={Rides.select}>
            <option selected value={'select the reaseon'}>select the reaseon</option>
            <option value={'opt'}>opt</option>
            <option value={'opt'}>opt</option>
            <option value={'opt'}>opt</option>
            <option value={'opt'}>opt</option>
          </select><br /> */}

          <div className="dropdown show">
            <button
              style={{ backgroundColor: '#F2F2F2', color: 'black' }}
              className={`btn w-100 d-flex align-items-center justify-content-between mt-4  dropdown-toggle ${Rides["custom-dropdown"]}`}
              type="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div style={{ color: '#B1B1B1', padding: '10px 0', fontSize: '14px' }}>Select the reason</div>
            </button>

            <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
              <li><button className="dropdown-item" >R1</button></li>
              <li><button className="dropdown-item" >R2</button></li>
              <li><button className="dropdown-item" >R3</button></li>
            </ul>
          </div>


          <button className={Rides.cancelConfirm} >Cancel</button>
        </div>
      </div>
      {isChangedActive && <div className={Styles.overlay} ></div>}
      <div className={`${Styles.chnageMain} ${isChangedActive ? Styles.activeChange : ""}`}>
        <FontAwesomeIcon icon={faCircleXmark} className={Styles.changeX} onClick={() => setChangeActive(false)} /> <br />
        <div className={Styles.shareHeader}>Change Password</div>
        <div className={Styles.MainChange}>
          <label className={Styles.chnage_text}>Old Password</label>
          <div className={Styles.change_inpCont}>
            <input type={isVisible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*********' className={Styles.change_inp} />
            <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} onClick={() => setIsVisible(prev => !prev)} className={Styles.chnage_eye} />
          </div>
          <label className={Styles.chnage_text}>New Password</label>
          <div className={Styles.change_inpCont}>
            <input type={isVisibleO ? 'text' : 'password'} value={password} onChange={(e) => setPasswordO(e.target.value)} placeholder='*********' className={Styles.change_inp} />
            <FontAwesomeIcon icon={isVisibleO ? faEyeSlash : faEye} onClick={() => setIsVisibleO(prev => !prev)} className={Styles.chnage_eye} />
          </div>
          <label className={Styles.chnage_text}>Confirm Password</label>
          <div className={Styles.change_inpCont}>
            <input type={isVisibleT ? 'text' : 'password'} value={password} onChange={(e) => setPasswordT(e.target.value)} placeholder='*********' className={Styles.change_inp} />
            <FontAwesomeIcon icon={isVisibleT ? faEyeSlash : faEye} onClick={() => setIsVisibleT(prev => !prev)} className={Styles.chnage_eye} />
          </div>
        </div>
        <button className={Styles.chnage_Save} >Save</button>
      </div>

      <div className={`${Styles.outCont} ${slideOut ? Styles.outActive : ""}`}>
        <FontAwesomeIcon icon={faCircleXmark} className={Styles.outX} onClick={() => { setSlideOut(false); setremoveFilter(false) }} /> <br />
        <div className={Styles.outIconCont}>
          <FontAwesomeIcon icon={faPowerOff} className={Styles.outIcon} />
        </div>

        <div className={Styles.outTitle}>Are You Sure Want to Logout? </div>
        <div className={Styles.outpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sagittis. </div>
        <div className={Styles.outBC}>
          <Link to={'/login'} className={Styles.outY} >Yes</Link>
          <button onClick={() => {
            setSlideOut(false);
            setremoveFilter(false);
          }} className={Styles.outN} >Cancel</button>
        </div>
      </div>
      {isfeedbackActive &&
        <div className={Rides.reviewCont}>
          <FontAwesomeIcon icon={faCircleXmark} className={Styles.revX} onClick={() => { setisfeedbackActive(false); setremoveFilter(false) }} /> <br />
          <div className={Rides.shareHeader}>Send feedback for the vehicle and service provider</div>
          <div className={Rides.shareParax}>Lorem ipsum dolor sit amet consectetur.</div>
          <div className='d-flex justify-content-center fs-1 gap-4 mt-2 mb-2'>
            <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#FFD700' }} />
            <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#FFD700' }} />
            <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#FFD700' }} />
            <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#FFD700' }} />
            <FontAwesomeIcon icon={faStar} className={Rides.starIcon} style={{ color: '#E0E0E0' }} />
          </div>

          <textarea placeholder='Write a review...' className={Rides.reviewInput} style={{ height: '150px', resize: 'vertical' }} />
          <button style={{ marginTop: '0' }} className={Rides.cancel} onClick={() => {
            setisfeedbackActive(false);
            setremoveFilter(false);
            profileMainRef.current.style.height = '900px';
            profileContainerRef.current.style.height = '1000px';
            setRidesTab('completed')
          }}>Send feedback</button>
        </div >
      }
    </div >

  );
}

export default ProfilePage;
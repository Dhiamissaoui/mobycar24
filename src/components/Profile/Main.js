import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faCar,
  faEnvelope,
  faHeart,
  faHistory,
  faUser,
  faCamera,       // For insurance
  faTachometerAlt,   // For mileage
  faChevronRight,
  faChevronLeft,
  faShieldAlt,
  faStar,
  faCalendarAlt,
  faClock,
  faCircleExclamation,
  faLocationDot,
  faShareNodes,
  faCircleXmark,
  faEye,
  faPowerOff,
  faEyeSlash
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

function ProfilePage({ slideOut, setSlideOut }) {
  // --profile part -- //

  const [removeFilter, setremoveFilter] = useState(false)
  const [activeTab, setActiveTab] = useState('profile');
  const [RidesTab, setRidesTab] = useState('active');
  const [isEditing, setIsEditing] = useState(false);
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
    { name: 'Ashlynn Press', time: '09:39pm', preview: 'Lorem ipsum dolor sit...', unread: false },
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
              <FontAwesomeIcon icon={faCamera} className={Styles['cam']} />

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
                  <button onClick={() => {
                    setRidesTab('active');
                    profileMainRef.current.style.height = '1900px';
                    profileContainerRef.current.style.height = '2000px';
                  }} className={Rides.mainTitle}>Active Rides</button>
                  <button onClick={() => {
                    setRidesTab('completed');
                    profileMainRef.current.style.height = '1000px';
                    profileContainerRef.current.style.height = '1100px';
                  }} className={Rides.mainTitle}>Completed Rides</button>
                </div>
                <div className={Fav['rent-car-container']}>
                  <div className={Fav['cars-grid']}>
                    {car.map((car, index) => (
                      <div key={index} className={Fav['car-cardx']}>
                        <div className={Fav['image-card']}>
                          <img src={car.image} alt='' className={Fav['img']} />
                          <FontAwesomeIcon icon={faHeart} className={Fav['heart-icon']} />
                        </div>
                        <div className={Fav['car-header']}>
                          <h2>{car.car}</h2>
                        </div>
                        <div className={Fav['car-details']}>
                          <p className={Fav['insurance']}>
                            <FontAwesomeIcon icon={car.insurance} /> Insurance Included
                          </p>
                          <p className={Fav['mileage']}>
                            <FontAwesomeIcon icon={faTachometerAlt} /> {car.mileage}
                          </p>
                        </div>

                        <div className={Fav['price-section']}>
                          <p className={Fav['price']}>{car.price}</p>
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
                </div>
              </div>
            );
          default:
            return (
              <div className={Rides.rideContainer}>
                <div className={Rides.contB}>
                  <button onClick={() => {
                    setRidesTab('active');
                    profileMainRef.current.style.height = '1900px';
                    profileContainerRef.current.style.height = '2000px'
                  }} className={Rides.mainTitle}>Active Rides</button>
                  <button onClick={() => {
                    setRidesTab('completed');
                    profileMainRef.current.style.height = '1000px';
                    profileContainerRef.current.style.height = '1100px';
                  }} className={Rides.mainTitle}>Completed Rides</button>
                </div>


                <div className={Rides.rideAlert}>
                  <h2 className={Rides.alertTitle}>Your ride is starting soon!</h2>
                  <p className={Rides.alertText}>
                    Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. <br />
                    Vulputate nisl vel diam eu. Risus natoque consectetur.
                  </p>
                  <button className={Rides.share} onClick={() => setIsActive(prev => !prev)}>Share</button>
                </div>

                <div className={Rides.carDetails}>
                  <div className={Rides.Fsec}>
                    <img src={Audixrides} alt='' className={Rides.imgaudi} />
                  </div>
                  <div className={Rides.Ssec}>
                    <h3 className={Rides.carTitle}>Rent Audi A6 (Blue), 2024</h3>
                    <ul className={Rides.carSpecs}>
                      <li className={Rides.rate}>
                        <FontAwesomeIcon icon={faStar} className={Rides.starIcon} />
                        <strong>4.5</strong>
                      </li>
                      <li className={Rides.kilo}>
                        <FontAwesomeIcon className={Rides.icon} icon={faTachometerAlt} />
                        250 Km/Day
                      </li>
                      <li className={Rides.mil}>
                        <FontAwesomeIcon className={Rides.icon} icon={faShieldAlt} />
                        Insurance Included
                      </li>
                    </ul>
                    <div className={Rides.carInfo}>
                      <p><strong>Car number:</strong> 8022A1245</p>
                      <p><strong>Registration Number:</strong> 12548879</p>
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
                      <p>2,719 Trips | Joined Oct 2015</p><br />
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
                        <span>25 Feb 2024</span>
                      </div>
                      <div className={`${Rides.datetime_row} ${Rides.x}`}>
                        <FontAwesomeIcon icon={faClock} className={Rides.datetime_icon} />
                        <span>12:05 Pm</span>
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
                          <FontAwesomeIcon icon={faCircleExclamation} className={Rides.warningIcon} />
                        </div>
                      </div>
                      <div className={Rides.addressDisplay}>
                        <FontAwesomeIcon icon={faLocationDot} className={Rides.locationIcon} />
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
                          <FontAwesomeIcon icon={faCircleExclamation} className={Rides.warningIcon} />
                        </div>
                      </div>
                      <div className={Rides.addressDisplay}>
                        <FontAwesomeIcon icon={faLocationDot} className={Rides.locationIcon} />
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
                <button className={Rides.cancel} onClick={() => setIsActiveCancel(true)}>Cancel</button>
                <div className={Rides.reportCont}>
                  <h1 className={Rides.reportHead}>Report</h1>
                  <form>
                    <label>Booking Id</label>
                    <input placeholder='Enter booking ID' className={Rides.reportInput} type='text' />
                    <label>Description</label>
                    <textarea placeholder='inputs' className={Rides.reportInput} cols={10} rows={30}></textarea>
                    <button type='submit' className={Rides.reportSub}>Submit</button>
                  </form>
                </div>

              </div>
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
                  <div className={Fav['car-header']}>
                    <h2>{car.car}</h2>
                    <p className={Fav['availability']}>{car.availability}</p>
                  </div>
                  <div className={Fav['car-details']}>
                    <p className={Fav['insurance']}>
                      <FontAwesomeIcon icon={car.insurance} /> Insurance Included
                    </p>
                    <p className={Fav['mileage']}>
                      <FontAwesomeIcon icon={faTachometerAlt} /> {car.mileage}
                    </p>
                  </div>

                  <div className={Fav['price-section']}>
                    <p className={Fav['price']}>{car.price}</p>
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
          </div>

        );
      case 'messages':
        return (
          <div className={Messages['messages-container']}>
            {/* Left sidebar - Conversation list */}
            <div className={Messages['conversation-list']}>
              <div className={Messages['search-bar']}>
                <input type='text' placeholder='search here ...' className={Messages['searchB']} />

              </div>

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
                    <p className={Messages['conversation-preview']}>{convo.preview}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Active chat */}
            <div className={Messages['active-chat']}>
              {/* Chat header */}
              <div className={Messages['chat-header']}>
                <div className={Messages['chat-user']}>
                  <div className={Messages['chat-avatar']}></div>
                  <div>
                    <h2>{activeChat.name}</h2>
                    <p className={Messages['user-status']}>{activeChat.status}</p>
                  </div>
                </div>
              </div>

              {/* Messages area */}
              <div className={Messages['messages-area']}>
                {activeChat.messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`${Messages['message']} ${msg.sender === 'me' ? Messages['my-message'] : Messages['their-message']
                      }`}
                  >
                    <div className={Messages['message-content']}>
                      <p>{msg.content}</p>
                      <span className={Messages['message-time']}>{msg.time}</span>
                    </div>
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
              </div>
            </div>
          </div>
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
                  <p className={Payement.payment_date}>{payment.date}</p>
                  <p className={Payement.payment_user}>
                    <img src={ProfileImg} alt='' className={Payement.imgProfile} />
                    <span className={Payement.user_name}>{payment.user}</span>
                    <span className={Payement.user_rating}>★{payment.rating}</span>

                  </p>
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
            <h1 className={Payement.paymentTitle}>Card Information</h1>
            <div className={Payement.row}>
              <div className={Payement.formGroup}>
                <h2 className={Payement.sectionTitle}>Card Holder Name</h2>
                <input
                  type="text"
                  className={Payement.inputField}
                  placeholder="Enter Card Holder Name"
                />
              </div>
              <div className={Payement.formGroup}>
                <h2 className={Payement.sectionTitle}>Card Number</h2>
                <input
                  type="text"
                  className={Payement.inputField}
                  placeholder="Enter Card Number"
                />
              </div>
            </div>
            <div className={Payement.row}>
              <div className={Payement.formGroup}>
                <h2 className={Payement.sectionTitle}>Expiry Date</h2>
                <input
                  type="text"
                  className={Payement.inputField}
                  placeholder="00/00"
                />
              </div>
              <div className={Payement.formGroup}>
                <h2 className={Payement.sectionTitle}>CVV Number</h2>
                <input
                  type="text"
                  className={Payement.inputField}
                  placeholder="Enter CVV Number"
                />
              </div>
            </div>

            <div className={Payement.buttonGroup}>
              <button className={Payement.payButton} onClick={() => setActiveTab('ConfirmPay')}>Pay Now</button>
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
        <div className={Styles["profile-header"]}>
          <div className={Styles["profile-avatar"]}></div>
          <h1>Esther Howard</h1>
          <p>Joined Oct 2015</p>
        </div>

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
              setActiveTab('Rides')
              document.querySelector(`.${Styles["profile-main"]}`).style.height = 'auto';
              document.querySelector(`.${Styles["profile-container"]}`).style.height = 'auto';
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
              document.querySelector(`.${Styles["profile-main"]}`).style.height = '700px';
              document.querySelector(`.${Styles["profile-container"]}`).style.height = '800px';
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

      <div ref={profileMainRef} className={Styles["profile-main"]}>
        <h1 className={Styles["content-title"]}>
          {activeTab === 'ConfirmPay' && 'Payement'}
          {activeTab === 'profile' && 'Profile'}
          {activeTab === 'Rides' && 'My Rides'}
          {activeTab === 'favorites' && 'My Favorites'}
          {activeTab === 'messages' && 'My Messages'}
          {activeTab === 'payments' && 'Payment History'}
        </h1>
        {renderContent()}
      </div>
      <div className={`${Rides.ShareCont} ${isActive ? Rides.active : ""}`}>
        <FontAwesomeIcon icon={faCircleXmark} className={Rides.shareX} onClick={() => setIsActive(false)} /> <br />
        <FontAwesomeIcon icon={faShareNodes} className={Rides.shareIcon} />
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
        <FontAwesomeIcon icon={faCircleXmark} className={Rides.shareX} onClick={() => setIsActiveCancel(false)} /> <br />
        <div className={Rides.shareHeader}>Are you sure want to cancel?</div>
        <div className={Rides.cancelMain}>
          <div className={Rides.cancelH}>Cancellation Policy</div>
          <div className={Rides.cancelPara}>Lorem ipsum dolor sit amet consectetur. Fermentum mi sed turpis adipiscing pellentesque ut odio mauris praesent. Neque adipiscing ut at est id tortor feugiat. Non enim blandit tincidunt molestie commodo diam arcu fermentum. Eget felis urna placerat lobortis volutpat sed lorem sit. </div>
          <div className={Rides.cancelPara}>Nullam elit amet tortor gravida odio enim. Mauris ut at mattis gravida sed neque mattis at. Dui nascetur velit non et felis. Lectus ornare mauris adipiscing et et faucibus pellentesque nulla. Id aliquam elit fermentum tincidunt risus.</div>
          <div className={Rides.cancelP}>Let us know the reason</div>
          <select className={Rides.select}>
            <option selected value={'select the reaseon'}>select the reaseon</option>
            <option value={'opt'}>opt</option>
            <option value={'opt'}>opt</option>
            <option value={'opt'}>opt</option>
            <option value={'opt'}>opt</option>
          </select><br />
          <button className={Rides.cancelConfirm} >Cancel</button>
        </div>
      </div>
      {isChangedActive && <div className={Styles.overlay} onClick={() => setremoveFilter(!removeFilter)}></div>}
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
        <FontAwesomeIcon icon={faCircleXmark} className={Styles.outX} onClick={() => setSlideOut(false)} /> <br />
        <FontAwesomeIcon icon={faPowerOff} className={Styles.outIcon} />
        <div className={Styles.outTitle}>Are You Sure Want to Logout? </div>
        <div className={Styles.outpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sagittis. </div>
        <div className={Styles.outBC}>
          <Link to={'/login'} className={Styles.outY} >Yes</Link>
          <button onClick={() => setSlideOut(false)} className={Styles.outN} >Cancel</button>
        </div>


      </div>
    </div>

  );
}

export default ProfilePage;
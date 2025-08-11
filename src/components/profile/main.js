import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import {
  faEdit,
  faCar,
  faEnvelope,
  faHeart,
  faHistory,
  faKey,
  faUser,
  faCamera,       // For insurance
  faTachometerAlt,   // For mileage
  faChevronRight,
  faChevronLeft,
  faShieldAlt,
  faStar,
  faCalendarAlt,
  faClock
           // For availability
} from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/profile/main.module.css';
import messages from '../../styles/profile/messages.module.css';
import fav from '../../styles/profile/favorities.module.css';
import payement from '../../styles/profile/payment.module.css';
import rides from '../../styles/profile/rides.module.css';
import img from '../../images/profile pic.png';


import porscheImage from '../../images/porsche.png';
import cadillacImage from '../../images/car-cadillac.png' ;
import rollsRoyceImage from '../../images/car-rolls.png';
import lamborghiniImage from '../../images/car-lambo.png';
import miniCooperImage from '../../images/car-mini.png';

import profile_img from '../../images/profile pic.png';

import audixrides from '../../images/rides_audi.png';

function ProfilePage() {
  // --profile part -- //
  const [activeTab, setActiveTab] = useState('profile');
  const [RidesTab, setRidesTab] = useState('active');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Esther Howard',
    email: 'esther@email.com',
    phone: '+44 126 456 8595'
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = () => {
    // Implement password change functionality here
    console.log("Change password clicked");
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
      image: porscheImage
    },
    {
      car: 'Cadillac Escalade',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: cadillacImage
    },
    {
      car: 'Rolls Royce Dawn',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: rollsRoyceImage
    },
    {
      car: 'Lamborghini Urus',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: lamborghiniImage
    },
    {
      car: 'Rolls Royce Cullinan',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: rollsRoyceImage
    },
    {
      car: 'Mini Cooper',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: miniCooperImage
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
           <div className={styles["profile-content"]}>
            <div className={styles["profile-camera"]}>
              <img src={img} className={styles['image']}/>
              <FontAwesomeIcon icon={faCamera} className={styles['cam']}/>
              
            </div>

            <div className={styles["profile-field"]}>
              <h2>Full Name</h2>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className={styles["profile-input"]}
                />
              ) : (
                <p className={styles["profile-info"]}>{profile.name}</p>
              )}
            </div>
            <hr/>
            <div className={styles["profile-field"]}>
              <h2>Email Address</h2>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className={styles["profile-input"]}
                />
              ) : (
                <p className={styles["profile-info"]}>{profile.email}</p>
              )}
            </div>
            <hr/>
            <div className={styles["profile-field"]}>
              <h2>Phone Number</h2>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className={styles["profile-input"]}
                />
              ) : (
                <p className={styles["profile-info"]}>{profile.phone}</p>
              )}
            </div>
            
            <div className={styles["edit-buttons"]}>
              <button 
                className={styles["edit-btn"]}
                onClick={handleEdit}
              >
                <FontAwesomeIcon icon={faEdit} /> 
                {isEditing ? 'Save' : 'Edit'}
              </button>
              <button 
                className={styles["password-btn"]}
                onClick={handlePasswordChange}
              >
                <FontAwesomeIcon icon={faKey} /> Change Password
              </button>
            </div>
          </div>
        );
      case 'rides':
        switch(RidesTab) {
            case 'completed':
                return(
                    <div className={rides.contB}>
                            <button onClick={() => {
                        setRidesTab('active');
                        document.querySelector(`.${styles["profile-main"]}`).style.height = '1000px';
                        document.querySelector(`.${styles["profile-container"]}`).style.height = '1200px';
                        }} className={rides.mainTitle}>Active Rides</button>
                            <button onClick={() => {
                        setRidesTab('completed');
                        document.querySelector(`.${styles["profile-main"]}`).style.height = '300px';
                        }} className={rides.mainTitle}>Completed Rides</button>
                        </div>
                );
            case 'active':
                return(
                    <div className={rides.rideContainer}>
                        <div className={rides.contB}>
                            <button onClick={() => {
                            setRidesTab('active');
                            document.querySelector(`.${styles["profile-main"]}`).style.height = '1300px';}} className={rides.mainTitle}>Active Rides</button>
                                <button onClick={() => {
                            setRidesTab('completed');
                            document.querySelector(`.${styles["profile-main"]}`).style.height = '600px';
                            }} className={rides.mainTitle}>Completed Rides</button>
                        </div>
                        
                        
                        <div className={rides.rideAlert}>
                            <h2 className={rides.alertTitle}>Your ride is starting soon!</h2>
                            <p className={rides.alertText}>
                            Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. <br/>
                            Vulputate nisl vel diam eu. Risus natoque consectetur.
                            </p>
                            <button className={rides.share}>Share</button>
                        </div>

                        <div className={rides.carDetails}>
                            <div className={rides.Fsec}>
                                <img src={audixrides} className={rides.imgaudi} />
                            </div>
                            <div className={rides.Ssec}>
                                <h3 className={rides.carTitle}>Rent Audi A6 (Blue), 2024</h3>
                                <ul className={rides.carSpecs}>
                                    <li className={rides.rate}>
                                        <FontAwesomeIcon icon={faStar} className={rides.starIcon} />
                                        <strong>4.5</strong>
                                    </li>
                                    <li className={rides.kilo}>
                                        <FontAwesomeIcon className={rides.icon} icon={faTachometerAlt} />
                                        250 Km/Day
                                    </li>
                                    <li className={rides.mil}>
                                        <FontAwesomeIcon className={rides.icon} icon={faShieldAlt} />
                                        Insurance Included
                                    </li>
                                </ul>
                                <div className={rides.carInfo}>
                                    <p><strong>Car number:</strong> 8022A1245</p>
                                    <p><strong>Registration Number:</strong> 12548879</p>
                                </div>
                            </div>
                        </div>

                        <div className={rides.divider}></div>

                        <div className={rides.providerDetails}>
                            <h3 className={rides.sectionTitle}>Service Provider Details</h3>
                            <div className={rides.providerInfo}>
                                  <img src={profile_img} className={rides.Pimg}/>
                                  <div className={rides.info}>
                                    <strong>Esther Howard</strong><br/>
                                    <p>2,719 Trips | Joined Oct 2015</p><br/>
                                    <p className={rides.responseNote}>Typically responds to a clinician</p>
                                  </div>  
                            </div>
                        </div>

                        <div className={rides.divider}></div>
                        <div className={rides.datetime_container}>
                          {/* Pick-up Section */}
                          <div className={rides.datetime_section}>
                            <h3 className={rides.datetime_title}>Pick-up date & time</h3>
                            <div className={rides.datetime_row}>
                              <FontAwesomeIcon icon={faCalendarAlt} className={rides.datetime_icon} />
                              <span>25 Feb 2024</span>
                            </div>
                            <div className={rides.datetime_row}>
                              <FontAwesomeIcon icon={faClock} className={rides.datetime_icon} />
                              <span>12:05 Pm</span>
                            </div>
                          </div>

                          {/* Drop-off Section */}
                          <div className={rides.datetime_section}>
                            <h3 className={rides.datetime_title}>Drop-off date & time</h3>
                            <div className={rides.datetime_row}>
                              <FontAwesomeIcon icon={faCalendarAlt} className={rides.datetime_icon} />
                              <span>25 Feb 2024</span>
                            </div>
                            <div className={rides.datetime_row}>
                              <FontAwesomeIcon icon={faClock} className={rides.datetime_icon} />
                              <span>12:05 Pm</span>
                            </div>
                          </div>
                        </div>


                  </div>
                );
                    };
      case 'favorites':
        return(
            <div className={fav['rent-car-container']}>
                <div className={fav['cars-grid']}>
                    {car.map((car, index) => (
                    <div key={index} className={fav['car-card']}>
                        <div className={fav['image-card']}>
                            <img src={car.image} alt={car.car} className={fav['img']} />
                            <FontAwesomeIcon icon={faHeart} className={fav['heart-icon']} />
                        </div>
                        <div className={fav['car-header']}>
                            <h2>{car.car}</h2>
                            <p className={fav['availability']}>
                            <FontAwesomeIcon icon={fav} /> {car.availability}
                        </p>
                        </div>
                        <div className={fav['car-details']}>
                            <p className={fav['insurance']}>
                            <FontAwesomeIcon icon={car.insurance} /> Insurance Included
                            </p>
                            <p className={fav['mileage']}>
                            <FontAwesomeIcon icon={faTachometerAlt} /> {car.mileage}
                            </p>
                        </div>
                        <hr/>
                        <div className={fav['price-section']}>
                            <p className={fav['price']}>{car.price}</p>
                            <button className={fav['reserve-button']}>Reserve</button>
                        </div>
                    </div>
                    ))}
                </div>
                <div className={fav['btns']}>
                    <div className={fav['btn-left']}><FontAwesomeIcon icon={faChevronLeft} /></div>
                    <div className={fav['btn-p']}>1</div>
                    <div className={fav['btn-p']}>2</div>
                    <div className={fav['btn-p']}>...</div>
                    <div className={fav['btn-p']}>9</div>
                    <div className={fav['btn-p']}>10</div>
                    <div className={fav['btn-right']}><FontAwesomeIcon icon={faChevronRight} /></div>
                </div>
    </div>
  
        );
      case 'messages':
        return (
            <div className={messages['messages-container']}>
                {/* Left sidebar - Conversation list */}
                <div className={messages['conversation-list']}>
                    <div className={messages['search-bar']}>
                        <input type='text' placeholder='search here ...' className={messages['searchB']}/>
                        
                    </div>
                    
                    {conversations.map((convo, index) => (
                    <div 
                        key={index} 
                        className={`${messages['conversation-item']} ${convo.unread ? messages['unread'] : ''}`}
                    >
                        <div className={messages['conversation-avatar']}></div>
                        <div className={messages['conversation-details']}>
                        <div className={messages['conversation-header']}>
                            <h3 className={messages['conversation-name']}>{convo.name}</h3>
                            <span className={messages['conversation-time']}>{convo.time}</span>
                        </div>
                        <p className={messages['conversation-preview']}>{convo.preview}</p>
                        </div>
                    </div>
                    ))}
                </div>

                {/* Right side - Active chat */}
                <div className={messages['active-chat']}>
                    {/* Chat header */}
                    <div className={messages['chat-header']}>
                    <div className={messages['chat-user']}>
                        <div className={messages['chat-avatar']}></div>
                        <div>
                        <h2>{activeChat.name}</h2>
                        <p className={messages['user-status']}>{activeChat.status}</p>
                        </div>
                    </div>
                    </div>

                    {/* Messages area */}
                    <div className={messages['messages-area']}>
                    {activeChat.messages.map((msg, index) => (
                        <div 
                        key={index} 
                        className={`${messages['message']} ${
                            msg.sender === 'me' ? messages['my-message'] : messages['their-message']
                        }`}
                        >
                        <div className={messages['message-content']}>
                            <p>{msg.content}</p>
                            <span className={messages['message-time']}>{msg.time}</span>
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* Message input */}
                    <div className={messages['message-input-container']}>
                    <input 
                        type="text" 
                        placeholder="Type A Message..." 
                        className={messages['message-input']}
                    />
                    </div>
                </div>
            </div>
        );
      case 'payments':
        return (
             <div className={payement.paymentContainer}>
                <h1 className={payement.paymentTitle}>Card Information</h1>
                <div className={payement.row}>
                    <div className={payement.formGroup}>
                        <h2 className={payement.sectionTitle}>Card Holder Name</h2>
                        <input 
                        type="text" 
                        className={payement.inputField} 
                        placeholder="Enter Card Holder Name"
                        />
                    </div>
                    <div className={payement.formGroup}>
                        <h2 className={payement.sectionTitle}>Card Number</h2>
                        <input 
                        type="text" 
                        className={payement.inputField} 
                        placeholder="Enter Card Number"
                        />
                    </div>
                </div>
                <div className={payement.row}>
                    <div className={payement.formGroup}>
                        <h2 className={payement.sectionTitle}>Expiry Date</h2>
                        <input 
                            type="text" 
                            className={payement.inputField} 
                            placeholder="00/00"
                        />
                    </div>
                    <div className={payement.formGroup}>
                        <h2 className={payement.sectionTitle}>CVV Number</h2>
                        <input 
                            type="text" 
                            className={payement.inputField} 
                            placeholder="Enter CVV Number"
                        />
                    </div>
                </div>

                <div className={payement.buttonGroup}>
                    <button  className={payement.payButton}>Pay Now</button>
                    <button className={payement.cancelButton}>Cancel</button>
                </div>
    </div>
        );
      default:
        return <div>Profile Content</div>;
    }
  };

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-sidebar"]}>
        <div className={styles["profile-header"]}>
          <div className={styles["profile-avatar"]}></div>
          <h1>Esther Howard</h1>
          <p>Joined Oct 2015</p>
        </div>
        
        <nav className={styles["profile-nav"]}>
          <button 
            className={`${styles["nav-item"]} ${activeTab === 'profile' ? styles.active : ''}`}
            onClick={() => {
                setActiveTab('profile');
                document.querySelector(`.${styles["profile-main"]}`).style.height = '650px';
            }}
          >
            <FontAwesomeIcon className={styles['logo']} icon={faUser} /> <div className={styles['cate']}>My Profile</div>
          </button>
          {/* Other nav items similarly updated */}
        </nav>

        <nav className={styles["profile-nav"]}>
          <button 
            className={`${styles["nav-item"]} ${activeTab === 'rides' ? styles.active : ''}`}
            onClick={() => {
                setActiveTab('rides')
                document.querySelector(`.${styles["profile-main"]}`).style.height = '1000px';
                document.querySelector(`.${styles["profile-container"]}`).style.height = '1200px';
            }}
          >
            <FontAwesomeIcon className={styles['logo']}  icon={faCar} /> <div className={styles['cate']}>Rides</div>
          </button>
          {/* Other nav items similarly updated */}
        </nav>

        <nav className={styles["profile-nav"]}>
          <button 
            className={`${styles["nav-item"]} ${activeTab === 'favorites' ? styles.active : ''}`}
            onClick={() => {
                setActiveTab('favorites');
                document.querySelector(`.${styles["profile-main"]}`).style.height = '800px';
                document.querySelector(`.${styles["profile-container"]}`).style.height = '900px';
            }}
          >
            <FontAwesomeIcon className={styles['logo']} icon={faHeart} /> <div className={styles['cate']}>My Favorites</div>
          </button>
          {/* Other nav items similarly updated */}
        </nav>

        <nav className={styles["profile-nav"]}>
          <button 
            className={`${styles["nav-item"]} ${activeTab === 'messages' ? styles.active : ''}`}
            onClick={() => {
                setActiveTab('messages')
                document.querySelector(`.${styles["profile-main"]}`).style.height = '650px';
                document.querySelector(`.${styles["profile-container"]}`).style.height = '700px';
            }}
          >
            <FontAwesomeIcon className={styles['logo']} icon={faEnvelope} /> <div className={styles['cate']}>My Messages</div>
          </button>
          {/* Other nav items similarly updated */}
        </nav>

        <nav className={styles["profile-nav"]}>
          <button 
            className={`${styles["nav-item"]} ${activeTab === 'payments' ? styles.active : ''}`}
            onClick={() => setActiveTab('payments')}
          >
            <FontAwesomeIcon className={styles['logo']} icon={faHistory} /> <div className={styles['cate']}>Payement History</div>
          </button>
          {/* Other nav items similarly updated */}
        </nav>
      </div>
      
      <div className={styles["profile-main"]}>
        <h1 className={styles["content-title"]}>
          {activeTab === 'profile' && 'My Profile'}
          {activeTab === 'rides' && 'My Rides'}
          {activeTab === 'favorites' && 'My Favorites'}
          {activeTab === 'messages' && 'My Messages'}
          {activeTab === 'payments' && 'Payment History'}
        </h1>
        {renderContent()}
      </div>
    </div>
  );
}

export default ProfilePage;
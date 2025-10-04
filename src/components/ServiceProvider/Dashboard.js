import styles from '../../styles/ServiceProvider/dashboard/DashBoard.module.css';
import ViewStyle from '../../styles/ServiceProvider/dashboard/view.module.css';
import StartingSoonStyle from '../../styles/ServiceProvider/dashboard/startingSoon.module.css';
import vehStyles from '../../styles/ServiceProvider/dashboard/vehStyles.module.css';
import CarDet from '../../styles/ServiceProvider/dashboard/carDetails.module.css';
import VcompStyles from '../../styles/ServiceProvider/dashboard/VcomplitedDet.module.css';
import Messages from '../../styles/ServiceProvider/dashboard/Messages.module.css';
import ProfileStyles from '../../styles/ServiceProvider/dashboard/profile.module.css'
import Styles from '../../styles/ServiceProvider/Board.module.css';
import VspecStyles from '../../styles/ServiceProvider/VehiculeSpec.module.css';
import UploadStyles from '../../styles/ServiceProvider/ImageUpload.module.css';



import Fav from '../../styles/profile/Favorities.module.css'
import Rides from '../../styles/profile/Rides.module.css'

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell, faKey, faStar,
  faUser, faCalendarAlt, faClock,
  faChevronDown,
  faHeart,
  faTachometerAlt,
  faChevronLeft,
  faChevronRight,
  faGaugeHigh,
  faSquareCheck,
  faLocationDot,
  faShieldAlt,
  faX,
  faEnvelope,
  faEdit,
  faCheck,
  faThLarge,
  faCar,
  faSearch,
  faEllipsisVertical,


  faSignOutAlt,
  faFileAlt,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import profile_pic from '../../images/profile pic.png';

import audiTwo from '../../images/audiTwo.png';
import xx from '../../images/xx.png';
import ridesAudi from '../../images/rides_audi.png';
import { Link } from 'react-router-dom';



import PorscheImage from '../../images/porsche.png';
import CadillacImage from '../../images/car-cadillac.png';
import RollsRoyceImage from '../../images/car-rolls.png';
import LamborghiniImage from '../../images/car-lambo.png';
import MiniCooperImage from '../../images/car-mini.png';
import RangeRoverImage from '../../images/car-range.png';
import NissanImage from '../../images/car-nissan.png';






function Payservice() {
  // --Messages part -- //

  const conversations = [
    { name: 'Ashlynn Press', time: '09:39pm', preview: 'Lorem ipsum dolor sit amet  rohonc...', unread: false },
    { name: 'Craig Saris', time: '07:36pm', preview: 'Lorem ipsum dolor sit amet  rohonc...', unread: true },
    { name: 'Craig Culhane', time: '04:12pm', preview: 'Lorem ipsum dolor sit amet  rohonc...', unread: false },
    { name: 'Aspen Botosh', time: '02:28pm', preview: 'Lorem ipsum dolor sit amet  rohonc...', unread: false },
    { name: 'Ashlynn Press', time: '09:39pm', preview: 'Lorem ipsum dolor sit amet  rohonc...', unread: false },
    { name: 'Craig Saris', time: '07:30pm', preview: 'Lorem ipsum dolor sit amet  rohonc...', unread: false },
    { name: 'Craig Culhane', time: '04:12pm', preview: 'Lorem ipsum dolor sit amet  rohonc...', unread: false },
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


  const [isfeedbackActive, setisfeedbackActive] = useState(false);
  const [InviteTab, setInviteTab] = useState(false);

  const Comp = useRef(null);
  const Active = useRef(null);

  const [RidesTab, setRidesTab] = useState('active');

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Latest Request');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [rejectedRequests, setRejectedRequests] = useState(new Set());

  // Create refs for container height management (similar to ProfilePage)
  const dashboardContainerRef = useRef(null);
  const dashboardMainRef = useRef(null);

  // Set initial navbar height to match content on component mount
  useEffect(() => {
    const setInitialHeight = () => {
      const mainContent = dashboardMainRef.current;
      const container = dashboardContainerRef.current;
      const navbar = document.querySelector(`.${styles.navBar}`);
      console.log(navbar);
      console.log(container);
      if (container && navbar) {
        // Reset heights to auto first
        if (mainContent) mainContent.style.height = 'auto';
        if (container) container.style.height = 'auto';
        if (navbar) navbar.style.height = 'auto';

        // Get the height of the right container (main content area)
        const rightHeight = container.offsetHeight;
        console.log(rightHeight);
        // Set the navbar (left menu) height to match the right container
        navbar.style.height = `${rightHeight}px`;
      }
    };

    // Set height immediately
    setInitialHeight();

    // Also set height after a short delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(setInitialHeight, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(prev => !prev);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleReject = (index) => {
    setRejectedRequests(prev => new Set([...prev, index]));
  };

  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const sortOptions = [
    'Latest Request',
    'First Request',
    'Random Request'
  ];

  const requestData = [
    {
      Svehicle: 'Rent Audi A6 (Blue)',
      customerInfo: 'georgia.young@example.com / (308) 555-0121',
      drivingIsenseId: '123456789',
      age: 30,
      name: 'Jane Cooper',
      Image: profile_pic
    },
    {
      Svehicle: 'Rent Audi A6 (Blue)',
      customerInfo: 'georgia.young@example.com / (308) 555-0121',
      drivingIsenseId: '123456789',
      age: 30,
      name: 'Wade Warren',
      Image: profile_pic
    },
    {
      Svehicle: 'Rent Audi A6 (Blue)',
      customerInfo: 'georgia.young@example.com / (308) 555-0121',
      drivingIsenseId: '123456789',
      age: 30,
      name: 'Esther Howard',
      Image: profile_pic
    },
    {
      Svehicle: 'Rent Audi A6 (Blue)',
      customerInfo: 'georgia.young@example.com / (308) 555-0121',
      drivingIsenseId: '123456789',
      age: 30,
      name: 'Cameron Williamson',
      Image: profile_pic
    },
    {
      Svehicle: 'Rent Audi A6 (Blue)',
      customerInfo: 'georgia.young@example.com / (308) 555-0121',
      drivingIsenseId: '123456789',
      age: 30,
      name: 'Brooklyn Simmons',
      Image: profile_pic
    },
    {
      Svehicle: 'Rent Audi A6 (Blue)',
      customerInfo: 'georgia.young@example.com / (308) 555-0121',
      drivingIsenseId: '123456789',
      age: 30,
      name: 'Leslie Alexander',
      Image: profile_pic
    },
    {
      Svehicle: 'Rent Audi A6 (Blue)',
      customerInfo: 'georgia.young@example.com / (308) 555-0121',
      drivingIsenseId: '123456789',
      age: 30,
      name: 'Jenny Wilson',
      Image: profile_pic
    }
  ];

  const car = [
    {
      car: 'Porsche Cayenne',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/',
      image: PorscheImage
    },
    {
      car: 'Cadillac Escalade',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/',
      image: CadillacImage
    },
    {
      car: 'Rolls Royce Dawn',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/',
      image: RollsRoyceImage
    },
    {
      car: 'Lamborghini Urus',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/',
      image: LamborghiniImage
    },
    {
      car: 'Rolls Royce Ghost',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/',
      image: RollsRoyceImage
    },
    {
      car: 'Mini Cooper',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/',
      image: MiniCooperImage
    },
    {
      car: 'Range Rover',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/',
      image: RangeRoverImage
    },
    {
      car: 'Nissan Armada',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/',
      image: NissanImage
    }
  ];


  // Define navigation items with icons and labels
  const navItems = [
    { id: 'dashboard', icon: faThLarge, label: 'Dashboard' },
    { id: 'vehicles', icon: faCar, label: 'My Vehicles' },
    { id: 'rentals', icon: faKey, label: 'Rental Rides' },
    { id: 'messages', icon: faEnvelope, label: 'Messages' },
    { id: 'profile', icon: faUser, label: 'My Profile' }
  ];





  // Function to handle tab changes and adjust container heights
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);

    // Wait for the next tick to ensure the DOM has updated
    setTimeout(() => {
      // Get references to the main content and navbar containers
      const mainContent = dashboardMainRef.current;
      const container = dashboardContainerRef.current;
      const navbar = document.querySelector(`.${styles.navBar}`);

      // Reset all heights to auto first
      if (mainContent) mainContent.style.height = 'auto';
      if (container) container.style.height = 'auto';
      if (navbar) navbar.style.height = 'auto';

      // After resetting, get the new computed height of the right container
      if (container && navbar) {
        // Get the height of the right container (main content area)
        const rightHeight = container.offsetHeight;
        // Set the navbar (left menu) height to match the right container
        navbar.style.height = `${rightHeight}px`;
      }
    }, 0);
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className={styles.dashCont}>
            <div className={styles.upper}>
              <div className={styles.box}>
                <div className={styles.left}>
                  <div className={styles.num}>200</div>
                  <div className={styles.para}>Requests in Queue</div>
                </div>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.paperIcon} icon={faFileAlt} />
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.left}>
                  <div className={styles.num}>200</div>
                  <div className={styles.para}>Total Requests</div>
                </div>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.paperIcon} icon={faFileAlt} />
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.left}>
                  <div className={styles.num}>200</div>
                  <div className={styles.para}>Total Accepted Requests</div>
                </div>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.paperIcon} icon={faCheckCircle} />
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.left}>
                  <div className={styles.num}>200</div>
                  <div className={styles.para}>Total Rejected Requests</div>
                </div>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon className={styles.paperIcon} icon={faTimesCircle} />
                </div>
              </div>
            </div>
            <div className={styles.LowerCont}>
              <div className={styles.requestUpper}>
                <div className={styles.reqName}>Request List</div>
                <div className={styles.sortCont}>
                  <div className={styles.name}>Sort By :</div>
                  <div className={styles.sortDropdown}>
                    <button className={styles.sortButton} onClick={toggleSortDropdown}>
                      {selectedSort}
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    {showSortDropdown && (
                      <div className={styles.sortDropdownContent}>
                        {sortOptions.map((option, index) => (
                          <div
                            key={index}
                            className={styles.sortOption}
                            onClick={() => {
                              setSelectedSort(option);
                              setShowSortDropdown(false);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.requestHeader}>
                <div className={styles.cat}>Image</div>
                <div className={styles.cat}>Name</div>
                <div className={styles.cat}>Age</div>
                <div className={styles.cat}>Driving license ID</div>
                <div className={styles.cat}>Customer info</div>
                <div className={styles.cat}>Selected Vehicle</div>
              </div>
              <div className={styles.requestList}>
                {requestData.map((req, index) => {
                  // Skip rendering if this request is rejected
                  if (rejectedRequests.has(index)) {
                    return null;
                  }

                  return (
                    <div key={index} className={styles.requestRow}>
                      <div className={styles.cell}>
                        <img src={req.Image} alt={req.name} className={styles.profileImg} />
                      </div>
                      <div className={styles.cell}>{req.name}</div>
                      <div className={styles.cell}>{req.age}</div>
                      <div className={styles.cell}>{req.drivingIsenseId}</div>
                      <div className={styles.cell}>{req.customerInfo}</div>
                      <div className={styles.cell}>{req.Svehicle}</div>
                      <div className={styles.actions}>
                        <button onClick={() => setActiveTab('view')} className={styles.viewBtn}>View</button>
                        <div className={styles.dropdown}>
                          <button className={styles.moreBtn}>⋮</button>
                          <div className={styles.dropdownContent}>
                            <div className={styles.dropdownItem}>Accept</div>
                            <div className={styles.dropdownItem} onClick={() => handleReject(index)}>Reject</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case 'view':
        return (
          <div className={ViewStyle.cont}>
            <div className={ViewStyle.leftCont}>
              <div className={ViewStyle.head}>
                <div className={ViewStyle.headtitle}>Request ride</div>
                <div className={ViewStyle.para}>Vestibulum condimentum, massa eu consectetur congue, diam tortor fringilla urna, sed tincidunt metus dui id est.</div>
              </div>
              <div className={ViewStyle.main}>
                <div className={ViewStyle.headtitle}>Assigned Car Details</div>
                <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src={ridesAudi} class={`img-fluid rounded-start ${ViewStyle.cardImg}`} alt="..." />
                    </div>
                    <div class={`col-md-8 ${ViewStyle.cardCont}`}>
                      <div class="card-body">
                        <h5 class="card-title">Rent Audi A6 (Blue), 2024</h5>
                        <div className={ViewStyle.contEelement}>
                          <div className={ViewStyle.starCont}>
                            <FontAwesomeIcon className={ViewStyle.StarIcon} icon={faStar} />
                            <div className={ViewStyle.starNum}>4.5</div>
                          </div>
                          <div className={ViewStyle.mielageCont}>
                            <FontAwesomeIcon className={ViewStyle.mileIcon} icon={faGaugeHigh} />
                            <div className={ViewStyle.milePara}>250 km/day</div>
                          </div>
                          <div className={ViewStyle.insuranceCont}>
                            <FontAwesomeIcon className={ViewStyle.insurIcon} icon={faSquareCheck} />
                            <div className={ViewStyle.insurIcon}>4.5</div>
                          </div>
                        </div>
                        <p style={{ color: "black" }} class="card-text ">card number :<small class={`text-body-secondary ${ViewStyle.code}`}>8D22A1245</small></p><br />
                        <p style={{ color: "black" }} class="card-text">Registration Number:<small class={`text-body-secondary ${ViewStyle.code}`}>12548879</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className={ViewStyle.footerCont}>
                  <div className={ViewStyle.headtitle}>Consumer details</div>
                  <div class="card mb-3" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={profile_pic} class={ViewStyle.profile_img_footer} alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div style={{ marginLeft: "-120px" }} class="card-body">
                          <h5 class="card-title">Esther Howard</h5>
                          <p class="card-text" style={{ color: "rgba(145, 145, 145, 1)" }}>2,719 trips  |  Joined Oct 2015</p><br />
                          <p class="card-text">Email address:<small style={{ color: "rgba(145, 145, 145, 1)", marginLeft: "10px" }} >loremipsum@gmail.com</small></p><br />
                          <p class="card-text">Contact number:<small style={{ color: "rgba(145, 145, 145, 1)", marginLeft: "10px" }} id={ViewStyle.colorGrey} >110 4598 2366</small></p><br />
                          <p class="card-text">Driving License ID:<small style={{ color: "rgba(145, 145, 145, 1)", marginLeft: "10px" }} id={ViewStyle.colorGrey} >123456789</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={ViewStyle.rightCont}>
              <div className={ViewStyle.headtitle}>Booking details</div>

              <div className={ViewStyle.totalPrice}>Total price</div>
              <div className={ViewStyle.priceCont}>
                <div className={ViewStyle.price}>£153</div>
                <div className={ViewStyle.Paid}>Paid</div>
              </div>

              <div className={ViewStyle.inpCont}>
                <div className={ViewStyle.labelTitle}>Pick-up  date & time</div>
                <div className={ViewStyle.calInp}>
                  <div className={ViewStyle.calcont}>
                    <FontAwesomeIcon className={ViewStyle.calIcon} icon={faCalendarAlt} />
                    <input type='text' placeholder='15 Feb 2024' className={ViewStyle.inp} />
                  </div>
                  <div className={ViewStyle.timecont}>
                    <FontAwesomeIcon className={ViewStyle.calIcon} icon={faClock} />
                    <input type='text' placeholder='12:05 pm' className={ViewStyle.inp} />
                  </div>
                </div>
                <div className={ViewStyle.labelTitle}>Pick-up  date & time</div>
                <div className={ViewStyle.calInp}>
                  <div className={ViewStyle.calcont}>
                    <FontAwesomeIcon className={ViewStyle.calIcon} icon={faCalendarAlt} />
                    <input type='text' placeholder='16 Feb 2024' className={ViewStyle.inp} />
                  </div>
                  <div className={ViewStyle.timecont}>
                    <FontAwesomeIcon className={ViewStyle.calIcon} icon={faClock} />
                    <input type='text' placeholder='12:05 pm' className={ViewStyle.inp} />
                  </div>
                </div>
                <div className={ViewStyle.labelTitle}>Pick-up  date & time</div>
                <div className={ViewStyle.locInp}>
                  <FontAwesomeIcon className={ViewStyle.IconLoc} icon={faLocationDot} />
                  <input type='text' placeholder='Dummy location 01' className={ViewStyle.loc} />
                </div>
                <div className={ViewStyle.labelTitle}>Pick-up  date & time</div>
                <div className={ViewStyle.locInp}>
                  <FontAwesomeIcon className={ViewStyle.IconLoc} icon={faLocationDot} />
                  <input type='text' placeholder='Dummy location 01' className={ViewStyle.loc} />
                </div>
                <div className={ViewStyle.btn_cont}>
                  <Link to="/" className={ViewStyle.canncelBtn} >Reject</Link>
                  <Link to="/" className={ViewStyle.acceptBtn} >Accept</Link>
                </div>
              </div>


            </div>
          </div>

        )
      case 'vehicles':
        return (
          <div className={vehStyles.carCont}>
            <div className={vehStyles.carMainCont}>
              <div className={vehStyles.carHeader}>
                <div className={vehStyles.title}>My Vehicles</div>
                <button onClick={() => {
                  console.log('Add vehicle clicked');
                  setActiveTab('boarding');
                }} className={vehStyles.carbtn}>Add vehicle</button>
              </div>

              <div className={vehStyles['rent-car-container']}>
                <div className={vehStyles['cars-grid']}>
                  {car.map((car, index) => (
                    <div key={index} className={vehStyles['car-card']}>
                      <div className={vehStyles['image-card']}>
                        <img src={car.image} alt='' className={vehStyles['img']} />
                      </div>
                      <div className={vehStyles['car-header']}>
                        <div className={vehStyles.carName}>{car.car}</div>
                        <p className={vehStyles['availability']}>{car.availability}</p>
                      </div>
                      <div className={vehStyles['car-details']}>
                        <div className={vehStyles['insurance']}>
                          <FontAwesomeIcon icon={car.insurance} /> Insurance Included
                        </div>
                        <div className={vehStyles['mileage']}>
                          <FontAwesomeIcon icon={faTachometerAlt} /> {car.mileage}
                        </div>
                      </div>
                      <div className={vehStyles.hrx} />
                      <div className={vehStyles['price-section']}>
                        <div className={vehStyles['price']}>{car.price}<div className={vehStyles.day}>Day</div></div>
                        <button onClick={() => setActiveTab('carDetails')} className={vehStyles['reserve-button']}>View details</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={vehStyles['btns']}>
                  <div className={vehStyles['btn-left']}><FontAwesomeIcon icon={faChevronLeft} /></div>
                  <div className={vehStyles['btn-p']}>1</div>
                  <div className={vehStyles['btn-p']}>2</div>
                  <div className={vehStyles['btn-p']}>...</div>
                  <div className={vehStyles['btn-p']}>9</div>
                  <div className={vehStyles['btn-p']}>10</div>
                  <div className={vehStyles['btn-right']}><FontAwesomeIcon icon={faChevronRight} /></div>
                </div>
              </div>



            </div>
          </div >

        );
      case 'carDetails':
        return (
          <div className={CarDet.carCont}>
            <div className={CarDet.leftSideCont}>
              <img src={ridesAudi} className={CarDet.imgOne} alt='' />
              <div className={CarDet.detContText}>
                <div className={CarDet.head}>
                  <div className={CarDet.title}>Rent Audi A6 (Blue), 2024</div>
                  <div className={CarDet.avCont}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={CarDet.iconCal} />
                    <div className={CarDet.txt}>Available now</div>
                  </div>
                </div>

                <div className={CarDet.para}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. Vulputate nisl vel diam eu. Risus natoque consectetur ultricies turpis ac. Facilisis dolor fermentum commodo facilisis ornare feugiat nisl. Vitae cras convallis hendrerit velit sed a vitae.</div>
                <div className={CarDet.tit}>Vehicle Condition</div>
                <div className={CarDet.para}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. Vulputate nisl vel diam eu. Risus natoque consectetur ultricies turpis ac. Facilisis dolor fermentum commodo facilisis ornare feugiat nisl. Vitae cras convallis hendrerit velit sed a vitae.</div>
                <div className={CarDet.tit}>Vehicle Details </div>
                <div className={CarDet.listCont}>
                  <div className={CarDet.li}>
                    <div className={CarDet.left}>Vehicle Number</div>
                    <div className={CarDet.right}>8D22A1245</div>
                  </div>

                  <div className={CarDet.li}>
                    <div className={CarDet.left}>Model Number</div>
                    <div className={CarDet.right}>D12345652H89632541</div>
                  </div>

                  <div className={CarDet.li}>
                    <div className={CarDet.left}>Registration Number</div>
                    <div className={CarDet.right}>123456789</div>
                  </div>

                  <div className={CarDet.li}>
                    <div className={CarDet.left}>Manufacturing Brand Name</div>
                    <div className={CarDet.right}>Audi</div>
                  </div>

                  <div className={CarDet.li}>
                    <div className={CarDet.left}>Manufacturing Year</div>
                    <div className={CarDet.right}>2024</div>
                  </div>

                  <div className={CarDet.li}>
                    <div className={CarDet.left}>Vehicle Category</div>
                    <div className={CarDet.right}>Sports</div>
                  </div>

                  <div className={CarDet.li}>
                    <div className={CarDet.left}>kilometres covered/day</div>
                    <div className={CarDet.right}>250</div>
                  </div>

                  <div className={CarDet.li}>
                    <div className={CarDet.left}>Insurance Details</div>
                    <div className={CarDet.right}>Personal</div>
                  </div>
                </div>
                <div className={CarDet.tit}>vehicle specification </div>
                <div className={CarDet.lastListCont}>
                  <div className={CarDet.card}>
                    <div className={CarDet.left}>Year</div>
                    <div className={CarDet.right}>2023</div>
                  </div>
                  <div className={CarDet.card}>
                    <div className={CarDet.left}>Colour</div>
                    <div className={CarDet.right}>Blue</div>
                  </div>
                  <div className={CarDet.card}>
                    <div className={CarDet.left}>0-100KM/H</div>
                    <div className={CarDet.right}>8.4 SEC</div>
                  </div>
                  <div className={CarDet.card}>
                    <div className={CarDet.left}>TRANSMISSION</div>
                    <div className={CarDet.right}>Automatic</div>
                  </div>
                  <div className={CarDet.card}>
                    <div className={CarDet.left}>MOTOR</div>
                    <div className={CarDet.right}>2.4L 4 cylinder</div>
                  </div>
                  <div className={CarDet.card}>
                    <div className={CarDet.left}>MAX. SPEED</div>
                    <div className={CarDet.right}>232</div>
                  </div>
                  <div className={CarDet.card}>
                    <div className={CarDet.left}>HORSEPOWER</div>
                    <div className={CarDet.right}>340</div>
                  </div>
                  <div className={CarDet.card}>
                    <div className={CarDet.left}>TYPE OF FUEL</div>
                    <div className={CarDet.right}>gas</div>
                  </div>
                  <div className={CarDet.card}>
                    <div className={CarDet.left}>BODY TYPE</div>
                    <div className={CarDet.right}>Sedan</div>
                  </div>

                </div>
              </div>
            </div>
            <div className={CarDet.rightSideCont}>
              <div className={CarDet.contImg}>
                <img src={audiTwo} className={CarDet.imgTwo} alt='' />
                <img src={xx} className={CarDet.imgTwo} alt='' />
              </div>
              <div className={CarDet.ContPrice}>
                <div style={{ fontSize: '15px' }} className={CarDet.left}>Price For A Day</div>
                <div style={{ fontSize: '40px' }} className={CarDet.title}>£153 </div>
                <div className={CarDet.line}></div>

                <div className={CarDet.inpConnt}>
                  <div style={{ color: 'rgba(87, 87, 87, 1)' }} className={ViewStyle.labelTitle}>Pick-up  date & time</div>
                  <div className={`${ViewStyle.locInp}`}>
                    <FontAwesomeIcon className={ViewStyle.IconLoc} icon={faLocationDot} />
                    <input type='text' placeholder='Dummy location 01' className={ViewStyle.loc} />
                  </div>
                  <div style={{ color: 'rgba(87, 87, 87, 1)' }} className={ViewStyle.labelTitle}>Pick-up  date & time</div>
                  <div className={ViewStyle.locInp}>
                    <FontAwesomeIcon className={ViewStyle.IconLoc} icon={faLocationDot} />
                    <input type='text' placeholder='Dummy location 01' className={ViewStyle.loc} />
                  </div>

                </div>
                <button className={CarDet.removeBtn}>Remove vehicle</button>
              </div>

            </div >
          </div>
        );
      case 'boarding':
        return (
          <div className={styles.BoardCont}>
            <div className={styles.des}>
              <div>
                <div className={Styles.Cont}>
                  <div className={Styles.header}>
                    <div className={Styles.titleH}>John Doe, List your vehicle</div>
                    <div className={Styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Sapien aliquet sollicitudin luctus viverra dui. Hendrerit congue magna eget adipiscing orci elit etiam consectetur natoque.</div>
                  </div>
                  <div className={Styles.steps}>
                    <div className={Styles.line}></div>
                    <div className={Styles.step}><div className={Styles.textO}>01</div></div>
                    <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                    <div className={Styles.step}><div className={Styles.text}>02</div></div>
                    <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                    <div className={Styles.step}><div className={Styles.text}>03</div></div>
                  </div>
                  <div className={Styles.sectionTitle}>Vehicle Information</div>
                  <div className={Styles.vehiculeInfoCont}>
                    <div className={Styles.box}>
                      <div className={Styles.boxO}>
                        <div className={Styles.label}>Vehicle Name</div>
                        <input type='text' placeholder='Enter Vehicle Name' className={Styles.inp} />
                      </div>
                      <div className={Styles.boxT}>
                        <div className={Styles.label}>Vehicle Number</div>
                        <input type='text' placeholder='Enter Vehicle Number' className={Styles.inp} />
                      </div>
                    </div>
                    <div className={Styles.box}>
                      <div className={Styles.boxO}>
                        <div className={Styles.label}>Model Number</div>
                        <input type='text' placeholder='Enter Model Number' className={Styles.inp} />
                      </div>
                      <div className={Styles.boxT}>
                        <div className={Styles.label}>Registration Number</div>
                        <input type='text' placeholder='Enter Registration Number' className={Styles.inp} />
                      </div>
                    </div>
                    <div className={Styles.box}>
                      <div className={Styles.boxO}>
                        <div className={Styles.label}>Manufacturing Brand Name</div>
                        <div className="dropdown">
                          <button className={`btn dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Enter Manufacturing Brand Name
                          </button>
                          <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">BMW</button></li>
                            <li><button className="dropdown-item" type="button">Mercedes</button></li>
                            <li><button className="dropdown-item" type="button">Audi</button></li>
                            <li><button className="dropdown-item" type="button">Toyota</button></li>
                          </ul>
                        </div>
                      </div>
                      <div className={Styles.boxT}>
                        <div className={Styles.label}>Manufacturing Year</div>
                        <div className="dropdown">
                          <button className={`btn  dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Manufacturing Year
                          </button>
                          <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">2024</button></li>
                            <li><button className="dropdown-item" type="button">2023</button></li>
                            <li><button className="dropdown-item" type="button">2022</button></li>
                            <li><button className="dropdown-item" type="button">2021</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={Styles.box}>
                      <div className={Styles.boxO}>
                        <div className={Styles.label}>hourly/daily rental charges</div>
                        <div className={Styles.rentalCharges}>
                          <div className="dropdown w-50">
                            <button className={`btn  dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Daily
                            </button>
                            <ul className="dropdown-menu">
                              <li><button className="dropdown-item" type="button">Daily</button></li>
                              <li><button className="dropdown-item" type="button">Hourly</button></li>
                            </ul>
                          </div>
                          <div className={Styles.separator}></div>
                          <div className={`${Styles.currency} w-50`}>£161</div>
                        </div>
                      </div>
                      <div className={Styles.boxT} >
                        <div className={Styles.label}>Vehicle Category</div>
                        <div className="dropdown">
                          <button className={`btn  dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sports
                          </button>
                          <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Sports</button></li>
                            <li><button className="dropdown-item" type="button">Luxury</button></li>
                            <li><button className="dropdown-item" type="button">Economy</button></li>
                            <li><button className="dropdown-item" type="button">SUV</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={Styles.box} id={Styles.dispB}>
                      <div className={Styles.label}>Vehicle Description</div>
                      <textarea className={Styles.area} rows={4} cols={10} placeholder='Enter your Vehicle Description'></textarea>
                    </div>
                    <div className={Styles.box} id={Styles.dispB}>
                      <div className={Styles.label} >Vehicle Condition</div>
                      <textarea className={Styles.area} rows={4} cols={10} placeholder='Enter your Vehicle Condition'></textarea>
                    </div>
                    <div className={Styles.boxO} id={Styles.dispX}>
                      <div className={Styles.box} id={Styles.boxOne}>
                        <div className={Styles.label}>kilometres covered/day</div>
                        <div className="dropdown">
                          <button className={`btn  dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            250
                          </button>
                          <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">250</button></li>
                            <li><button className="dropdown-item" type="button">300</button></li>
                            <li><button className="dropdown-item" type="button">350</button></li>
                            <li><button className="dropdown-item" type="button">400</button></li>
                          </ul>
                        </div>
                      </div>
                      <div className={Styles.boxT} id={Styles.box}>
                        <div className={Styles.label}>Insurance Details</div>
                        <div className="dropdown">
                          <button className={`btn dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Personal
                          </button>
                          <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Personal</button></li>
                            <li><button className="dropdown-item" type="button">Commercial</button></li>
                            <li><button className="dropdown-item" type="button">Fleet</button></li>
                            <li><button className="dropdown-item" type="button">None</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={Styles.locationContainer}>
                      <div className={Styles.locationItem}>
                        <div className={Styles.label}>Pick-up location</div>
                        <input type='text' placeholder='Enter your Pick-up location' className={Styles.inp} />
                      </div>
                      <div className={Styles.locationItem}>
                        <div className={Styles.label}>Drop-off location</div>
                        <input type='text' placeholder='Enter your Drop-off location' className={Styles.inp} />
                      </div>
                    </div>
                    <button onClick={() => {
                      console.log('Dashboard Continue button clicked');
                      setActiveTab('Vspec');
                    }} className={Styles.btn}>Continue</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      case 'Vspec':
        return (
          <div className={styles.BoardCont}>
            <div className={styles.des}>
              <div>
                <div className={VspecStyles.Cont}>
                  <div className={VspecStyles.header}>
                    <div className={VspecStyles.titleH}>John Doe, List your vehicle</div>
                    <div className={VspecStyles.subtitle}>Lorem ipsum dolor sit amet consectetur. Sapien aliquet sollicitudin luctus viverra dui. Hendrerit congue magna eget adipiscing orci elit etiam consectetur natoque.</div>
                  </div>
                  <div className={VspecStyles.steps}>
                    <div className={VspecStyles.line}></div>
                    <div className={VspecStyles.step}><div className={VspecStyles.textO}>01</div></div>
                    <FontAwesomeIcon icon={faChevronRight} className={VspecStyles.rightIcon} />
                    <div className={VspecStyles.step}><div className={VspecStyles.textO}>02</div></div>
                    <FontAwesomeIcon icon={faChevronRight} className={VspecStyles.rightIcon} />
                    <div className={VspecStyles.step}><div className={VspecStyles.text}>03</div></div>
                  </div>
                  <div className={VspecStyles.sectionTitle}>Vehicle Specification</div>
                  <div className={VspecStyles.vehiculeInfoCont}>
                    <div className={VspecStyles.box}>
                      <div className={VspecStyles.boxO}>
                        <div className={VspecStyles.label}>Color</div>
                        <div className="dropdown">
                          <button className={`btn btn-outline-secondary dropdown-toggle ${VspecStyles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className={VspecStyles.colorOption}>
                              <div className={VspecStyles.colorBox} style={{ backgroundColor: '#563d7c' }}></div>
                              <span>Blue</span>
                            </div>
                          </button>
                          <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">
                              <div className={VspecStyles.colorOption}>
                                <div className={VspecStyles.colorBox} style={{ backgroundColor: '#563d7c' }}></div>
                                <span>Blue</span>
                              </div>
                            </button></li>
                            <li><button className="dropdown-item" type="button">
                              <div className={VspecStyles.colorOption}>
                                <div className={VspecStyles.colorBox} style={{ backgroundColor: '#ff0000' }}></div>
                                <span>Red</span>
                              </div>
                            </button></li>
                            <li><button className="dropdown-item" type="button">
                              <div className={VspecStyles.colorOption}>
                                <div className={VspecStyles.colorBox} style={{ backgroundColor: '#00ff00' }}></div>
                                <span>Green</span>
                              </div>
                            </button></li>
                            <li><button className="dropdown-item" type="button">
                              <div className={VspecStyles.colorOption}>
                                <div className={VspecStyles.colorBox} style={{ backgroundColor: '#000000' }}></div>
                                <span>Black</span>
                              </div>
                            </button></li>
                          </ul>
                        </div>
                      </div>

                      <div className={VspecStyles.boxT}>
                        <div className={VspecStyles.label}>Engine</div>
                        <input type='text' placeholder='2.4L 4 Cylinder' className={VspecStyles.inp} />
                      </div>
                    </div>
                    <div className={VspecStyles.box}>
                      <div className={VspecStyles.boxO}>
                        <div className={VspecStyles.label}>Transmission</div>
                        <div className="dropdown">
                          <button className={`btn btn-outline-secondary dropdown-toggle ${VspecStyles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Automatic
                          </button>
                          <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Automatic</button></li>
                            <li><button className="dropdown-item" type="button">Manual</button></li>
                            <li><button className="dropdown-item" type="button">Mecatronic</button></li>
                            <li><button className="dropdown-item" type="button">Electric</button></li>
                          </ul>
                        </div>
                      </div>
                      <div className={VspecStyles.boxT}>
                        <div className={VspecStyles.label}>Horse Power</div>
                        <input type='text' placeholder='340' className={VspecStyles.inp} />
                      </div>
                    </div>
                    <div className={VspecStyles.box}>
                      <div className={VspecStyles.boxO}>
                        <div className={VspecStyles.label}>Fuel Type</div>
                        <div className="dropdown">
                          <button className={`btn btn-outline-secondary dropdown-toggle ${VspecStyles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Petrol
                          </button>
                          <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Petrol</button></li>
                            <li><button className="dropdown-item" type="button">Gas</button></li>
                            <li><button className="dropdown-item" type="button">Diesel</button></li>
                            <li><button className="dropdown-item" type="button">Electric</button></li>
                          </ul>
                        </div>
                      </div>
                      <div className={VspecStyles.boxT}>
                        <div className={VspecStyles.label}>Body Type</div>
                        <div className="dropdown">
                          <button className={`btn btn-outline-secondary dropdown-toggle ${VspecStyles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sedan
                          </button>
                          <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Sedan</button></li>
                            <li><button className="dropdown-item" type="button">Convertible</button></li>
                            <li><button className="dropdown-item" type="button">Coupe</button></li>
                            <li><button className="dropdown-item" type="button">Van</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={VspecStyles.box}>
                      <div className={VspecStyles.boxO}>
                        <div className={VspecStyles.label}>0-100KM/H</div>
                        <input type='text' placeholder='8.4sec' className={VspecStyles.inp} />
                      </div>
                      <div className={VspecStyles.boxT} >
                        <div className={VspecStyles.label}>Max Speed</div>
                        <input type='text' placeholder='232' className={VspecStyles.inp} />
                      </div>
                    </div>
                    <button onClick={() => {
                      console.log('Vspec Continue button clicked');
                      setActiveTab('Upload');
                    }} className={VspecStyles.btn}>Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'Upload':
        return (
          <div className={styles.BoardCont}>
            <div className={styles.des}>
              <div>
                <div className={UploadStyles.Cont}>
                  <div className={UploadStyles.header}>
                    <div className={UploadStyles.titleH}>John Doe, List your vehicle</div>
                    <div className={UploadStyles.subtitle}>Lorem ipsum dolor sit amet consectetur. Sapien aliquet sollicitudin luctus viverra dui. Hendrerit congue magna eget adipiscing orci elit etiam consectetur natoque.</div>
                  </div>
                  <div className={UploadStyles.steps}>
                    <div className={UploadStyles.line}></div>
                    <div className={UploadStyles.step}><div className={UploadStyles.textO}>01</div></div>
                    <FontAwesomeIcon icon={faChevronRight} className={UploadStyles.rightIcon} />
                    <div className={UploadStyles.step}><div className={UploadStyles.textO}>02</div></div>
                    <FontAwesomeIcon icon={faChevronRight} className={UploadStyles.rightIcon} />
                    <div className={UploadStyles.step}><div className={UploadStyles.textO}>03</div></div>
                  </div>
                  <div className={UploadStyles.sectionTitle}>Upload Vehicle Image And Document Images</div>
                  <div className={UploadStyles.vehiculeInfoCont}>
                    <div className={UploadStyles.box}>
                      <div className={UploadStyles.boxT}>
                        <div className={UploadStyles.file_upload}>
                          <div className={UploadStyles.label}>Upload Vehicle Images</div>
                          <div className={UploadStyles.file_upload_container}>
                            <label className={UploadStyles.file_upload_label}>
                              <div className={UploadStyles.file_upload_text}>Maximum Size 5MB</div>
                              <div className={UploadStyles.file_upload_button}>Upload</div>
                              <input
                                type="file"
                                className={UploadStyles.file_upload_input}
                                accept="image/*,.pdf" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={UploadStyles.box}>
                      <div className={UploadStyles.boxT}>
                        <div className={UploadStyles.file_upload}>
                          <div className={UploadStyles.label}>Upload Vehicle Registration Document</div>
                          <div className={UploadStyles.file_upload_container}>
                            <label className={UploadStyles.file_upload_label}>
                              <div className={UploadStyles.file_upload_text}>Maximum Size 5MB</div>
                              <div className={UploadStyles.file_upload_button}>Upload</div>
                              <input
                                type="file"
                                className={UploadStyles.file_upload_input}
                                accept="image/*,.pdf" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={UploadStyles.box}>
                      <div className={UploadStyles.boxT}>
                        <div className={UploadStyles.file_upload}>
                          <div className={UploadStyles.label}>Upload Vehicle Insurance Documents</div>
                          <div className={UploadStyles.file_upload_container}>
                            <label className={UploadStyles.file_upload_label}>
                              <div className={UploadStyles.file_upload_text}>Maximum Size 5MB</div>
                              <div className={UploadStyles.file_upload_button}>Upload</div>
                              <input
                                type="file"
                                className={UploadStyles.file_upload_input}
                                accept="image/*,.pdf" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button onClick={() => {
                      console.log('Upload Continue button clicked');
                      setActiveTab('vehicles');
                    }} className={UploadStyles.btn}>Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'rentals':
        switch (RidesTab) {
          case 'completed':
            return (
              <div className={styles.rentCont}>
                <div className={styles.complitedCont}>
                  <div ref={Active} className={Rides.contB}>
                    <button onClick={() => {
                      setRidesTab('active');
                      Active.current.style.color = 'rgba(158, 77, 182, 1)';
                      Active.current.style.borderBottomColor = 'rgba(158, 77, 182, 1)';
                      Comp.current.style.color = 'black';
                      Comp.current.style.borderBottomColor = 'black';

                    }} className={Rides.mainTitle}>Active Rides</button>
                    <button ref={Comp} onClick={() => {
                      setRidesTab('completed');
                      Comp.current.style.color = 'rgba(158, 77, 182, 1)';
                      Comp.current.style.borderBottomColor = 'rgba(158, 77, 182, 1)';
                      Active.current.style.color = 'black';
                      Active.current.style.borderBottomColor = 'black ';

                    }} className={Rides.mainTitle}>Completed Rides</button>
                  </div>
                  <div className={styles['rent-car-container']}>
                    <div className={styles.carsGrid}>
                      {car.slice().reverse().map((car, index) => (
                        <div key={index} className={styles['car-cardx']}>
                          <div className={styles['image-card']}>
                            <img src={car.image} alt='' className={Fav['img']} />
                            <FontAwesomeIcon icon={faHeart} className={Fav['heart-icon']} />
                          </div>
                          <div className={Fav['car-header']}>
                            <h2>{car.car}</h2>
                          </div>
                          <div className={Fav['car-details']}>
                            <p className={Fav['insurance']}>
                              <FontAwesomeIcon icon={faCalendarAlt} /> 15 Feb 2024 to 19 Feb 2024
                            </p>
                          </div>
                          <div style={{ height: '1px', width: '100%', backgroundColor: 'rgba(165, 165, 165, 0.2)', margin: '10px 0' }} />
                          <div className={styles['price-section']}>
                            <p className={styles['pricex']}>{car.price}<div className={vehStyles.day}>Day</div></p>
                            <button onClick={() => setActiveTab('VcomplitedDet')} className={styles['reserve-buttonx']}>View Details</button>
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
              </div >
            );
          default:
            return (
              <div className={styles.rentCont}>
                <div className={styles.complitedCont}>
                  <div className={Rides.contB}>
                    <button ref={Active} onClick={() => {
                      setRidesTab('active');
                      Active.current.style.color = 'rgba(158, 77, 182, 1)';
                      Active.current.style.borderBottomColor = 'rgba(158, 77, 182, 1)';
                      Comp.current.style.color = 'black';
                      Comp.current.style.borderBottomColor = 'black';

                    }} className={Rides.mainTitle}>Active Rides</button>
                    <button ref={Comp} onClick={() => {
                      setRidesTab('completed');
                      Comp.current.style.color = 'rgba(158, 77, 182, 1)';
                      Comp.current.style.borderBottomColor = 'rgba(158, 77, 182, 1)';
                      Active.current.style.color = 'black';
                      Active.current.style.borderBottomColor = 'black ';

                    }} className={Rides.mainTitle}>Completed Rides</button>
                  </div>
                  <div className={styles['rent-car-container']}>
                    <div className={styles.carsGrid}>
                      {car.map((car, index) => (
                        <div key={index} className={styles['car-cardx']}>
                          <div className={styles['image-card']}>
                            <img src={car.image} alt='' className={Fav['img']} />

                          </div>
                          <div className={Fav['car-header']}>
                            <h2>{car.car}</h2>
                          </div>
                          <div className={Fav['car-details']}>
                            <p className={Fav['insurance']}>
                              <FontAwesomeIcon icon={faCalendarAlt} /> 15 Feb 2024 to 19 Feb 2024
                            </p>
                          </div>
                          <div style={{ height: '1px', width: '100%', backgroundColor: 'rgba(165, 165, 165, 0.2)', margin: '10px 0' }} />
                          <div className={styles['price-section']}>
                            <p className={styles['pricex']}>{car.price}<div className={vehStyles.day}>Day</div></p>
                            <button onClick={() => setActiveTab('startingSoon')} className={styles['reserve-buttonx']}>View Details</button>
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
              </div>

            )
        }
      case 'startingSoon':
        return (
          <div className={StartingSoonStyle.cont}>
            <div className={StartingSoonStyle.leftCont}>
              <div className={StartingSoonStyle.head}>
                <div className={StartingSoonStyle.headtitle}>The ride is starting soon!</div>
                <div className={StartingSoonStyle.para}>Vestibulum condimentum, massa eu consectetur congue, diam tortor fringilla urna, sed tincidunt metus dui id est.</div>
              </div>
              <div className={StartingSoonStyle.main}>
                <div className={StartingSoonStyle.headtitle}>Assigned Car Details</div>
                <div className={StartingSoonStyle.carDetailsContainer}>
                  <div className={StartingSoonStyle.carImageContainer}>
                    <img src={ridesAudi} className={StartingSoonStyle.cardImg} alt="Audi A6" />
                  </div>
                  <div className={StartingSoonStyle.carInfoContainer}>
                    <h5 className={StartingSoonStyle.cardTitle}>Rent Audi A6 (Blue), 2024</h5>
                    <div className={StartingSoonStyle.contEelement}>
                      <div className={StartingSoonStyle.starCont}>
                        <svg className={StartingSoonStyle.StarIcon} fill="currentColor" viewBox="0 0 20 20" width="16" height="16">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div className={StartingSoonStyle.starNum}>4.5</div>
                      </div>
                      <div className={StartingSoonStyle.mielageCont}>
                        <FontAwesomeIcon className={StartingSoonStyle.mileIcon} icon={faGaugeHigh} />
                        <div className={StartingSoonStyle.milePara}>250 km/day</div>
                      </div>
                      <div className={StartingSoonStyle.insuranceCont}>
                        <svg className={StartingSoonStyle.insuranceIcon} fill="currentColor" viewBox="0 0 20 20" width="16" height="16">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div className={StartingSoonStyle.insurancePara}>Insurance Included</div>
                      </div>
                    </div>
                    <p style={{ color: "black" }}>Car number: <small className={StartingSoonStyle.code}>8D22A1245</small></p><br />
                    <p style={{ color: "black" }}>Registration Number: <small className={StartingSoonStyle.code}>12548879</small></p>
                  </div>
                </div>
              </div>
              <div className={StartingSoonStyle.footerCont}>
                <div className={StartingSoonStyle.headtitle}>Consumer Details</div>
                <div className={StartingSoonStyle.consumerDetailsContainer}>
                  <div className={StartingSoonStyle.consumerImageContainer}>
                    <img src={profile_pic} className={StartingSoonStyle.profile_img_footer} alt="Esther Howard" />
                  </div>
                  <div className={StartingSoonStyle.consumerInfoContainer}>
                    <h5 className="card-title">Esther Howard</h5>
                    <p>2,719 trips  |  Joined Oct 2015</p>
                    <p>Email address: <small>loremipsum@gmail.com</small></p>
                    <p>Contact number: <small>110 4598 2366</small></p>
                    <p>Driving License ID: <small>123456789</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className={StartingSoonStyle.rightCont}>
              <div className={StartingSoonStyle.rightHeader}>
                <div className={StartingSoonStyle.headtitle}>Booking Details</div>
              </div>
              <div className={StartingSoonStyle.totalPrice}>Total Price</div>
              <div className={StartingSoonStyle.priceCont}>
                <div className={StartingSoonStyle.price}>£153</div>
                <div className={StartingSoonStyle.Paid}>Paid</div>
              </div>

              <div className={StartingSoonStyle.inpCont}>
                <div className={StartingSoonStyle.labelTitle}>Pick-up date & time</div>
                <div className={StartingSoonStyle.calInp}>
                  <div className={StartingSoonStyle.calcont}>
                    <FontAwesomeIcon className={StartingSoonStyle.calIcon} icon={faCalendarAlt} />
                    <input type='text' placeholder='15 Feb 2024' className={StartingSoonStyle.inp} />
                  </div>
                  <div className={StartingSoonStyle.timecont}>
                    <FontAwesomeIcon className={StartingSoonStyle.calIcon} icon={faClock} />
                    <input type='text' placeholder='12:05 Pm' className={StartingSoonStyle.inpx} />
                  </div>
                </div>
                <div className={StartingSoonStyle.labelTitle}>Drop-off date & time</div>
                <div className={StartingSoonStyle.calInp}>
                  <div className={StartingSoonStyle.calcont}>
                    <FontAwesomeIcon className={StartingSoonStyle.calIcon} icon={faCalendarAlt} />
                    <input type='text' placeholder='16 Feb 2024' className={StartingSoonStyle.inp} />
                  </div>
                  <div className={StartingSoonStyle.timecont}>
                    <FontAwesomeIcon className={StartingSoonStyle.calIcon} icon={faClock} />
                    <input type='text' placeholder='12:05 Pm' className={StartingSoonStyle.inpx} />
                  </div>
                </div>
                <div className={StartingSoonStyle.labelTitle}>Pick-up Location</div>
                <div className={StartingSoonStyle.locInp}>
                  <FontAwesomeIcon className={StartingSoonStyle.IconLoc} icon={faLocationDot} />
                  <input type='text' placeholder='Dummy Location 01' className={StartingSoonStyle.loc} />
                </div>
                <div className={StartingSoonStyle.labelTitle}>Drop-off Location</div>
                <div className={StartingSoonStyle.locInp}>
                  <FontAwesomeIcon className={StartingSoonStyle.IconLoc} icon={faLocationDot} />
                  <input type='text' placeholder='Dummy Location 02' className={StartingSoonStyle.loc} />
                </div>
              </div>
            </div>
          </div>
        );

      // The error is because the JSX returned for the 'VcomplitedDet' case is not wrapped in a single parent element.
      // There are two sibling <div> elements at the top level inside the return, which is not allowed in JSX.
      // To fix this, wrap all returned elements in a single parent <div>.

      case 'VcomplitedDet':
        return (
          <div className={VcompStyles.wrapper}>
            <div className={VcompStyles.cont}>
              <div className={VcompStyles.left}>
                {/* <div className={VcompStyles.rideAlert}>
                <h2 className={VcompStyles.alertTitle}>The ride is Completed on 16 Feb 2024</h2>
                <p className={VcompStyles.alertText}>
                  Vestibulum condimentum, massa eu consectetur congue, diam tortor fringilla <br /> urna, sed tincidunt metus dui id est.
                </p>
              </div>

              <div className={Rides.carDetails}>
                <div className={Rides.Fsec}>
                    <h5 className='fw-bold'>Assigned Car Details</h5>
                  <img src={ridesAudi} alt='' className={Rides.imgaudi} />
                </div>
                <div className={Rides.Ssec}>
                  <h3 className={VcompStyles.carTitle}>Rent Audi A6 (Blue), 2024</h3>
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
                  <div className={VcompStyles.carInfo}>
                    <div style={{ color: 'rgba(145, 145, 145, 1)' }}><strong style={{ color: 'black' }}>Car number:</strong> 8022A1245</div>
                    <div style={{ color: 'rgba(145, 145, 145, 1)' }}><strong style={{ color: 'black' }}>Registration Number:</strong> 12548879</div>
                  </div>
                </div>
              </div>

              <hr className={VcompStyles.hrRightCont} />

              <div className={Rides.providerDetails}>
                <h3 className={VcompStyles.sectionTitle}>Consumer details</h3>
                <div className={VcompStyles.providerInfo}>
                  <img src={profile_pic} alt='' className={VcompStyles.Pimg} />
                  <div className={Rides.info}>
                    <strong>Esther Howard</strong><br />
                    <div style={{ color: 'rgba(145, 145, 145, 1)' }}>2,719 trips  |  Joined Oct 2015</div>
                    <div style={{ display: 'flex', marginTop: '10px' }}>Email address:<div style={{ color: 'rgba(145, 145, 145, 1)' }}>loremipsum@gmail.com</div></div>
                    <div style={{ display: 'flex' }}>Contact number:<div style={{ color: 'rgba(145, 145, 145, 1)' }}>110 4598 2366</div></div>
                    <div style={{ display: 'flex' }}>Driving License ID:<div style={{ color: 'rgba(145, 145, 145, 1)' }}>123456789</div></div>
                  </div>
                </div>
              </div>

              <hr className={VcompStyles.hrRightCont} />


                </div> */}




                <div className={StartingSoonStyle.head}>
                  <div className={StartingSoonStyle.headtitle}>The ride is Completed on 16 Feb 2024</div>
                  <div className={StartingSoonStyle.para}>Vestibulum condimentum, massa eu consectetur congue, diam tortor fringilla urna, sed tincidunt metus dui id est.</div>
                </div>
                <div className={StartingSoonStyle.main}>
                  <div className={StartingSoonStyle.headtitle}>Assigned Car Details</div>
                  <div className={StartingSoonStyle.carDetailsContainer}>
                    <div className={StartingSoonStyle.carImageContainer}>
                      <img src={ridesAudi} className={StartingSoonStyle.cardImg} alt="Audi A6" />
                    </div>
                    <div className={StartingSoonStyle.carInfoContainer}>
                      <h5 className={StartingSoonStyle.cardTitle}>Rent Audi A6 (Blue), 2024</h5>
                      <div className={StartingSoonStyle.contEelement}>
                        <div className={StartingSoonStyle.starCont}>
                          <svg className={StartingSoonStyle.StarIcon} fill="currentColor" viewBox="0 0 20 20" width="16" height="16">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <div className={StartingSoonStyle.starNum}>4.5</div>
                        </div>
                        <div className={StartingSoonStyle.mielageCont}>
                          <FontAwesomeIcon className={StartingSoonStyle.mileIcon} icon={faGaugeHigh} />
                          <div className={StartingSoonStyle.milePara}>250 km/day</div>
                        </div>
                        <div className={StartingSoonStyle.insuranceCont}>
                          <svg className={StartingSoonStyle.insuranceIcon} fill="currentColor" viewBox="0 0 20 20" width="16" height="16">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div className={StartingSoonStyle.insurancePara}>Insurance Included</div>
                        </div>
                      </div>
                      <p style={{ color: "black" }}>Car number: <small className={StartingSoonStyle.code}>8D22A1245</small></p><br />
                      <p style={{ color: "black" }}>Registration Number: <small className={StartingSoonStyle.code}>12548879</small></p>
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "1px solid #EDEDED", paddingBottom: "20px", marginBottom: "20px" }} className={StartingSoonStyle.footerCont}>
                  <div className={StartingSoonStyle.headtitle}>Consumer Details</div>
                  <div className={StartingSoonStyle.consumerDetailsContainer}>
                    <div className={StartingSoonStyle.consumerImageContainer}>
                      <img src={profile_pic} className={StartingSoonStyle.profile_img_footer} alt="Esther Howard" />
                    </div>
                    <div className={StartingSoonStyle.consumerInfoContainer}>
                      <h5 className="card-title">Esther Howard</h5>
                      <p>2,719 trips  |  Joined Oct 2015</p>
                      <p>Email address: <small>loremipsum@gmail.com</small></p>
                      <p>Contact number: <small>110 4598 2366</small></p>
                      <p>Driving License ID: <small>123456789</small></p>
                    </div>
                  </div>
                </div>
                <div className={VcompStyles.feedBackCont}>
                  <div className={VcompStyles.txtCont}>
                    <div className={VcompStyles.head}>Feedback by the consumer</div>
                    <div className={VcompStyles.starCont}>
                      <FontAwesomeIcon icon={faStar} className={VcompStyles.star} />
                      <FontAwesomeIcon icon={faStar} className={VcompStyles.star} />
                      <FontAwesomeIcon icon={faStar} className={VcompStyles.star} />
                      <FontAwesomeIcon icon={faStar} className={VcompStyles.star} />
                      <FontAwesomeIcon icon={faStar} className={VcompStyles.starBlack} />
                    </div>
                    <div className={VcompStyles.txt}>“Lorem ipsum dolor sit amet consectetur. Ac vitae at cursus venenatis lectus. Leo vestib pulvinar porttitor scelerisque vestibulum a nulla. Varius turpis in rhocus”.</div>
                  </div>
                  <button onClick={() => setisfeedbackActive(true)} className={VcompStyles.btn}>Send feedback</button>
                </div>



                <div className={VcompStyles.reportCont}>
                  <div className={VcompStyles.reportHead}>Report</div>
                  <div>
                    <label>Booking Id</label>
                    <input placeholder='Enter booking ID' className={VcompStyles.reportInput} type='text' />
                    <label>Description</label>
                    <textarea style={{ outline: 'none !important' }} placeholder='inputs' className={VcompStyles.reportInputx} cols={10} rows={30}></textarea>
                    <button type='submit' className={Rides.reportSub}>Submit</button>
                  </div>
                </div>
              </div>
              <div className={StartingSoonStyle.rightCont}>
                <div className={StartingSoonStyle.rightHeader}>
                  <div className={StartingSoonStyle.headtitle}>Booking Details</div>
                </div>
                <div className={StartingSoonStyle.totalPrice}>Total Price</div>
                <div className={StartingSoonStyle.priceCont}>
                  <div className={StartingSoonStyle.price}>£153</div>
                  <div className={StartingSoonStyle.Paid}>Paid</div>
                </div>

                <div className={StartingSoonStyle.inpCont}>
                  <div className={StartingSoonStyle.labelTitle}>Pick-up date & time</div>
                  <div className={StartingSoonStyle.calInp}>
                    <div className={StartingSoonStyle.calcont}>
                      <FontAwesomeIcon className={StartingSoonStyle.calIcon} icon={faCalendarAlt} />
                      <input type='text' placeholder='15 Feb 2024' className={StartingSoonStyle.inp} />
                    </div>
                    <div className={StartingSoonStyle.timecont}>
                      <FontAwesomeIcon className={StartingSoonStyle.calIcon} icon={faClock} />
                      <input type='text' placeholder='12:05 Pm' className={StartingSoonStyle.inpx} />
                    </div>
                  </div>
                  <div className={StartingSoonStyle.labelTitle}>Drop-off date & time</div>
                  <div className={StartingSoonStyle.calInp}>
                    <div className={StartingSoonStyle.calcont}>
                      <FontAwesomeIcon className={StartingSoonStyle.calIcon} icon={faCalendarAlt} />
                      <input type='text' placeholder='16 Feb 2024' className={StartingSoonStyle.inp} />
                    </div>
                    <div className={StartingSoonStyle.timecont}>
                      <FontAwesomeIcon className={StartingSoonStyle.calIcon} icon={faClock} />
                      <input type='text' placeholder='12:05 Pm' className={StartingSoonStyle.inpx} />
                    </div>
                  </div>
                  <div className={StartingSoonStyle.labelTitle}>Pick-up Location</div>
                  <div className={StartingSoonStyle.locInp}>
                    <FontAwesomeIcon className={StartingSoonStyle.IconLoc} icon={faLocationDot} />
                    <input type='text' placeholder='Dummy Location 01' className={StartingSoonStyle.loc} />
                  </div>
                  <div className={StartingSoonStyle.labelTitle}>Drop-off Location</div>
                  <div className={StartingSoonStyle.locInp}>
                    <FontAwesomeIcon className={StartingSoonStyle.IconLoc} icon={faLocationDot} />
                    <input type='text' placeholder='Dummy Location 02' className={StartingSoonStyle.loc} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${VcompStyles.feedbackScrollCont} ${isfeedbackActive ? VcompStyles.activeFeedback : ""}`}>
              <div className={VcompStyles.feedbackModal}>
                <FontAwesomeIcon onClick={() => setisfeedbackActive(false)} icon={faX} className={VcompStyles.closeIcon} />
                <div className={VcompStyles.feedbackTitle}>Send feedback to the consumer for this rental ride</div>
                <div className={VcompStyles.feedbackPara}>Lorem ipsum dolor sit amet consectetur.</div>
                <div className={VcompStyles.feedbackStarCont}>
                  <FontAwesomeIcon icon={faStar} className={VcompStyles.feedbackStar} />
                  <FontAwesomeIcon icon={faStar} className={VcompStyles.feedbackStar} />
                  <FontAwesomeIcon icon={faStar} className={VcompStyles.feedbackStar} />
                  <FontAwesomeIcon icon={faStar} className={VcompStyles.feedbackStar} />
                  <FontAwesomeIcon icon={faStar} className={VcompStyles.feedbackStarx} />
                </div>
                <textarea className={VcompStyles.writeText} cols={30} rows={10} placeholder='write a review'></textarea>
                <button onClick={() => setisfeedbackActive(false)} className={VcompStyles.feedbackBtn}>Send feedback</button>
              </div>
            </div>
          </div>
        );
      case 'messages':
        return (
          // <div className={Messages.tabContent}>
          //   <div className={Messages['messages-container']}>
          //     {/* Left sidebar - Conversation list */}
          //     <div className={Messages['conversation-list']}>
          //       <div className={Messages['search-bar']}>
          //         <input type='text' placeholder='search here ...' className={Messages['searchB']} />

          //       </div>

          //       {conversations.map((convo, index) => (
          //         <div
          //           key={index}
          //           className={`${Messages['conversation-item']} ${convo.unread ? Messages['unread'] : ''}`}
          //         >
          //           <div className={Messages['conversation-avatar']}></div>
          //           <div className={Messages['conversation-details']}>
          //             <div className={Messages['conversation-header']}>
          //               <h3 className={Messages['conversation-name']}>{convo.name}</h3>
          //               <span className={Messages['conversation-time']}>{convo.time}</span>
          //             </div>
          //             <p className={Messages['conversation-preview']}>{convo.preview}</p>
          //           </div>
          //         </div>
          //       ))}
          //     </div>


          //     <div className={Messages['active-chat']}>
          //       {/* Chat header */}
          //       <div className={Messages['chat-header']}>
          //         <div className={Messages['chat-user']}>
          //           <div className={Messages['chat-avatar']}></div>
          //           <div>
          //             <h2>{activeChat.name}</h2>
          //             <p className={Messages['user-status']}>{activeChat.status}</p>
          //           </div>
          //         </div>
          //       </div>

          //       {/* Messages area */}
          //       <div className={Messages['messages-area']}>
          //         {activeChat.messages.map((msg, index) => (
          //           <div
          //             key={index}
          //             className={`${Messages['message']} ${msg.sender === 'me' ? Messages['my-message'] : Messages['their-message']
          //               }`}
          //           >
          //             <div className={Messages['message-content']}>
          //               <p>{msg.content}</p>
          //               <span className={Messages['message-time']}>{msg.time}</span>
          //             </div>
          //           </div>
          //         ))}
          //       </div>

          //       {/* Message input */}
          //       <div className={Messages['message-input-container']}>
          //         <input
          //           type="text"
          //           placeholder="Type A Message..."
          //           className={Messages['message-input']}
          //         />
          //         <div className={Messages['iconCont']}>
          //           <FontAwesomeIcon className={Messages['iconmessage']} icon={faLink} />
          //           <FontAwesomeIcon className={Messages['iconmessage']} icon={faSmile} />
          //           <FontAwesomeIcon className={Messages['iconmessage']} icon={faPaperPlane} />
          //         </div>

          //       </div>
          //     </div>
          //   </div>
          // </div >

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

      case 'profile':
        return (
          <div className={ProfileStyles.tabContent}>
            {/* Profile Header */}

            <div className={ProfileStyles.profileHeader}>
              <div className={ProfileStyles.userInfo}>
                <img
                  src={profile_pic}
                  alt="Esther Howard"
                  className={ProfileStyles.avatar}
                />
                <div className={ProfileStyles.userPara}>
                  <h2 className={ProfileStyles.userName}>Esther Howard</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FontAwesomeIcon style={{ color: 'rgba(158, 77, 182, 1)' }} icon={faEnvelope} />
                    <div className={ProfileStyles.email}>esther@email.com</div>
                  </div>
                </div>

              </div>
              <div className={ProfileStyles.actionButtons}>
                <button className={ProfileStyles.btnPrimary}>Change Password</button>
                <button className={ProfileStyles.btnSecondary}>Edit Profile</button>
              </div>
            </div>

            {/* Personal Information */}
            <div className={ProfileStyles.section}>
              <h3 className={ProfileStyles.sectionTitle}>Personal Information</h3>

              <div className={ProfileStyles.girdCont}>
                <div className={ProfileStyles.leftBoxCont}>
                  <div className={ProfileStyles.grey}>Name:</div>
                  <div className={ProfileStyles.grey}>Email address:</div>
                  <div className={ProfileStyles.grey}>Business name:</div>
                </div>
                <div className={ProfileStyles.rightBoxCont}>
                  <div className={ProfileStyles.black}>Esther Howard</div>
                  <div className={ProfileStyles.black}>esther@email.com</div>
                  <div className={ProfileStyles.black}>Lorem ipsum Pvt. Ltd.</div>
                </div>
                <div className={ProfileStyles.leftBoxCont}>
                  <div className={ProfileStyles.grey}>Contact number:</div>
                  <div className={ProfileStyles.grey}>Address:</div>
                  <div className={ProfileStyles.grey}>Business registration number:</div>
                </div>
                <div className={ProfileStyles.rightBoxCont}>
                  <div className={ProfileStyles.black}>110 4598 2366</div>
                  <div className={ProfileStyles.black}>975 Reserve Dr, Roseville, CA 95678, USA</div>
                  <div className={ProfileStyles.black}>123321012</div>
                </div>
              </div>
            </div>

            {/* Current Membership Plan */}
            <div className={ProfileStyles.section}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className={ProfileStyles.sectionTitle}>My Current Membership Plan</h3>
                <div className={ProfileStyles.btnEdit} >
                  <FontAwesomeIcon icon={faEdit} />
                  <div>Edit</div>
                </div>
              </div>

              <div className={ProfileStyles.membershipCard}>
                <div className={ProfileStyles.contX}>
                  <div className={ProfileStyles.titDiamond}>Diamond</div>
                  <div className={ProfileStyles.priceGras}>£199<div className={ProfileStyles.month}>/month</div></div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>Purchase Date: <div className={ProfileStyles.greyx}>16 Feb 2024</div></div>
                  <div style={{ display: 'flex', alignItems: 'center', }}>Expire Date: <div className={ProfileStyles.greyx}>16 Mar 2024</div></div>
                </div>
                <div className={ProfileStyles.contX}>
                  <div className={ProfileStyles.titlecontX}>Features:</div>
                  <div className={ProfileStyles.featuresCont}>
                    <FontAwesomeIcon className={ProfileStyles.icondes} icon={faCheck} />
                    <div style={{ color: 'rgba(145, 145, 145, 1)' }}>Lorem ipsum dolor sit amet</div>
                  </div>
                  <div className={ProfileStyles.featuresCont}>
                    <FontAwesomeIcon className={ProfileStyles.icondes} icon={faCheck} />
                    <div style={{ color: 'rgba(145, 145, 145, 1)' }}>Sed mattis dolor sit amet elit.</div>
                  </div>
                  <div className={ProfileStyles.featuresCont}>
                    <FontAwesomeIcon className={ProfileStyles.icondes} icon={faCheck} />
                    <div style={{ color: 'rgba(145, 145, 145, 1)' }}>Nam consequat convallis imperdiet</div>
                  </div>
                </div>
                <div className={ProfileStyles.contX}>

                  <div className={ProfileStyles.featuresCont}>
                    <FontAwesomeIcon className={ProfileStyles.icondes} icon={faCheck} />
                    <div style={{ color: 'rgba(145, 145, 145, 1)' }}>Lorem ipsum dolor sit amet</div>
                  </div>
                  <div className={ProfileStyles.featuresCont}>
                    <FontAwesomeIcon className={ProfileStyles.icondes} icon={faCheck} />
                    <div style={{ color: 'rgba(145, 145, 145, 1)' }}>Sed mattis dolor sit amet elit.</div>
                  </div>
                  <div className={ProfileStyles.featuresCont}>
                    <FontAwesomeIcon className={ProfileStyles.icondes} icon={faCheck} />
                    <div style={{ color: 'rgba(145, 145, 145, 1)' }}>Nam consequat convallis imperdiet</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={ProfileStyles.inviteCont}>
              <div className={ProfileStyles.leftInvite}>
                <div className={ProfileStyles.inviteTit}>Invite friends and earn more</div>
                <div className={ProfileStyles.invitePara}>Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam. Vulputate nisl vel diam eu. Risus natoque consectetur.</div>
              </div>
              <button onClick={() => setInviteTab(true)} className={ProfileStyles.btnPrimary}>Invite & Earn</button>
            </div>
            {/* Payment History */}
            <div className={ProfileStyles.section}>
              <h3 className={ProfileStyles.sectionTitle}>Payment History</h3>
              <div className={ProfileStyles.historyList}>
                <div className={ProfileStyles.historyItem}>
                  <div className={ProfileStyles.historyLeft}>
                    <img
                      src={PorscheImage}
                      alt="Porsche Cayenne"
                      className={ProfileStyles.carImage}
                    />
                    <div className={ProfileStyles.carInfo}>
                      <div className={ProfileStyles.carName}>Porsche Cayenne</div>
                      <div className={ProfileStyles.carDetails}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <div>15 Feb 2024 · 12:00 pm -
                          16 Feb 2024 · 12:00 pm</div>
                      </div>
                      <div className={ProfileStyles.thirdCont}>
                        <img src={profile_pic} style={{ width: '25px', height: '25px', borderRadius: '50%' }} alt='error' />
                        <div>Sergey Ray</div>
                        <FontAwesomeIcon style={{ color: 'rgba(255, 199, 0, 1)' }} icon={faStar} />
                        <div style={{ color: 'rgba(145, 145, 145, 1)' }}>4.95</div>
                      </div>
                    </div>
                  </div>
                  <div className={ProfileStyles.historyRight}>
                    <div className={ProfileStyles.paymentStatus}>Paid</div>
                    <div className={ProfileStyles.amount}>£ 250</div>

                  </div>
                </div>

                <div className={ProfileStyles.historyItem}>
                  <div className={ProfileStyles.historyLeft}>
                    <img
                      src={PorscheImage}
                      alt="Porsche Cayenne"
                      className={ProfileStyles.carImage}
                    />
                    <div className={ProfileStyles.carInfo}>
                      <div className={ProfileStyles.carName}>Porsche Cayenne</div>
                      <div className={ProfileStyles.carDetails}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <div>15 Feb 2024 · 12:00 pm -
                          16 Feb 2024 · 12:00 pm</div>
                      </div>
                      <div className={ProfileStyles.thirdCont}>
                        <img src={profile_pic} style={{ width: '25px', height: '25px', borderRadius: '50%' }} alt='error' />
                        <div>Sergey Ray</div>
                        <FontAwesomeIcon style={{ color: 'rgba(255, 199, 0, 1)' }} icon={faStar} />
                        <div style={{ color: 'rgba(145, 145, 145, 1)' }} >4.95</div>
                      </div>
                    </div>
                  </div>
                  <div className={ProfileStyles.historyRight}>
                    <div className={ProfileStyles.paymentStatus}>Paid</div>
                    <div className={ProfileStyles.amount}>£ 250</div>

                  </div>
                </div>

                <div className={ProfileStyles.historyItem}>
                  <div className={ProfileStyles.historyLeft}>
                    <img
                      src={PorscheImage}
                      alt="Porsche Cayenne"
                      className={ProfileStyles.carImage}
                    />
                    <div className={ProfileStyles.carInfo}>
                      <div className={ProfileStyles.carName}>Porsche Cayenne</div>
                      <div className={ProfileStyles.carDetails}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <div>15 Feb 2024 · 12:00 pm -
                          16 Feb 2024 · 12:00 pm</div>
                      </div>
                      <div className={ProfileStyles.thirdCont}>
                        <img src={profile_pic} style={{ width: '25px', height: '25px', borderRadius: '50%' }} alt='error' />
                        <div>Sergey Ray</div>
                        <FontAwesomeIcon style={{ color: 'rgba(255, 199, 0, 1)' }} icon={faStar} />
                        <div style={{ color: 'rgba(145, 145, 145, 1)' }}>4.95</div>
                      </div>
                    </div>
                  </div>
                  <div className={ProfileStyles.historyRight}>
                    <div className={ProfileStyles.paymentStatus}>Paid</div>
                    <div className={ProfileStyles.amount}>£ 250</div>

                  </div>
                </div>

                <div className={ProfileStyles.historyItem}>
                  <div className={ProfileStyles.historyLeft}>
                    <img
                      src={PorscheImage}
                      alt="Porsche Cayenne"
                      className={ProfileStyles.carImage}
                    />
                    <div className={ProfileStyles.carInfo}>
                      <div className={ProfileStyles.carName}>Porsche Cayenne</div>
                      <div className={ProfileStyles.carDetails}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <div>15 Feb 2024 · 12:00 pm -
                          16 Feb 2024 · 12:00 pm</div>
                      </div>
                      <div className={ProfileStyles.thirdCont}>
                        <img src={profile_pic} style={{ width: '25px', height: '25px', borderRadius: '50%' }} alt='error' />
                        <div>Sergey Ray</div>
                        <FontAwesomeIcon style={{ color: 'rgba(255, 199, 0, 1)' }} icon={faStar} />
                        <div style={{ color: 'rgba(145, 145, 145, 1)' }}>4.95</div>
                      </div>
                    </div>
                  </div>
                  <div className={ProfileStyles.historyRight}>
                    <div className={ProfileStyles.paymentStatus}>Paid</div>
                    <div className={ProfileStyles.amount}>£ 250</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${ProfileStyles.container} ${InviteTab === true ? ProfileStyles.active : ''}`}>
              <FontAwesomeIcon onClick={() => setInviteTab(false)} icon={faX} className={VcompStyles.closeIcon} />

              <div className={ProfileStyles.header}>
                <h2 className={ProfileStyles.title}>Invite & Earn</h2>
                <p className={ProfileStyles.subtitle}>Lorem ipsum dolor sit amet consectetur.</p>
              </div>

              <div className={ProfileStyles.stepsList}>
                <div className={ProfileStyles.stepItem}>
                  <span className={ProfileStyles.stepNumber}>1.</span>
                  <span className={ProfileStyles.stepText}>In morbi pellentesque congue enim amet eget vel leo id.</span>
                </div>
                <div className={ProfileStyles.stepItem}>
                  <span className={ProfileStyles.stepNumber}>2.</span>
                  <span className={ProfileStyles.stepText}>Morbi tincidunt euismod lectus id eleifend. Curabitur sit amet facilisis.</span>
                </div>
                <div className={ProfileStyles.stepItem}>
                  <span className={ProfileStyles.stepNumber}>3.</span>
                  <span className={ProfileStyles.stepText}>Pellentesque congue enim amet eget vel leo id.</span>
                </div>
              </div>

              <div className={ProfileStyles.linkSection}>
                <div className={ProfileStyles.linkContainer}>
                  <input
                    type="text"
                    placeholder='https://lorem_ipsum-dolorsit/3lorem'
                    className={ProfileStyles.linkInput}
                  />
                  <button
                    className={ProfileStyles.copyButton}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className={ProfileStyles.actionSection}>
                <button className={ProfileStyles.shareButton}>Share Link</button>
              </div>
            </div >

          </div>
        );

      default:
        return (
          <div className={styles.tabContent}>
            <h2>Dashboard Content</h2>
            <p>Select a section from the navigation menu.</p>
          </div>
        );
    }
  };

  return (
    <div ref={dashboardContainerRef} className={styles.PageCont}>
      <div className={styles.navBar}>
        <div className={styles.partOne}>
          <div className={styles.logoPage}>MOBY<p className={styles.mobySpan}>CAR24</p></div>
          <ul className={styles.contUl}>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`${styles.list} ${activeTab === item.id ? styles.active : ''}`}
                onClick={() => handleTabChange(item.id)}
              >
                <FontAwesomeIcon icon={item.icon} />
                <div className={styles.navName}>{item.label}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.partTwo}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <div className={styles.navName}>Logout</div>
        </div>
      </div>

      <div className={styles.Main}>
        <div className={styles.headerCont}>
          <div className={styles.dashtitle}>
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'vehicles' && 'My Vehicles'}
            {activeTab === 'rentals' && 'Rental Rides'}
            {activeTab === 'messages' && 'Messages'}
            {activeTab === 'profile' && 'My Profile'}
            {activeTab === 'view' && 'Dashboard'}
            {activeTab === 'carDetails' && 'My Vehicles'}
            {activeTab === 'boarding' && 'Add Vehicule'}
            {activeTab === 'Vspec' && 'Add Vehicule'}
            {activeTab === 'upload' && 'Add Vehicule'}
            {activeTab === 'VcomplitedDet' && 'Add Vehicule'}
            {activeTab === 'startingSoon' && 'Rental Rides'}

          </div>
          <div className={styles['notification-container']}>
            <button className={styles['notification-btn']} onClick={toggleNotifications}>
              <FontAwesomeIcon icon={faBell} />
            </button>
            {showNotifications && (
              <div className={styles['notification-content']}>
                <div className={styles['notification-head']}>
                  <h3 className={styles['notification-heading']}>Notifications</h3>
                </div>
                <div className={styles['notification-group']}>
                  <h4 className={styles['notification-subhead']}>Today</h4>
                  {[1, 6, 10, 59].map((minutes, index) => (
                    <div key={index} className={styles['notification-message']}>
                      <div className={styles['notification-main']}>
                        <img src={profile_pic} className={styles['notification-photo']} alt='' />
                      </div>
                      <div className={styles['notfication-mainS']}>
                        <strong className={styles['notfication-name']}>Charlie Peter</strong> lorem ipsum dolor sit amet.<br />
                        <p className={styles['notification-detail']}>
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                      <div className={styles['notification-stamp']}>
                        {minutes} {minutes === 1 ? 'min' : 'mins'} ago
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles['notification-group']}>
                  <h4 className={styles['notification-subhead']}>Yesterday</h4>
                  {[1, 1].map((days, index) => (
                    <div key={index} className={styles['notification-message']}>
                      <div className={styles['notification-main']}>
                        <img src={profile_pic} className={styles['notification-photo']} alt='' />
                      </div>
                      <div className={styles['notfication-mainS']}>
                        <strong className={styles['notfication-name']}>Charlie Peter</strong> lorem ipsum dolor sit amet.<br />
                        <p className={styles['notification-detail']}>
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                      <div className={styles['notification-stamp']}>
                        {days} day{days > 1 ? 's' : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className={styles['profile-dropdown']}>
              <button className={styles['profile-btn']} onClick={toggleProfileDropdown}>
                <img src={profile_pic} alt='Profilepic' className={styles.profile_pic} />
                <span style={{ color: 'black' }}>Howard</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {showProfileDropdown && (
                <div className={styles['dropdown-content']}>
                  <Link to='/'>become a consumer</Link>
                  <Link onClick={() => setActiveTab('profile')}>My Profile</Link>
                  <Link to="/">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div ref={dashboardMainRef} className={styles.mainContent}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}



export default Payservice;
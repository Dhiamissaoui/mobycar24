// Centralized FontAwesome icon library for better performance
import { library } from '@fortawesome/fontawesome-svg-core';

// Import only the icons we actually use
import {
    faMagnifyingGlass,
    faBell,
    faBars,
    faSlidersH,
    faHome,
    faCar,
    faComment,
    faCarSide,
    faUser,
    faHeart,
    faCalendar,
    faClock,
    faKey,
    faCarAlt,
    faLocationDot,
    faSterlingSign,
    faEuroSign,
    faDollarSign,
    faCaretLeft,
    faCaretRight,
    faPlus,
    faMinus,
    faX,
    faVolumeControlPhone,
    faShieldAlt,
    faTachometerAlt,
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

import {
    faTelegram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

// Add icons to library
library.add(
    faMagnifyingGlass,
    faBell,
    faBars,
    faSlidersH,
    faHome,
    faCar,
    faComment,
    faCarSide,
    faUser,
    faHeart,
    faCalendar,
    faClock,
    faKey,
    faCarAlt,
    faLocationDot,
    faSterlingSign,
    faEuroSign,
    faDollarSign,
    faCaretLeft,
    faCaretRight,
    faPlus,
    faMinus,
    faX,
    faVolumeControlPhone,
    faShieldAlt,
    faTachometerAlt,
    faCalendarAlt,
    faTelegram,
    faWhatsapp
);

export default library;

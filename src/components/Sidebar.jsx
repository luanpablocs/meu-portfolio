import SocialNetworks from './SocialNetworks';

import Avatar from '../img/avatr.png';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';


const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Luan Pablo" />
        <p className="title">Dev Front-End</p>
        <SocialNetworks />
        <InformationContainer />
        <div className="btndown">
        <a href="#" className="btn">
            Download currículo
        </a>
        </div>
    </aside>
};

export default Sidebar;
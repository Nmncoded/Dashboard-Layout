import  '../stylesheets/DashboardStyles.css';
import {FaCodepen} from 'react-icons/fa';

function Header(){
    return (
        <header className="header">
            <span className='icon' ><FaCodepen /></span>
            <span className="h-name">Dashboard</span>
            <input className='h-input' type="text" placeholder='Search documentation...'/>
        </header>
    )
}
export default Header;
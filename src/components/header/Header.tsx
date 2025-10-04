import { useAppSelector } from '../../redux/store/hooks';
import './header.css'

const Header = () => {
  const notifications = useAppSelector((state) => state.notifications);
    return (
    <div className="navbar">
    <div className="app-name">Test App</div>
    <div className="notification">
      <svg viewBox="0 0 24 24">
        <path d="M12 2C10.343 2 9 3.343 9 5v1.09C6.72 7.165 5.5 9.388 5.5 12v5l-1.5 1.5V20h16v-1.5L18.5 17v-5c0-2.612-1.22-4.835-3.5-5.91V5c0-1.657-1.343-3-3-3zm0 20c1.104 0 2-.896 2-2h-4c0 1.104.896 2 2 2z"/>
      </svg>
      {notifications.length >0 && <span className="count">{notifications.length}</span>}
    </div>
  </div>
    )

}

export default Header
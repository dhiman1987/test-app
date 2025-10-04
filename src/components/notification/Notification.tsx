import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { addNotification, clearNotifications } from '../../redux/reducers/notificationsSlice';
import './notification.css'

const Notification = () => {
    const notifications = useAppSelector((state) => state.notifications);
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState('');

    const handleAddNotification = () => {
    if (inputValue.trim() !== '') {
      dispatch(addNotification(inputValue.trim()));
      setInputValue('');
        }
    };

    return (
        <div>
            <h2>Publish notifications</h2>
            <input 
            type="text"
            placeholder="Add notification"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddNotification}>
                Publish
            </button>
            <button onClick={() => dispatch(clearNotifications())}>
                Clear
            </button>
            <ul className="notification-list">
                {notifications.map((note, index) => (
                <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    )
}

export default Notification;
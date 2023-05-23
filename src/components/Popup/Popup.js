import './Popup.css';
import { useRef, useEffect } from 'react';

function Popup(props) {

    const popupArea = useRef(null);
    const { closePopup } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (popupArea.current && !popupArea.current.contains(event.target)) {
            closePopup();
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [ closePopup ]);

    return (
        <div className={`popup ${props.isOpen ? '' : 'popup_hidden'}`}>
            <div className="popup__area" ref={popupArea}>
                <button className="popup__close-btn" onClick={props.closePopup}></button>
                {props.children}
            </div>
        </div>
    );
}

export default Popup;
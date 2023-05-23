import './Preloader.css';

function Preloader(props) {
    return (
        <div className='preloader'>
            {props.text ? 
                <p className="preloader__text">{props.text}</p>
                : <div className="preloader__load"></div>
            }
        </div>
    );
}

export default Preloader;

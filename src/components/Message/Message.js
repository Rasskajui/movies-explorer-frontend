import './Message.css';

function Message({ isHidden, message, isSuccess }) {
    return (
        <article className={`message ${isHidden ? 'message_hidden' : ''} ${isSuccess ? 'message_success' : ''}`}>
            <p className="message__text">
                <span className="message__text_accent">{`${message}.`}</span> {`${isSuccess ? 'Поздравляем!' : 'Попробуйте ещё раз!'}`}
            </p>
        </article>
    );
}

export default Message;

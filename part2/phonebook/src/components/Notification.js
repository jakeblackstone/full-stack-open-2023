const Notification = ({notificationStyle, message}) => {

    if(message === null){
        return null;
    }

    return(
        <div style={notificationStyle}>
            {message}
        </div>
    );
};
export default Notification;

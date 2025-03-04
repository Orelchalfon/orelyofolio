import { FC } from "react";
import { NotificationProps } from "../../Utils/types";

const Notification: FC<NotificationProps> = ({ classNames, icon, emoji }) => {
    const classes = `notification ${classNames}`;
    return (
        <div className={classes}>
            <div className="notification-body">
                <p>{emoji}</p>
                <h2>{classes.includes("success") ? "A OTP has been sent!" : "Failed to sent email!"}</h2>
                <img src={icon} className="notification-icon" />

            </div>
            <div className="notification-progress" />

        </div>
    )
}

export default Notification
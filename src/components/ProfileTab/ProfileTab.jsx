import styles from "./ProfileTab.module.css";

import {getProfileData} from "../../data";
import {useAuth} from "../../contexts/Auth";

export default function ProfileTab() {
    const {user} = useAuth()

    const userName = `${user?.name} ${user?.surname}`;
    let profileData = getProfileData();
    return (
        <div className={styles.profileContent}>
            <img className={styles.profileAvatar} src={profileData.avatar} alt='Profile'></img>
            <p className={styles.profileName}>{userName}</p>
        </div>
    );
}

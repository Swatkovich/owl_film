import styles from "./ProfileTab.module.css";

import { getProfileData } from "../../data";

export default function ProfileTab(props) {
  const userName = `${props.user.name} ${props.user.surname}`;
  let profileData = getProfileData();
  return (
      <div className={styles.profileContent}>
        <img className={styles.profileAvatar} src={profileData.avatar} alt='Profile'></img>
        <p className={styles.profileName}>{userName}</p>
      </div>
  );
}

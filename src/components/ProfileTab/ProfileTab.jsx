import styles from "./ProfileTab.module.css";

import { getProfileData } from "../../data";

export default function ProfileTab() {
  let profileData = getProfileData();
  return (
      <div className={styles.profileContent}>
        <img className={styles.profileAvatar} src={profileData.avatar} alt='Profile'></img>
        <p className={styles.profileName}>{profileData.name}</p>
      </div>
  );
}

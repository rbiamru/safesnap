import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;

  /** Action props */
  onMenuItemContainerClick?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  onMenuItemContainerClick,
}) => {
  const navigate = useNavigate();

  const onMenuItemContainerClick1 = useCallback(() => {
    navigate("/21-public-post");
  }, [navigate]);

  const onMenuItemContainerClick2 = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.safeSnapWrapper}>
        <div className={styles.safeSnap}>Safe Snap</div>
      </div>
      <div className={styles.list}>
        <div className={styles.menuItem}>
          <img className={styles.homeIcon} alt="" src="/home.svg" />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.menuItem1}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
          <div className={styles.search}>Search</div>
        </div>
        <div className={styles.menuItem2}>
          <img className={styles.bellIcon} alt="" src="/bell.svg" />
          <div className={styles.notifications}>Notifications</div>
        </div>
        <div className={styles.menuItem3} onClick={onMenuItemContainerClick}>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark.svg" />
          <div className={styles.savedPosts}>Saved posts</div>
        </div>
        <div className={styles.menuItem4} onClick={onMenuItemContainerClick2}>
          <img
            className={styles.messageCircleIcon}
            loading="lazy"
            alt=""
            src="/messagecircle1.svg"
          />
          <div className={styles.logout}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

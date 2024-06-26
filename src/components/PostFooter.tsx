import { FunctionComponent } from "react";
import styles from "./PostFooter.module.css";

export type PostFooterType = {
  className?: string;
};

const PostFooter: FunctionComponent<PostFooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.postFooter, className].join(" ")}>
      <footer className={styles.profileInfo}>
        <div className={styles.userInfo}>
          <div className={styles.johnDoe140624}>@John_Doe | 14.06.24</div>
          <div className={styles.actionIcons}>
            <div className={styles.likeButton}>
              <div className={styles.likeIcon}>
                <img
                  className={styles.icnIcon}
                  loading="lazy"
                  alt=""
                  src="/icn-1.svg"
                />
                <img
                  className={styles.icnIcon1}
                  loading="lazy"
                  alt=""
                  src="/icn-2.svg"
                />
              </div>
              <div className={styles.commentButton}>
                <img
                  className={styles.icnIcon2}
                  loading="lazy"
                  alt=""
                  src="/icn-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postDescription}>
          <div className={styles.iSlippedSnowSlipContainer}>
            <p className={styles.iSlipped}>{`I slipped! `}</p>
            <p className={styles.snowSlipPublic}>{`#snow_slip #public   `}</p>
          </div>
        </div>
        <div className={styles.comments}>39 comments</div>
      </footer>
    </section>
  );
};

export default PostFooter;

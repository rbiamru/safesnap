import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.maskBlurInner, className].join(" ")}>
      <footer className={styles.frameParent}>
        <div className={styles.johnDoe140624Parent}>
          <div className={styles.johnDoe140624}>@John_Doe | 14.06.24</div>
          <div className={styles.frameWrapper}>
            <div className={styles.doubleIconParent}>
              <div className={styles.doubleIcon}>
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
              <div className={styles.singleIconButton}>
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
        <div className={styles.iSlippedSnowSlipPrivateWrapper}>
          <div className={styles.iSlippedSnowSlipContainer}>
            <p className={styles.iSlipped}>{`I slipped! `}</p>
            <p className={styles.snowSlipPrivate}>{`#snow_slip #private  `}</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FrameComponent1;

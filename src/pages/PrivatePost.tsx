import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./PrivatePost.module.css";

const PrivatePost: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcnArrowIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.privatePost}>
      <main className={styles.maskBlur}>
        <div className={styles.shadow} />
        <div className={styles.maskBlurInner}>
          <div className={styles.frameParent}>
            <header className={styles.icnArrowWrapper}>
              <img
                className={styles.icnArrowIcon}
                loading="lazy"
                alt=""
                src="/icn-arrow.svg"
                onClick={onIcnArrowIconClick}
              />
            </header>
            <img
              className={styles.icnIcon}
              loading="lazy"
              alt=""
              src="/icn1@2x.png"
            />
          </div>
        </div>
        <video className={styles.image2} controls>
          <source src />
        </video>
        <FrameComponent1 />
      </main>
    </div>
  );
};

export default PrivatePost;

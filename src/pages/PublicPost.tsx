import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PostFooter from "../components/PostFooter";
import styles from "./PublicPost.module.css";

const PublicPost: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIcnArrowIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.publicPost}>
      <main className={styles.maskBlur}>
        <div className={styles.shadow} />
        <div className={styles.postContainer}>
          <div className={styles.postContent}>
            <header className={styles.postHeader}>
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
        <PostFooter />
      </main>
    </div>
  );
};

export default PublicPost;

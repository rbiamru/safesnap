import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InputAndButton from "../components/InputAndButton";
import styles from "./Auth.module.css";

const Auth: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/feed2a");
  }, [navigate]);

  const onPostPictureWithoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.auth}>
      <div className={styles.safeSnap}>Safe Snap</div>
      <main className={styles.authInner}>
        <section className={styles.frameParent}>
          <div className={styles.image3Parent}>
            <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
            <div className={styles.frameChild} />
          </div>
          <div className={styles.signInContentWrapper}>
            <div className={styles.signInContent}>
              <div className={styles.button} onClick={onButtonContainerClick}>
                <div
                  className={styles.postPictureWithout}
                  onClick={onPostPictureWithoutClick}
                >
                  Post picture without signup
                </div>
              </div>
              <form className={styles.signInForm}>
                <div className={styles.emailInput}>
                  <div className={styles.emailLabel}>
                    <div className={styles.signInEmail}>
                      <h3 className={styles.signInAccount}>Sign in account</h3>
                    </div>
                    <div className={styles.enterYourEmail}>
                      Enter your email to sign in for this app
                    </div>
                  </div>
                </div>
                <InputAndButton />
                <div className={styles.separator}>
                  <div className={styles.separatorInner}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.orContinueWith}>or continue with</div>
                  <div className={styles.separatorChild}>
                    <div className={styles.frameInner} />
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.googleIcon}>
                    <img
                      className={styles.googleIcon1}
                      alt=""
                      src="/google.svg"
                    />
                  </div>
                  <div className={styles.secondary}>Google</div>
                </div>
                <div className={styles.terms}>
                  <div className={styles.byClickingContinueContainer}>
                    <span
                      className={styles.byClickingContinue}
                    >{`By clicking continue, you agree to our `}</span>
                    <span className={styles.termsOfService}>
                      Terms of Service
                    </span>
                    <span className={styles.and}>{` and `}</span>
                    <span className={styles.privacyPolicy}>Privacy Policy</span>
                  </div>
                  <div className={styles.registerLink}>
                    <div
                      className={styles.button2}
                      onClick={onButtonContainerClick}
                    >
                      <div className={styles.register}>Register</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Auth;

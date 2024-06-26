import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./InputAndButton.module.css";

export type InputAndButtonType = {
  className?: string;
};

const InputAndButton: FunctionComponent<InputAndButtonType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/feed2a");
  }, [navigate]);

  return (
    <div className={[styles.inputAndButton, className].join(" ")}>
      <Form className={styles.field} type="text" />
      <div className={styles.field1}>
        <div className={styles.password}>Password</div>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.signInWith}>
          Sign in with email to join community
        </div>
      </div>
    </div>
  );
};

export default InputAndButton;

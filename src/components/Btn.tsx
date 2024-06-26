import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Btn.module.css";

export type BtnType = {
  className?: string;
  instagram?: string;
  instagram1?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
};

const Btn: FunctionComponent<BtnType> = ({
  className = "",
  instagram,
  instagram1,
  propBorder,
}) => {
  const btnStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className={[styles.btn, className].join(" ")} style={btnStyle}>
      <img
        className={styles.instagramIcon}
        loading="lazy"
        alt=""
        src={instagram}
      />
      <div className={styles.instagramHannahSuperWrapper}>
        <div className={styles.instagramHannahSuper}>
          <span>{instagram1}</span>
          <span className={styles.johnDoe}>@John_Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Btn;

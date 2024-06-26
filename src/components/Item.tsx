import { FunctionComponent } from "react";
import styles from "./Item.module.css";

export type ItemType = {
  className?: string;
  avatar?: string;
  helenaHills?: string;
  helenahills?: string;
};

const Item: FunctionComponent<ItemType> = ({
  className = "",
  avatar,
  helenaHills,
  helenahills,
}) => {
  return (
    <div className={[styles.item, className].join(" ")}>
      <img className={styles.avatarIcon} loading="lazy" alt="" src={avatar} />
      <div className={styles.text}>
        <div className={styles.helenaHills}>{helenaHills}</div>
        <div className={styles.helenahills}>{helenahills}</div>
      </div>
    </div>
  );
};

export default Item;

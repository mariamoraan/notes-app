import Image from "next/image";
import styles from "./header.module.css";
import { bind } from "@/core/styles/bind";
const cx = bind(styles);

export const Header = () => {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Keep Note</p>
      <Image
        className={cx("image")}
        height={100}
        width={100}
        alt="yourself"
        src={
          "https://cdn.dribbble.com/users/2483340/avatars/normal/679ce7e9f4a95bbe47a9630d7a59d554.jpg?1632589132"
        }
      />
    </div>
  );
};

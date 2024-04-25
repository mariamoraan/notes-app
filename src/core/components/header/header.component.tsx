import Image from "next/image";
import styles from "./header.module.css";
import { bind } from "@/core/styles/bind";
const cx = bind(styles);

export const Header = () => {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>ILoveNotes</p>
      <Image
        className={cx("image")}
        height={100}
        width={100}
        alt="yourself"
        src={
          "https://img.freepik.com/foto-gratis/lindo-gatito-domestico-sienta-ventana-mirando-fuera-ia-generativa_188544-12519.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1711843200&semt=ais"
        }
      />
    </div>
  );
};

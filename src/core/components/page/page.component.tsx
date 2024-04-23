import { bind } from "@/core/styles/bind";
import styles from "./page.module.css";
const cx = bind(styles);

interface Props {
  children: React.ReactNode;
}

export const Page = (props: Props) => {
  const { children } = props;
  return <main className={cx("wrapper")}>{children}</main>;
};

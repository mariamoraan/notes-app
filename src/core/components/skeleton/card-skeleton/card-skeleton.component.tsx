import { bind } from "@/core/styles/bind";
import styles from "./card-skeleton.module.css";
const cx = bind(styles);

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const CardSkeleton = (props: Props) => {
  const { children, className } = props;
  return <div className={cx(["card-skeleton", className])}>{children}</div>;
};

import { bind } from "@/core/styles/bind";
import styles from "./text-line-skeleton.module.css";
const cx = bind(styles);

interface Props {
  className?: string;
}

export const TextLineSkeleton = (props: Props) => {
  const { className } = props;
  return <div className={cx(["text-skeleton", className])} />;
};

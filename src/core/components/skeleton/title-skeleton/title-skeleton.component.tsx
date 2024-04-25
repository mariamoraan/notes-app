import { bind } from "@/core/styles/bind";
import styles from "./title-skeleton.module.css";
import { TextLineSkeleton } from "../text-line-skeleton/text-line-skeleton.component";
const cx = bind(styles);

interface Props {
  className?: string;
}

export const TitleSkeleton = (props: Props) => {
  const { className } = props;
  return <TextLineSkeleton className={cx(["title-skeleton", className])} />;
};

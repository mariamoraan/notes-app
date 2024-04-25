import { bind } from "@/core/styles/bind";
import styles from "./text-skeleton.module.css";
import { TextLineSkeleton } from "../text-line-skeleton/text-line-skeleton.component";
const cx = bind(styles);

interface Props {
  className?: string;
  linesNumber?: number;
}

export const TextSkeleton = (props: Props) => {
  const { className, linesNumber = 5 } = props;
  return (
    <div className={cx(["text-skeleton", className])}>
      {Array.from(Array(linesNumber).keys()).map((line) => (
        <TextLineSkeleton key={line} className={cx("text-line-skeleton")} />
      ))}
    </div>
  );
};

import { bind } from "@/core/styles/bind";
import styles from "./cards-skeleton.module.css";
import { CardSkeleton } from "../card-skeleton/card-skeleton.component";
const cx = bind(styles);

interface Props {
  cardsNumber?: number;
  className?: string;
}

export const CardsSkeleton = (props: Props) => {
  const { cardsNumber = 3, className } = props;
  return (
    <div className={cx(["cards-skeleton", className])}>
      {Array.from(Array(cardsNumber).keys()).map((line) => (
        <CardSkeleton key={line} />
      ))}
    </div>
  );
};

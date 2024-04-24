import { bind } from "@/core/styles/bind";
import styles from "./add-note-button.module.css";
import { PlusIcon } from "@/core/components/icons/icons";
import Link from "next/link";
const cx = bind(styles);

export const AddNoteButton = () => {
  return (
    <Link href={"/new-note"} className={cx("wrapper")}>
      <PlusIcon size={28} />
    </Link>
  );
};

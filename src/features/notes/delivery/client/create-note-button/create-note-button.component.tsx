import { bind } from "@/core/styles/bind";
import styles from "./create-note-button.module.css";
import { PlusIcon } from "@/core/components/icons/icons";
import Link from "next/link";
const cx = bind(styles);

export const CreateNoteButton = () => {
  return (
    <Link href={"/new-note"} className={cx("wrapper")}>
      <PlusIcon size={28} />
    </Link>
  );
};

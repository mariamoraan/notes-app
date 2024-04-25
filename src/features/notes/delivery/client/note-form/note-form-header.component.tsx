"use client";

import { ArrowLeftIcon, SaveIcon } from "@/core/components/icons/icons";
import styles from "./note-form-header.module.css";
import { bind } from "@/core/styles/bind";
import { useRouter } from "next/navigation";
const cx = bind(styles);

interface Props {
  isLoading: boolean;
}

export const NoteFormHeader = (props: Props) => {
  const { isLoading } = props;
  const router = useRouter();
  return (
    <div className={cx("wrapper")}>
      <button
        type="button"
        onClick={() => router.back()}
        className={cx("icon-button")}
        disabled={isLoading}
      >
        <ArrowLeftIcon size={24} />
      </button>
      <button type="submit" className={cx("icon-button")} disabled={isLoading}>
        <SaveIcon size={24} />
      </button>
    </div>
  );
};

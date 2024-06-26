"use client";

import { ArrowLeftIcon, SaveIcon } from "@/core/components/icons/icons";
import styles from "./note-form-header.module.css";
import { bind } from "@/core/styles/bind";
import { useRouter } from "next/navigation";
const cx = bind(styles);

interface Props {
  isLoading: boolean;
  actions?: React.ReactNode;
}

export const NoteFormHeader = (props: Props) => {
  const { isLoading, actions } = props;
  const router = useRouter();
  return (
    <div className={cx("wrapper")}>
      <button
        type="button"
        onClick={() => router.back()}
        className={cx("icon-button")}
        disabled={isLoading}
        data-testid="go-back-button"
      >
        <ArrowLeftIcon size={24} />
      </button>
      <div className={cx("actions")}>
        {actions}
        <button
          type="submit"
          className={cx("icon-button")}
          disabled={isLoading}
          data-testid="save-note-button"
        >
          <SaveIcon size={24} />
        </button>
      </div>
    </div>
  );
};

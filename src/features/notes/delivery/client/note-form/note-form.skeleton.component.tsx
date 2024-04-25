"use client";

import { bind } from "@/core/styles/bind";
import styles from "./note-form.skeleton.module.css";
import { NoteFormHeader } from "./note-form-header.component";
const cx = bind(styles);

const totalLines = 50;

export const NoteFormSkeleton = () => {
  return (
    <div className={cx("skeleton-wrapper")}>
      <NoteFormHeader isLoading={false} />
      <div className={cx("skeleton-color-input")} />
      <div className={cx("skeleton-title-input")} />
      <div className={cx("skeleton-content-input")}>
        {Array.from(Array(10).keys()).map((line) => (
          <div key={line} className={cx("skeleton-content-line")} />
        ))}
      </div>
    </div>
  );
};

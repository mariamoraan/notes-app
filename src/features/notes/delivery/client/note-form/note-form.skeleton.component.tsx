"use client";

import { bind } from "@/core/styles/bind";
import styles from "./note-form.skeleton.module.css";
import { NoteFormHeader } from "./note-form-header.component";
import { TextSkeleton } from "@/core/components/skeleton/text-skeleton/text-skeleton.component";
import { TitleSkeleton } from "@/core/components/skeleton/title-skeleton/title-skeleton.component";
const cx = bind(styles);

export const NoteFormSkeleton = () => {
  return (
    <div className={cx("skeleton-wrapper")}>
      <NoteFormHeader isLoading={false} />
      <div className={cx("skeleton-color-input")} />
      <TitleSkeleton className={cx("skeleton-title-input")} />
      <TextSkeleton />
    </div>
  );
};

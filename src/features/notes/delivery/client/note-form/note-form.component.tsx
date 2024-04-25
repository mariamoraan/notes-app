"use client";

import { bind } from "@/core/styles/bind";
import styles from "./note-form.module.css";
import { Dispatch, SetStateAction } from "react";
import { Note, NotePrimitives } from "@/features/notes/domain/note.entity";
import { DateTime } from "@/core/datetime/datetime";
import { NoteFormHeader } from "./note-form-header.component";
import { NoteColorInput } from "../note-color-input/note-color-input.component";
const cx = bind(styles);

interface Props {
  onSubmit: (note: Note) => void;
  note: NotePrimitives;
  setNote: Dispatch<SetStateAction<NotePrimitives>>;
}

export const NoteForm = (props: Props) => {
  const { onSubmit, note, setNote } = props;
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(
      Note.fromPrimitives({ ...note, lastEditionDate: DateTime.fromNow() })
    );
  };

  return (
    <form className={cx("wrapper")} onSubmit={submit}>
      <NoteFormHeader />
      <NoteColorInput
        initialValue={note.color}
        onSelect={(color) => setNote((prev) => ({ ...prev, color: color }))}
        className={cx("color-input")}
      />
      <input
        id="title"
        name="title"
        className={cx("title-input")}
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={(e) =>
          setNote((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <textarea
        id="content"
        name="content"
        className={cx("content-input")}
        placeholder="Content..."
        spellCheck
        value={note.content}
        onChange={(e) =>
          setNote((prev) => ({ ...prev, content: e.target.value }))
        }
      ></textarea>
    </form>
  );
};

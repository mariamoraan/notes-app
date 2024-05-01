"use client";

import { bind } from "@/core/styles/bind";
import styles from "./note-form.module.css";
import { Dispatch, SetStateAction, useState } from "react";
import { Note, NotePrimitives } from "@/features/notes/domain/note.entity";
import { DateTime } from "@/core/datetime/datetime";
import { NoteFormHeader } from "./note-form-header.component";
import { NoteColorInput } from "../note-color-input/note-color-input.component";
const cx = bind(styles);

interface Props {
  onSubmit: (note: Note) => Promise<void>;
  note: NotePrimitives;
  setNote: Dispatch<SetStateAction<NotePrimitives>>;
  actions?: React.ReactNode;
}

export const NoteForm = (props: Props) => {
  const { onSubmit, note, setNote, actions } = props;
  const [isLoading, setIsLoading] = useState(false);
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    await onSubmit(
      Note.fromPrimitives({ ...note, lastEditionDate: DateTime.fromNow() })
    );
    setIsLoading(false);
  };

  return (
    <form className={cx("wrapper")} onSubmit={submit}>
      <NoteFormHeader isLoading={isLoading} actions={actions} />
      <NoteColorInput
        initialValue={note.color}
        onSelect={(color) => setNote((prev) => ({ ...prev, color: color }))}
        className={cx("color-input")}
        data-testid="note-color-input"
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
        data-testid="note-title-input"
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
        data-testid="note-content-input"
      ></textarea>
    </form>
  );
};

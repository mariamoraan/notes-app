"use client";

import { bind } from "@/core/styles/bind";
import { NoteForm } from "../note-form/note-form.component";
import styles from "./editable-note.module.css";
import { Note, NotePrimitives } from "@/features/notes/domain/note";
import { ArrowLeftIcon, SaveIcon } from "@/core/components/icons/icons";
import { useGetUseCase } from "@/core/hooks/use-get-use-case";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GetNoteQuery } from "@/features/notes/application/get-note.query";

const cx = bind(styles);

interface Props {
  id: string;
}

export const EditableNote = (props: Props) => {
  const { id } = props;
  const router = useRouter();
  const { execute: getNote, result: noteRes } = useGetUseCase(GetNoteQuery);
  const voidNote = {
    id: "",
    title: "",
    content: "",
    color: Note.noteColors.PINK.name,
  };
  const [note, setNote] = useState<NotePrimitives>(voidNote);

  useEffect(() => {
    getNote(id);
  }, [getNote, id]);

  useEffect(() => {
    setNote(noteRes ? noteRes.toPrimitives() : voidNote);
  }, [noteRes]);

  const onSubmit = async (note: Note) => {
    //await execute(note);
    router.back();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <button
          onClick={() => router.back()}
          className={cx(["icon-button", "back-button"])}
        >
          <ArrowLeftIcon size={24} />
        </button>
        <button
          onClick={() => onSubmit(Note.fromPrimitives(note))}
          className={cx(["icon-button", "save-button"])}
        >
          <SaveIcon size={24} />
          Save
        </button>
      </div>
      <NoteForm onSubmit={onSubmit} note={note} setNote={setNote} />
    </div>
  );
};

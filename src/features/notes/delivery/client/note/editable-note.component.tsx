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
import { UpdateNoteCommand } from "@/features/notes/application/update-note.command";

const cx = bind(styles);

interface Props {
  id: string;
}

const voidNote = {
  id: "",
  title: "",
  content: "",
  color: Note.noteColors.PINK.name,
};

export const EditableNote = (props: Props) => {
  const { id } = props;
  const router = useRouter();
  const { execute: getNote, result: currentNote } = useGetUseCase(GetNoteQuery);
  const { execute: updateNote } = useGetUseCase(UpdateNoteCommand);

  const [note, setNote] = useState<NotePrimitives>(voidNote);

  useEffect(() => {
    getNote(id);
  }, [getNote, id]);

  useEffect(() => {
    setNote(currentNote ? currentNote.toPrimitives() : voidNote);
  }, [currentNote]);

  const onSubmit = async (note: Note) => {
    updateNote(note);
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

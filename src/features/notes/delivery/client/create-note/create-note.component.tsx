"use client";

import { bind } from "@/core/styles/bind";
import { NoteForm } from "../note-form/note-form.component";
import styles from "./create-note.module.css";
import { Note, NotePrimitives } from "@/features/notes/domain/note";
import { useGetUseCase } from "@/core/hooks/use-get-use-case";
import { CreateNoteCommand } from "@/features/notes/application/create-note.command";
import { useState } from "react";
import { DateTime } from "@/core/datetime/datetime";
import { UUID } from "@/core/uuid/uuid";
import { NoteColor } from "@/features/notes/domain/value-objects/note-color.value-object";

const cx = bind(styles);

export const CreateNote = () => {
  const { execute } = useGetUseCase(CreateNoteCommand);
  const [note, setNote] = useState<NotePrimitives>({
    id: UUID.generateUUID(),
    title: "",
    content: "",
    color: NoteColor.noteColors.PINK,
    creationDate: DateTime.fromNow(),
    lastEditionDate: DateTime.fromNow(),
  });
  const onSubmit = async (note: Note) => {
    if (!note.title || !note.content) return;
    await execute(note);
  };

  return (
    <div className={cx("wrapper")}>
      <NoteForm onSubmit={onSubmit} note={note} setNote={setNote} />
    </div>
  );
};

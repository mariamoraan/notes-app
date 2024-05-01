"use client";

import { bind } from "@/core/styles/bind";
import { NoteForm } from "../note-form/note-form.component";
import styles from "./edite-note.module.css";
import { Note, NotePrimitives } from "@/features/notes/domain/note.entity";
import { useGetUseCase } from "@/core/hooks/use-get-use-case";
import { useEffect, useState } from "react";
import { GetNoteQuery } from "@/features/notes/application/get-note.query";
import { UpdateNoteCommand } from "@/features/notes/application/update-note.command";
import { DateTime } from "@/core/datetime/datetime";
import { NoteColor } from "@/features/notes/domain/value-objects/note-color.value-object";
import { NoteFormSkeleton } from "../note-form/note-form.skeleton.component";
import { DeleteNoteButton } from "../delete-note-button/delete-note-button.component";

const cx = bind(styles);

interface Props {
  id: string;
}

const voidNote: NotePrimitives = {
  id: "",
  title: "",
  content: "",
  color: NoteColor.noteColors.PINK,
  creationDate: DateTime.fromNow(),
  lastEditionDate: DateTime.fromNow(),
};

export const EditeNote = (props: Props) => {
  const { id } = props;
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
    await updateNote(note);
  };

  return (
    <div className={cx("wrapper")}>
      {note.id ? (
        <NoteForm
          onSubmit={onSubmit}
          note={note}
          setNote={setNote}
          actions={<DeleteNoteButton id={note.id} />}
        />
      ) : (
        <NoteFormSkeleton />
      )}
    </div>
  );
};

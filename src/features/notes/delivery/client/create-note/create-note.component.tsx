"use client";

import { bind } from "@/core/styles/bind";
import { NoteForm } from "../note-form/note-form.component";
import styles from "./create-note.module.css";
import { Note, NotePrimitives } from "@/features/notes/domain/note";
import { ArrowLeftIcon, SaveIcon } from "@/core/components/icons/icons";
import { useGetUseCase } from "@/core/hooks/use-get-use-case";
import { CreateNoteCommand } from "@/features/notes/application/create-note.command";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Datetime } from "@/core/datetime/datetime";

const cx = bind(styles);

export const CreateNote = () => {
  const router = useRouter();
  const { execute } = useGetUseCase(CreateNoteCommand);
  const [note, setNote] = useState<NotePrimitives>({
    id: "",
    title: "",
    content: "",
    color: Note.noteColors.PINK.name,
    creationDate: Datetime.fromNow(),
    lastEditionDate: Datetime.fromNow(),
  });
  const onSubmit = async (note: Note) => {
    await execute(note);
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
          onClick={() =>
            onSubmit(
              Note.fromPrimitives({
                ...note,
                lastEditionDate: Datetime.fromNow(),
              })
            )
          }
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

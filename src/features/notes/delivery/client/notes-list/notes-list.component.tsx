"use client";

import { useGetUseCase } from "@/core/hooks/use-get-use-case";
import { GetNotesQuery } from "@/features/notes/application/get-notes.query";
import { Note } from "@/features/notes/domain/note";
import { useEffect, useState } from "react";
import { NoteCard } from "../../server/note-card/note-card.component";
import styles from "./notes-list.module.css";
import { bind } from "@/core/styles/bind";
const cx = bind(styles);

export const NotesList = () => {
  const { execute, result } = useGetUseCase(GetNotesQuery);
  const [notes, setNotes] = useState<Note[]>(result || []);

  useEffect(() => {
    execute();
  }, [execute]);

  useEffect(() => {
    setNotes(result || []);
  }, [result]);

  return (
    <ul className={cx("wrapper")}>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteCard note={note} />
        </li>
      ))}
    </ul>
  );
};

"use client";

import { useGetUseCase } from "@/core/hooks/use-get-use-case";
import { GetNotesQuery } from "@/features/notes/application/get-notes.query";
import { Note } from "@/features/notes/domain/note";
import { useEffect, useState } from "react";

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
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
};

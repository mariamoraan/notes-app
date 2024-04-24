"use client";

import { NotesProvider } from "../../context/notes.context";
import { AddNoteButton } from "../add-note-button/add-note-button.component";
import { NotesList } from "../notes-list/notes-list.component";
import { Searcher } from "../searcher/searcher.component";

export const Notes = () => {
  return (
    <NotesProvider>
      <Searcher />
      <NotesList />
      <AddNoteButton />
    </NotesProvider>
  );
};

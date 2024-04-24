"use client";

import { NoteCard } from "../../server/note-card/note-card.component";
import styles from "./notes-list.module.css";
import { bind } from "@/core/styles/bind";
import { useNotes } from "../../context/notes.context";
const cx = bind(styles);

export const NotesList = () => {
  const { filteredNotes, orderNotes } = useNotes();
  return (
    <ul className={cx("wrapper")}>
      {orderNotes(filteredNotes, "DESC").map((note) => (
        <li key={note.id}>
          <NoteCard note={note} />
        </li>
      ))}
    </ul>
  );
};

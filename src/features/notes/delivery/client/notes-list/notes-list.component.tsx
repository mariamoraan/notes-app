"use client";

import { NoteCard } from "../../server/note-card/note-card.component";
import styles from "./notes-list.module.css";
import { bind } from "@/core/styles/bind";
import { useNotes } from "../../context/notes.context";
import { CardsSkeleton } from "@/core/components/skeleton/cards-skeleton/cards-skeleton.component";
const cx = bind(styles);

export const NotesList = () => {
  const { filteredNotes, orderNotes, isLoading } = useNotes();
  if (isLoading) return <CardsSkeleton className={cx("wrapper")} />;
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

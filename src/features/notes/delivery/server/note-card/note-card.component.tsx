import { Note } from "@/features/notes/domain/note";
import styles from "./note-card.module.css";
import { bind } from "@/core/styles/bind";
import Link from "next/link";
const cx = bind(styles);

interface Props {
  note: Note;
}

export const NoteCard = (props: Props) => {
  const { note } = props;
  return (
    <Link href={`note/${note.id}`}>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <p>{note.title}</p>
        </div>
        <div className={cx("content")}>
          <p className={cx("text")}>{note.content}</p>
          <div
            className={cx("color-tag")}
            style={{ background: Note.noteColors[note.color].color }}
          />
        </div>
      </div>
    </Link>
  );
};

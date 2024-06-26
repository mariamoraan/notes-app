import { Note } from "@/features/notes/domain/note.entity";
import styles from "./note-card.module.css";
import { bind } from "@/core/styles/bind";
import Link from "next/link";
import { TimeIcon } from "@/core/components/icons/icons";
import { NoteColor } from "@/features/notes/domain/value-objects/note-color.value-object";
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
        </div>
        <div className={cx("card-footer")}>
          <div className={cx("edited")}>
            <TimeIcon />
            {note.lastEditionDate.toIsoDate()}
          </div>
          <div
            className={cx("color-tag")}
            style={{
              background: NoteColor.noteColors[note.color.value.name].color,
            }}
          />
        </div>
      </div>
    </Link>
  );
};

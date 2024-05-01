"use client";

import { bind } from "@/core/styles/bind";
import styles from "./delete-note-button.module.css";
import { DeleteIcon } from "@/core/components/icons/icons";
import { useGetUseCase } from "@/core/hooks/use-get-use-case";
import { DeleteNoteCommand } from "@/features/notes/application/delete-note.command";
import { useRouter } from "next/navigation";

const cx = bind(styles);

interface Props {
  id: string;
}

export const DeleteNoteButton: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const { execute } = useGetUseCase(DeleteNoteCommand);
  const handleDeleteNote = async () => {
    await execute(id);
    router.back();
  };
  return (
    <button
      type="button"
      onClick={handleDeleteNote}
      className={cx("icon-button")}
      data-testid="save-note-button"
    >
      <DeleteIcon size={24} />
    </button>
  );
};

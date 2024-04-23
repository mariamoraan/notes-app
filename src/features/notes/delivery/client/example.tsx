"use client";
import { useGetUseCase } from "../../../../core/hooks/use-get-use-case";
import { CreateNote } from "../../application/create-note.command";
import { Note } from "../../domain/note";

export const Example = () => {
  const { isLoading, execute } = useGetUseCase(CreateNote);
  const onClick = () => {
    const note = Note.fromPrimitives({
      id: "",
      title: "La revolución francesa",
    });
    execute(note);
  };
  return <button onClick={onClick}>Create Note</button>;
};

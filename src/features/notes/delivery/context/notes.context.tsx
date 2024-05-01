import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Note } from "../../domain/note.entity";
import { useGetUseCase } from "@/core/hooks/use-get-use-case";
import { GetNotesQuery } from "../../application/get-notes.query";
import { DateTime } from "@/core/datetime/datetime";

export interface NotesState {
  notes: Note[];
  filteredNotes: Note[];
  filterNotes: (filter: string) => void;
  orderNotes: (notes: Note[], order: "ASC" | "DESC") => Note[];
  isLoading: boolean;
}

export const NotesContext = createContext<NotesState>({
  notes: [],
  filteredNotes: [],
  filterNotes: () => {
    throw Error("filterNotes() is not defined");
  },
  orderNotes: () => {
    throw Error("orderNotes() is not defined");
  },
  isLoading: false,
});

export const NotesProvider: FC<PropsWithChildren> = (props) => {
  const { execute, result, isLoading } = useGetUseCase(GetNotesQuery);

  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);

  const filterNotes = (filter: string) => {
    setFilteredNotes(notes.filter((note) => note.title.includes(filter)));
  };

  const orderNotes = (notes: Note[], order: "ASC" | "DESC" = "ASC") => {
    const orderedNotesAsc = notes.sort((note1, note2) =>
      DateTime.compare(note1.lastEditionDate, note2.lastEditionDate)
    );
    if (order === "ASC") return orderedNotesAsc;
    return orderedNotesAsc.reverse();
  };

  useEffect(() => {
    execute();
  }, [execute]);

  useEffect(() => {
    setNotes(result || []);
    setFilteredNotes(result || []);
  }, [result]);

  return (
    <NotesContext.Provider
      value={{ notes, filteredNotes, filterNotes, orderNotes, isLoading }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext<NotesState>(NotesContext);

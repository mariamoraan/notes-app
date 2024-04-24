import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Note } from "../../domain/note";
import { useGetUseCase } from "@/core/hooks/use-get-use-case";
import { GetNotesQuery } from "../../application/get-notes.query";

export interface NotesState {
  notes: Note[];
  filteredNotes: Note[];
  filterNotes: (filter: string) => void;
}

export const NotesContext = createContext<NotesState>({
  notes: [],
  filteredNotes: [],
  filterNotes: () => {
    throw Error("filterNotes() is not defined");
  },
});

export const NotesProvider: FC<PropsWithChildren> = (props) => {
  const { execute, result } = useGetUseCase(GetNotesQuery);

  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);

  const filterNotes = (filter: string) => {
    setFilteredNotes(notes.filter((note) => note.title.includes(filter)));
  };

  useEffect(() => {
    execute();
  }, [execute]);

  useEffect(() => {
    setNotes(result || []);
    setFilteredNotes(result || []);
  }, [result]);

  return (
    <NotesContext.Provider value={{ notes, filteredNotes, filterNotes }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext<NotesState>(NotesContext);

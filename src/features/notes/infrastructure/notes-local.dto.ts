export interface NoteLocalDTO {
  id: string;
  title: string;
  content: string;
  color: { name: string; color: string };
  creationDate: string;
  lastEditionDate: string;
}

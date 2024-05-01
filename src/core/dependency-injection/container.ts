import { container } from "tsyringe";
import { NOTES_REPOSITORY } from "./injection-tokens";
import { NotesLocalRepostory } from "@/features/notes/infrastructure/notes-local-repository";

export const injectAppDependencies = () => {
  container.registerSingleton(NOTES_REPOSITORY, NotesLocalRepostory);
};

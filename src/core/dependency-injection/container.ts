import { container } from "tsyringe";
import { NOTES_REPOSITORY } from "./injection-tokens";
import { NotesFakeRepository } from "@/features/notes/infrastructure/notes-fake-repository";

export const injectAppDependencies = () => {
  container.registerSingleton(NOTES_REPOSITORY, NotesFakeRepository);
};

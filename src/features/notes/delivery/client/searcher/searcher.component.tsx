"use client";
import { bind } from "@/core/styles/bind";
import styles from "./searcher.module.css";
import { SearchIcon } from "@/core/components/icons/icons";
import { useNotes } from "../../context/notes.context";
const cx = bind(styles);

export const Searcher = () => {
  const { filterNotes } = useNotes();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className={cx("wrapper")}>
      <SearchIcon />
      <input
        className={cx("input")}
        placeholder="Search note..."
        onChange={(e) => filterNotes(e.target.value)}
      />
    </form>
  );
};

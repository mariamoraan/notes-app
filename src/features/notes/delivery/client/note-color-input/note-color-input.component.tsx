"use client";

import { useEffect, useRef, useState } from "react";
import { bind } from "@/core/styles/bind";
import styles from "./note-color-input.module.css";
import {
  NoteColor,
  NoteColorValue,
} from "@/features/notes/domain/value-objects/note-color.value-object";
import useOutsideClick from "./use-outside-click.hook";
import { CheckIcon } from "@/core/components/icons/icons";
const cx = bind(styles);

interface Props {
  onSelect: (item: NoteColorValue) => void;
  initialValue: NoteColorValue;
  className?: string;
}

export const NoteColorInput = (props: Props) => {
  const { onSelect, initialValue, className = "" } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] =
    useState<NoteColorValue>(initialValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const handleChange = (item: NoteColorValue) => {
    setSelectedItem(item);
    onSelect && onSelect(item);
    setIsOpen(false);
  };

  const dropdownStyle = isOpen ? "open-dropdown" : "closed-dropdown";

  return (
    <div ref={dropdownRef} className={cx(["wrapper", className])}>
      <button
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cx("dropdown-toggle-button")}
        style={{ background: selectedItem.color }}
      />
      {isOpen ? (
        <div aria-label="Dropdown menu" className={cx(dropdownStyle)}>
          <ul role="menu" className={cx("options")}>
            {NoteColor.noteColorsList.map((item) => (
              <li
                key={item.name}
                onClick={() => handleChange(item)}
                className={cx("option")}
                style={{ background: item.color }}
              >
                {item.name === selectedItem.name && <CheckIcon />}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./message-smile-square.module.css";

export type MessageSmileSquareType = {
  className?: string;
  indicator?: boolean;

  /** Variant props */
  iconOnly?: boolean;
  selected?: boolean;
};

const MessageSmileSquare: NextPage<MessageSmileSquareType> = ({
  className = "",
  iconOnly = false,
  selected = false,
  indicator = true,
}) => {
  return (
    <button
      className={[styles.menuItem, className].join(" ")}
      data-iconOnly={iconOnly}
      data-selected={selected}
    >
      <Image
        className={styles.messageSmileSquareIcon}
        loading="lazy"
        width={20}
        height={20}
        sizes="100vw"
        alt=""
        src="/message-smile-square.svg"
      />
      {!!indicator && <Box className={styles.indicator} />}
    </button>
  );
};

export default MessageSmileSquare;

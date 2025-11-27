import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./clock.module.css";

export type ClockType = {
  className?: string;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  label?: string;

  /** Variant props */
  type?: string;
};

const Clock: NextPage<ClockType> = ({
  className = "",
  type = "Default",
  trailingIcon = false,
  leadingIcon = true,
  label = "Awaiting signature",
}) => {
  return (
    <Box className={[styles.badge, className].join(" ")} data-type={type}>
      {!!leadingIcon && (
        <Image
          className={styles.clockIcon}
          loading="lazy"
          width={18}
          height={18}
          sizes="100vw"
          alt=""
          src="/clock.svg"
        />
      )}
      <Box className={styles.labelContainer}>
        <div className={styles.label}>{label}</div>
      </Box>
      {!!trailingIcon && (
        <Image
          className={styles.chevronRightIcon}
          width={18}
          height={18}
          sizes="100vw"
          alt=""
        >
          <Box className={styles.box} />
        </Image>
      )}
    </Box>
  );
};

export default Clock;

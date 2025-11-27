import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./profile-picture.module.css";

export type ProfilePictureType = {
  className?: string;
  image1: string;

  /** Variant props */
  image?: 10 | 13;
  joined?: boolean;
  type?: "F" | "M";
};

const ProfilePicture: NextPage<ProfilePictureType> = ({
  className = "",
  image = 1,
  joined = true,
  type = "M",
  image1,
}) => {
  return (
    <Box
      className={[styles.root, className].join(" ")}
      data-image={image}
      data-joined={joined}
      data-type={type}
    >
      <Image
        className={styles.imageIcon}
        loading="lazy"
        width={40}
        height={40}
        sizes="100vw"
        alt=""
        src={image1}
      />
    </Box>
  );
};

export default ProfilePicture;

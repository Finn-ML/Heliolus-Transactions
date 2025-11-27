import type { NextPage } from "next";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import ProfilePicture from "./profile-picture";
import MessageSmileSquare from "./message-smile-square";
import Clock from "./clock";
import DotsHorizontal from "./dots-horizontal";
import styles from "./transaction-card.module.css";

export type TransactionCardType = {
  className?: string;
  profilePictureImage?: 10 | 13;
  profilePictureImage1?: 10 | 13;
  profilePictureJoined?: boolean;
  profilePictureJoined1?: boolean;
  profilePictureType?: "F" | "M";
  profilePictureType1?: "F" | "M";
  iconOnly?: boolean;
  selected?: boolean;
  indicator?: boolean;
  type?: string;
  label?: string;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  iconOnly1?: boolean;
  state?: string;
  type1?: string;
};

const TransactionCard: NextPage<TransactionCardType> = ({
  className = "",
  profilePictureImage = 10,
  profilePictureImage1 = 10,
  profilePictureJoined,
  profilePictureJoined1,
  profilePictureType = "F",
  profilePictureType1 = "F",
  iconOnly,
  selected,
  indicator,
  type,
  label,
  trailingIcon,
  leadingIcon,
  iconOnly1,
  state,
  type1,
}) => {
  return (
    <Box className={[styles.transactionCard, className].join(" ")}>
      <Image
        className={styles.cardIcon}
        loading="lazy"
        width={240}
        height={160}
        sizes="100vw"
        alt=""
        src="/Card@2x.png"
      />
      <section className={styles.frameParent}>
        <Box className={styles.frameGroup}>
          <Box className={styles.frameContainer}>
            <Box className={styles.beverlyWaySpringfieldParent}>
              <div className={styles.beverlyWaySpringfield}>
                56 Elm Drive, Brookside
              </div>
              <div className={styles.washingtonDc}>Washington, DC</div>
            </Box>
            <Box className={styles.listedForParent}>
              <div className={styles.listedFor}>Listed for</div>
              <div className={styles.priceValue}>$375,000</div>
            </Box>
          </Box>
          <Box className={styles.profileCard}>
            <Box className={styles.userInfo}>
              <Box className={styles.userInfo2}>
                <Box className={styles.profileFields}>
                  <ProfilePicture
                    image={profilePictureImage}
                    joined={profilePictureJoined}
                    type={profilePictureType}
                    image1="/Image@2x.png"
                  />
                  <Box className={styles.userData}>
                    <div className={styles.vanessaMartinez}>Sophia Johnson</div>
                    <div className={styles.owner}>Owner</div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.userInfo2}>
                <Box className={styles.profileFields}>
                  <ProfilePicture
                    image={profilePictureImage1}
                    joined={profilePictureJoined1}
                    type={profilePictureType1}
                    image1="/Image1@2x.png"
                  />
                  <Box className={styles.userData}>
                    <div className={styles.vanessaMartinez}>Adam Jenkins</div>
                    <div className={styles.owner}>Buyer</div>
                  </Box>
                </Box>
              </Box>
            </Box>
            <MessageSmileSquare
              iconOnly={iconOnly}
              selected={selected}
              indicator={indicator}
            />
          </Box>
        </Box>
        <Box className={styles.frameChild} />
        <Box className={styles.frameDiv}>
          <Box className={styles.badgeParent}>
            <Clock
              type={type}
              trailingIcon={trailingIcon}
              leadingIcon={leadingIcon}
              label={label}
            />
            <div className={styles.listedFor}>Updated 2d ago</div>
          </Box>
          <Box className={styles.ctaParent}>
            <Button
              className={styles.cta}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#ebeffb",
                fontSize: "16",
                background: "#003ae2",
                border: "#1a4ee5 solid 1px",
                borderRadius: "10px",
                "&:hover": { background: "#003ae2" },
                width: 192,
                height: 48,
              }}
            >
              View contract
            </Button>
            <DotsHorizontal iconOnly={iconOnly1} state={state} type={type1} />
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default TransactionCard;

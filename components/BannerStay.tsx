import React from "react";
import Image from "next/image";

import styles from "@/styles/BannerStay.module.scss";

import footerCta from "../assets/images/footer-cta.webp";

export default function BannerStay() {
  return (
    <div className={`container ${styles.bannerstay}`}>
      <div className={`${styles.bannerstay__photowrap} hide-in-mobile`}>
        <Image
          src={footerCta}
          alt="logo linegoods"
          className={`absolute bottom-0 ${styles.bannerstay__photo}`}
          width={467}
          height={452}
        />
      </div>
      <div
        className={`py-20 px-10 bg-blue-690 text-white relative ${styles.bannerstay__wrapitem}`}
      >
        <div className={`${styles.bannerstay__title}`}>
          Mulai investasi sekarang
        </div>
        <div className={`${styles.bannerstay__desc}`}>
          Daftar dalam hitungan menit, langsung mulai investasi.
        </div>
        <button
          className={`${styles.bannerstay__btn} text-blue-680 rounded-lg font-semibold`}
        >
          Download Sekarang
        </button>
      </div>
    </div>
  );
}

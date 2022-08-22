import React from "react";
import Image from "next/image";

import styles from "@/styles/Footer.module.scss";

import BannerStay from "./BannerStay";
import BannerOverLay from "./BannerOverlay";

export default function Footer() {
  return (
    <>
      <BannerStay />
      <footer className={`${styles.footer} bg-gray-60 pb-20 hide-in-mobile`}>
        <div className={styles.footerItem}>
          <div className="container">
            <div className="flex flex-basis static">
              <div className={`basis-1/4 ${styles.footerLogo}`}>
                <div className={`${styles.footerImageWrap} mb-10`}>
                  <Image src="/logo.svg" width={75} height={24} alt="logo" />
                </div>
                <div className="font-semibold text-sm pb-2">
                  Terdaftar dan Diawasi
                </div>
              </div>
              <div className={`basis-1/4 ${styles.footerSocial}`}>
                <div className="font-semibold text-base pb-6">
                  Alamat Perusahaan
                </div>

                <div className="font-semibold text-sm pb-2">Kantor Pusat</div>
                <div className="text-sm pb-6 text-neutral-950 opacity-75">
                  The City Tower Lantai 27 Jalan M.H Thamrin No.81, Jakarta
                  Pusat, DKI Jakarta 10310 Indonesia
                </div>

                <div className="font-semibold text-sm pb-2">
                  Operasional & Customer Support
                </div>
                <div className="text-sm pb-6 text-neutral-950 opacity-75">
                  Rukan Permata Senayan Blok H1-H2 Jalan Tentara Pelajar,
                  Jakarta Selatan DKI Jakarta 12210 Indonesia
                </div>
              </div>
              <div className={`basis-1/4 ${styles.footerSocial}`}>
                <div className="font-semibold text-base pb-6">Pintu</div>
                <ul className="list-unstyled grid gap-y-6">
                  <li className="text-sm">Produk</li>
                  <li className="text-sm">Harga Crypto</li>
                  <li className="text-sm">Biaya Transaksi</li>
                  <li className="text-sm">OTC</li>
                  <li className="text-sm">FAQ</li>
                  <li className="text-sm">Blog</li>
                </ul>
              </div>
              <div className={`basis-1/4 ${styles.footerCustomer}`}>
                <div className="font-semibold text-base pb-6">Perusahaan</div>
                <ul className="list-unstyled grid gap-y-6">
                  <li className="text-sm">Tentang</li>
                  <li className="text-sm">Hubungi Kami</li>
                  <li className="text-sm">Karier</li>
                  <li className="text-sm">Karier Engineering</li>
                </ul>
              </div>
            </div>
            <div className="border-b mt-10 mb-2 border-neutral-940"></div>
            <div className="text-xs text-neutral-950 opacity-75 mb-2">
              © 2022 PT. Pintu Kemana Saja. All Rights Reserved.
            </div>
            <div className="text-xs text-neutral-950 opacity-50 mb-4">
              Perdagangan aset crypto merupakan aktivitas beresiko tinggi.
              Kinerja pada masa lalu tidak mencerminkan kinerja di masa depan.
              Kinerja historikal, expected return dan proyeksi probabilitas
              disediakan untuk tujuan informasi dan illustrasi. Semua keputusan
              perdagangan aset crypto merupakan keputusan independen oleh
              pengguna.
            </div>
          </div>
        </div>
      </footer>
      <BannerOverLay />
    </>
  );
}

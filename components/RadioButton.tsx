import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandSparkles,
  faLandmark,
  faGamepad,
  faChartLine,
  faArrowRightArrowLeft,
  faLayerGroup,
  faSackDollar,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";

import { IRadioButton } from "types";

import styles from "@/styles/RadioButton.module.scss";

const categoryList = [
  { id: 7, label: "Terbaru", value: "", icon: faWandSparkles },
  { id: 1, label: "DeFi", value: "lipstick", icon: faLandmark },
  { id: 2, label: "NFT/Gaming", value: "blush", icon: faGamepad },
  { id: 3, label: "CEX", value: "bronzer", icon: faChartLine },
  { id: 4, label: "DEX", value: "eyeshadow", icon: faArrowRightArrowLeft },
  { id: 5, label: "Layer-1", value: "foundation", icon: faLayerGroup },
  { id: 6, label: "Infastructure", value: "mascara", icon: faLandmark },
  { id: 8, label: "Lending", value: "mascara", icon: faSackDollar },
  { id: 9, label: "Layer-2", value: "mascara", icon: faLandmark },
  {
    id: 10,
    label: "Ekosistem Stablecoin",
    value: "mascara",
    icon: faScaleBalanced,
  },
];

export const RadioButton: FC<IRadioButton> = ({ onChange }) => {
  return (
    <div className={styles.radiosContainer}>
      <div className={styles.radiosWrap}>
        <div className={`${styles.radios} flex`} onChange={onChange}>
          {categoryList.map((category) => (
            <div
              className="p-2 mr-2 bg-blue-100/100 rounded-lg"
              key={category.id}
            >
              <Link href="/">
                <a className="text-blue-650/100 flex items-center">
                  <FontAwesomeIcon icon={category.icon} className="mr-2" />
                  <div className="text-xs font-semibold">{category.label}</div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioButton;

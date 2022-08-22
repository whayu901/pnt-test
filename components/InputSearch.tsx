import { FC, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";

import { IInputSearch } from "types";

import { svgExceptIcon } from "../helpers";
import inputStylesItem from "../styles/InputSearch.module.scss";

export const InputSearch: FC<IInputSearch> = ({ payload }) => {
  const [showInputPopup, setShowInputPopup] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowInputPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const onInputSearchClick = () => {
    setShowInputPopup(!showInputPopup);
  };

  return (
    <>
      <div className={`hide-in-desktop flex justify-end`}>
        <FontAwesomeIcon icon={faSearch} className={`text-zinc-350/100`} />
      </div>
      <div className={`hide-in-mobile`}>
        <div
          className={`${inputStylesItem.inputsearch} relative`}
          onClick={onInputSearchClick}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className={`absolute ${inputStylesItem.inputsearch__icon} text-zinc-350/100`}
          />
          <div
            className={`${inputStylesItem.inputsearch__item} bg-gray-60/100 `}
          />
          <div
            className={`absolute text-zinc-350/100 text-sm ${inputStylesItem.inputsearch__text}`}
          >
            Cari aset di Pintu...
          </div>
        </div>
        {showInputPopup && (
          <div
            className={`${inputStylesItem.inputsearch__popup} bg-white rounded-lg border`}
            ref={ref}
          >
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className={`absolute ${inputStylesItem.inputsearch__popupicon} text-zinc-350/100`}
              />
              <input
                className={`${inputStylesItem.inputsearch__popupitem} text-zinc-350/100 text-sm bg-gray-60/100 `}
                placeholder="Cari aset di Pintu.."
              />
            </div>

            <ul className={inputStylesItem.inputsearch__list}>
              {payload.map((payload, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between p-2">
                    <div className="flex items-center">
                      <div className="pr-2">
                        <ReactSVG
                          src={`${payload.logo}?type=svg`}
                          beforeInjection={(svg) => {
                            svg.classList.add("svg-class-name");
                            const firstGElementG: NodeListOf<Element> =
                              svg.querySelectorAll("g");
                            firstGElementG.forEach((setFirst) =>
                              setFirst.setAttribute("fill", `${payload.color}`)
                            );

                            if (!svgExceptIcon.includes(payload.name)) {
                              const firstGElementPath: NodeListOf<Element> =
                                svg.querySelectorAll("path");
                              firstGElementPath.forEach((setFirst) =>
                                setFirst.setAttribute(
                                  "fill",
                                  `${payload.color}`
                                )
                              );
                            }
                          }}
                        />
                      </div>
                      <div className="ml-2">
                        <div className="font-semibold">{payload.name}</div>
                      </div>
                    </div>
                    <div className="text-zinc-350 ">
                      {payload.currencyGroup}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default InputSearch;

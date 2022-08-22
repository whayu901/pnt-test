/* eslint-disable react-hooks/exhaustive-deps */

import { FC, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";
import { isEqual, isEmpty } from "lodash";

import { ITable } from "types";

import Select from "@/components/Select";
import {
  checkMinus,
  currencyFormat,
  svgExceptIcon,
  usePrevious,
} from "../../helpers";

const LatestPriceComponent = (props: any) => {
  const { indexPrice, latestPrice, start, latestPriceVal } = props;
  if (start[indexPrice] === latestPriceVal[indexPrice]) {
    return (
      <div className="font-semibold text-black-450">
        Rp.
        {currencyFormat(latestPrice)}
      </div>
    );
  }
  if (start[indexPrice] > latestPriceVal[indexPrice]) {
    return (
      <div className="font-semibold text-red-450">
        Rp.
        {currencyFormat(latestPrice)}
      </div>
    );
  }
  return (
    <div className="font-semibold text-green-450">
      Rp.
      {currencyFormat(latestPrice)}
    </div>
  );
};

export const MobileTableComp: FC<ITable> = ({ payload, latestPriceVal }) => {
  const prevLatestPriceVal = usePrevious(latestPriceVal);
  const [start, setStart] = useState([] as any);

  const [timeValue, setTimeValue] = useState("day");
  const sortList = [
    { id: 3, label: "24 JAM", value: "day" },
    { id: 1, label: "1 MGG", value: "week" },
    { id: 2, label: "1 BLN", value: "month" },
    { id: 4, label: "1 THN", value: "year" },
  ];

  const onSelectTimeChange = (e: any) => {
    setTimeValue(e.target.value);
  };

  useEffect(() => {
    if (!isEqual(prevLatestPriceVal, latestPriceVal)) {
      if (!isEmpty(prevLatestPriceVal)) {
        setStart(prevLatestPriceVal);
      }
    }
  }, [latestPriceVal, prevLatestPriceVal]);

  return (
    <div className="hide-in-desktop">
      <div className="mobiletable__title flex items-center justify-between border-y border-gray-200 p-4">
        <div className="text-xs font-semibold">CRYPTO</div>
        <div className="">
          <Select onChange={onSelectTimeChange} selectList={sortList} />
        </div>
      </div>
      {!isEmpty(payload) &&
        payload.map((payloadItem, index) => (
          <div
            className="flex items-center justify-between border-b border-gray-200  p-4"
            key={payloadItem.pair}
          >
            <div className="flex items-center">
              <div className="pr-4">
                <ReactSVG
                  src={`${payloadItem.logo}?type=svg`}
                  beforeInjection={(svg) => {
                    svg.classList.add("svg-class-name");
                    const firstGElementG: NodeListOf<Element> =
                      svg.querySelectorAll("g");
                    firstGElementG.forEach((setFirst) =>
                      setFirst.setAttribute("fill", `${payloadItem.color}`)
                    );

                    if (!svgExceptIcon.includes(payloadItem.name)) {
                      const firstGElementPath: NodeListOf<Element> =
                        svg.querySelectorAll("path");
                      firstGElementPath.forEach((setFirst) =>
                        setFirst.setAttribute("fill", `${payloadItem.color}`)
                      );
                    }
                  }}
                />
              </div>
              <div className="ml-2">
                <div className="font-semibold">{payloadItem.name}</div>
                <div className="text-zinc-350 ">
                  {payloadItem.currencyGroup}
                </div>
              </div>
            </div>

            <div className="text-right">
              <LatestPriceComponent
                latestPrice={payloadItem.latestPrice}
                indexPrice={index}
                latestPriceVal={latestPriceVal}
                start={start}
              />

              {timeValue === "day" && (
                <div
                  className={`font-semibold ${
                    payloadItem.day && checkMinus(payloadItem.day)
                      ? "text-red-450"
                      : "text-green-450"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={
                      payloadItem.day && checkMinus(payloadItem.day)
                        ? faCaretDown
                        : faCaretUp
                    }
                    className={`${
                      payloadItem.day ? "visible" : "invisible"
                    } mr-2`}
                  />
                  {payloadItem.day && checkMinus(payloadItem.day)
                    ? payloadItem.day.replace("-", "")
                    : payloadItem.day || "0.00"}
                  %
                </div>
              )}

              {timeValue === "week" && (
                <div
                  className={`font-semibold ${
                    payloadItem.week && checkMinus(payloadItem.week)
                      ? "text-red-450"
                      : "text-green-450"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={
                      payloadItem.week && checkMinus(payloadItem.week)
                        ? faCaretDown
                        : faCaretUp
                    }
                    className={`${
                      payloadItem.week ? "visible" : "invisible"
                    } mr-2`}
                  />
                  {payloadItem.week && checkMinus(payloadItem.week)
                    ? payloadItem.week.replace("-", "")
                    : payloadItem.week || "0.00"}
                  %
                </div>
              )}

              {timeValue === "month" && (
                <div
                  className={`font-semibold ${
                    payloadItem.month && checkMinus(payloadItem.month)
                      ? "text-red-450"
                      : "text-green-450"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={
                      payloadItem.month && checkMinus(payloadItem.month)
                        ? faCaretDown
                        : faCaretUp
                    }
                    className={`${
                      payloadItem.month ? "visible" : "invisible"
                    } mr-2`}
                  />
                  {payloadItem.month && checkMinus(payloadItem.month)
                    ? payloadItem.month.replace("-", "")
                    : payloadItem.month || "0.00"}
                  %
                </div>
              )}

              {timeValue === "year" && (
                <div
                  className={`font-semibold ${
                    payloadItem.year && checkMinus(payloadItem.year)
                      ? "text-red-450"
                      : "text-green-450"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={
                      payloadItem.year && checkMinus(payloadItem.year)
                        ? faCaretDown
                        : faCaretUp
                    }
                    className={`${
                      payloadItem.year ? "visible" : "invisible"
                    } mr-2`}
                  />
                  {payloadItem.year && checkMinus(payloadItem.year)
                    ? payloadItem.year.replace("-", "")
                    : payloadItem.year || "0.00"}
                  %
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default MobileTableComp;

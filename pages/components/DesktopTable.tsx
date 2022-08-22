/* eslint-disable react-hooks/exhaustive-deps */

import { FC, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";
import { isEqual, isEmpty } from "lodash";

import { ITable } from "types";

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
      <td className="p-5 font-semibold text-black-450">
        Rp.
        {currencyFormat(latestPrice)}
      </td>
    );
  }
  if (start[indexPrice] > latestPriceVal[indexPrice]) {
    return (
      <td className="p-5 font-semibold text-red-450">
        Rp.
        {currencyFormat(latestPrice)}
      </td>
    );
  }
  return (
    <td className="p-5 font-semibold text-green-450">
      Rp.
      {currencyFormat(latestPrice)}
    </td>
  );
};

export const TableComp: FC<ITable> = ({ payload, latestPriceVal }) => {
  const prevLatestPriceVal = usePrevious(latestPriceVal);
  const [start, setStart] = useState([] as any);

  useEffect(() => {
    if (!isEqual(prevLatestPriceVal, latestPriceVal)) {
      if (!isEmpty(prevLatestPriceVal)) {
        setStart(prevLatestPriceVal);
      }
    }
  }, [latestPriceVal, prevLatestPriceVal]);

  return (
    <table className="table-auto w-full overflow-auto hide-in-mobile rounded-lg text-left">
      <thead className="text-zinc-350">
        <tr className="border-gray-200 border">
          <th className="p-5 pl-20 font-semibold">CRYPTO</th>
          <th className="p-5 font-semibold text-white">GRUP</th>
          <th className="p-5 font-semibold">HARGA</th>
          <th className="p-5 font-semibold">24 JAM</th>
          <th className="p-5 font-semibold">1 MGG</th>
          <th className="p-5 font-semibold">1 BLN</th>
          <th className="p-5 font-semibold">1 THN</th>
        </tr>
      </thead>
      <tbody>
        {!isEmpty(payload) &&
          payload.map((payloadItem, index) => (
            <tr className="border-gray-200 border" key={payloadItem.pair}>
              <td className="p-5 font-semibold">
                <div className="flex items-center">
                  <ReactSVG
                    src={`${payloadItem.logo}?type = svg`}
                    beforeInjection={(svg) => {
                      svg.classList.add("svg-class-name");
                      const firstGElementG: NodeListOf<Element> =
                        svg.querySelectorAll("g");
                      firstGElementG.forEach((setFirst) =>
                        setFirst.setAttribute("fill", `${payloadItem.color} `)
                      );

                      if (!svgExceptIcon.includes(payloadItem.name)) {
                        const firstGElementPath: NodeListOf<Element> =
                          svg.querySelectorAll("path");
                        firstGElementPath.forEach((setFirst) =>
                          setFirst.setAttribute("fill", `${payloadItem.color} `)
                        );
                      }
                    }}
                  />

                  <div className="ml-2">{payloadItem.name}</div>
                </div>
              </td>
              <td className="p-5 text-zinc-350">{payloadItem.currencyGroup}</td>
              <LatestPriceComponent
                latestPrice={payloadItem.latestPrice}
                indexPrice={index}
                latestPriceVal={latestPriceVal}
                start={start}
              />
              <td
                className={`p-5 font-semibold ${
                  payloadItem.day && checkMinus(payloadItem.day)
                    ? "text-red-450"
                    : "text-green-450"
                } `}
              >
                <FontAwesomeIcon
                  icon={
                    payloadItem.day && checkMinus(payloadItem.day)
                      ? faCaretDown
                      : faCaretUp
                  }
                  className={`${
                    payloadItem.day ? "visible" : "invisible"
                  } mr - 2`}
                />
                {payloadItem.day && checkMinus(payloadItem.day)
                  ? payloadItem.day.replace("-", "")
                  : payloadItem.day || "0.00"}
                %
              </td>
              <td
                className={`p-5 font-semibold ${
                  payloadItem.week && checkMinus(payloadItem.week)
                    ? "text-red-450"
                    : "text-green-450"
                } `}
              >
                <FontAwesomeIcon
                  icon={
                    payloadItem.week && checkMinus(payloadItem.week)
                      ? faCaretDown
                      : faCaretUp
                  }
                  className={`${
                    payloadItem.week ? "visible" : "invisible"
                  } mr - 2`}
                />
                {payloadItem.week && checkMinus(payloadItem.week)
                  ? payloadItem.week.replace("-", "")
                  : payloadItem.week || "0.00"}
                %
              </td>
              <td
                className={`p-5 font-semibold ${
                  payloadItem.month && checkMinus(payloadItem.month)
                    ? "text-red-450"
                    : "text-green-450"
                } `}
              >
                <FontAwesomeIcon
                  icon={
                    payloadItem.month && checkMinus(payloadItem.month)
                      ? faCaretDown
                      : faCaretUp
                  }
                  className={`${
                    payloadItem.month ? "visible" : "invisible"
                  } mr - 2`}
                />
                {payloadItem.month && checkMinus(payloadItem.month)
                  ? payloadItem.month.replace("-", "")
                  : payloadItem.month || "0.00"}
                %
              </td>
              <td
                className={`p-5 font-semibold ${
                  payloadItem.year && checkMinus(payloadItem.year)
                    ? "text-red-450"
                    : "text-green-450"
                } `}
              >
                <FontAwesomeIcon
                  icon={
                    payloadItem.year && checkMinus(payloadItem.year)
                      ? faCaretDown
                      : faCaretUp
                  }
                  className={`${
                    payloadItem.year ? "visible" : "invisible"
                  } mr - 2`}
                />
                {payloadItem.year && checkMinus(payloadItem.year)
                  ? payloadItem.year.replace("-", "")
                  : payloadItem.year || "0.00"}
                %
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableComp;

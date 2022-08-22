/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useDispatch, connect } from "react-redux";
import { isEqual } from "lodash";

import RadioButtonComp from "@/components/RadioButton";
import InputSearchComp from "@/components/InputSearch";

import { AppState, wrapper } from "../store/store";
import { fetchProduct } from "../store/productListSlice";
import { fetchSupportCurrency } from "../store/supportCurrencySlice";
import DesktopTableComponent from "./components/DesktopTable";
import MobileTableComponent from "./components/MobileTable";
import { usePrevious } from "../helpers";

export const Home = (props: any) => {
  const {
    product: { data },
    supportCurrency: { dataSupport },
  } = props;
  const prevProductData = usePrevious(data);
  const [latestPriceVal, setLatestPriceVal] = useState([]);
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState({
    product_type: "",
    rating_greater_than: 0,
  });

  const mergeProductData = data.payload.map((obj: any, index: any) => ({
    ...obj,
    ...dataSupport.payload.slice(1, 80)[index],
  }));

  async function getProductListData() {
    await dispatch<any>(fetchProduct());
  }

  async function getSupportCurrencyData() {
    await dispatch<any>(fetchSupportCurrency());
  }

  useEffect(() => {
    if (!isEqual(prevProductData, data)) {
      const getLatestPrice = data.payload.map(
        (product: any) => product.latestPrice
      );
      setLatestPriceVal(getLatestPrice);
    }
  }, [prevProductData, data]);

  useEffect(() => {
    const interval = setInterval(() => {
      getProductListData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getSupportCurrencyData();
  }, []);

  const onCategoryChange = (e: any) => {
    const categoryValue = e.target.value;

    setActiveFilter({
      ...activeFilter,
      product_type: categoryValue,
    });
  };

  return (
    <>
      <Head>
        <title>Pintu FE Test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Pintu FE Test by Nabilah Ayu Permata"
        />
      </Head>

      <main className="home">
        <div className="container home__container">
          <div className="flex flew-row items-center mb-8">
            <div className="basis-3/4">
              <h1 className="font-neue home__title">
                Harga Crypto dalam Rupiah Hari Ini
              </h1>
            </div>
            <div className="basis-1/4 home__search">
              <InputSearchComp payload={mergeProductData} />
            </div>
          </div>
          <div className="mb-7">
            <RadioButtonComp onChange={onCategoryChange} />
          </div>
          <div className="mb-10">
            <DesktopTableComponent
              payload={mergeProductData}
              latestPriceVal={latestPriceVal}
            />
            <MobileTableComponent
              payload={mergeProductData}
              latestPriceVal={latestPriceVal}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store: any) => async () => {
    await store.dispatch(fetchProduct());
    await store.dispatch(fetchSupportCurrency());
    return {
      props: {},
    };
  }
);

const mapStateToProps = (state: AppState) => ({
  product: state.product,
  supportCurrency: state.supportCurrency,
});

export default connect(mapStateToProps)(Home);

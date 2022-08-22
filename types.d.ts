declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

export interface ITable {
  latestPriceVal: {}[];
  payload: {
    pair: string;
    latestPrice: string;
    day: string;
    week: string;
    month: string;
    year: string;
    currencyGroup: string;
    logo: string;
    name: string;
    color: string;
  }[];
}

export interface IRadioButton {
  onChange: (e: any) => void;
}

export interface IInputSearch {
  payload: {
    pair: string;
    latestPrice: string;
    day: string;
    week: string;
    month: string;
    year: string;
    currencyGroup: string;
    logo: string;
    name: string;
    color: string;
  }[];
}

export interface ISelectDropdown {
  onChange: (e: any) => void;
  selectList: {
    id: number;
    value: string;
    label: string;
  }[];
}

export interface INavbar {
  // isOpen: boolean,
  // onChange: (e: any) => void
}

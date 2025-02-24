// components/common/utils.js
export const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
  };
  
  export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  export const randomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  
  export const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  
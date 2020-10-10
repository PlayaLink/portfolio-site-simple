const MOBILE_WIDTH = 576;

export const isMobile = () => {
  console.log("window.innerWidth: ", window.innerWidth);
  return window.innerWidth <= MOBILE_WIDTH;
};
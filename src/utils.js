const MOBILE_WIDTH = 576;

export const isMobile = () => {
  return window.innerWidth <= MOBILE_WIDTH;
};
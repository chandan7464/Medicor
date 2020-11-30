const reDirect = (url) => {
  window.location.href = url;
};

const elem = (elem) => {
  return document.getElementById(elem);
};

const $ = (elem) => {
  return document.querySelector(elem);
};

const fTop = () => {
  window.scrollTo(0, 0);
};

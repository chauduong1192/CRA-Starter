/**
 * Cookies parsers and interactors based of this SO answer:
 * https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
 * =============================================================================
 */
const setCookie = (name: string, value = '', days = 30) => {

  // tslint:disable-next-line:no-let
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }

  // tslint:disable-next-line:no-object-mutation
  document.cookie = `${name}=${value}${expires}; path=/`;
};

const getCookie = (name: string) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');

  // tslint:disable-next-line:no-let
  for (let i = 0; i < ca.length; i += 1) {
    // tslint:disable-next-line:no-let
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const eraseCookie = (name: string) => {
  setCookie(name, '', -1);
};

export {
  getCookie,
  setCookie,
  eraseCookie,
};

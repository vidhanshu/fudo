export const StringShortener = (str: string, len: number) => {
  if (str.length > len) {
    return str.substring(0, len) + "...";
  }
  return str;
};

export function setCookie(cname: string, cvalue: string, exdays: number) {
  if (typeof window === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname: string) {
  if (typeof window === "undefined") return;
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

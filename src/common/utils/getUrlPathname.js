const getUrlPathname = (url) => new URL(url).pathname.replace(/\/$/, "");

export default getUrlPathname;

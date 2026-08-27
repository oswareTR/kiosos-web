export const COLOR_SCHEME_KEY = "kiosos-color-scheme";

export const colorSchemeInitScript = `(function(){try{var k="${COLOR_SCHEME_KEY}";var s=localStorage.getItem(k);var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var v=(s==="light"||s==="dark")?s:(d?"dark":"light");document.documentElement.setAttribute("data-color-scheme",v);}catch(e){document.documentElement.setAttribute("data-color-scheme","light");}})();`;

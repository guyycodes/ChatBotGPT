if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let c={};const t=e=>s(e,o),d={module:{uri:o},exports:c,require:t};n[o]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DMjVsepR.css",revision:null},{url:"assets/index-rIz9GQIC.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"index.html",revision:"057961446a9a59091cf4b5c2ea4cf93e"},{url:"192x192Icon.png",revision:"10c67f866525f87995be4c7c4af48339"},{url:"512x512Icon.png",revision:"31b94c6931d8163dda9d329761f3906d"},{url:"Screenshot1280x720.png",revision:"3bf6ca628ca0ee6877dca8632ca9cfa8"},{url:"Screenshot640x1136.png",revision:"a38dd609707f0653fecc8e547ed549b4"},{url:"manifest.webmanifest",revision:"fc5961438c368ad4a5ebdad3c6b767fe"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(a[b])return;let r={};const n=e=>s(e,b),f={module:{uri:b},exports:r,require:n};a[b]=Promise.all(i.map((e=>f[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Tv5lG59e3gk7pQDHAVCaT/_buildManifest.js",revision:"b96e05716a33592c2b631c56e9609c6f"},{url:"/_next/static/Tv5lG59e3gk7pQDHAVCaT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/154-1c97aef1f56dc23e.js",revision:"1c97aef1f56dc23e"},{url:"/_next/static/chunks/64-963a72c6c5e7cc15.js",revision:"963a72c6c5e7cc15"},{url:"/_next/static/chunks/675-8665c6dba9cfbea7.js",revision:"8665c6dba9cfbea7"},{url:"/_next/static/chunks/ee9ce975-c8019e0ccb668fa5.js",revision:"c8019e0ccb668fa5"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-7d6512f7c0d563dd.js",revision:"7d6512f7c0d563dd"},{url:"/_next/static/chunks/pages/_app-8c2a771f5f05d263.js",revision:"8c2a771f5f05d263"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/contact-afdbb320430d1c2b.js",revision:"afdbb320430d1c2b"},{url:"/_next/static/chunks/pages/index-04e06ab94f281a51.js",revision:"04e06ab94f281a51"},{url:"/_next/static/chunks/pages/photos-3e06587a1d0d72cd.js",revision:"3e06587a1d0d72cd"},{url:"/_next/static/chunks/pages/projects-885571d744b918ee.js",revision:"885571d744b918ee"},{url:"/_next/static/chunks/pages/success-09b149b5ce3cc3cc.js",revision:"09b149b5ce3cc3cc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/b6ced2cf8a803e55.css",revision:"b6ced2cf8a803e55"},{url:"/android-chrome-144x144.png",revision:"978a3dfae49e9fd7a81a41ba45972167"},{url:"/android-chrome-192x192.png",revision:"fe940f40bcc262f44b3521d22ec2c758"},{url:"/android-chrome-256x256.png",revision:"7dc830c161cc816891abd379448f6c2b"},{url:"/android-chrome-36x36.png",revision:"1e81baf29849ed2737a0cd3beea7f9b0"},{url:"/android-chrome-384x384.png",revision:"d026e26e6a8e53570eebc2e8d42dfea2"},{url:"/android-chrome-48x48.png",revision:"5caf350cbba6005f1f5e87660fc58bd6"},{url:"/android-chrome-512x512.png",revision:"1ab96167fc38c6c5ad344bcb25df2982"},{url:"/android-chrome-72x72.png",revision:"5b6ccc7abc72704ff26a7007baecec3b"},{url:"/android-chrome-96x96.png",revision:"007810b2314a3f9345c3aa9c6f724cdf"},{url:"/apple-touch-icon-114x114-precomposed.png",revision:"1822770d219d1f79bf7fc8baa0ff8fb4"},{url:"/apple-touch-icon-114x114.png",revision:"db646ed818e1e4038ed16ba0693a3033"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"89f00026fb7ec75888178492bc4e8946"},{url:"/apple-touch-icon-120x120.png",revision:"d6a94fa5294b58e8888da8b65aa3fa10"},{url:"/apple-touch-icon-144x144-precomposed.png",revision:"c9739be0aa68e5767601efb4841017ca"},{url:"/apple-touch-icon-144x144.png",revision:"bb91a2684f2047116697211940087dc5"},{url:"/apple-touch-icon-152x152-precomposed.png",revision:"86f872dfc1b877813fb9095a5189a640"},{url:"/apple-touch-icon-152x152.png",revision:"060c3adbd7cdb66bf7f87b604dbca6f7"},{url:"/apple-touch-icon-180x180-precomposed.png",revision:"4fed4a5236945907b4a2bfb1a8037181"},{url:"/apple-touch-icon-180x180.png",revision:"ff450ec3faf2fc552a83706b950ad7e1"},{url:"/apple-touch-icon-57x57-precomposed.png",revision:"f3465722f60c8e86b8808cc3aa1e94b6"},{url:"/apple-touch-icon-57x57.png",revision:"d6ba7c06777790d641723c9430abc0cf"},{url:"/apple-touch-icon-60x60-precomposed.png",revision:"978a347432567ede53bd9b4fdfb91933"},{url:"/apple-touch-icon-60x60.png",revision:"56df8b9ef4360147dc39696e9d308891"},{url:"/apple-touch-icon-72x72-precomposed.png",revision:"005cde925c9995de27308394c5d77054"},{url:"/apple-touch-icon-72x72.png",revision:"7b1ad927bf09d862642af37a65427607"},{url:"/apple-touch-icon-76x76-precomposed.png",revision:"bca9adf5553fd3d7a713bb79abbecf3f"},{url:"/apple-touch-icon-76x76.png",revision:"a455ccb9afcb019fb7c40be2fdf9bbcd"},{url:"/apple-touch-icon-precomposed.png",revision:"4fed4a5236945907b4a2bfb1a8037181"},{url:"/apple-touch-icon.png",revision:"ff450ec3faf2fc552a83706b950ad7e1"},{url:"/assets/PhotosSection/photo1.jpg",revision:"e3844a4f58248f7cbe9bc9dec8cf7f30"},{url:"/assets/PhotosSection/photo2.jpg",revision:"e86cab2394b1f7dbe15d9d15f6b79eee"},{url:"/assets/PhotosSection/photo3.jpg",revision:"92384b13bf43a09bf426368ef4ca83e2"},{url:"/assets/PhotosSection/photo4.jpg",revision:"3c876da1af10fb5a52125ea81a1d8166"},{url:"/assets/PhotosSection/photo5.jpg",revision:"940d6ffcf593f28612519c97012509eb"},{url:"/assets/PhotosSection/photo6.jpg",revision:"d1bd6255733dac8a24be1963b0b90cf7"},{url:"/assets/PhotosSection/photo7.jpg",revision:"d65f6ad835f6ebf3d708bce02f09e8e6"},{url:"/assets/PhotosSection/photo8.jpg",revision:"795de8dc4b7d73f787449adac6d1ad61"},{url:"/assets/ProjectsPage/catto.webp",revision:"0834120e9b7826e6139d2315571c4b31"},{url:"/assets/ProjectsPage/easybank-landing-page.webp",revision:"b5aee00b0e9157dce47945e3a95aa0eb"},{url:"/assets/ProjectsPage/hp-wiki.webp",revision:"fed4b614f52604664c8c86e2ce1e23d2"},{url:"/assets/ProjectsPage/javascript-calculator.webp",revision:"72ca7c47b42d6488933c07fecf42324c"},{url:"/assets/ProjectsPage/le-drum-machine.webp",revision:"81f1b129af13a3762deb6b411e8a6afb"},{url:"/assets/ProjectsPage/nam-nam.webp",revision:"1f58d8ece4b99d2258a7ef45e54ef005"},{url:"/assets/ProjectsPage/pomodoro.webp",revision:"e78fa117f0bb06f9e48104e082c72325"},{url:"/assets/ProjectsPage/retroweb.webp",revision:"f624fc9db3e6ac0ddd9b0a4a48e373e8"},{url:"/assets/ProjectsPage/rock-paper-scissors.webp",revision:"3e9fd950354eca6f356928c6b6b2b197"},{url:"/assets/ProjectsPage/url-shorter.webp",revision:"ccbe02a9e3bd296e0314609998bedf96"},{url:"/assets/ProjectsPage/where-in-the-world.webp",revision:"331157c64b1f6b69291c1a0dda316eda"},{url:"/assets/book.png",revision:"c2f5a61264ff486baad2e42d75d4b915"},{url:"/assets/contact-mobile.svg",revision:"22286ebe1e63c8fe933e103fd09c53f4"},{url:"/assets/contact-pc.svg",revision:"05a29d8df3a18ca4e42c467e70fb9754"},{url:"/assets/hamburger.svg",revision:"c2662288bf1ddf2d293f770a6b5c090e"},{url:"/assets/hero-bg.svg",revision:"fffed3e8837c72e3f8f17f50bf677c47"},{url:"/assets/layered-waves-about.svg",revision:"af81a47513923505e73c4be7ec78755b"},{url:"/assets/layered-waves-photos.svg",revision:"97fcf60710af1d4e95f472b51ba743de"},{url:"/assets/layered-waves-projects.svg",revision:"4a071429f481e0f9aa236efae6c3aa75"},{url:"/assets/layered-waves-success.svg",revision:"f7b44e5b8a2b89491956493a61f0913c"},{url:"/assets/logob.png",revision:"0413765a3df0b10babb7a35ef0b43892"},{url:"/assets/logog.png",revision:"2535b49b98d23b6822fedd12ba734684"},{url:"/assets/nam-nam-logo.png",revision:"403f1345d01413c9b2ee2ac048e18d5f"},{url:"/assets/photos-bg.svg",revision:"04fe8fbdc264638ae6c7dda76d52a118"},{url:"/assets/portrait.png",revision:"cb813d6e0b4e32c7c273b0ee735b7c7a"},{url:"/assets/retroweb.png",revision:"0617c28f0a49650c6b2371392168d930"},{url:"/assets/wave-mobile1.svg",revision:"f3ec32c449c376e31e02d40697773119"},{url:"/assets/wave-mobile2.svg",revision:"18136f17b3d2ece24eb90bee1df0334a"},{url:"/assets/wave-pc1.svg",revision:"9c298ac11c45bf5514d77de9daea38f2"},{url:"/assets/wave-pc2.svg",revision:"3ecda8eb4bcd441eea0aae0e5c8628a1"},{url:"/browserconfig.xml",revision:"7e0385b172166afb7bd76c82c5082b56"},{url:"/favicon-16x16.png",revision:"d40745f7470e02ae8c6682ca99907a47"},{url:"/favicon-194x194.png",revision:"0db96340789cefdc8addbdb3145032f9"},{url:"/favicon-32x32.png",revision:"ff7252ab43449e5874d288e39a6efd10"},{url:"/favicon.ico",revision:"952042e102e8d1028990059253513f03"},{url:"/images/IMG_20200712_143349.webp",revision:"9e8a970b96ab69f3c046f9543ac8cd7f"},{url:"/images/IMG_20200712_151117.webp",revision:"034d6741648f4f4a97e78be5fc069d53"},{url:"/images/IMG_20200723_205559.webp",revision:"49bd43e255d0938e09c6ca88768bd9c7"},{url:"/images/IMG_20200802_210255.webp",revision:"bca73e605bd9a22b33fa492706b1901a"},{url:"/images/IMG_20200802_211326.webp",revision:"356682e3b1aaa9024cfd74c0b2baf99e"},{url:"/images/IMG_20200810_154817.webp",revision:"44e35857b980a979d3b6d2996905927f"},{url:"/images/IMG_20200810_193030.webp",revision:"07202aa1a0190a966e7cd8eca462f3be"},{url:"/images/IMG_20200812_202011.webp",revision:"163f1d62e183ed0b0c453610df89d871"},{url:"/images/IMG_20200818_135129.webp",revision:"d070d3d8e36def60cfacff074678cef8"},{url:"/images/IMG_20200820_175418.webp",revision:"ec9c5acda9db6d7c8d3f03c873294925"},{url:"/images/IMG_20200821_161919.webp",revision:"2e1b46b26e8f6881cf8dfd37be4065d7"},{url:"/images/IMG_20200821_162135.webp",revision:"8e286fa3e6d0e0c5d2f1e53cc58e176d"},{url:"/images/IMG_20200821_162712.webp",revision:"f3fec9866cd990bb805c9cf813d8d8a7"},{url:"/images/IMG_20200821_183115.webp",revision:"34a443e2ce83a7d6fcb5a703de7fb9ab"},{url:"/images/IMG_20200821_204556.webp",revision:"e5bb67b5c936bf84ebf73bab02f192e9"},{url:"/images/IMG_20200823_195204.webp",revision:"32ff8fc61f0b5fb81087000e734d3728"},{url:"/images/IMG_20200826_192023.webp",revision:"dc662aaa08e1f8bb8a10cee338aa7f44"},{url:"/images/IMG_20200826_200930.webp",revision:"de4c9b42480d1aa38e372a02b2844d6a"},{url:"/images/IMG_20200916_112521-Enhanced.webp",revision:"6ec15f815ed66f51998311176caa8b2e"},{url:"/images/IMG_20200927_172846.webp",revision:"fb753923b593260a61331dc6332bd238"},{url:"/images/IMG_20200927_173321.webp",revision:"421c319b14848f2f7f7cadc331c6540c"},{url:"/images/IMG_20200927_174857.webp",revision:"2284f26bc1fd991d79b92760055bc1fe"},{url:"/images/IMG_20200929_122216.webp",revision:"8cd5864a46bf2d1d7150f0e57833cd52"},{url:"/images/IMG_20200929_160723.webp",revision:"b697fc5f72fb19e065701d0d0a1108aa"},{url:"/images/IMG_20200929_160803.webp",revision:"75bf15f61f81421ee7f7e5f935637257"},{url:"/images/IMG_20200929_160931.webp",revision:"e1faeb52dcb60626b38b5ba9e71c863d"},{url:"/images/IMG_20200929_190425.webp",revision:"79298de0f0eaa4b9d0be00e9166276c6"},{url:"/images/IMG_20201004_143344.webp",revision:"67826991df8671b329bf36638867a15e"},{url:"/images/IMG_20201006_185119.webp",revision:"fffc0951006e6fda1ad9b3c8f0eb77c3"},{url:"/images/IMG_20201011_200652.webp",revision:"95e3e278fa30016d041a033cee00d740"},{url:"/images/IMG_20201017_222741.webp",revision:"49542264f82cb4b705561ba0f5e50f35"},{url:"/images/IMG_20201018_132441.webp",revision:"58403b9760ee83d23bbbadcb5437fa58"},{url:"/images/IMG_20201028_163417.webp",revision:"02b0eb6ce61094966eecb4c8640d6fbc"},{url:"/images/IMG_20201028_163844.webp",revision:"605a4a7d8ae9f5bb647b317304bd1340"},{url:"/images/IMG_20201106_153654-Enhanced.webp",revision:"41e917b9a84c9c8043b758356178f4c6"},{url:"/images/IMG_20201115_160433.webp",revision:"0f5d872d8abffa2e7382deafedd7932e"},{url:"/images/IMG_20201115_164143.webp",revision:"f3133a204254cad9c99f00ab16231258"},{url:"/images/IMG_20201125_134323-2.webp",revision:"c228cf1b69864fb25a45d9650ebfb3d3"},{url:"/images/IMG_20201125_134323.webp",revision:"c0271c412ca434a9e23d1ff9e57038de"},{url:"/images/IMG_20201125_134332.webp",revision:"89f475e2f5631cda184d9372e30e5830"},{url:"/images/IMG_20201125_134357.webp",revision:"3a85c822502b3e316753ffc055bf597c"},{url:"/images/IMG_20201220_153916.webp",revision:"b54667c613a4b772c751b12f2f969631"},{url:"/images/IMG_20210102_155010.webp",revision:"607c086ac94fe08e90ae2041fa5a0aba"},{url:"/images/IMG_20210114_181624.webp",revision:"41d4fb83ec14d3998ca4db8431ce8288"},{url:"/images/IMG_20210204_171127.webp",revision:"81afc3e4e601dc8c1fc7def5c2117515"},{url:"/images/IMG_20210204_171449.webp",revision:"3b08460acabe6f003c81f18effd52e04"},{url:"/images/IMG_20210204_172206.webp",revision:"c5e1ec3cd9b666a96bdd42a465ffbd89"},{url:"/images/IMG_20210421_192609.webp",revision:"403127145b4a4365d0de89f81112b273"},{url:"/images/IMG_20210421_192855-Enhanced.webp",revision:"7dfb11936380831f12f1476b8ffbbe64"},{url:"/images/IMG_20210421_193318-Enhanced-luminar.webp",revision:"41f4663e786e5aa8ec48a73f4feb45b6"},{url:"/images/IMG_20210423_184324.webp",revision:"e10d626e518535e203c8c2dade978efd"},{url:"/images/IMG_20210430_163306.webp",revision:"ee7ac2942f019375c604d78adefe076a"},{url:"/images/IMG_20210502_184029.webp",revision:"04ad4e3fd7ccd5b810b7ada27495e6eb"},{url:"/images/IMG_20210502_184308.webp",revision:"5d6d3a8238557359a8aca941b3048d9a"},{url:"/images/IMG_20210502_184314.webp",revision:"b5d3d7f26c4a62ae7e86b5e2461e6bd9"},{url:"/images/IMG_20210506_192335.webp",revision:"91e13c81c4e0805446f5b992eaf53cf1"},{url:"/images/IMG_20210506_192531.webp",revision:"63f055b8a98a0c7e206e0a5d43f765d8"},{url:"/images/IMG_20210523_183012.webp",revision:"eef8d3c5c5450dbcfb1952365902000d"},{url:"/images/IMG_20210528_163100.webp",revision:"96a51b8047ddc538ae8b0f918a127236"},{url:"/images/IMG_20210529_185956-2.webp",revision:"7913a4a805bc317730a9547d59a189aa"},{url:"/images/IMG_20210530_203436.webp",revision:"1b8c55eaab32c67c1d16d1dda45e87d0"},{url:"/images/IMG_20210530_204024.webp",revision:"a70961fdddcb1c7e4f738ceb2f395617"},{url:"/images/IMG_20210530_214623.webp",revision:"a90931d6003e644ee5cb5880971bffb1"},{url:"/images/IMG_20210603_190613.webp",revision:"8eb964d54a37c1e7d18dc56565743429"},{url:"/images/IMG_20210606_185831.webp",revision:"4204b2a6599716f93f78d71c9c2e0d53"},{url:"/images/IMG_20210606_201016.webp",revision:"fe6f709d1cdffcb2f3f704c6741adf1a"},{url:"/images/IMG_20210606_201853.webp",revision:"843b6de9f2d9c351c4f3b7368866bb73"},{url:"/images/IMG_20210606_202113.webp",revision:"4a2e0354933bf401341cfeb071f4f744"},{url:"/images/IMG_20210620_191855.webp",revision:"96e404ff865f2498200679311d24c2b9"},{url:"/images/IMG_20210709_185939.webp",revision:"31665831fa267519cc7aaa3b37c246bb"},{url:"/images/IMG_20210709_204715AI3.webp",revision:"078d09e82fe692b373044c70e7163fea"},{url:"/images/IMG_20210723_194849.webp",revision:"8e5c29c156cf4dc2fb0eb64e7d0e8e54"},{url:"/images/IMG_20210724_200626.webp",revision:"c1dd460933623bcbda58deccf3f47b00"},{url:"/images/IMG_20210724_200924.webp",revision:"76b15c2e36b1de96390a43e5c96bff06"},{url:"/images/IMG_20210724_201240.webp",revision:"075287cd54547ed4ab117c3aebab1a02"},{url:"/images/IMG_20210819_193244.webp",revision:"6bbe0612d9b0607282b3a94bc1e0b95b"},{url:"/images/IMG_20210906_142556.webp",revision:"cefb3bf9c214872aaf315eb777f38bb0"},{url:"/images/IMG_20210906_150955.webp",revision:"ef378c3a70bf5f06ae90397a39e841af"},{url:"/images/IMG_20210906_150958.webp",revision:"4dcb5979dcdb7bf2f86a14234f5a565a"},{url:"/images/IMG_20210906_151301.webp",revision:"96e10257225b71d527c9c6364025a0be"},{url:"/images/IMG_20210906_152100.webp",revision:"f80395d7864132a8447e7d0ab5e9225f"},{url:"/images/IMG_20210906_164841.webp",revision:"6ac07b7627172ccbb16aa9d93375b166"},{url:"/images/IMG_20210910_195000.webp",revision:"28c38aef8a9ede101aac21318db00785"},{url:"/images/IMG_20211024_130921.webp",revision:"707204d982ea0575f2334414b800c40f"},{url:"/images/IMG_7587.webp",revision:"5e0a9e035055b673d4f66722853dbfcb"},{url:"/images/IMG_7620.webp",revision:"74b8fb6e8adab0b742debe90f76ac87d"},{url:"/images/_MG_7633.webp",revision:"107d0127809dbf89afd38ee84a08bc2f"},{url:"/images/_MG_7636.webp",revision:"3c9077d816f31374a6de9e3ec94fad21"},{url:"/images/_MG_7641.webp",revision:"2a29e0120900c9bdd115b57725907747"},{url:"/images/_MG_7672.webp",revision:"93b7015911f40a09cebadfd380572930"},{url:"/images/_MG_7673.webp",revision:"d4fa7f2e10439a3c63e99c5eb24c84da"},{url:"/images/_MG_7701.webp",revision:"f28b62038ee1bde1284de08cc1cf7beb"},{url:"/images/_MG_7716.webp",revision:"8aefe8787c3b5255701e829aeaf13420"},{url:"/images/_MG_7731.webp",revision:"08012b3a789b6c86c7aefdf5be0b90ca"},{url:"/images/_MG_7734.webp",revision:"ab71ddef464d4dcfd3e0350237e0b401"},{url:"/images/_MG_7744.webp",revision:"517a63ffc0188990093cce64db2f34c2"},{url:"/images/_MG_7752.webp",revision:"50d5aaa884c69c0721bcf38729172f77"},{url:"/images/_MG_7773.webp",revision:"aed3f2bbbe176f33c1440627c288500e"},{url:"/images/_MG_7798.webp",revision:"6867a1c7180f8e52277897e33f6eec2f"},{url:"/images/_MG_7814.webp",revision:"c6a23c4c618f47a7319bc609147e80ed"},{url:"/mstile-144x144.png",revision:"aa647ebdfadc78f68da321b00c58037f"},{url:"/mstile-150x150.png",revision:"eb8e67da62d134898f4da5b1b0ce5fb1"},{url:"/mstile-310x150.png",revision:"a2113d26a708f8ceb339c36832bf18c1"},{url:"/mstile-310x310.png",revision:"df54e04882b79220ed0c73f99479e71f"},{url:"/mstile-70x70.png",revision:"58aa553d4a72aa4208b03a2f06e7c4d2"},{url:"/resume/english-resume.pdf",revision:"20b1766fa41f11d1dc00b6aa07fc214b"},{url:"/resume/romana-resume.pdf",revision:"ffc3063292137f9a6930fd4df815b0ec"},{url:"/safari-pinned-tab.svg",revision:"255d791d86568177ce6ea9807a397a9c"},{url:"/site.webmanifest",revision:"69b76b5581f99a0af08ec5c3d4a57901"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

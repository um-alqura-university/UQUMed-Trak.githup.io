'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "578634dac59bb9359f1592d978865f97",
".git/config": "e43ff798590a9dea5c213be216fdd3f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "51707fff69d714c1743342deb0bdbc5c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0e68a86366fee0faf9e1af0b87c2bc43",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "354569c468d2043f0cc9c0ef0bb975f9",
".git/logs/refs/heads/master": "354569c468d2043f0cc9c0ef0bb975f9",
".git/logs/refs/remotes/origin/master": "0559ff929d9b70cf08e5f0f18baa7b64",
".git/objects/00/0069d191e79f68365a5bc08de040c6f0c38d96": "a3328f0fa68cf3d5208a746668020e04",
".git/objects/00/04f47cbe457d55097a4d679520204726d2e4ec": "a36b4506aff3609c284a164741c85c2d",
".git/objects/0c/9fe359bbda78c23cdd234c0d8920c6421dfd34": "a92e26a4e35bc253e82ab01d6f968f7d",
".git/objects/0d/c27c6ecdd6e3f157c0046ed51ac9c14a69af72": "b74483759644dab71a300d37af9e7b1a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/2d58c0b09ad015373810ef665226367cea4477": "00b79a63d048caf9105b9b272414b011",
".git/objects/13/c134378a975fa645f734f3b85334c73c3d5cdc": "46144f98525881da98f3116b3e33189a",
".git/objects/16/a9fc8852f747e51afd275790e5c60c3e2e698c": "eafd16878e54d47251f3141fcd0c7ec8",
".git/objects/17/ac77a24d9c6c805dc07c39603a8a02ab81f661": "a955989000f97586c9329fa2e7d157f0",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/9b51d198fbf0852d6bd4a439272d7b94713891": "b1db3044ba6d3a1770f3b710394491b8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/5bb95ed5fd7ac164cf9bd6d080aafc92d2bdad": "e826422dfa68e73ac4b648a4f1b94fb4",
".git/objects/24/a3794093d27a6253886885a5fa18d3dad5bd18": "aee0522db3bc7fc1e056311d26c19d99",
".git/objects/2a/62bfc010eedfba2b8c3ee6e5a3112a7cc1ba3d": "f218402a051f95a6b012f10b5dfa6452",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/36/ca253eb5888ed7db5de54138eb04d8d191d6d3": "8806f7741b92522a6de392de9eead05e",
".git/objects/36/e7eaa1cba2e2929ce1ce22620a14e1eece179f": "2a76fc6dd7cf32df1261c92655090b56",
".git/objects/38/769091329878f5a30313564ed034e29afaf288": "d29c3a0f8e288d38b0c6a73f2a4fa471",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/bd1755c93ba524c1bdf414c84892af404dfa20": "31e6743f98d853c68283366be62db36b",
".git/objects/3f/3ef3f91b20abf668949ba3a68e461fb15ba4fd": "e3259639218006bf2d089d84409ee922",
".git/objects/40/cae205554b3518b154ec39a085ff9d41d763d5": "509e1b1ac2429565486e1267e2401fb7",
".git/objects/46/1d96c4d142eacf60147d931e4f60b7b1c176f6": "2a19c3de38b31adaa0d43c0e56cb1c8d",
".git/objects/49/8a6d5d8cd1d7070d158887d06f0750edd01aeb": "eb939881aad02242542ffb88e69db328",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/5ca7083f6fa659ccbcf7a7f050cff6638f4be8": "f516eb2aca85da77725e1f159f5edef9",
".git/objects/52/0fea7a253e6f8d16ac3819c409c15090db9505": "a7ff19cf2f80791c032a30aeadb5ed56",
".git/objects/55/fdd988f6f9f4eba53f7f00599a17b1b0c85219": "b73613117a736586c2b11cfde4de9549",
".git/objects/57/9ff09b7f7cc77d74c7c0d58a40f62cfd73bca0": "cb0aab383b41d3172ab9edcaf8356b8b",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/ec6c7114d691733a8f7fcf8b0fcceed8e96199": "08f40d9393225ce6cdab8f29bd6b4437",
".git/objects/59/d9baf0e574282d353a009aa949372fa36391dd": "74970bca2f93171e91407da199112b95",
".git/objects/5b/262c4309ebebe98bf9bedebb861c3a508eb584": "bd2981c1e5790797dd8de43c03b883f8",
".git/objects/5b/879e8607bd96303421670f86af995ab93c29e9": "f7fa4d3208a81819ee1473d8db8d1c2c",
".git/objects/5f/907de71ee46905f6700e8a93a4692b690014da": "bb41428a28f567a94733cf1834104baf",
".git/objects/61/a1ca02b27fc4e00f7fb6225ace6aca19d2e702": "f967fdbff0826a903edbb696a17ec9ef",
".git/objects/61/c3b39c4f43b78d97b21b2b27d9e7f6990e199a": "90c6e234d879b3a342004a49f55dc037",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/d41f38d5c5b59a69a138e565fb5a9247f65f0e": "70f22f12e023c1ba7449ae4db673f785",
".git/objects/6d/163c1bfd96ba978ed89cd6200aa88a8e7be609": "1cafef07cf15e4861c46b4b6f0e966dc",
".git/objects/6f/ec1f41aeacf373d064c425e30916b4b2f1b2e6": "5d127046963d6504d7531fd87a939d98",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/634f20a997591f87ac6e22eb3e8f0ceff4fbd3": "36623f25bbb7d6ca41dee0930a8c5079",
".git/objects/72/520da7ed85b8911669ebc573fd4abcbf5298a4": "df1d542a974dad3ad6f744445e12caa5",
".git/objects/73/7ee5852ae892359d3d6fe75823cb7b8dadfa79": "ebd8c5e8253e4c87847197df64d902c8",
".git/objects/77/37eb1df0f9d698ff4a3f75072a5a9748d0c199": "65fe7d83c50668e97da0329c72374b68",
".git/objects/7e/780bcd42b7b816274e1bdb4122f0cdc81d0f63": "50b3e039b93f1095596f2627ec67fc9f",
".git/objects/81/1e8f965810210a8f5704f52a5d5a21400c3bb8": "538814deab2875899a89c46f9b4cc0b7",
".git/objects/84/6860ca9c3bbc00fe653fd909ff5099a3565c30": "47283c28f73795fe61d107760a344ebf",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/e344762ad24407c1cd9628bdcc4dd0c2cdd4ad": "16d759d613b01e781526ff81e6c03ab4",
".git/objects/88/795b70dcbb28d065efab72d9b33204479ed1e7": "accfd6c9ce1d7512b258656ecc198dcf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4bba562dc1f019c65b8b72bae3d7e03b7e737e": "c818d2ea214ef3672f21ad2cbeafaac3",
".git/objects/8a/6e1cae311b9b3d8d3bb6118b58b3e0d17ae655": "51c411d364c95279346bbb61954d9c96",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/7783f168154c437c16d58bf0cc5caeb05f4c33": "75bd31f556781e3f66b75066833616a7",
".git/objects/8e/c9bd82faf6951add5b65fbe3df30d8a6eb374c": "d6774110903a376c63499bd9ffa0b9c8",
".git/objects/90/0323a2da629b6c37aab0f15997ef3dc66d194d": "1be6ab03ae8c1e0f160e270dffa847fb",
".git/objects/92/352d8c3f016524eaeff29976f7a593e22f3d1f": "62cc501f0d8f40dc1cc79f9025dbb4dd",
".git/objects/94/614e45440f853d7eb1c740fc6d70ae98082846": "7b70ebb22764e92a137c77936c1a2560",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/401ddf2d32c2cee17c742b33ce02ea7580eb0f": "3c6bd48e2bee4f2d68d0fff22793b15f",
".git/objects/96/4c9f9b9135bdc2604d90eb7bb645d29f4a69b8": "2f1aadf9c8ea4f600882dbcdd87b74c1",
".git/objects/a0/b8bd09e7b52257cb3ed570ef940763dae86ec1": "a41cedd06868d95a78fbf055e6d2ed8f",
".git/objects/a1/16c52cfaaf9a72ba270b8adf7213822eafc006": "595b9e0e6e8a077fe377a8ea4666e52f",
".git/objects/a1/a2ecfc0b040f8915baad8aefc4e5252e27de8c": "8fdaf4f88334708caaf1f4bb9fef144e",
".git/objects/a4/3f234b1a0950d980d0c6581f5e75ec597c0acb": "6007224184e48c4b072d7fe2cc97cab6",
".git/objects/a6/58d10d56f603eed3d3d84ab64e2a17bdb938fe": "904369479f7bdcca75523b838ecd1348",
".git/objects/aa/69da9a22400c3d69975fa5da7659d6fb690e1b": "4931472f5e7e8d4900d37d4c82d7fd91",
".git/objects/ab/995bb3b5cc432c942ae0710ffdf70acd8d3717": "910a042370cc44fe4406b65dea040801",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/11c9cce9dc271c8710f4bee4daedd629cb3947": "cffb7e27a675ffd36f879405302f8caf",
".git/objects/af/a1f96ed61a6fd40b03ce090333395507e9cf8e": "73294d6a51222681b7dd5ae5819c95e7",
".git/objects/b1/4dd4d51e8c65209a9294e3f139e05d382d3d16": "a227f622f64cfc30c9017546c7709556",
".git/objects/b2/f4c9d944594fda34c1c087f14ec80b0040ba55": "fe3a59bffaa85b824bdaf2e55e54f79f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7bf2dd0ff96b8d5ce046ea1f7646a97d8cef3c": "9feadcdee36a9656f423d86865a3a4c4",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/dd7b647c2daf2dd9f3d0f24217ba935056721f": "233dc41fed30a299d89ca0df452dac21",
".git/objects/c2/c830cf9c0862f416f16ac9c61578cdd8271d10": "83533bd1f88091f53b27f4572ce84be5",
".git/objects/c8/350656a4269bd5ec601732cb3f20037ad06f34": "53e03486cb3456406785b16f232e1e0a",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/f35c12790bcd4a5fb31ac464be174ea7bde123": "185f74a37edc6ace1ce4545eee8792ac",
".git/objects/cc/d72a209badcab4478fd297e8e52824d7965703": "2606adda32e11f825cf38cd57be441d3",
".git/objects/ce/62ada588c42b1646f3f0180123b2a82d3935b5": "18b9176f6ce579f89c9d6c10debd99ba",
".git/objects/ce/ea4ea8ad8f417d260f82332425bb967b100268": "3a5ef4a211b6de222b5a7872271fd55b",
".git/objects/d0/4ede6300572a94f6cdac8ce521592905a6189d": "16c357eb8f30b51cafac983aaab6c673",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/ddd393614efbec0e829bc4e1f233cbd76b09d6": "c9a533614cd7b03df7ea51641d4dbc09",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/03f164f85dfaf24c77e4021d9d83053ba8a7aa": "db66af8c29d264a7e79c2a33e94618d3",
".git/objects/db/3649cfe2923164a8318e93ca4ec7208d68c8c3": "7b62567bbe521eb38ec0ade00ca142ee",
".git/objects/dc/f8507c0ad2f89388442b9bf35a416f69ed4d65": "e3b82aad28e13c9baa823aa634053a3f",
".git/objects/df/514cad2854186e017ad720ecd41c497f8643f6": "3caf086c1d667177eb196d19b0091a20",
".git/objects/df/d3b89aa8be33777d3f4fe85c203df1da59922a": "ccf76c5cbf6301f342865b10fa15f813",
".git/objects/e0/8fb6ed9b4d479fb659627338b12097e3d94b51": "1d3d01c82ca69d0b75df4db06e6f9362",
".git/objects/e1/e5b05701b092563acf2105f7789ad7e46aac2e": "f9339b2f991e9e115b589a99e762acdf",
".git/objects/e3/1d3bbfa49d7b9065c7c981bea50a7e8b266f3e": "d32f0d26a33970ff76fd21961938b21e",
".git/objects/e3/35155efd95255d66670a806786ff8f399b92bf": "a911d298c669602a0a6b3fc7a68467c5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/65f02098bc63bd3ebee96ca2737a83aa226269": "fae84a9dff041cd7ee56f052842842ea",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/ORIG_HEAD": "ed7d3e79b0c701db66cda985e51f88ad",
".git/refs/heads/master": "8e5a939dbbe4a251a222a98d030b46fd",
".git/refs/remotes/origin/master": "8e5a939dbbe4a251a222a98d030b46fd",
"assets/AssetManifest.bin": "982e19be92ac3c2f8a53c45066ac328e",
"assets/AssetManifest.bin.json": "68c86a2c2327b68709dacf8e4ca18e8c",
"assets/AssetManifest.json": "32e5a22e9cd11a441eb226e81c535cf2",
"assets/assets/files/students.xlsx": "7bf48e31abae1a0db9ef5ccd1b7c189f",
"assets/assets/fonts/TS-Safaa-Medium.otf": "b4d69ca65f7bcc60268b9f2a378bdd41",
"assets/assets/images/appbar_image.png": "44ed7d26c91bcef1f32b3252aa013b5e",
"assets/assets/images/appbar_title.png": "e93be0fc42fc2d5f96d9fa70e1694e95",
"assets/assets/images/application.png": "56197931aa12e2ad74980fec5eb18950",
"assets/assets/images/app_logo.png": "7e39432a167139b0f228601c6212e9dc",
"assets/assets/images/defult_subject_icon.png": "6802d37c032577394b09a062c3dc8298",
"assets/assets/images/education.png": "71ed4f38c72d752520d60ac0e2e05b3d",
"assets/assets/images/error.png": "64e1a4a70d9f59fa9d2118e14c22cd17",
"assets/assets/images/form.png": "c31c955ed10384dcd3d160f38d6ca570",
"assets/assets/images/home_image.png": "0f87e730ac509e1aed2ab3ef03aa64a9",
"assets/assets/images/hybrid.png": "7ed200adfe577dfa500538aeb145617e",
"assets/assets/images/lecture.png": "aa057aaa98756a00c504b4e5455b0a4a",
"assets/assets/images/logo.png": "bf5c3cd77970db1188f4af89c62d3fac",
"assets/assets/images/logo_background.png": "850349ef327697744efe8ab52701d461",
"assets/assets/images/Ok-amico%25201.png": "1aeb462bc853133ba285058635b0c875",
"assets/assets/images/person.png": "2a9699c6c76ad65c62863dad33e19917",
"assets/assets/images/splash.jpg": "6098ab9223ce2185c7e40662e5ed08c6",
"assets/assets/images/splash2.jpg": "8d68d816f2abdcb854dd13693c035d6a",
"assets/assets/images/title.png": "e0efab6a8985da07a8837e5fbde9be01",
"assets/FontManifest.json": "9f285734c0c532eeb4b778eb853d6dc7",
"assets/fonts/MaterialIcons-Regular.otf": "adc0cdd1fb70e082b026dbcf489d783e",
"assets/NOTICES": "69e766f7605b42f9590fc882a9ef2357",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "9ac633dbb7618cc824e6ce25b9fc7855",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8741a0b19cc15e4653f5f47e178c5a83",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "bf5c3cd77970db1188f4af89c62d3fac",
"icons/logo_16.png": "806113111702c37a8840b6205c809615",
"icons/logo_32.png": "2e929cb054c0ccc1762578ee87e34bba",
"index.html": "920cf71bcb72cfb8ff6533f043d43f78",
"/": "920cf71bcb72cfb8ff6533f043d43f78",
"main.dart.js": "23b3502a7c0bb5f229b62f942b903453",
"manifest.json": "7bd799764976b74de31f2568ca112809",
"version.json": "daddb57faee272b6414f39afea3e53dc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

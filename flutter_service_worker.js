'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fd8c2338d42c3c43a863171e0c189eae",
".git/config": "af24435816e95762ac41d76febccae83",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0eff92f9440ca636172da314aebe9cbe",
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
".git/index": "83cbca0c8eb7a99572af55a51fb81b4b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b627eb5016aa729116150697c9daa955",
".git/logs/refs/heads/master": "b627eb5016aa729116150697c9daa955",
".git/logs/refs/remotes/origin/main": "74323889d41874828c1a41501993680d",
".git/logs/refs/remotes/origin/master": "f1fd0ffa30db9e6ce52dd16a6cfdf71c",
".git/objects/02/8ce95108b717150cef134ba075b1f646e52a75": "2329495ff3978d356b6542591a53f939",
".git/objects/02/ee3251d617af411209c4c1ca7281d8785fcb09": "1edc90081a01af2b8b333407931c4363",
".git/objects/07/52cda632baea8f85bafac06308af8f8d29b9b8": "24d6fe162a9a45b7d103ede5b90a3c50",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/374241eb41826e02a69e883909d35a0c099e4c": "8583ea30b389fcfa68f32af14bc01ed5",
".git/objects/0d/c27c6ecdd6e3f157c0046ed51ac9c14a69af72": "b74483759644dab71a300d37af9e7b1a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/181e4248433481adc0d630ff54d25cc82f1ed1": "30470f0e5fb228b66a5dbc12de13d8d8",
".git/objects/10/1eec2912b5a4bbc09c8551ce63cf3b7f060022": "b3a07f887f50cca5017d3efaab634aeb",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/c134378a975fa645f734f3b85334c73c3d5cdc": "46144f98525881da98f3116b3e33189a",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/a9fc8852f747e51afd275790e5c60c3e2e698c": "eafd16878e54d47251f3141fcd0c7ec8",
".git/objects/17/b2ccd8b657b38aff03f18895996870112f42c3": "733e3069c071f3ec011959074cca9ffe",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/9b51d198fbf0852d6bd4a439272d7b94713891": "b1db3044ba6d3a1770f3b710394491b8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/e892d13b8ebd5d020c89d1269842da62f0baa2": "2edd191ab699330a7afa3a9610b86684",
".git/objects/24/a3794093d27a6253886885a5fa18d3dad5bd18": "aee0522db3bc7fc1e056311d26c19d99",
".git/objects/25/3d2e477449bef90fb5f02660ada21b14188536": "cd32e98c39b61b661f7319628ab0240a",
".git/objects/2a/62bfc010eedfba2b8c3ee6e5a3112a7cc1ba3d": "f218402a051f95a6b012f10b5dfa6452",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/f852740b5cfc86b402ccd0a8142c53c17096d5": "f1775f250161fd4f4a2dfce4015163dc",
".git/objects/32/4a4a7c587df945fed8ed182634b06ea9025f81": "416dcd25ea210761a3ad2e2ed3237ecc",
".git/objects/35/69c895de2a8b232846233c5e459b7030bda450": "1260544022e2a64d1fad27ad6b0ec14d",
".git/objects/36/e7eaa1cba2e2929ce1ce22620a14e1eece179f": "2a76fc6dd7cf32df1261c92655090b56",
".git/objects/38/769091329878f5a30313564ed034e29afaf288": "d29c3a0f8e288d38b0c6a73f2a4fa471",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/1d732167ba9a7ac847f64dc2b17363affcbc02": "cb8695ecb01c5a9e07a95c999529a089",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/77ae8c2d1a94a0342b3dea91e267780fed1ecb": "7c367fe1d1f714a96ddb45d9fdbf187c",
".git/objects/52/7f813dd29718572a5094530e1d3761f322ea22": "38b61844e47b627a139792ed077f8c88",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/ec6c7114d691733a8f7fcf8b0fcceed8e96199": "08f40d9393225ce6cdab8f29bd6b4437",
".git/objects/59/d9baf0e574282d353a009aa949372fa36391dd": "74970bca2f93171e91407da199112b95",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/262c4309ebebe98bf9bedebb861c3a508eb584": "bd2981c1e5790797dd8de43c03b883f8",
".git/objects/5b/879e8607bd96303421670f86af995ab93c29e9": "f7fa4d3208a81819ee1473d8db8d1c2c",
".git/objects/5c/904f36902f1ad46e17fa82bee75bbe435b0cc3": "6b8317e56d20e791c47a93140f7b9705",
".git/objects/60/8a92c35d439c08578393595a06b168eba9c3d3": "16745b4ef8b8178b81d86b820d1cfbd5",
".git/objects/61/c81785b57726e801fdabd5cb04c6dc50141957": "cc6ccb9af143b2f429c0aeb1adacf110",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/d41f38d5c5b59a69a138e565fb5a9247f65f0e": "70f22f12e023c1ba7449ae4db673f785",
".git/objects/65/17df9678036ce68fd7b7d6fdd40eb841651942": "7c58bf10b2f57b8fd56d6abba801a900",
".git/objects/66/065e2818e0f400d7dd08a9b6a182472b3e4357": "3123401befe0419a229755be73d1cd6b",
".git/objects/66/877af5610439d372ae8cc76cb3e48ffb7a1a10": "97d627d5b7e07c3b833f93e6630809b3",
".git/objects/6d/3f457dfc93570580a244a5dd34d41a3122faef": "13057ccd3f15765dbfcb59771034faf3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/ec1f41aeacf373d064c425e30916b4b2f1b2e6": "5d127046963d6504d7531fd87a939d98",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/807a4927aa2b43f0c5e436fcd1d38e807514f3": "cc7a8f1756662344dc353020d4cc3181",
".git/objects/72/520da7ed85b8911669ebc573fd4abcbf5298a4": "df1d542a974dad3ad6f744445e12caa5",
".git/objects/73/c53f33d20b4c3e1aacb6b1e170d3f3336176a9": "46bac758e776b5d174d56821a96f3999",
".git/objects/74/4d156b838a99ee5f81c9e46ee98ddb7ec571c9": "d33ac4d41fd8bb5cd2124b4db957c045",
".git/objects/7d/590ab4dd81f676751e31fc5cb2cab59a14ab11": "a8a0b9ff0947da377c969a32bbfeef23",
".git/objects/7e/780bcd42b7b816274e1bdb4122f0cdc81d0f63": "50b3e039b93f1095596f2627ec67fc9f",
".git/objects/7f/84121d8aeac6565508745c7240cdc3b30d6a6f": "c8cf3c58ede644c6561775b18b4099af",
".git/objects/81/1e8f965810210a8f5704f52a5d5a21400c3bb8": "538814deab2875899a89c46f9b4cc0b7",
".git/objects/84/25b7b78ae53072008c4e0c3e7cc0afa1e2e90d": "3b0657fab6b4d0883c68bc478b5d034c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/b8aab7fd4af274396a870306ed8c70f0bd7cf7": "8b3266adf16b87bc522c13e8309663b5",
".git/objects/87/e344762ad24407c1cd9628bdcc4dd0c2cdd4ad": "16d759d613b01e781526ff81e6c03ab4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4bba562dc1f019c65b8b72bae3d7e03b7e737e": "c818d2ea214ef3672f21ad2cbeafaac3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/efdab576fd34274322f71112e37bafe82cf505": "eeb61193c0f85f5878166ac00071bc1d",
".git/objects/8e/79550382e44e2f5dbd31c7de01afac1fb381a6": "d7a51083ba3bf595214362d5cdc6b516",
".git/objects/92/352d8c3f016524eaeff29976f7a593e22f3d1f": "62cc501f0d8f40dc1cc79f9025dbb4dd",
".git/objects/94/614e45440f853d7eb1c740fc6d70ae98082846": "7b70ebb22764e92a137c77936c1a2560",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/401ddf2d32c2cee17c742b33ce02ea7580eb0f": "3c6bd48e2bee4f2d68d0fff22793b15f",
".git/objects/a0/b8bd09e7b52257cb3ed570ef940763dae86ec1": "a41cedd06868d95a78fbf055e6d2ed8f",
".git/objects/a1/16c52cfaaf9a72ba270b8adf7213822eafc006": "595b9e0e6e8a077fe377a8ea4666e52f",
".git/objects/a4/3f234b1a0950d980d0c6581f5e75ec597c0acb": "6007224184e48c4b072d7fe2cc97cab6",
".git/objects/a4/aa23e2483cfd7e4653efe19a8f3d03ad7299d4": "6d1283c9462a144ec2129fc0afc4ccf9",
".git/objects/a5/338028a12b8e57f7ddd1f9bc4f0d4200b7b259": "f65c1c78d624a3720b658b8fcc16ec33",
".git/objects/a6/58d10d56f603eed3d3d84ab64e2a17bdb938fe": "904369479f7bdcca75523b838ecd1348",
".git/objects/aa/69da9a22400c3d69975fa5da7659d6fb690e1b": "4931472f5e7e8d4900d37d4c82d7fd91",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/11c9cce9dc271c8710f4bee4daedd629cb3947": "cffb7e27a675ffd36f879405302f8caf",
".git/objects/ae/04c6bf2b5c25bc3e56a4e92bfaae64e3811a0d": "3744a0cc2f455f717d8a532ad162e6f1",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/f4c9d944594fda34c1c087f14ec80b0040ba55": "fe3a59bffaa85b824bdaf2e55e54f79f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/0ea4e734a5c315a00ef7570a99c73e3245c966": "2db870b1e790210cb21fad5179387738",
".git/objects/b4/683231d215c3b347733dcef8f4c5baacb8e0da": "d252bc528c7574a51e316076c3722c71",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/f0c8c00d89de47f05e7e4d9a2eec1a56eed920": "ba16ddc12805e6f8b0a0ee4b124820fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7bf2dd0ff96b8d5ce046ea1f7646a97d8cef3c": "9feadcdee36a9656f423d86865a3a4c4",
".git/objects/b8/2e88fb087431ae7f2c0aaccdafa3ed1d285a00": "5a1d51b5f3b86ccdebe2756ea5fdd464",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/519b6ab90780e3ec998a51da54078a27bc081d": "2e79d528c25f2b9f2c07b8a235ef7c1b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/785f3c7be08752df8b25fcc970ec69d27348d6": "c56e67240233d8e42eca4e03830c0bb2",
".git/objects/c1/d41dfc3c997e26813a10f0a9c6859e5a604a77": "e6150b031951a0465cc15193ef3fb88d",
".git/objects/c3/12cdf641ffc6a71a99bec86718bac1959cfad4": "df8898d81c3b91e948c6254944713432",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/ea4ea8ad8f417d260f82332425bb967b100268": "3a5ef4a211b6de222b5a7872271fd55b",
".git/objects/cf/42608c1f6da7075284b1211e87e320db61ab2d": "8a2d9de9c06419e6f4c8758ee894046a",
".git/objects/d0/4ede6300572a94f6cdac8ce521592905a6189d": "16c357eb8f30b51cafac983aaab6c673",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/03f164f85dfaf24c77e4021d9d83053ba8a7aa": "db66af8c29d264a7e79c2a33e94618d3",
".git/objects/e0/820d9e427e2b776b81d0d1c9abd81366c5e002": "6506e935f246cb990cc1ab1b6f9c54a8",
".git/objects/e1/08e89d6310fa41acb45e70aba2be3143029daf": "4e236fc28568208a07374f37e65a8084",
".git/objects/e3/1d3bbfa49d7b9065c7c981bea50a7e8b266f3e": "d32f0d26a33970ff76fd21961938b21e",
".git/objects/e6/9bc5797a424f4140c21337cb2e7f9133a6be92": "2d0f4775d3240f2c52147712cca8655e",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/06999ef85cacfc2be6d8a058e420db9826dfc8": "72db28aa65eb6aeedcc50a1a665a90f4",
".git/objects/f5/68613908f941c1c8ef1bab707a4a4d460f74d2": "6c1c0105a99e25f3c5ceb561e1de8d87",
".git/objects/fb/54a61780fe78f0708ca75e0558c9e7fa15d6fb": "04ee2c544b7f80dad39639e6e12cc817",
".git/objects/fe/29509cdb8515a45d7f7bf36ce971a3e0cb55b0": "2231214e6cb9e81f6aeeceebda30c103",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/master": "5afd88f9758dc5c3e7a0320d738d636a",
".git/refs/remotes/origin/main": "54ab7309873e564518221a55ca2d7aaa",
".git/refs/remotes/origin/master": "5afd88f9758dc5c3e7a0320d738d636a",
"assets/AssetManifest.bin": "096a2e5fb38f6d4445b8c99815f2f2a4",
"assets/AssetManifest.bin.json": "013f04357779a658ad5f9dad236c8a22",
"assets/AssetManifest.json": "edbc0ca023033845f057cba190877237",
"assets/assets/files/students.xlsx": "7bf48e31abae1a0db9ef5ccd1b7c189f",
"assets/assets/fonts/TS-Safaa-Medium.otf": "b4d69ca65f7bcc60268b9f2a378bdd41",
"assets/assets/images/appbar_image.png": "44ed7d26c91bcef1f32b3252aa013b5e",
"assets/assets/images/appbar_title.png": "e93be0fc42fc2d5f96d9fa70e1694e95",
"assets/assets/images/application.png": "56197931aa12e2ad74980fec5eb18950",
"assets/assets/images/app_logo.png": "7e39432a167139b0f228601c6212e9dc",
"assets/assets/images/Certificate.pdf": "0d7b45e2f6bd561a826795acaf74af5c",
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
"assets/fonts/MaterialIcons-Regular.otf": "d11f287c7fb5919f8f8d6c72208cfa0b",
"assets/NOTICES": "26f1eea80c3adf9b8ba178f5381bfa09",
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
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e5ed452ce3df895afbe78dc7aec9d444",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "bf5c3cd77970db1188f4af89c62d3fac",
"icons/logo_16.png": "806113111702c37a8840b6205c809615",
"icons/logo_32.png": "2e929cb054c0ccc1762578ee87e34bba",
"index.html": "700a57ace2786d87f0cd6e15fa590197",
"/": "700a57ace2786d87f0cd6e15fa590197",
"main.dart.js": "c75cef8a4294de215c4256494701eb61",
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

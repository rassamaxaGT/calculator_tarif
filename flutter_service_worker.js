'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "789363d4fe2b6e64cb3d382ed4f9f3af",
".git/config": "2709f4e8540cdd1e5e4002a719f3d669",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bdc717acf81b6154ca73dd7ffe2fbf4a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e2c5225b4c6ff5690a70a9d177da8ae0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "308066fab7aa98427a2f03cb07cadca4",
".git/logs/refs/heads/main": "7a21f134d42340b72d4459cea8064205",
".git/logs/refs/remotes/origin/HEAD": "87bba82eab4d5fb15f697348825e7524",
".git/logs/refs/remotes/origin/main": "079ea1475559c1b45dbb208b7c276d25",
".git/objects/03/1f063e0fcfd06d4b91970461c7c4e3879081e6": "a190ed2b0762272414b9164ed1305e2a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/5c6c5c6d7172062c2b58daa32474f626329ae7": "822677e036efe39465a7470a70dd56c7",
".git/objects/08/7d49d055f1cbf48889bbb952edebb7fb08fe49": "ebd8dbb354921f020498c6ec5c165ce7",
".git/objects/0b/d7b8669672a03a5463e9871ebc2f2b2cd2f178": "99a0f2f9a5e7087bfc490243409571da",
".git/objects/0c/91ef2fcfe100b229914714a4193c975a96f0bb": "23475406586196446c240d625dd38a2b",
".git/objects/0c/f1ecc5993a830def73a055af57bed7b3a443de": "12937badf65a50ac661a9682ffb8f4fe",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "9ff992df45cf072fcf4e00d974b9363c",
".git/objects/0f/db74da3114b379007b3a23d4065fdb60a10cea": "2bd4b2cb1e4b74d1d0e978a44bcecb9f",
".git/objects/10/e2ee0c3b6c578a00a7a53db5dfa2ac8ee19e96": "3281743d4ca9449d53e558bb612148e1",
".git/objects/12/64086782992f8e579acfa649b5fc65d052042f": "1739c9552bd2601438e533553cabc81e",
".git/objects/13/c16b1be56d0db472eba22062234a0e7b523a6b": "265dd87b2b51d178f46059013c7908f7",
".git/objects/14/b010d7397e04c2f3e6c773297342848c2c0e14": "1d9f03e4ac8e55af696d170f7f202e82",
".git/objects/14/cee7aa5af70725accec54d09a17fa1397e6dc6": "b0f45d366e794b71799406d9cfb56308",
".git/objects/16/a69bf040643e3f047665f05ffb1d6bcf17495b": "ca2f62c3e1305cf761de2fe38ad215fb",
".git/objects/18/a1acbf96f1204325fcf98478c1dd7403d3eade": "0c5d0ca017ceec93d26c50bc6f17d332",
".git/objects/1c/28e529ef350b7215d29894c7aac1fbd55fa73a": "855e74ead0f43e9e076964c8e15a57e8",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1e/81d493af69ef1f8282262bf2ff56ebe5400e52": "ea282865ddf7af14797bad3e49d8b4d7",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/23/e5265b9c3101eea0aa21c5e7a88a392bff6a13": "71d6353ab58ca698752b64eaacca14c0",
".git/objects/24/5dc47d716ef871e7b2b45d33b184ad3556dca5": "62c0b22a1dbeb212023d98cd8acfe977",
".git/objects/26/2ca6b0673fe190597ac1bccd607cb539e4a7fb": "22a80fff0f0fb595a766627d19dab30c",
".git/objects/2c/a0f2698132df15b3565e21c496c64c15b0c27c": "ab6b3b0dcf6e7cad63793e08a2f7cad6",
".git/objects/2e/090d4f0d09efc2a84c816d26fe57bec25bb4ae": "5d79590d4fe5cffb22473cecaedad2b4",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/31/daaa2ec2c7f96bbe8795f4306dc8449cb8beeb": "757cfbd6e41af302a1a7f4fb514cae82",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/ca754eb011a6477681d281f1f1c926cdf5ed8f": "ffc4ab291086d6fc32707a679b92e388",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3e/3d28a03d5749199b47a4f553728503443b3b45": "516f04df686fa8aa80bb1e9507e080dc",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/28d7dc8015672bcf49993525871700159b2982": "8acce0d8d9b2f98ed97d0fac06297351",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/e9fabef1d4e2dbbb788cea2ccfeef5cbacd502": "9c2fd1c092aef90eb8e294fc368ce0a2",
".git/objects/44/2aa2cc850909ac0ac833869d2583ff83ad842b": "5cd5da8970bb62215d6a209b8f58917d",
".git/objects/45/eed96c4160a7964dfb78c385272414a83df959": "e050c0903972564cc6efc0c441bd310f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/4c/75dc1f198ade7e0bcc6d4fed9387cfae08f5be": "fef375afaf8d098151c453cf5b336103",
".git/objects/4e/0696b027cefd2fbbb8876d5a19a6f49a6f4ae2": "a00f0550a1a9914b15606d5d8020daeb",
".git/objects/4e/be367caab81feae68a179f49493e722f3825e0": "49439db72f0d98c48e1f74d9a0526aa2",
".git/objects/51/c478e604eec0c4bd984d7554ffcee851c1e7e8": "260d7519e3d7a517ef77df3f579b3b4a",
".git/objects/52/3b670a646cf77baef93d3048b63cd152344030": "2d58e7abca78fa9a751fe23146128bf8",
".git/objects/52/66156f47fed1880ba4a7b8df1e120750322a76": "fa954f0d2ed96f8518fdf682f2c16662",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/59/1ae6d9d15fca7e4fa7f9ca30bb84468b76442e": "fb27f15e3f7d82742f3df1b41f61537b",
".git/objects/5c/1d16c7eeb2846a400dc39e87e2f0abe418ca13": "9ef139d7b150cb5185ee1d7499525f7a",
".git/objects/5e/9057e04d795259de51d020db4c78b09017aac7": "069534ac0893735fb56eaf4cce0189fd",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/61c9493bedb887a9b81b840084a1522cdf483f": "26444f43f51f570cbb1dba28c197dd1c",
".git/objects/69/4135b151699d6afd7ef3976b6a97c32e5a8292": "2fb40e1e3271fd185926ac23c880d7e6",
".git/objects/69/b9798c619ff5c90324bd34a74f935256aba53f": "4bdde1d8971daf19a6f376d1f1b7ad0e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/e26a351a44661463a9f0cf3e3274791a5c9628": "283a27ec3d58e03227cea3a6e3757cde",
".git/objects/6e/829b88314364e26845e0039ef33d51b1066410": "e6659029019faa29568ca1523c2d07e5",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/78/7abf7a008d0cb98ebeeba4c1488b966984ff16": "0a363ec6c145f61326b62855644189f0",
".git/objects/7a/fd936a2b67b864f1688aab3f44b28b3e5e90a1": "e86a35363b4c9083606628863bf596f8",
".git/objects/7b/31280194fb076e1c6f4fc0109d6f79ed585f95": "13a5b805200e425af2ba18ec67e62e95",
".git/objects/7d/5944aba6a72f743503843da1d4cce8336ad840": "19cebb7477f811ee7e80d99f60d29142",
".git/objects/7d/bc765d3986b0b7845ad4d816bde17a51eabfa2": "df0eb0bda1fe42e9f52fad1ace95cd10",
".git/objects/82/95b7dba4798ccc063b12d301ad3886ebad70a6": "3819ca9430df5d559146849c33572a38",
".git/objects/83/e38c9028e5b81737c7f1d38f0342400ce14244": "8b8c975b93702f8de953fb0b811e078b",
".git/objects/88/964754884142307ed6d7e4ed7e69b614ddbfbf": "5e6eaf434b21dbe68ba47a21e821f28a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7465290fde36e1aeb567204d10cbe0f0cf7bc5": "d7b240491b75aa9e501a64b17b9bf77a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcee14f790c692d212e6353db4907e73820cb5": "16eb65b2d07c751faa27d536783762e0",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/e096d66660a3b9e6e17ef6fb2e6ade27696104": "2c46278e7a73e635e7a4adea19e8e1bb",
".git/objects/92/60bd2afd93af5cae84f7d7e07acfa3ed763469": "15a4931435f570b70fdb0fba79870f1d",
".git/objects/95/27eae53c6dde6b2fc009d2b6a80bc6d3130558": "89b942d7743d32d74fac0fdf46462662",
".git/objects/96/4be6f62f9f416b3bc4adfcfce629f96878fc18": "e4d0c64ae7a5fa082a1886be5b328d9a",
".git/objects/97/508380b5d9ee0d0301d9487e84965a8ab3ffb0": "8806e54cf7b8b3ec5b6354e46473a9c3",
".git/objects/98/18186fd73d1aa0326f843db255242d5185901a": "f1a66dda345acbcbc3399abab7dd6d1a",
".git/objects/99/c82f72dca7c20109f8364b5bf37503ce931bc6": "b6196ce2a4d0861e35aa8a39d87f9c89",
".git/objects/9a/15cb99558e6a82ed1e0730b137adda1b7880af": "72212769737d03ca722c89f3b6ceb572",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9a/b2b2bd0132ec7c1b9b99ec485bd81503dc7ab8": "0cdde28a61762428ee39256cda2c2d17",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a3/25a1ef25631167479f51c4a70fefc4e73d1244": "c9dbff16b656e3763b91dcb9d276d9a1",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/99724bd4f81500cac8bd2bbc8c6726fa6904c4": "e0fc5048c0182b8b60afaca2e41c50d8",
".git/objects/a8/00b4cc33ebd03852f24808a8a9e002b43b6fc2": "febc8394cf28cf775a21361c3acca7e6",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/8f481c99b0877fd3873a7a752e925751360936": "3f5b20a172632cd6256aca18391bd380",
".git/objects/ac/d0cdae307a833c8854de9e501d9a5430d5adef": "533b5886f77248a14d8d6cc3b7f2fe6c",
".git/objects/b0/c394aebeb1badad7f7392d366e57b4ad6f770f": "4b4220f0fedff379913c80a3cfee5316",
".git/objects/b1/83bfdba6436bbc410d6a75292598bdb124cc66": "7ae6fec26b1c9b3e0056b642d1fadb33",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/946226de5a47f8fedc8f2a1e94986efa359d4c": "a06743ec9b1dbc4bba6479f99d8832ee",
".git/objects/c0/a7ae0e0050af12d43cada3578b2531b00e6ad4": "61576317bea8cefed75d5d1669d584f0",
".git/objects/c2/c90de7c4c0610ba16fac1c3ff3d019a999bfe3": "a71fed71ae81598601a18b48c6f906c4",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/c7/7de4c7a25033c73f092f304e0f16d148581369": "6911c46a9d5be3e7a7aeeb6e5909e53b",
".git/objects/c7/d218f0f9ea8a5ed84e021e42866f859414b209": "4c65ade6703f4b7499bab3cd12c24e03",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/e4bafd5fa3466e7d2f0d43bdf7b87b071278e9": "7a3e3068a95474d373e2763acd0add67",
".git/objects/cf/e326bd26a7a3c433c2f91bb0c303289d20130b": "b3d02b0c48f1eca6f0ad7525505fdee6",
".git/objects/d0/b3b05d2af4f531999198b153b58451e841f2a4": "7af794f2ddff1a87b5b9a5f98dc5f34c",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d889189cb652e38ac22907973ea71742304645": "f7a5ae8c40300543a145d286c4a8f4c8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/ff0f34b1e3f5a818c5056e6b970509093fecfc": "908ee46ac68beb67256d0f624e1bacc3",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/b14602317ce9fa09302eac67a97322a5e9954a": "ed224f300bc1a0b4137bf770e4375308",
".git/objects/db/b75082530d0cfbb72c1ac080efdca2af5c8a2b": "efd7ce159e4e517eb36e031530b1f104",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e1/5ea1b98320728dec6a940d1b124add9166689c": "6d5901141414f1ac435f9919c61395a0",
".git/objects/e1/8003b2041d8220f7a746887cc55886f591673a": "228aeb381a3e00caf99f14d4d514a637",
".git/objects/e1/bbb5319c4ecaf4e24e3f4df2929d62544c7d69": "0edb90e90a8310cd5246d63324ed0cb8",
".git/objects/e4/5af208a5a3e8dad7ac24a896738c50eb6b01c7": "dbafed8d3a84382ab193631a4969e2d1",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a95978169f8a86fcdb0c1ec1c1d8d05a335609": "27d28a6cf25914bee40ccda1b3c56a27",
".git/objects/ee/0c38f4fe153194d2b49349a6fd189b8b072cbe": "009178ddf3a19657e496076367805608",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/c4267b7b8aaf3fefbda4a4cbaed1f9633775bc": "7a3129edc7665c3ba0c387f718b6ef40",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/2859af9fdead2c98119a9ad5ef96bcd50fdba5": "d45dcc16236d32bf52ca9b943789a15b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/362fc0d7cb5e19ff645ebd5b40817722621498": "c428d70232a8d279ee90439d68a3644d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/9c30fa6c3ea35a80412a37617ee2088dd51ac1": "917649a2e1b82a1e3bdd0e92740d5124",
".git/objects/f6/0fff998981e0d376c60a1b69fc8b61a6d18404": "d73eacedf0935349c9cab44780ab2d3a",
".git/objects/f7/c4a6d1110e026258a9a2b6ca40b8b2b8d420a3": "5a012e3b3e998e11bf33142b7375dd54",
".git/objects/f8/08fa4d7aec2bb5aebe2d3e1b89694351475bf2": "83269371d8ffdf24cd3c365e38707fdd",
".git/objects/fa/f1ee2c7f29bce279f2d4920b7e20935fd6e623": "4e21f21293feaa6c7d4f97877cbc2aba",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/ff/2d32a3127f7877f6b32393ff34b640bec50732": "e1c5307d175cc4447c379abbf86b0429",
".git/ORIG_HEAD": "ee30616cfee48e795c43ed1189d658b3",
".git/refs/heads/main": "6afb2f657e9a02ec1e265aaf59342390",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6afb2f657e9a02ec1e265aaf59342390",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "433def2ace4b756545be71b345609fa7",
"assets/NOTICES": "b6f2f522b6601619715b3ceed5e78265",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "b918319ae14a86a3921431f3215a1373",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf94afaa4a92f7f93d9e821ee5df8458",
"/": "bf94afaa4a92f7f93d9e821ee5df8458",
"main.dart.js": "7c52a6dc3f3f1344e611c563cb1d9d15",
"manifest.json": "820af74f6420a2e5cb4458ef9c9f87d9",
"version.json": "b10af9a191a0e3393f6f476004202695"};
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

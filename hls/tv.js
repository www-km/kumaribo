document.addEventListener('DOMContentLoaded', function() {
    // Datos de los episodios con URLs para video y subtítulos
    const episodes = [
       {
            id: 01,
            title: "Anime Onegai",
            videoSources: [
                { resolution: "auto", url: "https://d2se29pyn6ypkx.cloudfront.net/v1/master/964e44f31073da95414e409f230fb47a468175f5/6469fafa-ca3b-40cd-b903-ab9c3eeea757/6469fafa-ca3b-40cd-b903-ab9c3eeea757/playlist.m3u8"},
                { resolution: "360p", url: "https://d2se29pyn6ypkx.cloudfront.net/v1/manifest/964e44f31073da95414e409f230fb47a468175f5/6469fafa-ca3b-40cd-b903-ab9c3eeea757/e3189d1f-b9c7-4057-b23d-53cc2c427f45/0.m3u8"},
                { resolution: "480p", url: "https://d2se29pyn6ypkx.cloudfront.net/v1/manifest/964e44f31073da95414e409f230fb47a468175f5/6469fafa-ca3b-40cd-b903-ab9c3eeea757/091e8444-19af-4fbc-92cf-7907c52009fa/1.m3u8"},
                { resolution: "720p", url: "https://d2se29pyn6ypkx.cloudfront.net/v1/manifest/964e44f31073da95414e409f230fb47a468175f5/6469fafa-ca3b-40cd-b903-ab9c3eeea757/3891e1ad-49a7-474a-a4c7-8b851a526ec6/2.m3u8" },
                { resolution: "1080p", url: "https://d2se29pyn6ypkx.cloudfront.net/v1/manifest/964e44f31073da95414e409f230fb47a468175f5/6469fafa-ca3b-40cd-b903-ab9c3eeea757/dfca6efc-2341-4b6b-a9d8-61747c6bdf45/3.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 02,
            title: "Anime Onegai Accion",
            videoSources: [
                { resolution: "auto", url: "https://ads.its-newid.net/api/manifest.m3u8?tp=anime_onegai&channel_name=animeonegaiaction&channel_id=newid_224&apikey=a901ef27-19cf-3555-851d-f79cec883afb&auth=cb6161ae-aca4fe4f-2704d8a5-73b36116&ads.live=[CONTENT_LIVE]&ads.deviceid=[DEVICE_ID]&ads.ifa=d6dd667d-5781-45de-b112-8a3b49858730&ads.ifatype=dpid&ads.lat=[LMT]&ads.donotsell=[DNS]&ads.ip=[IP]&ads.gdpr=[GDPR]&ads.gdprconsent=[GDPR_CONSENT]&ads.country=[COUNTRY]&ads.us_privacy=[US_PRIVACY]&ads.appstoreurl=https%3A%2F%2Fwww.animeonegai.com&ads.bundleid=com.anime.onegai&ads.appname=Anime+Onegai&ads.appversion=1.0.0&ads.devicetype=[DEVICE_TYPE]&ads.devicemake=[DEVICE_MAKE]&ads.devicemodel=[DEVICE_MODEL]&ads.targetad=[TARGETAD_ALLOWED]&ads.content_title=[PROGRAM_TITLE]&ads.content_series=[SERIES_TITLE]&ads.content_season=[SEASON_TITLE]&ads.content_episode=[EPISODE_NO]&ads.content_length=[CONTENT_LENGTH]&ads.gender=M&ads.yob=1998&ads.ua=[UA]"},
                { resolution: "360p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebo22kjeupd4m8in1g/640x360_1020800_2_f.m3u8?i=586_11057"},
                { resolution: "540p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebo22kjeupd4m8in1g/960x540_1790800_1_f.m3u8?i=586_11057"},
                { resolution: "720p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebo22kjeupd4m8in1g/1280x720_3440800_0_f.m3u8?i=586_11057" }
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
         {
            id: 03,
            title: "Anime Onegai Comedia",
            videoSources: [
                { resolution: "auto", url: "https://ads.its-newid.net/api/manifest.m3u8?tp=anime_onegai&channel_name=animeonegaicomedy&channel_id=newid_227&apikey=a901ef27-19cf-3555-851d-f79cec883afb&auth=b5192908-4fed49ed-361f412c-90fad6b4&ads.live=[CONTENT_LIVE]&ads.deviceid=[DEVICE_ID]&ads.ifa=d6dd667d-5781-45de-b112-8a3b49858730&ads.ifatype=dpid&ads.lat=[LMT]&ads.donotsell=[DNS]&ads.ip=[IP]&ads.gdpr=[GDPR]&ads.gdprconsent=[GDPR_CONSENT]&ads.country=[COUNTRY]&ads.us_privacy=[US_PRIVACY]&ads.appstoreurl=https%3A%2F%2Fwww.animeonegai.com&ads.bundleid=com.anime.onegai&ads.appname=Anime+Onegai&ads.appversion=1.0.0&ads.devicetype=[DEVICE_TYPE]&ads.devicemake=[DEVICE_MAKE]&ads.devicemodel=[DEVICE_MODEL]&ads.targetad=[TARGETAD_ALLOWED]&ads.content_title=[PROGRAM_TITLE]&ads.content_series=[SERIES_TITLE]&ads.content_season=[SEASON_TITLE]&ads.content_episode=[EPISODE_NO]&ads.content_length=[CONTENT_LENGTH]&ads.gender=M&ads.yob=1998&ads.ua=[UA]"},
                { resolution: "360p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0eba98f4p5o6f80cghg/640x360_690800_2_f.m3u8?i=586_11060"},
                { resolution: "540p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebb3a8a4fooiqbt2s0/960x540_1020800_1_f.m3u8?i=586_11060"},
                { resolution: "720p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebbcvtrmgi8mrdr19g/1280x720_1900800_0_f.m3u8?i=586_11060" }
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
          ]
          },
          {
            id: 04,
            title: "Anime Onegai Drama",
            videoSources: [
                { resolution: "auto", url: "https://ads.its-newid.net/api/manifest.m3u8?tp=anime_onegai&channel_name=animeonegaidrama&channel_id=newid_226&apikey=a901ef27-19cf-3555-851d-f79cec883afb&auth=9f31116a-a7fad94c-8fc6cb94-78ed4615&ads.live=[CONTENT_LIVE]&ads.deviceid=[DEVICE_ID]&ads.ifa=d6dd667d-5781-45de-b112-8a3b49858730&ads.ifatype=dpid&ads.lat=[LMT]&ads.donotsell=[DNS]&ads.ip=[IP]&ads.gdpr=[GDPR]&ads.gdprconsent=[GDPR_CONSENT]&ads.country=[COUNTRY]&ads.us_privacy=[US_PRIVACY]&ads.appstoreurl=https%3A%2F%2Fwww.animeonegai.com&ads.bundleid=com.anime.onegai&ads.appname=Anime+Onegai&ads.appversion=1.0.0&ads.devicetype=[DEVICE_TYPE]&ads.devicemake=[DEVICE_MAKE]&ads.devicemodel=[DEVICE_MODEL]&ads.targetad=[TARGETAD_ALLOWED]&ads.content_title=[PROGRAM_TITLE]&ads.content_series=[SERIES_TITLE]&ads.content_season=[SEASON_TITLE]&ads.content_episode=[EPISODE_NO]&ads.content_length=[CONTENT_LENGTH]&ads.gender=M&ads.yob=1998&ads.ua=[UA]"},
                { resolution: "360p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebh3me6to3q1k1oa90/640x360_690800_2_f.m3u8?i=586_11059"},
                { resolution: "540p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebhcof4p5o6f80g70g/960x540_1020800_1_f.m3u8?i=586_11059"},
                { resolution: "720p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebhpplme1i1jda3rn0/1280x720_1900800_0_f.m3u8?i=586_11059" }
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 05,
            title: "Anime Onegai Sci-Fi",
            videoSources: [
                { resolution: "auto", url: "https://ads.its-newid.net/api/manifest.m3u8?tp=anime_onegai&channel_name=animeonegaisci-fi&channel_id=newid_228&apikey=a901ef27-19cf-3555-851d-f79cec883afb&auth=e9f14577-97602c45-636abe81-4877b31c&ads.live=[CONTENT_LIVE]&ads.deviceid=[DEVICE_ID]&ads.ifa=d6dd667d-5781-45de-b112-8a3b49858730&ads.ifatype=dpid&ads.lat=[LMT]&ads.donotsell=[DNS]&ads.ip=[IP]&ads.gdpr=[GDPR]&ads.gdprconsent=[GDPR_CONSENT]&ads.country=[COUNTRY]&ads.us_privacy=[US_PRIVACY]&ads.appstoreurl=https%3A%2F%2Fwww.animeonegai.com&ads.bundleid=com.anime.onegai&ads.appname=Anime+Onegai&ads.appversion=1.0.0&ads.devicetype=[DEVICE_TYPE]&ads.devicemake=[DEVICE_MAKE]&ads.devicemodel=[DEVICE_MODEL]&ads.targetad=[TARGETAD_ALLOWED]&ads.content_title=[PROGRAM_TITLE]&ads.content_series=[SERIES_TITLE]&ads.content_season=[SEASON_TITLE]&ads.content_episode=[EPISODE_NO]&ads.content_length=[CONTENT_LENGTH]&ads.gender=M&ads.yob=1998&ads.ua=[UA]"},
                { resolution: "360p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebjeci05of9e4ntl40/640x360_1020800_2_f.m3u8?i=586_11061"},
                { resolution: "540p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebjl1lme1i1jda4qng/960x540_1790800_1_f.m3u8?i=586_11061"},
                { resolution: "720p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebjrue6to3q1k1pdtg/1280x720_3440800_0_f.m3u8?i=586_11061" }
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 06,
            title: "Anime Onegai Sport",
            videoSources: [
                { resolution: "auto", url: "https://ads.its-newid.net/api/manifest.m3u8?tp=anime_onegai&channel_name=animeonegaisports&channel_id=newid_225&apikey=a901ef27-19cf-3555-851d-f79cec883afb&auth=e14959cc-44b36eee-9edd521d-9ba4f1b7&ads.live=[CONTENT_LIVE]&ads.deviceid=[DEVICE_ID]&ads.ifa=d6dd667d-5781-45de-b112-8a3b49858730&ads.ifatype=dpid&ads.lat=[LMT]&ads.donotsell=[DNS]&ads.ip=[IP]&ads.gdpr=[GDPR]&ads.gdprconsent=[GDPR_CONSENT]&ads.country=[COUNTRY]&ads.us_privacy=[US_PRIVACY]&ads.appstoreurl=https%3A%2F%2Fwww.animeonegai.com&ads.bundleid=com.anime.onegai&ads.appname=Anime+Onegai&ads.appversion=1.0.0&ads.devicetype=[DEVICE_TYPE]&ads.devicemake=[DEVICE_MAKE]&ads.devicemodel=[DEVICE_MODEL]&ads.targetad=[TARGETAD_ALLOWED]&ads.content_title=[PROGRAM_TITLE]&ads.content_series=[SERIES_TITLE]&ads.content_season=[SEASON_TITLE]&ads.content_episode=[EPISODE_NO]&ads.content_length=[CONTENT_LENGTH]&ads.gender=M&ads.yob=1998&ads.ua=[UA]"},
                { resolution: "360p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebl2plme1i1jda5jh0/640x360_1020800_2_f.m3u8?i=586_11058"},
                { resolution: "540p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0ebl9ntrmgi8mre0ru0/960x540_1790800_1_f.m3u8?i=586_11058"},
                { resolution: "720p", url: "https://stream-us-east-1.getpublica.com/cl/250508d0eblgme6to3q1k1q4mg/1280x720_3440800_0_f.m3u8?i=586_11058" }
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 07,
            title: "FreeTV Accion",
            videoSources: [
                { resolution: "Auto", url: "https://tinyurl.com/295567al"},
                { resolution: "240p", url: "https://tinyurl.com/248ep345"},
                { resolution: "360p", url: "https://tinyurl.com/23vehyzb"},
                { resolution: "480p", url: "https://tinyurl.com/22dzj8el" },
                { resolution: "720p", url: "https://tinyurl.com/23kcbf7r"},
                { resolution: "1080p", url: "https://tinyurl.com/22om9tqf"}
            ],
            subtitleTracks: [
               { 
               language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 08,
            title: "FreeTV Asia (requiere vpn-ip-usa)",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Asia.m3u8"},
                { resolution: "240p", url: "https://amg01024-amg01024c30-freetv-us-6969.playouts.now.amagi.tv/playlist/amg01024-olympusatfast-olyfreetvasia-freetvus/cb543d1a796c6c8d84c83a64cef042a8f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b69530acd5c5cb0f35abefdb00e40c56da0e71c559d2e44b49f46cfd71ee9d3d70fca408774fb0da7a1a4d2873290bc816aff56e0600d0a212b9dd32cc09d5be6db9b6a3acf222b124f00b7f491aa1f6fdc352939fffac5ad608d7aa4ee0482633e18d39615d55ae76aba1998f25aafbfbee0575335d684311f2fb4f1b099a17a7caa71ececefcf76798de05a7b48c422dc273d3193f8d84eeea97692b837f7d7037c689ae52ff188a1bcffa2845c9d26d3b592f25913774d2a58f237ca9b7dcb16d379a5cb6149362b62bf9f50f0b0831a5a084e969061d60615bdd78ef1a9644fc96f1614e76cc0561579df357832c33ffc9f085ad34a60e03632eb4834f22196d97cc752ba8f7e5334755a20850dda8648bfc30ca079395d4280e62d4b405f0fa884042311090ec179b1b08c590612f8ff8ddfcd562a0e3a16287fe33535a7f9fcac071204d55b6642710210930a941cb7a098d74cbb7cfd86731eab03366dcca22d4e5f75dcafdbe4d7819a10e22d99a7755e5e74e427dbd200024eaa52e07632ccaa4cda1d156c2e339c0a5f50e396c8aab78579f1a56bb83358e702aff53a4e135b7f6f0bd4c526871eaaab4ce8c08a70c5e1980a059d64f53e46ca999c4de8fd8dc2780a92815e0d28c280708b207b875fff03bcff5c94f0590f1739006fc78d5ff016f9fc92d5249729e21e5028a428f5ccade3965557e190583a7c5c06403101205e6bd2bff96d0e6ef4c6668c3bc1e45aae4e51495164d6900f5383a83a5cb03c7075bde2acafa8d90804c57efe169837534636cbc36b6c5e0d546f2258d90c76665b1e42da591c77/170/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-amg01024c30-freetv-us-6969.playouts.now.amagi.tv/playlist/amg01024-olympusatfast-olyfreetvasia-freetvus/cb543d1a796c6c8d84c83a64cef042a8f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b69530acd5c5cb0f35abefdb00e40c56da0e71c559d2e44b49f46cfd71ee9d3d70fca408774fb0da7a1a4d2873290bc816aff56e0600d0a212b9dd32cc09d5be6db9b6a3acf222b124f00b7f491aa1f6fdc352939fffac5ad608d7aa4ee0482633e18d39615d55ae76aba1998f25aafbfbee0575335d684311f2fb4f1b099a17a7caa71ececefcf76798de05a7b48c422dc273d3193f8d84eeea97692b837f7d7037c689ae52ff188a1bcffa2845c9d26d3b592f25913774d2a58f237ca9b7dcb16d379a5cb6149362b62bf9f50f0b0831a5a084e969061d60615bdd78ef1a9644fc96f1614e76cc0561579df357832c33ffc9f085ad34a60e03632eb4834f22196d97cc752ba8f7e5334755a20850dda8648bfc30ca079395d4280e62d4b405f0fa884042311090ec179b1b08c590612f8ff8ddfcd562a0e3a16287fe33535a7f9fcac071204d55b6642710210930a941cb7a098d74cbb7cfd86731eab03366dcca22d4e5f75dcafdbe4d7819a10e22d99a7755e5e74e427dbd200024eaa52e07632ccaa4cda1d156c2e339c0a5f50e396c8aab78579f1a56bb83358e702aff53a4e135b7f6f0bd4c526871eaaab4ce8c08a70c5e1980a059d64f53e46ca999c4de8fd8dc2780a92815e0d28c280708b207b875fff03bcff5c94f0590f1739006fc78d5ff016f9fc92d5249729e21e5028a428f5ccade3965557e190583a7c5c06403101205e6bd2bff96d0e6ef4c6668c3bc1e45aae4e51495164d6900f5383a83a5cb03c7075bde2acafa8d90804c57efe169837534636cbc36b6c5e0d546f2258d90c76665b1e42da591c77/170/640x360_1057680/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-amg01024c30-freetv-us-6969.playouts.now.amagi.tv/playlist/amg01024-olympusatfast-olyfreetvasia-freetvus/cb543d1a796c6c8d84c83a64cef042a8f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b69530acd5c5cb0f35abefdb00e40c56da0e71c559d2e44b49f46cfd71ee9d3d70fca408774fb0da7a1a4d2873290bc816aff56e0600d0a212b9dd32cc09d5be6db9b6a3acf222b124f00b7f491aa1f6fdc352939fffac5ad608d7aa4ee0482633e18d39615d55ae76aba1998f25aafbfbee0575335d684311f2fb4f1b099a17a7caa71ececefcf76798de05a7b48c422dc273d3193f8d84eeea97692b837f7d7037c689ae52ff188a1bcffa2845c9d26d3b592f25913774d2a58f237ca9b7dcb16d379a5cb6149362b62bf9f50f0b0831a5a084e969061d60615bdd78ef1a9644fc96f1614e76cc0561579df357832c33ffc9f085ad34a60e03632eb4834f22196d97cc752ba8f7e5334755a20850dda8648bfc30ca079395d4280e62d4b405f0fa884042311090ec179b1b08c590612f8ff8ddfcd562a0e3a16287fe33535a7f9fcac071204d55b6642710210930a941cb7a098d74cbb7cfd86731eab03366dcca22d4e5f75dcafdbe4d7819a10e22d99a7755e5e74e427dbd200024eaa52e07632ccaa4cda1d156c2e339c0a5f50e396c8aab78579f1a56bb83358e702aff53a4e135b7f6f0bd4c526871eaaab4ce8c08a70c5e1980a059d64f53e46ca999c4de8fd8dc2780a92815e0d28c280708b207b875fff03bcff5c94f0590f1739006fc78d5ff016f9fc92d5249729e21e5028a428f5ccade3965557e190583a7c5c06403101205e6bd2bff96d0e6ef4c6668c3bc1e45aae4e51495164d6900f5383a83a5cb03c7075bde2acafa8d90804c57efe169837534636cbc36b6c5e0d546f2258d90c76665b1e42da591c77/170/848x480_1686360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-amg01024c30-freetv-us-6969.playouts.now.amagi.tv/playlist/amg01024-olympusatfast-olyfreetvasia-freetvus/cb543d1a796c6c8d84c83a64cef042a8f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b69530acd5c5cb0f35abefdb00e40c56da0e71c559d2e44b49f46cfd71ee9d3d70fca408774fb0da7a1a4d2873290bc816aff56e0600d0a212b9dd32cc09d5be6db9b6a3acf222b124f00b7f491aa1f6fdc352939fffac5ad608d7aa4ee0482633e18d39615d55ae76aba1998f25aafbfbee0575335d684311f2fb4f1b099a17a7caa71ececefcf76798de05a7b48c422dc273d3193f8d84eeea97692b837f7d7037c689ae52ff188a1bcffa2845c9d26d3b592f25913774d2a58f237ca9b7dcb16d379a5cb6149362b62bf9f50f0b0831a5a084e969061d60615bdd78ef1a9644fc96f1614e76cc0561579df357832c33ffc9f085ad34a60e03632eb4834f22196d97cc752ba8f7e5334755a20850dda8648bfc30ca079395d4280e62d4b405f0fa884042311090ec179b1b08c590612f8ff8ddfcd562a0e3a16287fe33535a7f9fcac071204d55b6642710210930a941cb7a098d74cbb7cfd86731eab03366dcca22d4e5f75dcafdbe4d7819a10e22d99a7755e5e74e427dbd200024eaa52e07632ccaa4cda1d156c2e339c0a5f50e396c8aab78579f1a56bb83358e702aff53a4e135b7f6f0bd4c526871eaaab4ce8c08a70c5e1980a059d64f53e46ca999c4de8fd8dc2780a92815e0d28c280708b207b875fff03bcff5c94f0590f1739006fc78d5ff016f9fc92d5249729e21e5028a428f5ccade3965557e190583a7c5c06403101205e6bd2bff96d0e6ef4c6668c3bc1e45aae4e51495164d6900f5383a83a5cb03c7075bde2acafa8d90804c57efe169837534636cbc36b6c5e0d546f2258d90c76665b1e42da591c77/170/1280x720_3329040/index.m3u8"},
                { resolution: "1080p", url:"https://amg01024-amg01024c30-freetv-us-6969.playouts.now.amagi.tv/playlist/amg01024-olympusatfast-olyfreetvasia-freetvus/cb543d1a796c6c8d84c83a64cef042a8f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b69530acd5c5cb0f35abefdb00e40c56da0e71c559d2e44b49f46cfd71ee9d3d70fca408774fb0da7a1a4d2873290bc816aff56e0600d0a212b9dd32cc09d5be6db9b6a3acf222b124f00b7f491aa1f6fdc352939fffac5ad608d7aa4ee0482633e18d39615d55ae76aba1998f25aafbfbee0575335d684311f2fb4f1b099a17a7caa71ececefcf76798de05a7b48c422dc273d3193f8d84eeea97692b837f7d7037c689ae52ff188a1bcffa2845c9d26d3b592f25913774d2a58f237ca9b7dcb16d379a5cb6149362b62bf9f50f0b0831a5a084e969061d60615bdd78ef1a9644fc96f1614e76cc0561579df357832c33ffc9f085ad34a60e03632eb4834f22196d97cc752ba8f7e5334755a20850dda8648bfc30ca079395d4280e62d4b405f0fa884042311090ec179b1b08c590612f8ff8ddfcd562a0e3a16287fe33535a7f9fcac071204d55b6642710210930a941cb7a098d74cbb7cfd86731eab03366dcca22d4e5f75dcafdbe4d7819a10e22d99a7755e5e74e427dbd200024eaa52e07632ccaa4cda1d156c2e339c0a5f50e396c8aab78579f1a56bb83358e702aff53a4e135b7f6f0bd4c526871eaaab4ce8c08a70c5e1980a059d64f53e46ca999c4de8fd8dc2780a92815e0d28c280708b207b875fff03bcff5c94f0590f1739006fc78d5ff016f9fc92d5249729e21e5028a428f5ccade3965557e190583a7c5c06403101205e6bd2bff96d0e6ef4c6668c3bc1e45aae4e51495164d6900f5383a83a5cb03c7075bde2acafa8d90804c57efe169837534636cbc36b6c5e0d546f2258d90c76665b1e42da591c77/170/1920x1080_6046040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 09,
            title: "FreeTV Banda",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Banda.m3u8"},
                { resolution: "240p", url: "https://amg01024-olympusat-mmcfreetv-ono-ad-kj.amagi.tv/playlist/amg01024-olympusat-mmcfreetv-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e5ccb095ab4a50fa6e2e30c448b71a0b04a48887e40b2875f9cd61abf86dc0d98108f7fa01ebca8c6da87539cdfc2419e6d871d287a6f2cc3c413e5ca52b8ce9f672da3723d550a5aeb9cc2c15e3d94464e2e9295a3b66beb16dc87248d3a46d16a994b977e83789505a6f53cc3c7da8f183553ced1485e37b2ecb68bf82c41db0c9ff3d0f35d26d19c7a7943da23d9323b0792e8c51088c667e0dc5786bb645337cc88488b88a182fbfeab589920fef1aedb572b4f67174c8158ac8868a95fb70c87dc1a26554345a19f468482dc1e16704a83b4688e5e71deda8f90910a32ce125930a8658f025d6fce6c3d24b375a0c33f3ad9235cd5333ff90134d511adb97ef3fe82bf6851d2dfc351b16be1a178b19c63f93744336eb2f63f11445c6defe06700350bab2f82f5d8e4723d36b68fa790c1572b492c046d1c99ebf1719897b24f7772906a084e2e457de705d27a9101591011da0adcbe0c4b90142d5fa6cd41554e7886dbebcec8c1dd53fb79c1caf82d39755a6cb07c012378dab5884aa74821177b599341674cad175b3089ffa8b5c3f704a99d60b97677066fb79c7d2b0f4076661e8dde6bd853d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97d8daf47e1e541e5ac3b12f42c7c1947237b53f782/88/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-olympusat-mmcfreetv-ono-ad-kj.amagi.tv/playlist/amg01024-olympusat-mmcfreetv-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e5ccb095ab4a50fa6e2e30c448b71a0b04a48887e40b2875f9cd61abf86dc0d98108f7fa01ebca8c6da87539cdfc2419e6d871d287a6f2cc3c413e5ca52b8ce9f672da3723d550a5aeb9cc2c15e3d94464e2e9295a3b66beb16dc87248d3a46d16a994b977e83789505a6f53cc3c7da8f183553ced1485e37b2ecb68bf82c41db0c9ff3d0f35d26d19c7a7943da23d9323b0792e8c51088c667e0dc5786bb645337cc88488b88a182fbfeab589920fef1aedb572b4f67174c8158ac8868a95fb70c87dc1a26554345a19f468482dc1e16704a83b4688e5e71deda8f90910a32ce125930a8658f025d6fce6c3d24b375a0c33f3ad9235cd5333ff90134d511adb97ef3fe82bf6851d2dfc351b16be1a178b19c63f93744336eb2f63f11445c6defe06700350bab2f82f5d8e4723d36b68fa790c1572b492c046d1c99ebf1719897b24f7772906a084e2e457de705d27a9101591011da0adcbe0c4b90142d5fa6cd41554e7886dbebcec8c1dd53fb79c1caf82d39755a6cb07c012378dab5884aa74821177b599341674cad175b3089ffa8b5c3f704a99d60b97677066fb79c7d2b0f4076661e8dde6bd853d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97d8daf47e1e541e5ac3b12f42c7c1947237b53f782/88/640x360_1057680/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-olympusat-mmcfreetv-ono-ad-kj.amagi.tv/playlist/amg01024-olympusat-mmcfreetv-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e5ccb095ab4a50fa6e2e30c448b71a0b04a48887e40b2875f9cd61abf86dc0d98108f7fa01ebca8c6da87539cdfc2419e6d871d287a6f2cc3c413e5ca52b8ce9f672da3723d550a5aeb9cc2c15e3d94464e2e9295a3b66beb16dc87248d3a46d16a994b977e83789505a6f53cc3c7da8f183553ced1485e37b2ecb68bf82c41db0c9ff3d0f35d26d19c7a7943da23d9323b0792e8c51088c667e0dc5786bb645337cc88488b88a182fbfeab589920fef1aedb572b4f67174c8158ac8868a95fb70c87dc1a26554345a19f468482dc1e16704a83b4688e5e71deda8f90910a32ce125930a8658f025d6fce6c3d24b375a0c33f3ad9235cd5333ff90134d511adb97ef3fe82bf6851d2dfc351b16be1a178b19c63f93744336eb2f63f11445c6defe06700350bab2f82f5d8e4723d36b68fa790c1572b492c046d1c99ebf1719897b24f7772906a084e2e457de705d27a9101591011da0adcbe0c4b90142d5fa6cd41554e7886dbebcec8c1dd53fb79c1caf82d39755a6cb07c012378dab5884aa74821177b599341674cad175b3089ffa8b5c3f704a99d60b97677066fb79c7d2b0f4076661e8dde6bd853d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97d8daf47e1e541e5ac3b12f42c7c1947237b53f782/88/848x480_1686360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-olympusat-mmcfreetv-ono-ad-kj.amagi.tv/playlist/amg01024-olympusat-mmcfreetv-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e5ccb095ab4a50fa6e2e30c448b71a0b04a48887e40b2875f9cd61abf86dc0d98108f7fa01ebca8c6da87539cdfc2419e6d871d287a6f2cc3c413e5ca52b8ce9f672da3723d550a5aeb9cc2c15e3d94464e2e9295a3b66beb16dc87248d3a46d16a994b977e83789505a6f53cc3c7da8f183553ced1485e37b2ecb68bf82c41db0c9ff3d0f35d26d19c7a7943da23d9323b0792e8c51088c667e0dc5786bb645337cc88488b88a182fbfeab589920fef1aedb572b4f67174c8158ac8868a95fb70c87dc1a26554345a19f468482dc1e16704a83b4688e5e71deda8f90910a32ce125930a8658f025d6fce6c3d24b375a0c33f3ad9235cd5333ff90134d511adb97ef3fe82bf6851d2dfc351b16be1a178b19c63f93744336eb2f63f11445c6defe06700350bab2f82f5d8e4723d36b68fa790c1572b492c046d1c99ebf1719897b24f7772906a084e2e457de705d27a9101591011da0adcbe0c4b90142d5fa6cd41554e7886dbebcec8c1dd53fb79c1caf82d39755a6cb07c012378dab5884aa74821177b599341674cad175b3089ffa8b5c3f704a99d60b97677066fb79c7d2b0f4076661e8dde6bd853d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97d8daf47e1e541e5ac3b12f42c7c1947237b53f782/88/1280x720_3329040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-olympusat-mmcfreetv-ono-ad-kj.amagi.tv/playlist/amg01024-olympusat-mmcfreetv-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e5ccb095ab4a50fa6e2e30c448b71a0b04a48887e40b2875f9cd61abf86dc0d98108f7fa01ebca8c6da87539cdfc2419e6d871d287a6f2cc3c413e5ca52b8ce9f672da3723d550a5aeb9cc2c15e3d94464e2e9295a3b66beb16dc87248d3a46d16a994b977e83789505a6f53cc3c7da8f183553ced1485e37b2ecb68bf82c41db0c9ff3d0f35d26d19c7a7943da23d9323b0792e8c51088c667e0dc5786bb645337cc88488b88a182fbfeab589920fef1aedb572b4f67174c8158ac8868a95fb70c87dc1a26554345a19f468482dc1e16704a83b4688e5e71deda8f90910a32ce125930a8658f025d6fce6c3d24b375a0c33f3ad9235cd5333ff90134d511adb97ef3fe82bf6851d2dfc351b16be1a178b19c63f93744336eb2f63f11445c6defe06700350bab2f82f5d8e4723d36b68fa790c1572b492c046d1c99ebf1719897b24f7772906a084e2e457de705d27a9101591011da0adcbe0c4b90142d5fa6cd41554e7886dbebcec8c1dd53fb79c1caf82d39755a6cb07c012378dab5884aa74821177b599341674cad175b3089ffa8b5c3f704a99d60b97677066fb79c7d2b0f4076661e8dde6bd853d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97d8daf47e1e541e5ac3b12f42c7c1947237b53f782/88/1920x1080_6046040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 10,
            title: "FreeTV Clásico",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Cl%C3%A1sico.m3u8"},
                { resolution: "240p", url: "https://tinyurl.com/295as4pe"},
                { resolution: "360p", url: "https://tinyurl.com/27f4jsmx"},
                { resolution: "480p", url: "https://tinyurl.com/23t922rn" },
                { resolution: "720p", url: "https://amg01024-amg01024c29-freetv-us-6970.playouts.now.amagi.tv/playlist/amg01024-olympusatfast-freetvclasicoeurope-freetvus/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e0bc95d54b7f359f5e2e30c458b71a0b04a48887e40e2875f98d21ee983810897118f76a41e9ca8cdda9350edc5d53ceb02dd211b54503df3fe7187dd4da580d5262e8b6666400c50e3b785b04d338b084759eef6c8ba76a57fa4ec268e7027ba72fb25e560d01fc063b2f271b0bfb2c9434220d6a231057699cb8ed0845f56ba63f5b0ecaf0516edc61174e4046ecd2e2a2bd0dec7b745d01c95b730dfde037e3cce8537f8f7d3d3b5f9e729982cceb5b6f27d444b670651d40efacd35de2b8c2bfb9b1523591546fac900c287880764351ed6da1abe791aa9cbb481ca003fc665692c8214da540822c3387571f538ea9b2822af340f80010ba12c5fe843eca813fba6d6e07453dfb8e150fa6adb8338d29c7ac1ec97c460c990196c072148dee772083439f051e5c7cff205716a8ed9ec8e0dd7a565437a7c0399f6ef30ba83c53b1415c029462a144251fe8cb1185cc5b2a46e493cf3d5914706c3da39de0775327b6193dab8828699e94cbc7cd2c8f203dc5a3366903c1f2f62dfb7c20cb3680b36420cd154246fb4094f5aaa8d91b3a6d63a87dc45ba286e1154c0f23c481d1d26305dd5c33e9716c9bb2994b7861cc0e6861705a239a00a1fd790ff64eae28cc2005ec3fc194929c79d7785402cc116c622c787238ffe06506e5b2a2dee875aea47c39ef0a10c9523aa430604845bb38eecbed3261ba7bd433d261117705b57652718b7cadf06552e0cddf627d8468dab6c681e9d1f0205731b6070999dbd25/55/1280x720_5188040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-amg01024c29-freetv-us-6970.playouts.now.amagi.tv/playlist/amg01024-olympusatfast-freetvclasicoeurope-freetvus/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e0bc95d54b7f359f5e2e30c458b71a0b04a48887e40e2875f98d21ee983810897118f76a41e9ca8cdda9350edc5d53ceb02dd211b54503df3fe7187dd4da580d5262e8b6666400c50e3b785b04d338b084759eef6c8ba76a57fa4ec268e7027ba72fb25e560d01fc063b2f271b0bfb2c9434220d6a231057699cb8ed0845f56ba63f5b0ecaf0516edc61174e4046ecd2e2a2bd0dec7b745d01c95b730dfde037e3cce8537f8f7d3d3b5f9e729982cceb5b6f27d444b670651d40efacd35de2b8c2bfb9b1523591546fac900c287880764351ed6da1abe791aa9cbb481ca003fc665692c8214da540822c3387571f538ea9b2822af340f80010ba12c5fe843eca813fba6d6e07453dfb8e150fa6adb8338d29c7ac1ec97c460c990196c072148dee772083439f051e5c7cff205716a8ed9ec8e0dd7a565437a7c0399f6ef30ba83c53b1415c029462a144251fe8cb1185cc5b2a46e493cf3d5914706c3da39de0775327b6193dab8828699e94cbc7cd2c8f203dc5a3366903c1f2f62dfb7c20cb3680b36420cd154246fb4094f5aaa8d91b3a6d63a87dc45ba286e1154c0f23c481d1d26305dd5c33e9716c9bb2994b7861cc0e6861705a239a00a1fd790ff64eae28cc2005ec3fc194929c79d7785402cc116c622c787238ffe06506e5b2a2dee875aea47c39ef0a10c9523aa430604845bb38eecbed3261ba7bd433d261117705b57652718b7cadf06552e0cddf627d8468dab6c681e9d1f0205731b6070999dbd25/55/1920x1080_7619040/index.m3u8"}
            ],
            subtitleTracks: [
               
                { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 11,
            title: "FreeTV Drama",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/Freetv_Drama.m3u8"},
                { resolution: "240p", url: "https://amg01024-olympusat-cinereallatam-ono-ad-z5.amagi.tv/playlist/amg01024-olympusat-cinereallatam-ono/cb573e1e7b6c648693d43d61cef348828e7b3dcb0e6c886470af4a9765d9775884b7e1bfb415aa204cd717d80e0c69484d168b59822966928c01f1152b791473849bb46bc1e26a6dcfa4133a76ea214b41895b468b7a4a32fae108078838fa285645a65920067cddfd3afc200387d9158e7c2e95aedb732d755e0b9f5954e4f243a1aee10858d96df7b10119c02611fa8617cc861feed1805dcf17867cd12ea4c3a4c8cd43ddc6d1328b64885559025a17f5817d80875ca6caa5673891745a2e7433c0b196fb7a0adc0f2932f9fbd8f164ef03f18b308f643bbe72ee25f0338566e406abf843b0b8a8de560f1fb6c15e5511fa94caecfa3120f36ff8d08eb71655b8d459291d8a07b1232f2bdeface1a96c667e0dc57aaa6601a31ce90499e8ef287eaf0ab589920fef1aecd57334f67174c874db2a57ecf26cf7d97db012d2e0d2ed39241d096ca047f2d58919710d2011ebccf9dcddc013685641e4ce163dc485f1ba6536d78f663ec88301ee54c60832738fe4c23ce41f3b576b8cdbce40228fbdace468d2d85f552d1f05bf934680904e1a37a59444a2e83b9655d6628c110e5859cb2270d59bcadb994aa462b3829055b1a8ae1fe02fde4a4782438ef095e0a1a1113854ac37ae0105b0938c81dcade6f1ee1571803c8fd51373d6d92dbff8589c2b827df1e8395b9535938566da9360b3251d0a39e4df235742f454d811d654ecf6d302ae39bdde08b8e6fc2ae5fc0490a9ede76916d232b60310528899172de5290eb77dba8eb2c026b10703fe80fac14049690fd61fdff88c44e75f0e0374b2fff5b40b4eb1e44d22f9fde7209f874ead872c065e888ff75f25aabd699c664a92da270337fff74b4a610d2bc637be88b433f3f081a423102366434e98b8e242c72e2a93fa645bebd6aff161d731e57ce8e056983ea5c15887a2b33f2ee98dded822838fe43d839896c0aad524d09e4cf33e5caf2d0f29560590596e7f81af5f1c6d182868a157f0d6d22928e0a06209675a6fe608bc83175e19c939f9b04f152ed3abc88b3548a1fa8d9b303abd0d0bed77e194b42159be5f2e91fcfb31a4fd82a8b1435797ceb7132e05bbc37a257febafef72b8430352d397ad539/109/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-olympusat-cinereallatam-ono-ad-z5.amagi.tv/playlist/amg01024-olympusat-cinereallatam-ono/cb573e1e7b6c648693d43d61cef348828e7b3dcb0e6c886470af4a9765d9775884b7e1bfb415aa204cd717d80e0c69484d168b59822966928c01f1152b791473849bb46bc1e26a6dcfa4133a76ea214b41895b468b7a4a32fae108078838fa285645a65920067cddfd3afc200387d9158e7c2e95aedb732d755e0b9f5954e4f243a1aee10858d96df7b10119c02611fa8617cc861feed1805dcf17867cd12ea4c3a4c8cd43ddc6d1328b64885559025a17f5817d80875ca6caa5673891745a2e7433c0b196fb7a0adc0f2932f9fbd8f164ef03f18b308f643bbe72ee25f0338566e406abf843b0b8a8de560f1fb6c15e5511fa94caecfa3120f36ff8d08eb71655b8d459291d8a07b1232f2bdeface1a96c667e0dc57aaa6601a31ce90499e8ef287eaf0ab589920fef1aecd57334f67174c874db2a57ecf26cf7d97db012d2e0d2ed39241d096ca047f2d58919710d2011ebccf9dcddc013685641e4ce163dc485f1ba6536d78f663ec88301ee54c60832738fe4c23ce41f3b576b8cdbce40228fbdace468d2d85f552d1f05bf934680904e1a37a59444a2e83b9655d6628c110e5859cb2270d59bcadb994aa462b3829055b1a8ae1fe02fde4a4782438ef095e0a1a1113854ac37ae0105b0938c81dcade6f1ee1571803c8fd51373d6d92dbff8589c2b827df1e8395b9535938566da9360b3251d0a39e4df235742f454d811d654ecf6d302ae39bdde08b8e6fc2ae5fc0490a9ede76916d232b60310528899172de5290eb77dba8eb2c026b10703fe80fac14049690fd61fdff88c44e75f0e0374b2fff5b40b4eb1e44d22f9fde7209f874ead872c065e888ff75f25aabd699c664a92da270337fff74b4a610d2bc637be88b433f3f081a423102366434e98b8e242c72e2a93fa645bebd6aff161d731e57ce8e056983ea5c15887a2b33f2ee98dded822838fe43d839896c0aad524d09e4cf33e5caf2d0f29560590596e7f81af5f1c6d182868a157f0d6d22928e0a06209675a6fe608bc83175e19c939f9b04f152ed3abc88b3548a1fa8d9b303abd0d0bed77e194b42159be5f2e91fcfb31a4fd82a8b1435797ceb7132e05bbc37a257febafef72b8430352d397ad539/109/640x360_1057680/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-olympusat-cinereallatam-ono-ad-z5.amagi.tv/playlist/amg01024-olympusat-cinereallatam-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695e0c9f0958eca80bbefdb05c45c56da0e71c559d7b16e39f149cd61aef81825d9e418677fb33a7a5a1df900ec7c4cd41956d88321b5d27698fce7a9cc407ceb0f4683d8f3f3d552145f4aa85ff4d25f4212938a9c6e5913f8b79a49c36be7025b216994c9d42ec01ce589ecf60fac3d1b843452aeac0557555c38fc1daa14d59d167ffb1a7dc636ca6f8157542bb05b2440d2a95f8ff22de967fe7b72796fa680d28ff8251948fb7bcfaa28138dc4fb4cfe08c2d51142c4b15914aec9c7fde2cc96ee6cd1c2c134941bb9356c195831a5a144c898e4ad11d0f86d89e90cb0136f531244ae972d8567706a65c6572f128eb943d60d35660ec3439e816368f52ecb95e96cdbab55c73dfb0c646ec21eea51aedf417a769305c70c598585c4a4133dfe27f00206cd044f09decf3720c34daad8094a7523c1477135b08f9a08d30c2df982a4f46985527367216129456d03b8c5348512a9f4781a80d21d6007729bce455345b688586b68489c4cf36c315a7e0ef3028325762b13616666ad6f6ab4bf83d7f48202cea696547ae49534198f2a380b0a14c83cd564659086c0b445b8a237330465048f6a566de4ae7975d8a8fcb48c9fcff6a2fe7128271dd1a4dbe1695c38ed55b07d08b5a1c759ed026bf034566d90e49fabb53d4b54303103d4e4c80e13c759d62bde8a504b256c9600b77e532dcf686e7823707bfc3005b9b6824ec4aadbde1ac9cfaac0c5d80d94324d2fda67536e332753e3a55d7810111a8ed6023a53a6c6b9f53aae1a8e70c0ac362f87486354df6174516b09d63aaafbbfdef9f2f4c588f89fd18f2e1a991dcdacf117b0947398f8e0a06209675a6cc4fca852951c3c5cbe9d3659235c530b88fb967a41fa8d9b303abdfccadad3947100a19ac81c4fb12daae030aee288c037e4eeeed8e9149f2d4a91f02ab3786a20861a9327b27a788f316c726bda6746acb8e674ccd3655e5e5ec2d08c734ad436328a6d5e08e5a5e0f8a332b5b5792e95b7d54f76e673ec18b80acb7/157/848x480_1686360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-olympusat-cinereallatam-ono-ad-z5.amagi.tv/playlist/amg01024-olympusat-cinereallatam-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695e0c9f0958eca80bbefdb05c45c56da0e71c559d7b16e39f149cd61aef81825d9e418677fb33a7a5a1df900ec7c4cd41956d88321b5d27698fce7a9cc407ceb0f4683d8f3f3d552145f4aa85ff4d25f4212938a9c6e5913f8b79a49c36be7025b216994c9d42ec01ce589ecf60fac3d1b843452aeac0557555c38fc1daa14d59d167ffb1a7dc636ca6f8157542bb05b2440d2a95f8ff22de967fe7b72796fa680d28ff8251948fb7bcfaa28138dc4fb4cfe08c2d51142c4b15914aec9c7fde2cc96ee6cd1c2c134941bb9356c195831a5a144c898e4ad11d0f86d89e90cb0136f531244ae972d8567706a65c6572f128eb943d60d35660ec3439e816368f52ecb95e96cdbab55c73dfb0c646ec21eea51aedf417a769305c70c598585c4a4133dfe27f00206cd044f09decf3720c34daad8094a7523c1477135b08f9a08d30c2df982a4f46985527367216129456d03b8c5348512a9f4781a80d21d6007729bce455345b688586b68489c4cf36c315a7e0ef3028325762b13616666ad6f6ab4bf83d7f48202cea696547ae49534198f2a380b0a14c83cd564659086c0b445b8a237330465048f6a566de4ae7975d8a8fcb48c9fcff6a2fe7128271dd1a4dbe1695c38ed55b07d08b5a1c759ed026bf034566d90e49fabb53d4b54303103d4e4c80e13c759d62bde8a504b256c9600b77e532dcf686e7823707bfc3005b9b6824ec4aadbde1ac9cfaac0c5d80d94324d2fda67536e332753e3a55d7810111a8ed6023a53a6c6b9f53aae1a8e70c0ac362f87486354df6174516b09d63aaafbbfdef9f2f4c588f89fd18f2e1a991dcdacf117b0947398f8e0a06209675a6cc4fca852951c3c5cbe9d3659235c530b88fb967a41fa8d9b303abdfccadad3947100a19ac81c4fb12daae030aee288c037e4eeeed8e9149f2d4a91f02ab3786a20861a9327b27a788f316c726bda6746acb8e674ccd3655e5e5ec2d08c734ad436328a6d5e08e5a5e0f8a332b5b5792e95b7d54f76e673ec18b80acb7/157/1280x720_3329040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-olympusat-cinereallatam-ono-ad-z5.amagi.tv/playlist/amg01024-olympusat-cinereallatam-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695e0c9f0958eca80bbefdb05c45c56da0e71c559d7b16e39f149cd61aef81825d9e418677fb33a7a5a1df900ec7c4cd41956d88321b5d27698fce7a9cc407ceb0f4683d8f3f3d552145f4aa85ff4d25f4212938a9c6e5913f8b79a49c36be7025b216994c9d42ec01ce589ecf60fac3d1b843452aeac0557555c38fc1daa14d59d167ffb1a7dc636ca6f8157542bb05b2440d2a95f8ff22de967fe7b72796fa680d28ff8251948fb7bcfaa28138dc4fb4cfe08c2d51142c4b15914aec9c7fde2cc96ee6cd1c2c134941bb9356c195831a5a144c898e4ad11d0f86d89e90cb0136f531244ae972d8567706a65c6572f128eb943d60d35660ec3439e816368f52ecb95e96cdbab55c73dfb0c646ec21eea51aedf417a769305c70c598585c4a4133dfe27f00206cd044f09decf3720c34daad8094a7523c1477135b08f9a08d30c2df982a4f46985527367216129456d03b8c5348512a9f4781a80d21d6007729bce455345b688586b68489c4cf36c315a7e0ef3028325762b13616666ad6f6ab4bf83d7f48202cea696547ae49534198f2a380b0a14c83cd564659086c0b445b8a237330465048f6a566de4ae7975d8a8fcb48c9fcff6a2fe7128271dd1a4dbe1695c38ed55b07d08b5a1c759ed026bf034566d90e49fabb53d4b54303103d4e4c80e13c759d62bde8a504b256c9600b77e532dcf686e7823707bfc3005b9b6824ec4aadbde1ac9cfaac0c5d80d94324d2fda67536e332753e3a55d7810111a8ed6023a53a6c6b9f53aae1a8e70c0ac362f87486354df6174516b09d63aaafbbfdef9f2f4c588f89fd18f2e1a991dcdacf117b0947398f8e0a06209675a6cc4fca852951c3c5cbe9d3659235c530b88fb967a41fa8d9b303abdfccadad3947100a19ac81c4fb12daae030aee288c037e4eeeed8e9149f2d4a91f02ab3786a20861a9327b27a788f316c726bda6746acb8e674ccd3655e5e5ec2d08c734ad436328a6d5e08e5a5e0f8a332b5b5792e95b7d54f76e673ec18b80acb7/157/1920x1080_6046040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 12,
            title: "FreeTV Estelar",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Estelar.m3u8"},
                { resolution: "240p", url: "https://amg01024-olympusat-tucinelatam-ono-ad-40.amagi.tv/playlist/amg01024-olympusat-tucinelatam-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695e58ca095ce3a25dbefdb05c46c56da0e71c55c47e11e79f13cfdd4ab381d108cf46d07efb11a7b3a1df900ed3c6d10cea13ed260c67376f95f239f9b755a2ce8a7a63d33e3f51091be0b196fb5a2ac8444c51b7fbcea96cfc16ddd34beb0736bf13d64b8a24f808c068f7bb3ecac4badb510f3aabd44b6055c38fc1daa14459db67ffb1a7d4700efe9c715166eb2089786352fefccf07cac20586892190ba6d113db2e72fef9ebd8ea1bf81539135dfd4f58c73645c660136b007eaf0138721c96cb8945c6e5d4957e38f46d887dd4d7e775cd8bf4ec61a0db8d892f1b9645f9b593574b223b3320468df7a6b79eb3ffce84a06fd09188c3234f559398551bcbc29b581c9e0030f83848a28986eeba644d6ff06db2f561956b7f42f0a401e2885ec335b652c9414b285c8b0245e06eaf2ceab950b3c533c4d2a66e7e3e363d58fd0392218c05e23121c7a71b016d36ceb36137744ae1fd7bf4761970a53418ccd394f5f6982deff8288db9000df09d0c0f32d2a354d5cbe26163261de89dc66ed39597f772fea650c4ab3135f50e494c5bfedea04db8f5bba2a6b0262c6e965276336225a24b5a284b6349afb9c1206a826aedabe5028b032aa15159a90ef78f9f984d43d77fac87938175a57baa70940e918c63f809251d5b5470f1f3d3a38aa2f9a253dcbb6b9cb2e8c29a14e0d7aa817d3162168b41434c8b930571c015c1835351c4958ec8b843c523184144697a6d3149e64e27013462f837935a185dcd75c0256341084adce99a4c9025fe46be34af06f11ad6dfe4f8bc915e599bbfff68620014e89f6e374eaf0d3c1e0dfc433664b7468cdfe09013e9807e09c0be49a187ec4809faa8f3dc03bb163fbcc9d06d0118c87fc02a79b98bedc721455551ebce2ffe81bd6b94514e82d951d6348d2daa4c764fddbae0e37bf0eb7cb5438dc591438e5a2f511d051f98c5f0de8886e55d00e5ce2e8ed2911cd64ea601e74ffd8992c5cebc61c98599485fd6d1dde107f0426ccb729dc9c589aef8896733369d1c1cd244cbf13ab/12/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-olympusat-tucinelatam-ono-ad-40.amagi.tv/playlist/amg01024-olympusat-tucinelatam-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695e58ca095ce3a25dbefdb05c46c56da0e71c55c47e11e79f13cfdd4ab381d108cf46d07efb11a7b3a1df900ed3c6d10cea13ed260c67376f95f239f9b755a2ce8a7a63d33e3f51091be0b196fb5a2ac8444c51b7fbcea96cfc16ddd34beb0736bf13d64b8a24f808c068f7bb3ecac4badb510f3aabd44b6055c38fc1daa14459db67ffb1a7d4700efe9c715166eb2089786352fefccf07cac20586892190ba6d113db2e72fef9ebd8ea1bf81539135dfd4f58c73645c660136b007eaf0138721c96cb8945c6e5d4957e38f46d887dd4d7e775cd8bf4ec61a0db8d892f1b9645f9b593574b223b3320468df7a6b79eb3ffce84a06fd09188c3234f559398551bcbc29b581c9e0030f83848a28986eeba644d6ff06db2f561956b7f42f0a401e2885ec335b652c9414b285c8b0245e06eaf2ceab950b3c533c4d2a66e7e3e363d58fd0392218c05e23121c7a71b016d36ceb36137744ae1fd7bf4761970a53418ccd394f5f6982deff8288db9000df09d0c0f32d2a354d5cbe26163261de89dc66ed39597f772fea650c4ab3135f50e494c5bfedea04db8f5bba2a6b0262c6e965276336225a24b5a284b6349afb9c1206a826aedabe5028b032aa15159a90ef78f9f984d43d77fac87938175a57baa70940e918c63f809251d5b5470f1f3d3a38aa2f9a253dcbb6b9cb2e8c29a14e0d7aa817d3162168b41434c8b930571c015c1835351c4958ec8b843c523184144697a6d3149e64e27013462f837935a185dcd75c0256341084adce99a4c9025fe46be34af06f11ad6dfe4f8bc915e599bbfff68620014e89f6e374eaf0d3c1e0dfc433664b7468cdfe09013e9807e09c0be49a187ec4809faa8f3dc03bb163fbcc9d06d0118c87fc02a79b98bedc721455551ebce2ffe81bd6b94514e82d951d6348d2daa4c764fddbae0e37bf0eb7cb5438dc591438e5a2f511d051f98c5f0de8886e55d00e5ce2e8ed2911cd64ea601e74ffd8992c5cebc61c98599485fd6d1dde107f0426ccb729dc9c589aef8896733369d1c1cd244cbf13ab/12/640x360_1057680/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-olympusat-tucinelatam-ono-ad-40.amagi.tv/playlist/amg01024-olympusat-tucinelatam-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695e58ca095ce3a25dbefdb05c46c56da0e71c55c47e11e79f13cfdd4ab381d108cf46d07efb11a7b3a1df900ed3c6d10cea13ed260c67376f95f239f9b755a2ce8a7a63d33e3f51091be0b196fb5a2ac8444c51b7fbcea96cfc16ddd34beb0736bf13d64b8a24f808c068f7bb3ecac4badb510f3aabd44b6055c38fc1daa14459db67ffb1a7d4700efe9c715166eb2089786352fefccf07cac20586892190ba6d113db2e72fef9ebd8ea1bf81539135dfd4f58c73645c660136b007eaf0138721c96cb8945c6e5d4957e38f46d887dd4d7e775cd8bf4ec61a0db8d892f1b9645f9b593574b223b3320468df7a6b79eb3ffce84a06fd09188c3234f559398551bcbc29b581c9e0030f83848a28986eeba644d6ff06db2f561956b7f42f0a401e2885ec335b652c9414b285c8b0245e06eaf2ceab950b3c533c4d2a66e7e3e363d58fd0392218c05e23121c7a71b016d36ceb36137744ae1fd7bf4761970a53418ccd394f5f6982deff8288db9000df09d0c0f32d2a354d5cbe26163261de89dc66ed39597f772fea650c4ab3135f50e494c5bfedea04db8f5bba2a6b0262c6e965276336225a24b5a284b6349afb9c1206a826aedabe5028b032aa15159a90ef78f9f984d43d77fac87938175a57baa70940e918c63f809251d5b5470f1f3d3a38aa2f9a253dcbb6b9cb2e8c29a14e0d7aa817d3162168b41434c8b930571c015c1835351c4958ec8b843c523184144697a6d3149e64e27013462f837935a185dcd75c0256341084adce99a4c9025fe46be34af06f11ad6dfe4f8bc915e599bbfff68620014e89f6e374eaf0d3c1e0dfc433664b7468cdfe09013e9807e09c0be49a187ec4809faa8f3dc03bb163fbcc9d06d0118c87fc02a79b98bedc721455551ebce2ffe81bd6b94514e82d951d6348d2daa4c764fddbae0e37bf0eb7cb5438dc591438e5a2f511d051f98c5f0de8886e55d00e5ce2e8ed2911cd64ea601e74ffd8992c5cebc61c98599485fd6d1dde107f0426ccb729dc9c589aef8896733369d1c1cd244cbf13ab/12/848x480_1686360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-olympusat-tucinelatam-ono-ad-40.amagi.tv/playlist/amg01024-olympusat-tucinelatam-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695e58ca095ce3a25dbefdb05c46c56da0e71c55c47e11e79f13cfdd4ab381d108cf46d07efb11a7b3a1df900ed3c6d10cea13ed260c67376f95f239f9b755a2ce8a7a63d33e3f51091be0b196fb5a2ac8444c51b7fbcea96cfc16ddd34beb0736bf13d64b8a24f808c068f7bb3ecac4badb510f3aabd44b6055c38fc1daa14459db67ffb1a7d4700efe9c715166eb2089786352fefccf07cac20586892190ba6d113db2e72fef9ebd8ea1bf81539135dfd4f58c73645c660136b007eaf0138721c96cb8945c6e5d4957e38f46d887dd4d7e775cd8bf4ec61a0db8d892f1b9645f9b593574b223b3320468df7a6b79eb3ffce84a06fd09188c3234f559398551bcbc29b581c9e0030f83848a28986eeba644d6ff06db2f561956b7f42f0a401e2885ec335b652c9414b285c8b0245e06eaf2ceab950b3c533c4d2a66e7e3e363d58fd0392218c05e23121c7a71b016d36ceb36137744ae1fd7bf4761970a53418ccd394f5f6982deff8288db9000df09d0c0f32d2a354d5cbe26163261de89dc66ed39597f772fea650c4ab3135f50e494c5bfedea04db8f5bba2a6b0262c6e965276336225a24b5a284b6349afb9c1206a826aedabe5028b032aa15159a90ef78f9f984d43d77fac87938175a57baa70940e918c63f809251d5b5470f1f3d3a38aa2f9a253dcbb6b9cb2e8c29a14e0d7aa817d3162168b41434c8b930571c015c1835351c4958ec8b843c523184144697a6d3149e64e27013462f837935a185dcd75c0256341084adce99a4c9025fe46be34af06f11ad6dfe4f8bc915e599bbfff68620014e89f6e374eaf0d3c1e0dfc433664b7468cdfe09013e9807e09c0be49a187ec4809faa8f3dc03bb163fbcc9d06d0118c87fc02a79b98bedc721455551ebce2ffe81bd6b94514e82d951d6348d2daa4c764fddbae0e37bf0eb7cb5438dc591438e5a2f511d051f98c5f0de8886e55d00e5ce2e8ed2911cd64ea601e74ffd8992c5cebc61c98599485fd6d1dde107f0426ccb729dc9c589aef8896733369d1c1cd244cbf13ab/12/1280x720_3329040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-olympusat-tucinelatam-ono-ad-40.amagi.tv/playlist/amg01024-olympusat-tucinelatam-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695e58ca095ce3a25dbefdb05c46c56da0e71c55c47e11e79f13cfdd4ab381d108cf46d07efb11a7b3a1df900ed3c6d10cea13ed260c67376f95f239f9b755a2ce8a7a63d33e3f51091be0b196fb5a2ac8444c51b7fbcea96cfc16ddd34beb0736bf13d64b8a24f808c068f7bb3ecac4badb510f3aabd44b6055c38fc1daa14459db67ffb1a7d4700efe9c715166eb2089786352fefccf07cac20586892190ba6d113db2e72fef9ebd8ea1bf81539135dfd4f58c73645c660136b007eaf0138721c96cb8945c6e5d4957e38f46d887dd4d7e775cd8bf4ec61a0db8d892f1b9645f9b593574b223b3320468df7a6b79eb3ffce84a06fd09188c3234f559398551bcbc29b581c9e0030f83848a28986eeba644d6ff06db2f561956b7f42f0a401e2885ec335b652c9414b285c8b0245e06eaf2ceab950b3c533c4d2a66e7e3e363d58fd0392218c05e23121c7a71b016d36ceb36137744ae1fd7bf4761970a53418ccd394f5f6982deff8288db9000df09d0c0f32d2a354d5cbe26163261de89dc66ed39597f772fea650c4ab3135f50e494c5bfedea04db8f5bba2a6b0262c6e965276336225a24b5a284b6349afb9c1206a826aedabe5028b032aa15159a90ef78f9f984d43d77fac87938175a57baa70940e918c63f809251d5b5470f1f3d3a38aa2f9a253dcbb6b9cb2e8c29a14e0d7aa817d3162168b41434c8b930571c015c1835351c4958ec8b843c523184144697a6d3149e64e27013462f837935a185dcd75c0256341084adce99a4c9025fe46be34af06f11ad6dfe4f8bc915e599bbfff68620014e89f6e374eaf0d3c1e0dfc433664b7468cdfe09013e9807e09c0be49a187ec4809faa8f3dc03bb163fbcc9d06d0118c87fc02a79b98bedc721455551ebce2ffe81bd6b94514e82d951d6348d2daa4c764fddbae0e37bf0eb7cb5438dc591438e5a2f511d051f98c5f0de8886e55d00e5ce2e8ed2911cd64ea601e74ffd8992c5cebc61c98599485fd6d1dde107f0426ccb729dc9c589aef8896733369d1c1cd244cbf13ab/12/1920x1080_6046040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 13,
            title: "FreeTV Familia",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Familia.m3u8"},
                { resolution: "240p", url: "https://amg01024-olympusat-juntos-ono-ad-h5.amagi.tv/playlist/amg01024-olympusat-juntos-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695f0e9d0c0feca85ebefdb05c17c56da0e71c559d2c46e79f40cfd315e8d4dd529e408373fb2aa7a5a1df900ed6d8d5419a6d83645329481b98846addc05ec4bdf00c10bd53651744008cd292fa5d7287575363ebebc4ad60c006dc8557c10a49b3148c5f976ac524bd1eb0af48b2a8becb540f3aabc9146522b6eca38fe86f7bd708faa6fa93726c89c9166d49cd61dd505d52e4fec419cacc198fbb3390a7680976e683409ea984d997dae14b983684c6e488024c4f6e0170ee37c4bc7fde2ce94ef2bf794b5d4957e39346fb8ad84a420125e7d004a47972b8df98cddc012bda616939820189017206ab35686fab38eb964e00e34c0c973038ef4e7b834df1e2589fcdcef6392ba7d7d143fc769dd360b6a73b8743662168ddf3284c0b596eeffe74042678c05c96b5a08526302ec2ad8094a7523c1477135b08f9a08d30c38dc6704d4f950320322546119702853a880319567fcb4bd2fa5f27d502787dbce3552b596398dcb48f93e9c951a66bdcc2c268102b5871bc3e774c04bbbf834df82a457f7607fe650d42b9141445ef9bdbe0ebf104a1b96abe2a670066cbf91a480c5c676c3877f102af36633880dbe1a869ffade0274b8c28a60550adc4dd78fdfef3bf256dbe8b27d4e30ab15da85d22d503dc6ba9df75cab95607664c28e90c54368d369ad39fd12e962da34b411182f2794781c1b4497e9df5653b3a061f70153722785de982872e68d38dcddcd3a22d26f58d622d5b62bceb7d036a26a8e97fd6455f6da0b2c288ac852d15dd51cd7adb6b395536672bccc322e38fbef2b5d2210440918efa1de0e1a488c2c3d26666533a0fcd95161556c836fc8930e4af3675fbc6deb68d20c423a27d90ac8203c870e0c7b505abd0bafbf87c18171a74f4d3f8f71194ed5913f52b951d6348dcb9e5f264e9d3f3522bbd13b3d37509c45b5254c7bee37e8941dec13625e08b6c23bb573ad3eff2235c85648b293c68e98fe64a3edcc81b9c5d91f6a65a1b9469fe85daefe40c1ace6cbc7895f914becd0a098b5489f281/157/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-olympusat-juntos-ono-ad-h5.amagi.tv/playlist/amg01024-olympusat-juntos-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695f0e9d0c0feca85ebefdb05c17c56da0e71c559d2c46e79f40cfd315e8d4dd529e408373fb2aa7a5a1df900ed6d8d5419a6d83645329481b98846addc05ec4bdf00c10bd53651744008cd292fa5d7287575363ebebc4ad60c006dc8557c10a49b3148c5f976ac524bd1eb0af48b2a8becb540f3aabc9146522b6eca38fe86f7bd708faa6fa93726c89c9166d49cd61dd505d52e4fec419cacc198fbb3390a7680976e683409ea984d997dae14b983684c6e488024c4f6e0170ee37c4bc7fde2ce94ef2bf794b5d4957e39346fb8ad84a420125e7d004a47972b8df98cddc012bda616939820189017206ab35686fab38eb964e00e34c0c973038ef4e7b834df1e2589fcdcef6392ba7d7d143fc769dd360b6a73b8743662168ddf3284c0b596eeffe74042678c05c96b5a08526302ec2ad8094a7523c1477135b08f9a08d30c38dc6704d4f950320322546119702853a880319567fcb4bd2fa5f27d502787dbce3552b596398dcb48f93e9c951a66bdcc2c268102b5871bc3e774c04bbbf834df82a457f7607fe650d42b9141445ef9bdbe0ebf104a1b96abe2a670066cbf91a480c5c676c3877f102af36633880dbe1a869ffade0274b8c28a60550adc4dd78fdfef3bf256dbe8b27d4e30ab15da85d22d503dc6ba9df75cab95607664c28e90c54368d369ad39fd12e962da34b411182f2794781c1b4497e9df5653b3a061f70153722785de982872e68d38dcddcd3a22d26f58d622d5b62bceb7d036a26a8e97fd6455f6da0b2c288ac852d15dd51cd7adb6b395536672bccc322e38fbef2b5d2210440918efa1de0e1a488c2c3d26666533a0fcd95161556c836fc8930e4af3675fbc6deb68d20c423a27d90ac8203c870e0c7b505abd0bafbf87c18171a74f4d3f8f71194ed5913f52b951d6348dcb9e5f264e9d3f3522bbd13b3d37509c45b5254c7bee37e8941dec13625e08b6c23bb573ad3eff2235c85648b293c68e98fe64a3edcc81b9c5d91f6a65a1b9469fe85daefe40c1ace6cbc7895f914becd0a098b5489f281/157/640x360_1057680/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-olympusat-juntos-ono-ad-h5.amagi.tv/playlist/amg01024-olympusat-juntos-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695f0e9d0c0feca85ebefdb05c17c56da0e71c559d2c46e79f40cfd315e8d4dd529e408373fb2aa7a5a1df900ed6d8d5419a6d83645329481b98846addc05ec4bdf00c10bd53651744008cd292fa5d7287575363ebebc4ad60c006dc8557c10a49b3148c5f976ac524bd1eb0af48b2a8becb540f3aabc9146522b6eca38fe86f7bd708faa6fa93726c89c9166d49cd61dd505d52e4fec419cacc198fbb3390a7680976e683409ea984d997dae14b983684c6e488024c4f6e0170ee37c4bc7fde2ce94ef2bf794b5d4957e39346fb8ad84a420125e7d004a47972b8df98cddc012bda616939820189017206ab35686fab38eb964e00e34c0c973038ef4e7b834df1e2589fcdcef6392ba7d7d143fc769dd360b6a73b8743662168ddf3284c0b596eeffe74042678c05c96b5a08526302ec2ad8094a7523c1477135b08f9a08d30c38dc6704d4f950320322546119702853a880319567fcb4bd2fa5f27d502787dbce3552b596398dcb48f93e9c951a66bdcc2c268102b5871bc3e774c04bbbf834df82a457f7607fe650d42b9141445ef9bdbe0ebf104a1b96abe2a670066cbf91a480c5c676c3877f102af36633880dbe1a869ffade0274b8c28a60550adc4dd78fdfef3bf256dbe8b27d4e30ab15da85d22d503dc6ba9df75cab95607664c28e90c54368d369ad39fd12e962da34b411182f2794781c1b4497e9df5653b3a061f70153722785de982872e68d38dcddcd3a22d26f58d622d5b62bceb7d036a26a8e97fd6455f6da0b2c288ac852d15dd51cd7adb6b395536672bccc322e38fbef2b5d2210440918efa1de0e1a488c2c3d26666533a0fcd95161556c836fc8930e4af3675fbc6deb68d20c423a27d90ac8203c870e0c7b505abd0bafbf87c18171a74f4d3f8f71194ed5913f52b951d6348dcb9e5f264e9d3f3522bbd13b3d37509c45b5254c7bee37e8941dec13625e08b6c23bb573ad3eff2235c85648b293c68e98fe64a3edcc81b9c5d91f6a65a1b9469fe85daefe40c1ace6cbc7895f914becd0a098b5489f281/157/848x480_1686360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-olympusat-juntos-ono-ad-h5.amagi.tv/playlist/amg01024-olympusat-juntos-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695f0e9d0c0feca85ebefdb05c17c56da0e71c559d2c46e79f40cfd315e8d4dd529e408373fb2aa7a5a1df900ed6d8d5419a6d83645329481b98846addc05ec4bdf00c10bd53651744008cd292fa5d7287575363ebebc4ad60c006dc8557c10a49b3148c5f976ac524bd1eb0af48b2a8becb540f3aabc9146522b6eca38fe86f7bd708faa6fa93726c89c9166d49cd61dd505d52e4fec419cacc198fbb3390a7680976e683409ea984d997dae14b983684c6e488024c4f6e0170ee37c4bc7fde2ce94ef2bf794b5d4957e39346fb8ad84a420125e7d004a47972b8df98cddc012bda616939820189017206ab35686fab38eb964e00e34c0c973038ef4e7b834df1e2589fcdcef6392ba7d7d143fc769dd360b6a73b8743662168ddf3284c0b596eeffe74042678c05c96b5a08526302ec2ad8094a7523c1477135b08f9a08d30c38dc6704d4f950320322546119702853a880319567fcb4bd2fa5f27d502787dbce3552b596398dcb48f93e9c951a66bdcc2c268102b5871bc3e774c04bbbf834df82a457f7607fe650d42b9141445ef9bdbe0ebf104a1b96abe2a670066cbf91a480c5c676c3877f102af36633880dbe1a869ffade0274b8c28a60550adc4dd78fdfef3bf256dbe8b27d4e30ab15da85d22d503dc6ba9df75cab95607664c28e90c54368d369ad39fd12e962da34b411182f2794781c1b4497e9df5653b3a061f70153722785de982872e68d38dcddcd3a22d26f58d622d5b62bceb7d036a26a8e97fd6455f6da0b2c288ac852d15dd51cd7adb6b395536672bccc322e38fbef2b5d2210440918efa1de0e1a488c2c3d26666533a0fcd95161556c836fc8930e4af3675fbc6deb68d20c423a27d90ac8203c870e0c7b505abd0bafbf87c18171a74f4d3f8f71194ed5913f52b951d6348dcb9e5f264e9d3f3522bbd13b3d37509c45b5254c7bee37e8941dec13625e08b6c23bb573ad3eff2235c85648b293c68e98fe64a3edcc81b9c5d91f6a65a1b9469fe85daefe40c1ace6cbc7895f914becd0a098b5489f281/157/1280x720_3329040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-olympusat-juntos-ono-ad-h5.amagi.tv/playlist/amg01024-olympusat-juntos-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695f0e9d0c0feca85ebefdb05c17c56da0e71c559d2c46e79f40cfd315e8d4dd529e408373fb2aa7a5a1df900ed6d8d5419a6d83645329481b98846addc05ec4bdf00c10bd53651744008cd292fa5d7287575363ebebc4ad60c006dc8557c10a49b3148c5f976ac524bd1eb0af48b2a8becb540f3aabc9146522b6eca38fe86f7bd708faa6fa93726c89c9166d49cd61dd505d52e4fec419cacc198fbb3390a7680976e683409ea984d997dae14b983684c6e488024c4f6e0170ee37c4bc7fde2ce94ef2bf794b5d4957e39346fb8ad84a420125e7d004a47972b8df98cddc012bda616939820189017206ab35686fab38eb964e00e34c0c973038ef4e7b834df1e2589fcdcef6392ba7d7d143fc769dd360b6a73b8743662168ddf3284c0b596eeffe74042678c05c96b5a08526302ec2ad8094a7523c1477135b08f9a08d30c38dc6704d4f950320322546119702853a880319567fcb4bd2fa5f27d502787dbce3552b596398dcb48f93e9c951a66bdcc2c268102b5871bc3e774c04bbbf834df82a457f7607fe650d42b9141445ef9bdbe0ebf104a1b96abe2a670066cbf91a480c5c676c3877f102af36633880dbe1a869ffade0274b8c28a60550adc4dd78fdfef3bf256dbe8b27d4e30ab15da85d22d503dc6ba9df75cab95607664c28e90c54368d369ad39fd12e962da34b411182f2794781c1b4497e9df5653b3a061f70153722785de982872e68d38dcddcd3a22d26f58d622d5b62bceb7d036a26a8e97fd6455f6da0b2c288ac852d15dd51cd7adb6b395536672bccc322e38fbef2b5d2210440918efa1de0e1a488c2c3d26666533a0fcd95161556c836fc8930e4af3675fbc6deb68d20c423a27d90ac8203c870e0c7b505abd0bafbf87c18171a74f4d3f8f71194ed5913f52b951d6348dcb9e5f264e9d3f3522bbd13b3d37509c45b5254c7bee37e8941dec13625e08b6c23bb573ad3eff2235c85648b293c68e98fe64a3edcc81b9c5d91f6a65a1b9469fe85daefe40c1ace6cbc7895f914becd0a098b5489f281/157/1920x1080_6046040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 14,
            title: "FreeTV Hits",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Hits.m3u8"},
                { resolution: "240p", url: "https://amg01024-olympusat-flash-ono-ad-3q.amagi.tv/playlist/amg01024-olympusat-flash-ono/cb563d1d736c6d8a84ce3f78d4f762f5a65928d80b6c852a6ab454876da91e588eac8d9ab30ea778149719b1670e74412c278b458b1b5495a523ec4e317f106a999ea263a2e17674cec41f7673e82f0e26ab5d4e8f3c4351d1fb15058072e42a535db8473e1862cd8e08fb27109c9f0f88783788abcf75682f5256cb0c58e5bd5cf2feb04044d93aa1ac151c942958b484439a874dead6d55e9b4a8c48cb23ccc6b395874ec6a4a2599857b861632923798ace7883d962a5ce957b3ca3643a4a6c158cdd9bea5a2c951d0c13efe8dcf163ed16cb9d33cf6338b64f9c4a9239896eb953d08b29a1a9a891575335d6a8310b21b2e0a59eed7b30b26ba1da83b372788ab8016b78d97fd1342a3b898fad7ee0922cb89879f4de031c3cd3df4c88a2be82fbc2ee20fd7590b79ef13c465d2d070d964da3e80eb1488d22e0a47d20585e0aac8a45fb84cc50346e4af4f634a01014b495848fc6032bdf731a4ea646cb5e0058fa6e1d16832cfd8972658a546def5014da7a78d11888d246e0b4e4f51432a3dfc45b8d0985d15bebd82cf311563003b7e1625840426fd59c09675d7ccd51e1c1dee07e070de9f9d9a4b83954063d041c0d9bf2d87e9a83c55b757ca7753465712421cc49bc0ede045a4e2ac01aa1ee6334d1527928b1ff390b0b6ec69bb283818e9f12b6798496f83c7a6e0837eb65527f3497dcfb5af2365f7b7449bf0c7150a908577dbbaad9e48b8163bcf60ec2316c0066d7fe164d3b52191b621a3bf5b52480a62efbf6ff52c5fb881605b628a215158da2a4069ac3a0b7828b0dc82d744998c133cd330cca12c6228bd30ab8fa35545a54c82fb30d9104fbf95fb8e752021f2e8af86ad2d8f1f3c2bed3745fe49005103b005616785d4cdf6dd2dff86b1a72e0b026a908a8bb15e17a05626407f28b0e4b9ea86f44ca0a2834ece0ea9bbdc60627cf6cdf7cdd2f56f500437db78c70c1ab86ded6cb2f5809d2b3eb6bbea2838e8596e92e6c046135d4900c03398868a0c257a19e1c7aee9b82aa8f3dc03bb163c9e3dc4bc835aedea474effafbd9f47810525f2d92e2ffe81bd6b94a08fb57d2433800deedc0f176f0ceb31772890cb2d11f0f4e5fc6f24c0b9db41ace7d20f7d06ffa99a86b74463779/124/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-olympusat-flash-ono-ad-3q.amagi.tv/playlist/amg01024-olympusat-flash-ono/cb563d1d736c6d8a84ce3f78d4f762f5a65928d80b6c852a6ab454876da91e588eac8d9ab30ea778149719b1670e74412c278b458b1b5495a523ec4e317f106a999ea263a2e17674cec41f7673e82f0e26ab5d4e8f3c4351d1fb15058072e42a535db8473e1862cd8e08fb27109c9f0f88783788abcf75682f5256cb0c58e5bd5cf2feb04044d93aa1ac151c942958b484439a874dead6d55e9b4a8c48cb23ccc6b395874ec6a4a2599857b861632923798ace7883d962a5ce957b3ca3643a4a6c158cdd9bea5a2c951d0c13efe8dcf163ed16cb9d33cf6338b64f9c4a9239896eb953d08b29a1a9a891575335d6a8310b21b2e0a59eed7b30b26ba1da83b372788ab8016b78d97fd1342a3b898fad7ee0922cb89879f4de031c3cd3df4c88a2be82fbc2ee20fd7590b79ef13c465d2d070d964da3e80eb1488d22e0a47d20585e0aac8a45fb84cc50346e4af4f634a01014b495848fc6032bdf731a4ea646cb5e0058fa6e1d16832cfd8972658a546def5014da7a78d11888d246e0b4e4f51432a3dfc45b8d0985d15bebd82cf311563003b7e1625840426fd59c09675d7ccd51e1c1dee07e070de9f9d9a4b83954063d041c0d9bf2d87e9a83c55b757ca7753465712421cc49bc0ede045a4e2ac01aa1ee6334d1527928b1ff390b0b6ec69bb283818e9f12b6798496f83c7a6e0837eb65527f3497dcfb5af2365f7b7449bf0c7150a908577dbbaad9e48b8163bcf60ec2316c0066d7fe164d3b52191b621a3bf5b52480a62efbf6ff52c5fb881605b628a215158da2a4069ac3a0b7828b0dc82d744998c133cd330cca12c6228bd30ab8fa35545a54c82fb30d9104fbf95fb8e752021f2e8af86ad2d8f1f3c2bed3745fe49005103b005616785d4cdf6dd2dff86b1a72e0b026a908a8bb15e17a05626407f28b0e4b9ea86f44ca0a2834ece0ea9bbdc60627cf6cdf7cdd2f56f500437db78c70c1ab86ded6cb2f5809d2b3eb6bbea2838e8596e92e6c046135d4900c03398868a0c257a19e1c7aee9b82aa8f3dc03bb163c9e3dc4bc835aedea474effafbd9f47810525f2d92e2ffe81bd6b94a08fb57d2433800deedc0f176f0ceb31772890cb2d11f0f4e5fc6f24c0b9db41ace7d20f7d06ffa99a86b74463779/124/640x360_1057680/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-olympusat-flash-ono-ad-3q.amagi.tv/playlist/amg01024-olympusat-flash-ono/cb563d1d736c6d8a84ce3f78d4f762f5a65928d80b6c852a6ab454876da91e588eac8d9ab30ea778149719b1670e74412c278b458b1b5495a523ec4e317f106a999ea263a2e17674cec41f7673e82f0e26ab5d4e8f3c4351d1fb15058072e42a535db8473e1862cd8e08fb27109c9f0f88783788abcf753929520a9f0e08e0bd5cf2feb04044d93aa1ac4e49977e58e38444c0871fb285d10e9b478c57cb22ccc6b3958a43a0b1ab56d026c07958026f17fe817d808759bfdee82b53dc257c1e1b02bea5c5af4c6cd544415aa0aa9dbc63a84acb8c70d43163ed56cf16de65e01aab0db4af4fb0bd84cc564e2ba1fb4e732bd2a5caf4f32127ad75a1eda6ca646bd7f0067d42dd7b96212435dff9ce028dc01085ec53efdd68192b8e924a8b8db3f18cdaec1ac65da0a9f59c2e0c5b703b129454b49b6ec25bbb12cc9f2a0f72173cc7f654c095975f207270888153d16173d3bdad91da0b0ffc3a67308161dd484b6bc93a7e79974293f739629d2318913434f555308e56a6fc4683a4d4eb123ebbcaf841ea7cfbba07eda73db96c2e580fc19846374c4269d5fc680c3c23b42f83d2cef2391c12e085a194aa552a023c03444288edea2af5e4a72819058f57287406737df7548c1db56a5c1311d90cdaba08779c74474782f606737436dea2df8083c58445a56feccde8372b375c11cb59712561def88255e4355b6b695c94414251b8026e74b0e4a38f98847d8095779534630011a69a76113b52191b621a3bf5b52480a62efbf6ff52c5fb881605b628a215158da2a4069ac3a0b7828b0dc82d744998c133cd330cca12c6228bd30ab8fa35545a54c82fb30d9104fbf95fb8e752021f2e8af86ad2d8f1f3c2bed3745fe49005103b005616785d4cdf6dd2dff86b1a72e0b026a908a8bb15e17a05626407f28b0e4b9ea86f44ca0a2834ece0ea9bbdc60627cf6cdf7cdd2f56f500437db78c70c1ab86ded6cb2f5809d2b3eb6bbea2838e8596e92e6c046135d4900c03398868a0c257a19e1c7aee9b82aa8f3dc03bb163c9e3dc4bc835aedea474effafbd9f47810525f2d92e2ffe81bd6b94a08fb57d2433800deedc0f176f0ceb31772880eb39d668ecf91d3d869cd0e3ed36b0b90e9f36f34f59e465117af/33/848x480_1686360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-olympusat-flash-ono-ad-3q.amagi.tv/playlist/amg01024-olympusat-flash-ono/cb563d1d736c6d8a84ce3f78d4f762f5a65928d80b6c852a6ab454876da91e588eac8d9ab30ea778149719b1670e74412c278b458b1b5495a523ec4e317f106a999ea263a2e17674cec41f7673e82f0e26ab5d4e8f3c4351d1fb15058072e42a535db8473e1862cd8e08fb27109c9f0f88783788abcf75682f5256cb0c58e5bd5cf2feb04044d93aa1ac151c942958b484439a874dead6d55e9b4a8c48cb23ccc6b395874ec6a4a2599857b861632923798ace7883d962a5ce957b3ca3643a4a6c158cdd9bea5a2c951d0c13efe8dcf163ed16cb9d33cf6338b64f9c4a9239896eb953d08b29a1a9a891575335d6a8310b21b2e0a59eed7b30b26ba1da83b372788ab8016b78d97fd1342a3b898fad7ee0922cb89879f4de031c3cd3df4c88a2be82fbc2ee20fd7590b79ef13c465d2d070d964da3e80eb1488d22e0a47d20585e0aac8a45fb84cc50346e4af4f634a01014b495848fc6032bdf731a4ea646cb5e0058fa6e1d16832cfd8972658a546def5014da7a78d11888d246e0b4e4f51432a3dfc45b8d0985d15bebd82cf311563003b7e1625840426fd59c09675d7ccd51e1c1dee07e070de9f9d9a4b83954063d041c0d9bf2d87e9a83c55b757ca7753465712421cc49bc0ede045a4e2ac01aa1ee6334d1527928b1ff390b0b6ec69bb283818e9f12b6798496f83c7a6e0837eb65527f3497dcfb5af2365f7b7449bf0c7150a908577dbbaad9e48b8163bcf60ec2316c0066d7fe164d3b52191b621a3bf5b52480a62efbf6ff52c5fb881605b628a215158da2a4069ac3a0b7828b0dc82d744998c133cd330cca12c6228bd30ab8fa35545a54c82fb30d9104fbf95fb8e752021f2e8af86ad2d8f1f3c2bed3745fe49005103b005616785d4cdf6dd2dff86b1a72e0b026a908a8bb15e17a05626407f28b0e4b9ea86f44ca0a2834ece0ea9bbdc60627cf6cdf7cdd2f56f500437db78c70c1ab86ded6cb2f5809d2b3eb6bbea2838e8596e92e6c046135d4900c03398868a0c257a19e1c7aee9b82aa8f3dc03bb163c9e3dc4bc835aedea474effafbd9f47810525f2d92e2ffe81bd6b94a08fb57d2433800deedc0f176f0ceb31772890cb2d11f0f4e5fc6f24c0b9db41ace7d20f7d06ffa99a86b74463779/124/1280x720_3329040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-olympusat-flash-ono-ad-3q.amagi.tv/playlist/amg01024-olympusat-flash-ono/cb563d1d736c6d8a84ce3f78d4f762f5a65928d80b6c852a6ab454876da91e588eac8d9ab30ea778149719b1670e74412c278b458b1b5495a523ec4e317f106a999ea263a2e17674cec41f7673e82f0e26ab5d4e8f3c4351d1fb15058072e42a535db8473e1862cd8e08fb27109c9f0f88783788abcf75682f5256cb0c58e5bd5cf2feb04044d93aa1ac151c942958b484439a874dead6d55e9b4a8c48cb23ccc6b395874ec6a4a2599857b861632923798ace7883d962a5ce957b3ca3643a4a6c158cdd9bea5a2c951d0c13efe8dcf163ed16cb9d33cf6338b64f9c4a9239896eb953d08b29a1a9a891575335d6a8310b21b2e0a59eed7b30b26ba1da83b372788ab8016b78d97fd1342a3b898fad7ee0922cb89879f4de031c3cd3df4c88a2be82fbc2ee20fd7590b79ef13c465d2d070d964da3e80eb1488d22e0a47d20585e0aac8a45fb84cc50346e4af4f634a01014b495848fc6032bdf731a4ea646cb5e0058fa6e1d16832cfd8972658a546def5014da7a78d11888d246e0b4e4f51432a3dfc45b8d0985d15bebd82cf311563003b7e1625840426fd59c09675d7ccd51e1c1dee07e070de9f9d9a4b83954063d041c0d9bf2d87e9a83c55b757ca7753465712421cc49bc0ede045a4e2ac01aa1ee6334d1527928b1ff390b0b6ec69bb283818e9f12b6798496f83c7a6e0837eb65527f3497dcfb5af2365f7b7449bf0c7150a908577dbbaad9e48b8163bcf60ec2316c0066d7fe164d3b52191b621a3bf5b52480a62efbf6ff52c5fb881605b628a215158da2a4069ac3a0b7828b0dc82d744998c133cd330cca12c6228bd30ab8fa35545a54c82fb30d9104fbf95fb8e752021f2e8af86ad2d8f1f3c2bed3745fe49005103b005616785d4cdf6dd2dff86b1a72e0b026a908a8bb15e17a05626407f28b0e4b9ea86f44ca0a2834ece0ea9bbdc60627cf6cdf7cdd2f56f500437db78c70c1ab86ded6cb2f5809d2b3eb6bbea2838e8596e92e6c046135d4900c03398868a0c257a19e1c7aee9b82aa8f3dc03bb163c9e3dc4bc835aedea474effafbd9f47810525f2d92e2ffe81bd6b94a08fb57d2433800deedc0f176f0ceb31772890cb2d11f0f4e5fc6f24c0b9db41ace7d20f7d06ffa99a86b74463779/124/1920x1080_6046040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 15,
            title: "FreeTV Live",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Live.m3u8"},
                { resolution: "240p", url: "https://amg01024-olympusat-chiquilines-ono-ad-et.amagi.tv/playlist/amg01024-olympusat-chiquilines-ono/cb543d1c726c678c98d43d66d3ef48a3f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695c099b5a5ee4a859befdb05c41c56da0e71c55c47a47e09f4698d01ebb83d65bcf12837efb30a7a8b5c8bc50c0dfd732fa1e9052633c7344b7ae23dea33ab7de89273d95755a047415b4f491a9176bde10455fadfbcfbd36a94bca8a21843664e359c14edd688e3eab53df8b20a1a9a891575206b4d6527726a3fcd2ec9151628448d5f89eb7147d9de55a6d55c51fb448413e82f8ce00928d1699bb79ebde0e1c3cd3df419589c0e085d1dd10ed4facc6f08b734b4d116368e37483b8208a73ac12c2cf1732124457929654d0f4ba34513215f6ea37d51708f7d88493cf0f49a90a7a0ab235b32a0468df7a6d6cf512ea8e337e8c191f97394fbb324b8856e8a83fafe894f2112cfbd8d547fa7bf9fb09ddfb4dad682a5001b6e176172f227cd4fd280c2069fc47f1ddceed727b768683cef1cd1d370b201a421998e3f33ebd9cc52c29209b2d4c09751404d803d367cd053b7144a63bddb81b7191032f24ebae3a534e63ccb0dbed86d2d90ab46fc3f0f338223e2b0bd75523346bd682bb03b9523d7d7553940a6a5782044f51fe9ac4dac8bf7ecf8e65a74a087e0bccfe03441b5c726f389bfa10bfdf490e7fc3f9ff6f8e82b81c4c9139a741238ad1c869eb9ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c7c76201a84e6dc982e3a1a61636b1a0e8d369b4d69bd4088db139c0977ea94583a30081a34775b752d0bb7e026056a7ec1b33def51eaea1afc0c0473777f8fd35b1eaae1790984756638f39f9ddfe48a2200da62f142cc6228af43427bb29b76b9d5f2bbd1af5b792c95f6a745b0a4c8a6c9d5c129374b4f3889ce5250388975a6c257affd532cafba8ae3db7c9e3ab766eccae578965bcaae9007a0858584ba1d71795558fbcdf2807af8b4184ab67e9b006d349584f1ec279cfeb91473fe52f08f653dff261fbda8292181684dd6631c31d286a801694971835c7984bd/31/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-olympusat-chiquilines-ono-ad-et.amagi.tv/playlist/amg01024-olympusat-chiquilines-ono/cb543d1c726c678c98d43d66d3ef48a3f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695c099b5a5ee4a859befdb05c41c56da0e71c55c47a47e09f4698d01ebb83d65bcf12837efb30a7a8b5c8bc50c0dfd732fa1e9052633c7344b7ae23dea33ab7de89273d95755a047415b4f491a9176bde10455fadfbcfbd36a94bca8a21843664e359c14edd688e3eab53df8b20a1a9a891575206b4d6527726a3fcd2ec9151628448d5f89eb7147d9de55a6d55c51fb448413e82f8ce00928d1699bb79ebde0e1c3cd3df419589c0e085d1dd10ed4facc6f08b734b4d116368e37483b8208a73ac12c2cf1732124457929654d0f4ba34513215f6ea37d51708f7d88493cf0f49a90a7a0ab235b32a0468df7a6d6cf512ea8e337e8c191f97394fbb324b8856e8a83fafe894f2112cfbd8d547fa7bf9fb09ddfb4dad682a5001b6e176172f227cd4fd280c2069fc47f1ddceed727b768683cef1cd1d370b201a421998e3f33ebd9cc52c29209b2d4c09751404d803d367cd053b7144a63bddb81b7191032f24ebae3a534e63ccb0dbed86d2d90ab46fc3f0f338223e2b0bd75523346bd682bb03b9523d7d7553940a6a5782044f51fe9ac4dac8bf7ecf8e65a74a087e0bccfe03441b5c726f389bfa10bfdf490e7fc3f9ff6f8e82b81c4c9139a741238ad1c869eb9ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c7c76201a84e6dc982e3a1a61636b1a0e8d369b4d69bd4088db139c0977ea94583a30081a34775b752d0bb7e026056a7ec1b33def51eaea1afc0c0473777f8fd35b1eaae1790984756638f39f9ddfe48a2200da62f142cc6228af43427bb29b76b9d5f2bbd1af5b792c95f6a745b0a4c8a6c9d5c129374b4f3889ce5250388975a6c257affd532cafba8ae3db7c9e3ab766eccae578965bcaae9007a0858584ba1d71795558fbcdf2807af8b4184ab67e9b006d349584f1ec279cfeb91473fe52f08f653dff261fbda8292181684dd6631c31d286a801694971835c7984bd/31/640x360_1057680/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-olympusat-chiquilines-ono-ad-et.amagi.tv/playlist/amg01024-olympusat-chiquilines-ono/cb543d1c726c678c98d43d66d3ef48a3f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695c099b5a5ee4a859befdb05c41c56da0e71c55c47a47e09f4698d01ebb83d65bcf12837efb30a7a8b5c8bc50c0dfd732fa1e9052633c7344b7ae23dea33ab7de89273d95755a047415b4f491a9176bde10455fadfbcfbd36a94bca8a21843664e359c14edd688e3eab53df8b20a1a9a891575206b4d6527726a3fcd2ec9151628448d5f89eb7147d9de55a6d55c51fb448413e82f8ce00928d1699bb79ebde0e1c3cd3df419589c0e085d1dd10ed4facc6f08b734b4d116368e37483b8208a73ac12c2cf1732124457929654d0f4ba34513215f6ea37d51708f7d88493cf0f49a90a7a0ab235b32a0468df7a6d6cf512ea8e337e8c191f97394fbb324b8856e8a83fafe894f2112cfbd8d547fa7bf9fb09ddfb4dad682a5001b6e176172f227cd4fd280c2069fc47f1ddceed727b768683cef1cd1d370b201a421998e3f33ebd9cc52c29209b2d4c09751404d803d367cd053b7144a63bddb81b7191032f24ebae3a534e63ccb0dbed86d2d90ab46fc3f0f338223e2b0bd75523346bd682bb03b9523d7d7553940a6a5782044f51fe9ac4dac8bf7ecf8e65a74a087e0bccfe03441b5c726f389bfa10bfdf490e7fc3f9ff6f8e82b81c4c9139a741238ad1c869eb9ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c7c76201a84e6dc982e3a1a61636b1a0e8d369b4d69bd4088db139c0977ea94583a30081a34775b752d0bb7e026056a7ec1b33def51eaea1afc0c0473777f8fd35b1eaae1790984756638f39f9ddfe48a2200da62f142cc6228af43427bb29b76b9d5f2bbd1af5b792c95f6a745b0a4c8a6c9d5c129374b4f3889ce5250388975a6c257affd532cafba8ae3db7c9e3ab766eccae578965bcaae9007a0858584ba1d71795558fbcdf2807af8b4184ab67e9b006d349584f1ec279cfeb91473fe52f08f653dff261fbda8292181684dd6631c31d286a801694971835c7984bd/31/848x480_1686360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-olympusat-chiquilines-ono-ad-et.amagi.tv/playlist/amg01024-olympusat-chiquilines-ono/cb543d1c726c678c98d43d66d3ef48a3f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695c099b5a5ee4a859befdb05c41c56da0e71c55c47a47e09f4698d01ebb83d65bcf12837efb30a7a8b5c8bc50c0dfd732fa1e9052633c7344b7ae23dea33ab7de89273d95755a047415b4f491a9176bde10455fadfbcfbd36a94bca8a21843664e359c14edd688e3eab53df8b20a1a9a891575206b4d6527726a3fcd2ec9151628448d5f89eb7147d9de55a6d55c51fb448413e82f8ce00928d1699bb79ebde0e1c3cd3df419589c0e085d1dd10ed4facc6f08b734b4d116368e37483b8208a73ac12c2cf1732124457929654d0f4ba34513215f6ea37d51708f7d88493cf0f49a90a7a0ab235b32a0468df7a6d6cf512ea8e337e8c191f97394fbb324b8856e8a83fafe894f2112cfbd8d547fa7bf9fb09ddfb4dad682a5001b6e176172f227cd4fd280c2069fc47f1ddceed727b768683cef1cd1d370b201a421998e3f33ebd9cc52c29209b2d4c09751404d803d367cd053b7144a63bddb81b7191032f24ebae3a534e63ccb0dbed86d2d90ab46fc3f0f338223e2b0bd75523346bd682bb03b9523d7d7553940a6a5782044f51fe9ac4dac8bf7ecf8e65a74a087e0bccfe03441b5c726f389bfa10bfdf490e7fc3f9ff6f8e82b81c4c9139a741238ad1c869eb9ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c7c76201a84e6dc982e3a1a61636b1a0e8d369b4d69bd4088db139c0977ea94583a30081a34775b752d0bb7e026056a7ec1b33def51eaea1afc0c0473777f8fd35b1eaae1790984756638f39f9ddfe48a2200da62f142cc6228af43427bb29b76b9d5f2bbd1af5b792c95f6a745b0a4c8a6c9d5c129374b4f3889ce5250388975a6c257affd532cafba8ae3db7c9e3ab766eccae578965bcaae9007a0858584ba1d71795558fbcdf2807af8b4184ab67e9b006d349584f1ec279cfeb91473fe52f08f653dff261fbda8292181684dd6631c31d286a801694971835c7984bd/31/1280x720_3329040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-olympusat-chiquilines-ono-ad-et.amagi.tv/playlist/amg01024-olympusat-chiquilines-ono/cb543d1c726c678c98d43d66d3ef48a3f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b695c099b5a5ee4a859befdb05c41c56da0e71c55c47a47e09f4698d01ebb83d65bcf12837efb30a7a8b5c8bc50c0dfd732fa1e9052633c7344b7ae23dea33ab7de89273d95755a047415b4f491a9176bde10455fadfbcfbd36a94bca8a21843664e359c14edd688e3eab53df8b20a1a9a891575206b4d6527726a3fcd2ec9151628448d5f89eb7147d9de55a6d55c51fb448413e82f8ce00928d1699bb79ebde0e1c3cd3df419589c0e085d1dd10ed4facc6f08b734b4d116368e37483b8208a73ac12c2cf1732124457929654d0f4ba34513215f6ea37d51708f7d88493cf0f49a90a7a0ab235b32a0468df7a6d6cf512ea8e337e8c191f97394fbb324b8856e8a83fafe894f2112cfbd8d547fa7bf9fb09ddfb4dad682a5001b6e176172f227cd4fd280c2069fc47f1ddceed727b768683cef1cd1d370b201a421998e3f33ebd9cc52c29209b2d4c09751404d803d367cd053b7144a63bddb81b7191032f24ebae3a534e63ccb0dbed86d2d90ab46fc3f0f338223e2b0bd75523346bd682bb03b9523d7d7553940a6a5782044f51fe9ac4dac8bf7ecf8e65a74a087e0bccfe03441b5c726f389bfa10bfdf490e7fc3f9ff6f8e82b81c4c9139a741238ad1c869eb9ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c7c76201a84e6dc982e3a1a61636b1a0e8d369b4d69bd4088db139c0977ea94583a30081a34775b752d0bb7e026056a7ec1b33def51eaea1afc0c0473777f8fd35b1eaae1790984756638f39f9ddfe48a2200da62f142cc6228af43427bb29b76b9d5f2bbd1af5b792c95f6a745b0a4c8a6c9d5c129374b4f3889ce5250388975a6c257affd532cafba8ae3db7c9e3ab766eccae578965bcaae9007a0858584ba1d71795558fbcdf2807af8b4184ab67e9b006d349584f1ec279cfeb91473fe52f08f653dff261fbda8292181684dd6631c31d286a801694971835c7984bd/31/1920x1080_6046040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 16,
            title: "FreeTV Saber Mas",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Saber_mas.m3u8"},
                { resolution: "240p", url: "https://amg01024-olympusat-sabermas-ono-ad-d1.amagi.tv/playlist/amg01024-olympusat-sabermas-ono/cb553d1a736c678c98d43e6fd9ef41a1de2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e0dcb0e5ee0f656f0e2e30c448c71a0b04a48882716b5d05fcfd64fba87850dc846d522f91ebda8c9da87539cd5ce23e906905763397227e1ea1592cd4ef8db8a7906927025436c3d8cc5b5ec4b39b271192d9295cabb76b11addb629807445d86af91fde5ee00cab0db4af4aaeb9c9bc282069fe89310626a4f6ee8ef23141ff0cbba6ec842028c0f017201490398b707c6e96fc9f43d2971795b076d7e2681f6897cb31f1f7a790d0a09f438a24c9de86fe57261f5a2a2cdc2ac8fd6cdf3a936dbac2614d362742bf9f50d090975d3f6f15ceea30d51708f7da9b93e00c2ec464175f9a16b32f0663c17a6370fc20e98f2f6d9d682c973038cf6e6fc32895b928e6e9dce00829b0acb1288b40fdbc0ddbf803a5682f1906b6b20a4d404949e6b417675678c756aadac993106365c5d6efb39109406d5716561fc5f7f44f8b9cc93f1c15d821400a10412eb82a8c3cb57148043d871fc3bc366791093328d9b22d51282cfcb6b99593c6d91efa30c4d8ea7729295c66a9254b2561def9895ceb31487b6907c4651240b2094e47e481f6e68c937ac1915bfb07721571c4fd652b633a7a6d1e9e8266d652d0627cd3eaa2a35f7cec6827a804e1673d9bc8d56ff79ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c6454d9ec74ef268e6bacc78ecb2ada0bb85b0add236aa999f9f1a50eb545262b41502a7d270535552405b9cad4774a1c86d975bf0db0be07e32adc544edb1713b27324b85765d08184e6d887fc2be7b9221dcf7cfd76c82f2ea34f042deef31be397abc909e605512dd6aca240b7a0c7d482868a6e465a3d6bdbed565b62c066e8d451defb4935afa89bf5d66ba070e01eb290f97bb76bee98ea4ee6bbb5cad65b5b1e565ef7c4b7dd11d8b7050cfb58d35f221599c5b5a733b58af25736ba1dd384016fbc3731089afcb5579e59df8c5c06ee897c41af3558a7c7f0291bc421dd4e1175e3c28c6b7b8283239a438e8db56868891b15f0484e6bcf2da8d3a7088f8023aa85f18bb8c0fc92bf9270d78a579b966c0680d6/124/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-olympusat-sabermas-ono-ad-d1.amagi.tv/playlist/amg01024-olympusat-sabermas-ono/cb553d1a736c678c98d43e6fd9ef41a1de2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e0dcb0e5ee0f656f0e2e30c448c71a0b04a48882716b5d05fcfd64fba87850dc846d522f91ebda8c9da87539cd5ce23e906905763397227e1ea1592cd4ef8db8a7906927025436c3d8cc5b5ec4b39b271192d9295cabb76b11addb629807445d86af91fde5ee00cab0db4af4aaeb9c9bc282069fe89310626a4f6ee8ef23141ff0cbba6ec842028c0f017201490398b707c6e96fc9f43d2971795b076d7e2681f6897cb31f1f7a790d0a09f438a24c9de86fe57261f5a2a2cdc2ac8fd6cdf3a936dbac2614d362742bf9f50d090975d3f6f15ceea30d51708f7da9b93e00c2ec464175f9a16b32f0663c17a6370fc20e98f2f6d9d682c973038cf6e6fc32895b928e6e9dce00829b0acb1288b40fdbc0ddbf803a5682f1906b6b20a4d404949e6b417675678c756aadac993106365c5d6efb39109406d5716561fc5f7f44f8b9cc93f1c15d821400a10412eb82a8c3cb57148043d871fc3bc366791093328d9b22d51282cfcb6b99593c6d91efa30c4d8ea7729295c66a9254b2561def9895ceb31487b6907c4651240b2094e47e481f6e68c937ac1915bfb07721571c4fd652b633a7a6d1e9e8266d652d0627cd3eaa2a35f7cec6827a804e1673d9bc8d56ff79ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c6454d9ec74ef268e6bacc78ecb2ada0bb85b0add236aa999f9f1a50eb545262b41502a7d270535552405b9cad4774a1c86d975bf0db0be07e32adc544edb1713b27324b85765d08184e6d887fc2be7b9221dcf7cfd76c82f2ea34f042deef31be397abc909e605512dd6aca240b7a0c7d482868a6e465a3d6bdbed565b62c066e8d451defb4935afa89bf5d66ba070e01eb290f97bb76bee98ea4ee6bbb5cad65b5b1e565ef7c4b7dd11d8b7050cfb58d35f221599c5b5a733b58af25736ba1dd384016fbc3731089afcb5579e59df8c5c06ee897c41af3558a7c7f0291bc421dd4e1175e3c28c6b7b8283239a438e8db56868891b15f0484e6bcf2da8d3a7088f8023aa85f18bb8c0fc92bf9270d78a579b966c0680d6/124/640x360_1057680/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-olympusat-sabermas-ono-ad-d1.amagi.tv/playlist/amg01024-olympusat-sabermas-ono/cb553d1a736c678c98d43e6fd9ef41a1de2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e0dcb0e5ee0f656f0e2e30c448c71a0b04a48882716b5d05fcfd64fba87850dc846d522f91ebda8c9da87539cd5ce23e906905763397227e1ea1592cd4ef8db8a7906927025436c3d8cc5b5ec4b39b271192d9295cabb76b11addb629807445d86af91fde5ee00cab0db4af4aaeb9c9bc282069fe89310626a4f6ee8ef23141ff0cbba6ec842028c0f017201490398b707c6e96fc9f43d2971795b076d7e2681f6897cb31f1f7a790d0a09f438a24c9de86fe57261f5a2a2cdc2ac8fd6cdf3a936dbac2614d362742bf9f50d090975d3f6f15ceea30d51708f7da9b93e00c2ec464175f9a16b32f0663c17a6370fc20e98f2f6d9d682c973038cf6e6fc32895b928e6e9dce00829b0acb1288b40fdbc0ddbf803a5682f1906b6b20a4d404949e6b417675678c756aadac993106365c5d6efb39109406d5716561fc5f7f44f8b9cc93f1c15d821400a10412eb82a8c3cb57148043d871fc3bc366791093328d9b22d51282cfcb6b99593c6d91efa30c4d8ea7729295c66a9254b2561def9895ceb31487b6907c4651240b2094e47e481f6e68c937ac1915bfb07721571c4fd652b633a7a6d1e9e8266d652d0627cd3eaa2a35f7cec6827a804e1673d9bc8d56ff79ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c6454d9ec74ef268e6bacc78ecb2ada0bb85b0add236aa999f9f1a50eb545262b41502a7d270535552405b9cad4774a1c86d975bf0db0be07e32adc544edb1713b27324b85765d08184e6d887fc2be7b9221dcf7cfd76c82f2ea34f042deef31be397abc909e605512dd6aca240b7a0c7d482868a6e465a3d6bdbed565b62c066e8d451defb4935afa89bf5d66ba070e01eb290f97bb76bee98ea4ee6bbb5cad65b5b1e565ef7c4b7dd11d8b7050cfb58d35f221599c5b5a733b58af25736ba1dd384016fbc3731089afcb5579e59df8c5c06ee897c41af3558a7c7f0291bc421dd4e1175e3c28c6b7b8283239a438e8db56868891b15f0484e6bcf2da8d3a7088f8023aa85f18bb8c0fc92bf9270d78a579b966c0680d6/124/848x480_1686360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-olympusat-sabermas-ono-ad-d1.amagi.tv/playlist/amg01024-olympusat-sabermas-ono/cb553d1a736c678c98d43e6fd9ef41a1de2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e0dcb0e5ee0f656f0e2e30c448c71a0b04a48882716b5d05fcfd64fba87850dc846d522f91ebda8c9da87539cd5ce23e906905763397227e1ea1592cd4ef8db8a7906927025436c3d8cc5b5ec4b39b271192d9295cabb76b11addb629807445d86af91fde5ee00cab0db4af4aaeb9c9bc282069fe89310626a4f6ee8ef23141ff0cbba6ec842028c0f017201490398b707c6e96fc9f43d2971795b076d7e2681f6897cb31f1f7a790d0a09f438a24c9de86fe57261f5a2a2cdc2ac8fd6cdf3a936dbac2614d362742bf9f50d090975d3f6f15ceea30d51708f7da9b93e00c2ec464175f9a16b32f0663c17a6370fc20e98f2f6d9d682c973038cf6e6fc32895b928e6e9dce00829b0acb1288b40fdbc0ddbf803a5682f1906b6b20a4d404949e6b417675678c756aadac993106365c5d6efb39109406d5716561fc5f7f44f8b9cc93f1c15d821400a10412eb82a8c3cb57148043d871fc3bc366791093328d9b22d51282cfcb6b99593c6d91efa30c4d8ea7729295c66a9254b2561def9895ceb31487b6907c4651240b2094e47e481f6e68c937ac1915bfb07721571c4fd652b633a7a6d1e9e8266d652d0627cd3eaa2a35f7cec6827a804e1673d9bc8d56ff79ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c6454d9ec74ef268e6bacc78ecb2ada0bb85b0add236aa999f9f1a50eb545262b41502a7d270535552405b9cad4774a1c86d975bf0db0be07e32adc544edb1713b27324b85765d08184e6d887fc2be7b9221dcf7cfd76c82f2ea34f042deef31be397abc909e605512dd6aca240b7a0c7d482868a6e465a3d6bdbed565b62c066e8d451defb4935afa89bf5d66ba070e01eb290f97bb76bee98ea4ee6bbb5cad65b5b1e565ef7c4b7dd11d8b7050cfb58d35f221599c5b5a733b58af25736ba1dd384016fbc3731089afcb5579e59df8c5c06ee897c41af3558a7c7f0291bc421dd4e1175e3c28c6b7b8283239a438e8db56868891b15f0484e6bcf2da8d3a7088f8023aa85f18bb8c0fc92bf9270d78a579b966c0680d6/124/1280x720_3329040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-olympusat-sabermas-ono-ad-d1.amagi.tv/playlist/amg01024-olympusat-sabermas-ono/cb553d1a736c678c98d43e6fd9ef41a1de2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e0dcb0e5ee0f656f0e2e30c448c71a0b04a48882716b5d05fcfd64fba87850dc846d522f91ebda8c9da87539cd5ce23e906905763397227e1ea1592cd4ef8db8a7906927025436c3d8cc5b5ec4b39b271192d9295cabb76b11addb629807445d86af91fde5ee00cab0db4af4aaeb9c9bc282069fe89310626a4f6ee8ef23141ff0cbba6ec842028c0f017201490398b707c6e96fc9f43d2971795b076d7e2681f6897cb31f1f7a790d0a09f438a24c9de86fe57261f5a2a2cdc2ac8fd6cdf3a936dbac2614d362742bf9f50d090975d3f6f15ceea30d51708f7da9b93e00c2ec464175f9a16b32f0663c17a6370fc20e98f2f6d9d682c973038cf6e6fc32895b928e6e9dce00829b0acb1288b40fdbc0ddbf803a5682f1906b6b20a4d404949e6b417675678c756aadac993106365c5d6efb39109406d5716561fc5f7f44f8b9cc93f1c15d821400a10412eb82a8c3cb57148043d871fc3bc366791093328d9b22d51282cfcb6b99593c6d91efa30c4d8ea7729295c66a9254b2561def9895ceb31487b6907c4651240b2094e47e481f6e68c937ac1915bfb07721571c4fd652b633a7a6d1e9e8266d652d0627cd3eaa2a35f7cec6827a804e1673d9bc8d56ff79ff9ad2d21b1da9a9dfaf5a94aeb7c3fd31f940a85d762d1b3547c6454d9ec74ef268e6bacc78ecb2ada0bb85b0add236aa999f9f1a50eb545262b41502a7d270535552405b9cad4774a1c86d975bf0db0be07e32adc544edb1713b27324b85765d08184e6d887fc2be7b9221dcf7cfd76c82f2ea34f042deef31be397abc909e605512dd6aca240b7a0c7d482868a6e465a3d6bdbed565b62c066e8d451defb4935afa89bf5d66ba070e01eb290f97bb76bee98ea4ee6bbb5cad65b5b1e565ef7c4b7dd11d8b7050cfb58d35f221599c5b5a733b58af25736ba1dd384016fbc3731089afcb5579e59df8c5c06ee897c41af3558a7c7f0291bc421dd4e1175e3c28c6b7b8283239a438e8db56868891b15f0484e6bcf2da8d3a7088f8023aa85f18bb8c0fc92bf9270d78a579b966c0680d6/124/1920x1080_6046040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 17,
            title: "FreeTV Sureño",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Sure%C3%B1o.m3u8"},
                { resolution: "240p", url: "https://amg01024-olympusat-cinesureno-ono-ad-h2.amagi.tv/playlist/amg01024-olympusat-cinesureno-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b6953589e0c0eb3a25ebefdb05c43c56da0e71c55c47a11b69f43cb8049bd87dc5d9840d777fb34a7aba1df900ed1d9d123f875815e6808780cf3ea7897da13bfc9a5653888034b2c7f05bcebf9904f389509424ce8c0c9aa6bfb1fcbfb53eb1434b40dd6408829877bbf1aa6f50086bfbeda767763f1ae2a6023b3aba19aeb0a20a969e9a7d6c86170ebb67e064fdd79c8317177dfeadc03cac50793b33793fa6a12358f95408d94b186fceaf520f024ced4ba992d52716d050f832fcaf00bfd3bd87d9cf84956362a45a9891bd194d52c5c082580925bd1070df7d8848e854c51a3611f49a667dc551769be41060fd528f539f16f9c2a0b967524bb6b30924bf9ab768dcdb5e40228fbcbd47def7de6a30bd1ef70cf0758083b9ddc761b2f3a7edfe072083e6dfc46f1c0deee7a3651d3e7ccecc15e4a6d537f5b029fe7f57e9a829a587770c057352e7d1365f16eb340fe220451748474b4ad0d67cb02282994e5551d083b949fe8d6df81cc47e07bd7cdae6f773f5a67b865567e378ab7d401f96d4a241437e70e6050f303545698f6a384c9da1aa4f671b90772066ad3f114587b3419075ba2be46e5b283f965d11a61c1ae95ef2776c751960f198ad5d82ccbf980d34a1ce2d23d7b49b6a3ea41ee4fbd7afa249ac678989158030e354349b8fe3c5e9163bde8ae089629bb4a0f7fe47cf9f38b3914bd3495f3651b496d7a1f765d3c4b66dd8e81355123bef64f4e3c971060568999931b67a7ea5da5b31774283c75e003efd0ea86a8d80a13cb21da70de5f3aa945061412ad52efaebde9f38b63554f8cf8fb0cf399d9d09796e62f701e74708399096a218c6fb0ad17f1a1184bea8ba0ecce21c226b57be8d2f666cf1494e69042ee9c94f5fe37305b595cf388b7d91cc9b30740f42a881b6348d2daaaa425c8dbba066ae312b5d65020fd680c3aa3ced70dc63ea09c784081a06656d27837bb8edc2e0ec729a2607f3dddc48f7b238da42b965e9081f81f46ee5c47fc26be004cde7f27d9a4017b90a0c1ee9b1f58b4cb53b08ba0/49/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-olympusat-cinesureno-ono-ad-h2.amagi.tv/playlist/amg01024-olympusat-cinesureno-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b6953589e0c0eb3a25ebefdb05c43c56da0e71c55c47a11b69f43cb8049bd87dc5d9840d777fb34a7aba1df900ed1d9d123f875815e6808780cf3ea7897da13bfc9a5653888034b2c7f05bcebf9904f389509424ce8c0c9aa6bfb1fcbfb53eb1434b40dd6408829877bbf1aa6f50086bfbeda767763f1ae2a6023b3aba19aeb0a20a969e9a7d6c86170ebb67e064fdd79c8317177dfeadc03cac50793b33793fa6a12358f95408d94b186fceaf520f024ced4ba992d52716d050f832fcaf00bfd3bd87d9cf84956362a45a9891bd194d52c5c082580925bd1070df7d8848e854c51a3611f49a667dc551769be41060fd528f539f16f9c2a0b967524bb6b30924bf9ab768dcdb5e40228fbcbd47def7de6a30bd1ef70cf0758083b9ddc761b2f3a7edfe072083e6dfc46f1c0deee7a3651d3e7ccecc15e4a6d537f5b029fe7f57e9a829a587770c057352e7d1365f16eb340fe220451748474b4ad0d67cb02282994e5551d083b949fe8d6df81cc47e07bd7cdae6f773f5a67b865567e378ab7d401f96d4a241437e70e6050f303545698f6a384c9da1aa4f671b90772066ad3f114587b3419075ba2be46e5b283f965d11a61c1ae95ef2776c751960f198ad5d82ccbf980d34a1ce2d23d7b49b6a3ea41ee4fbd7afa249ac678989158030e354349b8fe3c5e9163bde8ae089629bb4a0f7fe47cf9f38b3914bd3495f3651b496d7a1f765d3c4b66dd8e81355123bef64f4e3c971060568999931b67a7ea5da5b31774283c75e003efd0ea86a8d80a13cb21da70de5f3aa945061412ad52efaebde9f38b63554f8cf8fb0cf399d9d09796e62f701e74708399096a218c6fb0ad17f1a1184bea8ba0ecce21c226b57be8d2f666cf1494e69042ee9c94f5fe37305b595cf388b7d91cc9b30740f42a881b6348d2daaaa425c8dbba066ae312b5d65020fd680c3aa3ced70dc63ea09c784081a06656d27837bb8edc2e0ec729a2607f3dddc48f7b238da42b965e9081f81f46ee5c47fc26be004cde7f27d9a4017b90a0c1ee9b1f58b4cb53b08ba0/49/640x360_1686360/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-olympusat-cinesureno-ono-ad-h2.amagi.tv/playlist/amg01024-olympusat-cinesureno-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b6953589e0c0eb3a25ebefdb05c43c56da0e71c55c47a11b69f43cb8049bd87dc5d9840d777fb34a7aba1df900ed1d9d123f875815e6808780cf3ea7897da13bfc9a5653888034b2c7f05bcebf9904f389509424ce8c0c9aa6bfb1fcbfb53eb1434b40dd6408829877bbf1aa6f50086bfbeda767763f1ae2a6023b3aba19aeb0a20a969e9a7d6c86170ebb67e064fdd79c8317177dfeadc03cac50793b33793fa6a12358f95408d94b186fceaf520f024ced4ba992d52716d050f832fcaf00bfd3bd87d9cf84956362a45a9891bd194d52c5c082580925bd1070df7d8848e854c51a3611f49a667dc551769be41060fd528f539f16f9c2a0b967524bb6b30924bf9ab768dcdb5e40228fbcbd47def7de6a30bd1ef70cf0758083b9ddc761b2f3a7edfe072083e6dfc46f1c0deee7a3651d3e7ccecc15e4a6d537f5b029fe7f57e9a829a587770c057352e7d1365f16eb340fe220451748474b4ad0d67cb02282994e5551d083b949fe8d6df81cc47e07bd7cdae6f773f5a67b865567e378ab7d401f96d4a241437e70e6050f303545698f6a384c9da1aa4f671b90772066ad3f114587b3419075ba2be46e5b283f965d11a61c1ae95ef2776c751960f198ad5d82ccbf980d34a1ce2d23d7b49b6a3ea41ee4fbd7afa249ac678989158030e354349b8fe3c5e9163bde8ae089629bb4a0f7fe47cf9f38b3914bd3495f3651b496d7a1f765d3c4b66dd8e81355123bef64f4e3c971060568999931b67a7ea5da5b31774283c75e003efd0ea86a8d80a13cb21da70de5f3aa945061412ad52efaebde9f38b63554f8cf8fb0cf399d9d09796e62f701e74708399096a218c6fb0ad17f1a1184bea8ba0ecce21c226b57be8d2f666cf1494e69042ee9c94f5fe37305b595cf388b7d91cc9b30740f42a881b6348d2daaaa425c8dbba066ae312b5d65020fd680c3aa3ced70dc63ea09c784081a06656d27837bb8edc2e0ec729a2607f3dddc48f7b238da42b965e9081f81f46ee5c47fc26be004cde7f27d9a4017b90a0c1ee9b1f58b4cb53b08ba0/49/848x480_1985360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-olympusat-cinesureno-ono-ad-h2.amagi.tv/playlist/amg01024-olympusat-cinesureno-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b6953589e0c0eb3a25ebefdb05c43c56da0e71c55c47a11b69f43cb8049bd87dc5d9840d777fb34a7aba1df900ed1d9d123f875815e6808780cf3ea7897da13bfc9a5653888034b2c7f05bcebf9904f389509424ce8c0c9aa6bfb1fcbfb53eb1434b40dd6408829877bbf1aa6f50086bfbeda767763f1ae2a6023b3aba19aeb0a20a969e9a7d6c86170ebb67e064fdd79c8317177dfeadc03cac50793b33793fa6a12358f95408d94b186fceaf520f024ced4ba992d52716d050f832fcaf00bfd3bd87d9cf84956362a45a9891bd194d52c5c082580925bd1070df7d8848e854c51a3611f49a667dc551769be41060fd528f539f16f9c2a0b967524bb6b30924bf9ab768dcdb5e40228fbcbd47def7de6a30bd1ef70cf0758083b9ddc761b2f3a7edfe072083e6dfc46f1c0deee7a3651d3e7ccecc15e4a6d537f5b029fe7f57e9a829a587770c057352e7d1365f16eb340fe220451748474b4ad0d67cb02282994e5551d083b949fe8d6df81cc47e07bd7cdae6f773f5a67b865567e378ab7d401f96d4a241437e70e6050f303545698f6a384c9da1aa4f671b90772066ad3f114587b3419075ba2be46e5b283f965d11a61c1ae95ef2776c751960f198ad5d82ccbf980d34a1ce2d23d7b49b6a3ea41ee4fbd7afa249ac678989158030e354349b8fe3c5e9163bde8ae089629bb4a0f7fe47cf9f38b3914bd3495f3651b496d7a1f765d3c4b66dd8e81355123bef64f4e3c971060568999931b67a7ea5da5b31774283c75e003efd0ea86a8d80a13cb21da70de5f3aa945061412ad52efaebde9f38b63554f8cf8fb0cf399d9d09796e62f701e74708399096a218c6fb0ad17f1a1184bea8ba0ecce21c226b57be8d2f666cf1494e69042ee9c94f5fe37305b595cf388b7d91cc9b30740f42a881b6348d2daaaa425c8dbba066ae312b5d65020fd680c3aa3ced70dc63ea09c784081a06656d27837bb8edc2e0ec729a2607f3dddc48f7b238da42b965e9081f81f46ee5c47fc26be004cde7f27d9a4017b90a0c1ee9b1f58b4cb53b08ba0/49/1280x720_5188040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-olympusat-cinesureno-ono-ad-h2.amagi.tv/playlist/amg01024-olympusat-cinesureno-ono/cb543d1a786c648e9fd4366fcef341a7f9531fde1d6988693eb5518975d1073184bdfad39112b12d148f57d667656b554477ba599e2054a08b28d308706312779d86b17dc9816971d6a573363aef234504ee7940837e0c3b99ca121a8a30b0365440be473e1862c3ed49ce270494c253947a2a8cb3de672b6953589e0c0eb3a25ebefdb05c43c56da0e71c55c47a11b69f43cb8049bd87dc5d9840d777fb34a7aba1df900ed1d9d123f875815e6808780cf3ea7897da13bfc9a5653888034b2c7f05bcebf9904f389509424ce8c0c9aa6bfb1fcbfb53eb1434b40dd6408829877bbf1aa6f50086bfbeda767763f1ae2a6023b3aba19aeb0a20a969e9a7d6c86170ebb67e064fdd79c8317177dfeadc03cac50793b33793fa6a12358f95408d94b186fceaf520f024ced4ba992d52716d050f832fcaf00bfd3bd87d9cf84956362a45a9891bd194d52c5c082580925bd1070df7d8848e854c51a3611f49a667dc551769be41060fd528f539f16f9c2a0b967524bb6b30924bf9ab768dcdb5e40228fbcbd47def7de6a30bd1ef70cf0758083b9ddc761b2f3a7edfe072083e6dfc46f1c0deee7a3651d3e7ccecc15e4a6d537f5b029fe7f57e9a829a587770c057352e7d1365f16eb340fe220451748474b4ad0d67cb02282994e5551d083b949fe8d6df81cc47e07bd7cdae6f773f5a67b865567e378ab7d401f96d4a241437e70e6050f303545698f6a384c9da1aa4f671b90772066ad3f114587b3419075ba2be46e5b283f965d11a61c1ae95ef2776c751960f198ad5d82ccbf980d34a1ce2d23d7b49b6a3ea41ee4fbd7afa249ac678989158030e354349b8fe3c5e9163bde8ae089629bb4a0f7fe47cf9f38b3914bd3495f3651b496d7a1f765d3c4b66dd8e81355123bef64f4e3c971060568999931b67a7ea5da5b31774283c75e003efd0ea86a8d80a13cb21da70de5f3aa945061412ad52efaebde9f38b63554f8cf8fb0cf399d9d09796e62f701e74708399096a218c6fb0ad17f1a1184bea8ba0ecce21c226b57be8d2f666cf1494e69042ee9c94f5fe37305b595cf388b7d91cc9b30740f42a881b6348d2daaaa425c8dbba066ae312b5d65020fd680c3aa3ced70dc63ea09c784081a06656d27837bb8edc2e0ec729a2607f3dddc48f7b238da42b965e9081f81f46ee5c47fc26be004cde7f27d9a4017b90a0c1ee9b1f58b4cb53b08ba0/49/1920x1080_7619040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 18,
            title: "FreeTV Terror",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/FreeTV_Horror.m3u8"},
                { resolution: "240p", url: "https://amg01024-olympusat-horrorfy-ono-ad-ky.amagi.tv/playlist/amg01024-olympusat-horrorfy-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e599c5a5eb6a65fa7e2e30c44dd71a0b04a4888274db58a5fcad61ebfd1810fcf438077a31eb5a8ceda87539cc3d20ce915eb22085b3b0fffea1dc2f0739880d203579d753b081f45f69c91eb40388a42312a928bc8b068b11cc29028917524ba14d66996358f5f9c53f28b3fa1a9a8914351299bd74f6e35a5dab598f74773d718f3b6fdcd6026d6b9036f50876bca272e2c86b3c81b898c1193a02a86b17a4749aaf7449f8efc8aecc2ea20f90cebe5b9c9672c240405069513a69479a94ab719f894634b354c40bed456cb96c95f420125e7d004a07971acc8b493cd072dcb6302288e0abd0a3c42e26e2f168c2cfd89726b8c281880474b912c1a924bfbb122f4abdef6463fb09ee150fa6adb8350a59c65a8692f1717a1fe5e332f267bc2eb63192637c04ae989b28b1b0804ffb9cceed06c360634122064e184c1629e8bf41f4752ab25256f7a04129810e96aca135d0f23f64fecbc0866840b53478ccf36534e6984c6b08ddda7a02eb47bc081f42a10375877cf506f473e89fbe73efc3c58307e54847d2629fd020313b3c09cb3c9d56b989834a96830413bc1f345105a022b6053cfc93c8e06d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97de4af47e1c519f4484c0ccb4f7b1dfc62fd3d576e/88/426x240_511680/index.m3u8"},
                { resolution: "360p", url: "https://amg01024-olympusat-horrorfy-ono-ad-ky.amagi.tv/playlist/amg01024-olympusat-horrorfy-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e599c5a5eb6a65fa7e2e30c44dd71a0b04a4888274db58a5fcad61ebfd1810fcf438077a31eb5a8ceda87539cc3d20ce915eb22085b3b0fffea1dc2f0739880d203579d753b081f45f69c91eb40388a42312a928bc8b068b11cc29028917524ba14d66996358f5f9c53f28b3fa1a9a8914351299bd74f6e35a5dab598f74773d718f3b6fdcd6026d6b9036f50876bca272e2c86b3c81b898c1193a02a86b17a4749aaf7449f8efc8aecc2ea20f90cebe5b9c9672c240405069513a69479a94ab719f894634b354c40bed456cb96c95f420125e7d004a07971acc8b493cd072dcb6302288e0abd0a3c42e26e2f168c2cfd89726b8c281880474b912c1a924bfbb122f4abdef6463fb09ee150fa6adb8350a59c65a8692f1717a1fe5e332f267bc2eb63192637c04ae989b28b1b0804ffb9cceed06c360634122064e184c1629e8bf41f4752ab25256f7a04129810e96aca135d0f23f64fecbc0866840b53478ccf36534e6984c6b08ddda7a02eb47bc081f42a10375877cf506f473e89fbe73efc3c58307e54847d2629fd020313b3c09cb3c9d56b989834a96830413bc1f345105a022b6053cfc93c8e06d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97de4af47e1c519f4484c0ccb4f7b1dfc62fd3d576e/88/640x360_1057680/index.m3u8"},
                { resolution: "480p", url: "https://amg01024-olympusat-horrorfy-ono-ad-ky.amagi.tv/playlist/amg01024-olympusat-horrorfy-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e599c5a5eb6a65fa7e2e30c44dd71a0b04a4888274db58a5fcad61ebfd1810fcf438077a31eb5a8ceda87539cc3d20ce915eb22085b3b0fffea1dc2f0739880d203579d753b081f45f69c91eb40388a42312a928bc8b068b11cc29028917524ba14d66996358f5f9c53f28b3fa1a9a8914351299bd74f6e35a5dab598f74773d718f3b6fdcd6026d6b9036f50876bca272e2c86b3c81b898c1193a02a86b17a4749aaf7449f8efc8aecc2ea20f90cebe5b9c9672c240405069513a69479a94ab719f894634b354c40bed456cb96c95f420125e7d004a07971acc8b493cd072dcb6302288e0abd0a3c42e26e2f168c2cfd89726b8c281880474b912c1a924bfbb122f4abdef6463fb09ee150fa6adb8350a59c65a8692f1717a1fe5e332f267bc2eb63192637c04ae989b28b1b0804ffb9cceed06c360634122064e184c1629e8bf41f4752ab25256f7a04129810e96aca135d0f23f64fecbc0866840b53478ccf36534e6984c6b08ddda7a02eb47bc081f42a10375877cf506f473e89fbe73efc3c58307e54847d2629fd020313b3c09cb3c9d56b989834a96830413bc1f345105a022b6053cfc93c8e06d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97de4af47e1c519f4484c0ccb4f7b1dfc62fd3d576e/88/848x480_1686360/index.m3u8" },
                { resolution: "720p", url: "https://amg01024-olympusat-horrorfy-ono-ad-ky.amagi.tv/playlist/amg01024-olympusat-horrorfy-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e599c5a5eb6a65fa7e2e30c44dd71a0b04a4888274db58a5fcad61ebfd1810fcf438077a31eb5a8ceda87539cc3d20ce915eb22085b3b0fffea1dc2f0739880d203579d753b081f45f69c91eb40388a42312a928bc8b068b11cc29028917524ba14d66996358f5f9c53f28b3fa1a9a8914351299bd74f6e35a5dab598f74773d718f3b6fdcd6026d6b9036f50876bca272e2c86b3c81b898c1193a02a86b17a4749aaf7449f8efc8aecc2ea20f90cebe5b9c9672c240405069513a69479a94ab719f894634b354c40bed456cb96c95f420125e7d004a07971acc8b493cd072dcb6302288e0abd0a3c42e26e2f168c2cfd89726b8c281880474b912c1a924bfbb122f4abdef6463fb09ee150fa6adb8350a59c65a8692f1717a1fe5e332f267bc2eb63192637c04ae989b28b1b0804ffb9cceed06c360634122064e184c1629e8bf41f4752ab25256f7a04129810e96aca135d0f23f64fecbc0866840b53478ccf36534e6984c6b08ddda7a02eb47bc081f42a10375877cf506f473e89fbe73efc3c58307e54847d2629fd020313b3c09cb3c9d56b989834a96830413bc1f345105a022b6053cfc93c8e06d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97de4af47e1c519f4484c0ccb4f7b1dfc62fd3d576e/88/1280x720_3329040/index.m3u8"},
                { resolution: "1080p", url: "https://amg01024-olympusat-horrorfy-ono-ad-ky.amagi.tv/playlist/amg01024-olympusat-horrorfy-ono/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e599c5a5eb6a65fa7e2e30c44dd71a0b04a4888274db58a5fcad61ebfd1810fcf438077a31eb5a8ceda87539cc3d20ce915eb22085b3b0fffea1dc2f0739880d203579d753b081f45f69c91eb40388a42312a928bc8b068b11cc29028917524ba14d66996358f5f9c53f28b3fa1a9a8914351299bd74f6e35a5dab598f74773d718f3b6fdcd6026d6b9036f50876bca272e2c86b3c81b898c1193a02a86b17a4749aaf7449f8efc8aecc2ea20f90cebe5b9c9672c240405069513a69479a94ab719f894634b354c40bed456cb96c95f420125e7d004a07971acc8b493cd072dcb6302288e0abd0a3c42e26e2f168c2cfd89726b8c281880474b912c1a924bfbb122f4abdef6463fb09ee150fa6adb8350a59c65a8692f1717a1fe5e332f267bc2eb63192637c04ae989b28b1b0804ffb9cceed06c360634122064e184c1629e8bf41f4752ab25256f7a04129810e96aca135d0f23f64fecbc0866840b53478ccf36534e6984c6b08ddda7a02eb47bc081f42a10375877cf506f473e89fbe73efc3c58307e54847d2629fd020313b3c09cb3c9d56b989834a96830413bc1f345105a022b6053cfc93c8e06d09377c1f34bf7518df77070b67ece341e97c4d968b8de95c65b0a83d82f7305b9f25708f7b0a56db90587c064d0f0740b192e494bc3f434b53feb99f24f4cebaf68b4a73e6a5a9be57b8055a3adf3a9ea795c2858126d5b752d439bd2dc67017ce386d48737e3c65ab34b583f3e088bcc501eced0264dc7755269abb5d3cbb592552f9c3abd35e87013aa523a2be3e731fecce7a0adc93c0240919d8378968dc4c1c0dfc1233e2c693390ce161554d034ff8102aefc4e2aa1d9c5b5943ed746e333ba96bf61b16ff785ef58dcf7f79bd77e194b422dbdab91dd1bd4bb0640c115f8453f17918fa4b925d7d3b21260a83ac4801465ba316e57abf3a31ca9cbd97de4af47e1c519f4484c0ccb4f7b1dfc62fd3d576e/88/1920x1080_6046040/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 19,
            title: "Run:Time Accion",
            videoSources: [
                { resolution: "Auto", url: "https://tinyurl.com/28zjuhpa"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250505d0ckkd6jm3090esbmsbg/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250505d0ckljpitkb7sbp4l250/854x480_1355200_2_f.m3u8" },
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250505d0ckmdf8ekpd668hdhng/960x540_1927200_1_f.m3u8"},
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250505d0ckmuf8ekpd668hdpl0/1280x720_3071200_0_f.m3u8"}
            ],
            subtitleTracks: [
               
                { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 20,
            title: "Run:Time Cine De Horror",
            videoSources: [
                { resolution: "Auto", url: "https://amg02724-amg02724c2-runtime-latam-2586.playouts.now.amagi.tv/playlist/amg02724-somosfast-cinedehorror-runtimelatam/playlist.m3u8?ip=143.105.99.217&ua=Mozilla%2F5.0%20(X11%3B%20Linux%20x86_64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F136.0.0.0%20Safari%2F537.36&dnt=0&app_bundle=com.ammo.runtime&app_name=runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&content_episode=&content_season=&content_livestream=1&content_producer_name=REPLACEME&channel_name=run&network_name=&did=fedb323878eb1335fbe8b735fa194710&us_privacy=1YNN&gdpr_consent=1&gdpr=0&schain=REPLACEME&lmt=0&device_make=desktop&device_model"},
                { resolution: "360p", url: "https://amg02724-amg02724c2-runtime-latam-2586.playouts.now.amagi.tv/playlist/amg02724-somosfast-cinedehorror-runtimelatam/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e5699545de6a00bf1e2e30c47dc71a0b04a48882711b2865fcbd215eed3860a98448722a41eb8a8c6c88048d3dfcf41926d8b062c680e5cbaa554b6932bdcb893794bec1b46174a06a8f2c3ab0065df09110dafa5bed509fc1bcf872b846c08b501954af655e008b81ca9bb25cac9bcdb52534bc7ae3a317dd88fcb8efe233abe63c4afe8d6760ef09c737c42da66cc2d3b62e497a10197fc0584bf3584b7706f5eaaf514a2b39cd99cdae14d9835d8f8f79733514b6d1070e537c3cb379b43b779b8de2c23494340a19f27b6eca95d3f6f01878d53db5d09acd59f8ad20b619b0a765bf870e6481163de315369f7218bda561281321e952667b417229755b2aa39fbb3d2e80375a1c88846fa79e6b60fc1ac0fc30f295870b49829724a5674dce2674265379305aceb9bb02c492ce5f9d8e6804b605106410645cbc3f760978bf72c1f3dc8476935274759c5529621f4287d2d02855edfa50271c521242eeda8761d796484c7bc84c8879912fb2f9d9fb3696f085865bc210c693b80e1c30aab62211419598e1b1620d7660a18aeffbce6968e7acb92709528701b67d0f31253365c726e0fe9fb02be6cc7a33198b8ef71e9b5c478268135a77352f490da69fcefd2951c57c7f2521b36c48072c371289f158378ddd47189e901514d6c1a22a8ed58f24bcbbcf0a67bc055c73d0071e46cbe92f78cda6f40e2825e21360858651c38177d56cdb0bd65106bd3b226eb5894823fce50413d2b4ed387325eec901f9d37a81c1ac795f8c9c0ff0d19de6bf035fa7402b2521e5c99a65ac4a2c23e7e1a0d2e6df7b9b958b3e1a98cc9c4c3257f710c7afb93193dffbf577349fc45ed9d5ecff013d659ab6c61da95f1eb9723e12ea9c8bd418d9894fdfa701864a93696c4daf50ed2b00644f42e951d6d50a4dbb5af25d7d3b21260aa45b8d33838fa773e7cd9bbf701ff2ebacd303ea8d23a0e9b276481a8d40e28e508eb603e74fac8c1493eccc800da0db89de5004189474fb7111031e22cb4d7ff5a6ee7bd01091eb85850c224d2babe363c5ea79c733d504c66732ede4f5b20e144048612a0ebefb4286dce2d83012aa73bc8e652b4a918e1e3ce90ffb06f7dc6176d8a628a476dcf109453efa9796302edb96f4effcd52/157/640x360_880000/index.m3u8"},
                { resolution: "480p", url: "https://amg02724-amg02724c2-runtime-latam-2586.playouts.now.amagi.tv/playlist/amg02724-somosfast-cinedehorror-runtimelatam/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e5699545de6a00bf1e2e30c47dc71a0b04a48882711b2865fcbd215eed3860a98448722a41eb8a8c6c88048d3dfcf41926d8b062c680e5cbaa554b6932bdcb893794bec1b46174a06a8f2c3ab0065df09110dafa5bed509fc1bcf872b846c08b501954af655e008b81ca9bb25cac9bcdb52534bc7ae3a317dd88fcb8efe233abe63c4afe8d6760ef09c737c42da66cc2d3b62e497a10197fc0584bf3584b7706f5eaaf514a2b39cd99cdae14d9835d8f8f79733514b6d1070e537c3cb379b43b779b8de2c23494340a19f27b6eca95d3f6f01878d53db5d09acd59f8ad20b619b0a765bf870e6481163de315369f7218bda561281321e952667b417229755b2aa39fbb3d2e80375a1c88846fa79e6b60fc1ac0fc30f295870b49829724a5674dce2674265379305aceb9bb02c492ce5f9d8e6804b605106410645cbc3f760978bf72c1f3dc8476935274759c5529621f4287d2d02855edfa50271c521242eeda8761d796484c7bc84c8879912fb2f9d9fb3696f085865bc210c693b80e1c30aab62211419598e1b1620d7660a18aeffbce6968e7acb92709528701b67d0f31253365c726e0fe9fb02be6cc7a33198b8ef71e9b5c478268135a77352f490da69fcefd2951c57c7f2521b36c48072c371289f158378ddd47189e901514d6c1a22a8ed58f24bcbbcf0a67bc055c73d0071e46cbe92f78cda6f40e2825e21360858651c38177d56cdb0bd65106bd3b226eb5894823fce50413d2b4ed387325eec901f9d37a81c1ac795f8c9c0ff0d19de6bf035fa7402b2521e5c99a65ac4a2c23e7e1a0d2e6df7b9b958b3e1a98cc9c4c3257f710c7afb93193dffbf577349fc45ed9d5ecff013d659ab6c61da95f1eb9723e12ea9c8bd418d9894fdfa701864a93696c4daf50ed2b00644f42e951d6d50a4dbb5af25d7d3b21260aa45b8d33838fa773e7cd9bbf701ff2ebacd303ea8d23a0e9b276481a8d40e28e508eb603e74fac8c1493eccc800da0db89de5004189474fb7111031e22cb4d7ff5a6ee7bd01091eb85850c224d2babe363c5ea79c733d504c66732ede4f5b20e144048612a0ebefb4286dce2d83012aa73bc8e652b4a918e1e3ce90ffb06f7dc6176d8a628a476dcf109453efa9796302edb96f4effcd52/157/854x480_1650000/index.m3u8"},
                { resolution: "720p", url: "https://amg02724-amg02724c2-runtime-latam-2586.playouts.now.amagi.tv/playlist/amg02724-somosfast-cinedehorror-runtimelatam/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e5699545de6a00bf1e2e30c47dc71a0b04a48882711b2865fcbd215eed3860a98448722a41eb8a8c6c88048d3dfcf41926d8b062c680e5cbaa554b6932bdcb893794bec1b46174a06a8f2c3ab0065df09110dafa5bed509fc1bcf872b846c08b501954af655e008b81ca9bb25cac9bcdb52534bc7ae3a317dd88fcb8efe233abe63c4afe8d6760ef09c737c42da66cc2d3b62e497a10197fc0584bf3584b7706f5eaaf514a2b39cd99cdae14d9835d8f8f79733514b6d1070e537c3cb379b43b779b8de2c23494340a19f27b6eca95d3f6f01878d53db5d09acd59f8ad20b619b0a765bf870e6481163de315369f7218bda561281321e952667b417229755b2aa39fbb3d2e80375a1c88846fa79e6b60fc1ac0fc30f295870b49829724a5674dce2674265379305aceb9bb02c492ce5f9d8e6804b605106410645cbc3f760978bf72c1f3dc8476935274759c5529621f4287d2d02855edfa50271c521242eeda8761d796484c7bc84c8879912fb2f9d9fb3696f085865bc210c693b80e1c30aab62211419598e1b1620d7660a18aeffbce6968e7acb92709528701b67d0f31253365c726e0fe9fb02be6cc7a33198b8ef71e9b5c478268135a77352f490da69fcefd2951c57c7f2521b36c48072c371289f158378ddd47189e901514d6c1a22a8ed58f24bcbbcf0a67bc055c73d0071e46cbe92f78cda6f40e2825e21360858651c38177d56cdb0bd65106bd3b226eb5894823fce50413d2b4ed387325eec901f9d37a81c1ac795f8c9c0ff0d19de6bf035fa7402b2521e5c99a65ac4a2c23e7e1a0d2e6df7b9b958b3e1a98cc9c4c3257f710c7afb93193dffbf577349fc45ed9d5ecff013d659ab6c61da95f1eb9723e12ea9c8bd418d9894fdfa701864a93696c4daf50ed2b00644f42e951d6d50a4dbb5af25d7d3b21260aa45b8d33838fa773e7cd9bbf701ff2ebacd303ea8d23a0e9b276481a8d40e28e508eb603e74fac8c1493eccc800da0db89de5004189474fb7111031e22cb4d7ff5a6ee7bd01091eb85850c224d2babe363c5ea79c733d504c66732ede4f5b20e144048612a0ebefb4286dce2d83012aa73bc8e652b4a918e1e3ce90ffb06f7dc6176d8a628a476dcf109453efa9796302edb96f4effcd52/157/1280x720_2750000/index.m3u8" },
                { resolution: "1080p", url: "https://amg02724-amg02724c2-runtime-latam-2586.playouts.now.amagi.tv/playlist/amg02724-somosfast-cinedehorror-runtimelatam/cb553d1c726c678c98d43d66d3ef41a8dd2437fc087a8d6933fb4b926bc10f41edbdf0c8fd37b63619d70f96690c0257597edb689e3c5d92b92ffa2a6d380871999fac78df890a72cabc725636a326470aab1e628576087d90a939009732b87c4a42bb5f20067cddf359bd150393d148d2602c88aac3623f6f4e5699545de6a00bf1e2e30c47dc71a0b04a48882711b2865fcbd215eed3860a98448722a41eb8a8c6c88048d3dfcf41926d8b062c680e5cbaa554b6932bdcb893794bec1b46174a06a8f2c3ab0065df09110dafa5bed509fc1bcf872b846c08b501954af655e008b81ca9bb25cac9bcdb52534bc7ae3a317dd88fcb8efe233abe63c4afe8d6760ef09c737c42da66cc2d3b62e497a10197fc0584bf3584b7706f5eaaf514a2b39cd99cdae14d9835d8f8f79733514b6d1070e537c3cb379b43b779b8de2c23494340a19f27b6eca95d3f6f01878d53db5d09acd59f8ad20b619b0a765bf870e6481163de315369f7218bda561281321e952667b417229755b2aa39fbb3d2e80375a1c88846fa79e6b60fc1ac0fc30f295870b49829724a5674dce2674265379305aceb9bb02c492ce5f9d8e6804b605106410645cbc3f760978bf72c1f3dc8476935274759c5529621f4287d2d02855edfa50271c521242eeda8761d796484c7bc84c8879912fb2f9d9fb3696f085865bc210c693b80e1c30aab62211419598e1b1620d7660a18aeffbce6968e7acb92709528701b67d0f31253365c726e0fe9fb02be6cc7a33198b8ef71e9b5c478268135a77352f490da69fcefd2951c57c7f2521b36c48072c371289f158378ddd47189e901514d6c1a22a8ed58f24bcbbcf0a67bc055c73d0071e46cbe92f78cda6f40e2825e21360858651c38177d56cdb0bd65106bd3b226eb5894823fce50413d2b4ed387325eec901f9d37a81c1ac795f8c9c0ff0d19de6bf035fa7402b2521e5c99a65ac4a2c23e7e1a0d2e6df7b9b958b3e1a98cc9c4c3257f710c7afb93193dffbf577349fc45ed9d5ecff013d659ab6c61da95f1eb9723e12ea9c8bd418d9894fdfa701864a93696c4daf50ed2b00644f42e951d6d50a4dbb5af25d7d3b21260aa45b8d33838fa773e7cd9bbf701ff2ebacd303ea8d23a0e9b276481a8d40e28e508eb603e74fac8c1493eccc800da0db89de5004189474fb7111031e22cb4d7ff5a6ee7bd01091eb85850c224d2babe363c5ea79c733d504c66732ede4f5b20e144048612a0ebefb4286dce2d83012aa73bc8e652b4a918e1e3ce90ffb06f7dc6176d8a628a476dcf109453efa9796302edb96f4effcd52/157/1920x1080_5500000/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 21,
            title: "Run:Time Cine En Español",
            videoSources: [
                { resolution: "Auto", url: "https://amg02724-amg02724c1-runtime-latam-2587.playouts.now.amagi.tv/playlist/amg02724-somosfast-cineenespanol-runtimelatam/playlist.m3u8?ip=148.222.199.112&ua=Mozilla%2F5.0%20(X11%3B%20Linux%20x86_64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F136.0.0.0%20Safari%2F537.36&dnt=0&app_bundle=com.ammo.runtime&app_name=runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&content_episode=&content_season=&content_livestream=1&content_producer_name=REPLACEME&channel_name=run&network_name=&did=777a66929df0b210e9fecc978950d41f&us_privacy=1YNN&gdpr_consent=1&gdpr=0&schain=REPLACEME&lmt=0&device_make=desktop&device_model"},
                { resolution: "360p", url: "https://amg02724-amg02724c1-runtime-latam-2587.playouts.now.amagi.tv/playlist/amg02724-somosfast-cineenespanol-runtimelatam/cb573e1e7b6c648693d43d61cef348828e7b3dcb0e6c886470af4a9765d9775884b7e1bfb415aa204cd717d80e0c69484d168b59822966928c01f1152b791473849bb46bc1e26a6dcfa4133a76ea214b41895b468b7a4a32fae108078838fa285645a65920067cddfd3afc200387d9158e7c2e95aedb732d2e5d5aca5a0bb6a943a1aee35858d96df7b10119937a17fa8b1798d614bd818159cb428f7cd52ea7d7b3e49352dbc0c030e075845e6d091b53b7da13f9aa51bbcee80a53fd21723e743ee2a685f74d39b94a4257fd8da2d502fb16dd82318e706dfb6af24e9420b569bf07a3ed4bd2dfd1af414e34eac5566c28eef7b584ef3c3eb83c88c885da776c8bc9177749da68d636595bfa9c9a4ef3a9779fa651f4de064c6c98df17c9cffcd2b6e9c31bcd7790ac9efc3a465e717661ec3cf2c060b14bc879dac9792471425ea49659c5c98c10602207bed10f8f5337b0d59e9b9f16639c5f4d0ea120f84b1560c903697ece24edd5693fde6859d37575d07001ad6eb0f820fcacdea5213eb6d5c80bbf4ce7a705dff34df83e6a1752fda2620f057f7cd6ef74047f2c9012aa809cbb1d6363e8f9d98ca3395957636238648af2f74f958fcd2c6f7fab3434757a041e9b018c10b5724a0f20dd1bddb836788c10243ef2b53a5c571ef5a2d0d0dd92a031b670dddbf8373b044971b23710256bc1898358f03d39151034b22a546f9c247f6fcfcfbc8fff936dc69d6da44a097e0af7d5276d2871564e2fc1c102ba5ff28322aa8fc54ec9d0980049f77cc97f188ac4cc7fa2a2ced05818deb84217739ede228b673b8813d13d81d175cbea206c703f4849cc8051f360b7de97c259ff46ce5d1670b031d1ffe7bad214148dd11d646408034126002f280ae8d88735507eb5ba22e55ebfbc0df01704376b16d8b03b34f780fda12f540402879289ed8fd8020ac362860da302308727c3aa7cae4287b0bde6ee8f2f750ddca4a24fbadbe8cbac84824ef66c1da8a8429aaec38e8689acc35e737380ca29c194fb639267eb36bacb852feb0390caa902a1aa6e9f91723a51405ef0cdf6b54195ec4a0d832a8a166d349584f1ec25e382ea382ebe14a0a4177ea23b4958cb80f210877eebb17779b1c72172fd401fedacbf2a15c321e707377efac2c82e18c7d1009e48d4c4a45902dc464eaa171e52ad7afb95b6263ab2eb5d53079f6c6de95b8dc6cc442333c4f4412a250a001073bf63543eeb336fe557f2c8ebbf7d38cc66ae0a2cb46da0d25dc6f0148f13a5683a609803746627b14360b94c1c07abc437759011/2/640x360_880000/index.m3u8"},
                { resolution: "480p", url: "https://amg02724-amg02724c1-runtime-latam-2587.playouts.now.amagi.tv/playlist/amg02724-somosfast-cineenespanol-runtimelatam/cb573e1e7b6c648693d43d61cef348828e7b3dcb0e6c886470af4a9765d9775884b7e1bfb415aa204cd717d80e0c69484d168b59822966928c01f1152b791473849bb46bc1e26a6dcfa4133a76ea214b41895b468b7a4a32fae108078838fa285645a65920067cddfd3afc200387d9158e7c2e95aedb732d2e5d5aca5a0bb6a943a1aee35858d96df7b10119937a17fa8b1798d614bd818159cb428f7cd52ea7d7b3e49352dbc0c030e075845e6d091b53b7da13f9aa51bbcee80a53fd21723e743ee2a685f74d39b94a4257fd8da2d502fb16dd82318e706dfb6af24e9420b569bf07a3ed4bd2dfd1af414e34eac5566c28eef7b584ef3c3eb83c88c885da776c8bc9177749da68d636595bfa9c9a4ef3a9779fa651f4de064c6c98df17c9cffcd2b6e9c31bcd7790ac9efc3a465e717661ec3cf2c060b14bc879dac9792471425ea49659c5c98c10602207bed10f8f5337b0d59e9b9f16639c5f4d0ea120f84b1560c903697ece24edd5693fde6859d37575d07001ad6eb0f820fcacdea5213eb6d5c80bbf4ce7a705dff34df83e6a1752fda2620f057f7cd6ef74047f2c9012aa809cbb1d6363e8f9d98ca3395957636238648af2f74f958fcd2c6f7fab3434757a041e9b018c10b5724a0f20dd1bddb836788c10243ef2b53a5c571ef5a2d0d0dd92a031b670dddbf8373b044971b23710256bc1898358f03d39151034b22a546f9c247f6fcfcfbc8fff936dc69d6da44a097e0af7d5276d2871564e2fc1c102ba5ff28322aa8fc54ec9d0980049f77cc97f188ac4cc7fa2a2ced05818deb84217739ede228b673b8813d13d81d175cbea206c703f4849cc8051f360b7de97c259ff46ce5d1670b031d1ffe7bad214148dd11d646408034126002f280ae8d88735507eb5ba22e55ebfbc0df01704376b16d8b03b34f780fda12f540402879289ed8fd8020ac362860da302308727c3aa7cae4287b0bde6ee8f2f750ddca4a24fbadbe8cbac84824ef66c1da8a8429aaec38e8689acc35e737380ca29c194fb639267eb36bacb852feb0390caa902a1aa6e9f91723a51405ef0cdf6b54195ec4a0d832a8a166d349584f1ec25e382ea382ebe14a0a4177ea23b4958cb80f210877eebb17779b1c72172fd401fedacbf2a15c321e707377efac2c82e18c7d1009e48d4c4a45902dc464eaa171e52ad7afb95b6263ab2eb5d53079f6c6de95b8dc6cc442333c4f4412a250a001073bf63543eeb336fe557f2c8ebbf7d38cc66ae0a2cb46da0d25dc6f0148f13a5683a609803746627b14360b94c1c07abc437759011/2/854x480_1650000/index.m3u8"},
                { resolution: "720p", url: "https://amg02724-amg02724c1-runtime-latam-2587.playouts.now.amagi.tv/playlist/amg02724-somosfast-cineenespanol-runtimelatam/cb573e1e7b6c648693d43d61cef348828e7b3dcb0e6c886470af4a9765d9775884b7e1bfb415aa204cd717d80e0c69484d168b59822966928c01f1152b791473849bb46bc1e26a6dcfa4133a76ea214b41895b468b7a4a32fae108078838fa285645a65920067cddfd3afc200387d9158e7c2e95aedb732d2e5d5aca5a0bb6a943a1aee35858d96df7b10119937a17fa8b1798d614bd818159cb428f7cd52ea7d7b3e49352dbc0c030e075845e6d091b53b7da13f9aa51bbcee80a53fd21723e743ee2a685f74d39b94a4257fd8da2d502fb16dd82318e706dfb6af24e9420b569bf07a3ed4bd2dfd1af414e34eac5566c28eef7b584ef3c3eb83c88c885da776c8bc9177749da68d636595bfa9c9a4ef3a9779fa651f4de064c6c98df17c9cffcd2b6e9c31bcd7790ac9efc3a465e717661ec3cf2c060b14bc879dac9792471425ea49659c5c98c10602207bed10f8f5337b0d59e9b9f16639c5f4d0ea120f84b1560c903697ece24edd5693fde6859d37575d07001ad6eb0f820fcacdea5213eb6d5c80bbf4ce7a705dff34df83e6a1752fda2620f057f7cd6ef74047f2c9012aa809cbb1d6363e8f9d98ca3395957636238648af2f74f958fcd2c6f7fab3434757a041e9b018c10b5724a0f20dd1bddb836788c10243ef2b53a5c571ef5a2d0d0dd92a031b670dddbf8373b044971b23710256bc1898358f03d39151034b22a546f9c247f6fcfcfbc8fff936dc69d6da44a097e0af7d5276d2871564e2fc1c102ba5ff28322aa8fc54ec9d0980049f77cc97f188ac4cc7fa2a2ced05818deb84217739ede228b673b8813d13d81d175cbea206c703f4849cc8051f360b7de97c259ff46ce5d1670b031d1ffe7bad214148dd11d646408034126002f280ae8d88735507eb5ba22e55ebfbc0df01704376b16d8b03b34f780fda12f540402879289ed8fd8020ac362860da302308727c3aa7cae4287b0bde6ee8f2f750ddca4a24fbadbe8cbac84824ef66c1da8a8429aaec38e8689acc35e737380ca29c194fb639267eb36bacb852feb0390caa902a1aa6e9f91723a51405ef0cdf6b54195ec4a0d832a8a166d349584f1ec25e382ea382ebe14a0a4177ea23b4958cb80f210877eebb17779b1c72172fd401fedacbf2a15c321e707377efac2c82e18c7d1009e48d4c4a45902dc464eaa171e52ad7afb95b6263ab2eb5d53079f6c6de95b8dc6cc442333c4f4412a250a001073bf63543eeb336fe557f2c8ebbf7d38cc66ae0a2cb46da0d25dc6f0148f13a5683a609803746627b14360b94c1c07abc437759011/2/1280x720_2750000/index.m3u8" },
                { resolution: "1080p", url: "https://amg02724-amg02724c1-runtime-latam-2587.playouts.now.amagi.tv/playlist/amg02724-somosfast-cineenespanol-runtimelatam/cb573e1e7b6c648693d43d61cef348828e7b3dcb0e6c886470af4a9765d9775884b7e1bfb415aa204cd717d80e0c69484d168b59822966928c01f1152b791473849bb46bc1e26a6dcfa4133a76ea214b41895b468b7a4a32fae108078838fa285645a65920067cddfd3afc200387d9158e7c2e95aedb732d2e5d5aca5a0bb6a943a1aee35858d96df7b10119937a17fa8b1798d614bd818159cb428f7cd52ea7d7b3e49352dbc0c030e075845e6d091b53b7da13f9aa51bbcee80a53fd21723e743ee2a685f74d39b94a4257fd8da2d502fb16dd82318e706dfb6af24e9420b569bf07a3ed4bd2dfd1af414e34eac5566c28eef7b584ef3c3eb83c88c885da776c8bc9177749da68d636595bfa9c9a4ef3a9779fa651f4de064c6c98df17c9cffcd2b6e9c31bcd7790ac9efc3a465e717661ec3cf2c060b14bc879dac9792471425ea49659c5c98c10602207bed10f8f5337b0d59e9b9f16639c5f4d0ea120f84b1560c903697ece24edd5693fde6859d37575d07001ad6eb0f820fcacdea5213eb6d5c80bbf4ce7a705dff34df83e6a1752fda2620f057f7cd6ef74047f2c9012aa809cbb1d6363e8f9d98ca3395957636238648af2f74f958fcd2c6f7fab3434757a041e9b018c10b5724a0f20dd1bddb836788c10243ef2b53a5c571ef5a2d0d0dd92a031b670dddbf8373b044971b23710256bc1898358f03d39151034b22a546f9c247f6fcfcfbc8fff936dc69d6da44a097e0af7d5276d2871564e2fc1c102ba5ff28322aa8fc54ec9d0980049f77cc97f188ac4cc7fa2a2ced05818deb84217739ede228b673b8813d13d81d175cbea206c703f4849cc8051f360b7de97c259ff46ce5d1670b031d1ffe7bad214148dd11d646408034126002f280ae8d88735507eb5ba22e55ebfbc0df01704376b16d8b03b34f780fda12f540402879289ed8fd8020ac362860da302308727c3aa7cae4287b0bde6ee8f2f750ddca4a24fbadbe8cbac84824ef66c1da8a8429aaec38e8689acc35e737380ca29c194fb639267eb36bacb852feb0390caa902a1aa6e9f91723a51405ef0cdf6b54195ec4a0d832a8a166d349584f1ec25e382ea382ebe14a0a4177ea23b4958cb80f210877eebb17779b1c72172fd401fedacbf2a15c321e707377efac2c82e18c7d1009e48d4c4a45902dc464eaa171e52ad7afb95b6263ab2eb5d53079f6c6de95b8dc6cc442333c4f4412a250a001073bf63543eeb336fe557f2c8ebbf7d38cc66ae0a2cb46da0d25dc6f0148f13a5683a609803746627b14360b94c1c07abc437759011/2/1920x1080_5500000/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 22,
            title: "Run:Time Cinespanto",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6126&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=81b5bc7b0f91a826f909243ed9cab569&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250506d0co1dq8a4fooipjfig0/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250506d0co1dq8a4fooipjfig0/854x480_1355200_2_f.m3u8"},
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250506d0co1dq8a4fooipjfig0/960x540_1927200_1_f.m3u8" },
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250506d0co1dq8a4fooipjfig0/1280x720_3071200_0_f.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 23,
            title: "Run:Time Comedia",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6127&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=5c8f3e56332bc19909a4a0fc87964e34&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250507d0dd1jq8a4fooiptl730/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250507d0dd1jq8a4fooiptl730/854x480_1355200_2_f.m3u8"},
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250507d0dd1jq8a4fooiptl730/960x540_1927200_1_f.m3u8" },
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250507d0dd1jq8a4fooiptl730/1280x720_3071200_0_f.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 24,
            title: "Run:Time Corazon",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=4826&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=5219590c8375759b055862268dbc8b9b&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250507d0dd629lme1i1jcrkh80/640x360_1055788_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250507d0dd629lme1i1jcrkh80/854x480_1284536_2_f.m3u8"},
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250507d0dd629lme1i1jcrkh80/960x540_1856404_1_f.m3u8" },
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250507d0dd629lme1i1jcrkh80/1280x720_3000140_0_f.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 25,
            title: "Run:Time Crimen",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6129&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=661dcd6573d971bf45890726eebc43e6&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250507d0dd3rjna79ktdta8gbg/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250507d0dd3rjna79ktdta8gbg/854x480_1355200_2_f.m3u8"},
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250507d0dd3rjna79ktdta8gbg/960x540_1927200_1_f.m3u8" },
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250507d0dd3rjna79ktdta8gbg/1280x720_3071200_0_f.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 26,
            title: "Run:Time Curro Jimenez",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3435&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=fedb323878eb1335fbe8b735fa194710&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250506d0cn705jckqgphhiunm0/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250506d0cn705jckqgphhiunm0/854x480_1355200_2_f.m3u8" },
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250506d0cn705jckqgphhiunm0/960x540_1927200_1_f.m3u8"},
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250506d0cnaujj00lcpm6obgpg/1280x720_3071200_0_f.m3u8"}
                
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 27,
            title: "Run:Time Familia",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6118&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=6cd1b9133a749700144c5a71d9b98e69&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250507d0dd91060mm1em7e5hv0/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250507d0dd91060mm1em7e5hv0/854x480_1355200_2_f.m3u8"},
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250507d0dd91060mm1em7e5hv0/960x540_1927200_1_f.m3u8" },
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250507d0dd91060mm1em7e5hv0/1280x720_3071200_0_f.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 28,
            title: "Run:Time Imagen TV Plus",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6149&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=918c209fa6ffeb2f233a1d692dd53f6d&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250506d0cno0r60o0a1senift0/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250506d0cno0r60o0a1senift0/854x480_1355200_2_f.m3u8"},
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250506d0cno0r60o0a1senift0/960x540_1927200_1_f.m3u8" },
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250506d0cno0r60o0a1senift0/1280x720_3071200_0_f.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 29,
            title: "Run:time Romance",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6119&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=5219590c8375759b055862268dbc8b9b&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250507d0dd7mmjm3090esml2l0/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250507d0dd7mmjm3090esml2l0/854x480_1355200_2_f.m3u8"},
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250507d0dd7mmjm3090esml2l0/960x540_1927200_1_f.m3u8" },
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250507d0dd7mmjm3090esml2l0/1280x720_3071200_0_f.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 30,
            title: "Run:time Sangre Fria",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6130&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=777a66929df0b210e9fecc978950d41f&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250506d0cntc5jckqgphhj98og/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250506d0cntc5jckqgphhj98og/854x480_1355200_2_f.m3u8"},
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250506d0cntc5jckqgphhj98og/960x540_1927200_1_f.m3u8"},
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250506d0cntc5jckqgphhj98og/1280x720_3071200_0_f.m3u8" },
                { resolution: "1080p", url: "https://stream.ads.ottera.tv/cl/250506d0cnv3pu7pectt19dn20/1920x1080_4787200_4_f.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 31,
            title: "Run:Time TraceUrban",
            videoSources: [
                { resolution: "Auto", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01131-tracetv-traceurban-runtimees/playlist.m3u8?ip=200.189.27.28&ua=Mozilla%2F5.0%20(X11%3B%20Linux%20x86_64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F136.0.0.0%20Safari%2F537.36&dnt=0&app_bundle=com.ammo.runtime&app_name=runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&content_episode=&content_season=&content_livestream=1&content_producer_name=API%20rightsHolder&channel_name=run&network_name=&did=27b79787fc5ddb368dcde63899a98d5a&us_privacy=1YNN&gdpr_consent=1&gdpr=0&lmt=0&device_make=desktop&device_model"},
                { resolution: "360p", url: "https://amg01131-tracetv-traceurban-runtimees-hry0k.amagi.tv/playlist/amg01131-tracetv-traceurban-runtimees/cb563d1d736c6d8a84ce3f78d2f662f5a65928d80b6c852a6ab454876da91e588eac8d9ab30ea778149719b1670e74412c278b458b1b5495a523ec4e317f106a999ea263a2e17674cec41f7673e82f0e26ab5d4e8f3c4351d1fb15058072e42a535db8473e1862cd8e08fb27109c9f0f88783788abcf753b7809579d5b54b3bd5cf2fce34044d93aa1ac4e1d922a58e7844bc0d449b3d5825b9e128c52cb2ed8d19fcb9149c4d7c22a8b61885058610c53c3fd13e5c859a594996637887426522159efb596ed5a2e83464e2e9b95aaee3fb279a98821922e33b204ea0dee70da39fe5aa3e319f4febe8c47126da6950f3272f1e0f989a3316bbf63aca3bfdc290ff39a137c57db52db2d252b95f3df66e7a974c7ec76efc568192b8e90558ba2a197e0a288758937c6b5b4f2434a5a771411dc12ed8d7acc67cf6da6da1a2c590350bbd551c190d05d357115c9ea27d51708f7d8848dcb0b35de5f0b48e764cc58007ef33a6d71e05f8bf04c4db90f4a973c3af34c26a84df0bc29e7fdca8f603ab1cd8957fe1de8df0ffff918a06130584de6bc7c1f0d742c81b526213977d65da4cb92b7485f54a5b7eceed05f3d303c1579059fadb223ccc0937f5d5eea7b124d585c579a0ddd6c9f274c0325c657938f01668a0b2462b7f469130a22c686e1c1b4d7cc45a7769c9aae6e61680f39f9596b276ac0f88c49ed07496b74598c0a1631d777594de7dbc8e8948f20dc896abe316f1139bd9a79400d413d7619a4807ade48e39004cbfda0389dd6a33c1feb56c400148d9ed061ec9fe2ad2e5fcadd3d696693c069c2773dd528d72486c175d6a42765765d1112bbe438fe5baa919bd73ba522ac42060c8312dc8ef6bdc26f5be2cb25595b0851043155723c1ecab9bf05502182d640e759f5a551a756265055268ed86b34e2ef730c8e471d0ac4f091f1c7ac0214d920fd65bb1069c8065976af9e6ab8cde3aaa3c936065aa0dcdb4dbfb2c682c4d7c4287b07533e9acc5a2712b245e29909bbd17713ee8d98abde6b817ce1308489b725e14ec9a1db0aab8396eaf467255e302f94405c6776a1de3f76f916ee43240c998ea4c771faceb9140a923782ab261e63bae33fb3c6d50bda3fb0a61827e295605ad40e528b80ad60744043d6a3f786558d014c1bb65b3c10886081cfaf06e32913e1555762ad33d98fb66a6ee6b329f330870e2a836d8dc4d55d1627e0c2266d125c5d4e49fd495239fc7e72fd4c8db2b6f828019e11860a08ba7b84cb43e8f75fb9bd97a5eead134d93da205ab203ee00bc63e9dc8cf337ed1342a27a9e1767e98e8fa886bc89e7818f5e6919904589008723c991e7c223746d10bb2332443de46782616f749bcb52c6a23702a5d6ef0cce031408423839c10ca6de726c403082f2728dd7083a3b745108a2dd499514231ce1d0463e7886cbab2bdc043f56af33/82/640x360_1020800/index.m3u8"},
                { resolution: "480p", url: "https://amg01131-tracetv-traceurban-runtimees-hry0k.amagi.tv/playlist/amg01131-tracetv-traceurban-runtimees/cb563d1d736c6d8a84ce3f78d2f662f5a65928d80b6c852a6ab454876da91e588eac8d9ab30ea778149719b1670e74412c278b458b1b5495a523ec4e317f106a999ea263a2e17674cec41f7673e82f0e26ab5d4e8f3c4351d1fb15058072e42a535db8473e1862cd8e08fb27109c9f0f88783788abcf753b745f5b980958edbd5cf2fce24044d93aa1ac4e1b937e58b5d713c8d44fe88386529f458c52cb2ed8d19fcb9149c4d7c22a8b61885058610c53c3f813fdc859a5948f7a068c6321501f56ffd1f5942a6dbf696d068b95a7b861ef01f18a2a8f7332b514ea2cee51db31ee63c9e04ab3e3bacf527e3bb1ca5f6d22d297cafaf83a3ef367f6afe693616997e21d75429322b25b2a3c83b3c81b8ad71098a21c95a666192dc39457a493b38eeac2ff20ec04faeeb48a34454677172a8951a69f7f8153b71ea9ca006f555d36ddf03b95d28a1061321ac8d9079a414aee81fce9af0f3fd92e1c5ef872e6580a62df316268974e93fb6d36984c6c84312eb54d34f24596bd01fabdd2e90a3afa8b8912bf27d7e45b89b62ea063294142abaa7a6013183490cf761d3c7cf440e6f8c3f5385c53bbb99ea8801b132f0d3a7e40cbeeee7b9ecee72c1e1dce1a66437c02189b0199388c56075060995083ec3a7583073324a9f26c0a143fc092deebefd7ce57fb78d7dfef4b4c513833e74a6f4a6fd7a5c358ed2874707b50857d0d29da154f4cfe9cc4e0c3d504bf9d60b976630473fae3034e1b574c761897e228bd20ea8709a988901383f89a050b9729ad151993d59278eea285c2590693af44431afda526c16063c418da3f8ddc64e7bc5c10192f545ac78f598d3cd3becb9d52f05cac4b1030e970ba92edb6da5958e69c4f41566336056a5c2c5066d7dbd1774e7fe9aa2ee558d9e654a247265a5520da87135592e76746d15f1961a1b3858fa4ce7152a02ef270cd6250f4045579b9c93abbd0e1a6fc856a0c028ee5fe4abaf0d1d59b879a7c10610b319fd2115179cc5493e666b1f7731688888ff694629a619056d1e5e6748f56c4ccb81ebce2fe949a27255e302f94405c6776a1de3f76f916ee43240c998ea4c771faceb9140a923782ab261e63bae33fb3c6d50bda3fb0a61827e295605ad40e528b80ad60744043d6a3f786558d014c1bb65b3c10886081cfaf06e32913e1555762ad33d98fb66a6ee6b329f330870e2a836d8dc4d55d1627e0c2266d125c5d4e49fd495239fc7e72fd4c8db2b6f828019e11860a08ba7b84cb43e8f75fb9bd97a5eead134d93da205ab203ee00bc63e9dc8cf337ed1342a27a9e1767e98e8fa886bc89e7818f5e6919904589008723c991e7c223746d10bb2332443de46782616f749bcb52c6a23702a5d6ef0cce031408423839c10ca6de726c403082f2728dd708313c745108a2897695142314d04b690f7fbf6d90052285646d22d6/35/848x480_1249600/index.m3u8"},
                { resolution: "720p", url: "https://amg01131-tracetv-traceurban-runtimees-hry0k.amagi.tv/playlist/amg01131-tracetv-traceurban-runtimees/cb563d1d736c6d8a84ce3f78d2f662f5a65928d80b6c852a6ab454876da91e588eac8d9ab30ea778149719b1670e74412c278b458b1b5495a523ec4e317f106a999ea263a2e17674cec41f7673e82f0e26ab5d4e8f3c4351d1fb15058072e42a535db8473e1862cd8e08fb27109c9f0f88783788abcf753b745f5b980958edbd5cf2fce24044d93aa1ac4e1b937e58b5d713c8d44fe88386529f458c52cb2ed8d19fcb9149c4d7c22a8b61885058610c53c3f813fdc859a5948f7a068c6321501f56ffd1f5942a6dbf696d068b95a7b861ef01f18a2a8f7332b514ea2cee51db31ee63c9e04ab3e3bacf527e3bb1ca5f6d22d297cafaf83a3ef367f6afe693616997e21d75429322b25b2a3c83b3c81b8ad71098a21c95a666192dc39457a493b38eeac2ff20ec04faeeb48a34454677172a8951a69f7f8153b71ea9ca006f555d36ddf03b95d28a1061321ac8d9079a414aee81fce9af0f3fd92e1c5ef872e6580a62df316268974e93fb6d36984c6c84312eb54d34f24596bd01fabdd2e90a3afa8b8912bf27d7e45b89b62ea063294142abaa7a6013183490cf761d3c7cf440e6f8c3f5385c53bbb99ea8801b132f0d3a7e40cbeeee7b9ecee72c1e1dce1a66437c02189b0199388c56075060995083ec3a7583073324a9f26c0a143fc092deebefd7ce57fb78d7dfef4b4c513833e74a6f4a6fd7a5c358ed2874707b50857d0d29da154f4cfe9cc4e0c3d504bf9d60b976630473fae3034e1b574c761897e228bd20ea8709a988901383f89a050b9729ad151993d59278eea285c2590693af44431afda526c16063c418da3f8ddc64e7bc5c10192f545ac78f598d3cd3becb9d52f05cac4b1030e970ba92edb6da5958e69c4f41566336056a5c2c5066d7dbd1774e7fe9aa2ee558d9e654a247265a5520da87135592e76746d15f1961a1b3858fa4ce7152a02ef270cd6250f4045579b9c93abbd0e1a6fc856a0c028ee5fe4abaf0d1d59b879a7c10610b319fd2115179cc5493e666b1f7731688888ff694629a619056d1e5e6748f56c4ccb81ebce2fe949a27255e302f94405c6776a1de3f76f916ee43240c998ea4c771faceb9140a923782ab261e63bae33fb3c6d50bda3fb0a61827e295605ad40e528b80ad60744043d6a3f786558d014c1bb65b3c10886081cfaf06e32913e1555762ad33d98fb66a6ee6b329f330870e2a836d8dc4d55d1627e0c2266d125c5d4e49fd495239fc7e72fd4c8db2b6f828019e11860a08ba7b84cb43e8f75fb9bd97a5eead134d93da205ab203ee00bc63e9dc8cf337ed1342a27a9e1767e98e8fa886bc89e7818f5e6919904589008723c991e7c223746d10bb2332443de46782616f749bcb52c6a23702a5d6ef0cce031408423839c10ca6de726c403082f2728dd708313c745108a2897695142314d04b690f7fbf6d90052285646d22d6/35/1280x720_2657600/index.m3u8" },
                { resolution: "1080p", url: "https://amg01131-tracetv-traceurban-runtimees-hry0k.amagi.tv/playlist/amg01131-tracetv-traceurban-runtimees/cb563d1d736c6d8a84ce3f78d2f662f5a65928d80b6c852a6ab454876da91e588eac8d9ab30ea778149719b1670e74412c278b458b1b5495a523ec4e317f106a999ea263a2e17674cec41f7673e82f0e26ab5d4e8f3c4351d1fb15058072e42a535db8473e1862cd8e08fb27109c9f0f88783788abcf753b745f5b980958edbd5cf2fce24044d93aa1ac4e1b937e58b5d713c8d44fe88386529f458c52cb2ed8d19fcb9149c4d7c22a8b61885058610c53c3f813fdc859a5948f7a068c6321501f56ffd1f5942a6dbf696d068b95a7b861ef01f18a2a8f7332b514ea2cee51db31ee63c9e04ab3e3bacf527e3bb1ca5f6d22d297cafaf83a3ef367f6afe693616997e21d75429322b25b2a3c83b3c81b8ad71098a21c95a666192dc39457a493b38eeac2ff20ec04faeeb48a34454677172a8951a69f7f8153b71ea9ca006f555d36ddf03b95d28a1061321ac8d9079a414aee81fce9af0f3fd92e1c5ef872e6580a62df316268974e93fb6d36984c6c84312eb54d34f24596bd01fabdd2e90a3afa8b8912bf27d7e45b89b62ea063294142abaa7a6013183490cf761d3c7cf440e6f8c3f5385c53bbb99ea8801b132f0d3a7e40cbeeee7b9ecee72c1e1dce1a66437c02189b0199388c56075060995083ec3a7583073324a9f26c0a143fc092deebefd7ce57fb78d7dfef4b4c513833e74a6f4a6fd7a5c358ed2874707b50857d0d29da154f4cfe9cc4e0c3d504bf9d60b976630473fae3034e1b574c761897e228bd20ea8709a988901383f89a050b9729ad151993d59278eea285c2590693af44431afda526c16063c418da3f8ddc64e7bc5c10192f545ac78f598d3cd3becb9d52f05cac4b1030e970ba92edb6da5958e69c4f41566336056a5c2c5066d7dbd1774e7fe9aa2ee558d9e654a247265a5520da87135592e76746d15f1961a1b3858fa4ce7152a02ef270cd6250f4045579b9c93abbd0e1a6fc856a0c028ee5fe4abaf0d1d59b879a7c10610b319fd2115179cc5493e666b1f7731688888ff694629a619056d1e5e6748f56c4ccb81ebce2fe949a27255e302f94405c6776a1de3f76f916ee43240c998ea4c771faceb9140a923782ab261e63bae33fb3c6d50bda3fb0a61827e295605ad40e528b80ad60744043d6a3f786558d014c1bb65b3c10886081cfaf06e32913e1555762ad33d98fb66a6ee6b329f330870e2a836d8dc4d55d1627e0c2266d125c5d4e49fd495239fc7e72fd4c8db2b6f828019e11860a08ba7b84cb43e8f75fb9bd97a5eead134d93da205ab203ee00bc63e9dc8cf337ed1342a27a9e1767e98e8fa886bc89e7818f5e6919904589008723c991e7c223746d10bb2332443de46782616f749bcb52c6a23702a5d6ef0cce031408423839c10ca6de726c403082f2728dd708313c745108a2897695142314d04b690f7fbf6d90052285646d22d6/35/1920x1080_5288800/index.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 32,
            title: "Run:Time Tv Y Películas",
            videoSources: [
                { resolution: "Auto", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2154&avod=1&coppa=0&is_lat=0&dnt=0&td=6&us_privacy=1YNN&did=81b5bc7b0f91a826f909243ed9cab569&ifa_type=sessionid&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&player_height=720&player_width=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model"},
                { resolution: "360p", url: "https://stream.ads.ottera.tv/cl/250506d0cob02j63qrjpaambig/640x360_1126400_3_f.m3u8"},
                { resolution: "480p", url: "https://stream.ads.ottera.tv/cl/250506d0cob02j63qrjpaambig/854x480_1355200_2_f.m3u8"},
                { resolution: "540p", url: "https://stream.ads.ottera.tv/cl/250506d0cob02j63qrjpaambig/960x540_1927200_1_f.m3u8" },
                { resolution: "720p", url: "https://stream.ads.ottera.tv/cl/250506d0cob02j63qrjpaambig/1280x720_3071200_0_f.m3u8"}
            ],
            subtitleTracks: [
               { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        },
        {
            id: 33,
            title: "Run:Time Vive Kanal D Drama",
            videoSources: [
                { resolution: "Auto", url: "https://raw.githubusercontent.com/www-km/kumaribo/refs/heads/main/Auto/vive_canal_del_drama.m3u8" },
                { resolution: "360p", url: "https://tinyurl.com/26pnvucw" },
                { resolution: "480p", url: "https://tinyurl.com/2yc8rn3l" },
                { resolution: "720p", url: "https://tinyurl.com/26ggcyby" },
                { resolution: "1080p", url: "https://tinyurl.com/2yx3dqnt" }
            ],
            subtitleTracks: [
              
                { 
                    language: "Gestionado/Fuente", 
                    code: "off", 
                    default: true,
                    url: null
                }
            ]
        }
    ];

    // Elementos del DOM
    const videoElement = document.getElementById('video-element');
    const episodeTitle = document.getElementById('episode-title');
    const prevBtn = document.getElementById('prev-btn');
    const playBtn = document.getElementById('play-btn');
    const nextBtn = document.getElementById('next-btn');
    const backwardBtn = document.getElementById('backward-btn');
    const forwardBtn = document.getElementById('forward-btn');
    const episodesBtn = document.getElementById('episodes-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const muteBtn = document.getElementById('mute-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const resolutionSelect = document.getElementById('resolution-select');
    const subtitleSelect = document.getElementById('subtitle-select');
    const episodesModal = document.getElementById('episodes-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const episodeSearch = document.getElementById('episode-search');
    const episodesList = document.getElementById('episodes-list');
    const videoPreloader = document.getElementById('video-preloader');
    const loadingTitle = document.getElementById('loading-title');
    const loadingMessage = document.getElementById('loading-message');
    const connectionSpeed = document.getElementById('connection-speed');
    const bufferedAmount = document.getElementById('buffered-amount');
    const loadingProgress = document.getElementById('loading-progress');
    const qualityOptions = document.getElementById('quality-options');
    const qualitySuggestions = document.getElementById('quality-suggestions');
    const errorMessage = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    const retryBtn = document.getElementById('retry-btn');
    const videoProgress = document.getElementById('video-progress');
    const videoBuffer = document.getElementById('video-buffer');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const seekFeedback = document.getElementById('seek-feedback');

    // Variables de estado
    let currentEpisodeIndex = 0;
    let currentResolution = 'Auto';
    let currentSubtitle = 'off';
    let hls = null;
    let isPlaying = false;
    let isMuted = false;
    let volume = 1;
    let loadingStartTime = null;
    let slowConnectionThreshold = 5000; // 5 segundos
    let checkInterval = null;
    let bufferLength = 0;
    let lastBufferUpdate = 0;
    let networkSpeed = 0;
    let lastBytesLoaded = 0;
    let lastTimeChecked = 0;

    // Inicializar el reproductor
    function init() {
        // Cargar el primer episodio por defecto
        loadEpisode(currentEpisodeIndex);
        
        // Configurar event listeners
        setupEventListeners();
        
        // Configurar volumen inicial
        videoElement.volume = volume;
        
        // Configurar botón de reintento
        retryBtn.addEventListener('click', function() {
            loadEpisode(currentEpisodeIndex);
        });
    }

    // Configurar los event listeners
    function setupEventListeners() {
        // Controles del reproductor
        playBtn.addEventListener('click', togglePlay);
        prevBtn.addEventListener('click', playPreviousEpisode);
        nextBtn.addEventListener('click', playNextEpisode);
        backwardBtn.addEventListener('click', () => seekVideo(-10));
        forwardBtn.addEventListener('click', () => seekVideo(10));
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        episodesBtn.addEventListener('click', openEpisodesModal);
        closeModalBtn.addEventListener('click', closeEpisodesModal);
        muteBtn.addEventListener('click', toggleMute);
        volumeSlider.addEventListener('input', changeVolume);
        
        // Selectores
        resolutionSelect.addEventListener('change', changeResolution);
        subtitleSelect.addEventListener('change', changeSubtitleTrack);
        
        // Buscador de episodios
        episodeSearch.addEventListener('input', searchEpisodes);
        
        // Eventos del video
        videoElement.addEventListener('play', () => {
            isPlaying = true;
            updatePlayButton();
        });
        
        videoElement.addEventListener('pause', () => {
            isPlaying = false;
            updatePlayButton();
        });
        
        videoElement.addEventListener('click', togglePlay);
        videoElement.addEventListener('timeupdate', updateProgressBar);
        videoElement.addEventListener('progress', updateBufferBar);
        videoElement.addEventListener('loadedmetadata', updateDurationDisplay);
        videoElement.addEventListener('waiting', showPreloader);
        videoElement.addEventListener('playing', hidePreloader);
        videoElement.addEventListener('error', handleVideoError);
        
        // Controles de teclado
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    seekVideo(-5);
                    break;
                case 'ArrowRight':
                    seekVideo(5);
                    break;
                case ' ':
                    togglePlay();
                    e.preventDefault();
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
                case 'm':
                    toggleMute();
                    break;
                case 'ArrowUp':
                    changeVolume(0.1);
                    break;
                case 'ArrowDown':
                    changeVolume(-0.1);
                    break;
            }
        });
        
        // Preloader events
        videoPreloader.addEventListener('click', (e) => {
            if (e.target === videoPreloader) {
                hidePreloader();
            }
        });
    }

    // Función para retroceder/adelantar el video
    function seekVideo(seconds) {
        if (!videoElement) return;
        
        const newTime = videoElement.currentTime + seconds;
        videoElement.currentTime = Math.max(0, Math.min(newTime, videoElement.duration));
        
        // Mostrar feedback visual
        showSeekFeedback(seconds > 0 ? '+10s' : '-10s');
    }

    // Mostrar feedback visual al retroceder/adelantar
    function showSeekFeedback(text) {
        seekFeedback.textContent = text;
        seekFeedback.classList.add('show');
        
        setTimeout(() => {
            seekFeedback.classList.remove('show');
        }, 1000);
    }

    // Cargar un episodio
    function loadEpisode(index) {
        if (index < 0 || index >= episodes.length) return;
        
        currentEpisodeIndex = index;
        const episode = episodes[currentEpisodeIndex];
        
        // Actualizar la información del episodio
        episodeTitle.textContent = episode.title;
        
        // Detener y limpiar cualquier instancia HLS anterior
        if (hls) {
            hls.destroy();
        }
        
        // Encontrar la resolución predeterminada (360p)
        const defaultResolution = episode.videoSources.find(src => src.resolution === 'auto') || episode.videoSources[0];
        currentResolution = defaultResolution.resolution;
        
        // Encontrar los subtítulos predeterminados (Inglés)
        const defaultSubtitle = episode.subtitleTracks.find(sub => sub.default) || episode.subtitleTracks[0];
        currentSubtitle = defaultSubtitle.code;
        
        // Configurar los selectores
        setupResolutionSelector(episode.videoSources);
        setupSubtitleSelector(episode.subtitleTracks);
        
        // Mostrar preloader
        showPreloader('Cargando episodio...');
        
        // Cargar el video
        loadHlsVideo(defaultResolution.url);
        
        // Cargar subtítulos
        loadSubtitles();
        
        // Actualizar los botones de navegación
        updateNavigationButtons();
    }

    // Cargar subtítulos
    function loadSubtitles() {
        const episode = episodes[currentEpisodeIndex];
        const subtitleTrack = episode.subtitleTracks.find(sub => sub.code === currentSubtitle);
        
        // Limpiar subtítulos existentes
        const existingTracks = videoElement.querySelectorAll('track');
        existingTracks.forEach(t => t.remove());
        
        if (currentSubtitle !== 'off' && subtitleTrack && subtitleTrack.url) {
            const track = document.createElement('track');
            track.kind = 'subtitles';
            track.label = subtitleTrack.language;
            track.srclang = subtitleTrack.code;
            track.src = subtitleTrack.url;
            track.default = subtitleTrack.default;
            
            videoElement.appendChild(track);
            
            track.addEventListener('load', () => {
                track.mode = 'showing';
                console.log(`Subtítulos en ${subtitleTrack.language} cargados`);
            });
            
            track.addEventListener('error', () => {
                console.error(`Error al cargar subtítulos en ${subtitleTrack.language}`);
                showError(`Error al cargar subtítulos en ${subtitleTrack.language}`);
            });
        }
    }

    // Cargar video HLS
    function loadHlsVideo(url) {
        loadingStartTime = Date.now();
        lastBytesLoaded = 0;
        lastTimeChecked = Date.now();
        networkSpeed = 0;
        
        if (Hls.isSupported()) {
            hls = new Hls({
                maxMaxBufferLength: 30,
                maxBufferSize: 6000000,
                maxBufferLength: 30,
                lowLatencyMode: false,
                enableWorker: true,
                startLevel: -1, // Auto quality
                abrEwmaDefaultEstimate: 500000, // 500kbps initial estimate
                abrBandWidthFactor: 0.95,
                abrBandWidthUpFactor: 0.7,
                abrMaxWithRealBitrate: true
            });
            
            hls.loadSource(url);
            hls.attachMedia(videoElement);
            
            hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
                updateLoadingMessage('Preparando transmisión...');
                updateLoadingProgress(30);
                
                // Guardar las opciones de calidad disponibles
                const availableQualities = data.levels.map(level => level.height + 'p');
                window.videoQualityOptions = availableQualities;
                
                // Verificar si la calidad actual está disponible
                const currentQuality = currentResolution.replace('p', '');
                const level = data.levels.findIndex(l => l.height === parseInt(currentQuality));
                
                if (level !== -1) {
                    hls.currentLevel = level;
                }
            });
            
            hls.on(Hls.Events.FRAG_LOADING, function(event, data) {
                const now = Date.now();
                if (now - lastTimeChecked >= 1000) { // Actualizar cada segundo
                    const bytesLoaded = data.stats.loaded;
                    const timeDelta = (now - lastTimeChecked) / 1000; // en segundos
                    const bytesDelta = bytesLoaded - lastBytesLoaded;
                    
                    if (timeDelta > 0) {
                        networkSpeed = (bytesDelta * 8) / (timeDelta * 1000000); // Mbps
                        updateNetworkStats();
                    }
                    
                    lastBytesLoaded = bytesLoaded;
                    lastTimeChecked = now;
                }
            });
            
            hls.on(Hls.Events.FRAG_BUFFERED, function(event, data) {
                bufferLength = videoElement.buffered.length ? 
                    videoElement.buffered.end(0) - videoElement.currentTime : 0;
                
                updateBufferStats();
                
                const progress = Math.min(30 + (bufferLength / 10) * 70, 95);
                updateLoadingProgress(progress);
                
                // Mostrar sugerencia de calidad si la conexión es lenta
                if (bufferLength < 5 && networkSpeed < 1.5) {
                    showQualitySuggestions();
                }
            });
            
            hls.on(Hls.Events.LEVEL_LOADED, function(event, data) {
                const level = hls.levels[data.level];
                const resolution = level.height + 'p';
                updateLoadingMessage(`Cargando ${resolution}...`);
            });
            
            hls.on(Hls.Events.ERROR, function(event, data) {
                console.error('HLS Error:', data);
                if (data.fatal) {
                    switch(data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            showError('Error de red. Verifica tu conexión.');
                            hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            showError('Error de formato de video.');
                            hls.recoverMediaError();
                            break;
                        default:
                            showError('Error al cargar el video.');
                            break;
                    }
                }
            });
            
            videoElement.play()
                .then(() => {
                    updateLoadingProgress(100);
                    setTimeout(hidePreloader, 500);
                    isPlaying = true;
                    updatePlayButton();
                })
                .catch(e => {
                    console.log('Autoplay prevented:', e);
                    hidePreloader();
                });
        } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            // Soporte nativo para Safari
            videoElement.src = url;
            let progress = 10;
            const progressInterval = setInterval(() => {
                progress += 5;
                updateLoadingProgress(progress);
                if (progress >= 90) clearInterval(progressInterval);
            }, 300);
            
            videoElement.addEventListener('loadedmetadata', function() {
                updateLoadingProgress(100);
                setTimeout(hidePreloader, 500);
                videoElement.play()
                    .then(() => {
                        isPlaying = true;
                        updatePlayButton();
                    })
                    .catch(e => console.log('Autoplay prevented:', e));
            });
        } else {
            showError('Tu navegador no soporta la reproducción de videos HLS.');
        }
    }

    // Configurar el selector de resoluciones
    function setupResolutionSelector(sources) {
        resolutionSelect.innerHTML = '';
        
        sources.forEach(source => {
            const option = document.createElement('option');
            option.value = source.resolution;
            option.textContent = source.resolution;
            option.selected = source.resolution === currentResolution;
            resolutionSelect.appendChild(option);
        });
    }

    // Configurar el selector de subtítulos
    function setupSubtitleSelector(tracks) {
        subtitleSelect.innerHTML = '';
        
        tracks.forEach(track => {
            const option = document.createElement('option');
            option.value = track.code;
            option.textContent = track.language;
            option.selected = track.code === currentSubtitle;
            subtitleSelect.appendChild(option);
        });
    }

    // Cambiar resolución
    function changeResolution() {
        const selectedResolution = resolutionSelect.value;
        if (!selectedResolution || selectedResolution === currentResolution) return;
        
        currentResolution = selectedResolution;
        const episode = episodes[currentEpisodeIndex];
        const newSource = episode.videoSources.find(src => src.resolution === selectedResolution);
        
        if (newSource) {
            showPreloader(`Cambiando a ${selectedResolution}...`);
            loadHlsVideo(newSource.url);
        }
    }

    // Cambiar subtítulos
    function changeSubtitleTrack() {
        const selectedSubtitle = subtitleSelect.value;
        if (!selectedSubtitle || selectedSubtitle === currentSubtitle) return;
        
        currentSubtitle = selectedSubtitle;
        loadSubtitles();
    }

    // Alternar reproducción
    function togglePlay() {
        if (videoElement.paused) {
            videoElement.play()
                .then(() => {
                    isPlaying = true;
                    updatePlayButton();
                })
                .catch(e => {
                    console.log('Error al reproducir:', e);
                    showError('Error al iniciar la reproducción');
                });
        } else {
            videoElement.pause();
            isPlaying = false;
            updatePlayButton();
        }
    }

    // Actualizar el botón de play/pause
    function updatePlayButton() {
        const playIcon = playBtn.querySelector('#play-icon');
        if (isPlaying) {
            playIcon.setAttribute('d', 'M6 19h4V5H6v14zm8-14v14h4V5h-4z');
            playBtn.title = "Pausar";
        } else {
            playIcon.setAttribute('d', 'M8 5v14l11-7z');
            playBtn.title = "Reproducir";
        }
    }

    // Alternar silencio
    function toggleMute() {
        isMuted = !isMuted;
        videoElement.muted = isMuted;
        updateMuteButton();
    }

    // Actualizar botón de silencio
    function updateMuteButton() {
        const volumeIcon = muteBtn.querySelector('#volume-icon');
        if (isMuted || volume === 0) {
            volumeIcon.setAttribute('d', 'M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z');
        } else if (volume < 0.5) {
            volumeIcon.setAttribute('d', 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z');
        } else {
            volumeIcon.setAttribute('d', 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z');
        }
    }

    // Cambiar volumen
    function changeVolume(change) {
        if (typeof change === 'object') {
            // Evento de input del slider
            volume = parseFloat(volumeSlider.value);
        } else {
            // Cambio por teclado
            volume = Math.max(0, Math.min(1, volume + change));
            volumeSlider.value = volume;
        }
        
        videoElement.volume = volume;
        videoElement.muted = false;
        isMuted = false;
        updateMuteButton();
    }

    // Reproducir episodio anterior
    function playPreviousEpisode() {
        if (currentEpisodeIndex > 0) {
            loadEpisode(currentEpisodeIndex - 1);
        }
    }

    // Reproducir siguiente episodio
    function playNextEpisode() {
        if (currentEpisodeIndex < episodes.length - 1) {
            loadEpisode(currentEpisodeIndex + 1);
        }
    }

    // Actualizar botones de navegación
    function updateNavigationButtons() {
        prevBtn.disabled = currentEpisodeIndex <= 0;
        nextBtn.disabled = currentEpisodeIndex >= episodes.length - 1;
    }

    // Alternar pantalla completa
    function toggleFullscreen() {
    if (!document.fullscreenElement) {
        // Solicitar pantalla completa para el contenedor del video
        document.querySelector('.video-wrapper').requestFullscreen().catch(err => {
            console.log(`Error al intentar pantalla completa: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

    // Actualizar barra de progreso
    function updateProgressBar() {
        if (!videoElement.duration) return;
        
        const percent = (videoElement.currentTime / videoElement.duration) * 100;
        videoProgress.style.width = `${percent}%`;
        
        // Actualizar tiempo actual
        currentTimeDisplay.textContent = formatTime(videoElement.currentTime);
    }

    // Actualizar barra de buffer
    function updateBufferBar() {
        if (!videoElement.buffered.length) return;
        
        const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
        const percent = (bufferedEnd / videoElement.duration) * 100;
        videoBuffer.style.width = `${percent}%`;
    }

    // Actualizar duración del video
    function updateDurationDisplay() {
        durationDisplay.textContent = formatTime(videoElement.duration);
    }

    // Formatear tiempo (segundos a MM:SS)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Abrir modal de episodios
    function openEpisodesModal() {
        renderEpisodesList();
        episodesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Cerrar modal de episodios
    function closeEpisodesModal() {
        episodesModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Renderizar lista de episodios
    function renderEpisodesList() {
        episodesList.innerHTML = '';
        
        episodes.forEach((episode, index) => {
            const episodeItem = document.createElement('div');
            episodeItem.className = `episode-item ${index === currentEpisodeIndex ? 'active' : ''}`;
            episodeItem.innerHTML = `
                <div>
                    <span class="episode-number">Ep. ${index + 1}</span>
                    ${episode.title}
                </div>
                <i class="fas fa-play"></i>
            `;
            
            episodeItem.addEventListener('click', () => {
                loadEpisode(index);
                closeEpisodesModal();
            });
            
            episodesList.appendChild(episodeItem);
        });
    }

    // Buscar episodios
    function searchEpisodes() {
        const searchTerm = episodeSearch.value.toLowerCase();
        const episodeItems = episodesList.querySelectorAll('.episode-item');
        
        episodeItems.forEach((item, index) => {
            const episode = episodes[index];
            const matches = episode.title.toLowerCase().includes(searchTerm);
            item.style.display = matches ? 'flex' : 'none';
        });
    }

    // Mostrar preloader
    function showPreloader(message = 'Cargando...') {
        videoPreloader.classList.add('active');
        updateLoadingMessage(message);
        updateLoadingProgress(0);
        hideError();
        hideQualitySuggestions();
        
        // Comenzar a verificar por conexión lenta
        loadingStartTime = Date.now();
        if (checkInterval) clearInterval(checkInterval);
        checkInterval = setInterval(checkForSlowConnection, 1000);
    }

    // Ocultar preloader
    function hidePreloader() {
        videoPreloader.classList.remove('active');
        if (checkInterval) clearInterval(checkInterval);
    }

    // Actualizar mensaje de carga
    function updateLoadingMessage(message) {
        loadingMessage.textContent = message;
    }

    // Actualizar progreso de carga
    function updateLoadingProgress(percent) {
        loadingProgress.style.width = `${percent}%`;
    }

    // Actualizar estadísticas de red
    function updateNetworkStats() {
        connectionSpeed.textContent = `${networkSpeed.toFixed(2)} Mbps`;
    }

    // Actualizar estadísticas de buffer
    function updateBufferStats() {
        bufferedAmount.textContent = `${bufferLength.toFixed(1)} seg`;
    }

    // Verificar por conexión lenta
    function checkForSlowConnection() {
        const loadingTime = Date.now() - loadingStartTime;
        
        if (loadingTime > slowConnectionThreshold) {
            showQualitySuggestions();
            clearInterval(checkInterval);
        }
    }

    // Mostrar sugerencias de calidad
    function showQualitySuggestions() {
        if (!window.videoQualityOptions || window.videoQualityOptions.length < 2) return;
        
        qualitySuggestions.style.display = 'block';
        renderQualityOptions(window.videoQualityOptions);
    }

    // Ocultar sugerencias de calidad
    function hideQualitySuggestions() {
        qualitySuggestions.style.display = 'none';
    }

    // Renderizar opciones de calidad
    function renderQualityOptions(qualities) {
        qualityOptions.innerHTML = '';
        
        qualities.forEach(quality => {
            if (quality === currentResolution) return;
            
            const option = document.createElement('div');
            option.className = 'quality-option';
            option.textContent = quality;
            option.addEventListener('click', () => {
                resolutionSelect.value = quality;
                changeResolution();
                hideQualitySuggestions();
            });
            qualityOptions.appendChild(option);
        });
    }

    // Mostrar error
    function showError(message) {
        errorText.textContent = message;
        errorMessage.style.display = 'block';
        loadingMessage.style.display = 'none';
    }

    // Ocultar error
    function hideError() {
        errorMessage.style.display = 'none';
        loadingMessage.style.display = 'block';
    }

    // Manejar errores de video
    function handleVideoError() {
        let errorMessage = 'Error desconocido';
        switch(videoElement.error.code) {
            case 1:
                errorMessage = 'Video cancelado';
                break;
            case 2:
                errorMessage = 'Error de red';
                break;
            case 3:
                errorMessage = 'Error al decodificar video';
                break;
            case 4:
                errorMessage = 'Video no soportado';
                break;
        }
        showError(errorMessage);
    }

    // Inicializar la aplicación
    init();
});

/*! v0aa6be78 | (c) AdMatic Medya A.S. | Last rv: 15.12.2022, 07:41 */
if (window.top !== window.self) {
    let script = document.createElement('script');
    script.src = document.querySelector('script[src*="showad.js"]').src;
    let ins_all = document.querySelectorAll('ins');
    let wrap = document.createElement('div');
    wrap.style.display = 'none';
    wrap.appendChild(script);
    ins_all.forEach(ins => {
        wrap.appendChild(ins);
    });
    parent.document.body.appendChild(wrap);
} else {
    if (!window.adm_loaded) {
        window.adm_loaded = !0;
        (function() {
            var ea = Object.defineProperty;
            var G = Object.getOwnPropertySymbols;
            var da = Object.prototype.hasOwnProperty,
                ca = Object.prototype.propertyIsEnumerable;
            var O = (D, I, e) => I in D ? ea(D, I, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e
                }) : D[I] = e,
                aa = (D, I) => {
                    for (var e in I || (I = {})) da.call(I, e) && O(D, e, I[e]);
                    if (G)
                        for (var e of G(I)) ca.call(I, e) && O(D, e, I[e]);
                    return D
                };
            var z = (D, I, e) => (O(D, typeof I != "symbol" ? I + "" : I, e), e);
            var U = (D, I, e) => new Promise((t, T) => {
                var a = R => {
                        try {
                            P(e.next(R))
                        } catch (k) {
                            T(k)
                        }
                    },
                    S = R => {
                        try {
                            P(e.throw(R))
                        } catch (k) {
                            T(k)
                        }
                    },
                    P = R => R.done ? t(R.value) : Promise.resolve(R.value).then(a, S);
                P((e = e.apply(D, I)).next())
            });
            (function(D, I) {
                const e = "1.0.6";
                D.SET_ADM_CONFIG = function(a, S) {
                    var R;
                    if (!a.imp || !a.imp.length) {
                        S({});
                        return
                    }
                    a.BADV = a.blacklist || [], a.BID = [];
                    for (const k of a.imp) {
                        let _ = {
                            ID: k.id,
                            TYPE: k.type || null,
                            AD_SLOT_ID: k.ad_slot_id || null,
                            CAMPAIGN_ID: k.campaign_id || null,
                            ELEMENT_ID: k.element_id || null,
                            BIDDERS: k.bidders || [],
                            FLOOR: k.floor,
                            SIZE: []
                        };
                        k.size.forEach((B, A) => {
                            _.SIZE.push([B.w, B.h])
                        }), a.BID.push(_)
                    }
                    a.imp.length && (a.REQUEST_ID = a.imp[0].request_id || a.imp[0].id), a != null && a.amp ? (a.refName = window.context.location.host.replace("portal.","www.", ""), a.site = window.context.location.origin) : (a.refName = window.location.host.replace("portal.","www.", ""), a.site = window.location.origin), a.ISRENDER = !1, a.TIMEOUT = 1e3, a.CRITEO = [{
                        t: "m9",
                        s: [{
                            id: 1510815,
                            f: "320x480"
                        }, {
                            id: 1684939,
                            f: "336x280"
                        }, {
                            id: 1510823,
                            f: "300x250"
                        }, {
                            id: 1686809,
                            f: "250x250"
                        }]
                    }, {
                        t: "d9",
                        s: [{
                            id: 1510818,
                            f: "800x600"
                        }, {
                            id: 1455821,
                            f: "800x600"
                        }, {
                            id: 1686803,
                            f: "800x600"
                        }]
                    }, {
                        t: "m10",
                        s: [{
                            id: 1510814,
                            f: "320x100"
                        }, {
                            id: 1686835,
                            f: "320x100"
                        }, {
                            id: 1510822,
                            f: "300x100"
                        }, {
                            id: 1686836,
                            f: "320x50"
                        }, {
                            id: 1455044,
                            f: "300x50"
                        }]
                    }, {
                        t: "d10",
                        s: [{
                            id: 1510813,
                            f: "336x280"
                        }, {
                            id: 1684939,
                            f: "336x280"
                        }, {
                            id: 1510821,
                            f: "300x250"
                        }, {
                            id: 1686837,
                            f: "250x250"
                        }]
                    }, {
                        t: "m12",
                        s: [{
                            id: 1511128,
                            f: "320x100"
                        }, {
                            id: 1686835,
                            f: "320x100"
                        }, {
                            id: 1511129,
                            f: "300x100"
                        }, {
                            id: 1686836,
                            f: "320x50"
                        }, {
                            id: 1455044,
                            f: "300x50"
                        }]
                    }, {
                        t: "d12",
                        s: [{
                            id: 1510820,
                            f: "970x250"
                        }, {
                            id: 1510827,
                            f: "970x90"
                        }, {
                            id: 1686805,
                            f: "728x90"
                        }]
                    }, {
                        t: "m13",
                        s: [{
                            id: 1686835,
                            f: "320x100"
                        }, {
                            id: 1684935,
                            f: "300x100"
                        }, {
                            id: 1686836,
                            f: "320x50"
                        }, {
                            id: 1455044,
                            f: "300x50"
                        }]
                    }, {
                        t: "d13",
                        s: [{
                            id: 1684936,
                            f: "970x90"
                        }, {
                            id: 1686805,
                            f: "728x90"
                        }]
                    }, {
                        t: "m14",
                        s: [{
                            id: 1510817,
                            f: "320x480"
                        }, {
                            id: 1684939,
                            f: "336x280"
                        }, {
                            id: 1510825,
                            f: "300x250"
                        }, {
                            id: 1686837,
                            f: "250x250"
                        }]
                    }, {
                        t: "d14",
                        s: [{
                            id: 1510816,
                            f: "320x480"
                        }, {
                            id: 1510824,
                            f: "336x280"
                        }, {
                            id: 1684938,
                            f: "300x250"
                        }, {
                            id: 1686837,
                            f: "250x250"
                        }]
                    }], a.RUBICON = {
                        "sozcu.com.tr": {
                            accountId: 25100,
                            siteId: 458872,
                            zoneId: 2690548
                        },
                        "sondakika.com": {
                            accountId: 25100,
                            siteId: 458868,
                            zoneId: 2690544
                        },
                        "haberler.com": {
                            accountId: 25100,
                            siteId: 458866,
                            zoneId: 2690542
                        },
                        "yenicaggazetesi.com.tr": {
                            accountId: 25100,
                            siteId: 458880,
                            zoneId: 2690546
                        },
                        "memurlar.net": {
                            accountId: 25100,
                            siteId: 458874,
                            zoneId: 2690552
                        },
                        "ntv.com.tr": {
                            accountId: 25100,
                            siteId: 458906,
                            zoneId: 2690562
                        },
                        "ntvspor.net": {
                            accountId: 25100,
                            siteId: 458908,
                            zoneId: 2690560
                        },
                        "mynet.com": {
                            accountId: 25100,
                            siteId: 458882,
                            zoneId: 2690554
                        },
                        "sporx.com": {
                            accountId: 25100,
                            siteId: 458886,
                            zoneId: 2690556
                        },
                        "odatv4.com": {
                            accountId: 25100,
                            siteId: 458884,
                            zoneId: 2690558
                        },
                        all: {
                            accountId: 25100,
                            siteId: 458252,
                            zoneId: 2685414
                        }
                    }, a.STROOER = [{
                        w: "4resim1kelime.com",
                        a: {
                            d10: "6b0a199a-e662-4a0e-9617-6f89e947662b",
                            t11: "22c1cf40-2d82-4c4c-9cf6-6d8a3f2b50c8",
                            d12: "3095c942-9ba7-4563-8757-f1d584500348",
                            m9: "b34ad7ab-e71c-4f7a-a00e-33e066cfde87",
                            t14: "a1c64d5e-8f4d-4e3f-b82d-61d411b222c3",
                            m12: "27bcab2d-6abb-4654-b8cd-8bb2c4179abb",
                            m10: "934ddbf1-ed57-4161-923f-4ef53e392d3b",
                            d9: "35bdbb56-4cdc-4e15-9176-97f2504eb9b7",
                            t13: "06b782cc-091b-4f53-9cd2-0291679aa1ac"
                        }
                    }, {
                        w: "a24.com.tr",
                        a: {
                            d10: "77ecd217-b477-49e0-bdb2-718343847785",
                            t11: "def1ffce-12df-4703-96b1-c8247bdd19c8",
                            d12: "0bae3041-aa6d-4ab2-8547-15e572b724bc",
                            m9: "aea98758-2e50-423e-9932-8fc0b2a008ed",
                            t14: "da3db3a4-0d38-43a3-98df-a32a7def2a76",
                            m12: "b0aca032-b205-4729-a619-0d73277ac6d5",
                            m10: "feae502f-0815-4b86-961f-cf4717af2964",
                            d9: "7d1ba959-5d69-4cce-baa2-ca38518cf466",
                            t13: "06b782cc-091b-4f53-9cd2-0291679aa1ac"
                        }
                    }, {
                        w: "yurtspor.com",
                        a: {
                            d10: "1d94fe40-abd6-41e9-bfe1-7a984492deae",
                            t11: "471519d7-3bc0-4aaa-860c-fb218cfa69dd",
                            d12: "a25019be-e801-4b85-bb6b-ef438150285c",
                            m9: "bc45eaee-785d-4afd-a6db-08ba09ddcf5a",
                            t14: "9f8a57dd-e3b8-4ddd-b7a8-045872716a0e",
                            m12: "91efd4c2-2e55-4cb7-ae1e-982c61dc4b5f",
                            m10: "d3bc66bd-ac42-44bf-b82f-1099c6dd0e33",
                            d9: "96c6b97a-ccc2-4e00-a203-6612a32a73f0",
                            t13: "06b782cc-091b-4f53-9cd2-0291679aa1ac"
                        }
                    }, {
                        w: "all",
                        a: {
                            d10: "dc2e4e46-3d99-4285-acf4-e5461c730042",
                            t11: "a068557d-dd87-4fa5-b819-5cdedd3f8984",
                            d12: "2fc8cc89-6706-4071-90dc-0d6e7e20e37b",
                            m9: "cbc20e72-03e8-42da-91a6-388ddad621a0",
                            t14: "5399d49d-41f9-4c19-bfc8-f2c35aeb0a1d",
                            m12: "c136b03d-3f09-473c-9d58-555e060c604e",
                            m10: "71a32bfe-f7a1-42c4-a24b-9e31bf4e4e11",
                            d9: "08e62ded-f51f-48f7-b2e8-84a8447ffba4",
                            t13: "06b782cc-091b-4f53-9cd2-0291679aa1ac"
                        }
                    }], a.ADFORM = [{
                        w: "all",
                        a: {
                            b160x600: 490502,
                            b250x250: 613621,
                            b300x250: 490905,
                            b300x600: 613618,
                            b320x100: 585890,
                            b320x480: 585888,
                            b336x280: 613617,
                            b728x90: 613620,
                            b970x250: 585889,
                            b300x100: 622671,
                            b300x50: 622672,
                            b320x50: 622673,
                            b800x600: 585356
                        }
                    }, {
                        w: "ahaber.com.tr",
                        a: {
                            b160x600: 618016,
                            b250x250: 618015,
                            b300x250: 618014,
                            b300x600: 618013,
                            b320x100: 618019,
                            b320x480: 618018,
                            b336x280: 618012,
                            b728x90: 618011,
                            b970x250: 618017,
                            b300x100: 622714,
                            b300x50: 622715,
                            b320x50: 622716,
                            b800x600: 750171
                        }
                    }, {
                        w: "aksam.com.tr",
                        a: {
                            b160x600: 618025,
                            b250x250: 618024,
                            b300x250: 618023,
                            b300x600: 618022,
                            b320x100: 618028,
                            b320x480: 618027,
                            b336x280: 618021,
                            b728x90: 618020,
                            b970x250: 618026,
                            b300x100: 622717,
                            b300x50: 622718,
                            b320x50: 622719,
                            b800x600: 750172
                        }
                    }, {
                        w: "aspor.com.tr",
                        a: {
                            b160x600: 618034,
                            b250x250: 618033,
                            b300x250: 618032,
                            b300x600: 618031,
                            b320x100: 618037,
                            b320x480: 618036,
                            b336x280: 618030,
                            b728x90: 618029,
                            b970x250: 618035,
                            b300x100: 622720,
                            b300x50: 622721,
                            b320x50: 622722,
                            b800x600: 750173
                        }
                    }, {
                        w: "cnnturk.com",
                        a: {
                            b160x600: 618043,
                            b250x250: 618042,
                            b300x250: 618041,
                            b300x600: 618040,
                            b320x100: 618046,
                            b320x480: 618045,
                            b336x280: 618039,
                            b728x90: 618038,
                            b970x250: 618044,
                            b300x100: 622723,
                            b300x50: 622724,
                            b320x50: 622725,
                            b800x600: 750174
                        }
                    }, {
                        w: "donanimhaber.com",
                        a: {
                            b160x600: 618052,
                            b250x250: 618051,
                            b300x250: 618050,
                            b300x600: 618049,
                            b320x100: 618055,
                            b320x480: 618054,
                            b336x280: 618048,
                            b728x90: 618047,
                            b970x250: 618053,
                            b300x100: 622726,
                            b300x50: 622727,
                            b320x50: 622728,
                            b800x600: 750175
                        }
                    }, {
                        w: "fanatik.com.tr",
                        a: {
                            b160x600: 618061,
                            b250x250: 618060,
                            b300x250: 618059,
                            b300x600: 618058,
                            b320x100: 618064,
                            b320x480: 618063,
                            b336x280: 618057,
                            b728x90: 618056,
                            b970x250: 618062,
                            b300x100: 622729,
                            b300x50: 622730,
                            b320x50: 622731,
                            b800x600: 750176
                        }
                    }, {
                        w: "fotomac.com.tr",
                        a: {
                            b160x600: 618070,
                            b250x250: 618069,
                            b300x250: 618068,
                            b300x600: 618067,
                            b320x100: 618073,
                            b320x480: 618072,
                            b336x280: 618066,
                            b728x90: 618065,
                            b970x250: 618071,
                            b300x100: 622732,
                            b300x50: 622733,
                            b320x50: 622734,
                            b800x600: 750177
                        }
                    }, {
                        w: "gazetevatan.com",
                        a: {
                            b160x600: 618079,
                            b250x250: 618078,
                            b300x250: 618077,
                            b300x600: 618076,
                            b320x100: 618082,
                            b320x480: 618081,
                            b336x280: 618075,
                            b728x90: 618074,
                            b970x250: 618080,
                            b300x100: 622735,
                            b300x50: 622736,
                            b320x50: 622737,
                            b800x600: 750178
                        }
                    }, {
                        w: "haberler.com",
                        a: {
                            b160x600: 618088,
                            b250x250: 618087,
                            b300x250: 618086,
                            b300x600: 618085,
                            b320x100: 618091,
                            b320x480: 618090,
                            b336x280: 618084,
                            b728x90: 618083,
                            b970x250: 618089,
                            b300x100: 622738,
                            b300x50: 622739,
                            b320x50: 622740,
                            b800x600: 750179
                        }
                    }, {
                        w: "hurriyet.com.tr",
                        a: {
                            b160x600: 618098,
                            b250x250: 618097,
                            b300x250: 618096,
                            b300x600: 618095,
                            b320x100: 618101,
                            b320x480: 618100,
                            b336x280: 618094,
                            b728x90: 618093,
                            b970x250: 618099,
                            b300x100: 622741,
                            b300x50: 622742,
                            b320x50: 622743,
                            b800x600: 750180
                        }
                    }, {
                        w: "internethaber.com",
                        a: {
                            b160x600: 618116,
                            b250x250: 618115,
                            b300x250: 618114,
                            b300x600: 618113,
                            b320x100: 618119,
                            b320x480: 618118,
                            b336x280: 618112,
                            b728x90: 618111,
                            b970x250: 618117,
                            b300x100: 622744,
                            b300x50: 622745,
                            b320x50: 622746,
                            b800x600: 750181
                        }
                    }, {
                        w: "kanald.com.tr",
                        a: {
                            b160x600: 618125,
                            b250x250: 618124,
                            b300x250: 618123,
                            b300x600: 618122,
                            b320x100: 618128,
                            b320x480: 618127,
                            b336x280: 618121,
                            b728x90: 618120,
                            b970x250: 618126,
                            b300x100: 622747,
                            b300x50: 622748,
                            b320x50: 622749,
                            b800x600: 750182
                        }
                    }, {
                        w: "mackolik.com",
                        a: {
                            b160x600: 618134,
                            b250x250: 618133,
                            b300x250: 618132,
                            b300x600: 618131,
                            b320x100: 618137,
                            b320x480: 618136,
                            b336x280: 618130,
                            b728x90: 618129,
                            b970x250: 618135,
                            b300x100: 622750,
                            b300x50: 622751,
                            b320x50: 622752,
                            b800x600: 750183
                        }
                    }, {
                        w: "memurlar.net",
                        a: {
                            b160x600: 618143,
                            b250x250: 618142,
                            b300x250: 618141,
                            b300x600: 618140,
                            b320x100: 618146,
                            b320x480: 618145,
                            b336x280: 618139,
                            b728x90: 618138,
                            b970x250: 618144,
                            b300x100: 622753,
                            b300x50: 622754,
                            b320x50: 622755,
                            b800x600: 750185
                        }
                    }, {
                        w: "milliyet.com.tr",
                        a: {
                            b160x600: 618152,
                            b250x250: 618151,
                            b300x250: 618150,
                            b300x600: 618149,
                            b320x100: 618155,
                            b320x480: 618154,
                            b336x280: 618148,
                            b728x90: 618147,
                            b970x250: 618153,
                            b300x100: 622756,
                            b300x50: 622757,
                            b320x50: 622758,
                            b800x600: 750186
                        }
                    }, {
                        w: "mynet.com",
                        a: {
                            b160x600: 618161,
                            b250x250: 618160,
                            b300x250: 618159,
                            b300x600: 618158,
                            b320x100: 618164,
                            b320x480: 618163,
                            b336x280: 618157,
                            b728x90: 618156,
                            b970x250: 618162,
                            b300x100: 622759,
                            b300x50: 622760,
                            b320x50: 622761,
                            b800x600: 750187
                        }
                    }, {
                        w: "ntv.com.tr",
                        a: {
                            b160x600: 618170,
                            b250x250: 618169,
                            b300x250: 618168,
                            b300x600: 618167,
                            b320x100: 618173,
                            b320x480: 618172,
                            b336x280: 618166,
                            b728x90: 618165,
                            b970x250: 618171,
                            b300x100: 622762,
                            b300x50: 622763,
                            b320x50: 622764,
                            b800x600: 750188
                        }
                    }, {
                        w: "posta.com.tr",
                        a: {
                            b160x600: 618179,
                            b250x250: 618178,
                            b300x250: 618177,
                            b300x600: 618176,
                            b320x100: 618182,
                            b320x480: 618181,
                            b336x280: 618175,
                            b728x90: 618174,
                            b970x250: 618180,
                            b300x100: 622766,
                            b300x50: 622767,
                            b320x50: 622768,
                            b800x600: 750189
                        }
                    }, {
                        w: "sabah.com.tr",
                        a: {
                            b160x600: 618197,
                            b250x250: 618196,
                            b300x250: 618195,
                            b300x600: 618194,
                            b320x100: 618200,
                            b320x480: 618199,
                            b336x280: 618193,
                            b728x90: 618192,
                            b970x250: 618198,
                            b300x100: 622769,
                            b300x50: 622770,
                            b320x50: 622771,
                            b800x600: 750190
                        }
                    }, {
                        w: "sondakika.com",
                        a: {
                            b160x600: 618206,
                            b250x250: 618205,
                            b300x250: 618204,
                            b300x600: 618203,
                            b320x100: 618209,
                            b320x480: 618208,
                            b336x280: 618202,
                            b728x90: 618201,
                            b970x250: 618207,
                            b300x100: 622772,
                            b300x50: 622773,
                            b320x50: 622774,
                            b800x600: 750192
                        }
                    }, {
                        w: "sporx.com",
                        a: {
                            b160x600: 618215,
                            b250x250: 618214,
                            b300x250: 618213,
                            b300x600: 618212,
                            b320x100: 618218,
                            b320x480: 618217,
                            b336x280: 618211,
                            b728x90: 618210,
                            b970x250: 618216,
                            b300x100: 622775,
                            b300x50: 622776,
                            b320x50: 622777,
                            b800x600: 750193
                        }
                    }, {
                        w: "star.com.tr",
                        a: {
                            b160x600: 618224,
                            b250x250: 618223,
                            b300x250: 618222,
                            b300x600: 618221,
                            b320x100: 618227,
                            b320x480: 618226,
                            b336x280: 618220,
                            b728x90: 618219,
                            b970x250: 618225,
                            b300x100: 622778,
                            b300x50: 622779,
                            b320x50: 622780,
                            b800x600: 750195
                        }
                    }, {
                        w: "startv.com.tr",
                        a: {
                            b160x600: 618233,
                            b250x250: 618232,
                            b300x250: 618231,
                            b300x600: 618230,
                            b320x100: 618236,
                            b320x480: 618235,
                            b336x280: 618229,
                            b728x90: 618228,
                            b970x250: 618234,
                            b300x100: 622781,
                            b300x50: 622782,
                            b320x50: 622783,
                            b800x600: 750196
                        }
                    }, {
                        w: "takvim.com.tr",
                        a: {
                            b160x600: 618242,
                            b250x250: 618241,
                            b300x250: 618240,
                            b300x600: 618239,
                            b320x100: 618245,
                            b320x480: 618244,
                            b336x280: 618238,
                            b728x90: 618237,
                            b970x250: 618243,
                            b300x100: 622784,
                            b300x50: 622785,
                            b320x50: 622786,
                            b800x600: 750197
                        }
                    }], a.loadPrebidJS = function() {
                        a.pbjs = window.adm_pbjs || {}, a.pbjs.que = window.adm_pbjs.que || [], a.DEVICETYPE = a.deviceTypes(), a.createPrebid()
                    }, a.isBlockedAd = function(k) {
                        var _;
                        for (const B in a.BADV)
                            if (((_ = k == null ? void 0 : k.advertiserDomains) == null ? void 0 : _[0]) == a.BADV[B]) return !0;
                        return !1
                    }, a.deviceTypes = function() {
                        const k = navigator.userAgent;
                        return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(k) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(k) ? "mobile" : "desktop"
                    }, a.getCustomBidFloor = function(k) {
                        let _ = {};
                        return k.FLOOR ? k.SIZE.forEach(B => {
                            _[`banner|${B[0]}x${B[1]}`] = k.FLOOR, _[`video|${B[0]}x${B[1]}`] = k.FLOOR
                        }) : _ = a.getBidFloor(k), _
                    }, a.getBidFloor = function(k) {
                        switch (parseInt(k.TYPE)) {
                            case 14:
                                return a.DEVICETYPE == "mobile" ? {
                                    "banner|320x480": .6,
                                    "banner|336x280": .6,
                                    "banner|300x250": .6,
                                    "banner|250x250": .6,
                                    "video|320x480": .6,
                                    "video|336x280": .6,
                                    "video|300x250": .6,
                                    "video|250x250": .6
                                } : a.DEVICETYPE == "tablet" ? {
                                    "banner|320x480": .6,
                                    "banner|336x280": .6,
                                    "banner|300x250": .6,
                                    "banner|250x250": .6,
                                    "video|320x480": .6,
                                    "video|336x280": .6,
                                    "video|300x250": .6,
                                    "video|250x250": .6
                                } : {
                                    "banner|320x480": .6,
                                    "banner|336x280": .6,
                                    "banner|300x250": .6,
                                    "banner|250x250": .6,
                                    "video|320x480": .6,
                                    "video|336x280": .6,
                                    "video|300x250": .6,
                                    "video|250x250": .6
                                };
                            case 13:
                                return a.DEVICETYPE == "mobile" ? {
                                    "banner|320x50": .5,
                                    "banner|320x100": .5,
                                    "banner|300x50": .5,
                                    "banner|300x100": .5,
                                    "video|320x50": .5,
                                    "video|320x100": .5,
                                    "video|300x50": .5,
                                    "video|300x100": .5
                                } : a.DEVICETYPE == "tablet" ? {
                                    "banner|970x90": .5,
                                    "banner|728x90": .5,
                                    "banner|468x60": .5,
                                    "video|970x90": .5,
                                    "video|728x90": .5,
                                    "video|468x60": .5
                                } : {
                                    "banner|970x90": .5,
                                    "banner|728x90": .5,
                                    "banner|468x60": .5,
                                    "video|970x90": .5,
                                    "video|728x90": .5,
                                    "video|468x60": .5
                                };
                            case 12:
                                return a.DEVICETYPE == "mobile" ? {
                                    "banner|320x50": .4,
                                    "banner|320x100": .4,
                                    "banner|300x100": .4,
                                    "video|320x50": .4,
                                    "video|320x100": .4,
                                    "video|300x100": .4
                                } : a.DEVICETYPE == "tablet" ? {
                                    "banner|970x90": .4,
                                    "banner|970x250": .4,
                                    "video|970x90": .4,
                                    "video|970x250": .4
                                } : {
                                    "banner|970x90": .4,
                                    "banner|970x250": .4
                                };
                            case 10:
                                return a.DEVICETYPE == "mobile" ? {
                                    "banner|320x50": .5,
                                    "banner|300x50": .5,
                                    "banner|320x100": .5,
                                    "banner|300x100": .5,
                                    "video|320x50": .5,
                                    "video|300x50": .5,
                                    "video|320x100": .5,
                                    "video|300x100": .5
                                } : a.DEVICETYPE == "tablet" ? {
                                    "banner|336x280": .5,
                                    "banner|300x250": .5,
                                    "banner|250x250": .5,
                                    "video|336x280": .5,
                                    "video|300x250": .5,
                                    "video|250x250": .5
                                } : {
                                    "banner|336x280": .5,
                                    "banner|300x250": .5,
                                    "banner|250x250": .5,
                                    "video|336x280": .5,
                                    "video|300x250": .5,
                                    "video|250x250": .5
                                };
                            case 9:
                                return a.DEVICETYPE == "mobile" ? {
                                    "banner|320x480": 3,
                                    "banner|300x250": 3,
                                    "banner|336x280": 3,
                                    "video|320x480": 3,
                                    "video|300x250": 3,
                                    "video|336x280": 3
                                } : a.DEVICETYPE == "tablet" ? {
                                    "banner|320x480": 4,
                                    "banner|300x250": 4,
                                    "banner|336x280": 4,
                                    "banner|800x600": 4,
                                    "video|320x480": 4,
                                    "video|300x250": 4,
                                    "video|336x280": 4,
                                    "video|800x600": 4
                                } : {
                                    "banner|800x600": 4,
                                    "video|800x600": 4
                                };
                            default:
                                return {}
                        }
                    }, a.getStroeerType = function(k) {
                        switch (parseInt(k)) {
                            case 9:
                                return a.DEVICETYPE == "desktop" ? "d9" : "m9";
                            case 10:
                                return a.DEVICETYPE == "desktop" ? "d10" : "m10";
                            case 11:
                                return "t11";
                            case 12:
                                return a.DEVICETYPE == "desktop" ? "d12" : "m12";
                            case 13:
                                return "t14";
                            case 14:
                                return "t14"
                        }
                    }, a.getBidders = function(k, _) {
                        var j, L, H, K;
                        const B = [{
                            bidder: "turktelekom",
                            params: {
                                zoneId: 876,
                                host: "cpm.programattik.com"
                            }
                        }, {
                            bidder: "rtbhouse",
                            params: {
                                publisherId: "36401e736811e8034581",
                                region: "prebid-eu"
                            }
                        }, {
                            bidder: "rubicon",
                            params: ((j = a.RUBICON) == null ? void 0 : j[a.refName]) || ((L = a.RUBICON) == null ? void 0 : L.all)
                        }];
                        let A = a.ADFORM.find(W => W.w == a.refName) || a.ADFORM.find(W => W.w == "all"),
                            Y = a.STROOER.find(W => W.w == a.refName) || a.STROOER.find(W => W.w == "all");
                        if (a.CRITEO.forEach(W => {
                                const s = a.DEVICETYPE == "desktop" ? `d${k.TYPE}` : `m${k.TYPE}`;
                                W.t == s && W.s.forEach(E => {
                                    if (E.f == `${_[0]}x${_[1]}`) {
                                        let $ = {
                                            bidder: "criteo",
                                            params: {
                                                networkId: 4414,
                                                zoneId: E.id
                                            }
                                        };
                                        B.push($)
                                    }
                                })
                            }), (H = Y == null ? void 0 : Y.a) != null && H[`${a.getStroeerType(k.TYPE)}`]) {
                            let W = {
                                bidder: "stroeerCore",
                                params: {
                                    sid: Y.a[`${a.getStroeerType(k.TYPE)}`]
                                }
                            };
                            B.push(W)
                        }
                        if ((K = A == null ? void 0 : A.a) != null && K[`b${_==null?void 0:_[0]}x${_==null?void 0:_[1]}`]) {
                            let W = {
                                bidder: "adf",
                                params: {
                                    mid: A.a[`b${_[0]}x${_[1]}`]
                                }
                            };
                            B.push(W)
                        }
                        return B
                    }, a.createPrebid = function() {
                        a.pbjs.que.push(function() {
                            const k = new Array;
                            for (const _ of a.BID) _.SIZE.forEach(B => {
                                let A = {
                                    code: _.ID,
                                    mediaTypes: {
                                        banner: {
                                            sizes: [B]
                                        }
                                    },
                                    floors: {
                                        currency: "TRY",
                                        schema: {
                                            delimiter: "|",
                                            fields: ["mediaType", "size"]
                                        },
                                        values: a.getCustomBidFloor(_)
                                    },
                                    bids: a.getBidders(_, B)
                                };
                                _.TYPE == 9 && (A.ortb2Imp = {
                                    ext: {
                                        instl: 1
                                    }
                                }), k.push(A)
                            }), _.SIZE.forEach(B => {
                                var j, L;
                                let A = ((j = a.RUBICON) == null ? void 0 : j[a.refName]) || ((L = a.RUBICON) == null ? void 0 : L.all);
                                A.video = {
                                    language: "en"
                                };
                                let Y = {
                                    code: "video-" + _.ID,
                                    mediaTypes: {
                                        video: {
                                            context: "outstream",
                                            mimes: ["video/mp4"],
                                            maxduration: 240,
                                            api: [1, 2],
                                            playerSize: B,
                                            protocols: [1, 2, 3, 4, 5, 6, 7, 8],
                                            skip: 1,
                                            playbackmethod: [2],
                                            linearity: 1,
                                            placement: _.TYPE == 14 ? 3 : _.TYPE == 9 ? 5 : 2
                                        }
                                    },
                                    renderer: {},
                                    floors: {
                                        currency: "TRY",
                                        schema: {
                                            delimiter: "|",
                                            fields: ["mediaType", "size"]
                                        },
                                        values: a.getBidFloor(_)
                                    },
                                    bids: [{
                                        bidder: "criteo",
                                        params: {
                                            zoneId: 1687961,
                                            video: {
                                                playbackmethod: 1,
                                                placement: _.TYPE == 14 ? 3 : _.TYPE == 9 ? 5 : 2
                                            }
                                        }
                                    }, {
                                        bidder: "turktelekom",
                                        params: {
                                            zoneId: 895,
                                            host: "cpm.programattik.com"
                                        }
                                    }]
                                };
                                k.push(Y)
                            });
                            a.pbjs.bidderSettings = {
                                stroeerCore: {
                                    bidCpmAdjustment: function(_, B) {
                                        return .82 * _
                                    }
                                },
                                adform: {
                                    bidCpmAdjustment: function(_, B) {
                                        return .9 * _
                                    }
                                },
                                criteo: {
                                    storageAllowed: !0
                                }
                            }, a.pbjs.setConfig({
                                debug: !1,
                                deviceAccess: !0,
                                floors: {},
                                currency: {
                                    adServerCurrency: "TRY",
                                    bidderCurrencyDefault: {
                                        criteo: "TRY",
                                        adform: "USD",
                                        rtbhouse: "USD",
                                        stroeerCore: "EUR"
                                    }
                                },
                                cache: {
                                    url: "https://prebid.adnxs.com/pbc/v1/cache"
                                },
                                publisherDomain: a.site,
                                criteo: {
                                    fastBidVersion: "latest"
                                },
                                userSync: {
                                    filterSettings: {
                                        all: {
                                            bidders: "*",
                                            filter: "include"
                                        }
                                    },
                                    enableOverride: !0,
                                    syncsPerBidder: 0,
                                    aliasSyncEnabled: !0,
                                    userIds: [{
                                        name: "criteo"
                                    }, {
                                        name: "id5Id",
                                        params: {
                                            partner: 381
                                        },
                                        storage: {
                                            type: "cookie",
                                            name: "pbjs-id5id",
                                            expires: 90,
                                            refreshInSeconds: 28800
                                        }
                                    }, {
                                        name: "pubCommonId",
                                        storage: {
                                            type: "cookie",
                                            name: "_pubcid",
                                            expires: 365
                                        }
                                    }, {
                                        name: "unifiedId",
                                        params: {
                                            url: "https://match.adsrvr.org/track/rid?ttd_pid=ok3agi4&fmt=json"
                                        },
                                        storage: {
                                            type: "cookie",
                                            name: "pbjs-unifiedid",
                                            expires: 60
                                        }
                                    }, {
                                        name: "sharedId",
                                        params: {
                                            syncTime: 86400
                                        },
                                        storage: {
                                            name: "sharedid",
                                            type: "cookie",
                                            expires: 28
                                        }
                                    }]
                                },
                                ortb2: {
                                    app: {
                                        name: a.site
                                    },
                                    badv: a.BADV
                                }
                            }), a.pbjs.addAdUnits(k), a.getAds()
                        })
                    }, a.getTypeName = function(k) {
                        switch (k) {
                            case 13:
                                return "footerad";
                            case 10:
                                return "scrollad";
                            default:
                                return !1
                        }
                    }, a.getAds = function() {
                        a.pbjs.que.push(function() {
                            a.pbjs.requestBids({
                                timeout: a.TIMEOUT,
                                bidsBackHandler: k => {
                                    var Y;
                                    const _ = {};
                                    for (const j in k) k[j].bids.forEach((L, H) => {
                                        L.adUnitCode = L.adUnitCode.replace("video-", ""), a.isBlockedAd(L.meta) ? k[j].bids.splice(H, 1) : (typeof _[L.adUnitCode] == "undefined" && (_[L.adUnitCode] = {
                                            bids: new Array
                                        }), _[L.adUnitCode].bids.push(L))
                                    });
                                    const B = {
                                        data: new Array,
                                        queryId: a.REQUEST_ID,
                                        status: !0
                                    };
                                    for (const j in _) {
                                        const L = _[j].bids.sort(function(H, K) {
                                            return K.cpm - H.cpm
                                        })[0];
                                        if (L.statusMessage == "Bid available" && L.width > 1 && L.height > 1) {
                                            L.bidder = L.bidder.toLowerCase() == "adf" ? "adform" : L.bidder.toLowerCase();
                                            const H = a.BID.find(E => E.ID == L.adUnitCode),
                                                K = ((Y = H.BIDDERS.find(E => E.bidder == L.bidder)) == null ? void 0 : Y.creative_id) || "";
                                            let W = !0;
                                            L.mediaType == "video" && (L.ad = `<script type="text/javascript">const script = document.createElement('script'); script.type = "text/javascript"; script.addEventListener("load", function(event) { const ad = ${JSON.stringify(L)}; const obj = { isBanner: true, close: false, mute: true, device: 'mobile', sticky_mode: false, closeContainer: ad.adUnitCode, sticky: false, width: ad.width, height: ad.height }; adm_outstream.setPrebidJS( obj , ad , ad.adUnitCode); }); script.src = "https://cdn.serve.admatic.com.tr/showad/ima.js"; (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);<\/script><div id="${L.adUnitCode}"></div>`, W = !1), L.ad.indexOf("WCLICK__URL__ENC_X_Z'>") !== -1 && L.ad.indexOf("urlEncodedUrl") !== -1 && (L.ad = L.ad.replace("'https:", '"https:'), L.ad = L.ad.replace("'https:", '"https:'), L.ad = L.ad.replace("'/>", '"/>'), L.ad = L.ad.replace("WCLICK__URL__ENC_X_Z'>", 'WCLICK__URL__ENC_X_Z">')), L.ad = L.ad.replace("http://track.adform.net/adfscript", "https://track.adform.net/adfscript");
                                            const s = {
                                                id: H.ID,
                                                campaign_id: H.CAMPAIGN_ID,
                                                element_id: H.ELEMENT_ID,
                                                creative_id: K || H.CREATIVE_ID,
                                                ad_type: parseInt(H.TYPE),
                                                type: "party_tag",
                                                width: L.width,
                                                height: L.height,
                                                url: "",
                                                price: L.cpm,
                                                click_url: "",
                                                mime_type: "text/html",
                                                party_tag: L.ad,
                                                logo: !0,
                                                skip_button: !1,
                                                skip_seconds: 0,
                                                third_party_impression_code: "",
                                                pixel_id: 0,
                                                bidder: L.bidder,
                                                refresh: W
                                            };
                                            (parseInt(H.TYPE) == 14 || parseInt(H.TYPE) == 12) && (s.adSlotID = H.AD_SLOT_ID), B.data.push(s)
                                        }
                                    }
                                    if ((a == null ? void 0 : a.programmatic) && B.data.length > 0) {
                                        const j = B.data[0],
                                            L = window.document.getElementById(`${j.id}`).contentDocument || window.document.getElementById(`${j.id}`).contentWindow.document;
                                        if (L.open(), L.write(j.party_tag), L.close(), L.body.style.margin = "0px", L.body.style.padding = "0px", window.document.getElementById(`${j.id}`).setAttribute("border", 0), window.document.getElementById(`${j.id}`).setAttribute("width", j.width), window.document.getElementById(`${j.id}`).setAttribute("height", j.height), a != null && a.amp) {
                                            let H = function(K) {
                                                window.context.requestResize(j.width, j.height).then(function() {}).catch(function() {})
                                            };
                                            var A = H;
                                            window.addEventListener("message", H, !1)
                                        }
                                    }
                                    S(B)
                                }
                            })
                        })
                    };
                    const P = document.createElement("script");
                    P.type = "text/javascript", P.addEventListener("load", function() {
                        a.loadPrebidJS()
                    }), window != null && window.adm_pbjs ? ((R = window.adm_pbjs) == null || R.removeAdUnit(), a.loadPrebidJS()) : P.src = "https://cdn.serve.admatic.com.tr/showad/prebid7.28.0.js", document.getElementsByTagName("head")[0].appendChild(P)
                };
                const t = function() {
                        const a = [];
                        return a.push = function() {
                            return T(arguments), Array.prototype.push.apply(this, arguments)
                        }, a
                    },
                    T = function(a) {
                        if (!!a) {
                            for (const S of a) D.SET_ADM_CONFIG(S.ads, S.call);
                            window.adsbyadmatic = new t
                        }
                    };
                (window == null ? void 0 : window.adsbyadmatic) && window.adsbyadmatic.length > 0 ? T(window.adsbyadmatic) : window.adsbyadmatic = new t, console.info(`%c AdMatic: prebid client-side v${e}`, "background: #ad1b19; color: #fff")
            })(window);

            function ClientBidder(D, I) {
                (window.adsbyadmatic || []).push({
                    ads: D,
                    call: I
                })
            }
            class d$2 {
                constructor() {}
                static clickURL(I, e, t) {
                    try {
                        const T = new URL(I);
                        return T.searchParams.set("pid", e.toString()), T.searchParams.set("rid", t.toString()), T.href
                    } catch (T) {
                        return ""
                    }
                }
                static getPartyImpressionDom(I) {
                    return I ? `<iframe src="data:text/html;charset=utf-8,${encodeURI("<script>inDapIF = true;<\/script>")}${encodeURI(I)}" width="0" height="0" loading="lazy" name="adm-party-imp" referrerpolicy="origin" ></iframe>` : ""
                }
                static appendPartyDom(I, e = document.body) {
                    const t = document.createRange().createContextualFragment(I);
                    e.append(t)
                }
                static getAdmaticImpressionDom() {
                    return '<iframe src="https://cdn.serve.admatic.com.tr/showad/sync.html" width="1" height="1" style="display:none;"></iframe>'
                }
                static fetchAds(I, e) {
                    return U(this, null, function*() {
                        const t = new URLSearchParams(e),
                            T = new URLSearchParams(location.search);
                        for (const S of T.keys()) S.startsWith("x-") && t.set(S, T.get(S) || "");
                        [...t.entries()].forEach(([S, P]) => {
                            (!P || P === "undefined" || P == null || !S.startsWith("x-")) && t.delete(S)
                        });
                        const a = yield this.askClientBidConfig(`${I}/query?cst=${localStorage.getItem("cst_cookie")}&${t.toString()}`, e);
                        return yield(yield fetch(`${I}/query?cst=${localStorage.getItem("cst_cookie")}&${t.toString()}`, {
                            method: "POST",
                            credentials: "include",
                            body: JSON.stringify(a),
                            headers: {
                                "Content-Type": "application/json",
                                "x-referer": window.location.href,
                                "debug-tag": e["debug-tag"] || ""
                            }
                        })).json()
                    })
                }
                static askClientBidConfig(I, e) {
                    return U(this, null, function*() {
                        return new Promise((t, T) => U(this, null, function*() {
                            const a = yield(yield fetch(`${I}&x-clientBidder=true`, {
                                method: "GET",
                                credentials: "include",
                                headers: {
                                    "x-referer": window.location.href,
                                    "debug-tag": e["debug-tag"] || ""
                                }
                            })).json();
                            let S = this;
                            ClientBidder(a, function(P) {
                                return U(this, null, function*() {
                                    t(yield S.waitUntil(P, P))
                                })
                            })
                        }))
                    })
                }
                static waitUntil(I, e, t = 2e3) {
                    return U(this, null, function*() {
                        return new Promise((T, a) => {
                            let S = new Date().getTime(),
                                P = setInterval(function() {
                                    if (new Date().getTime() - S < t && !I) {
                                        T({});
                                        return
                                    }
                                    clearInterval(P), T(e)
                                }, 100)
                        })
                    })
                }
                static uuidv4() {
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, I => (I ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> I / 4).toString(16))
                }
            }(function(D) {
                var I = [];

                function e(t) {
                    var T = this;
                    t = String(t);
                    var a = "$BroadcastChannel$" + t + "$";
                    I[a] = I[a] || [], I[a].push(this), this._name = t, this._id = a, this._closed = !1, this._mc = new MessageChannel, this._mc.port1.start(), this._mc.port2.start(), D.addEventListener("storage", function(S) {
                        if (S.storageArea === D.localStorage && !(S.newValue == null || S.newValue === "") && S.key.substring(0, a.length) === a) {
                            var P = JSON.parse(S.newValue);
                            T._mc.port2.postMessage(P)
                        }
                    })
                }
                e.prototype = {
                    get name() {
                        return this._name
                    },
                    postMessage: function(t) {
                        var T = this;
                        if (this._closed) {
                            var a = new Error;
                            throw a.name = "InvalidStateError", a
                        }
                        var S = JSON.stringify(t),
                            P = this._id + String(Date.now()) + "$" + String(Math.random());
                        D.localStorage.setItem(P, S), setTimeout(function() {
                            D.localStorage.removeItem(P)
                        }, 500), I[this._id].forEach(function(R) {
                            R !== T && R._mc.port2.postMessage(JSON.parse(S))
                        })
                    },
                    close: function() {
                        if (!this._closed) {
                            this._closed = !0, this._mc.port1.close(), this._mc.port2.close();
                            var t = I[this._id].indexOf(this);
                            I[this._id].splice(t, 1)
                        }
                    },
                    get onmessage() {
                        return this._mc.port1.onmessage
                    },
                    set onmessage(t) {
                        this._mc.port1.onmessage = t
                    },
                    addEventListener: function() {
                        return this._mc.port1.addEventListener.apply(this._mc.port1, arguments)
                    },
                    removeEventListener: function() {
                        return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments)
                    },
                    dispatchEvent: function() {
                        return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments)
                    }
                }, D.BroadcastChannel = D.BroadcastChannel || e
            })(self),
            function() {
                if (typeof window != "object") return;
                if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
                    "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    return
                }

                function D(s) {
                    try {
                        return s.defaultView && s.defaultView.frameElement || null
                    } catch (E) {
                        return null
                    }
                }
                var I = function(s) {
                        for (var E = s, $ = D(E); $;) E = $.ownerDocument, $ = D(E);
                        return E
                    }(window.document),
                    e = [],
                    t = null,
                    T = null;

                function a(s) {
                    this.time = s.time, this.target = s.target, this.rootBounds = j(s.rootBounds), this.boundingClientRect = j(s.boundingClientRect), this.intersectionRect = j(s.intersectionRect || Y()), this.isIntersecting = !!s.intersectionRect;
                    var E = this.boundingClientRect,
                        $ = E.width * E.height,
                        q = this.intersectionRect,
                        V = q.width * q.height;
                    $ ? this.intersectionRatio = Number((V / $).toFixed(4)) : this.intersectionRatio = this.isIntersecting ? 1 : 0
                }

                function S(s, E) {
                    var $ = E || {};
                    if (typeof s != "function") throw new Error("callback must be a function");
                    if ($.root && $.root.nodeType != 1 && $.root.nodeType != 9) throw new Error("root must be a Document or Element");
                    this._checkForIntersections = R(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = s, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin($.rootMargin), this.thresholds = this._initThresholds($.threshold), this.root = $.root || null, this.rootMargin = this._rootMarginValues.map(function(q) {
                        return q.value + q.unit
                    }).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                }
                S.prototype.THROTTLE_TIMEOUT = 100, S.prototype.POLL_INTERVAL = null, S.prototype.USE_MUTATION_OBSERVER = !0, S._setupCrossOriginUpdater = function() {
                    return t || (t = function(s, E) {
                        !s || !E ? T = Y() : T = L(s, E), e.forEach(function($) {
                            $._checkForIntersections()
                        })
                    }), t
                }, S._resetCrossOriginUpdater = function() {
                    t = null, T = null
                }, S.prototype.observe = function(s) {
                    var E = this._observationTargets.some(function($) {
                        return $.element == s
                    });
                    if (!E) {
                        if (!(s && s.nodeType == 1)) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: s,
                            entry: null
                        }), this._monitorIntersections(s.ownerDocument), this._checkForIntersections()
                    }
                }, S.prototype.unobserve = function(s) {
                    this._observationTargets = this._observationTargets.filter(function(E) {
                        return E.element != s
                    }), this._unmonitorIntersections(s.ownerDocument), this._observationTargets.length == 0 && this._unregisterInstance()
                }, S.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                }, S.prototype.takeRecords = function() {
                    var s = this._queuedEntries.slice();
                    return this._queuedEntries = [], s
                }, S.prototype._initThresholds = function(s) {
                    var E = s || [0];
                    return Array.isArray(E) || (E = [E]), E.sort().filter(function($, q, V) {
                        if (typeof $ != "number" || isNaN($) || $ < 0 || $ > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return $ !== V[q - 1]
                    })
                }, S.prototype._parseRootMargin = function(s) {
                    var E = s || "0px",
                        $ = E.split(/\s+/).map(function(q) {
                            var V = /^(-?\d*\.?\d+)(px|%)$/.exec(q);
                            if (!V) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(V[1]),
                                unit: V[2]
                            }
                        });
                    return $[1] = $[1] || $[0], $[2] = $[2] || $[0], $[3] = $[3] || $[1], $
                }, S.prototype._monitorIntersections = function(s) {
                    var E = s.defaultView;
                    if (!!E && this._monitoringDocuments.indexOf(s) == -1) {
                        var $ = this._checkForIntersections,
                            q = null,
                            V = null;
                        this.POLL_INTERVAL ? q = E.setInterval($, this.POLL_INTERVAL) : (k(E, "resize", $, !0), k(s, "scroll", $, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in E && (V = new E.MutationObserver($), V.observe(s, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))), this._monitoringDocuments.push(s), this._monitoringUnsubscribes.push(function() {
                            var J = s.defaultView;
                            J && (q && J.clearInterval(q), _(J, "resize", $, !0)), _(s, "scroll", $, !0), V && V.disconnect()
                        });
                        var Z = this.root && (this.root.ownerDocument || this.root) || I;
                        if (s != Z) {
                            var C = D(s);
                            C && this._monitorIntersections(C.ownerDocument)
                        }
                    }
                }, S.prototype._unmonitorIntersections = function(s) {
                    var E = this._monitoringDocuments.indexOf(s);
                    if (E != -1) {
                        var $ = this.root && (this.root.ownerDocument || this.root) || I,
                            q = this._observationTargets.some(function(C) {
                                var J = C.element.ownerDocument;
                                if (J == s) return !0;
                                for (; J && J != $;) {
                                    var Q = D(J);
                                    if (J = Q && Q.ownerDocument, J == s) return !0
                                }
                                return !1
                            });
                        if (!q) {
                            var V = this._monitoringUnsubscribes[E];
                            if (this._monitoringDocuments.splice(E, 1), this._monitoringUnsubscribes.splice(E, 1), V(), s != $) {
                                var Z = D(s);
                                Z && this._unmonitorIntersections(Z.ownerDocument)
                            }
                        }
                    }
                }, S.prototype._unmonitorAllIntersections = function() {
                    var s = this._monitoringUnsubscribes.slice(0);
                    this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                    for (var E = 0; E < s.length; E++) s[E]()
                }, S.prototype._checkForIntersections = function() {
                    if (!(!this.root && t && !T)) {
                        var s = this._rootIsInDom(),
                            E = s ? this._getRootRect() : Y();
                        this._observationTargets.forEach(function($) {
                            var q = $.element,
                                V = A(q),
                                Z = this._rootContainsTarget(q),
                                C = $.entry,
                                J = s && Z && this._computeTargetAndRootIntersection(q, V, E),
                                Q = null;
                            this._rootContainsTarget(q) ? (!t || this.root) && (Q = E) : Q = Y();
                            var X = $.entry = new a({
                                time: P(),
                                target: q,
                                boundingClientRect: V,
                                rootBounds: Q,
                                intersectionRect: J
                            });
                            C ? s && Z ? this._hasCrossedThreshold(C, X) && this._queuedEntries.push(X) : C && C.isIntersecting && this._queuedEntries.push(X) : this._queuedEntries.push(X)
                        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }
                }, S.prototype._computeTargetAndRootIntersection = function(s, E, $) {
                    if (window.getComputedStyle(s).display != "none") {
                        for (var q = E, V = K(s), Z = !1; !Z && V;) {
                            var C = null,
                                J = V.nodeType == 1 ? window.getComputedStyle(V) : {};
                            if (J.display == "none") return null;
                            if (V == this.root || V.nodeType == 9)
                                if (Z = !0, V == this.root || V == I) t && !this.root ? !T || T.width == 0 && T.height == 0 ? (V = null, C = null, q = null) : C = T : C = $;
                                else {
                                    var Q = K(V),
                                        X = Q && A(Q),
                                        N = Q && this._computeTargetAndRootIntersection(Q, X, $);
                                    X && N ? (V = Q, C = L(X, N)) : (V = null, q = null)
                                }
                            else {
                                var F = V.ownerDocument;
                                V != F.body && V != F.documentElement && J.overflow != "visible" && (C = A(V))
                            }
                            if (C && (q = B(C, q)), !q) break;
                            V = V && K(V)
                        }
                        return q
                    }
                }, S.prototype._getRootRect = function() {
                    var s;
                    if (this.root && !W(this.root)) s = A(this.root);
                    else {
                        var E = W(this.root) ? this.root : I,
                            $ = E.documentElement,
                            q = E.body;
                        s = {
                            top: 0,
                            left: 0,
                            right: $.clientWidth || q.clientWidth,
                            width: $.clientWidth || q.clientWidth,
                            bottom: $.clientHeight || q.clientHeight,
                            height: $.clientHeight || q.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(s)
                }, S.prototype._expandRectByRootMargin = function(s) {
                    var E = this._rootMarginValues.map(function(q, V) {
                            return q.unit == "px" ? q.value : q.value * (V % 2 ? s.width : s.height) / 100
                        }),
                        $ = {
                            top: s.top - E[0],
                            right: s.right + E[1],
                            bottom: s.bottom + E[2],
                            left: s.left - E[3]
                        };
                    return $.width = $.right - $.left, $.height = $.bottom - $.top, $
                }, S.prototype._hasCrossedThreshold = function(s, E) {
                    var $ = s && s.isIntersecting ? s.intersectionRatio || 0 : -1,
                        q = E.isIntersecting ? E.intersectionRatio || 0 : -1;
                    if ($ !== q)
                        for (var V = 0; V < this.thresholds.length; V++) {
                            var Z = this.thresholds[V];
                            if (Z == $ || Z == q || Z < $ != Z < q) return !0
                        }
                }, S.prototype._rootIsInDom = function() {
                    return !this.root || H(I, this.root)
                }, S.prototype._rootContainsTarget = function(s) {
                    var E = this.root && (this.root.ownerDocument || this.root) || I;
                    return H(E, s) && (!this.root || E == s.ownerDocument)
                }, S.prototype._registerInstance = function() {
                    e.indexOf(this) < 0 && e.push(this)
                }, S.prototype._unregisterInstance = function() {
                    var s = e.indexOf(this);
                    s != -1 && e.splice(s, 1)
                };

                function P() {
                    return window.performance && performance.now && performance.now()
                }

                function R(s, E) {
                    var $ = null;
                    return function() {
                        $ || ($ = setTimeout(function() {
                            s(), $ = null
                        }, E))
                    }
                }

                function k(s, E, $, q) {
                    typeof s.addEventListener == "function" ? s.addEventListener(E, $, q || !1) : typeof s.attachEvent == "function" && s.attachEvent("on" + E, $)
                }

                function _(s, E, $, q) {
                    typeof s.removeEventListener == "function" ? s.removeEventListener(E, $, q || !1) : typeof s.detachEvent == "function" && s.detachEvent("on" + E, $)
                }

                function B(s, E) {
                    var $ = Math.max(s.top, E.top),
                        q = Math.min(s.bottom, E.bottom),
                        V = Math.max(s.left, E.left),
                        Z = Math.min(s.right, E.right),
                        C = Z - V,
                        J = q - $;
                    return C >= 0 && J >= 0 && {
                        top: $,
                        bottom: q,
                        left: V,
                        right: Z,
                        width: C,
                        height: J
                    } || null
                }

                function A(s) {
                    var E;
                    try {
                        E = s.getBoundingClientRect()
                    } catch ($) {}
                    return E ? (E.width && E.height || (E = {
                        top: E.top,
                        right: E.right,
                        bottom: E.bottom,
                        left: E.left,
                        width: E.right - E.left,
                        height: E.bottom - E.top
                    }), E) : Y()
                }

                function Y() {
                    return {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function j(s) {
                    return !s || "x" in s ? s : {
                        top: s.top,
                        y: s.top,
                        bottom: s.bottom,
                        left: s.left,
                        x: s.left,
                        right: s.right,
                        width: s.width,
                        height: s.height
                    }
                }

                function L(s, E) {
                    var $ = E.top - s.top,
                        q = E.left - s.left;
                    return {
                        top: $,
                        left: q,
                        height: E.height,
                        width: E.width,
                        bottom: $ + E.height,
                        right: q + E.width
                    }
                }

                function H(s, E) {
                    for (var $ = E; $;) {
                        if ($ == s) return !0;
                        $ = K($)
                    }
                    return !1
                }

                function K(s) {
                    var E = s.parentNode;
                    return s.nodeType == 9 && s != I ? D(s) : (E && E.assignedSlot && (E = E.assignedSlot.parentNode), E && E.nodeType == 11 && E.host ? E.host : E)
                }

                function W(s) {
                    return s && s.nodeType === 9
                }
                window.IntersectionObserver = S, window.IntersectionObserverEntry = a
            }();
            const r = [.01, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
                n$1 = "adserver-bc",
                ingestBaseUrl = "https://ingest.serve.admatic.com.tr",
                o$3 = (D = 24) => {
                    const I = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    let e = "";
                    const t = I.length;
                    for (let T = 0; T < D; T++) e += I.charAt(Math.floor(Math.random() * t));
                    return e
                };
            class d$1 {
                constructor() {
                    z(this, "observers");
                    z(this, "bc", new BroadcastChannel(n$1));
                    z(this, "id", `ad_${o$3()}`);
                    z(this, "publisherId");
                    z(this, "isRendered", !1);
                    z(this, "data", {});
                    z(this, "debug", !1);
                    z(this, "lastViewRate", 0);
                    z(this, "lastViewStarted", 0);
                    z(this, "seen", !1);
                    z(this, "isInteracted", !1);
                    z(this, "countable", !1);
                    z(this, "track", I => {
                        this.observers.observe(I)
                    });
                    z(this, "untrack", () => {
                        this.observers.disconnect()
                    });
                    z(this, "intersectionCallback", I => {
                        var e;
                        ((e = this.data) == null ? void 0 : e.isRefreshAd) !== !0 && I.forEach(t => U(this, null, function*() {
                            var T;
                            if ((T = this.data.adData.data) != null && T.party_tag.includes("dcmads.js")) {
                                const a = setInterval(() => U(this, null, function*() {
                                    if (console.debug("countable", this.countable), !this.countable) return !1;
                                    !this.seen && this.isInteracted && (this.seen = !0, yield this.createIngestPixel({
                                        viewRate: -1
                                    }));
                                    const S = Math.floor(t.intersectionRatio * 100);
                                    S > this.lastViewRate && t.time - this.lastViewStarted > 200 && (this.lastViewRate = Math.ceil(S / 10) * 10, this.lastViewStarted = t.time, yield this.createIngestPixel({
                                        viewRate: Math.ceil(S / 10) * 10
                                    })), this.debug && (console.debug("visiblePct", S + "%"), this.sendReport({
                                        visibility: S + "%"
                                    })), clearInterval(a)
                                }), 100)
                            } else {
                                !this.seen && this.isInteracted && (this.seen = !0, yield this.createIngestPixel({
                                    viewRate: -1
                                }));
                                const a = Math.floor(t.intersectionRatio * 100);
                                a > this.lastViewRate && t.time - this.lastViewStarted > 200 && (this.lastViewRate = Math.ceil(a / 10) * 10, this.lastViewStarted = t.time, yield this.createIngestPixel({
                                    viewRate: Math.ceil(a / 10) * 10
                                })), this.debug && (console.debug("visiblePct", a + "%"), this.sendReport({
                                    visibility: a + "%"
                                }))
                            }
                        }))
                    });
                    z(this, "setReady", () => {
                        Promise.resolve(this.render())
                    });
                    z(this, "setData", I => {
                        this.data = I
                    });
                    z(this, "sendReport", I => {
                        console.debug("sendReport", I), this.bc.postMessage({
                            type: "ad-report",
                            id: this.id,
                            data: aa({
                                isRendered: this.isRendered,
                                slots: [JSON.stringify(this.data.adData.data)],
                                adData: this.data.adData.data
                            }, I)
                        })
                    });
                    z(this, "ingestWorker", I => U(this, null, function*() {
                        return new Promise(e => {
                            I.viewRate = I.viewRate > 0 ? I.viewRate || this.lastViewRate : 0;
                            const t = `${ingestBaseUrl}/?cst=${localStorage.getItem("cst_cookie")}&cid=${this.data.adData.data.campaign_id}&eid=${this.data.adData.data.element_id}&crid=${this.data.adData.data.creative_id}&pid=${this.publisherId}&rid=${this.data.adData.queryId}&at=${this.data.adData.data.ad_type}&ref=${btoa(window.location.href)}&vr=${I.viewRate}`,
                                T = document.createElement("img");
                            T.src = t, T.style.display = "none", T.id = "adm-ingest-pixel", T.onload = () => {
                                document.body.removeChild(T), e()
                            }, T.onerror = () => {
                                document.body.removeChild(T), e()
                            }, document.body.appendChild(T)
                        })
                    }));
                    z(this, "createIngestPixel", I => U(this, null, function*() {
                        var e;
                        this.debug && console.debug("createIngestPixel", I), (e = window.ingestQueue) == null || e.push({
                            data: I,
                            ingestWorker: this.ingestWorker
                        })
                    }));
                    z(this, "render", () => {});
                    this.publisherId = Number(window.publisherId) || 0;
                    const I = new URLSearchParams(location.search);
                    ["true", "yes", "enable"].includes(I.get("debug")) && (this.debug = !0), this.debug && console.debug("Ad created"), this.observers = new IntersectionObserver(this.intersectionCallback, {
                        root: null,
                        rootMargin: "0px",
                        threshold: r
                    })
                }
            }
            const M = class extends d$1 {
                constructor() {
                    super();
                    z(this, "wrapper", document.createElement("div"));
                    z(this, "createAdBox", (e, t, T, a, S, P, R) => {
                        const k = ["width:100%", "height:100%", "background:#fff", "margin:auto", "position:relative"],
                            _ = ["display: block", "transform: translateX(0px)", "cursor: pointer", "font-size: 16px", "line-height: 220%", "position: relative"],
                            B = ["display: block", "transform: translateX(0px)", "cursor: pointer", "width: 100px", "font-size: 16px", "line-height: 220%", "position: absolute", "background: url(&quot;https://cdn.serve.admatic.com.tr/content/m-fp-kapat.svg&quot;) no-repeat", "padding: 0px !important", "margin: 0px !important", "opacity: 1 !important", "border: medium none", "box-shadow: none !important", "height: 80px !important"],
                            A = t ? `<iframe data-creative data-adm-ad-id="${this.id}" data-adm-ad-source="party-tag" width="100%" height="100%" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" referrerpolicy="origin"  style="border:none;"></iframe>` : T === l.html ? `<div style="position: absolute; height:100%; width:100%; z-index:1;background: rgba(255,255,255,0);"></div><iframe data-creative src="${a}" width="100%" height="100%" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" style="border:none;"></iframe>` : `<img data-creative src="${a}" />`;
                        e.innerHTML = `
      <style>
      .admatic_fullpage_skip_ad_btn {
        z-index: 10005;
        width: 144px;
        top: 77vh;
        border: none;
        float: right;
        text-align: right;
        border-top-left-radius: 4px !important;
        right: -144px;
        border-bottom-left-radius: 4px !important;
        background: #fff;
        opacity: .7;
        color: #000;
        font-family: Tahoma,Geneva,sans-serif,Arial;
        height: 36px !important;
        margin-top: -36px;
        padding: 2px 24px 2px 2px !important;
        -webkit-box-shadow: 2px 2px 2px 2px rgba(0,0,0,.75);
        -moz-box-shadow: 2px 2px 2px 2px rgba(0,0,0,.75);
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,.75);
        transition: all 0.5s ease-out 0s;
      }
      .admatic_fullpage_skip_ad_btn:hover {
        opacity: 1;
      }
      </style>
      <div style="${k.join(";")}">
      ${screen.width>=576?`<button type="button" class="admatic_fullpage_skip_ad_btn" style="${_.join(";")}" title="Reklam\u0131 Ge\xE7">Reklam\u0131 Ge\xE7<img src="https://bubio.web.tr/favicon.ico" style="width:20px;height:20px;position:absolute;top:10px;left:10px" title="AdMatic" alt="AdMatic"></button>`:`<button type="button" class="admatic_fullpage_skip_ad_btn" style="${B.join(";")}" title="Reklam\u0131 Ge\xE7"></button>`}
      
      ${t?"":`<a href="${d$2.clickURL(S,P,R)}" target="_blank">`}
        ${A}
      ${t?"":"</a>"}
      </div>`;
                        const Y = e.querySelector('[data-creative][data-adm-ad-source="party-tag"]');
                        Y && (Y.srcdoc = `<style>html,body{margin: 0;padding: 0;width:100%;height:100%;}</style> ${t}`)
                    });
                    z(this, "closeAd", () => {
                        this.wrapper && (this.wrapper.style.bottom = "200%", this.sendReport({
                            closed: !0
                        }), this.isRendered = !1, setTimeout(() => {
                            var e;
                            this.wrapper && ((e = this.wrapper) == null || e.remove())
                        }, 1e3), this.data.isRefreshAd !== !0 && this.afterCloseAd())
                    });
                    z(this, "render", () => U(this, null, function*() {
                        this.wrapper.id = this.id, this.wrapper.style.zIndex = (this.debug ? M.maxZIndex - 1 : M.maxZIndex).toString(), this.wrapper.style.position = "fixed", this.wrapper.style.background = "rgba(0,0,0,0.5)", this.wrapper.style.left = "0", this.wrapper.style.right = "0", this.wrapper.style.bottom = "0", this.wrapper.style.width = "100%", this.wrapper.style.height = "100%", this.wrapper.style.opacity = "0", this.wrapper.style.display = "none", this.wrapper.style.transition = "bottom 1s ease-in-out, opacity 1.1s ease 0s", document.body.appendChild(this.wrapper), document.addEventListener("scroll", () => this.handleInteraction()), document.addEventListener("keydown", () => this.handleInteraction()), document.body.addEventListener("click", () => this.handleInteraction()), document.body.addEventListener("touchstart", () => this.handleInteraction()), document.body.addEventListener("mousemove", () => this.handleInteraction()), this.createAdBox(this.wrapper, this.data.adData.data.party_tag, this.data.adData.data.type, this.data.adData.data.url, this.data.adData.data.click_url, this.publisherId, this.data.adData.queryId);
                        const e = this.wrapper.querySelector("[data-creative]");
                        if (e) {
                            let T = 0;
                            e.onloadstart = () => {
                                T = performance.now()
                            }, e.onload = () => {
                                this.sendReport({
                                    creativeLoadTime: performance.now() - T
                                })
                            }
                        }
                        const t = this.wrapper.querySelector("button");
                        this.isRendered = !0, this.sendReport({
                            render: !0
                        }), setTimeout(() => {
                            t && (t.style.right = "0")
                        }, 4e3), t == null || t.addEventListener("click", this.closeAd), this.track(this.wrapper.querySelector("div"))
                    }));
                    z(this, "handleInteraction", () => {
                        this.wrapper && this.wrapper.style.display !== "flex" && (this.wrapper.style.display = "flex", this.wrapper.style.opacity = "1", this.data.adData.data.third_party_impression_code && d$2.appendPartyDom(this.data.adData.data.third_party_impression_code), this.isInteracted = !0)
                    });
                    z(this, "afterCloseAd", () => U(this, null, function*() {}))
                }
            };
            let i$2 = M;
            z(i$2, "maxZIndex", 2147483647);
            const x = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`,
                p$2 = i$2.maxZIndex - 2;
            class b$1 extends d$1 {
                constructor() {
                    super();
                    z(this, "wrapper", document.createElement("div"));
                    z(this, "refreshInterval");
                    z(this, "createAdBox", (e, t, T, a, S, P, R) => {
                        const k = ["width:100%", `height:${Number(this.data.adData.data.height)+8}px`, "background:#fff", "border-radius:4px", "margin:auto", "padding:4px", "position:relative", "background:#fff"],
                            _ = ["border-radius:50%", "background:#fff", "padding:0", "border:none", "position:absolute", "top:-24px", "left:0", "width:24px", "height:24px", "min-width:24px", "min-height:24px", "max-width:24px", "max-height:24px", "display:none", "justify-content:center", "align-items:center", "cursor: pointer", "color: #000 !important"],
                            B = t ? `<iframe data-creative data-adm-ad-id="${this.id}" data-adm-ad-source="party-tag" data-adm-ad-type="footerad" width="${this.data.adData.data.width}px" height="${this.data.adData.data.height}px" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" referrerpolicy="origin"  style="border:none;"></iframe>` : T === l.html ? `<div style="position: absolute; height:100%; width:100%; z-index:1;background: rgba(255,255,255,0);"></div><iframe data-creative src="${a}" width="${this.data.adData.data.width}px" height="${this.data.adData.data.height}px" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" style="border:none;margin: auto"></iframe>` : `<img data-creative src="${a}" />`;
                        e.innerHTML = `
    <style>
    .${this.id}-admatic_logo_area_span {
      width: 20px !important;
      background: url("https://cdn.serve.admatic.com.tr/content/admatic.png") no-repeat scroll left center #fff;
      border-radius: 20px !important;
      box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
      cursor: pointer;
      display: block;
      font-size: 14px !important;
      border: 2px solid #fff !important;
      font-weight: bold;
      height: 20px !important;
      line-height: 16px !important;
      font-family: Verdana;
      opacity: 1;
      position: absolute !important;
      right: 5px !important;
      text-decoration: none;
      text-align: center;
      top: -22px !important;
      z-index: 10004;
      transition: all .5s ease-out 0s;
      box-sizing: border-box;
    }
    .${this.id}-admatic_logo_area_span:hover {
      opacity: 1;
      width: 67px !important;
    }
    </style>
    <div style="${k.join(";")}">
      <button style="${_.join(";")}">${x}</button>
      ${this.data.adData.data.logo?`<a href="https://admatic.com.tr/" target="_blank" class="${this.id}-admatic_logo_area_span"></a>`:""}
      ${t?"":`<a href="${d$2.clickURL(S,P,R)}" target="_blank" style="display: flex">`}
        ${B}
      ${t?"":"</a>"}
    </div>`;
                        const A = e.querySelector('[data-creative][data-adm-ad-source="party-tag"]');
                        A && (A.srcdoc = `<style>html,body{margin: 0;padding: 0;width:100%;height:100%;}</style> ${t}`)
                    });
                    z(this, "closeAd", () => {
                        this.wrapper && (this.wrapper.style.opacity = "0", clearInterval(this.refreshInterval), this.sendReport({
                            closed: !0
                        }), this.isRendered = !1, setTimeout(() => {
                            var e;
                            this.wrapper && ((e = this.wrapper) == null || e.remove())
                        }, 300))
                    });
                    z(this, "render", () => U(this, null, function*() {
                        if (this.data.adData.data === void 0 || this.data.adData.data === null) return;
                        this.wrapper.id = this.id, this.wrapper.style.zIndex = (this.debug ? p$2 - 1 : p$2).toString(), this.wrapper.style.position = "fixed", this.wrapper.style.left = "50%", this.wrapper.style.transform = "translate(-50%,0)", this.wrapper.style.bottom = "8px", this.wrapper.style.width = screen.width >= 576 ? Number(this.data.adData.data.width) + 4 * 2 + "px" : "100%", this.wrapper.style.height = this.data.adData.data.height + "px", this.data.isRefreshAd !== !0 && (this.wrapper.style.opacity = "0"), this.wrapper.style.display = "flex", this.wrapper.style.background = "#fff", this.wrapper.style.transition = "opacity 260ms ease-out", document.addEventListener("scroll", () => this.handleInteraction()), document.addEventListener("keydown", () => this.handleInteraction()), document.body.addEventListener("click", () => this.handleInteraction()), document.body.addEventListener("touchstart", () => this.handleInteraction()), document.body.addEventListener("mousemove", () => this.handleInteraction()), this.createAdBox(this.wrapper, this.data.adData.data.party_tag, this.data.adData.data.type, this.data.adData.data.url, this.data.adData.data.click_url, this.publisherId, this.data.adData.queryId);
                        const e = this.wrapper.querySelector("[data-creative]");
                        if (e) {
                            let t = 0;
                            e.onloadstart = () => {
                                t = performance.now()
                            }, e.onload = () => {
                                this.sendReport({
                                    creativeLoadTime: performance.now() - t
                                })
                            }
                        }
                        if (this.isRendered = !0, this.sendReport({
                                render: !0
                            }), this.track(this.wrapper.querySelector("div")), this.data.isRefreshAd !== !0 && this.data.adData.data.refresh) this.refreshAd(u);
                        else {
                            this.wrapper && (this.wrapper.style.opacity = "1");
                            const t = this.wrapper.querySelector("button");
                            setTimeout(() => {
                                t && (t.style.display = "flex", t.addEventListener("click", this.closeAd))
                            }, this.data.adData.data.skip_seconds * 1e3), this.seen = !0
                        }
                    }));
                    z(this, "handleInteraction", () => {
                        if (this.isRendered && !document.body.contains(this.wrapper)) {
                            document.body.appendChild(this.wrapper), this.wrapper && (this.wrapper.style.opacity = "1");
                            const e = this.wrapper.querySelector("button");
                            setTimeout(() => {
                                e && (e.style.display = "flex", e.addEventListener("click", this.closeAd))
                            }, this.data.adData.data.skip_seconds * 1e3), this.data.adData.data.third_party_impression_code && d$2.appendPartyDom(this.data.adData.data.third_party_impression_code), this.isInteracted = !0
                        }
                    });
                    z(this, "refreshAd", e => {
                        let t = 3;
                        this.refreshInterval = setInterval(() => U(this, null, function*() {
                            var T, a;
                            if (document.body.contains(this.wrapper) && window.clientBidderReturned != !0) {
                                const S = "footerad",
                                    P = new URLSearchParams(location.search),
                                    R = yield d$2.fetchAds(i$1, {
                                        "x-adtype": c[S],
                                        "x-campaignID": P.get("campaign_id") || "",
                                        "x-elementID": P.get("element_id") || "",
                                        "x-creativeID": P.get("creative_id") || "",
                                        "x-publisherID": window.publisherId || "",
                                        "x-refresh": !0
                                    });
                                if (((T = R == null ? void 0 : R.data) == null ? void 0 : T.length) > 0) {
                                    for (const k of R.data)
                                        if (((a = k.ad_type) == null ? void 0 : a.toString()) === c[S]) {
                                            const _ = this;
                                            _.setData({
                                                adData: {
                                                    data: k,
                                                    queryId: R.queryId,
                                                    status: R.status
                                                },
                                                isRefreshAd: !0
                                            }), _.sendReport({
                                                render: !1
                                            }), _.setReady()
                                        }
                                }
                                t--, t === 0 && clearInterval(this.refreshInterval)
                            }
                        }), e)
                    })
                }
            }
            const d = i$2.maxZIndex - 2,
                w$1 = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`,
                y$1 = window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="67" height="20" xml:space="preserve" id="Layer_1" x="0" y="0" style="enable-background:new 0 0 423.8 113" version="1.1" viewBox="0 0 423.8 113"><style>.st1{fill:#07424f}.st2{fill:#3abeee}.st3{fill:#0e748e}</style><path d="M344.2 104.4H79.3c-26.4 0-48-21.6-48-48s21.6-48 48-48h264.9c26.4 0 48 21.6 48 48 .1 26.4-21.6 48-48 48z" style="fill:#fff"/><path d="M174.5 72.8h-5.2v-2.2c-2.6 1.7-5.6 2.2-9.5 2.2-5.6 0-8.2-2.6-8.2-8.2 0-6.5 3-9.5 9.5-9.5h8.2v-4.8c0-3-.9-4.8-4.8-4.8h-8.7l-4.3-4.3h11.3c8.7 0 11.7 3.5 11.7 10v21.6zm-5.6-13.4h-8.2c-2.6 0-3.9.9-3.9 3.5 0 3.9 1.3 3.9 3.9 4.3h2.6c2.6 0 6.1 0 6.1-5.2v-2.6h-.5zM221.7 67.6h10.8l-5.2 5.2h-6.1c-9.1 0-12.1-3.9-12.1-10.8v-9.1c0-6.5 3-11.7 12.1-11.7S233 46.4 233 52.9v6.5h-18.2V62c-.4 5.2 1.3 5.6 6.9 5.6zm-7.3-12.5h13.4v-2.6c0-4.3-1.3-6.9-6.5-6.9s-6.9 2.6-6.9 6.9v2.6zM283.6 41.7v20.8c0 2.2.9 5.2 3 5.2h6.9c3.5 0 3.5-3.9 3.5-3.9V46l5.2-4.3v31.6H297v-2.6c0 2.2-3.5 2.6-3.5 2.6h-8.2c-4.8 0-6.9-6.1-6.9-10.8V46l5.2-4.3zM267.6 72.8V36.9l5.2-5.2v41.6h-5.2v-.5zM92.7 36.9l5.2-5.6v5.6zM92.7 41.7h5.2v31.6h-5.2zM140.8 72.8V50.3c0-4.3 0-4.3-3-4.3s-10.4 4.3-10.4 4.3v22.5h-5.2V50.3c0-4.3 0-4.3-3-4.3s-10.4 4.3-10.4 4.3v22.5h-5.2V46l5.2-4.3V46s6.5-4.3 10.4-4.3h5.6s2.6 0 2.6 2.2v2.2s6.5-4.3 10.4-4.3h5.2c3 0 3 2.2 3 2.2v29.3h-5.2v-.5zM202.3 46c1.3 1.7 1.7 3.9 1.7 6.1v1.3c0 6.5-3.9 10.4-12.1 10.4h-3s-2.2 0-2.2 2.2c0 1.7.4 1.3 2.2 1.7h9.1c5.6.4 7.4 5.2 7.4 10 0 6.9-2.2 9.1-13.4 9.1h-10.4v-4.3h10c7.8 0 8.7-.9 8.7-4.3 0-2.6-.9-4.3-4.8-4.3h-8.2c-4.8-.4-6.1-2.6-6.1-5.6 0-2.2 1.3-3.9 3-5.2-3-1.7-4.3-4.8-4.3-8.7v-2.2c0-6.9 3-10.4 12.1-10.4h14.3l-4 4.2zm-10.4 0c-5.2 0-6.9 1.7-6.9 6.5v1.3c0 4.8 2.2 6.1 6.9 6.1 5.2 0 6.9-2.2 6.9-6.1v-1.7c0-4.4-1.7-6.1-6.9-6.1zM253.3 41.7H233l5.2 4.3v40.3h5.2v-13h8.7c7.4 0 10-3.5 10-9.5V51.2c.3-6.5-2.7-9.5-8.8-9.5zm3.9 22.1c0 3.9-4.3 3.9-4.3 3.9h-9.1V46h9.1s4.3 0 4.3 3v14.8zM318.3 55.1c-5.2-1.3-5.2-1.7-5.2-5.2 0-2.6 0-3.9 4.8-3.9h8.7l4.3-4.3h-12.5c-8.2 0-10.8 2.6-10.8 8.2 0 6.5.9 7.8 8.2 10 6.5 1.7 6.5 2.6 6.5 5.2s-5.6 2.6-5.6 2.6h-10.4v5.6h10.8c8.7 0 10.8-2.2 10.8-8.2-.1-6.5-1-7.8-9.6-10z" class="st1"/><path d="m380.2 54.2-3.9-3.9-28.2-28.5-6-6.1V38.6l18.2 18.2-18.2 17.8v22.9l6-6 26-26 6.1-6.1 2.6-2.6z" class="st2"/><path d="m356.4 55.5-16.5-16v6.9l10 9.6.4.8-.4.5-10 9.9v6.5l16.5-16 .8-.9z" class="st3"/><path d="M81.5 74.1 63.3 56l18.2-17.8V15.3L43 53.8 40.8 56l2.2 2.6 38.5 38.5z" class="st2"/><path d="m67.2 55.1-.9.9.9 1.3 16.4 16v-7l-9.9-9.5-.4-.8.4-.5 9.9-9.9v-6.5z" class="st3"/></svg>');
            class u$1 extends d$1 {
                constructor() {
                    super();
                    z(this, "wrapper", document.createElement("div"));
                    z(this, "refreshInterval");
                    z(this, "createAdBox", (e, t, T, a, S, P, R) => {
                        const k = ["width:100%", "height:100%", "position: relative", "display: flex"],
                            _ = ["position: absolute", "top: 0", "left: 0", "border: none", "width:100%", "height:100%", `z-index: ${d-1}`],
                            B = ["border-radius:50%", "background:#fff", "padding:0", "border:none", "position:absolute", "left:0", "width:24px", "height:24px", "min-width:24px", "min-height:24px", "max-width:24px", "max-height:24px", "display:none", "justify-content:center", "align-items:center", "cursor: pointer", "color: #000 !important", `z-index: ${d}`],
                            A = t ? `<iframe data-creative data-adm-ad-id="${this.id}" data-adm-ad-source="party-tag" data-adm-ad-type="masthead" width="${this.data.adData.data.width}px" height="${this.data.adData.data.height}px" scrolling="no" frameBorder="0" allow="autoplay; fullscreen"  referrerpolicy="origin"  style="${_.join(";")}"></iframe>` : T === l.html ? `<div style="position: absolute; height:100%; width:100%; z-index:1;background: rgba(255,255,255,0);"></div><iframe data-creative src="${a}" width="${this.data.adData.data.width}px" height="${this.data.adData.data.height}px" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" style="${_.join(";")}"></iframe>` : `<img data-creative src="${a}" style="${_.join(";")}"/>`;
                        e.innerHTML = `
      <div style="${k.join(";")}">
      <style>
    .${this.id}-admatic_logo_area_span {
      width: 69px !important;
      background: url('data:image/svg+xml;base64,${y$1}') no-repeat scroll left center #fff;
      border-radius: 20px !important;
      box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
      display: block;
      font-size: 14px !important;
      border: 2px solid #fff !important;
      font-weight: bold;
      height: 20px !important;
      line-height: 16px !important;
      font-family: Verdana;
      opacity: 1;
      position: absolute !important;
      right: 0 !important;
      text-decoration: none;
      text-align: center;
      transition: all .5s ease-out 0s;
      box-sizing: border-box;
      z-index: ${d};
    }
    </style>
      ${this.data.adData.data.skip_button?`<button style="${B.join(";")}">${w$1}</button>`:""}
      ${this.data.adData.data.logo?`<span class="${this.id}-admatic_logo_area_span"></span>`:""}
      ${t?"":`<a href="${d$2.clickURL(S,P,R)}" target="_blank" ${T===l.image?'style="display: flex"':""}>`}
        ${A}
      ${t?"":"</a>"}
      </div>`;
                        const Y = e.querySelector('[data-creative][data-adm-ad-source="party-tag"]');
                        Y && (Y.srcdoc = `<style>html,body{margin: 0;padding: 0;width:100%;height:100%;}</style> ${t}`)
                    });
                    z(this, "closeAd", () => {
                        this.wrapper && (this.wrapper.style.opacity = "0", clearInterval(this.refreshInterval), this.sendReport({
                            closed: !0
                        }), this.isRendered = !1, setTimeout(() => {
                            var e;
                            this.wrapper && ((e = this.wrapper) == null || e.remove())
                        }, 300))
                    });
                    z(this, "render", () => U(this, null, function*() {
                        var k, _, B, A, Y;
                        this.wrapper.id = this.id, this.wrapper.style.position = "absolute", this.wrapper.style.width = this.wrapper.style.height = "100%", this.wrapper.style.zIndex = (this.debug ? d - 1 : d).toString();
                        let e = 430,
                            t = 900,
                            T = 240,
                            a = 800;
                        screen.width <= 576 && (e = 250, t = 600, T = 150, a = 600);
                        const S = (document.body || window.parent.document).getElementsByTagName("img");
                        for (const j of Array.from(S)) {
                            try {
                                j.src.startsWith("data:") && j.decode && (yield j.decode())
                            } catch (L) {}
                            if (j.width >= e && j.width <= t && j.height >= T && j.height <= a) {
                                const L = ((k = j.parentElement) == null ? void 0 : k.tagName) === "a" ? j.parentElement : j.closest("a");
                                if (L && ((_ = L.getAttribute("href")) == null ? void 0 : _.match(/\.(jpeg|jpg|gif|png)$/)) == null) continue;
                                (B = j.parentElement) == null || B.insertBefore(this.wrapper, j), j.setAttribute("data-imageplus-ch", "1"), j.parentElement && (j.parentElement.style.position = "relative"), this.wrapper.style.width = `${j.width}px`, this.wrapper.style.height = `${j.height}px`;
                                break
                            }
                        }
                        if (!((Y = (A = this.data) == null ? void 0 : A.adData) != null && Y.data)) return;
                        this.createAdBox(this.wrapper, this.data.adData.data.party_tag, this.data.adData.data.type, this.data.adData.data.url, this.data.adData.data.click_url, this.publisherId, this.data.adData.queryId);
                        const P = this.wrapper.querySelector("[data-creative]");
                        if (P) {
                            let j = 0;
                            P.onloadstart = () => {
                                j = performance.now()
                            }, P.onload = () => {
                                this.sendReport({
                                    creativeLoadTime: performance.now() - j
                                })
                            }
                        }
                        yield this.createIngestPixel({
                            viewRate: -1
                        }), this.seen = !0, this.track(this.wrapper.querySelector("[data-creative]"));
                        const R = this.wrapper.querySelector("button");
                        setTimeout(() => {
                            R && (R.style.display = "flex", R.addEventListener("click", this.closeAd))
                        }, this.data.adData.data.skip_seconds * 1e3), this.isRendered = !0, this.handleInteraction(), this.sendReport({
                            render: !0
                        })
                    }));
                    z(this, "handleInteraction", () => {
                        document.body.contains(this.wrapper) && this.data.adData.data.third_party_impression_code && d$2.appendPartyDom(this.data.adData.data.third_party_impression_code)
                    })
                }
            }
            const o$2 = 2147483647 - 1;
            class v$1 extends d$1 {
                constructor() {
                    super();
                    z(this, "wrapper", document.createElement("div"));
                    z(this, "createAdBox", (e, t, T, a, S, P, R) => {
                        const k = [`width:${this.data.adData.data.width}px`, `height:${Number(this.data.adData.data.height)+50}px`, "margin: auto", "position: relative"],
                            _ = ["margin: auto", "height: 1px", `width: ${this.data.adData.data.width}px`, "transition: height 2s"],
                            B = ["display: flex"],
                            A = ["font-family: 'Helvetica',Arial,sans-serif !important", "font-size: 11.5px !important", "color: #4d4e4f !important", "text-align: center !important", "padding: 1px 0 !important", "height: 26px !important", "line-height: 26px !important", "letter-spacing: .3px !important"],
                            Y = ["font-family: 'Helvetica',Arial,sans-serif !important", "font-size: 11.5px !important", "color: #aaa !important", "text-align: center !important", "text-transform: uppercase !important", "height: 21px !important", "line-height: 21px !important", "font-weight: 300 !important"],
                            j = t ? `<iframe data-creative  data-adm-ad-id="${this.id}" data-adm-ad-source="party-tag" data-adm-ad-type="inpage" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" referrerpolicy="origin"  style="${_.join(";")}"></iframe>` : T === l.html ? `<div style="position: absolute; height:100%; width:100%; z-index:1;background: rgba(255,255,255,0);"></div><iframe data-creative src="${a}" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" style="${_.join(";")}"></iframe>` : `<img data-creative src="${a}" style="${_.join(";")}" />`;
                        e.innerHTML = `
      <div style="${k.join(";")}">
      <div style="${Y.join(";")}">REKLAM</div>
      ${t?"":`<a href="${d$2.clickURL(S,P,R)}" target="_blank" style="${B.join(";")}">`}
        ${j}
      ${t?"":"</a>"}
      <div style="${A.join(";")}">ads by <a href="http://admatic.com.tr" target="_blank" rel="nofollow" style="color: #4d4e4f !important;font-family: 'Helvetica',Arial,sans-serif !important">Ad<span style="color: #ac1a17">M</span>atic</a></div>
      </div>`;
                        const L = e.querySelector('[data-creative][data-adm-ad-source="party-tag"]');
                        L && (L.srcdoc = `<style>html,body{margin: 0;padding: 0;}</style> ${t}`)
                    });
                    z(this, "render", () => U(this, null, function*() {
                        var t;
                        this.wrapper.id = this.id, this.wrapper.style.zIndex = (this.debug ? o$2 - 1 : o$2).toString(), this.wrapper.style.height = `${Number(this.data.adData.data.height)+50}px`, this.wrapper.style.overflow = "hidden", (t = Array.from(document.getElementsByTagName("ins")).find(T => T.matches(".adm-ads-area[data-ad-slot-generated='" + this.data.adData.adSlotID + "']"))) == null || t.appendChild(this.wrapper), document.addEventListener("scroll", () => this.handleInteraction()), document.addEventListener("touchmove", () => this.handleInteraction()), document.body.addEventListener("touchstart", () => this.handleInteraction()), document.body.addEventListener("mousemove", () => this.handleInteraction()), this.createAdBox(this.wrapper, this.data.adData.data.party_tag, this.data.adData.data.type, this.data.adData.data.url, this.data.adData.data.click_url, this.publisherId, this.data.adData.queryId);
                        const e = this.wrapper.querySelector("[data-creative]");
                        if (e) {
                            let T = 0;
                            e.onloadstart = () => {
                                T = performance.now()
                            }, e.onload = () => {
                                this.sendReport({
                                    creativeLoadTime: performance.now() - T
                                })
                            }
                        }
                        this.track(this.wrapper.querySelector("[data-creative]")), this.isRendered = !0, this.sendReport({
                            render: !0
                        })
                    }));
                    z(this, "handleInteraction", () => {
                        const e = this.wrapper.getBoundingClientRect();
                        if (e.top < window.innerHeight && e.bottom >= 0) {
                            const t = this.wrapper.querySelector("[data-creative]");
                            t && t.style.height === "1px" && (t.style.height = `${this.data.adData.data.height}px`, this.data.adData.data.third_party_impression_code && d$2.appendPartyDom(this.data.adData.data.third_party_impression_code), this.isInteracted = !0)
                        }
                    })
                }
            }
            const g = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`,
                o$1 = i$2.maxZIndex - 1;
            class f$1 extends d$1 {
                constructor() {
                    super();
                    z(this, "wrapper", document.createElement("div"));
                    z(this, "createAdBox", (e, t, T, a, S, P, R) => {
                        const k = [`width:${Number(this.data.adData.data.width)+16}px`, `height:${Number(this.data.adData.data.height)+16}px`, "background:#fff", "border-radius:8px", "margin:auto", "padding:8px", "position:relative"],
                            _ = ["border-radius:50%", "background:#fff", "padding:0", "border:none", "position:absolute", "left:-13px", "top:-13px", "width:24px", "height:24px", "min-width:24px", "min-height:24px", "max-width:24px", "max-height:24px", "display:flex", "justify-content:center", "align-items:center", "cursor: pointer", "color: #000 !important"],
                            B = t ? `<iframe data-creative data-adm-ad-id="${this.id}" data-adm-ad-source="party-tag" width="100%" height="100%" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" referrerpolicy="origin"  style="border:none;"></iframe>` : T === l.html ? `<div style="position: absolute; height:100%; width:100%; z-index:1;background: rgba(255,255,255,0);"></div><iframe data-creative src="${a}" width="100%" height="100%" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" style="border:none;"></iframe>` : `<img data-creative src="${a}" style="margin: auto"/>`;
                        e.innerHTML = `
      <style>
      .${this.id}-admatic_logo_area_span {
        width: 20px !important;
        background: url("https://cdn.serve.admatic.com.tr/content/admatic.png") no-repeat scroll left center #fff;
        border-radius: 20px !important;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        cursor: pointer;
        display: block;
        font-size: 14px !important;
        border: 2px solid #fff !important;
        font-weight: bold;
        height: 20px !important;
        line-height: 16px !important;
        font-family: Verdana;
        opacity: 1;
        position: absolute !important;
        right: 5px !important;
        text-decoration: none;
        text-align: center;
        top: -22px !important;
        z-index: 10004;
        transition: all .5s ease-out 0s;
        box-sizing: border-box;
      }
      .${this.id}-admatic_logo_area_span:hover {
        opacity: 1;
        width: 67px !important;
      }
      </style>
      <div style="${k.join(";")}">
      <button style="${_.join(";")}">${g}</button>
      ${this.data.adData.data.logo?`<a href="https://admatic.com.tr/" target="_blank" class="${this.id}-admatic_logo_area_span"></a>`:""}
      ${t?"":`<a href="${d$2.clickURL(S,P,R)}" target="_blank">`}
        ${B}
      ${t?"":"</a>"}
      </div>`;
                        const A = e.querySelector('[data-creative][data-adm-ad-source="party-tag"]');
                        A && (A.srcdoc = `<style>html,body{margin: 0;padding: 0;width:100%;height:100%;}</style> ${t}`, A.addEventListener("load", () => {
                            this.countable = !0
                        }))
                    });
                    z(this, "closeAd", () => {
                        this.wrapper && (this.wrapper.style.opacity = "0", this.sendReport({
                            closed: !0
                        }), this.isRendered = !1, setTimeout(() => {
                            var e;
                            this.wrapper && ((e = this.wrapper) == null || e.remove())
                        }, 300), this.data.isRefreshAd !== !0 && this.afterCloseAd())
                    });
                    z(this, "render", () => U(this, null, function*() {
                        var t;
                        this.wrapper.id = this.id, this.wrapper.style.zIndex = (this.debug ? o$1 - 1 : o$1).toString(), this.wrapper.style.position = "fixed", this.wrapper.style.background = "rgba(0,0,0,0.5)", this.wrapper.style.top = "0", this.wrapper.style.left = "0", this.wrapper.style.right = "0", this.wrapper.style.bottom = "0", this.wrapper.style.width = "100vw", this.wrapper.style.height = "100%", this.wrapper.style.opacity = "0", this.wrapper.style.display = "flex", this.wrapper.style.alignItems = "center", this.wrapper.style.justifyContent = "center", this.wrapper.style.transition = "opacity 260ms ease-out", document.addEventListener("scroll", () => this.handleInteraction()), document.addEventListener("keydown", () => this.handleInteraction()), document.body.addEventListener("click", () => this.handleInteraction()), document.body.addEventListener("touchstart", () => this.handleInteraction()), document.body.addEventListener("mousemove", () => this.handleInteraction()), this.createAdBox(this.wrapper, this.data.adData.data.party_tag, this.data.adData.data.type, this.data.adData.data.url, this.data.adData.data.click_url, this.publisherId, this.data.adData.queryId);
                        const e = this.wrapper.querySelector("[data-creative]");
                        if (e) {
                            let T = 0;
                            e.onloadstart = () => {
                                T = performance.now()
                            }, e.onload = () => {
                                this.sendReport({
                                    creativeLoadTime: performance.now() - T
                                })
                            }
                        }
                        this.isRendered = !0, this.sendReport({
                            render: !0
                        }), (t = this.wrapper.querySelector("button")) == null || t.addEventListener("click", this.closeAd), this.track(this.wrapper.querySelector("div"))
                    }));
                    z(this, "handleInteraction", () => {
                        this.isRendered && !document.body.contains(this.wrapper) && (document.body.appendChild(this.wrapper), this.wrapper && (this.wrapper.style.opacity = "1"), this.data.adData.data.third_party_impression_code && d$2.appendPartyDom(this.data.adData.data.third_party_impression_code)), this.isInteracted = !0
                    });
                    z(this, "afterCloseAd", () => U(this, null, function*() {}))
                }
            }
            const o = i$2.maxZIndex - 2,
                f = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`;
            class y extends d$1 {
                constructor() {
                    super();
                    z(this, "wrapper", document.createElement("div"));
                    z(this, "refreshInterval");
                    z(this, "createAdBox", (e, t, T, a, S, P, R) => {
                        const k = [`width:${this.data.adData.data.width}px`, `height:${this.data.adData.data.height}px`, "margin: 5px auto", "position: relative"],
                            _ = ["border-radius:50%", "background:#fff", "padding:0", "border:none", "position:absolute", "left:0", "width:24px", "height:24px", "min-width:24px", "min-height:24px", "max-width:24px", "max-height:24px", "display:none", "justify-content:center", "align-items:center", "cursor: pointer", "color: #000 !important"],
                            B = t ? `<iframe data-creative data-adm-ad-id="${this.id}" data-adm-ad-source="party-tag" data-adm-ad-type="masthead" width="${this.data.adData.data.width}px" height="${this.data.adData.data.height}px" scrolling="no" frameBorder="0" allow="autoplay; fullscreen"  referrerpolicy="origin"  style="border:none;"></iframe>` : T === l.html ? `<div style="position: absolute; height:100%; width:100%; z-index:1;background: rgba(255,255,255,0);"></div><iframe data-creative src="${a}" width="${this.data.adData.data.width}px" height="${this.data.adData.data.height}px" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" style="border:none;z-index: 2;"></iframe>` : `<img data-creative src="${a}" style="margin: auto"/>`;
                        e.innerHTML = `
      <div style="${k.join(";")}">
      <style>
    .${this.id}-admatic_logo_area_span {
      width: 20px !important;
      background: url("https://cdn.serve.admatic.com.tr/content/admatic.png") no-repeat scroll left center #fff;
      border-radius: 20px !important;
      box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
      cursor: pointer;
      display: block;
      font-size: 14px !important;
      border: 2px solid #fff !important;
      font-weight: bold;
      height: 20px !important;
      line-height: 16px !important;
      font-family: Verdana;
      opacity: 1;
      position: absolute !important;
      right: 0 !important;
      text-decoration: none;
      text-align: center;
      transition: all .5s ease-out 0s;
      box-sizing: border-box;
    }
    .${this.id}-admatic_logo_area_span:hover {
      opacity: 1;
      width: 67px !important;
    }
    </style>
      ${this.data.adData.data.skip_button?`<button style="${_.join(";")}">${f}</button>`:""}
      ${this.data.adData.data.logo?`<a href="https://admatic.com.tr/" target="_blank" class="${this.id}-admatic_logo_area_span"></a>`:""}
      ${t?"":`<a href="${d$2.clickURL(S,P,R)}" target="_blank" ${T===l.image?'style="display: flex"':""}>`}
        ${B}
      ${t?"":"</a>"}
      </div>`;
                        const A = e.querySelector('[data-creative][data-adm-ad-source="party-tag"]');
                        A && (A.srcdoc = `<style>html,body{margin: 0;padding: 0;width:100%;height:100%;}</style> ${t}`)
                    });
                    z(this, "closeAd", () => {
                        this.wrapper && (this.wrapper.style.opacity = "0", clearInterval(this.refreshInterval), this.sendReport({
                            closed: !0
                        }), this.isRendered = !1, setTimeout(() => {
                            var e;
                            this.wrapper && ((e = this.wrapper) == null || e.remove())
                        }, 300))
                    });
                    z(this, "render", () => U(this, null, function*() {
                        this.wrapper.id = this.id, this.wrapper.style.zIndex = (this.debug ? o - 1 : o).toString();
                        const e = Array.from(document.getElementsByTagName("ins")).find(a => a.matches(".adm-ads-area[data-ad-slot-generated='" + this.data.adData.adSlotID + "']"));
                        e && !e.contains(this.wrapper) && (e.appendChild(this.wrapper), this.wrapper && (this.wrapper.style.opacity = "1")), this.createAdBox(this.wrapper, this.data.adData.data.party_tag, this.data.adData.data.type, this.data.adData.data.url, this.data.adData.data.click_url, this.publisherId, this.data.adData.queryId);
                        const t = this.wrapper.querySelector("[data-creative]");
                        if (t) {
                            let a = 0;
                            t.onloadstart = () => {
                                a = performance.now()
                            }, t.onload = () => {
                                this.sendReport({
                                    creativeLoadTime: performance.now() - a
                                })
                            }
                        }
                        yield this.createIngestPixel({
                            viewRate: -1
                        }), this.seen = !0, this.track(this.wrapper.querySelector("[data-creative]"));
                        const T = this.wrapper.querySelector("button");
                        setTimeout(() => {
                            T && (T.style.display = "flex", T.addEventListener("click", this.closeAd))
                        }, this.data.adData.data.skip_seconds * 1e3), this.isRendered = !0, this.handleInteraction(), this.sendReport({
                            render: !0
                        })
                    }));
                    z(this, "handleInteraction", () => {
                        document.body.contains(this.wrapper) && this.data.adData.data.third_party_impression_code && d$2.appendPartyDom(this.data.adData.data.third_party_impression_code)
                    })
                }
            }
            var Name = (D => (D.AdType = "adType", D.BelesVote = "belesVote", D.Browser = "browser", D.CreativeSize = "creativeSize", D.Device = "device", D.ExcludeKeywords = "excludeKeywords", D.ExcludeLocations = "excludeLocations", D.ExcludeWebsites = "excludeWebsites", D.FcapCheck = "fcapCheck", D.IncludeKeywords = "includeKeywords", D.IncludeLocations = "includeLocations", D.IncludeWebsites = "includeWebsites", D.OS = "os", D.RotationCheck = "rotationCheck", D))(Name || {}),
                MIMEType = (D => (D.ApplicationZip = "application/zip", D.ImageJPEG = "image/jpeg", D.ImagePNG = "image/png", D.ImageWebp = "image/webp", D.ClientBidder = "application/client-bidder", D))(MIMEType || {}),
                Type = (D => (D.HTML = "html", D.Image = "image", D))(Type || {}),
                AdPosition = (D => (D.Right = "right", D.Left = "left", D.Top = "top", D.Bottom = "bottom", D))(AdPosition || {});
            const b = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`,
                p$1 = i$2.maxZIndex - 2;
            class v extends d$1 {
                constructor() {
                    super();
                    z(this, "wrapper", document.createElement("div"));
                    z(this, "refreshInterval");
                    z(this, "createAdBox", (e, t, T, a, S, P, R) => {
                        const k = [`width:${Number(this.data.adData.data.width)+8}px`, `height:${Number(this.data.adData.data.height)+8}px`, "background:#fff", "border-radius:4px", "margin:auto", "padding:4px", "position:relative", "background:#fff"],
                            _ = ["border-radius:50%", "background:#fff", "padding:0", "border:none", "position:absolute", "left:-13px", "top:-13px", "width:24px", "height:24px", "min-width:24px", "min-height:24px", "max-width:24px", "max-height:24px", "display:none", "justify-content:center", "align-items:center", "cursor: pointer", "color: #000 !important"],
                            B = t ? `<iframe data-creative data-adm-ad-id="${this.id}" data-adm-ad-source="party-tag" data-adm-ad-type="scrollad" width="100%" height="100%" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" referrerpolicy="origin"  style="border:none;"></iframe>` : T === l.html ? `<div style="position: absolute; height:100%; width:100%; z-index:1;background: rgba(255,255,255,0);"></div><iframe data-creative src="${a}" width="100%" height="100%" scrolling="no" frameBorder="0" allow="autoplay; fullscreen" style="border:none;"></iframe>` : `<img data-creative src="${a}" style="margin: auto"/>`;
                        e.innerHTML = `
    <style>
    .${this.id}-admatic_logo_area_span {
      width: 20px !important;
      background: url("https://cdn.serve.admatic.com.tr/content/admatic.png") no-repeat scroll left center #fff;
      border-radius: 20px !important;
      box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
      cursor: pointer;
      display: block;
      font-size: 14px !important;
      border: 2px solid #fff !important;
      font-weight: bold;
      height: 20px !important;
      line-height: 16px !important;
      font-family: Verdana;
      opacity: 1;
      position: absolute !important;
      right: 5px !important;
      text-decoration: none;
      text-align: center;
      top: -22px !important;
      z-index: 10004;
      transition: all .5s ease-out 0s;
      box-sizing: border-box;
    }
    .${this.id}-admatic_logo_area_span:hover {
      opacity: 1;
      width: 67px !important;
    }
    </style>
      <div style="${k.join(";")}">
      <button style="${_.join(";")}">${b}</button>
      ${this.data.adData.data.logo?`<a href="https://admatic.com.tr/" target="_blank" class="${this.id}-admatic_logo_area_span"></a>`:""}
      ${t?"":`<a href="${d$2.clickURL(S,P,R)}" target="_blank">`}
        ${B}
      ${t?"":"</a>"}
      </div>`;
                        const A = e.querySelector('[data-creative][data-adm-ad-source="party-tag"]');
                        A && (A.srcdoc = `<style>html,body{margin: 0;padding: 0;width:100%;height:100%;}</style> ${t}`)
                    });
                    z(this, "closeAd", () => {
                        this.wrapper && (this.wrapper.style.opacity = "0", clearInterval(this.refreshInterval), this.sendReport({
                            closed: !0
                        }), this.isRendered = !1, setTimeout(() => {
                            var e;
                            this.wrapper && ((e = this.wrapper) == null || e.remove())
                        }, 300))
                    });
                    z(this, "render", () => U(this, null, function*() {
                        if (this.data.adData.data === void 0 || this.data.adData.data === null) return;
                        this.wrapper.id = this.id, this.wrapper.style.zIndex = (this.debug ? p$1 - 1 : p$1).toString(), this.wrapper.style.position = "fixed", this.data.adData.data.scroll_ad_position === AdPosition.Left ? this.wrapper.style.left = "13px" : this.wrapper.style.right = "0", this.wrapper.style.bottom = "0", this.data.isRefreshAd !== !0 && (this.wrapper.style.opacity = "0"), this.wrapper.style.display = "flex", this.wrapper.style.background = "#fff", this.wrapper.style.transition = "opacity 260ms ease-out", document.addEventListener("scroll", () => this.handleInteraction()), document.addEventListener("touchmove", () => this.handleInteraction()), document.addEventListener("keydown", () => this.handleInteraction()), document.body.addEventListener("click", () => this.handleInteraction()), document.body.addEventListener("touchstart", () => this.handleInteraction()), document.body.addEventListener("mousemove", () => this.handleInteraction()), this.createAdBox(this.wrapper, this.data.adData.data.party_tag, this.data.adData.data.type, this.data.adData.data.url, this.data.adData.data.click_url, this.publisherId, this.data.adData.queryId);
                        const e = this.wrapper.querySelector("[data-creative]");
                        if (e) {
                            let t = 0;
                            e.onloadstart = () => {
                                t = performance.now()
                            }, e.onload = () => {
                                this.sendReport({
                                    creativeLoadTime: performance.now() - t
                                })
                            }
                        }
                        if (this.isRendered = !0, this.sendReport({
                                render: !0
                            }), this.track(this.wrapper.querySelector("div")), this.data.isRefreshAd !== !0 && this.data.adData.data.refresh) this.refreshAd(u);
                        else {
                            const t = this.wrapper.querySelector("button");
                            setTimeout(() => {
                                t && (t.style.display = "flex", t.addEventListener("click", this.closeAd))
                            }, this.data.adData.data.skip_seconds * 1e3), this.seen = !0
                        }
                    }));
                    z(this, "handleInteraction", () => {
                        if (this.isRendered && !document.body.contains(this.wrapper)) {
                            document.body.appendChild(this.wrapper), this.wrapper && (this.wrapper.style.opacity = "1");
                            const e = this.wrapper.querySelector("button");
                            setTimeout(() => {
                                e && (e.style.display = "flex", e.addEventListener("click", this.closeAd))
                            }, this.data.adData.data.skip_seconds * 1e3), this.data.adData.data.third_party_impression_code && d$2.appendPartyDom(this.data.adData.data.third_party_impression_code), this.isInteracted = !0
                        }
                    });
                    z(this, "refreshAd", e => {
                        let t = 3;
                        this.refreshInterval = setInterval(() => U(this, null, function*() {
                            var T, a;
                            if (document.body.contains(this.wrapper) && window.clientBidderReturned != !0) {
                                const S = "scrollad",
                                    P = new URLSearchParams(location.search),
                                    R = yield d$2.fetchAds(i$1, {
                                        "x-adtype": c[S],
                                        "x-campaignID": P.get("campaign_id") || "",
                                        "x-elementID": P.get("element_id") || "",
                                        "x-creativeID": P.get("creative_id") || "",
                                        "x-publisherID": window.publisherId || "",
                                        "x-refresh": !0
                                    });
                                if (((T = R == null ? void 0 : R.data) == null ? void 0 : T.length) > 0) {
                                    for (const k of R.data)
                                        if (((a = k.ad_type) == null ? void 0 : a.toString()) === c[S]) {
                                            const _ = this;
                                            _.setData({
                                                adData: {
                                                    data: k,
                                                    queryId: R.queryId,
                                                    status: R.status
                                                },
                                                isRefreshAd: !0
                                            }), _.sendReport({
                                                render: !1
                                            }), _.setReady()
                                        }
                                }
                                t--, t === 0 && clearInterval(this.refreshInterval)
                            }
                        }), e)
                    })
                }
            }
            class l {}
            z(l, "html", "html"), z(l, "image", "image");
            const i$1 = "https://query.serve.admatic.com.tr",
                n = {
                    9: f$1,
                    10: v,
                    11: i$2,
                    12: y,
                    13: b$1,
                    14: v$1,
                    17: u$1
                },
                c = {
                    interstitial: "9",
                    scrollad: "10",
                    fullpage: "11",
                    masthead: "12",
                    footerad: "13",
                    inpage: "14",
                    imageplus: "17",
                    unknown: ""
                },
                p = {
                    536142374: "9",
                    778130932: "10",
                    861232397: "11",
                    421305892: "12",
                    821116369: "13",
                    995718032: "14",
                    295462127: "17",
                    unknown: ""
                },
                u = 2e4;
            let i = [],
                m = function() {
                    return U(this, null, function*() {
                        var a, S, P;
                        document.body.insertAdjacentHTML("beforeend", d$2.getAdmaticImpressionDom()), U(this, null, function*() {
                            window.ingestQueue = window.ingestQueue || [];
                            let R = [];
                            setInterval(() => U(this, null, function*() {
                                if (window.ingestQueue.length > 0 && R.length == 0) {
                                    R = window.ingestQueue, window.ingestQueue = [];
                                    for (const k of R) k.data.viewRate > 0 && (k.ingestWorker(k.data), R = R.filter(_ => _ !== k));
                                    for (const k of R) yield k.ingestWorker(k.data), R = R.filter(_ => _ !== k)
                                }
                            }), 100)
                        }), window.publisherId = ((a = document.querySelector("script[pub_id]")) == null ? void 0 : a.getAttribute("pub_id")) || ((S = document.querySelector("ins[pub_id]")) == null ? void 0 : S.getAttribute("pub_id")) || ((P = document.querySelector("ins[data-ad-network]")) == null ? void 0 : P.getAttribute("data-ad-network"));
                        const D = new URLSearchParams(location.search),
                            I = (D.get("ad_type") || "unknown").toLowerCase(),
                            e = () => {
                                document.querySelectorAll("ins.adm-ads-area[data-ad-type][data-ad-type-id]").forEach(R => {
                                    console.warn("Admatic: Wrong placement found. Please don't use both data-ad-type and data-ad-type-id attributes."), R.remove()
                                }), document.querySelectorAll("ins.adm-ads-area[data-ad-type-id]").forEach(R => {
                                    R.getAttribute("data-ad-type-id") || "" in p || (console.warn(`Admatic: data-ad-type-id ${R.getAttribute("data-ad-type-id")} is not supported!`), R.remove())
                                }), document.querySelectorAll("ins.adm-ads-area[data-ad-type]").forEach(R => {
                                    R.getAttribute("data-ad-type") || "" in c || (console.warn(`Admatic: data-ad-type ${R.getAttribute("data-ad-type")} is not supported!`), R.remove())
                                }), document.querySelectorAll("ins.adm-ads-area:not([data-ad-type]):not([data-ad-type-id])").forEach(R => {
                                    (R.getAttribute("loaded") == null || R.getAttribute("loaded") == "") && R.setAttribute("loaded", "true"), document.querySelectorAll('ins.adm-ads-area:not([data-ad-type]):not([data-ad-type-id])[loaded="true"]').length > 1 && (console.warn("Admatic: Duplicate core placement found. Please remove one of them."), R.remove())
                                }), document.querySelectorAll("ins.adm-ads-area[data-ad-type]:not([data-ad-type='inpage']):not([data-ad-type='masthead'])").forEach(R => {
                                    document.querySelectorAll(`ins.adm-ads-area[data-ad-type='${R.getAttribute("data-ad-type")}']:not([data-ad-type='inpage']):not([data-ad-type='masthead'])`).length > 1 && (console.warn(`Admatic: Duplicate ${R.getAttribute("data-ad-type")} placement found. Please remove one of them.`), R.remove())
                                }), document.querySelectorAll("ins.adm-ads-area[data-ad-type-id]:not([data-ad-type-id='995718032']):not([data-ad-type-id='421305892'])").forEach(R => {
                                    document.querySelectorAll(`ins.adm-ads-area[data-ad-type-id='${R.getAttribute("data-ad-type-id")}']:not([data-ad-type-id='995718032']):not([data-ad-type-id='421305892'])`).length > 1 && (console.warn(`Admatic: Duplicate ${R.getAttribute("data-ad-type-id")} placement found. Please remove one of them.`), R.remove())
                                })
                            },
                            t = () => U(this, null, function*() {
                                e();
                                const R = document.querySelectorAll("ins.adm-ads-area[data-element-id]:not([r]):not([data-ad-type]):not([data-ad-type-id])");
                                (I == "unknown" || I == "campaign") && R.forEach(k => U(this, null, function*() {
                                    var B;
                                    (k.getAttribute("data-ad-slot-generated") == null || k.getAttribute("data-ad-slot-generated") == "") && k.setAttribute("data-ad-slot-generated", Math.random().toString(36).slice(2, 7)), k.setAttribute("r", "1");
                                    const _ = yield d$2.fetchAds(i$1, {
                                        "x-elementID": D.get("element_id") || k.getAttribute("data-element-id") || "",
                                        "x-publisherID": window.publisherId || "",
                                        "debug-tag": k.outerHTML || ""
                                    });
                                    if (((B = _ == null ? void 0 : _.data) == null ? void 0 : B.length) > 0)
                                        for (const A of _.data) {
                                            const Y = n[A.ad_type];
                                            if (Y && !i.includes(A.ad_type)) {
                                                const j = new Y;
                                                j.setData({
                                                    adData: {
                                                        data: A,
                                                        adSlotID: k.getAttribute("data-ad-slot-generated") || "",
                                                        queryId: _.queryId,
                                                        status: _.status
                                                    },
                                                    isRefreshAd: window.clientBidderReturned
                                                }), j.sendReport({
                                                    render: !1
                                                }), j.setReady(), i.push(A.ad_type)
                                            }
                                        }
                                }))
                            });
                        t(), new MutationObserver(R => U(this, null, function*() {
                            for (const k of R)
                                for (const _ of Array.from(k.addedNodes)) {
                                    const B = _;
                                    B.tagName == "INS" && B.classList.contains("adm-ads-area") && (B.getAttribute("data-ad-type") != "inpage" && B.getAttribute("data-ad-type") != "masthead" && B.getAttribute("data-ad-type-id") != "995718032" && B.getAttribute("data-ad-type-id") != "421305892" ? t() : T())
                                }
                        })).observe(document, {
                            childList: !0,
                            subtree: !0
                        });
                        const T = () => U(this, null, function*() {
                            e();
                            const R = Array.from(document.getElementsByTagName("ins")).filter(k => k.matches(".adm-ads-area:not([data-element-id]):not([r])"));
                            (I == "unknown" || I == "campaign") && R.forEach(k => U(this, null, function*() {
                                var B;
                                (k.getAttribute("data-ad-type-id") != null && k.getAttribute("data-ad-type-id") != "" || k.getAttribute("data-ad-type") != null && k.getAttribute("data-ad-type") != "") && (k.getAttribute("data-ad-slot-generated") == null || k.getAttribute("data-ad-slot-generated") == "") && k.setAttribute("data-ad-slot-generated", Math.random().toString(36).slice(2, 7)), k.setAttribute("r", "1");
                                const _ = yield d$2.fetchAds(i$1, {
                                    "x-adtype": p[(k == null ? void 0 : k.getAttribute("data-ad-type-id")) || ""] || c[(k == null ? void 0 : k.getAttribute("data-ad-type")) || ""],
                                    "x-publisherID": window.publisherId || "",
                                    "x-adSlotID": k.getAttribute("data-ad-slot-generated") || "",
                                    "debug-tag": k.outerHTML || ""
                                });
                                if (((B = _ == null ? void 0 : _.data) == null ? void 0 : B.length) > 0)
                                    for (const A of _.data) n[A.ad_type] && !i.includes(A.ad_type) && (w({
                                        adData: {
                                            data: A,
                                            queryId: _.queryId,
                                            status: _.status,
                                            adSlotID: k.getAttribute("data-ad-slot-generated") || ""
                                        },
                                        isRefreshAd: window.clientBidderReturned
                                    }), A.ad_type.toString() != c.inpage && i.push(A.ad_type))
                            }))
                        });
                        if (T(), document.addEventListener("DOMNodeInserted", R => U(this, null, function*() {
                                const k = R.target;
                                k.tagName == "INS" && k.classList.contains("adm-ads-area") && T()
                            })), ["true", "yes", "enable"].includes(D.get("debug")) || D.get("x-debug") === "true") {
                            let R = document.createElement("script");
                            R.type = "module", R.src = "https://query.serve.admatic.com.tr/devtools/debug-ui.es.js", document.head.appendChild(R)
                        }
                    })
                },
                h = function() {
                    return U(this, null, function*() {
                        U(this, null, function*() {
                            let D = localStorage.getItem("cst_cookie");
                            if (D) m();
                            else {
                                let I = document.createElement("iframe");
                                I.id = "cst", I.src = "https://ingest.serve.admatic.com.tr/cst", I.style.display = "none", window.document.body.appendChild(I), window.addEventListener("message", e => {
                                    var t;
                                    D == null && ((t = e.data) == null ? void 0 : t.cst_cookie) != null && (localStorage.setItem("cst_cookie", e.data.cst_cookie), m())
                                }, !1), setTimeout(() => {
                                    localStorage.getItem("cst_cookie") == null && (localStorage.setItem("cst_cookie", d$2.uuidv4()), m())
                                }, 3e3)
                            }
                        })
                    })
                };
            h();
            const w = D => {
                const I = n[D.adData.data.ad_type],
                    e = new I;
                e.setData(D), e.sendReport({
                    render: !1
                }), e.setReady()
            };;
            console.info(`%c AdMatic: v0aa6be78 | (c) AdMatic Medya A.S. | Last rv: 15.12.2022, 07:41 `, 'background: #ad1b19; color: #fff');
        })();
    } else {
        console.warn("Admatic: ADM already loaded")
    }
}
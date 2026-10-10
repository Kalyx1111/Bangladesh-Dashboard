
(function(){
  "use strict";

  const PROJ = {"scale": 5715.175104960446, "translate": [-8362.288079879856, 2814.0091525742273], "width": 1300, "height": 760};
  const HEADING_KEYS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "econ", "mss", "social", "wellbeing", "hazard"];
  const SEED_DATA = {"updated_at": "offline-snapshot", "items_by_category": {"naval": [{"category": "naval", "label": "Two Chinese-built submarines received by the Navy (December 2016)", "text": "The Bangladesh Navy received two China-made submarines in December 2016. They were commissioned as BNS Nabajatra and BNS Joyjatra. They are conventional diesel-electric boats, 76 metres long, equipped with torpedoes and mines.", "source": "The Daily Star; BenarNews", "date": "Dec 2016", "url": null, "connector": "reference"}, {"category": "naval", "label": "Pekua submarine base inaugurated (March 2023)", "text": "The Pekua submarine base, near the Kutubdia channel in the Bay of Bengal, was inaugurated in March 2023. It is Bangladesh's first full submarine base. It cost about US$1.21 billion and can accommodate six submarines and eight warships. Before it was built, the submarines were housed at a Chattogram naval base.", "source": "BenarNews (Mar 2023); Wikipedia (BNS Pekua)", "date": "Mar 2023", "url": null, "connector": "reference"}], "arms": [{"category": "arms", "label": "Rooppur unit 1 cleared to start controlled fission (8 October 2026)", "text": "Fuel loading into Rooppur unit 1 began on 28 April 2026. On 8 October 2026 the Bangladesh Atomic Energy Regulatory Authority cleared the unit to begin controlled fission, the step before first criticality. Grid power is expected months later. Unit 2 is planned for 2027.", "source": "New Age (8 Oct 2026); Prothom Alo (28 Apr 2026)", "date": "Apr-Oct 2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Army-owned defence industries in Gazipur, Narayanganj and Chattogram", "text": "Bangladesh Ordnance Factories, founded in 1970 at Gazipur, makes arms and ammunition. The Bangladesh Machine Tools Factory and the Bangladesh Diesel Plant are also Army-owned. Khulna Shipyard, Chattogram Dry Dock and the Dockyard and Engineering Works in Narayanganj are military-owned or navy-managed.", "source": "Wikipedia; New Age; Bangladesh Steel and Engineering Corporation", "date": "ongoing", "url": null, "connector": "reference"}], "air": [{"category": "air", "label": "Air Force drone plant planned with China (November 2025)", "text": "The Business Standard reported in November 2025 that the Bangladesh Air Force is setting up a drone manufacturing plant in a joint venture with China, with technology transfer. The plant's site has not been published, so the dashboard does not plot it.", "source": "The Business Standard (1 Nov 2025)", "date": "Nov 2025", "url": null, "connector": "reference"}, {"category": "air", "label": "Air Force bases (Bashar, Kurmitola, Chattogram, Cox's Bazar, Jessore)", "text": "The Air Force's bases include BAF Base Bashar (Tejgaon, Dhaka: transport and helicopters), BAF Base Bir Uttom A.K. Khandker (Kurmitola, Dhaka: fighters; formerly Bangabandhu and renamed on 9 March 2025), BAF Base Zahurul Haque (Chattogram), BAF Base Cox's Bazar and BAF Base Matiur Rahman (Jessore).", "source": "Wikipedia; Bangladesh Air Force", "date": "2025", "url": null, "connector": "reference"}], "mss": [{"category": "mss", "label": "Chittagong Hill Tracts conflict: second phase since October 2022", "text": "The first phase ran from 1977 to the Chittagong Hill Tracts Peace Accord of 2 December 1997. A second phase began on 20 October 2022, and Wikipedia records it as ongoing. Clashes with the Kuki-Chin National Front and infighting between the UPDF and the JSS have been reported.", "source": "Wikipedia (CHT conflict; Kuki-Chin National Front)", "date": "1977 - present", "url": null, "connector": "reference"}, {"category": "mss", "label": "Khagrachhari clashes and blockade (23-30 September 2025)", "text": "Clashes, road blockades and strikes in Khagrachhari district followed the reported rape of an indigenous schoolgirl in mid-September 2025. Several reports describe communal violence between indigenous and Bengali settler communities.", "source": "Wikipedia (2025 Khagrachhari clashes); The Daily Star", "date": "Sep 2025", "url": null, "connector": "reference"}, {"category": "mss", "label": "UPDF youth leader reported killed in Rangamati (17 April 2026)", "text": "A UPDF youth wing vice-president was reported killed in Rangamati Sadar on 17 April 2026. The UPDF blamed members of the Jana Samhati Samiti. Both groups deny maintaining an armed wing.", "source": "Wikipedia (UPDF); TBS News; UNB", "date": "Apr 2026", "url": null, "connector": "reference"}], "milops": [{"category": "milops", "label": "Army divisions and cantonments (published list)", "text": "The Army's infantry divisions are the 9th (Savar), 11th (Bogra), 19th (Ghatail), 24th (Chattogram), 33rd (Comilla), 55th (Jessore), 66th (Rangpur) and 10th (Ramu, formed 2015). The Army's published list gives the cantonment towns; the coordinates are approximate.", "source": "Bangladesh Army cantonment list; Wikipedia (list of formations)", "date": "2015 onward", "url": null, "connector": "reference"}], "social": [{"category": "social", "label": "Rohingya population in Bangladesh (UNHCR reporting)", "text": "UNHCR reporting puts the Rohingya population in Bangladesh at about one million, most of them in the Cox's Bazar camps. Conditions and figures are reported and contested.", "source": "UNHCR (reported)", "date": "ongoing since 2017", "url": null, "connector": "reference"}], "scs": [{"category": "scs", "label": "Bangladesh-Myanmar maritime boundary settled by the ICJ (March 2012)", "text": "The International Court of Justice drew the maritime boundary between Bangladesh and Myanmar in the Bay of Bengal in its March 2012 judgment.", "source": "International Court of Justice judgment", "date": "Mar 2012", "url": null, "connector": "reference"}], "wellbeing": [{"category": "wellbeing", "label": "World Happiness Report 2026: Bangladesh ranks above India", "text": "India ranked 116th in the 2026 World Happiness Report, behind Pakistan and Bangladesh. Bangladesh's exact rank was not verified in this build.", "source": "Deccan Herald (reporting on WHR 2026)", "date": "Mar 2026", "url": null, "connector": "reference"}]}, "markers": [{"id": "dhaka", "name": "Dhaka", "lat": 23.8103, "lon": 90.4125, "cat": "capital", "note": "Capital of Bangladesh. Army headquarters at Dhaka Cantonment; Air Headquarters also in Dhaka Cantonment.", "source": "-", "date": "", "linked_items": []}, {"id": "div_9", "name": "9th Infantry Division (Savar)", "lat": 23.86, "lon": 90.26, "cat": "division", "note": "Garrisoned at Savar Cantonment (Dhaka district). Location approximate (cantonment town).", "source": "Bangladesh Army formations (Wikipedia list); approximate", "date": "", "linked_items": []}, {"id": "div_11", "name": "11th Infantry Division (Bogra)", "lat": 24.77, "lon": 89.37, "cat": "division", "note": "Based at Bogra (Majhira) Cantonment. Armoured Corps Centre and School and NCO Academy are also here. Location approximate.", "source": "Bangladesh Army formations (Wikipedia); approximate", "date": "", "linked_items": []}, {"id": "div_19", "name": "19th Infantry Division (Ghatail)", "lat": 24.2, "lon": 90.0, "cat": "division", "note": "Based at Ghatail (Shahid Salahuddin) Cantonment, Tangail. Location approximate.", "source": "Bangladesh Army formations (Wikipedia); approximate", "date": "", "linked_items": []}, {"id": "div_24", "name": "24th Infantry Division (Chattogram)", "lat": 22.35, "lon": 91.8, "cat": "division", "note": "Based at Chattogram Cantonment, with brigades in the Hill Tracts (Kaptai and Rangamati). Location approximate.", "source": "Bangladesh Army formations (Wikipedia); approximate", "date": "", "linked_items": []}, {"id": "div_33", "name": "33rd Infantry Division (Comilla)", "lat": 23.47, "lon": 91.19, "cat": "division", "note": "Based at Comilla (Moynamoti) Cantonment. Location approximate.", "source": "Bangladesh Army formations (Wikipedia); approximate", "date": "", "linked_items": []}, {"id": "div_55", "name": "55th Infantry Division (Jessore)", "lat": 23.17, "lon": 89.21, "cat": "division", "note": "Based at Jessore Cantonment (Jahanabad Cantonment is in Khulna district). Location approximate.", "source": "Bangladesh Army formations (Wikipedia); approximate", "date": "", "linked_items": []}, {"id": "div_66", "name": "66th Infantry Division (Rangpur)", "lat": 25.74, "lon": 89.25, "cat": "division", "note": "Based at Rangpur Cantonment; the artillery brigade is at Kholahati. Location approximate.", "source": "Bangladesh Army formations (Wikipedia); approximate", "date": "", "linked_items": []}, {"id": "div_10", "name": "10th Infantry Division (Ramu, Cox's Bazar)", "lat": 21.43, "lon": 92.09, "cat": "division", "note": "Formed in 2015 and headquartered at Ramu Cantonment. Location approximate.", "source": "Bangladesh Army formations (Wikipedia); approximate", "date": "", "linked_items": []}, {"id": "can_dhaka", "name": "Dhaka Cantonment (Army HQ)", "lat": 23.805, "lon": 90.4, "cat": "cantonment", "note": "Bangladesh Army headquarters and Air Force headquarters are in Dhaka Cantonment. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_mirpur", "name": "Mirpur Cantonment", "lat": 23.808, "lon": 90.366, "cat": "cantonment", "note": "Dhaka. Air defence artillery brigade (Wikipedia). Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_postogola", "name": "Postogola Cantonment", "lat": 23.745, "lon": 90.445, "cat": "cantonment", "note": "Dhaka. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_savar", "name": "Savar Cantonment", "lat": 23.86, "lon": 90.26, "cat": "cantonment", "note": "Garrison of the 9th Infantry Division. Location approximate.", "source": "Bangladesh Army cantonment list; Wikipedia; approximate", "date": "", "linked_items": []}, {"id": "can_mymensingh", "name": "Mymensingh Cantonment", "lat": 24.753, "lon": 90.407, "cat": "cantonment", "note": "Location approximate (town).", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_ghatail", "name": "Ghatail (Shahid Salahuddin) Cantonment", "lat": 24.2, "lon": 90.0, "cat": "cantonment", "note": "Garrison of the 19th Infantry Division. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_rajendrapur", "name": "Rajendrapur Cantonment (Gazipur)", "lat": 24.08, "lon": 90.4, "cat": "cantonment", "note": "Gazipur district, near the arms and machine tool factories. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_bogra", "name": "Bogra (Majhira) Cantonment", "lat": 24.77, "lon": 89.37, "cat": "cantonment", "note": "About 10 km south of Bogra; 11th Infantry Division. Location approximate.", "source": "Bangladesh Army cantonment list; Wikipedia; approximate", "date": "", "linked_items": []}, {"id": "can_jahangirabad", "name": "Jahangirabad Cantonment (Bogra)", "lat": 24.805, "lon": 89.345, "cat": "cantonment", "note": "Bogra district. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_rangpur", "name": "Rangpur Cantonment", "lat": 25.74, "lon": 89.25, "cat": "cantonment", "note": "Garrison of the 66th Infantry Division. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_kholahati", "name": "Kholahati (Bir Uttom Shaheed Mahbub) Cantonment", "lat": 25.6519, "lon": 88.9833, "cat": "cantonment", "note": "Parbatipur, Dinajpur district. Headquarters of the 66th Artillery Brigade and 16th Infantry Brigade. Coordinates verified (Wikipedia).", "source": "Wikipedia (verified coordinates)", "date": "", "linked_items": []}, {"id": "can_natore", "name": "Qadirabad Cantonment (Natore)", "lat": 24.42, "lon": 88.98, "cat": "cantonment", "note": "Natore district. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_rajshahi", "name": "Rajshahi Cantonment", "lat": 24.3745, "lon": 88.601, "cat": "cantonment", "note": "Location approximate (city).", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_jessore", "name": "Jessore Cantonment", "lat": 23.17, "lon": 89.21, "cat": "cantonment", "note": "Location approximate (city). Area command for the 55th Infantry Division.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_jahanabad", "name": "Jahanabad Cantonment (Khulna)", "lat": 22.82, "lon": 89.54, "cat": "cantonment", "note": "Khulna district. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_comilla", "name": "Comilla (Moynamoti) Cantonment", "lat": 23.46, "lon": 91.19, "cat": "cantonment", "note": "Garrison of the 33rd Infantry Division. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_sylhet", "name": "Jalalabad (Sylhet) Cantonment", "lat": 24.895, "lon": 91.87, "cat": "cantonment", "note": "Location approximate (city).", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_chattogram", "name": "Chattogram Cantonment (BMA, Bhatiary, Halishahar)", "lat": 22.33, "lon": 91.81, "cat": "cantonment", "note": "Garrison of the 24th Infantry Division; Bangladesh Military Academy is in the cantonment. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_bandarban", "name": "Bandarban Cantonment (Chittagong Hill Tracts)", "lat": 22.195, "lon": 92.22, "cat": "cantonment", "note": "One of the Hill Tracts cantonments. Location approximate (town).", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_khagrachhari", "name": "Khagrachhari Cantonment (Chittagong Hill Tracts)", "lat": 23.119, "lon": 91.984, "cat": "cantonment", "note": "One of the Hill Tracts cantonments. Location approximate (town).", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_rangamati", "name": "Rangamati Cantonment (Chittagong Hill Tracts)", "lat": 22.65, "lon": 92.17, "cat": "cantonment", "note": "305th Infantry Brigade, under the 24th Infantry Division. Coordinates verified (Wikipedia: 22°39′N 92°10′E).", "source": "Wikipedia (verified coordinates)", "date": "", "linked_items": []}, {"id": "can_dighinala", "name": "Dighinala Cantonment (Chittagong Hill Tracts)", "lat": 23.305, "lon": 92.06, "cat": "cantonment", "note": "Khagrachhari district, Hill Tracts. Location approximate.", "source": "Bangladesh Army cantonment list; approximate", "date": "", "linked_items": []}, {"id": "can_kaptai", "name": "Kaptai Cantonment (Chittagong Hill Tracts)", "lat": 22.507, "lon": 92.242, "cat": "cantonment", "note": "Rangamati district, on the Kaptai lake. Location approximate.", "source": "Bangladesh Army cantonment list; Wikipedia; approximate", "date": "", "linked_items": []}, {"id": "can_alikadam", "name": "Alikadam Cantonment (Bandarban district)", "lat": 21.92, "lon": 92.4, "cat": "cantonment", "note": "Garrison of the 97th Infantry Brigade under the 10th Infantry Division. Location approximate (district).", "source": "Bangladesh Army cantonment list; Wikipedia; approximate", "date": "", "linked_items": []}, {"id": "can_ramu", "name": "Ramu Cantonment (Cox's Bazar)", "lat": 21.43, "lon": 92.09, "cat": "cantonment", "note": "Headquarters of the 10th Infantry Division. Location approximate.", "source": "Bangladesh Army cantonment list; Wikipedia; approximate", "date": "", "linked_items": []}, {"id": "baf_bashar", "name": "BAF Base Bashar (Tejgaon, Dhaka)", "lat": 23.7785, "lon": 90.3827, "cat": "air_base", "note": "Air Force base (ICAO VGTJ) for transport and helicopters. The Army also uses it. Coordinates from OurAirports.", "source": "OurAirports (CC0); Wikipedia; Bangladesh Air Force", "date": "", "linked_items": []}, {"id": "baf_kurmitola", "name": "BAF Base Bir Uttom A.K. Khandker (Kurmitola, Dhaka)", "lat": 23.8243, "lon": 90.4, "cat": "air_base", "note": "Air Force base for fighters, formerly BAF Base Bangabandhu, renamed 9 March 2025. Next to Hazrat Shahjalal airport. Location approximate.", "source": "Wikipedia; TBS News (renamed 2025); approximate", "date": "", "linked_items": []}, {"id": "baf_zahurul", "name": "BAF Base Zahurul Haque (Patenga, Chattogram)", "lat": 22.2496, "lon": 91.8133, "cat": "air_base", "note": "Air Force base (ICAO VGEG, shared with Shah Amanat airport). Yak-130, F-7MB and helicopters. Coordinates from OurAirports.", "source": "OurAirports (CC0); Wikipedia; Bangladesh Air Force", "date": "", "linked_items": []}, {"id": "baf_coxsbazar", "name": "BAF Base Cox's Bazar", "lat": 21.4575, "lon": 91.9633, "cat": "air_base", "note": "Air Force base beside Cox's Bazar airport (ICAO VBCX). Plotted at the airport position; the base's exact position is not published.", "source": "Wikipedia; OurAirports (airport position)", "date": "", "linked_items": []}, {"id": "baf_matiur", "name": "BAF Base Matiur Rahman (Jessore)", "lat": 23.1838, "lon": 89.1608, "cat": "air_base", "note": "Air Force base at Jessore, co-located with the Jessore airport (public information). Coordinates from OurAirports (Jessore airport).", "source": "Bangladesh Air Force (public information); OurAirports", "date": "", "linked_items": []}, {"id": "baf_lalmonirhat", "name": "Lalmonirhat airfield (Air Force base)", "lat": 25.8876, "lon": 89.4313, "cat": "air_base", "note": "Listed among Bangladesh Air Force bases (Wikipedia category). Coordinates from OurAirports.", "source": "Wikipedia category; OurAirports", "date": "", "linked_items": []}, {"id": "pekua_sub", "name": "BNS Pekua submarine base", "lat": 21.65, "lon": 91.95, "cat": "submarine_base", "note": "Bangladesh's first full submarine base, on the Bay of Bengal near the Kutubdia channel. Inaugurated March 2023. Cost about US$1.21 billion; accommodates six submarines and eight warships. Home to the two Chinese-built submarines received in December 2016. Location approximate.", "source": "BenarNews (Mar 2023); Wikipedia (BNS Pekua); The Daily Star", "date": "", "linked_items": []}, {"id": "navy_chattogram", "name": "Chattogram Naval Area (COMCHIT)", "lat": 22.33, "lon": 91.8, "cat": "navy_base", "note": "Bangladesh Navy's Chattogram Naval Area command, which also oversees the submarine squadron. Location approximate (city).", "source": "Wikipedia (Bangladesh Navy officer records); approximate", "date": "", "linked_items": []}, {"id": "ind_ordnance", "name": "Bangladesh Ordnance Factories (Gazipur)", "lat": 23.99, "lon": 90.42, "cat": "defense_industry", "note": "Army-owned arms and ammunition factory at Gazipur Cantonment, founded 1970, about 50 km from Dhaka. Makes rifles, machine guns, grenades and artillery ammunition. Location approximate.", "source": "Wikipedia; New Age; approximate", "date": "", "linked_items": []}, {"id": "ind_bmtf", "name": "Bangladesh Machine Tools Factory (Gazipur)", "lat": 24.0, "lon": 90.4, "cat": "defense_industry", "note": "Army-managed state company at Gazipur, about 40 km from Dhaka. Also makes civilian products. Location approximate.", "source": "Wikipedia; New Age; approximate", "date": "", "linked_items": []}, {"id": "ind_diesel", "name": "Bangladesh Diesel Plant (Shimultali, Gazipur)", "lat": 24.03, "lon": 90.41, "cat": "defense_industry", "note": "Army-owned industrial enterprise at Gazipur Cantonment; builds power plants. Location approximate.", "source": "Wikipedia; New Age; approximate", "date": "", "linked_items": []}, {"id": "ind_cdl", "name": "Chittagong Dry Dock Ltd (Chattogram)", "lat": 22.22, "lon": 91.82, "cat": "defense_industry", "note": "Shipyard handed over to the Bangladesh Navy by the state shipbuilding corporation. Location approximate.", "source": "Bangladesh Steel and Engineering Corporation (Wikipedia); New Age; approximate", "date": "", "linked_items": []}, {"id": "ind_dew", "name": "Dockyard and Engineering Works (Narayanganj)", "lat": 23.62, "lon": 90.5, "cat": "defense_industry", "note": "Shipyard and engineering works in Narayanganj, handed over to the Bangladesh Navy. Location approximate.", "source": "Bangladesh Steel and Engineering Corporation (Wikipedia); approximate", "date": "", "linked_items": []}, {"id": "ind_khulna_shipyard", "name": "Khulna Shipyard", "lat": 22.82, "lon": 89.55, "cat": "defense_industry", "note": "State shipyard in Khulna that builds the Navy's Padma-class patrol vessels. Location approximate (city).", "source": "Wikipedia (BNS Shaheed Mohibullah, Farid, Akhtaruddin); approximate", "date": "", "linked_items": []}, {"id": "rooppur", "name": "Rooppur Nuclear Power Plant (Ishwardi, Pabna)", "lat": 24.0656, "lon": 89.0453, "cat": "nuclear_site", "note": "Unit 1: fuel loading began 28 April 2026; regulatory clearance to start controlled fission was granted on 8 October 2026. Grid power is expected months later. Unit 2 is planned for 2027. Coordinates verified (Global Energy Monitor).", "source": "New Age (8 Oct 2026); Prothom Alo (28 Apr 2026); Global Energy Monitor (verified coordinates)", "date": "", "linked_items": []}, {"id": "matarbari", "name": "Matarbari deep-sea port and coal power project", "lat": 21.7, "lon": 91.9, "cat": "power_plant", "note": "Deep-sea port and coal power project on Maheshkhali island, reported as Japan-assisted. Status not verified in this build. Location approximate.", "source": "press reporting (not verified in this build); approximate", "date": "", "linked_items": []}, {"id": "rampal", "name": "Rampal coal power project (Bagerhat)", "lat": 22.58, "lon": 89.72, "cat": "power_plant", "note": "Bangladesh-India coal power project at Rampal, Bagerhat. Status not verified in this build. Location approximate.", "source": "public information (not verified in this build); approximate", "date": "", "linked_items": []}, {"id": "payra_port", "name": "Payra port (Patuakhali)", "lat": 21.9, "lon": 90.0, "cat": "seaport", "note": "Sea port on the Bay of Bengal coast in Patuakhali. Location approximate.", "source": "public information; approximate", "date": "", "linked_items": []}, {"id": "inl_narayanganj", "name": "Narayanganj inland river port", "lat": 23.62, "lon": 90.5, "cat": "inland_port", "note": "River port on the Shitalakshya, south-east of Dhaka. Not verified in this build; approximate.", "source": "approximate (not verified in this build)", "date": "", "linked_items": []}, {"id": "inl_chandpur", "name": "Chandpur inland river port", "lat": 23.23, "lon": 90.67, "cat": "inland_port", "note": "River port at the Meghna confluence. Not verified in this build; approximate.", "source": "approximate (not verified in this build)", "date": "", "linked_items": []}, {"id": "inl_ashuganj", "name": "Ashuganj inland river port", "lat": 24.0, "lon": 91.13, "cat": "inland_port", "note": "Inland river port on the Meghna. Not verified in this build; approximate.", "source": "approximate (not verified in this build)", "date": "", "linked_items": []}, {"id": "inl_khulna", "name": "Khulna river port", "lat": 22.82, "lon": 89.55, "cat": "inland_port", "note": "River port in Khulna on the Rupsa and Bhairab rivers. Not verified in this build; approximate.", "source": "approximate (not verified in this build)", "date": "", "linked_items": []}, {"id": "cht_bandarban", "name": "Bandarban (Chittagong Hill Tracts)", "lat": 22.195, "lon": 92.22, "cat": "flashpoint", "note": "Second phase of the Chittagong Hill Tracts conflict began on 20 October 2022, and Wikipedia records it as ongoing. Clashes with the Kuki-Chin National Front were reported in Ruma and Rawangchari in 2023.", "source": "Wikipedia (CHT conflict; Kuki-Chin National Front)", "date": "", "linked_items": []}, {"id": "cht_rangamati", "name": "Rangamati (Chittagong Hill Tracts)", "lat": 22.63, "lon": 92.17, "cat": "flashpoint", "note": "Infighting between the UPDF and the Jana Samhati Samiti (JSS). A UPDF youth leader was reported killed in Rangamati Sadar on 17 April 2026.", "source": "Wikipedia (UPDF; Prasit Bikash Khisa); TBS News; UNB", "date": "", "linked_items": []}, {"id": "cht_khagrachhari", "name": "Khagrachhari (Chittagong Hill Tracts)", "lat": 23.12, "lon": 91.98, "cat": "flashpoint", "note": "Clashes, blockades and strikes, 23 to 30 September 2025, after the reported rape of an indigenous schoolgirl. Several reports describe communal violence.", "source": "Wikipedia (2025 Khagrachhari clashes); The Daily Star", "date": "", "linked_items": []}, {"id": "cox_camps", "name": "Cox's Bazar Rohingya camps (Kutupalong)", "lat": 21.2, "lon": 92.15, "cat": "flashpoint", "note": "The largest refugee settlement in the world. UNHCR reporting puts the Rohingya population in Bangladesh at about one million; figures and conditions are reported and contested.", "source": "UNHCR (reported)", "date": "", "linked_items": []}, {"id": "teknaf", "name": "Teknaf (Naf river border crossing)", "lat": 20.86, "lon": 92.3, "cat": "flashpoint", "note": "Bangladesh-Myanmar border crossing on the Naf river. Rohingya arrivals from Rakhine have been reported here (press reporting).", "source": "press reporting; UNHCR (reported)", "date": "", "linked_items": []}, {"id": "maungdaw", "name": "Maungdaw (Rakhine, Myanmar side)", "lat": 20.85, "lon": 92.27, "cat": "flashpoint", "note": "Rakhine border town on the Myanmar side of the Naf river. Armed-group control and Rohingya displacement have been reported. Front lines change; verify. Location approximate.", "source": "press reporting (front lines change); approximate", "date": "", "linked_items": []}], "connector_status": [{"name": "offline_seed", "configured": true, "ok": true, "message": "Offline snapshot: reference items and strategic sites only; backend not connected", "item_count": 13}], "total_items": 13};
  const CAT_META = {"military": {"label": "Military & Strategic", "color": "var(--amber)"}, "economic": {"label": "Economic & Trade", "color": "var(--cyan-h)"}, "political": {"label": "Political & Diplomatic", "color": "var(--green)"}, "hazard": {"label": "Natural Hazards", "color": "var(--violet)"}, "aviation": {"label": "Aviation & Maritime Notices", "color": "var(--violet)"}, "strategic": {"label": "Strategic & Arms Monitoring", "color": "var(--magenta)"}, "cyber": {"label": "Cyber & MSS", "color": "var(--red)"}, "space": {"label": "Space Program", "color": "var(--cyan-h)"}, "social_local": {"label": "Social pulse", "color": "var(--gold)"}, "social_global": {"label": "Social pulse (global)", "color": "var(--gold)"}};

  function escapeHtml(s){
    if(s === null || s === undefined) return "";
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function project(lon, lat){
    const lambda = lon * Math.PI/180, phi = lat * Math.PI/180;
    const x = lambda, y = Math.log(Math.tan(Math.PI/4 + phi/2));
    return [PROJ.translate[0] + x*PROJ.scale, PROJ.translate[1] - y*PROJ.scale];
  }

  const MARKER_COLOR = {"capital": "#c9a35c", "flashpoint": "#ef5354", "chokepoint": "#f59e0b", "hazard": "#58c4ff", "submarine_base": "#fb923c", "navy_base": "#f97316", "carrier_port": "#fdba74", "cantonment": "#c084fc", "nuclear_site": "#facc15", "space_site": "#06b6d4", "satellite_station": "#60a5fa", "defense_industry": "#84cc16", "pipeline": "#4ade80", "nuclear_plant": "#eab308", "air_base": "#a78bfa", "airport": "#38bdf8", "seaport": "#22c55e", "custom": "#ffffff"};

  // ---------------- 72h / All-time window ----------------
  let timeWindow = "72h";   // default per request; stays until the user picks otherwise
  const WINDOW_MS = 72 * 3600 * 1000;

  // Robust across the formats the connectors actually emit: ISO, RFC-822 (RSS
  // "published"), GDELT "YYYYMMDDTHHMMSSZ", and USGS epoch-ms as a string.
  function parseItemDate(s){
    if(!s) return null;
    if(/^\d{13}$/.test(String(s))) return new Date(parseInt(s, 10));
    const g = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(String(s));
    if(g) return new Date(Date.UTC(+g[1], +g[2]-1, +g[3], +g[4], +g[5], +g[6]));
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function inWindow(it){
    if(timeWindow === "all") return true;
    const d = parseItemDate(it.date);
    // Strict by design: an item with no verifiable timestamp (background
    // reference entries dated "ongoing"/"background", or a date string that
    // can't be parsed) is NOT shown in the 72h view - claiming it's "last
    // 72 hours" news when nothing proves that would break the one rule this
    // toggle exists to enforce. Switch to All Time to see them.
    if(!d) return false;
    return (Date.now() - d.getTime()) <= WINDOW_MS;
  }
  function windowedCats(cats){
    const out = {};
    Object.keys(cats).forEach(function(k){ out[k] = (cats[k]||[]).filter(inWindow); });
    return out;
  }

  let currentData = null, isLive = false;
  // start activeLayers from whatever the checkboxes actually show as checked
  // in the HTML (event layers on, infrastructure layers off by default),
  // rather than hardcoding it separately and risking the two going out of sync
  let activeLayers = new Set(
    Array.from(document.querySelectorAll(".layer-cb")).filter(cb => cb.checked).map(cb => cb.dataset.layer)
  );
  let refreshTimer = null;
  let customMarkers = [];

  // ---------------- data loading ----------------
  async function loadData(manual){
    const btn = document.getElementById("refreshBtn");
    if(manual && btn){ btn.classList.add("spinning"); btn.disabled = true; }
    try {
      const url = manual ? "/api/refresh" : "/api/snapshot";
      const opts = manual ? {method:"POST"} : {cache:"no-store"};
      const res = await fetch(url, opts);
      if(!res.ok){
        if(res.status === 429){ const j = await res.json().catch(()=>({})); throw new Error(j.error || "rate limited"); }
        // try to surface the server's own error detail (e.g. a specific
        // connector/rendering failure), not just the bare status code
        const body = await res.json().catch(()=>null);
        throw new Error(body && body.error ? ("HTTP " + res.status + ": " + body.error) : ("HTTP " + res.status));
      }
      const data = await res.json();
      currentData = data; isLive = true;
      render(data, true, null);
    } catch(e) {
      currentData = SEED_DATA; isLive = false;
      render(SEED_DATA, false, e.message);
    } finally {
      if(btn){ btn.classList.remove("spinning"); btn.disabled = false; }
    }
  }

  // ---------------- render orchestration ----------------
  function render(data, live, errMsg){
    // apply the 72h / All-time window ONCE, then everything below (panels,
    // KPIs, map dots) reads from the same filtered view - they can't disagree
    const view = Object.assign({}, data, {items_by_category: windowedCats(data.items_by_category || {})});
    view.markers = (data.markers || []).map(function(m){
      return Object.assign({}, m, {linked_items: (m.linked_items || []).filter(inWindow)});
    });
    renderStatusBar(live, view, errMsg);
    renderKPIs(view);
    renderMarkers(view.markers, view.items_by_category);
    renderPanels(view.items_by_category);
    renderTicker(view);
    renderDarkWeb(view);
    renderConnectorStrip(view.connector_status || [], live);
    applyFilter(); // keep an active search query applied across re-renders
  }

  function renderStatusBar(live, data, errMsg){
    const pill = document.getElementById("statusPill");
    const txt = document.getElementById("statusPillText");
    const banner = document.getElementById("offlineBanner");
    const footerNote = document.getElementById("footerNote");
    const snapDate = document.getElementById("snapDate");
    if(live){
      pill.className = "status-pill live"; txt.textContent = "Live backend";
      banner.classList.remove("show");
      const when = data.updated_at ? new Date(data.updated_at*1000).toLocaleTimeString() : "just now";
      snapDate.textContent = "Backend last polled " + when;
      footerNote.innerHTML = "Live backend connected &middot; " + (data.total_items||0) + " items in feed &middot; not investment/operational advice, verify time-critical items against primary sources";
    } else {
      pill.className = "status-pill offline"; txt.textContent = "Offline snapshot";
      banner.classList.add("show");
      banner.innerHTML = "<b>Backend not reachable" + (errMsg ? " (" + escapeHtml(errMsg) + ")" : "") +
        "</b> &mdash; showing the embedded Aug 10, 2026 research snapshot instead of live data. " +
        "Run <code>python run.py</code> and reload this page to connect the real backend.";
      snapDate.textContent = "Offline snapshot - Aug 10, 2026";
      footerNote.textContent = "Offline snapshot mode - start the Python backend for live data.";
    }
  }

  function countItems(cats, dataObj){
    let n = 0;
    cats.forEach(c => n += (dataObj[c]||[]).length);
    return n;
  }

  function renderKPIs(data){
    const cats = data.items_by_category || {};
    document.getElementById("kpi-markers").textContent = (data.markers||[]).length;
    document.getElementById("kpi-military").textContent = (cats.milops||[]).length;
    document.getElementById("kpi-economic").textContent = (cats.econ||[]).length;
    document.getElementById("kpi-political").textContent = (cats.geo||[]).length;
    document.getElementById("kpi-hazard").textContent = (cats.hazard||[]).length;
    document.getElementById("kpi-darkweb").textContent = (cats.darkweb||[]).length;
    document.getElementById("count-markers").textContent = (data.markers||[]).length + " sites";
    const infraNote = document.getElementById("infraNote");
    if(infraNote){
      const info = data.infrastructure || {};
      if(isLive){
        infraNote.textContent = (info.airport_count||0) + " airports live from OurAirports (CC0 dataset) + " +
          "verified seaports/naval bases/defense HQs. Real-time ship/submarine positions aren't shown - " +
          "no open source publishes that for any navy (see README).";
      } else {
        infraNote.textContent = "Offline snapshot: infrastructure markers frozen from build time, not live.";
      }
    }
  }

  // ---------------- map markers ----------------
  function addMarkerEl(layer, m, color, extra){
    const [x,y] = project(m.lon, m.lat);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "marker");
    g.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
    g.dataset.name = m.name; g.dataset.note = m.note || "";
    g.dataset.source = m.source || ""; g.dataset.date = m.date || "";
    g.dataset.color = color;
    g.dataset.linked = JSON.stringify(m.linked_items || []);
    const pulse = (m.linked_items && m.linked_items.length) || (extra && extra.pulse);
    g.innerHTML = (pulse ? '<circle class="pulse" r="5" fill="none" stroke="'+color+'" stroke-width="1.6"/>' : '') +
                  '<circle class="core" r="3.4" fill="'+color+'"/>';
    layer.appendChild(g);
  }

  function renderMarkers(markers, cats){
    const layer = document.getElementById("markerLayer");
    if(!layer) return;
    layer.innerHTML = "";
    // 1. named strategic sites (pulse when a windowed headline mentions them)
    (markers || []).forEach(function(m){
      if(!activeLayers.has(m.cat)) return;
      addMarkerEl(layer, m, MARKER_COLOR[m.cat] || "#c9a35c");
    });
    // 2. any windowed item that carries its OWN coordinates (USGS quakes) -
    // a real lat/lon from the source, not a guess
    if(activeLayers.has("hazard")){
      Object.keys(cats || {}).forEach(function(k){
        (cats[k] || []).forEach(function(it){
          if(typeof it.lat === "number" && typeof it.lon === "number"){
            addMarkerEl(layer, {name: it.label, note: it.text, source: it.source, date: it.date,
              lat: it.lat, lon: it.lon, linked_items: []}, MARKER_COLOR.hazard, {pulse: true});
          }
        });
      });
    }
    // 3. the user's own plotted markers
    if(activeLayers.has("custom")){
      customMarkers.forEach(function(cm){
        addMarkerEl(layer, {name: cm.label, note: cm.remark || "(no remark)", source: "You",
          date: cm.added, lat: cm.lat, lon: cm.lon, linked_items: []}, MARKER_COLOR.custom, {pulse: true});
      });
    }
    wireMarkerEvents();
  }

  function wireMarkerEvents(){
    const wrap = document.getElementById("mapWrap");
    const tip = document.getElementById("mapTip");
    if(!wrap || !tip) return;
    function hideTip(){ tip.classList.remove("show"); }
    function positionTip(evt){
      const rect = wrap.getBoundingClientRect();
      let cx, cy;
      if(evt.touches && evt.touches[0]){ cx = evt.touches[0].clientX; cy = evt.touches[0].clientY; }
      else { cx = evt.clientX; cy = evt.clientY; }
      let x = cx - rect.left, y = cy - rect.top;
      const tw = 260, th = 130;
      if(x + tw + 24 > rect.width) x = x - tw - 18; else x = x + 16;
      if(y + th + 20 > rect.height) y = Math.max(4, y - th - 10); else y = y + 14;
      tip.style.left = x+"px"; tip.style.top = y+"px";
    }
    function showTip(m, evt){
      const name = m.dataset.name, note = m.dataset.note, source = m.dataset.source,
            date = m.dataset.date, color = m.dataset.color;
      let linked = [];
      try { linked = JSON.parse(m.dataset.linked || "[]"); } catch(e){ linked = []; }
      let html = '<div class="t-name" style="color:'+color+'">'+escapeHtml(name)+'</div>' +
                 '<div>'+escapeHtml(note)+'</div>' +
                 '<div class="t-meta">'+escapeHtml(source)+(date?(" &middot; "+escapeHtml(date)):"")+'</div>';
      if(linked.length){
        html += '<div class="t-meta" style="margin-top:6px;color:var(--text-dim);">Recent related items:</div>';
        linked.slice(0,3).forEach(function(li){
          html += '<div class="marker-tt-link">&bull; ' + escapeHtml((li.label||"").slice(0,60)) + '</div>';
        });
      }
      tip.innerHTML = html;
      positionTip(evt);
      tip.classList.add("show");
    }
    wrap.querySelectorAll(".marker").forEach(function(m){
      m.addEventListener("mouseenter", function(evt){ showTip(m, evt); });
      m.addEventListener("mousemove", positionTip);
      m.addEventListener("mouseleave", hideTip);
      m.addEventListener("click", function(evt){
        if(tip.classList.contains("show")){ hideTip(); } else { showTip(m, evt); }
      });
    });
    wrap.removeEventListener("mouseleave", hideTip);
    wrap.addEventListener("mouseleave", hideTip);
  }

  // layer toggle checkboxes
  document.querySelectorAll(".layer-cb").forEach(function(cb){
    cb.addEventListener("change", function(){
      const cat = cb.dataset.layer;
      if(cb.checked) activeLayers.add(cat); else activeLayers.delete(cat);
      if(currentData) renderMarkers(currentData.markers || []);
    });
  });

  // ---------------- panels ----------------
  // Only http(s) URLs ever become links. A feed-supplied "javascript:" / "data:" URL
  // would otherwise be a click-to-run XSS even though every text field is escaped.
  function safeUrl(u){
    if(!u) return null;
    try { const x = new URL(String(u)); return (x.protocol === "http:" || x.protocol === "https:") ? x.href : null; }
    catch(e){ return null; }
  }
  function fmtDate(s){
    const d = parseItemDate(s);
    return d ? d.toLocaleString([], {dateStyle:"medium", timeStyle:"short"}) : (s || "");
  }
  function itemHtml(it){
    const href = safeUrl(it.url);
    return '<div class="item" data-search="'+escapeHtml(((it.label||"")+" "+(it.text||"")).toLowerCase())+'">' +
      '<div class="lbl">'+escapeHtml(it.label)+'</div>' +
      (it.text && it.text !== it.label ? '<div class="txt">'+escapeHtml(it.text)+'</div>' : '') +
      '<div class="meta">'+escapeHtml(it.source)+(it.date?(" &middot; "+escapeHtml(fmtDate(it.date))):"")+
      (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '')+
      '</div></div>';
  }

  function renderPanels(cats){
    const ids = HEADING_KEYS;
    ids.forEach(function(cat){
      const container = document.getElementById("items-"+cat);
      const countEl = document.getElementById("count-"+cat);
      if(!container) return;
      const list = (cats[cat] || []).slice(0, 25);
      if(countEl) countEl.textContent = list.length;
      container.innerHTML = list.length
        ? list.map(itemHtml).join("")
        : '<div class="empty-note">' + (timeWindow === "72h"
            ? (isLive
                ? 'Nothing in the last 72 hours for this heading. Switch to <b>All Time</b> (top right) to see older items.'
                : 'Backend offline - the embedded research snapshot is older than 72 hours, so it is hidden in this view. Switch to <b>All Time</b> to read it, or start the backend for live news.')
            : 'No items for this heading yet.') + '</div>';
    });
  }

  // ---------------- connector status strip ----------------
  function renderConnectorStrip(statuses, live){
    const el = document.getElementById("connectorStrip");
    const note = document.getElementById("methodNote");
    if(!live){
      el.innerHTML = '<span class="conn-badge off">offline snapshot - connectors not queried</span>';
      note.textContent = "Backend not connected. Start it with: python run.py  (see README.md)";
      return;
    }
    el.innerHTML = statuses.map(function(s){
      const cls = !s.configured ? "off" : (s.ok ? "ok" : "err");
      const label = s.name + (s.configured ? (s.ok ? " \u2713 " + s.item_count : " \u2717") : " (not set)");
      return '<span class="conn-badge '+cls+'" title="'+escapeHtml(s.message||"")+'">'+escapeHtml(label)+'</span>';
    }).join("");
    const okCount = statuses.filter(s=>s.ok).length;
    note.textContent = okCount + " of " + statuses.length + " connectors returned data this poll. " +
      "Hover a badge for its exact status message. Add API keys in .env or via secure_setup.py to enable more.";
  }

  // ---------------- search filter ----------------
  let lastQuery = "";
  function applyFilter(){
    const q = lastQuery;
    document.querySelectorAll(".item[data-search]").forEach(function(it){
      if(!q){ it.classList.remove("dim"); return; }
      const hay = it.getAttribute("data-search") || "";
      if(hay.indexOf(q) === -1) it.classList.add("dim"); else it.classList.remove("dim");
    });
  }
  const filterInput = document.getElementById("filterInput");
  if(filterInput){
    filterInput.addEventListener("input", function(){
      lastQuery = filterInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  // ---------------- refresh button ----------------
  const refreshBtn = document.getElementById("refreshBtn");
  if(refreshBtn) refreshBtn.addEventListener("click", function(){ loadData(true); });

  // ---------------- settings modal (API keys) ----------------
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const settingsBtn = document.getElementById("settingsBtn");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const saveKeysBtn = document.getElementById("saveKeysBtn");
  const keyFieldsEl = document.getElementById("keyFields");
  const settingsMsg = document.getElementById("settingsMsg");

  async function openSettings(){
    settingsBackdrop.classList.add("show");
    settingsMsg.textContent = ""; settingsMsg.className = "modal-msg";
    keyFieldsEl.innerHTML = "Loading&hellip;";
    try {
      const res = await fetch("/api/keys");
      if(!res.ok) throw new Error("HTTP " + res.status);
      const fields = await res.json();
      keyFieldsEl.innerHTML = Object.keys(fields).map(function(name){
        const f = fields[name];
        return '<div class="key-field">' +
          '<label><span class="kf-status'+(f.configured?" on":"")+'"></span>' + escapeHtml(f.label) +
          (f.configured ? ' <span style="font-weight:400;color:var(--text-faint);">(set via '+escapeHtml(f.source)+')</span>' : '') +
          '</label>' +
          '<div class="kf-help">'+escapeHtml(f.help)+'</div>' +
          '<input type="password" data-key="'+name+'" placeholder="'+
            (f.configured ? "Already set - paste a new value to replace it" : "Paste key here, or leave blank to skip") +
          '" autocomplete="off"/></div>';
      }).join("");
    } catch(e) {
      keyFieldsEl.innerHTML = '<div class="modal-msg err">Could not load key status: ' + escapeHtml(e.message) +
        (isLive ? "" : " (backend not connected - start it with python run.py first)") + '</div>';
    }
  }
  function closeSettings(){ settingsBackdrop.classList.remove("show"); }

  if(settingsBtn) settingsBtn.addEventListener("click", openSettings);
  if(closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);
  if(settingsBackdrop) settingsBackdrop.addEventListener("click", function(e){
    if(e.target === settingsBackdrop) closeSettings();
  });

  if(saveKeysBtn) saveKeysBtn.addEventListener("click", async function(){
    const inputs = keyFieldsEl.querySelectorAll("input[data-key]");
    const body = {};
    inputs.forEach(function(inp){ if(inp.value.trim()) body[inp.dataset.key] = inp.value.trim(); });
    if(!Object.keys(body).length){
      settingsMsg.textContent = "Nothing to save - all fields blank."; settingsMsg.className = "modal-msg";
      return;
    }
    saveKeysBtn.disabled = true; saveKeysBtn.textContent = "Saving\u2026";
    try {
      const res = await fetch("/api/keys", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      settingsMsg.textContent = "Saved " + j.saved.length + " key(s), encrypted. Reconnecting\u2026";
      settingsMsg.className = "modal-msg ok";
      await loadData(true);
      setTimeout(function(){ openSettings(); }, 400); // refresh the configured/not-configured status shown
    } catch(e) {
      settingsMsg.textContent = "Save failed: " + e.message;
      settingsMsg.className = "modal-msg err";
    } finally {
      saveKeysBtn.disabled = false; saveKeysBtn.textContent = "Save & reconnect";
    }
  });

  // ---------------- live clock ----------------
  function pad(n){ return n<10 ? "0"+n : n; }
  function tickClock(){
    const d = new Date();
    const el = document.getElementById("snapClock");
    if(el) el.textContent = pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds())+" local";
  }
  tickClock(); setInterval(tickClock, 1000);

  // ---------------- running news ticker (unlocated news, newest first, bottom->top) ----------------
  function ts(it){ const d = parseItemDate(it.date); return d ? d.getTime() : 0; }
  function wireTickerPause(){
    const viewport = document.getElementById("tickerViewport");
    const track = document.getElementById("tickerTrack");
    if(!viewport || !track) return;
    viewport.onpointerenter = function(){ track.classList.add("paused"); };
    viewport.onpointerleave = function(){ track.classList.remove("paused"); };
    viewport.ontouchstart = function(){ track.classList.add("paused"); };
    viewport.ontouchend = function(){ track.classList.remove("paused"); };
  }
  function in72h(it){
    const d = parseItemDate(it.date);
    if(!d) return false;                       // undated background items never qualify as "latest news"
    return (Date.now() - d.getTime()) <= 72 * 3600 * 1000;
  }
  function renderTicker(view){
    // The running feed is ALWAYS the last 72 hours - it ignores the All-Time toggle.
    const track = document.getElementById("tickerTrack");
    const cnt = document.getElementById("count-ticker");
    if(!track) return;
    const src = (currentData && currentData.items_by_category) || {};
    const all = [];
    Object.keys(src).forEach(function(k){
      (src[k] || []).forEach(function(it){
        if(!(typeof it.lat === "number" && typeof it.lon === "number") && in72h(it)) all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const list = all.slice(0, 80);
    if(cnt) cnt.textContent = list.length + " in 72h";
    if(!list.length){
      track.innerHTML = '<div class="empty-note" style="padding:14px;">No unlocated news in the last 72 hours yet.</div>';
      return;
    }
    const TAG = {geo:["GEO","var(--green)"], milops:["MIL","var(--amber)"], arms:["ARMS","var(--magenta)"],
      naval:["NAVAL","var(--cyan-h)"], scs:["SCS","var(--cyan-h)"], air:["AIR","var(--violet)"], space:["SPACE","var(--cyan-h)"],
      tech:["TECH","var(--gold)"], cyber:["CYBER","var(--red)"], darkweb:["DARK","var(--red)"], econ:["ECON","var(--cyan-h)"],
      mss:["MSS","var(--amber)"], social:["SOC","var(--gold)"], wellbeing:["WELL","var(--magenta)"], hazard:["HAZ","var(--violet)"]};
    const one = list.map(function(it){
      const t = TAG[it.category] || ["NEWS","var(--cyan-h)"];
      return '<div class="tick-item"><span class="tag" style="background:'+t[1]+'">'+t[0]+'</span>' +
        '<span class="txt">'+escapeHtml(it.label)+'</span>' +
        '<div class="meta">'+escapeHtml(it.source)+(it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '')+'</div></div>';
    }).join("");
    track.innerHTML = one + one;
    wireTickerPause();
  }

  function renderDarkWeb(view){
    const el = document.getElementById("items-darkweb");
    if(!el) return;
    const want = document.getElementById("darkwebFilter").value;
    const all = [];
    Object.keys(view.items_by_category || {}).forEach(function(k){
      (view.items_by_category[k] || []).forEach(function(it){
        if(it.category === "darkweb") all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const shown = all.filter(function(it){ return want === "all" || it.in_region; }).slice(0, 80);
    document.getElementById("count-darkweb").textContent = shown.length + " of " + all.length;
    const LABEL = {ransomware_live:"Ransomware.live: ", telegram_public:"Telegram: ", darkweb_tor:"Dark web via Tor: "};
    const st = (view.connector_status || []).filter(function(s){ return LABEL[s.name]; })
      .map(function(s){ return LABEL[s.name] + s.message; });
    document.getElementById("darkwebStatus").textContent = st.join("   |   ");
    el.innerHTML = shown.length ? shown.map(function(it){
      const href = safeUrl(it.url);
      return '<div class="item"><div class="lbl">'+escapeHtml(it.label)+'</div><div class="meta">' +
        escapeHtml(it.source) + (it.country ? ' &middot; '+escapeHtml(it.country) : '') +
        (it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '') +
        (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '') +
        '</div></div>';
    }).join("") : '<div class="empty-note">No dark-web or threat-intel claims in the current window. ' +
        (timeWindow === "72h" ? 'Switch to All Time (top right) to see older claims.' : '') + '</div>';
  }

  // ---------------- radar sweep: 2D scanner rotating over the map (off for reduced-motion) ----------------
  // Cosmetic only, so it is isolated: a missing animation API or any error here
  // must never stop the data panels from rendering. Falls back to a timer when
  // requestAnimationFrame is unavailable (older or embedded browsers).
  try {
    (function radar(){
      const g = document.getElementById("radarSweep");
      if(!g || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
      const cx = g.getAttribute("data-cx"), cy = g.getAttribute("data-cy");
      const raf = (typeof window.requestAnimationFrame === "function")
        ? function(f){ window.requestAnimationFrame(f); }
        : function(f){ setTimeout(f, 33); };
      let a = 0;
      (function step(){
        a = (a + 0.5) % 360;
        g.setAttribute("transform", "rotate(" + a + " " + cx + " " + cy + ")");
        raf(step);
      })();
    })();
  } catch(e) { /* sweep is decoration; the dashboard works without it */ }

  const dwFilter = document.getElementById("darkwebFilter");
  if(dwFilter) dwFilter.addEventListener("change", function(){ if(currentData) render(currentData, isLive, null); });

  // ---------------- 72h / All-time toggle ----------------
  document.querySelectorAll(".wt-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      timeWindow = btn.dataset.window;
      document.querySelectorAll(".wt-btn").forEach(b => b.classList.toggle("active", b === btn));
      // re-render from what we already have - no new network call needed
      if(currentData) render(currentData, isLive, null);
    });
  });

  // ---------------- Plot a location (lat/long + remark) ----------------
  const plotBackdrop = document.getElementById("plotBackdrop");
  const plotMsg = document.getElementById("plotMsg");

  async function loadCustomMarkers(){
    try {
      const res = await fetch("/api/custom-markers", {cache:"no-store"});
      if(!res.ok) throw new Error("HTTP " + res.status);
      customMarkers = (await res.json()).markers || [];
    } catch(e) { customMarkers = []; }
  }

  function renderCustomList(){
    const el = document.getElementById("customMarkersList");
    if(!customMarkers.length){ el.innerHTML = ""; return; }
    el.innerHTML = '<div style="font-size:11px;color:var(--text-faint);margin-bottom:6px;">Your plotted markers:</div>' +
      customMarkers.map(function(m, i){
        return '<div class="custom-marker-row"><span><b>'+escapeHtml(m.label)+'</b> ('+m.lat+', '+m.lon+')' +
          (m.remark ? '<br/><span style="color:var(--text-faint);">'+escapeHtml(m.remark)+'</span>' : '') +
          '</span><button data-idx="'+i+'" title="Remove">&times;</button></div>';
      }).join("");
    el.querySelectorAll("button[data-idx]").forEach(function(btn){
      btn.addEventListener("click", async function(){
        try {
          const res = await fetch("/api/custom-markers/" + btn.dataset.idx, {method:"DELETE"});
          const j = await res.json();
          if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
          customMarkers = j.markers || [];
          renderCustomList();
          if(currentData) render(currentData, isLive, null);
        } catch(e) {
          plotMsg.textContent = "Remove failed: " + e.message; plotMsg.className = "modal-msg err";
        }
      });
    });
  }

  const plotBtn = document.getElementById("plotBtn");
  if(plotBtn) plotBtn.addEventListener("click", async function(){
    plotBackdrop.classList.add("show");
    plotMsg.textContent = ""; plotMsg.className = "modal-msg";
    await loadCustomMarkers();
    renderCustomList();
  });
  document.getElementById("plotCloseBtn").addEventListener("click", () => plotBackdrop.classList.remove("show"));
  plotBackdrop.addEventListener("click", function(e){ if(e.target === plotBackdrop) plotBackdrop.classList.remove("show"); });

  document.getElementById("plotAddBtn").addEventListener("click", async function(){
    const label = document.getElementById("plotLabel").value.trim();
    const remark = document.getElementById("plotRemark").value.trim();
    const lat = parseFloat(document.getElementById("plotLat").value);
    const lon = parseFloat(document.getElementById("plotLon").value);
    if(!label || isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180){
      plotMsg.textContent = "Enter a label and valid lat (-90 to 90) / lon (-180 to 180)."; plotMsg.className = "modal-msg err";
      return;
    }
    try {
      const res = await fetch("/api/custom-markers", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({label: label, remark: remark, lat: lat, lon: lon})});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      customMarkers = j.markers || [];
      ["plotLabel","plotRemark","plotLat","plotLon"].forEach(id => document.getElementById(id).value = "");
      plotMsg.textContent = "Added."; plotMsg.className = "modal-msg ok";
      renderCustomList();
      if(currentData) render(currentData, isLive, null);
    } catch(e) {
      plotMsg.textContent = "Add failed: " + e.message; plotMsg.className = "modal-msg err";
    }
  });

  // ---------------- boot ----------------
  loadCustomMarkers().then(function(){ loadData(false); });
  // auto-update news & data every 3 minutes, per request
  refreshTimer = setInterval(function(){ loadData(false); }, 3*60*1000);

  // Test hooks (harmless in production) so the DOM regression test can drive
  // the real code paths instead of re-implementing them
  window.__TEST = {render: function(){ if(currentData) render(currentData, isLive, null); },
                   setData: function(d){ currentData = d; isLive = true; },
                   setWindow: function(w){ timeWindow = w; },
                   parseItemDate: parseItemDate, inWindow: inWindow};
})();

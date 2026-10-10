# Bangladesh Dashboard - v1

Covers **Bangladesh** in detail, with a **50 km margin** around its borders: a little of the Bay of
Bengal to the south, the Myanmar border (Teknaf, and Rakhine and Chin across the Naf river), and the
Indian border on the west and north-east, drawn as a plain outline. A local production server
(waitress) with auto-restart, real open-data map layers, and 15 headings fed from clear-web news,
Telegram, Instagram (official route) and dark-web sources. Built on the same architecture as the
China Dashboard v6 and the other regional builds.

## Local address

The dashboard runs at **http://127.0.0.1:8795/**. The earlier dashboards used ports 8787 and 8790,
so each one now has its own port and can run alongside the others. To change it, edit `PORT` in
`run.py` and the matching value in `start.bat`.

## Start (Windows)

Double-click `start.bat`. It creates the virtual environment, installs the packages, runs a
self-check, starts the server under `supervisor.py` (restarts it after a crash), and opens
http://127.0.0.1:8795/. The page opens at once and fills in as sources answer. The first pass takes
a minute or two, because GDELT asks clients to pace their requests.

## The map: Bangladesh, in detail

The frame is Bangladesh with a 50 km margin, drawn large.

- **Inside Bangladesh:** its divisions (outlined and labelled), its main rivers (the Ganges and the
  Brahmaputra, with the Meghna delta and the Karnaphuli), 16 towns, and every site in the list below.
- **The Bay of Bengal** is labelled at the south, with the coast and the Chattogram and Cox's Bazar
  shoreline.
- **Myanmar's border area** is drawn as the Rakhine and Chin states, with Teknaf and Maungdaw marked
  on the Naf river.
- **India** is a plain outline. **Nothing is plotted in India**: no airports, bases, military sites,
  nuclear sites or industries. The Indian rivers that cross the frame are lines only.

Bangladesh's divisions come from Natural Earth. This dataset shows seven divisions, and the
Mymensingh division (created in 2015) is not drawn separately.

**Map basis.** India's official survey depiction, as in the South Asia dashboards. Arunachal
Pradesh is shown as India; China claims it as South Tibet. The Bangladesh-Myanmar maritime boundary
was settled by the International Court of Justice in 2012, and the Bangladesh-India maritime
boundary by the Permanent Court of Arbitration in 2014. The map draws no maritime lines.

## What is plotted, and how sure each entry is

Each marker's tooltip gives its source and any status note.

- **Submarine base:** BNS Pekua, on the Bay of Bengal near the Kutubdia channel. It was inaugurated
  in March 2023, costs about US$1.21 billion, and accommodates six submarines and eight warships.
  The Navy's two Chinese-built submarines were received in December 2016. The base's position is
  **approximate**.
- **Navy:** the Chattogram Naval Area command. **Approximate** (city position).
- **Nuclear:** Rooppur, at Ishwardi in Pabna, at 24.0656°N, 89.0453°E (**verified**). Unit 1 had
  fuel loaded from 28 April 2026, was cleared on 8 October 2026 to start controlled fission, and grid
  power is months away. Unit 2 is planned for 2027.
- **Army divisions (8):** the 9th (Savar), 11th (Bogra), 19th (Ghatail), 24th (Chattogram), 33rd
  (Comilla), 55th (Jessore), 66th (Rangpur) and 10th (Ramu, formed 2015). The divisions and their
  towns come from the Army's published list. The positions are **approximate** (garrison towns).
- **Cantonments (25):** from the Army's published list of cantonment locations, including Dhaka
  (Army headquarters), Savar, Mymensingh, Ghatail, Gazipur (Rajendrapur), Bogra, Rangpur, Kholahati,
  Natore, Rajshahi, Jessore, Khulna (Jahanabad), Comilla, Sylhet, Chattogram, and the Hill Tracts
  cantonments at Bandarban, Khagrachhari, Rangamati, Dighinala, Kaptai and Alikadam, and Ramu in
  Cox's Bazar. Two positions are **verified** (Kholahati, Rangamati); the rest are **approximate**
  (town centres). Military sites are not published to coordinates in open sources.
- **Air Force bases (6):** BAF Bashar (Tejgaon, Dhaka; ICAO VGTJ), BAF Bir Uttom A.K. Khandker
  (Kurmitola, Dhaka; renamed 9 March 2025), BAF Zahurul Haque (Chattogram; ICAO VGEG, shared with
  Shah Amanat airport), BAF Cox's Bazar (plotted at the airport position), BAF Matiur Rahman (Jessore),
  and the Lalmonirhat airfield. The first and third positions come from OurAirports. Kurmitola is
  **approximate**.
- **Defence industry (6):** Bangladesh Ordnance Factories and the Bangladesh Machine Tools Factory
  (both Gazipur), the Bangladesh Diesel Plant (Gazipur Cantonment), Chittagong Dry Dock (Chattogram),
  the Dockyard and Engineering Works (Narayanganj), and Khulna Shipyard. All positions are
  **approximate**. The first and the last two are military-owned or navy-managed; the shipyards
  build the Navy's patrol vessels.
- **Power (2, non-military):** the Matarbari deep-sea port and coal project, and the Rampal coal
  project (Bagerhat). Both are **approximate**, and **their status is not verified** in this build.
- **Sea ports (3):** Chattogram and Mongla (Natural Earth port points), and Payra (approximate).
- **Inland river ports (4):** Narayanganj, Chandpur, Ashuganj and Khulna. **Approximate, and not
  verified in this build.** The sources I could confirm do not give their coordinates.
- **Civil airports (15):** from OurAirports, including Hazrat Shahjalal International (Dhaka),
  Jessore, Cox's Bazar, Barisal, Comilla, Bogra, Saidpur, Lalmonirhat, Ishurdi, Shah Makhdum and
  Noakhali.
- **Conflict zones (6):**
  - The **Chittagong Hill Tracts** at Bandarban, Rangamati and Khagrachhari. The conflict has two
    phases. The first ran from 1977 to the Peace Accord of 2 December 1997. The second began on 20
    October 2022 and is recorded as ongoing. The September 2025 Khagrachhari clashes and the April
    2026 killing of a UPDF youth leader in Rangamati are also recorded.
  - The **Cox's Bazar Rohingya camps** (Kutupalong), where UNHCR reporting puts the population at
    about one million (figures reported and contested).
  - **Teknaf** on the Naf river, and **Maungdaw** on the Myanmar side, where armed-group control and
    Rohingya displacement are reported. Front lines change; verify the latest situation.

**Not plotted:**
- **The Air Force drone plant** under a joint venture with China, announced in November 2025. The
  site has not been published, so no location is shown. The announcement is in the reference items.
- **Anything in India**, as the map basis requires.
- **Submarine positions at sea**, garrison-level detail, and ammunition depots. No open source gives
  them, and none were invented.

## The 15 headings

Geopolitical & Diplomatic - Military Operations & Force Posture - Strategic Arms & Nuclear Program -
Naval & Maritime Security - **Bay of Bengal & Maritime Chokepoints** - Air Force & Aviation - Space
Tech & AI - Cyber Espionage & APTs - Darkweb & Threat Intel - Economic & Trade - Internal Security &
Intelligence Operations - Social Pulse & Public Sentiment - Happiness & Wellbeing Indices - Natural
Hazards & Environmental Risks.

Headline routing is in `app/classify.py`, as ordered keyword rules that are readable and editable.
Armed-group names (UPDF, JSS, Shanti Bahini, Kuki-Chin) are internal-security actors. Military action
words (troops, cantonment, patrol) come before border and sea words. Short keywords are whole-word
matches, so " rab " does not match "rabbit", " import " does not match "important", and " jet " does
not match "jetty".

## The running news feed

It shows the last 72 hours only, always. The All Time switch does not widen it. Undated background
items never count as "latest". The feed shows only news not pinned to a map location.

## Where news comes from, and what each source needs

| Source | Needs | Notes |
|---|---|---|
| GDELT | nothing | 20 English-language queries on Bangladesh, Dhaka, the army and the navy, the air force, the Hill Tracts, Bandarban, Rangamati, Khagrachhari, the Rohingya and Cox's Bazar, Teknaf, Rakhine, the Myanmar border, Rooppur, Matarbari and Payra, the Bay of Bengal, India's border, north-east India, the economy, cyber activity, political violence, and cyclones and floods. Paced 6 seconds apart; on HTTP 429 it waits 20 seconds and retries once. |
| RSS | nothing | See the feed list below. Each feed reports its own status. |
| Telegram public channels | nothing (no account) | Read through t.me/s/<name>. The list is in `data/telegram_channels.json`. |
| Instagram (official Business Discovery) | a Meta developer app, an Instagram Business or Creator account you own, and a token | Only Business and Creator accounts can be read. Personal accounts cannot. |
| Dark web via Tor | Tor on this PC | Only onion sources you verify yourself, in `data/onion_sources.json`. |
| Ransomware.live (leak-site claims) | nothing | Group claims, not verified facts. The filter shows victims in the region. |
| USGS earthquakes | nothing | Map dots when USGS reports events in the box (20.2 to 27.1 N, 87.5 to 93.2 E). |

### RSS feeds in this build

Each address was confirmed in an earlier build from a publisher's own list, a curated list, or a
directory that prints it.

- **Bangladesh:** The Daily Star and bdnews24 (all headlines kept).
- **Myanmar's border:** Myanmar Gazette News Media Forum Network, Democratic Voice of Burma (DVB) and
  Thit Htoo Lwin, from a curated list. Their language is not confirmed, so the English-only filter
  decides what shows.
- **India's north-east and the Bay coast** (filtered to region headlines): The Hindu, BBC News India,
  NDTV top stories and Business Standard top stories.
- **Thailand and Indonesia:** Bangkok Post (its own RSS list) and ANTARA News in English.
- **Regional and defence** (filtered): BBC News Asia, Al Jazeera, SCMP World, USNI News, Breaking
  Defense, SpaceNews, Space.com and The Record.

**Flagged, not live-verified from the build sandbox:** Xinhua (World and China) and SCMP China,
carried over from the China build.

**Not confirmed in this build, and so not included:**
- **Bangladesh's Bengali-language outlets** and **Prothom Alo's English site** (no address confirmed).
- **Myanmar's independent outlets** (The Irrawaddy, Frontier Myanmar, Myanmar Now) and **India's
  north-east outlets** (named without addresses).

**This is the main gap.** Bangladesh's own news comes through The Daily Star, bdnews24 and GDELT.
Until more feeds are added, coverage of the Hill Tracts and the Rakhine frontier relies on GDELT and
Telegram. If you send me the feed addresses, I will add and check them.

## Telegram channels

The list is the same as in the other builds. It is not tuned to Bangladesh. Add channels for Bangla,
Burmese and Chakma-language news in `data/telegram_channels.json`.

Excluded on purpose:
- **OffensiveTwitter** (offensive-security and exploit content).
- **HaveIBeenPwnedBreaches** (channels of this type can carry raw breach records; use the official haveibeenpwned.com service instead).

Channels marked `verified: false` have not been confirmed live. Their status line shows whether they answer.

## Layers: only what has data

The layer toggles are generated only for categories Bangladesh has data for. A test
(`tests/test_layers_have_data.py`) fails the build if any toggle is empty. The earthquake toggle is
the one live-only exception.

## Reference items, and what each one rests on

- **Two Chinese-built submarines received (December 2016)**, from The Daily Star and BenarNews.
- **Pekua submarine base inaugurated (March 2023)**, from BenarNews and Wikipedia.
- **Rooppur unit 1 cleared to start controlled fission (8 October 2026)**, from New Age and Prothom Alo.
- **Air Force drone plant planned with China (November 2025)**, from The Business Standard.
- **The Chittagong Hill Tracts conflict**, first phase 1977 to 1997 and second phase from October
  2022, from Wikipedia.
- **The Khagrachhari clashes (September 2025)** and **the UPDF killing in Rangamati (April 2026)**,
  from Wikipedia, The Daily Star, TBS and UNB.
- **The Army's divisions and cantonments**, from the Army's published list and Wikipedia.
- **The Army-owned defence industries**, from Wikipedia, New Age and the Bangladesh Steel and
  Engineering Corporation.
- **The Air Force bases**, from Wikipedia and the Air Force.
- **The Rohingya population**, from UNHCR reporting (reported; figures contested).
- **The Bangladesh-Myanmar maritime boundary**, settled by the ICJ in March 2012.
- **The World Happiness Report 2026**: Bangladesh ranks above India (116th); its exact rank was not
  verified.

## Dark web: reading onion sources

1. Install **Tor Browser** and open it (SOCKS port **9150**), or install the **Tor service** and start it (port **9050**).
2. Keep it running. The dashboard checks both ports.
3. Add onion RSS sources that you verified on the outlet's **own official website** to `data/onion_sources.json`. Fake onion lookalikes are common. The dashboard rejects any address that is not a well-formed v3 onion (56 characters, a-z and 2-7, then .onion).
4. Press Refresh.

No account is needed for onion RSS sources. The dashboard does not crawl or search the dark web,
does not scrape forums or marketplaces, does not open .onion pages in a browser, and does not read
stealer-log or carding markets.

## Instagram (Meta Business Discovery)

1. Make an Instagram **Business or Creator** account that you own, and link it to a Facebook Page.
2. Create a Meta developer app and add the Instagram/Facebook Login product.
3. Generate a Facebook user access token with `instagram_basic` and `pages_read_engagement` (and `instagram_manage_insights` if Meta requires it). Use a long-lived token.
4. Enter the numeric ID of your account and the token in the gear icon. They are stored encrypted with AES-256.
5. List target usernames in `data/instagram_accounts.json`.

Check Meta's current requirements before you rely on this route, because they can change.

## Security

- Keys and tokens are encrypted with AES-256-GCM. The token is removed from every error message before it is displayed.
- The server listens on 127.0.0.1 only, on port 8795.
- Strict Content-Security-Policy. No third-party scripts, fonts or trackers.
- Hostile text (headlines, channel posts, marker labels) is escaped before display. Only http and https links become clickable.
- Telegram handles and Instagram usernames are validated before any URL is built.
- Clear-web requests can go through a proxy you choose (`PROXY_URL`, e.g. a VPN's local proxy). Dark-web requests go through Tor only, never direct.

A dashboard **cannot** secure your whole PC or phone from attack. That takes current OS updates, a
firewall, endpoint protection and sensible accounts. It also cannot hide your IP address or location
from the sites it fetches from, unless you route traffic through a VPN or Tor. Even then, the VPN or
Tor provider can see your traffic.

## Tests

`pip install -r requirements.txt pytest`, then `python -m pytest tests/` (36 tests).
Browser-side tests: `npm install` and `npm test`. They load the shipped `dashboard.js` into a real DOM.

## Honest limitations

- **Live sources were not reachable from the build sandbox.** Every external connector reported a connection error there, so no live news appears in this build. The status panel shows the real result on your machine. Check it on the first run.
- **Feed gaps** (see above): Bangla-language and independent English outlets for Bangladesh, and Myanmar's independent outlets.
- **Most military and industrial positions are approximate.** Open sources publish the Army's cantonment towns, not their coordinates. Only Kholahati, Rangamati and Rooppur have verified coordinates.
- **The drone plant is not plotted**, because its site is not published.
- **Inland river ports and the two power projects** are approximate, and their status is not verified in this build.
- **The Mymensingh division** is not drawn separately, because the Natural Earth dataset does not show it.
- **The Chittagong Hill Tracts and the Rakhine frontier change.** Verify the latest situation before you rely on any of them. The map shows no front lines.
- **Air Force bases** are reference points, not base perimeters. Operational status is unknown for most of them.
- **No garrison-level sites, ammunition depots, submarine positions at sea, or military positions.** No open source publishes them, and none were invented.
- **Single-user, local.** It runs on your machine while it is open.

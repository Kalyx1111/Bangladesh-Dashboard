# 🇧🇩 BANGLADESH DASHBOARD v1.0

---

#### 🌏 REGIONAL INTELLIGENCE & GEOSPATIAL MONITORING

**Bangladesh Dashboard** is a locally hosted OSINT platform combining interactive mapping, regional news monitoring, geospatial data and multiple intelligence categories in one interface.

It focuses on Bangladesh and its surrounding region, including the Bay of Bengal and the Myanmar border area.

**Map the region. Monitor the headlines. Track emerging developments.**

---

#### 🎯 CORE FEATURES

- Interactive Bangladesh map with regional geographic coverage
- Division boundaries, rivers, towns and populated places
- Military divisions, cantonments, air force bases and naval locations
- Defence industries and strategic infrastructure
- Nuclear energy and power projects
- Sea ports, river ports and civil airports
- Conflict-area and border-region references
- 15 configurable intelligence categories
- Regional news aggregation and headline classification
- Source status monitoring

---

#### 🗂️ INTELLIGENCE CATEGORIES

- Geopolitical & Diplomatic
- Military Operations & Force Posture
- Strategic Arms & Nuclear Program
- Naval & Maritime Security
- Bay of Bengal & Maritime Chokepoints
- Air Force & Aviation
- Space Tech & AI
- Cyber Espionage & APTs
- Darkweb & Threat Intel
- Economic & Trade
- Internal Security & Intelligence Operations
- Social Pulse & Public Sentiment
- Happiness & Wellbeing Indices
- Natural Hazards & Environmental Risks
- Additional category configured within the application

---

#### 📰 DATA & INTELLIGENCE FEEDS

The dashboard supports multiple types of regional and open-source data:

- **GDELT:** Regional news and event reporting
- **RSS / Atom:** News from configured media and specialist feeds
- **Public Telegram:** Channel previews and updates
- **Instagram:** Optional official Meta Business Discovery integration
- **Dark-web RSS:** Verified onion RSS feeds accessed through Tor
- **Ransomware intelligence:** Regional leak-site claims from Ransomware.live
- **Earthquake data:** USGS earthquake information
- **Geospatial data:** Geographic boundaries, rivers, towns and infrastructure locations
- **Defence and security data:** Published military, maritime, aviation and industrial site references
- **Energy and economic data:** Power projects, ports and related infrastructure
- **Conflict references:** Selected border areas and reported incident locations

Feed availability depends on network connectivity, source configuration and access requirements.

---

#### 🗺️ MAP DATA

The documented build includes:

- 9 region outlines
- 11 rivers
- 16 towns and populated places
- 62 site records represented by 79 map points
- 15 configurable map-layer toggles
- Approximately 50 km of surrounding regional coverage

**Note:** Some site locations are approximate reference points, not verified operational positions. Map markers do not establish current activity or readiness.

---

#### 🔐 SECURITY & PRIVACY

- Localhost-only web server
- AES-256-GCM encryption for stored API keys and tokens
- Content Security Policy
- No third-party scripts, fonts or trackers
- Input and displayed-content validation
- Optional proxy support for clear-web requests
- Tor-only routing for configured onion sources

The dashboard is designed for local, single-user operation.

---

#### ⚙️ INSTALLATION & LAUNCH

**Windows:** Double-click `start.bat`

**Local dashboard:**

`http://127.0.0.1:8795/`

The launcher is designed to prepare the Python environment, install dependencies, run checks and start the application.

---

#### 🧪 TESTING

The supplied build notes report:

- 36 Python tests passed
- 3 browser test suites passed
- 15 intelligence heading panels
- 15 map-layer toggles

Live external news-feed connectivity was not verified in the build environment and should be checked on the target computer.

---

#### ⚠️ LIMITATIONS

- Most military and industrial markers are approximate.
- External feeds may be unavailable or require configuration.
- Dark-web RSS requires a working Tor service and verified sources.
- Reported incidents and leak-site claims may be incomplete or unverified.
- The dashboard does not provide guaranteed real-time intelligence or verified operational positions.

---

#### 🛡️ RESPONSIBLE USE

Intended for lawful OSINT research, regional news monitoring, geographic analysis and situational awareness. Verify important information through reliable sources before relying on it.

---

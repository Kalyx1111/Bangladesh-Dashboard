"""Routes every headline into one of the 15 dashboard headings (Bangladesh and its margin).

Plain ordered keyword rules - readable and editable. Order matters: the most specific headings are tested first.
Short keywords are whole-word matches (padded with spaces): " rab " does not match "rabbit", " import " does not
match "important", " jss " does not match "jssl", " drill " does not match "drilling", " jet " does not match
"jetty", " poll " does not match "pollution". Armed-group names are recognised before internal-security wording,
and navy terms before geography. A headline that matches no rule goes to "geo".

Heading keys match the other builds. The "scs" key means the Bay of Bengal and maritime heading for this region.
"""

HEADINGS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber",
            "darkweb", "econ", "mss", "social", "wellbeing", "hazard"]

RULES = [
    ("darkweb", ["dark web", "darknet", "onion", "ransomware", "leak site", "infostealer", "stealer",
                 "data breach", "data leak", "breached", "threat intel", "threat intelligence", "initial access broker"]),
    ("cyber", ["cyber", "hacker", "hacked", "hacking", "malware", "vulnerabilit", "intrusion", "zero-day",
               " apt ", " apt-", "backdoor", "phishing", "ddos", "cyberattack", "spear-phish", "espionage campaign"]),
    ("hazard", ["earthquake", "tremor", "cyclone", "flood", "monsoon", "landslide", "tsunami", "heatwave", "storm",
                "drought", "waterlogging", "erosion", "river erosion", "wildfire"]),
    ("milops", ["arakan army", "rohingya army"]),
    ("mss", ["updf", " jss ", "jana samhati", "shanti bahini", "kuki-chin", " knf ", " kna ", "arsa", " rab ", " dgfi ",
             " nsi ", "crackdown", "detained", "arrested", "sentenced", "dissident", "police", "protest", "militant",
             "militancy", "insurgent", "insurgency", "terror", "terrorist", "extremist", "hefazat", "espionage", " spy ",
             "surveillance", "smuggling", "trafficking", "yaba", "illegal arms", "communal"]),
    ("naval", ["navy", "naval", "submarine", "warship", "frigate", "destroyer", "coast guard", "shipyard", "dry dock",
               "patrol vessel", "pekua", "bnS ", "naval fleet", " sub "]),
    ("scs", ["bay of bengal", "maritime boundary", "kutubdia", "sea lane", "shipping lane", "chokepoint", "port call",
             "tanker", "chattogram port", "mongla port", "payra port", "naf river", "indian ocean"]),
    ("air", ["air force", "fighter", " jet ", " jets ", "drone", "airspace", "airport", "air base", "airbase", "baf ",
             "aviation", "aircraft", "helicopter", "uav ", "sortie", "jet crash"]),
    ("space", ["satellite", "space", "rocket", "launch", "orbit", "spacecraft", "isro", "sriharikota"]),
    ("arms", ["nuclear", "rooppur", "reactor", "uranium", "warhead", "missile", "enrichment", "ballistic", "ordnance",
              "ammunition", "artillery"]),
    ("tech", ["artificial intelligence", " ai ", "chips", "semiconductor", "export control", "huawei", "digital", "5g",
              " tech "]),
    ("milops", ["army", "military", "troops", "soldier", "soldiers", "clash", "cantonment", "ceasefire", "offensive",
                "exercise", " drill ", "deploy", "garrison", "airstrike", "air strike", "border clash", "operation",
                "live-fire", "patrol"]),
    ("econ", [" trade ", "tariff", " export ", " exports ", " import ", " imports ", "taka", "garment", "rmg",
              "remittance", "inflation", " imf ", "budget", "debt", "investment", "economy", "economic", "sanction",
              "loan", "power plant", "electricity", "fuel", "rampal", "matarbari", "shipbuilding"]),
    ("social", ["rohingya", "refugee", "social media", "facebook", "viral", "students", "youth", "public opinion",
                " poll ", "women", "rape", "online debate", "trending"]),
    ("wellbeing", ["happiness", "wellbeing", "well-being", "life expectancy", "poverty", "human development index"]),
]


def classify(text: str) -> str:
    t = " " + (text or "").lower() + " "
    for heading, words in RULES:
        if any(w in t for w in words):
            return heading
    return "geo"

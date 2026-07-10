const courses = [
  "AB Art Management",
  "AB Chinese Studies",
  "AB Communication",
  "AB Development Studies",
  "AB Diplomacy and International Relations with Specialization in East and Southeast Asian Studies",
  "AB Economics",
  "AB Economics (Honors Program)",
  "AB European Studies",
  "AB History",
  "AB Humanities",
  "AB Interdisciplinary Studies",
  "AB Literary and Cultural Studies Program",
  "AB Literature (English)",
  "AB Management Economics",
  "AB Panitikang Filipino",
  "AB Philosophy",
  "AB Political Science",
  "AB Political Science - M Public Management",
  "AB Political Science - MA Political Science, major in Global Politics",
  "AB Psychology",
  "AB Sociology",
  "BFA Creative Writing",
  "BFA Information Design",
  "BFA Theater Arts",
  "BS Applied Mathematics - M Data Science",
  "BS Applied Mathematics with Specialization in Mathematical Finance - M Applied Mathematics, major in Mathematical Finance",
  "BS Applied Physics - BS Materials Science and Engineering",
  "BS Biology",
  "BS Chemistry",
  "BS Chemistry - BS Materials Science and Engineering",
  "BS Chemistry - MS Chemistry",
  "BS Communications Technology Management",
  "BS Computer Engineering",
  "BS Computer Science",
  "BS Computer Science - BS Digital Game Design and Development",
  "BS Computer Science - MS Computer Science",
  "BS Electronics Engineering",
  "BS Environmental Science",
  "BS Health Sciences",
  "BS Information Technology Entrepreneurship",
  "BS Learning Science and Design (BS LEARN)",
  "BS Legal Management",
  "BS Life Sciences",
  "BS Management",
  "BS Management (Honors Program)",
  "BS Management Engineering",
  "BS Management Information Systems",
  "BS Management Information Systems - MS Computer Science",
  "BS Management of Applied Chemistry",
  "BS Mathematics",
  "BS Physics",
  "BS Psychology",
  "BS Restaurant Entrepreneurship",
  "BS Innovation Design Engineering"
];

const yearLevels = [
  "1st year",
  "2nd year",
  "3rd year",
  "4th year",
  "5th year or higher",
  "Graduate student"
];

const interestGroups = [
  { id: "sports", label: "Sports", subtags: ["tennis", "basketball", "pickleball", "fun run", "beginner games"] },
  { id: "arts", label: "Arts", subtags: ["museum", "theater", "creative writing", "design", "music"] },
  { id: "orgs", label: "Orgs", subtags: ["rec week", "talks", "advocacy", "business", "culture"] },
  { id: "food", label: "Food", subtags: ["food talks", "coffee", "restaurants", "snacks", "creator talks"] },
  { id: "literature", label: "Literature", subtags: ["poetry", "fiction", "essays", "filipino literature", "book clubs"] },
  { id: "wellness", label: "Wellness", subtags: ["quiet night", "walking", "mindful break", "low crowd", "movement"] },
  { id: "boardgames", label: "Board games", subtags: ["party games", "strategy", "casual tables", "beginner rules", "library games"] },
  { id: "culture", label: "Culture", subtags: ["exhibits", "campus traditions", "talks", "zen garden", "performances"] },
  { id: "music", label: "Music", subtags: ["concert", "open crowd", "acoustic", "field event", "performances"] },
  { id: "friends", label: "Social", subtags: ["go with someone", "small group", "meet new people", "arrive together", "low pressure"] }
];

const personalityTypes = {
  independent: {
    title: "The Independent Explorer",
    badge: "Independent Explorer",
    summary: "You prefer low-pressure plans, smaller groups, and events where conversation can happen naturally.",
    algorithm: "TAYO gives extra weight to chill events, small groups, okay-to-go-alone flags, and interests that create easy conversation starters.",
    next: "Start with Arete Museum Viewing or Board Games in New Rizal Library."
  },
  connector: {
    title: "The High-Energy Connector",
    badge: "High-Energy Connector",
    summary: "You are more open to big crowds, loud events, and first moves that put you in the middle of campus energy.",
    algorithm: "TAYO boosts outgoing events, larger groups, concerts, sports, and org activities with visible meeting points.",
    next: "Start with Love Box Concert, Cov Courts Basketball, or MeCO Fun Run."
  },
  balanced: {
    title: "The Balanced Participant",
    badge: "Balanced Participant",
    summary: "You like having a clear activity or topic, but you can enjoy either calm spaces or more social campus moments.",
    algorithm: "TAYO balances chill and outgoing signals, then prioritizes events with clear activities, easy entry points, and tags you selected.",
    next: "Start with Moonrabbit, Rec Week for Orgs, or Abi Marquez Talk."
  }
};

const personalityTypeImages = {
  independent: "assets/tayo-types/independent-figma.svg",
  connector: "assets/tayo-types/connector-figma.svg",
  balanced: "assets/tayo-types/balanced-figma.svg"
};

const places = [
  { id: "leong", name: "Leong Hall", category: "landmarks", area: "north", x: 72, y: 20, short: "Common class and office landmark.", why: "Freshies and upperclass students use Leong Hall as an easy meeting point.", directions: ["From the main walk, face the SEC Field side.", "Walk toward the tall white building beside the open lawn.", "Use the front entrance facing the driveway."], nearby: ["Abi Marquez Talk", "SEC Walk", "Gate 3"] },
  { id: "secwalk", name: "SEC Walk", category: "landmarks", area: "north", x: 32, y: 25, short: "Busy walkway and org booth area.", why: "This is where many org announcements, booths, and first-week signups happen.", directions: ["From Leong Hall, walk toward the open field.", "Follow the covered path with student booths.", "Look for the benches and org tables."], nearby: ["Rec Week for Orgs", "Gonzaga Cafeteria", "SEC B Vending"] },
  { id: "gonzaga", name: "Gonzaga Cafeteria", category: "food", area: "central", x: 47, y: 43, short: "Reliable place to eat between classes.", why: "Good first stop when you do not know where to eat yet.", directions: ["From Leong Hall, walk past SEC Walk.", "Continue toward the central food area.", "Enter the cafeteria beside the covered walkway."], nearby: ["JSEC", "SEC Walk", "Matteo Ricci Study Hall"] },
  { id: "jsec", name: "JSEC Food Stalls", category: "food", area: "central", x: 57, y: 50, short: "Student-run food stalls.", why: "Useful for fast meals, student businesses, and casual meetups.", directions: ["From Gonzaga, follow the path toward the student enterprise stalls.", "Look for clustered food booths and outdoor seating.", "Check stall hours before going late."], nearby: ["Gonzaga Cafeteria", "MVP Center", "Matteo Ricci Study Hall"] },
  { id: "rizal", name: "New Rizal Library", category: "study", area: "central", x: 61, y: 61, short: "Main study and research space.", why: "Good for board games, waiting between classes, and quiet study blocks.", directions: ["From Leong Hall, walk down the central spine toward MVP.", "Continue toward the large library building beside the open campus walk.", "Enter through the lobby and prepare your student ID."], nearby: ["Board Games in New Rizal Library", "Arete", "Printing"] },
  { id: "oldrizal", name: "Old Rizal Library", category: "study", area: "central", x: 47, y: 57, short: "Older library landmark and quieter study reference point.", why: "Useful when students mention old Rizal or nearby mini-theater locations.", directions: ["From Leong Hall, follow the central walk toward MVP.", "Continue past the middle campus buildings toward the old library area.", "Use Google Maps if you need the exact room or entrance."], nearby: ["Rizal Mini Theater", "MVP Center", "New Rizal Library"] },
  { id: "som405", name: "SOM 405 Business Resource Center", category: "study", area: "central", x: 70, y: 47, short: "Business resource and study space inside SOM.", why: "Helpful for SOM students looking for a focused work area.", directions: ["From Leong Hall, walk toward SEC Walk and Gonzaga.", "Continue to the JGSOM building.", "Go to SOM 405; exact internal route can be confirmed later."], nearby: ["JGSOM Building", "JSEC", "Gonzaga Cafeteria"] },
  { id: "arete", name: "Arete", category: "student-life", area: "north", x: 78, y: 58, short: "Arts, talks, and exhibitions.", why: "Good place for creative events and culture-related activities.", directions: ["From Gate 3, follow the road toward the arts building.", "Look for the open lobby and exhibition area.", "Check event room details before entering."], nearby: ["Arete Museum Viewing", "Leong Hall", "Rizal Library"] },
  { id: "bell", name: "Bellarmine Field", category: "student-life", area: "central", x: 52, y: 76, short: "Open field and large event point.", why: "Often used for concerts, wellness events, and outdoor meetups.", directions: ["From MVP, walk toward the open field area.", "Stay on the paved path until the field opens up.", "Meet near the visible benches."], nearby: ["Love Box Concert", "MVP Center", "Rizal Library"] },
  { id: "gym", name: "Blue Eagle Gym", category: "student-life", area: "south", x: 74, y: 78, short: "Sports and larger student events.", why: "Useful for PE, sports events, and high-energy student gatherings.", directions: ["From Rizal Library, follow the path toward the sports facilities.", "Use the main entrance facing the court side.", "Check whether an event uses a side entrance."], nearby: ["MeCO Fun Run", "Cov Courts Basketball", "Bellarmine Field"] },
  { id: "gate3", name: "Gate 3", category: "transport", area: "north", x: 84, y: 35, short: "Off-campus meeting point with tricycles to nearby areas.", why: "Used for plans that start outside campus. Tricycles there can bring students to nearby areas such as Torre and UPTC.", directions: ["From Leong Hall, walk toward the driveway.", "Follow the road signs toward Gate 3.", "Wait near the marked loading area or tricycle queue."], nearby: ["Tennis at Valle Verde", "Torre", "UPTC"] },
  { id: "zen", name: "Zen Garden", category: "student-life", area: "central", x: 42, y: 58, short: "Outdoor pause point for smaller events.", why: "Good for flexible org events that can feel calm or social.", directions: ["From SEC Walk, continue toward the greener central courtyard.", "Look for the quieter garden area.", "Stay near the main path if meeting someone."], nearby: ["Moonrabbit", "MVP Center", "Gonzaga Cafeteria"] },
  { id: "rbr", name: "Red Brick Road", category: "student-life", area: "central", x: 35, y: 72, short: "Org and event room area, usually called RBR.", why: "Useful for rec week, talks, and student activity programming.", directions: ["From MVP, follow the central path toward the event rooms.", "Look for the Red Brick Road or RBR signage.", "Check the room number before entering."], nearby: ["Rec Week for Orgs", "MVP Center", "Bellarmine Field"] },
  { id: "cov", name: "Covered Courts", category: "student-life", area: "south", x: 62, y: 83, short: "Basketball and informal sports point.", why: "A clear meet-up place for casual games and active events.", directions: ["From Blue Eagle Gym, walk toward the court side.", "Look for the covered court area.", "Meet near the entrance closest to the path."], nearby: ["Cov Courts Basketball", "Blue Eagle Gym", "Bellarmine Field"] },
  { id: "northpark", name: "North Carpark", category: "parking", area: "north", x: 18, y: 29, short: "Parking near the north academic buildings.", why: "Useful for events near Leong, SEC Walk, and Gonzaga.", directions: ["From Leong Hall, walk toward the north side driveway.", "Follow campus signs for North Carpark.", "Exact slot availability is unknown in this prototype."], nearby: ["SEC Walk", "Gonzaga", "Leong Hall"] },
  { id: "northwestpark", name: "Northwest Carpark", category: "parking", area: "north", x: 15, y: 48, short: "Parking near the west side of campus.", why: "Helpful when entering from the northwest side or walking toward MVP.", directions: ["From Leong Hall, head west along the main campus walk.", "Continue toward the carpark side road.", "Exact driving entrance is unknown in this prototype."], nearby: ["MVP Center", "Rizal Library", "Faura Hall"] },
  { id: "aretepark", name: "Areté Parking", category: "parking", area: "north", x: 76, y: 54, short: "Parking option closest to Areté.", why: "Best for talks, exhibits, and creative events at Areté.", directions: ["From Areté, follow the nearby driveway toward the parking area.", "For walking from Leong Hall, go through the north campus path.", "Exact parking entrance is unknown in this prototype."], nearby: ["Areté", "Gate 3", "Rizal Library"] },
  { id: "uppercovpark", name: "Upper Covered Courts Parking", category: "parking", area: "south", x: 68, y: 77, short: "Parking near sports facilities.", why: "Useful for Blue Eagle Gym and covered courts events.", directions: ["From Blue Eagle Gym, walk toward the upper court-side parking area.", "Use the paved path near the sports facilities.", "Exact driving entrance is unknown in this prototype."], nearby: ["Blue Eagle Gym", "Covered Courts"] },
  { id: "lowercovpark", name: "Lower Covered Courts Parking", category: "parking", area: "south", x: 56, y: 86, short: "Lower parking option by the courts.", why: "Good backup parking for sports and late afternoon events.", directions: ["From the Covered Courts, walk downhill toward the lower court-side parking.", "Stay on the main paved path.", "Exact driving entrance is unknown in this prototype."], nearby: ["Covered Courts", "Bellarmine Field"] },
  { id: "irhprint", name: "IRH Printing", category: "printing", area: "central", x: 66, y: 57, short: "Printing option near the library and central campus.", why: "Useful before events that require forms, tickets, or printed requirements.", directions: ["From Leong Hall, walk toward New Rizal Library.", "Look for the IRH-side printing option near central campus.", "Exact stall placement is unknown in this prototype."], nearby: ["Rizal Library", "Areté"] },
  { id: "secaprint", name: "SEC-A First Floor Printing", category: "printing", area: "north", x: 59, y: 39, short: "Printing option on the first floor of SEC-A.", why: "Convenient for students near SEC Walk and north campus.", directions: ["From Leong Hall, walk toward SEC Walk.", "Enter SEC-A and go to the first floor printing area.", "Exact room or stall name is unknown in this prototype."], nearby: ["SEC Walk", "Gonzaga", "Leong Hall"] },
  { id: "ashop", name: "A-Shop", category: "printing", area: "central", x: 52, y: 67, short: "Printing and student supply stop.", why: "Useful for quick printing, school supplies, and event materials.", directions: ["From Leong Hall, walk toward MVP and the central student services area.", "Look for A-Shop signage.", "Exact internal placement is unknown in this prototype."], nearby: ["MVP Center", "Bellarmine Field"] },
  { id: "infirmary", name: "Infirmary / UHS College", category: "misc", area: "central", x: 31, y: 43, short: "Health services at SS-105, G/F Social Sciences Building.", why: "Go here for college health concerns, basic medical help, and UHS guidance.", contact: "Contact UHS-College", phone: "+63 918 944 5997 (Smart), +63 966 911 4141 (Globe)", email: "", officeHours: "Unknown", directions: ["From Leong Hall, walk toward the Social Sciences Building.", "Go to the ground floor and look for SS-105.", "If urgent, call UHS-College using the listed Smart or Globe number."], nearby: ["Social Sciences Building", "Leong Hall"] },
  { id: "sohdean", name: "SOH Dean's Office", category: "offices", area: "central", x: 37, y: 52, short: "School of Humanities dean's office at G/F De la Costa Hall.", why: "For SOH concerns and dean's office inquiries.", contact: "Dr. Patricia P. Lambino, SOH Dean", phone: "426-6001 loc. 5301 and 5303", email: "dean.soh@ateneo.edu", officeHours: "8:00 AM-5:00 PM", directions: ["From Leong Hall, follow the central walk toward De la Costa Hall.", "Enter the ground floor.", "Ask for the SOH Dean's Office."], nearby: ["De la Costa Hall", "Modern Languages", "Philosophy"] },
  { id: "finearts", name: "Fine Arts Department", category: "offices", area: "north", x: 25, y: 55, short: "Fine Arts office at 2/F right wing of Areté.", why: "For Fine Arts advisement, IPS, and department concerns.", contact: "Ms. Roxan Cuacoy, Department Secretary", phone: "8426-6001 local 5330", email: "finearts.soh@ateneo.edu", officeHours: "8:00 AM-7:00 PM", directions: ["From Leong Hall, head toward Areté.", "Go to the second floor right wing.", "Look for the Fine Arts office."], nearby: ["Areté", "Areté Parking"] },
  { id: "englishdept", name: "English Department", category: "offices", area: "central", x: 39, y: 54, short: "English Department at G/F De la Costa Hall.", why: "For English Department questions and course-related concerns.", contact: "Peachie Reyes, Administrative Assistant", phone: "8426-6001 local 5310", email: "english.soh@ateneo.edu", officeHours: "8:00 AM-5:00 PM", directions: ["From Leong Hall, walk toward De la Costa Hall.", "Enter the ground floor.", "Look for the English Department office."], nearby: ["De la Costa Hall", "SOH Dean's Office"] },
  { id: "qmit", name: "QMIT Department", category: "offices", area: "central", x: 69, y: 45, short: "QMIT office at SOM 504, 5/F JGSOM Building.", why: "For Quantitative Methods and Information Technology department concerns.", contact: "Mr. Alyson L. Yap, Department Chair; Ms. Cristy M. Esteban, Department Secretary", phone: "0931-057-5817, 8426-6001 loc. 5541", email: "ayap@ateneo.edu, qmit.jgsom@ateneo.edu, cmesteban@ateneo.edu", officeHours: "9:00 AM-6:00 PM", directions: ["From Leong Hall, walk toward Gonzaga and JGSOM.", "Go to the fifth floor.", "Look for SOM 504."], nearby: ["JGSOM Building", "SOM 405 Business Resource Center", "JSEC"] },
  { id: "legalmanagement", name: "Legal Management Program", category: "offices", area: "central", x: 68, y: 43, short: "Legal Management office at SOM 502, 5/F JGSOM Building.", why: "For Legal Management program questions.", contact: "Atty. Rhea Quimson, Program Director; Ms. Ma. Isabel Nucasa, Program Secretary", phone: "0969-1402-533, 8426-6001 loc. 5548", email: "lm.jgsom@ateneo.edu, mnucasa@ateneo.edu", officeHours: "Unknown", directions: ["From Leong Hall, walk toward JGSOM.", "Go to the fifth floor.", "Look for Room 502."], nearby: ["JGSOM Building", "QMIT Department"] }
];

const placeMapTargets = {
  leong: "Leong Hall, Ateneo de Manila University, Quezon City",
  secwalk: "SEC Walk, Ateneo de Manila University, Quezon City",
  gonzaga: "Gonzaga Hall Cafeteria, Ateneo de Manila University, Quezon City",
  jsec: "JSEC, Ateneo de Manila University, Quezon City",
  rizal: "New Rizal Library, Ateneo de Manila University, Quezon City",
  oldrizal: "Old Rizal Library, Ateneo de Manila University, Quezon City",
  som405: "John Gokongwei School of Management Ateneo de Manila University, Quezon City",
  arete: "Areté Ateneo, Quezon City",
  bell: "Bellarmine Field, Ateneo de Manila University, Quezon City",
  gym: "Blue Eagle Gym, Ateneo de Manila University, Quezon City",
  gate3: "Gate 3, Ateneo de Manila University, Quezon City",
  zen: "Zen Garden, Ateneo de Manila University, Quezon City",
  rbr: "Red Brick Road Ateneo de Manila University, Quezon City",
  cov: "Covered Courts, Ateneo de Manila University, Quezon City",
  infirmary: "Social Sciences Building Ateneo de Manila University, Quezon City",
  sohdean: "De la Costa Hall Ateneo de Manila University, Quezon City",
  finearts: "Areté Ateneo de Manila University, Quezon City",
  englishdept: "De la Costa Hall Ateneo de Manila University, Quezon City",
  qmit: "John Gokongwei School of Management Ateneo de Manila University, Quezon City",
  legalmanagement: "John Gokongwei School of Management Ateneo de Manila University, Quezon City"
};

const placeMedia = {
  leong: "assets/places/1-leong-heic.jpg",
  secwalk: "assets/places/2-secwalk-jpg.jpg",
  gonzaga: "assets/places/3-gonz-png.png",
  jsec: "assets/places/4-jsec-jpg.jpg",
  rizal: "assets/places/5-newriz-jpg.jpg",
  oldrizal: "assets/places/6-oldriz-jpg.jpg",
  som405: "assets/places/7-brc-heic.jpg",
  arete: "assets/places/8-arete-jpg.jpg",
  bell: "assets/places/9-belfeild-jpg.jpg",
  gym: "assets/places/10-blueeagle-jpg.jpg",
  gate3: "assets/places/11-gate3-5-jpg.jpg",
  zen: "assets/places/12-zengarden-heic.jpg",
  rbr: "assets/places/13-rbr-jpg.jpg",
  northpark: "assets/places/15-northcarpark-jpg.jpg",
  northwestpark: "assets/places/16-northwestparking-jpg.jpg",
  aretepark: "assets/places/17-aretecarpark-jpg.jpg",
  uppercovpark: "assets/places/18-upperparking-jpg.jpg",
  lowercovpark: "assets/places/19-lowercarpark-jpg.jpg",
  irhprint: "assets/places/20-irhprinter-jpg.jpg",
  secaprint: "assets/places/21-secaprint-heic.jpg",
  ashop: "assets/places/22-a-shop-heic.jpg",
  infirmary: "assets/places/23-infirmary-heic.jpg",
  sohdean: "assets/places/24-sohdean-heic.jpg",
  finearts: "assets/places/25-fineartsdep-heic.jpg",
  englishdept: "assets/places/26-engdep-heic.jpg",
  qmit: "assets/places/27-qmit-heic.jpg",
  legalmanagement: "assets/places/28-legma-heic.jpg"
};

places.forEach((place) => {
  place.image = placeMedia[place.id] || "";
  place.mapQuery = place.mapQuery || placeMapTargets[place.id] || `${place.name}, Ateneo de Manila University, Quezon City`;
});

places.forEach((place) => {
  place.mapQuery = placeMapTargets[place.id] || `${place.name}, Ateneo de Manila University, Quezon City`;
});

const categoryPinLabels = {
  food: "F",
  transport: "T",
  study: "S",
  "student-life": "L",
  parking: "P",
  printing: "Pr",
  offices: "O",
  misc: "Mi",
  events: "E",
  landmarks: "Mk"
};

const monthMeta = {
  Aug: { year: 2027, monthIndex: 7 },
  Sep: { year: 2027, monthIndex: 8 },
  Oct: { year: 2027, monthIndex: 9 },
  Nov: { year: 2027, monthIndex: 10 },
  Dec: { year: 2027, monthIndex: 11 },
  Jan: { year: 2027, monthIndex: 0 }
};

const events = [
  { id: "tennis", title: "Tennis at Valle Verde", type: "social", location: "Outside Gate 3 to Valle Verde", area: "outside", day: "Mon", time: "4:30 PM", deadline: "Mon 12:00 PM", interests: ["sports", "friends"], subtags: ["tennis", "beginner games", "arrive together"], energy: "outgoing", commitment: "1.5 hours", beginner: true, alone: false, group: "small", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["active", "outgoing"], expect: "Meet at Gate 3, walk or ride together to Valle Verde, then rotate beginner-friendly games.", goodFor: "Students who want an active plan outside campus but prefer arriving with a group.", bring: "Rubber shoes, water, and racket if you have one.", description: "Outgoing social gathering for students who want a sporty first hangout." },
  { id: "stargazing", title: "Stargazing at Father Masterson", type: "social", location: "Father Masterson Drive", area: "central", day: "Mon", time: "7:00 PM", deadline: "Mon 3:00 PM", interests: ["wellness", "friends", "culture"], subtags: ["quiet night", "low crowd", "small group"], energy: "chill", commitment: "1 hour", beginner: true, alone: true, group: "small", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["chill", "planner"], expect: "Sit in a small group, talk quietly, and use the campus landmark as an easy meet-up point.", goodFor: "Students who want a peaceful night activity without a loud crowd.", bring: "Light jacket or picnic mat.", description: "Chill social gathering for low-pressure conversation and campus familiarization." },
  { id: "boardgames", title: "Board Games in New Rizal Library", type: "social", location: "New Rizal Library", area: "central", day: "Tue", time: "3:30 PM", deadline: "Tue 11:00 AM", interests: ["boardgames", "friends", "study"], subtags: ["library games", "beginner rules", "casual tables"], energy: "chill", commitment: "1 hour", beginner: true, alone: true, group: "small", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["chill", "planner"], expect: "Join a table, learn one short game, and leave whenever your next class starts.", goodFor: "Students who want company without having to make constant small talk.", bring: "Student ID and an easy snack if allowed.", description: "Chill social gathering inside New Rizal Library for easing into campus life." },
  { id: "basketball", title: "Cov Courts Basketball", type: "social", location: "Covered Courts", area: "south", day: "Wed", time: "5:30 PM", deadline: "Wed 1:00 PM", interests: ["sports", "friends"], subtags: ["basketball", "movement", "meet new people"], energy: "outgoing", commitment: "Drop-by", beginner: true, alone: true, group: "medium", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["active", "outgoing"], expect: "Casual shootaround and rotating teams, with no varsity-level commitment expected.", goodFor: "Students who want to move, meet people, and not overthink the first hello.", bring: "Rubber shoes, water, and extra shirt.", description: "Outgoing basketball social at the covered courts." },
  { id: "museum", title: "Arete Museum Viewing", type: "social", location: "Arete", area: "north", day: "Thu", time: "2:00 PM", deadline: "Thu 10:00 AM", interests: ["arts", "culture", "friends"], subtags: ["museum", "exhibits", "low pressure"], energy: "chill", commitment: "1 hour", beginner: true, alone: true, group: "small", schoolTags: ["SOM", "SOH", "SOSS"], personalityFit: ["creative", "chill"], expect: "Walk through the exhibit, compare favorite pieces, then optionally get coffee nearby.", goodFor: "Students who want a quieter cultural event with an easy conversation starter.", bring: "Student ID and phone for photos if allowed.", description: "Chill social gathering for exploring Arete without having to go alone." },
  { id: "recweek", title: "Rec Week for Orgs", type: "org", location: "RBR", area: "central", day: "Tue", time: "10:00 AM", deadline: "Open all day", interests: ["orgs", "friends"], subtags: ["rec week", "business", "advocacy", "culture"], energy: "both", commitment: "Drop-by", beginner: true, alone: true, group: "large", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["planner", "outgoing"], expect: "Browse booths, ask quick questions, and save orgs you want to revisit later.", goodFor: "Students comparing org options without committing yet.", bring: "Phone and student ID.", description: "Org event for discovering student organizations at RBR." },
  { id: "lovebox", title: "Love Box Concert", type: "org", location: "Bellarmine Field", area: "central", day: "Wed", time: "6:30 PM", deadline: "Wed 2:00 PM", interests: ["music", "orgs", "friends"], subtags: ["concert", "open crowd", "field event"], energy: "outgoing", commitment: "2 hours", beginner: true, alone: false, group: "large", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["outgoing", "creative"], expect: "Outdoor concert setup, louder crowd energy, and group meetups before the set starts.", goodFor: "Students who want a memorable first big campus event.", bring: "Water, small bag, and friends or a TAYO buddy request.", description: "Outgoing org event and concert at Bellarmine Field." },
  { id: "moonrabbit", title: "Moonrabbit", type: "org", location: "Zen Garden", area: "central", day: "Thu", time: "5:00 PM", deadline: "Thu 12:00 PM", interests: ["arts", "culture", "orgs"], subtags: ["zen garden", "performances", "culture"], energy: "both", commitment: "Drop-by", beginner: true, alone: true, group: "medium", schoolTags: ["SOM", "SOH", "SOSS"], personalityFit: ["creative", "chill", "outgoing"], expect: "Drop by the Zen Garden, view activities or booths, and stay for as long as the vibe fits.", goodFor: "Students who want a flexible org event that can be calm or social.", bring: "Nothing required.", description: "Flexible org event in Zen Garden that works for both chill and outgoing students." },
  { id: "abi", title: "Abi Marquez Talk", type: "org", location: "Leong Hall", area: "north", day: "Fri", time: "2:30 PM", deadline: "Fri 9:00 AM", interests: ["food", "talks", "orgs"], subtags: ["food talks", "creator talks", "business"], energy: "chill", commitment: "1 hour", beginner: true, alone: true, group: "medium", schoolTags: ["SOM", "SOH", "SOSS"], personalityFit: ["planner", "creative", "chill"], expect: "Listen to the talk, ask questions if comfortable, and use it as an easy first academic-social event.", goodFor: "Students interested in food content, entrepreneurship, media, or creator stories.", bring: "Notes app or notebook.", description: "Chill org talk at Leong Hall featuring Abi Marquez." },
  { id: "meco", title: "MeCO Fun Run", type: "org", location: "Blue Eagle Gym", area: "south", day: "Sat", time: "6:00 AM", deadline: "Fri 5:00 PM", interests: ["sports", "wellness", "orgs"], subtags: ["fun run", "movement", "beginner games"], energy: "outgoing", commitment: "Morning event", beginner: true, alone: false, group: "large", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["active", "outgoing"], expect: "Meet early near Blue Eagle Gym, warm up, run as a group, then cool down after.", goodFor: "Students who want a high-energy org event with a clear shared activity.", bring: "Running shoes, water, towel, and change of shirt.", description: "Outgoing MeCO org event centered on movement and team energy." }
];

const additionalEventSeeds = [
  ["orgfair", "Org Fair Booth Crawl", "org", "SEC Walk", "central", "Aug", "Mon", "11:00 AM", ["orgs", "friends"], ["rec week", "advocacy"], "both", "outdoor", "open"],
  ["openmic", "Ateneo Open Mic Night", "social", "MVP Roofdeck", "central", "Aug", "Tue", "6:00 PM", ["music", "friends"], ["acoustic", "small group"], "chill", "outdoor", "open"],
  ["filmnight", "Campus Film Night", "social", "Rizal Mini Theater", "central", "Aug", "Wed", "5:30 PM", ["culture", "arts"], ["performances", "low pressure"], "chill", "indoor", "open"],
  ["startup", "Student Startup Mixer", "org", "JGSOM Building", "central", "Aug", "Thu", "4:30 PM", ["orgs", "food"], ["business", "talks"], "outgoing", "indoor", "org-exclusive"],
  ["poetry", "Poetry Circle", "social", "New Rizal Library", "central", "Aug", "Fri", "3:00 PM", ["literature", "friends"], ["poetry", "book clubs"], "chill", "indoor", "open"],
  ["volunteer", "Volunteer Sign-up Day", "org", "MVP Center", "central", "Sep", "Mon", "10:30 AM", ["orgs", "culture"], ["advocacy", "rec week"], "both", "indoor", "open"],
  ["coffeechat", "Coffee Chat for Freshies", "social", "Gonzaga Cafeteria", "central", "Sep", "Tue", "2:00 PM", ["food", "friends"], ["coffee", "small group"], "chill", "indoor", "open"],
  ["designjam", "Design Jam", "org", "Areté", "north", "Sep", "Wed", "4:00 PM", ["arts", "orgs"], ["design", "creative writing"], "both", "indoor", "org-exclusive"],
  ["pickleball", "Pickleball Trial Games", "social", "Covered Courts", "south", "Sep", "Thu", "5:00 PM", ["sports", "friends"], ["pickleball", "beginner games"], "outgoing", "indoor", "open"],
  ["foodcrawl", "JSEC Food Crawl", "social", "JSEC Food Stalls", "central", "Sep", "Fri", "12:30 PM", ["food", "friends"], ["snacks", "restaurants"], "outgoing", "outdoor", "open"],
  ["wellnesswalk", "Wellness Walk", "social", "Bellarmine Field", "central", "Sep", "Sat", "7:00 AM", ["wellness", "friends"], ["walking", "movement"], "chill", "outdoor", "open"],
  ["creator", "Creator Talk Night", "org", "Leong Hall", "north", "Oct", "Mon", "5:00 PM", ["food", "arts"], ["creator talks", "business"], "chill", "indoor", "open"],
  ["theaterlab", "Theater Lab Preview", "org", "Areté", "north", "Oct", "Tue", "6:30 PM", ["arts", "culture"], ["theater", "performances"], "both", "indoor", "org-exclusive"],
  ["basketdrop", "Basketball Drop-in", "social", "Covered Courts", "south", "Oct", "Wed", "5:30 PM", ["sports", "friends"], ["basketball", "meet new people"], "outgoing", "indoor", "open"],
  ["bookswap", "Book Swap Hour", "social", "New Rizal Library", "central", "Oct", "Thu", "2:00 PM", ["literature", "friends"], ["fiction", "book clubs"], "chill", "indoor", "open"],
  ["advocacy", "Advocacy Roundtable", "org", "MVP Center", "central", "Oct", "Fri", "3:30 PM", ["orgs", "culture"], ["advocacy", "talks"], "chill", "indoor", "org-exclusive"],
  ["culturefair", "Culture Fair", "org", "Zen Garden", "central", "Nov", "Mon", "4:00 PM", ["culture", "friends"], ["campus traditions", "performances"], "both", "outdoor", "open"],
  ["runclub", "Sunrise Run Club", "social", "Blue Eagle Gym", "south", "Nov", "Tue", "6:00 AM", ["sports", "wellness"], ["fun run", "movement"], "outgoing", "outdoor", "open"],
  ["museumtalk", "Museum Conversation", "social", "Areté", "north", "Nov", "Wed", "1:00 PM", ["arts", "culture"], ["museum", "exhibits"], "chill", "indoor", "open"],
  ["strategygames", "Strategy Games Table", "social", "New Rizal Library", "central", "Nov", "Thu", "4:00 PM", ["boardgames", "friends"], ["strategy", "casual tables"], "chill", "indoor", "open"],
  ["concertfield", "Field Concert Meetup", "org", "Bellarmine Field", "central", "Nov", "Fri", "6:30 PM", ["music", "friends"], ["concert", "field event"], "outgoing", "outdoor", "org-exclusive"],
  ["studybuddy", "Study Buddy Matching", "social", "Matteo Ricci Study Hall", "central", "Dec", "Mon", "3:00 PM", ["friends", "wellness"], ["low pressure", "small group"], "chill", "indoor", "open"],
  ["snacktalk", "Snack and Talk", "social", "Gonzaga Cafeteria", "central", "Dec", "Tue", "1:30 PM", ["food", "friends"], ["snacks", "coffee"], "chill", "indoor", "open"],
  ["musicpool", "Musicians Pool Jam", "org", "MVP Center", "central", "Dec", "Wed", "5:00 PM", ["music", "orgs"], ["acoustic", "performances"], "both", "indoor", "org-exclusive"],
  ["litnight", "Literary Night", "org", "Rizal Mini Theater", "central", "Dec", "Thu", "6:00 PM", ["literature", "arts"], ["poetry", "essays"], "chill", "indoor", "open"],
  ["career", "Career Starter Talk", "org", "JGSOM Building", "central", "Jan", "Mon", "4:00 PM", ["orgs", "food"], ["business", "talks"], "chill", "indoor", "open"],
  ["dance", "Dance Try-it Session", "social", "Blue Eagle Gym", "south", "Jan", "Tue", "5:30 PM", ["wellness", "music"], ["movement", "performances"], "outgoing", "indoor", "open"],
  ["zenpicnic", "Zen Garden Picnic", "social", "Zen Garden", "central", "Jan", "Wed", "4:30 PM", ["food", "friends"], ["small group", "low pressure"], "chill", "outdoor", "open"],
  ["hackintro", "Hackathon Intro", "org", "SEC-A Building", "north", "Jan", "Thu", "2:30 PM", ["orgs", "arts"], ["design", "business"], "both", "indoor", "org-exclusive"],
  ["campustour", "Campus Tour Meetup", "social", "Leong Hall", "north", "Jan", "Fri", "10:00 AM", ["friends", "culture"], ["campus traditions", "arrive together"], "chill", "outdoor", "open"]
];

additionalEventSeeds.forEach(([id, title, type, location, area, month, day, time, interests, subtags, energy, venue, access]) => {
  events.push({
    id,
    title,
    type,
    location,
    area,
    month,
    day,
    time,
    deadline: `${day} 12:00 PM`,
    interests,
    subtags,
    energy,
    commitment: type === "org" ? "1 hour" : "Drop-by",
    beginner: true,
    alone: energy !== "outgoing",
    group: energy === "outgoing" ? "large" : "small",
    schoolTags: ["SOM", "SOSE", "SOH", "SOSS"],
    personalityFit: energy === "chill" ? ["chill", "planner", "creative"] : energy === "outgoing" ? ["outgoing", "active"] : ["chill", "outgoing", "creative"],
    expect: `Drop by ${location}, check in with the host, and join the activity at your own pace.`,
    goodFor: "Students looking for a low-risk way to meet people or try an Ateneo activity.",
    bring: "Student ID and anything listed by the organizer.",
    description: `${energyLabel(energy)} ${type === "org" ? "org event" : "social gathering"} at ${location}.`,
    venue,
    access
  });
});

const eventMedia = {
  tennis: { image: "assets/events/1-tennis-at-vale-verde-jpg.jpg" },
  boardgames: { image: "assets/events/2-board-games-in-new-riz-jpg.jpg" },
  basketball: { image: "assets/events/3-cov-courts-basketball-jpg.jpg" },
  museum: { image: "assets/events/4-arete-museum-viewing-jpg.jpg" },
  recweek: { image: "assets/events/5-rec-week-jpg.jpg" },
  stargazing: { image: "assets/events/6-stargazing-at-manila-observatory-jpg.jpg" },
  lovebox: { image: "assets/events/7-love-box-concert-jpg.jpg" },
  moonrabbit: { image: "assets/events/8-moonrabbit-jpg.jpg" },
  abi: { image: "assets/events/9-abi-marquez-talk-png.png" },
  meco: { image: "assets/events/10-meco-fun-run-jpg.jpg" },
  orgfair: { image: "assets/events/11-org-fair-booth-crawl-jpg.jpg" },
  openmic: { image: "assets/events/12-ateneo-open-mic-night-jpg.jpg" },
  filmnight: { image: "assets/events/13-campus-film-night-jpeg.jpeg" },
  startup: { image: "assets/events/14-student-startup-mixer-jpg.jpg" },
  poetry: { image: "assets/events/15-poetry-circle-png.png" },
  volunteer: { image: "assets/events/16-volunteer-sign-up-day-jpg.jpg" },
  coffeechat: { image: "assets/events/17-coffee-chat-for-freshies-jpg.jpg" },
  designjam: { image: "assets/events/18-design-jam-jpg.jpg" },
  pickleball: { image: "assets/events/19-pickleball-trial-games-png.png" },
  foodcrawl: { image: "assets/events/20-jsec-food-crawl-png.png" },
  wellnesswalk: { image: "assets/events/21-wellness-walk-png.png" },
  creator: { image: "assets/events/22-creator-talk-night-png.png" },
  theaterlab: { image: "assets/events/23-movie-watching-png.png" },
  basketdrop: { image: "assets/events/24-basketball-drop-in-png.png" },
  bookswap: { image: "assets/events/25-trivia-and-night-out-in-lankwai-jpeg.jpeg" },
  advocacy: { image: "assets/events/26-group-pilates-at-mouv-fitness-hub-in-regis-center-webp.webp" },
  culturefair: { image: "assets/events/27-afc-futsal-training-jpg.jpg" },
  runclub: { image: "assets/events/28-morning-run-club-jpg.jpg" },
  museumtalk: { image: "assets/events/29-mahjong-club-jpeg.jpeg" },
  strategygames: { image: "assets/events/30-national-student-investors-convention-meco-jpg.jpg" },
  concertfield: { image: "assets/events/31-cads-rib-watch-jpg.jpg" },
  studybuddy: { image: "assets/events/32-ultime-frisbee-throws-ai-jfif.jfif" },
  snacktalk: { image: "assets/events/33-gym-session-in-uptc-af-jfif.jfif" },
  musicpool: { image: "assets/events/34-ateneo-glee-club-recital-watch-jpg.jpg" },
  litnight: { image: "assets/events/35-ateneo-petagon-walk-jpg.jpg" }
};

const defaultEventImages = {
  org: "assets/events/11-org-fair-booth-crawl-jpg.jpg",
  social: "assets/events/4-arete-museum-viewing-jpg.jpg",
  department: "assets/events/9-abi-marquez-talk-png.png"
};

const eventOverrides = {
  tennis: { month: "Dec", dateNumber: 9, day: "Wed", time: "2:00 PM", deadline: "Dec 9, 2026, 10:00 AM", location: "Valle Verde Tennis Courts", area: "outside", venue: "outdoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Individual", bring: "Athletic attire, tennis racket, water bottle", description: "Rally, compete, and enjoy an afternoon of tennis with fellow students at Valle Verde. All skill levels are welcome.", expect: "Meet near campus, head to Valle Verde together, then rotate through beginner-friendly tennis games.", mapQuery: "Valle Verde Country Club Tennis Courts, Pasig", placeId: "gate3" },
  boardgames: { month: "Dec", dateNumber: 10, day: "Thu", time: "3:00 PM", deadline: "Dec 10, 2026, 10:00 AM", location: "New Rizal Library", venue: "indoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Individual", bring: "None required", description: "Meet new friends and enjoy classic and modern board games in a relaxed library setting." },
  basketball: { month: "Dec", dateNumber: 11, day: "Fri", time: "4:00 PM", deadline: "Dec 11, 2026, 10:00 AM", location: "Covered Courts", venue: "indoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Trios", bring: "Sports attire, basketball shoes, water bottle", description: "Form a team and hit the court for friendly basketball games and exciting competition." },
  museum: { month: "Dec", dateNumber: 14, day: "Mon", time: "2:00 PM", deadline: "Dec 14, 2026, 10:00 AM", location: "Areté", venue: "indoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Individual", bring: "None required", description: "Discover thought-provoking exhibits and explore contemporary art at Areté's museum spaces." },
  recweek: { month: "Dec", dateNumber: 15, day: "Tue", time: "10:00 AM", deadline: "Dec 15, 2026, 8:00 AM", location: "Red Brick Road", venue: "outdoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Individual", bring: "Student ID, comfortable attire", description: "Meet student organizations, discover opportunities, and find communities that match your interests." },
  stargazing: { month: "Dec", dateNumber: 16, day: "Wed", time: "7:00 PM", deadline: "Dec 16, 2026, 10:00 AM", location: "Manila Observatory", venue: "outdoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Individual", bring: "Comfortable clothing, jacket", description: "Explore the night sky through telescopes and learn about stars, planets, and constellations.", mapQuery: "Manila Observatory, Ateneo de Manila University, Quezon City", placeId: "gate3" },
  lovebox: { month: "Sep", dateNumber: 20, day: "Wed", time: "6:30 PM", deadline: "Sep 20, 2026, 2:00 PM", location: "Bellarmine Field", venue: "outdoor", access: "org-exclusive", extraTags: ["Paid", "Limited seats"], signupQuantity: "Individual, Pair, Trio", bring: "Tickets, ID, small fan, small bag, LoveBox merchandise", description: "LoveBox 2026 invites you to bring back love that grounds us and keeps us stable this September." },
  moonrabbit: { month: "Oct", dateNumber: 23, day: "Thu", time: "5:00 PM", deadline: "N/A", location: "Zen Garden", venue: "outdoor", access: "open", extraTags: ["Free", "No sign-up required"], signupQuantity: "No sign-up required", bring: "Nothing required", description: "The Moon Rabbit Market is a gathering where fate, artistry, and wonder align through a bazaar of treasures and stories." },
  abi: { type: "department", month: "Oct", dateNumber: 23, day: "Thu", time: "5:00 PM", deadline: "Oct 23, 2026, 12:00 PM", location: "Leong Hall Auditorium", venue: "indoor", access: "year-level", extraTags: ["ENE 13 students only", "Limited seats"], signupQuantity: "Individual", bring: "Note-taking devices", description: "Join an exclusive conversation with culinary content creator Abi Marquez on food, culture, and digital media." },
  meco: { month: "Dec", dateNumber: 3, day: "Sat", time: "6:00 AM", deadline: "Dec 1, 2026, 5:00 PM", location: "Ateneo Grade School Baseball Field", venue: "outdoor", access: "open", extraTags: ["Paid", "Pets allowed"], signupQuantity: "Individual, Group of 5, Group of 10", bring: "Tumbler, extra T-shirt", description: "The MEcO Fun-d Run is back on track with the same cause and a stronger start." },
  orgfair: { month: "Aug", dateNumber: 6, day: "Mon", time: "11:00 AM", deadline: "N/A", location: "Red Brick Road", venue: "outdoor", access: "open", extraTags: ["Free", "No sign-up required"], signupQuantity: "No sign-up required", bring: "Friends, blockmates", description: "Find your second home in the Ateneo through an Org Fair Booth Crawl across campus." },
  openmic: { month: "Aug", dateNumber: 9, day: "Tue", time: "6:00 PM", deadline: "Aug 9, 2026, 12:00 PM", location: "MVP Roofdeck", venue: "outdoor", access: "open", extraTags: ["Free", "Limited seats"], signupQuantity: "Individual, Pair, Three or more", bring: "Instruments, props, performance piece", description: "Bring spoken word, an acoustic cover, or a stand-up routine to Ateneo Open Mic Night." },
  theaterlab: { title: "Movie Watching", month: "Dec", dateNumber: 3, day: "Thu", time: "8:00 PM", deadline: "Dec 2, 2026, 10:00 PM", location: "UPTC Mall Cinema", area: "outside", venue: "indoor", access: "open", extraTags: ["Paid", "Open to all"], signupQuantity: "Individual, Trios, Pairs", bring: "Whatever you want", description: "Drop in, grab a seat, and enjoy a movie with fellow Ateneans. Come alone or invite friends.", mapQuery: "UP Town Center Cinema, Quezon City", placeId: "gate3" },
  basketdrop: { title: "Basketball Drop-in", month: "Nov", dateNumber: 19, day: "Thu", time: "6:00 PM", deadline: "Nov 14, 2026, 5:00 PM", location: "FCL Sports Center", area: "outside", venue: "indoor", access: "open", extraTags: ["Paid", "Open to all"], signupQuantity: "Individual, Trios, Pairs", bring: "Active wear, water, and essentials", description: "Drop into open play and connect with other students through casual basketball.", mapQuery: "FCL Sports Center Quezon City", placeId: "gate3" },
  bookswap: { title: "Trivia and Night Out in LanKwai", month: "Dec", dateNumber: 14, day: "Thu", time: "8:00 PM", deadline: "Dec 14, 2026, 10:00 AM", location: "Lan Kwai Speakeasy", area: "outside", venue: "indoor", access: "open", extraTags: ["Paid", "Open to all"], signupQuantity: "Individual, Trios, Pairs", bring: "Whatever you want", description: "Test your knowledge over food and drinks, then stay for DJ sets and conversation.", mapQuery: "Lan Kwai Speakeasy & Hong Kong Cuisine, Quezon City", placeId: "gate3" },
  advocacy: { title: "Group Pilates at Mouv Fitness Hub", month: "Dec", dateNumber: 10, day: "Thu", time: "2:00 PM", deadline: "Dec 10, 2026, 11:00 AM", location: "Mouv Fitness Hub, Regis Center", area: "outside", venue: "indoor", access: "open", extraTags: ["Paid", "Limited seats"], signupQuantity: "Individual, Trios, Pairs", bring: "Athletic wear", description: "Recharge with a beginner-friendly group Pilates session focused on strength, mobility, and mindful movement.", mapQuery: "MOUV Fitness Hub, Regis Center, Quezon City", placeId: "gate3" },
  culturefair: { title: "AFC Futsal Training", month: "Aug", dateNumber: 15, day: "Thu", time: "4:00 PM", deadline: "Aug 14, 2026, 8:00 PM", location: "LS Covered Courts", venue: "indoor", access: "open", extraTags: ["Free", "Limited seats"], signupQuantity: "Individual, Trios, Pairs", bring: "Athletic wear, futsal shoes, water", description: "Join AFC's futsal training session to sharpen your skills, stay active, and enjoy the game.", placeId: "cov" },
  runclub: { title: "Morning Run Club", month: "Sep", dateNumber: 25, day: "Thu", time: "8:00 AM", deadline: "Sep 24, 2026, 6:00 PM", location: "FLC meetup", venue: "outdoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Individual, Trios, Pairs", bring: "Athletic wear, water, optional snack", description: "Start your morning with an easy run and good conversations alongside fellow Atenean runners.", placeId: "bell" },
  museumtalk: { title: "Mahjong Club", month: "Oct", dateNumber: 25, day: "Thu", time: "7:00 PM", deadline: "Oct 25, 2026, 11:00 AM", location: "Martial Arts Room", venue: "indoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Individual, Trios, Pairs", bring: "Whatever you want", description: "Join a mahjong evening open to all students with chill competition and conversation." },
  strategygames: { title: "National Student-Investors' Convention", month: "Dec", dateNumber: 14, day: "Thu", time: "2:00 PM", deadline: "Dec 14, 2026, 10:00 AM", location: "Leong Hall", venue: "indoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Individual", bring: "Smart casual", description: "Hear industry professionals and student leaders share insights on investing, finance, and business." },
  concertfield: { title: "CADS RiB Watch", month: "Dec", dateNumber: 11, day: "Fri", time: "6:00 PM", deadline: "Dec 11, 2026, 2:00 PM", location: "Henry Lee Irwin Theatre", venue: "indoor", access: "limited", extraTags: ["Paid", "With ticket"], signupQuantity: "Individual", bring: "Smart casual attire, pre-booked ticket, student ID", description: "Watch CADS' premier Rhythm in Blue with fellow dance enthusiasts.", mapQuery: "Henry Lee Irwin Theatre Ateneo de Manila University Quezon City" },
  studybuddy: { title: "Ultimate Frisbee Throws", month: "Dec", dateNumber: 14, day: "Mon", time: "4:00 PM", deadline: "Dec 14, 2026, 12:00 PM", location: "Bellarmine Field", venue: "outdoor", access: "open", extraTags: ["Free", "Open to all"], signupQuantity: "Individual, Pairs, Trios, Group", bring: "Athletic attire, running shoes, water bottle, extra shirt", description: "Catch, throw, and run in a casual student-led pickup game of Ultimate Frisbee." },
  snacktalk: { title: "Gym Session at Anytime Fitness UPTC", month: "Dec", dateNumber: 15, day: "Tue", time: "5:00 PM", deadline: "Dec 15, 2026, 1:00 PM", location: "Anytime Fitness UPTC", area: "outside", venue: "indoor", access: "paid", extraTags: ["AF members or day pass", "Paid"], signupQuantity: "Individual, Pair, Trio", bring: "Gym clothes, training shoes, towel, water bottle", description: "Meet workout buddies for a casual UPTC gym session and stay active together.", mapQuery: "Anytime Fitness UP Town Center, Quezon City" },
  musicpool: { title: "Ateneo Glee Club Recital Watch", month: "Dec", dateNumber: 16, day: "Wed", time: "7:00 PM", deadline: "Dec 16, 2026, 3:00 PM", location: "Hyundai Hall, Areté", venue: "indoor", access: "limited", extraTags: ["Paid", "With ticket"], signupQuantity: "Individual", bring: "Semi-formal or smart casual attire, event ticket", description: "Appreciate choral music with peers at the Ateneo Glee Club recital." },
  litnight: { title: "PETAGON", month: "Dec", dateNumber: 18, day: "Fri", time: "3:00 PM", deadline: "Dec 18, 2026, 11:00 AM", location: "Bellarmine Field", venue: "outdoor", access: "open", extraTags: ["Free", "Pets allowed"], signupQuantity: "Individual", bring: "Comfortable clothes, pet optional, leash and waste bags", description: "Bring your pets or hang out with other pet lovers on Bellarmine Field." }
};

events.forEach((event, index) => {
  const media = eventMedia[event.id] || {};
  const override = eventOverrides[event.id] || {};
  Object.assign(event, media);
  Object.assign(event, override);
  event.month = event.month || ["Aug", "Sep", "Oct", "Nov", "Dec"][index % 5];
  event.dateNumber = event.dateNumber || ((index * 3) % 26) + 2;
  event.venue = event.venue || "indoor";
  event.access = event.access || "open";
  event.image = event.image || defaultEventImages[event.type] || defaultEventImages.social;
  event.imageCredit = event.imageCredit || "Provided event photo";
  event.signupQuantity = event.signupQuantity || "Individual";
  event.price = event.price || ((event.extraTags || []).some((tag) => /paid|ticket|pass/i.test(tag)) ? "Paid" : "Free");
  event.audience = event.audience || accessLabel(event.access);
  event.extraTags = event.extraTags || [event.price, event.audience];
});

const state = {
  registeredEmail: "",
  role: "student",
  activePanel: "welcome",
  activeRoute: "home",
  activeMapCategory: "all",
  activeMapWeek: "all",
  activeMapMonth: "all",
  activeOverviewMonth: "all",
  activeEventQuick: "all",
  selectedInterestForSubtags: "sports",
  profileSelectedInterestForSubtags: "sports",
  quickIndex: 0,
  currentEventId: null,
  profile: {
    name: "Nikki Santos",
    email: "nikki@obf.ateneo.edu",
    yearLevel: "1st year",
    course: "BS Management Information Systems",
    school: "SOM",
    age: "18",
    gender: "Prefer not to say",
    hobbies: "coffee, basketball, exhibits, casual talks",
    interests: ["sports", "arts", "orgs", "friends"],
    subtags: ["basketball", "museum", "rec week", "small group"],
    personality: "independent"
  },
  personalityAnswers: {},
  interestedEventIds: new Set(),
  passedEventIds: new Set(),
  tourIndex: 0,
  activeOverviewView: "twoWeeks",
  selectedCalendarDay: null,
  theme: "light",
  previewDevice: localStorage.getItem("tayoPreviewDevice") || "phone"
};

const flowOrder = ["signup", "role", "orgPasscode", "profileSetup", "interests", "personality", "result", "tutorial", "firstEvent"];
const routeTitles = {
  home: "Home",
  map: "Map",
  quickmatch: "Quick Match",
  events: "Events",
  profile: "Profile"
};

const routeSubtitles = {
  home: "Recommended events based on your profile and social style.",
  map: "Event places, campus landmarks, and simple directions.",
  quickmatch: "Review the event queue and decide what to save or join.",
  events: "Calendar-style overview of the same event set.",
  profile: "Student details used by the matching logic."
};

const tourSteps = [
  {
    route: "home",
    title: "Home shows your best next moves",
    body: "This is the student's overview: top recommendation, interested count, profile summary, and the next action."
  },
  {
    route: "map",
    title: "Map explains where events happen",
    body: "Students can filter campus places, tap pins, and get landmark-based directions before committing."
  },
  {
    route: "quickmatch",
    title: "Quick Match is the main discovery flow",
    body: "Users review each event, open details, pass, mark interested, or sign up."
  },
  {
    route: "events",
    title: "Events gives a calendar view",
    body: "Students can scan the same event set by month and tap any event to open the full details."
  },
  {
    route: "profile",
    title: "Profile controls recommendations",
    body: "Year level, course, school, interests, subtags, and personality style all feed the matching logic."
  }
];

const mapCategories = [
  ["all", "All"],
  ["events", "Events"],
  ["food", "Food"],
  ["parking", "Parking"],
  ["printing", "Printing"],
  ["offices", "Offices"],
  ["misc", "Miscellaneous"],
  ["transport", "Transport"],
  ["study", "Study"],
  ["student-life", "Student life"],
  ["landmarks", "Landmarks"]
];

const mapCategoryIcons = {
  events: "assets/map-icons/events.svg",
  food: "assets/map-icons/food.svg",
  landmarks: "assets/map-icons/landmarks.svg",
  miscellaneous: "assets/map-icons/miscellaneous.svg",
  offices: "assets/map-icons/offices.svg",
  printing: "assets/map-icons/printing.svg",
  "student-life": "assets/map-icons/student-life.svg",
  study: "assets/map-icons/study.svg",
  parking: null,
  transport: null,
  sports: null
};

function mapCategoryIconKey(value) {
  return value === "misc" ? "miscellaneous" : value;
}

function mapCategoryFallback(label) {
  return label
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderMapFilterIcon(value, label) {
  if (value === "all") return "";
  const iconPath = mapCategoryIcons[mapCategoryIconKey(value)];
  const fallback = mapCategoryFallback(label);

  if (!iconPath) {
    return `<span class="map-filter-fallback" aria-hidden="true">${fallback}</span>`;
  }

  return `
    <span class="map-filter-icon-wrap" aria-hidden="true">
      <img class="map-filter-icon" src="${iconPath}" alt="" loading="lazy" onerror="this.hidden = true; this.nextElementSibling.hidden = false;">
      <span class="map-filter-fallback" hidden>${fallback}</span>
    </span>
  `;
}

const months = ["all", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

const personalityQuestions = [
  {
    id: "arrival",
    text: "During your downtime or a break on a busy day, how do you prefer to spend your time?",
    options: [
      { label: "Finding a quiet, secluded corner to read, listen to music, or relax in silence.", type: "independent" },
      { label: "Heading to a bustling common area, food hall, or popular spot to chat with a large group of people.", type: "connector" },
      { label: "Sitting down with just one or two familiar peers for a casual, relaxed conversation.", type: "balanced" }
    ]
  },
  {
    id: "activity",
    text: "A major community social gathering or outdoor festival is happening. How do you feel about attending?",
    options: [
      { label: "It sounds exhausting; I would much rather skip it and stay somewhere quiet.", type: "independent" },
      { label: "I’m excited! I love big crowds, active environments, and meeting many new people.", type: "connector" },
      { label: "I will attend if I have close friends going, but I may leave early once my social battery runs low.", type: "balanced" }
    ]
  },
  {
    id: "decision",
    text: "If you were joining an activity this weekend, which style appeals most?",
    options: [
      { label: "A small, independent workshop where I can focus on the activity itself.", type: "independent" },
      { label: "An active, high-energy group event like a team sport or lively open mic.", type: "connector" },
      { label: "A collaborative, structured group activity like board games or a casual discussion.", type: "balanced" }
    ]
  },
  {
    id: "social",
    text: "What kind of group sounds best this week?",
    options: [
      { label: "A small group where names are easy to remember.", type: "independent" },
      { label: "A bigger event with more possible people to meet.", type: "connector" },
      { label: "A group with a shared task so conversation can happen naturally.", type: "balanced" }
    ]
  },
  {
    id: "topic",
    text: "After a demanding week, what is your preferred way to recharge?",
    options: [
      { label: "Spending time completely alone at home to rest, read, or watch a movie.", type: "independent" },
      { label: "Going out to a lively restaurant, party, or social gathering with a big group of friends.", type: "connector" },
      { label: "Catching up over a quiet dinner or relaxed movie night with one or two close friends.", type: "balanced" }
    ]
  }
];

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return [...document.querySelectorAll(selector)];
}

function cap(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function normalizeText(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function labelCategory(value) {
  return value.split("-").map(cap).join(" ");
}

function areaLabel(value) {
  const labels = { central: "Central campus", north: "North campus", south: "South campus", outside: "Outside campus" };
  return labels[value] || `${cap(value)} campus`;
}

function energyLabel(value) {
  const labels = { chill: "Chill", outgoing: "Outgoing", both: "Chill or outgoing" };
  return labels[value] || cap(value);
}

function venueLabel(value) {
  return value === "outdoor" ? "Outdoor" : "Indoor";
}

function accessLabel(value) {
  const labels = {
    "org-exclusive": "Org-exclusive",
    "school-only": "School-only",
    "year-level": "Year level",
    limited: "Limited seats",
    paid: "Paid",
    free: "Free",
    open: "Open to all"
  };
  return labels[value] || value;
}

function typeLabel(value) {
  const labels = { org: "Org event", social: "Social gathering", department: "Department event" };
  return labels[value] || value;
}

function dateLabel(event) {
  const meta = monthMeta[event.month];
  return `${event.month} ${event.dateNumber}, ${meta.year} (${event.day})`;
}

function deadlineLabel(event) {
  if (!event.deadline || /^n\/?a$/i.test(event.deadline)) return "No sign-up deadline";
  if (/open/i.test(event.deadline)) return event.deadline;
  if (/\d{4}/.test(event.deadline)) return event.deadline;
  return `${event.month} ${event.dateNumber}, ${monthMeta[event.month].year}, ${event.deadline.replace(/^[A-Za-z]{3}\s*/, "")}`;
}

function eventTagBadges(event) {
  const base = [
    `<span class="badge match">${event.match?.score || 90}% match</span>`,
    `<span class="badge ${event.type}">${event.type === "org" ? "Org event" : event.type === "department" ? "Department event" : "Social gathering"}</span>`,
    `<span class="badge energy-${event.energy}">${energyLabel(event.energy)}</span>`,
    `<span class="badge venue-${event.venue}">${venueLabel(event.venue)}</span>`,
    `<span class="badge access-${event.access}">${accessLabel(event.access)}</span>`
  ];
  const extras = (event.extraTags || []).map((tag) => `<span class="badge extra">${tag}</span>`);
  return [...base, ...extras].join("");
}

function mapWeekLabel(value) {
  const labels = { all: "All weeks", 1: "1st week", 2: "2nd week", 3: "3rd week", 4: "4th week", 5: "5th week" };
  return labels[value] || `Week ${value}`;
}

function eventWeek(event) {
  return Math.min(5, Math.max(1, Math.ceil((event.dateNumber || 1) / 7)));
}

function profileNameFromEmail(email) {
  const local = email.trim().toLowerCase().split("@")[0] || "";
  const parts = local.split(".").filter(Boolean);
  const nameParts = parts.length > 1 ? [parts[0], parts[parts.length - 1]] : [parts[0] || "student"];
  return nameParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function applyTheme() {
  state.theme = "light";
  localStorage.removeItem("tayoTheme");
  document.body.removeAttribute("data-theme");
  const toggle = qs("#themeToggle");
  if (!toggle) return;
  toggle.textContent = "Light mode";
  toggle.setAttribute("aria-pressed", "false");
}

function applyPreviewDevice() {
  const device = state.previewDevice || "phone";
  document.body.dataset.previewDevice = device;
  qsa("[data-preview-device]").forEach((button) => {
    button.classList.toggle("active", button.dataset.previewDevice === device);
  });
}

function toggleTheme() {
  state.theme = "light";
  localStorage.removeItem("tayoTheme");
  applyTheme();
}

function googleMapsDirectionsUrl(destination, origin) {
  const params = new URLSearchParams({
    api: "1",
    destination,
    travelmode: "walking"
  });
  if (origin) params.set("origin", origin);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function openMapsUrl(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function openGoogleDirections(place) {
  const destination = place.mapQuery || `${place.name}, Ateneo de Manila University`;
  qs("#routeCard").innerHTML = `
    <h3>Opening Google Maps</h3>
    <p class="mini">Allow location access to use your current location as the starting point.</p>
  `;
  if (!navigator.geolocation) {
    openMapsUrl(googleMapsDirectionsUrl(destination));
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const origin = `${position.coords.latitude},${position.coords.longitude}`;
      openMapsUrl(googleMapsDirectionsUrl(destination, origin));
    },
    () => {
      qs("#routeCard").innerHTML = `
        <h3>Location unavailable</h3>
        <p class="mini">Google Maps opened with the destination. Choose your starting point there.</p>
      `;
      openMapsUrl(googleMapsDirectionsUrl(destination));
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
  );
}

function isAteneoEmail(email) {
  return email.trim().toLowerCase().includes("ateneo.edu");
}

function setMessage(id, text, type) {
  const message = qs(id);
  if (!message) return;
  message.textContent = text;
  message.className = `form-message ${type || ""}`;
}

function showPanel(panel) {
  state.activePanel = panel;
  document.body.dataset.panel = panel;
  qs("#authFlow").classList.remove("hidden");
  qs("#appShell").classList.add("hidden");
  qs("#authFlow").classList.toggle("entry-mode", panel === "welcome" || panel === "login");
  qsa(".flow-panel").forEach((item) => item.classList.toggle("active", item.dataset.panel === panel));
  const panelLabel = {
    welcome: "Welcome",
    signup: "Signup",
    login: "Login",
    role: "Role selection",
    orgPasscode: "Org passcode",
    organizer: "Organizer preview",
    profileSetup: "Student profile",
    interests: "Interest tags",
    personality: "Personality test",
    result: "Matching result",
    tutorial: "Brief onboarding",
    firstEvent: "First event"
  }[panel] || "Flow";
  const index = Math.max(0, flowOrder.indexOf(panel));
  qs("#flowStepText").textContent = panelLabel;
  qs("#flowProgressText").textContent = `Step ${Math.min(index + 1, 8)} of 8`;
  qsa("#flowRailList li").forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === Math.min(index, 7));
    item.classList.toggle("done", itemIndex < Math.min(index, 7));
  });
  window.scrollTo(0, 0);
}

function showApp(route = "home") {
  document.body.dataset.panel = "app";
  qs("#authFlow").classList.remove("entry-mode");
  qs("#authFlow").classList.add("hidden");
  qs("#appShell").classList.remove("hidden");
  qs("#tourOverlay").classList.remove("open");
  renderApp();
  routeTo(route);
}

function restartFlow() {
  state.passedEventIds.clear();
  qs("#appShell").classList.add("hidden");
  qs("#authFlow").classList.remove("hidden");
  showPanel("welcome");
}

function populateCourseList() {
  qs("#courseList").innerHTML = courses.map((course) => `<option value="${course}"></option>`).join("");
  qs("#profileYear").innerHTML = yearLevels.map((year) => `<option>${year}</option>`).join("");
  qs("#courseInput").innerHTML = `<option value="">Select course</option>${courses.map((course) => `<option>${course}</option>`).join("")}`;
  qs("#profileCourse").innerHTML = courses.map((course) => `<option>${course}</option>`).join("");
  qs("#yearLevel").value = state.profile.yearLevel;
  qs("#courseInput").value = state.profile.course;
  qs("#schoolInput").value = state.profile.school;
  qs("#ageInput").value = state.profile.age;
  qs("#genderInput").value = state.profile.gender;
  qs("#hobbiesInput").value = state.profile.hobbies;
  qs("#profileCourse").value = state.profile.course;
  qs("#overviewMonth").innerHTML = months.map((month) => `<option value="${month}">${month === "all" ? "All months" : month}</option>`).join("");
}

function renderInterestTags() {
  qs("#interestTags").innerHTML = interestGroups.map((group) => `
    <button class="tag-button ${state.profile.interests.includes(group.id) ? "selected" : ""}" type="button" data-interest="${group.id}">
      ${group.label}
    </button>
  `).join("");
  renderSubtags(state.selectedInterestForSubtags);
}

function renderProfileInterestEditor() {
  qs("#profileInterestTags").innerHTML = interestGroups.map((group) => `
    <button class="tag-button ${state.profile.interests.includes(group.id) ? "selected" : ""}" type="button" data-profile-interest="${group.id}">
      ${group.label}
    </button>
  `).join("");
  renderProfileSubtags(state.profileSelectedInterestForSubtags);
}

function renderSubtags(groupId) {
  const group = interestGroups.find((item) => item.id === groupId) || interestGroups[0];
  state.selectedInterestForSubtags = group.id;
  qs("#subtagTitle").textContent = `${group.label} subtags`;
  qs("#subtagGrid").innerHTML = group.subtags.map((tag) => `
    <button class="tag-button ${state.profile.subtags.includes(tag) ? "selected" : ""}" type="button" data-subtag="${tag}">
      ${tag}
    </button>
  `).join("");
  updateSubtagBulkButtons();
}

function renderProfileSubtags(groupId) {
  const group = interestGroups.find((item) => item.id === groupId) || interestGroups[0];
  state.profileSelectedInterestForSubtags = group.id;
  qs("#profileSubtagTitle").textContent = `${group.label} subtags`;
  qs("#profileSubtagGrid").innerHTML = group.subtags.map((tag) => `
    <button class="tag-button ${state.profile.subtags.includes(tag) ? "selected" : ""}" type="button" data-profile-subtag="${tag}">
      ${tag}
    </button>
  `).join("");
  updateSubtagBulkButtons();
}

function syncInterestForGroup(groupId) {
  const group = interestGroups.find((item) => item.id === groupId);
  if (!group) return;
  const hasSubtags = group.subtags.some((tag) => state.profile.subtags.includes(tag));
  const hasInterest = state.profile.interests.includes(group.id);
  if (hasSubtags && !hasInterest) {
    state.profile.interests.push(group.id);
  }
  if (!hasSubtags && hasInterest) {
    state.profile.interests = state.profile.interests.filter((item) => item !== group.id);
  }
}

function groupForSubtag(subtag) {
  return interestGroups.find((group) => group.subtags.includes(subtag));
}

function setSubtagsForGroup(groupId, selected, renderer = renderSubtags) {
  const group = interestGroups.find((item) => item.id === groupId);
  if (!group) return;
  if (selected) {
    state.profile.subtags = [...new Set([...state.profile.subtags, ...group.subtags])];
    if (!state.profile.interests.includes(group.id)) state.profile.interests.push(group.id);
  } else {
    state.profile.subtags = state.profile.subtags.filter((tag) => !group.subtags.includes(tag));
    state.profile.interests = state.profile.interests.filter((item) => item !== group.id);
  }
  renderer(group.id);
  renderApp();
}

function updateSubtagBulkButtons() {
  const current = interestGroups.find((item) => item.id === state.selectedInterestForSubtags) || interestGroups[0];
  const allSelected = current.subtags.every((tag) => state.profile.subtags.includes(tag));
  qs("#selectAllSubtags").textContent = allSelected ? "Deselect all" : "Select all";

  const profileCurrent = interestGroups.find((item) => item.id === state.profileSelectedInterestForSubtags) || interestGroups[0];
  const profileAllSelected = profileCurrent.subtags.every((tag) => state.profile.subtags.includes(tag));
  qs("#profileSelectAllSubtags").textContent = profileAllSelected ? "Deselect all" : "Select all";
}

function syncProfileFromSetup() {
  state.profile.yearLevel = qs("#yearLevel").value;
  state.profile.course = qs("#courseInput").value.trim();
  state.profile.school = qs("#schoolInput").value;
  state.profile.age = qs("#ageInput").value;
  state.profile.gender = qs("#genderInput").value;
  state.profile.hobbies = qs("#hobbiesInput").value.trim();
}

function renderPersonalityForm() {
  qs("#personalityForm").innerHTML = `
    ${personalityQuestions.map((question, index) => `
      <section class="question-block">
        <strong>${index + 1}. ${question.text}</strong>
        <div class="question-options">
          ${question.options.map((option) => `
            <button class="question-option ${state.personalityAnswers[question.id] === option.type ? "selected" : ""}" type="button" data-question="${question.id}" data-answer="${option.type}">
              ${option.label}
            </button>
          `).join("")}
        </div>
      </section>
    `).join("")}
    <div class="form-actions">
      <button class="ghost" type="button" data-auth-screen="interests">Back</button>
      <button class="primary" type="submit">Show my TAYO type</button>
    </div>
  `;
}

function calculatePersonality() {
  const counts = { independent: 0, connector: 0, balanced: 0 };
  Object.values(state.personalityAnswers).forEach((type) => {
    counts[type] += 1;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

function renderPersonalityResult() {
  state.profile.personality = calculatePersonality();
  const type = personalityTypes[state.profile.personality];
  const visual = qs("#personalityVisual");
  visual.className = `personality-visual ${state.profile.personality}`;
  visual.src = personalityTypeImages[state.profile.personality];
  visual.alt = type.title;
  qs("#personalityTitle").textContent = type.title;
  qs("#personalityDescription").textContent = `Preferred Environment: ${type.summary}`;
  qs("#algorithmSummary").textContent = type.algorithm;
  qs("#suggestedMoveTitle").textContent = type.badge;
  qs("#suggestedMoveBody").textContent = type.next;
  renderFirstEventGrid();
}

function eventMatchesPersonality(event, personality) {
  const fit = new Set(event.personalityFit || []);
  if (personality === "independent") {
    return event.energy === "chill" || fit.has("chill") || fit.has("planner") || fit.has("creative");
  }
  if (personality === "connector") {
    return event.energy === "outgoing" || fit.has("outgoing") || fit.has("active");
  }
  return event.energy === "both" || fit.has("creative") || fit.has("planner") || event.alone;
}

function scoreEvent(event) {
  let score = 44;
  const reasons = [];
  if (state.profile.yearLevel === "1st year" && event.beginner) {
    score += 10;
    reasons.push("Beginner-friendly for first-year students");
  } else if (event.beginner) {
    score += 5;
    reasons.push("Still approachable even beyond first year");
  }
  const interestHits = event.interests.filter((tag) => state.profile.interests.includes(tag));
  if (interestHits.length) {
    score += interestHits.length * 8;
    reasons.push(`Matches interests: ${interestHits.join(", ")}`);
  }
  const subtagHits = event.subtags.filter((tag) => state.profile.subtags.includes(tag));
  if (subtagHits.length) {
    score += subtagHits.length * 6;
    reasons.push(`Matches subtags: ${subtagHits.join(", ")}`);
  }
  if (eventMatchesPersonality(event, state.profile.personality)) {
    score += 12;
    reasons.push(`Fits ${personalityTypes[state.profile.personality].title}`);
  }
  if (event.schoolTags.includes(state.profile.school)) {
    score += 5;
    reasons.push(`Relevant for ${state.profile.school} students`);
  }
  if (event.alone) {
    score += 4;
    reasons.push("Okay to attend even if you arrive alone");
  }
  return { score: Math.min(98, score), reasons };
}

function scoredEvents() {
  return events.map((event) => ({ ...event, match: scoreEvent(event) })).sort((a, b) => b.match.score - a.match.score);
}

function filteredEvents() {
  const type = qs("#eventType")?.value || "all";
  const energy = qs("#eventEnergy")?.value || "all";
  const venue = qs("#eventVenue")?.value || "all";
  const access = qs("#eventAccess")?.value || "all";
  return scoredEvents().filter((event) => {
    const archiveOk = state.activeEventQuick === "archive" ? state.passedEventIds.has(event.id) : !state.passedEventIds.has(event.id) && !state.interestedEventIds.has(event.id);
    const typeOk = type === "all" || event.type === type;
    const energyOk = energy === "all" || event.energy === energy || (event.energy === "both" && (energy === "chill" || energy === "outgoing"));
    const venueOk = venue === "all" || event.venue === venue;
    const accessTags = [event.access, event.price, event.audience, ...(event.extraTags || [])].map((item) => normalizeText(item));
    const accessOk = access === "all" || event.access === access || accessTags.some((tag) => tag.includes(normalizeText(access)));
    const quickOk =
      state.activeEventQuick === "all" ||
      state.activeEventQuick === "archive" ||
      (state.activeEventQuick === "top" && event.match.score >= 80) ||
      (state.activeEventQuick === "chill" && (event.energy === "chill" || event.energy === "both")) ||
      (state.activeEventQuick === "outgoing" && (event.energy === "outgoing" || event.energy === "both"));
    return archiveOk && typeOk && energyOk && venueOk && accessOk && quickOk;
  });
}

function currentQuickMatchEvent() {
  const list = filteredEvents();
  if (state.quickIndex >= list.length) state.quickIndex = 0;
  return list[state.quickIndex] || null;
}

function renderFirstEventGrid() {
  const topEvents = scoredEvents().slice(0, 3);
  qs("#firstEventGrid").innerHTML = topEvents.map((event, index) => `
    <button class="first-event-card ${index === 0 ? "selected" : ""}" type="button" data-first-event="${event.id}">
      <span class="badge match">${event.match.score}% match</span>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <div class="meta">
        <span>${event.location}</span>
        <span>${energyLabel(event.energy)}</span>
      </div>
    </button>
  `).join("");
}

function routeTo(route) {
  const safe = routeTitles[route] ? route : "home";
  state.activeRoute = safe;
  document.body.dataset.route = safe;
  qsa(".view").forEach((view) => view.classList.toggle("active", view.id === safe));
  qsa(".nav a").forEach((link) => link.classList.toggle("active", link.dataset.route === safe));
  qs("#pageTitle").textContent = routeTitles[safe];
  qs("#pageSubtitle").textContent = routeSubtitles[safe];
  if (location.hash !== `#${safe}`) history.replaceState(null, "", `#${safe}`);
  window.scrollTo(0, 0);
}

function renderApp() {
  renderTopProfile();
  renderHome();
  renderMap();
  renderQuickMatch();
  renderEventOverview();
  renderProfileInterestEditor();
  renderProfile();
  updateSubtagBulkButtons();
}

function renderTopProfile() {
  qs("#profileMiniLabel").textContent = `${personalityTypes[state.profile.personality].title}`;
  qs("#profileMiniName").textContent = state.profile.name;
  qs("#profileMiniMeta").textContent = `${state.profile.yearLevel}, ${state.profile.school}`;
  qs("#avatarInitials").textContent = state.profile.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function renderHome() {
  const topEvent = currentQuickMatchEvent();
  const recommendedEvents = scoredEvents().filter((event) => !state.passedEventIds.has(event.id) && !state.interestedEventIds.has(event.id)).slice(0, 5);
  const savedEvents = scoredEvents().filter((event) => state.interestedEventIds.has(event.id));
  const firstName = state.profile.name.split(" ")[0] || "Username";
  qs("#homeTypeLabel").textContent = "Recommended Events for You";
  qs("#homeHeadline").textContent = `HELLO, ${firstName.toUpperCase()}`;
  qs("#homeSummary").textContent = "Today is June 27, 2026 -- Saturday";
  qs("#matchCountStat").textContent = filteredEvents().length;
  qs("#interestCountStat").textContent = state.interestedEventIds.size;
  qs("#interestedCountStat").textContent = state.interestedEventIds.size;
  qs("#homeTopEventTitle").textContent = "Recommended Events for You";
  qs("#homeTopEventBody").textContent = topEvent ? `${topEvent.match.score}% match. ${dateLabel(topEvent)}. ${topEvent.description}` : "Restore items from Archive or restart the flow to review everything again.";
  qs("#homeCards").innerHTML = `
    <div class="home-greeting">
      <p>Today is June 27, 2026 -- Saturday</p>
      <h2>HELLO, ${firstName.toUpperCase()}</h2>
    </div>
    <article class="home-stat-card pink"><strong>${events.length}</strong><span>matched events</span></article>
    <article class="home-stat-card yellow"><strong>${savedEvents.length}</strong><span>interested</span></article>
    <section class="home-recommended-table">
      <h3>Recommended Events for You</h3>
      <div class="home-table">
        <div class="home-table-head"><span>Event</span><span>Date</span><span>Time</span></div>
        ${recommendedEvents.map((event) => `
          <button type="button" data-details="${event.id}">
            <span>${event.title}</span>
            <span>${event.month} ${event.dateNumber}</span>
            <span>${event.time}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
  qs("#homeSavedEvents").innerHTML = savedEvents.length
    ? savedEvents.map((event, index) => `
      <article class="home-event-card ${index > 0 ? "dark-card" : ""}" data-details="${event.id}">
        <figure><img src="${event.image}" alt="${event.title}" loading="lazy"></figure>
        <h3>${event.title}</h3>
        <div class="mini-badges">
          <span>${event.location}</span>
          <span>${event.time}</span>
          <span>${event.organization || typeLabel(event.type)}</span>
        </div>
        <p>${event.description}</p>
      </article>
    `).join("")
    : `<article class="empty-state home-empty"><h3>No interested events yet</h3><p>Tap Interested in Quick Match or event details and they will show up here.</p></article>`;
}

function renderMapFilters() {
  qs("#mapFilters").innerHTML = mapCategories.map(([value, label]) => `
    <button class="chip map-filter-chip ${value === state.activeMapCategory ? "active" : ""}" type="button" data-map-filter="${value}">
      ${renderMapFilterIcon(value, label)}
      <span class="map-filter-label">${label}</span>
    </button>
  `).join("");
}

function renderMapWeekFilters() {
  const holder = qs("#mapWeekFilters");
  if (!holder) return;
  const weeks = ["all", 1, 2, 3, 4, 5];
  holder.hidden = state.activeMapCategory !== "events";
  holder.innerHTML = `
    <label class="map-filter-select">Month
      <select id="mapMonthSelect">
        ${months.map((month) => `<option value="${month}" ${month === state.activeMapMonth ? "selected" : ""}>${month === "all" ? "All months" : `${month} ${monthMeta[month].year}`}</option>`).join("")}
      </select>
    </label>
    <label class="map-filter-select">Week
      <select id="mapWeekSelect">
        ${weeks.map((week) => `<option value="${week}" ${String(week) === String(state.activeMapWeek) ? "selected" : ""}>${mapWeekLabel(week)}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderMap() {
  renderMapFilters();
  renderMapWeekFilters();
  const board = qs("#mapBoard");
  if (!board) return;
  board.querySelectorAll(".place-pin").forEach((pin) => pin.remove());
  const filtered =
    state.activeMapCategory === "events"
      ? events
          .filter((event) => {
            const monthOk = state.activeMapMonth === "all" || event.month === state.activeMapMonth;
            const weekOk = state.activeMapWeek === "all" || String(eventWeek(event)) === String(state.activeMapWeek);
            return monthOk && weekOk;
          })
          .map((event, index) => {
            const basePlace = places.find((place) => event.placeId === place.id) || places[index % places.length];
            return { ...basePlace, id: `event-${event.id}`, name: event.title, category: "events", short: event.description, why: event.expect, image: event.image, nearby: [event.location, `${dateLabel(event)} · ${event.time}`], mapQuery: event.mapQuery || `${event.location}, Ateneo de Manila University, Quezon City` };
          })
      : places.filter((place) => state.activeMapCategory === "all" || place.category === state.activeMapCategory);
  filtered.forEach((place) => {
    const pin = document.createElement("button");
    pin.className = `place-pin ${place.category}`;
    pin.type = "button";
    pin.style.left = `${place.x}%`;
    pin.style.top = `${place.y}%`;
    pin.textContent = categoryPinLabels[place.category] || "M";
    pin.setAttribute("aria-label", place.name);
    pin.addEventListener("click", () => selectPlace(place.id, place));
    board.appendChild(pin);
  });
  selectPlace((filtered[0] || places[0]).id, filtered[0] || places[0]);
}

function renderEventOverview() {
  qs("#overviewMonth").value = state.activeOverviewMonth;
  const visible = events.filter((event) => state.activeOverviewMonth === "all" || event.month === state.activeOverviewMonth);
  const grouped = months.filter((month) => month !== "all").map((month) => [month, visible.filter((event) => event.month === month)]).filter(([, items]) => items.length);
  const sections = grouped.map(([month, items]) => `
    <section class="calendar-month two-week-mode">
      <h3>${month} ${monthMeta[month].year}</h3>
      ${renderTwoWeekCalendar(month, items)}
    </section>
  `).join("");
  qs("#eventCalendar").innerHTML = sections + renderSelectedCalendarDay();
}

function renderMonthCalendar(month, items) {
  const meta = monthMeta[month];
  const daysInMonth = new Date(meta.year, meta.monthIndex + 1, 0).getDate();
  const firstDay = new Date(meta.year, meta.monthIndex, 1).getDay();
  const byDate = new Map();
  items.forEach((event) => {
    if (!byDate.has(event.dateNumber)) byDate.set(event.dateNumber, []);
    byDate.get(event.dateNumber).push(event);
  });
  const blanks = Array.from({ length: firstDay }, () => `<div class="calendar-cell muted-cell"></div>`);
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const date = index + 1;
    const dateEvents = byDate.get(date) || [];
    const dayKey = `${month}:${date}`;
    return `
      <div class="calendar-cell ${state.selectedCalendarDay === dayKey ? "selected-day" : ""}" role="button" tabindex="0" data-calendar-day="${dayKey}">
        <strong>${date}</strong>
        ${dateEvents.slice(0, 3).map((event) => `<button class="calendar-event" type="button" data-details="${event.id}">${event.title}</button>`).join("")}
      </div>
    `;
  });
  return `<div class="calendar-weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div><div class="calendar-days">${blanks.join("")}${days.join("")}</div>`;
}

function timeSortValue(time) {
  const match = String(time).match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/i);
  if (!match) return 9999;
  let hour = Number(match[1]);
  const minute = Number(match[2] || 0);
  const period = match[3].toUpperCase();
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  return hour * 60 + minute;
}

function renderSelectedCalendarDay() {
  if (!state.selectedCalendarDay) return "";
  const [month, day] = state.selectedCalendarDay.split(":");
  const meta = monthMeta[month];
  if (!meta) return "";
  const items = events
    .filter((event) => event.month === month && String(event.dateNumber) === day)
    .sort((a, b) => timeSortValue(a.time) - timeSortValue(b.time));
  if (!items.length) return "";
  return `
    <section class="calendar-day-detail">
      <h3>${month} ${day}, ${meta.year}</h3>
      <div class="calendar-day-list">
        ${items.map((event) => `
          <button type="button" data-details="${event.id}">
            <span>${event.time}</span>
            <strong>${event.title}</strong>
            <small>${event.location}</small>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTwoWeekCalendar(month, items) {
  const meta = monthMeta[month];
  const daysInMonth = new Date(meta.year, meta.monthIndex + 1, 0).getDate();
  const byDate = new Map();
  items.forEach((event) => {
    if (!byDate.has(event.dateNumber)) byDate.set(event.dateNumber, []);
    byDate.get(event.dateNumber).push(event);
  });
  const ranges = [
    [1, Math.min(14, daysInMonth)],
    [15, daysInMonth]
  ].filter(([start]) => start <= daysInMonth);
  return ranges.map(([start, end]) => `
    <article class="two-week-slab">
      <h4>${month} ${start}-${end}</h4>
      <div class="two-week-days">
        ${Array.from({ length: end - start + 1 }, (_, index) => {
          const date = start + index;
          const dateEvents = byDate.get(date) || [];
          return `
            <button class="two-week-day ${dateEvents.length ? "has-events" : ""}" type="button" data-calendar-day="${month}:${date}">
              <strong>${date}</strong>
              ${dateEvents.slice(0, 2).map((event) => `<span>${event.title}</span>`).join("")}
            </button>
          `;
        }).join("")}
      </div>
    </article>
  `).join("");
}

function selectPlace(placeId, placeOverride) {
  const place = placeOverride || places.find((item) => item.id === placeId) || places[0];
  const contactRows = [place.contact && ["Contact", place.contact], place.phone && ["Phone", place.phone], place.email && ["Email", place.email], place.officeHours && ["Hours", place.officeHours]]
    .filter(Boolean)
    .map(([label, value]) => `<p><strong>${label}:</strong> ${value}</p>`)
    .join("");
  qsa(".place-pin").forEach((pin) => pin.classList.toggle("active", pin.getAttribute("aria-label") === place.name));
  qs("#placePanel").innerHTML = `
    ${place.image ? `<figure class="photo-block place-photo"><img src="${place.image}" alt="${place.name}" loading="lazy"></figure>` : `<div class="photo-block photo-needed"><strong>${place.name}</strong><span>Photo needed</span></div>`}
    <div class="badge-row">
      <span class="badge safe">${labelCategory(place.category)}</span>
      <span class="badge">${areaLabel(place.area)}</span>
    </div>
    <h3>${place.name}</h3>
    <p>${place.short}</p>
    <p><strong>Why students go:</strong> ${place.why}</p>
    ${contactRows}
    <p><strong>Nearby:</strong> ${place.nearby.join(", ")}</p>
    <button class="primary" type="button" id="directionsButton">Open in Google Maps</button>
  `;
  renderRoute(place);
  qs("#directionsButton").addEventListener("click", () => openGoogleDirections(place));
}

function renderRoute(place) {
  qs("#routeCard").innerHTML = `
    <h3>How to get to ${place.name}</h3>
    <p class="mini">Simple route from Leong Hall using visible landmarks.</p>
    <div class="route-list">
      ${place.directions.map((step, index) => `
        <div class="route-step"><span class="step-num">${index + 1}</span><span>${step}</span></div>
      `).join("")}
    </div>
  `;
}

function renderQuickMatch() {
  const list = filteredEvents();
  qsa("[data-event-quick]").forEach((item) => item.classList.toggle("active", item.dataset.eventQuick === state.activeEventQuick));
  qs("#eventCount").textContent = state.activeEventQuick === "archive" ? `Archive: ${list.length} passed events` : `Showing ${list.length} of ${events.length} events`;
  if (state.quickIndex >= list.length) state.quickIndex = 0;
  const current = currentQuickMatchEvent();
  renderSwipeCard(current);
  renderEventList(current ? list.filter((event) => event.id !== current.id) : list);
}

function renderSwipeCard(event) {
  const swipeCard = qs("#swipeCard");
  if (!event) {
    delete swipeCard.dataset.details;
    swipeCard.innerHTML = `<div class="empty-state"><h3>${state.activeEventQuick === "archive" ? "Archive is empty" : "No recommendations left"}</h3><p>${state.activeEventQuick === "archive" ? "Passed events will appear here." : "Use Archive to restore passed events or restart the flow."}</p></div>`;
    return;
  }
  const archived = state.activeEventQuick === "archive";
  swipeCard.dataset.details = event.id;
  swipeCard.innerHTML = `
    <figure class="event-photo large">
      <img src="${event.image}" alt="${event.title}" loading="lazy">
    </figure>
    <div class="figma-event-title-row">
      <h3>${event.title}</h3>
    </div>
    <p class="org-name">${event.organization || typeLabel(event.type)}</p>
    <div class="badge-row figma-chip-row compact-quick-tags">
      <span class="badge location">${event.location}</span>
      <span class="badge time-chip">${dateLabel(event)}, ${event.time}</span>
      <span class="badge access-chip">${event.access === "open" ? "For all" : event.access.replace("-", " ")}</span>
      <span class="badge">${event.type === "social" ? "Social" : "Org"}</span>
      <span class="badge">${energyLabel(event.energy)}</span>
    </div>
    <p>${event.description}</p>
    <div class="swipe-actions">
      ${archived ? `<button class="secondary" type="button" data-restore-event="${event.id}">Restore</button>` : `<button class="ghost" type="button" data-pass-event="${event.id}">Pass</button><button class="primary" type="button" data-interested-event="${event.id}">Interested</button>`}
      <button class="ghost" type="button" data-signup-event="${event.id}">Sign up</button>
    </div>
  `;
}

function renderEventList(list) {
  qs("#eventList").innerHTML = list.map((event) => `
    <article class="event-row" data-details="${event.id}">
      <img class="event-thumb" src="${event.image}" alt="${event.title}" loading="lazy">
      <div class="event-row-body">
        <div class="badge-row">
          ${eventTagBadges(event)}
        </div>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <div class="meta">
          <span>${event.location}</span>
          <span>${dateLabel(event)}, ${event.time}</span>
          <span>Deadline: ${deadlineLabel(event)}</span>
        </div>
        <div class="event-actions">
          ${state.activeEventQuick === "archive" ? `<button class="secondary" type="button" data-restore-event="${event.id}">Restore</button>` : `<button class="ghost" type="button" data-list-pass-event="${event.id}">Pass</button><button class="secondary" type="button" data-interested-event="${event.id}">Interested</button>`}
          <button class="primary" type="button" data-signup-event="${event.id}">Sign up</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderProfile() {
  qs("#profileYear").value = state.profile.yearLevel;
  qs("#profileCourse").value = state.profile.course;
  qs("#profileSchool").value = state.profile.school;
  qs("#profileAge").value = state.profile.age;
  const type = personalityTypes[state.profile.personality];
  const typeImage = personalityTypeImages[state.profile.personality];
  const savedCount = state.interestedEventIds.size;
  qs("#profileOutput").innerHTML = `
    <section class="figma-profile-hero">
      <img class="profile-type-avatar" src="${typeImage}" alt="${type.title}">
      <div>
        <h3>${state.profile.name}</h3>
        <p>${state.profile.yearLevel} & ${state.profile.course}</p>
      </div>
    </section>
    <section class="figma-profile-section profile-inline-edit">
      <h3>Account</h3>
      <label>Email
        <input value="${state.profile.email}" disabled>
      </label>
      <label>Course
        <select id="inlineProfileCourse">${courses.map((course) => `<option ${course === state.profile.course ? "selected" : ""}>${course}</option>`).join("")}</select>
      </label>
      <div class="profile-edit-row">
        <label>School
          <select id="inlineProfileSchool">
            ${["SOM", "SOSE", "SOH", "SOSS"].map((school) => `<option value="${school}" ${school === state.profile.school ? "selected" : ""}>${school}</option>`).join("")}
          </select>
        </label>
        <label>Age
          <input id="inlineProfileAge" type="number" min="16" max="35" value="${state.profile.age}">
        </label>
      </div>
      <button class="primary compact-save" type="button" id="inlineProfileSave">Save changes</button>
    </section>
    ${profileListSection("Preferences", [
      { label: `TAYO type: ${type.title}`, action: "personality" },
      { label: `Interests: ${state.profile.interests.map(labelCategory).join(", ") || "None yet"}`, action: "interests" },
      { label: `${savedCount} interested event${savedCount === 1 ? "" : "s"}`, action: "none" }
    ])}
    ${profileListSection("Support", [
      { label: "Restart flow", action: "restart" },
      { label: "Contact TAYO team", action: "contact" },
      { label: "Placeholder: tayo.team@ateneo.edu", action: "contact" },
      { label: "Placeholder: events@tayo.app", action: "contact" }
    ])}
  `;
}

function profileListSection(title, rows) {
  return `
    <section class="figma-profile-section">
      <h3>${title}</h3>
      <div class="figma-profile-list">
        ${rows.map((row) => `<button type="button" data-profile-action="${row.action}"><span>${row.label}</span><span aria-hidden="true">→</span></button>`).join("")}
      </div>
    </section>
  `;
}

function handleProfileAction(action) {
  if (!action || action === "none") return;
  if (action === "restart") {
    restartFlow();
    return;
  }
  if (action === "contact") {
    alert("TAYO team emails: tayo.team@ateneo.edu, events@tayo.app");
    return;
  }
  if (action === "personality") {
    const order = ["independent", "connector", "balanced"];
    const next = order[(order.indexOf(state.profile.personality) + 1) % order.length];
    state.profile.personality = next;
    renderApp();
    routeTo("profile");
    return;
  }
  if (action === "course") {
    const value = prompt("Edit course", state.profile.course);
    if (value && value.trim()) state.profile.course = value.trim();
    renderApp();
    routeTo("profile");
    return;
  }
  if (action === "school") {
    const value = prompt("Edit school: SOM, SOSE, SOH, or SOSS", state.profile.school);
    const clean = (value || "").trim().toUpperCase();
    if (["SOM", "SOSE", "SOH", "SOSS"].includes(clean)) state.profile.school = clean;
    renderApp();
    routeTo("profile");
    return;
  }
  if (action === "age") {
    const value = prompt("Edit age", state.profile.age);
    if (value && Number(value) >= 16 && Number(value) <= 35) state.profile.age = String(Number(value));
    renderApp();
    routeTo("profile");
    return;
  }
  if (action === "interests" || action === "subtags") {
    qs("#profile").classList.add("profile-editing");
    qs("#profile").scrollTo?.({ top: qs("#profile").scrollHeight, behavior: "smooth" });
  }
}

function openEventDetail(eventId) {
  const event = scoredEvents().find((item) => item.id === eventId);
  if (!event) return;
  state.currentEventId = eventId;
  qs("#detailBadges").innerHTML = `
    ${eventTagBadges(event)}
  `;
  qs("#detailTitle").textContent = event.title;
  qs("#detailSubtitle").textContent = `${dateLabel(event)}, ${event.time} - ${event.location} - Deadline: ${deadlineLabel(event)}`;
  qs(".detail-main").innerHTML = `
    <section class="detail-section description-card">
      <figure class="detail-photo">
        <img src="${event.image}" alt="${event.title}" loading="lazy">
      </figure>
      <h3>Description</h3>
      <p>${event.description}</p>
    </section>
    <section class="detail-section">
      <h3>What to expect</h3>
      <p>${event.expect}</p>
    </section>
    <section class="detail-section">
      <h3>Why TAYO recommended it</h3>
      <p>TAYO matched this against ${state.profile.yearLevel}, ${state.profile.course}, selected interests, subtags, and ${personalityTypes[state.profile.personality].title}.</p>
      <ul class="detail-list">${event.match.reasons.map((reason) => `<li><strong>Match reason:</strong> ${reason}</li>`).join("")}</ul>
    </section>
  `;
  qs("#detailFacts").innerHTML = `
    <li><strong>Type:</strong> ${typeLabel(event.type)}</li>
    <li><strong>Location:</strong> ${event.location}</li>
    <li><strong>Access:</strong> ${accessLabel(event.access)}</li>
    <li><strong>Bring / wear:</strong> ${event.bring}</li>
    <li><strong>Sign-up quantity:</strong> ${event.signupQuantity}</li>
    <li><strong>Cost:</strong> ${event.price}</li>
    <li><strong>Audience:</strong> ${event.audience}</li>
    <li><strong>Venue:</strong> ${venueLabel(event.venue)}</li>
    <li><strong>Social energy:</strong> ${energyLabel(event.energy)}</li>
  `;
  qs("#detailStatus").textContent = "";
  qs("#modalInterested").textContent = state.interestedEventIds.has(event.id) ? "Unsave" : "Interested";
  qs("#modalPass").textContent = state.passedEventIds.has(event.id) ? "Passed" : "Pass";
  qs("#modalPass").disabled = state.passedEventIds.has(event.id);
  qs("#modalDirections").hidden = !(event.mapQuery || event.area === "outside");
  document.body.classList.add("detail-open");
  qs("#eventDetail").classList.add("open");
}

function closeEventDetail() {
  document.body.classList.remove("detail-open");
  qs("#eventDetail").classList.remove("open");
}

function markInterested(eventId, options = {}) {
  const wasSaved = state.interestedEventIds.has(eventId);
  if (wasSaved) {
    state.interestedEventIds.delete(eventId);
  } else {
    state.interestedEventIds.add(eventId);
  }
  renderApp();
  if (options.route !== false) routeTo(options.route || "quickmatch");
}

function passEvent(eventId) {
  state.passedEventIds.add(eventId);
  renderApp();
  routeTo("quickmatch");
}

function passListEvent(eventId) {
  state.passedEventIds.add(eventId);
  renderApp();
  routeTo("quickmatch");
}

function restoreEvent(eventId) {
  state.passedEventIds.delete(eventId);
  state.activeEventQuick = "all";
  state.quickIndex = 0;
  renderApp();
  routeTo("quickmatch");
}

function signupEvent(eventId, options = {}) {
  renderApp();
  if (state.activeRoute) routeTo(state.activeRoute);
  if (options.external !== false) openMapsUrl("https://www.mcdonalds.com/us/en-us/family-fun-hub/get-creative.html");
}

function openTutorial() {
  document.body.dataset.panel = "app";
  document.body.classList.add("tour-active");
  qs("#authFlow").classList.add("hidden");
  qs("#appShell").classList.remove("hidden");
  state.tourIndex = 0;
  renderApp();
  renderTourStep();
  qs("#tourOverlay").classList.add("open");
}

function closeTutorial(nextPanel = "firstEvent") {
  qs("#tourOverlay").classList.remove("open");
  document.body.classList.remove("tour-active");
  if (!nextPanel) return;
  qs("#appShell").classList.add("hidden");
  qs("#authFlow").classList.remove("hidden");
  renderFirstEventGrid();
  showPanel(nextPanel);
}

function renderTourStep() {
  const step = tourSteps[state.tourIndex] || tourSteps[0];
  routeTo(step.route);
  qs("#tourStepLabel").textContent = `Demo ${state.tourIndex + 1} of ${tourSteps.length}`;
  qs("#tourTitle").textContent = step.title;
  qs("#tourBody").textContent = step.body;
  qs("#tourNext").textContent = state.tourIndex === tourSteps.length - 1 ? "Finish tour" : "Next";
}

function bindListeners() {
  document.addEventListener("click", (event) => {
    const skipFirstEvent = event.target.closest("#goHomeFromFlow");
    if (skipFirstEvent) {
      event.preventDefault();
      showApp("home");
      return;
    }

    const chooseRoleButton = event.target.closest("[data-role]");
    if (chooseRoleButton) {
      event.preventDefault();
      state.role = chooseRoleButton.dataset.role;
      showPanel(state.role === "student" ? "profileSetup" : "orgPasscode");
    }
  });

  const panelistShortcut = qs("#panelistShortcut");
  if (panelistShortcut) panelistShortcut.addEventListener("click", () => {
    state.registeredEmail = state.profile.email;
    renderPersonalityResult();
    showApp("home");
  });

  qs("#signupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = qs("#signupEmail").value;
    if (!isAteneoEmail(email)) {
      setMessage("#signupMessage", 'Sorry, app only available for Atenean members. Please use an Ateneo email.', "error");
      return;
    }
    state.registeredEmail = email;
    state.profile.email = email;
    state.profile.name = profileNameFromEmail(email);
    setMessage("#signupMessage", "Ateneo email verified. Continue to user selection.", "success");
    showPanel("role");
  });

  qs("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = qs("#loginEmail").value;
    if (!isAteneoEmail(email)) {
      setMessage("#loginMessage", "Invalid login. Try again with an Ateneo email.", "error");
      return;
    }
    state.registeredEmail = email;
    state.profile.email = email;
    state.profile.name = profileNameFromEmail(email);
    setMessage("#loginMessage", "Successful login.", "success");
    showApp("home");
  });

  function chooseRole(role) {
    state.role = role;
    showPanel(role === "student" ? "profileSetup" : "orgPasscode");
  }

  qsa("[data-role]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      chooseRole(button.dataset.role);
    });
  });

  qs("#orgPasscodeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const passcode = qs("#orgPasscodeInput").value.trim();
    if (passcode !== "TAYO-ORG") {
      setMessage("#orgPasscodeMessage", "Invalid :( Please try again.", "error");
      return;
    }
    setMessage("#orgPasscodeMessage", "", "");
    showPanel("organizer");
  });

  qs("#organizerToApp").addEventListener("click", () => showApp("home"));

  qs("#studentProfileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    syncProfileFromSetup();
    if (!state.profile.yearLevel || !state.profile.course || !state.profile.school) return;
    renderInterestTags();
    showPanel("interests");
  });

  qs("#interestTags").addEventListener("click", (event) => {
    const button = event.target.closest("[data-interest]");
    if (!button) return;
    const interest = button.dataset.interest;
    if (state.profile.interests.includes(interest)) {
      state.profile.interests = state.profile.interests.filter((item) => item !== interest);
      const group = interestGroups.find((item) => item.id === interest);
      if (group) state.profile.subtags = state.profile.subtags.filter((tag) => !group.subtags.includes(tag));
    } else {
      state.profile.interests.push(interest);
    }
    renderInterestTags();
    renderSubtags(interest);
  });

  qs("#subtagGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-subtag]");
    if (!button) return;
    const subtag = button.dataset.subtag;
    const group = groupForSubtag(subtag);
    if (state.profile.subtags.includes(subtag)) {
      state.profile.subtags = state.profile.subtags.filter((item) => item !== subtag);
    } else {
      state.profile.subtags.push(subtag);
    }
    if (group) syncInterestForGroup(group.id);
    renderInterestTags();
    renderSubtags(group?.id || state.selectedInterestForSubtags);
  });

  qs("#selectAllSubtags").addEventListener("click", () => {
    const group = interestGroups.find((item) => item.id === state.selectedInterestForSubtags) || interestGroups[0];
    const allSelected = group.subtags.every((tag) => state.profile.subtags.includes(tag));
    setSubtagsForGroup(group.id, !allSelected, renderSubtags);
  });

  qs("#continueToPersonality").addEventListener("click", () => {
    if (!state.profile.interests.length) {
      setMessage("#interestMessage", "Select at least one interest tag before continuing.", "error");
      return;
    }
    setMessage("#interestMessage", "", "");
    renderPersonalityForm();
    showPanel("personality");
  });

  qs("#personalityForm").addEventListener("click", (event) => {
    const option = event.target.closest("[data-question]");
    if (!option) return;
    state.personalityAnswers[option.dataset.question] = option.dataset.answer;
    renderPersonalityForm();
  });

  qs("#personalityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (Object.keys(state.personalityAnswers).length < personalityQuestions.length) return;
    renderPersonalityResult();
    showPanel("result");
  });

  qs("#skipTutorial").addEventListener("click", () => {
    renderFirstEventGrid();
    showPanel("firstEvent");
  });

  qs("#tourSkip").addEventListener("click", () => closeTutorial("firstEvent"));
  qs("#tourNext").addEventListener("click", () => {
    if (state.tourIndex >= tourSteps.length - 1) {
      closeTutorial("firstEvent");
      return;
    }
    state.tourIndex += 1;
    renderTourStep();
  });

  qs("#firstEventGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-first-event]");
    if (!card) return;
    qsa("[data-first-event]").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    state.currentEventId = card.dataset.firstEvent;
  });

  qs("#goHomeFromFlow").addEventListener("click", () => showApp("home"));
  qs("#goQuickMatchFromFlow").addEventListener("click", () => {
    const selected = qs("[data-first-event].selected");
    if (selected) signupEvent(selected.dataset.firstEvent);
    showApp("home");
  });

  window.addEventListener("hashchange", () => {
    if (!qs("#appShell").classList.contains("hidden")) routeTo(location.hash.slice(1));
  });

  qsa("[data-route]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      routeTo(link.dataset.route);
    });
  });

  qsa("[data-route-button]").forEach((button) => {
    button.addEventListener("click", () => routeTo(button.dataset.routeButton));
  });

  qs("#restartFlow").addEventListener("click", restartFlow);
  qs("#themeToggle").addEventListener("click", toggleTheme);

  qsa("[data-preview-device]").forEach((button) => {
    button.addEventListener("click", () => {
      state.previewDevice = button.dataset.previewDevice;
      localStorage.setItem("tayoPreviewDevice", state.previewDevice);
      applyPreviewDevice();
    });
  });

  qs("#mapFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-map-filter]");
    if (!button) return;
    state.activeMapCategory = button.dataset.mapFilter;
    if (state.activeMapCategory !== "events") {
      state.activeMapMonth = "all";
      state.activeMapWeek = "all";
    }
    renderMap();
  });
  qs("#mapWeekFilters").addEventListener("input", (event) => {
    if (event.target.id === "mapMonthSelect") state.activeMapMonth = event.target.value;
    if (event.target.id === "mapWeekSelect") state.activeMapWeek = event.target.value;
    renderMap();
  });
  qs("#overviewMonth").addEventListener("input", () => {
    state.activeOverviewMonth = qs("#overviewMonth").value;
    state.selectedCalendarDay = null;
    renderEventOverview();
  });
  qs("#eventCalendar").addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-overview-view]");
    if (viewButton) {
      state.activeOverviewView = viewButton.dataset.overviewView;
      state.selectedCalendarDay = null;
      renderEventOverview();
      return;
    }
    const details = event.target.closest("[data-details]");
    if (details) {
      openEventDetail(details.dataset.details);
      return;
    }
    const calendarDay = event.target.closest("[data-calendar-day]");
    if (calendarDay) {
      state.selectedCalendarDay = calendarDay.dataset.calendarDay;
      renderEventOverview();
      return;
    }
  });

  qs("#eventType").addEventListener("input", renderQuickMatch);
  qs("#eventEnergy").addEventListener("input", renderQuickMatch);
  qs("#eventVenue").addEventListener("input", renderQuickMatch);
  qs("#eventAccess").addEventListener("input", renderQuickMatch);

  qs("#profileInterestTags").addEventListener("click", (event) => {
    const button = event.target.closest("[data-profile-interest]");
    if (!button) return;
    const interest = button.dataset.profileInterest;
    state.profileSelectedInterestForSubtags = interest;
    if (state.profile.interests.includes(interest)) {
      state.profile.interests = state.profile.interests.filter((item) => item !== interest);
      const group = interestGroups.find((item) => item.id === interest);
      if (group) state.profile.subtags = state.profile.subtags.filter((tag) => !group.subtags.includes(tag));
    } else {
      state.profile.interests.push(interest);
    }
    renderApp();
    routeTo("profile");
  });

  qs("#profileSubtagGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-profile-subtag]");
    if (!button) return;
    const subtag = button.dataset.profileSubtag;
    const group = groupForSubtag(subtag);
    if (state.profile.subtags.includes(subtag)) {
      state.profile.subtags = state.profile.subtags.filter((item) => item !== subtag);
    } else {
      state.profile.subtags.push(subtag);
    }
    if (group) syncInterestForGroup(group.id);
    state.profileSelectedInterestForSubtags = group?.id || state.profileSelectedInterestForSubtags;
    renderApp();
    routeTo("profile");
  });

  qs("#profileSelectAllSubtags").addEventListener("click", () => {
    const group = interestGroups.find((item) => item.id === state.profileSelectedInterestForSubtags) || interestGroups[0];
    const allSelected = group.subtags.every((tag) => state.profile.subtags.includes(tag));
    setSubtagsForGroup(group.id, !allSelected, renderProfileSubtags);
    routeTo("profile");
  });

  qsa("[data-event-quick]").forEach((button) => {
    button.addEventListener("click", () => {
      qsa("[data-event-quick]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.activeEventQuick = button.dataset.eventQuick;
      state.quickIndex = 0;
      renderQuickMatch();
    });
  });

  document.addEventListener("click", (event) => {
    const externalLink = event.target.closest('a[href^="http"]');
    if (externalLink) {
      externalLink.target = "_blank";
      externalLink.rel = "noopener noreferrer";
    }
    const roleButton = event.target.closest("[data-role]");
    if (roleButton) {
      event.preventDefault();
      chooseRole(roleButton.dataset.role);
      return;
    }
    const authScreen = event.target.closest("[data-auth-screen]");
    const details = event.target.closest("[data-details]");
    const interested = event.target.closest("[data-interested-event]");
    const pass = event.target.closest("[data-pass-event]");
    const listPass = event.target.closest("[data-list-pass-event]");
    const restore = event.target.closest("[data-restore-event]");
    const signup = event.target.closest("[data-signup-event]");
    const profileAction = event.target.closest("[data-profile-action]");
    const inlineProfileSave = event.target.closest("#inlineProfileSave");
    const command = event.target.closest("[data-interested-event], [data-pass-event], [data-list-pass-event], [data-restore-event], [data-signup-event], [data-auth-screen]");
    if (authScreen) {
      event.preventDefault();
      if (authScreen.dataset.authScreen === "tutorial") {
        openTutorial();
      } else {
        showPanel(authScreen.dataset.authScreen);
      }
    }
    if (details && !command) openEventDetail(details.dataset.details);
    if (interested) markInterested(interested.dataset.interestedEvent, interested.dataset.stayRoute ? { advance: false, route: interested.dataset.stayRoute } : {});
    if (pass) passEvent(pass.dataset.passEvent);
    if (listPass) passListEvent(listPass.dataset.listPassEvent);
    if (restore) restoreEvent(restore.dataset.restoreEvent);
    if (signup) signupEvent(signup.dataset.signupEvent);
    if (inlineProfileSave) {
      state.profile.course = qs("#inlineProfileCourse").value;
      state.profile.school = qs("#inlineProfileSchool").value;
      state.profile.age = qs("#inlineProfileAge").value;
      renderApp();
      routeTo("profile");
    }
    if (profileAction) handleProfileAction(profileAction.dataset.profileAction);
  });

  qs("#closeDetail").addEventListener("click", closeEventDetail);
  qs("#eventDetail").addEventListener("click", (event) => {
    if (event.target.id === "eventDetail") closeEventDetail();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeEventDetail();
  });
  qs("#modalInterested").addEventListener("click", () => {
    if (!state.currentEventId) return;
    const wasSaved = state.interestedEventIds.has(state.currentEventId);
    markInterested(state.currentEventId, { advance: false, route: false });
    qs("#modalInterested").textContent = wasSaved ? "Interested" : "Unsave";
    qs("#detailStatus").textContent = wasSaved ? "Removed from interested events." : "Marked interested.";
    if (wasSaved && state.activeRoute === "home") closeEventDetail();
  });
  qs("#modalPass").addEventListener("click", () => {
    if (!state.currentEventId) return;
    state.passedEventIds.add(state.currentEventId);
    closeEventDetail();
    renderApp();
    routeTo(state.activeRoute || "quickmatch");
  });
  qs("#modalSignup").addEventListener("click", () => {
    if (!state.currentEventId) return;
    signupEvent(state.currentEventId);
    qs("#detailStatus").textContent = "Opening signup placeholder in a new tab.";
  });
  qs("#modalDirections").addEventListener("click", () => {
    if (!state.currentEventId) return;
    const event = events.find((item) => item.id === state.currentEventId);
    if (!event) return;
    openGoogleDirections({
      name: event.title,
      mapQuery: event.mapQuery || `${event.location}, Ateneo de Manila University, Quezon City`
    });
  });

  qs("#profileEditForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.profile.yearLevel = qs("#profileYear").value;
    state.profile.course = qs("#profileCourse").value.trim();
    state.profile.school = qs("#profileSchool").value;
    state.profile.age = qs("#profileAge").value;
    renderApp();
    routeTo("profile");
  });
}

function init() {
  applyTheme();
  applyPreviewDevice();
  populateCourseList();
  renderInterestTags();
  renderPersonalityForm();
  renderFirstEventGrid();
  bindListeners();
  showPanel("welcome");
}

init();

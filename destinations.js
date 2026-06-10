const destinationData = [
  {
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    type: "relaxation",
    budget: "high",
    image: "images/santorini.jpg",
    description: "Famous for its white-washed buildings, crystal blue waters and stunning sunsets over the Aegean Sea.",
    attractions: ["Oia Village", "Red Beach", "Akrotiri Archaeological Site", "Fira Town"],
    costs: [
      { category: "Budget", accommodation: "$50/night", food: "$20/day", transport: "$10/day" },
      { category: "Mid-range", accommodation: "$150/night", food: "$50/day", transport: "$30/day" },
      { category: "Luxury", accommodation: "$400/night", food: "$120/day", transport: "$80/day" }
    ]
  },
  {
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    type: "cultural",
    budget: "medium",
    image: "images/kyoto.jpg",
    description: "A city of ancient temples, traditional tea houses and breathtaking cherry blossoms in spring.",
    attractions: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Kinkaku-ji", "Gion District"],
    costs: [
      { category: "Budget", accommodation: "$40/night", food: "$15/day", transport: "$8/day" },
      { category: "Mid-range", accommodation: "$120/night", food: "$40/day", transport: "$25/day" },
      { category: "Luxury", accommodation: "$350/night", food: "$100/day", transport: "$60/day" }
    ]
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    continent: "South America",
    type: "adventure",
    budget: "medium",
    image: "images/machu-picchu.jpg",
    description: "A mysterious Incan citadel set high in the Andes mountains, shrouded in mist and history.",
    attractions: ["Sun Gate", "Intihuatana Stone", "Temple of the Sun", "Huayna Picchu Mountain"],
    costs: [
      { category: "Budget", accommodation: "$30/night", food: "$10/day", transport: "$15/day" },
      { category: "Mid-range", accommodation: "$80/night", food: "$30/day", transport: "$40/day" },
      { category: "Luxury", accommodation: "$250/night", food: "$80/day", transport: "$100/day" }
    ]
  },
  {
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    type: "nature",
    budget: "low",
    image: "images/bali.jpg",
    description: "An island paradise known for its forested volcanic mountains, iconic rice paddies and vibrant beaches.",
    attractions: ["Tanah Lot Temple", "Ubud Monkey Forest", "Tegallalang Rice Terraces", "Seminyak Beach"],
    costs: [
      { category: "Budget", accommodation: "$20/night", food: "$8/day", transport: "$5/day" },
      { category: "Mid-range", accommodation: "$80/night", food: "$25/day", transport: "$15/day" },
      { category: "Luxury", accommodation: "$300/night", food: "$80/day", transport: "$50/day" }
    ]
  },
  {
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    type: "adventure",
    budget: "low",
    image: "images/capetown.jpg",
    description: "A vibrant city nestled between mountains and ocean with incredible food, culture and natural beauty.",
    attractions: ["Table Mountain", "Boulders Beach", "Cape of Good Hope", "V&A Waterfront"],
    costs: [
      { category: "Budget", accommodation: "$25/night", food: "$10/day", transport: "$5/day" },
      { category: "Mid-range", accommodation: "$90/night", food: "$30/day", transport: "$20/day" },
      { category: "Luxury", accommodation: "$280/night", food: "$90/day", transport: "$60/day" }
    ]
  },
  {
    name: "New York",
    country: "USA",
    continent: "North America",
    type: "cultural",
    budget: "high",
    image: "images/newyork.jpg",
    description: "The city that never sleeps — iconic skyline, world class food, art and endless energy.",
    attractions: ["Central Park", "Times Square", "Statue of Liberty", "Brooklyn Bridge"],
    costs: [
      { category: "Budget", accommodation: "$80/night", food: "$25/day", transport: "$10/day" },
      { category: "Mid-range", accommodation: "$200/night", food: "$60/day", transport: "$30/day" },
      { category: "Luxury", accommodation: "$500/night", food: "$150/day", transport: "$80/day" }
    ]
  },
  {
    name: "Sydney",
    country: "Australia",
    continent: "Oceania",
    type: "relaxation",
    budget: "high",
    image: "images/sydney.jpg",
    description: "A stunning harbour city famous for its opera house, golden beaches and laid back lifestyle.",
    attractions: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge", "Darling Harbour"],
    costs: [
      { category: "Budget", accommodation: "$60/night", food: "$20/day", transport: "$8/day" },
      { category: "Mid-range", accommodation: "$160/night", food: "$50/day", transport: "$25/day" },
      { category: "Luxury", accommodation: "$400/night", food: "$120/day", transport: "$70/day" }
    ]
  }
];
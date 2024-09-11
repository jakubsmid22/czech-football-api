const teams = [
  {
    id: 1,
    title: "bohemians",
    name: "Bohemians Praha 1905",
    short_name: "Bohemians Praha 1905",
    logo: "https://bohemians.esports.cz/files/logos/znak_bohemians_velky.png",
    nicknames: ["Klokani", "Bohemka"],
    founded: 1905,
    stadium: {
      name: "Ďolíček",
      capacity: 6300,
      image:
        "https://www.geo5.cz/cache/gallery/293/DJI_0364.JPG_800_600_3e74bfd09d7ca55c02d8fc60faa4a69f.JPG",
    },
    owner: "Ing. Dariusz Jakubowicz",
    president: "Antonín Panenka",
    head_coach: "Jaroslav Veselý",
    location: {
      country: "Czech Republic",
      city: "Prague",
      district: "Vršovice",
    },
    club_website: "https://bohemians.cz/",
    colors: {
      primary: "Green",
      secondary: "White",
      hex: ["#009746", "#FEFEFE"],
      emoji: "🟢⚪",
    },
    achievements: {
      league_titles: 1,
      domestic_cups: 1,
    },
    rivals: [
      {
        name: "SK Slavia Praha",
        rivalry_name: "Vršovické derby",
        reason: "regional",
      },
    ],
    affiliatedClubs: ["FK Pardubice"],
    mascot: "Kangaroo",
    club_legends: [
      {
        name: "Antonín Panenka",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/bohemians_praha_1905",
      facebook: "https://www.facebook.com/bohemians.cz",
      x: "https://x.com/bohemians1905",
      youtube: "https://www.youtube.com/bohemkatv",
      tiktok: "https://www.tiktok.com/@bohemians.cz",
    },
  },
  {
    id: 2,
    title: "budejovice",
    name: "SK Dynamo České Budějovice, a. s.",
    short_name: "SK Dynamo České Budějovice",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dynamo%C4%8Cesk%C3%A9Bud%C4%9Bjovice.svg/200px-Dynamo%C4%8Cesk%C3%A9Bud%C4%9Bjovice.svg.png",
    nicknames: ["Dynamo"],
    founded: 1900,
    stadium: {
      name: "Fotbalový stadion Střelecký ostrov",
      capacity: 6681,
      image: "https://www.dynamocb.cz/foto/stadion/stadion_nahled.jpg",
    },
    owner: "PhDr. Dalibor Jirka",
    president: "Josef Jodl",
    head_coach: "František Straka",
    location: {
      country: "Czech Republic",
      city: "České Budějovice",
      district: "Sokolský ostrov",
    },
    club_website: "https://www.dynamocb.cz/",
    colors: {
      primary: "Black",
      secondary: "White",
      hex: ["#070909", "#FEFEFE"],
      emoji: "⚫⚪",
    },
    achievements: {
      league_titles: 0,
      domestic_cups: 0,
    },
    rivals: [
      {
        name: "FC SILON Táborsko",
        rivalry_name: "Jihočeské derby",
        reason: "regional",
      },
    ],
    affiliatedClubs: null,
    mascot: null,
    club_legends: [
      {
        name: "Karel Poborský",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/skdynamocb",
      facebook: "https://www.facebook.com/dynamocb",
      x: "https://x.com/SK_Dynamo_CB",
      youtube: "https://www.youtube.com/skdynamo",
      tiktok: null,
    },
  },
  {
    id: 3,
    title: "dukla",
    name: "Fotbalový klub Dukla Praha",
    short_name: "FK Dukla Praha",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/FK_Dukla_Praha_logo.png/200px-FK_Dukla_Praha_logo.png",
    nicknames: ["Dukla"],
    founded: 1948,
    stadium: {
      name: "Stadion Juliska",
      capacity: 8150,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Na_Julisce_stadium2.jpg/250px-Na_Julisce_stadium2.jpg",
    },
    owner: "Petr Paukner",
    president: "Ing. Jan Dvořák",
    head_coach: "Petr Rada",
    location: {
      country: "Czech Republic",
      city: "Prague",
      district: "Dejvice",
    },
    club_website: "https://www.fkdukla.cz/",
    colors: {
      primary: "Red",
      secondary: "Yellow",
      hex: ["#671219", "#FCC824"],
      emoji: "🔴🟡",
    },
    achievements: {
      league_titles: 11,
      domestic_cups: 12,
    },
    rivals: [
      {
        name: "AC Sparta Praha",
        rivalry_name: "Malé pražské derby",
        reason: "regional",
      },
      {
        name: "SK Slavia Praha",
        rivalry_name: "Malé pražské derby",
        reason: "regional",
      },
    ],
    affiliatedClubs: ["FK Teplice"],
    mascot: "Medvídek Ferry",
    club_legends: [
      {
        name: "Josef Masopust",
        reason: "player",
      },
      {
        name: "Ivo Viktor",
        reason: "goalkeeper",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fkduklapraha/",
      facebook: "https://www.facebook.com/FKDuklaPraha",
      x: "https://x.com/fkduklapraha",
      youtube: "https://www.youtube.com/user/DuklaTVofficial",
      tiktok: "https://www.tiktok.com/@fkduklapraha",
    },
  },
  {
    id: 4,
    title: "hradec",
    name: "Football Club Hradec Králové",
    short_name: "FC Hradec Králové",
    logo: "https://www.fchk.cz/files/alternativni_logo.jpg",
    nicknames: ["Votroci"],
    founded: 1905,
    stadium: {
      name: "Malšovická aréna",
      capacity: 9300,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Stadion_Hradec_Kr%C3%A1lov%C3%A9.png/250px-Stadion_Hradec_Kr%C3%A1lov%C3%A9.png",
    },
    owner: null,
    president: "Mgr. et Mgr. Pavlína Springerová, Ph.D.",
    head_coach: "David Horejš",
    location: {
      country: "Czech Republic",
      city: "Hradec Králové",
      district: null,
    },
    club_website: "https://www.fchk.cz/",
    colors: {
      primary: "Black",
      secondary: "White",
      hex: ["#181816", "#FFFFFF"],
      emoji: "⚫⚪",
    },
    achievements: {
      league_titles: 1,
      domestic_cups: 1,
    },
    rivals: [
      {
        name: "FK Pardubice",
        rivalry_name: "Východočeské derby",
        reason: "regional",
      },
    ],
    affiliatedClubs: ["FK Mladá Boleslav"],
    mascot: "Pan Lízátko",
    club_legends: [
      {
        name: "Václav Kotal",
        reason: "player",
      },
      {
        name: "Pavel Černý",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fchradec/",
      facebook: "https://www.facebook.com/fchradec/",
      x: "https://x.com/FCHradec",
      youtube: "https://www.youtube.com/user/fchradecofficial",
      tiktok: "https://www.tiktok.com/@fc_hradec",
    },
  },
  {
    id: 5,
    title: "jablonec",
    name: "FK Jablonec, a.s.",
    short_name: "FK Jablonec",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/FK_Jablonec_logo.png/200px-FK_Jablonec_logo.png",
    nicknames: ["Galácticos"],
    founded: 1945,
    stadium: {
      name: "Stadion Střelnice",
      capacity: 6280,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Stadion_St%C5%99elnice_6631.jpg/250px-Stadion_St%C5%99elnice_6631.jpg",
    },
    owner: "Miroslav Pelta",
    president: "Petr Flodrman",
    head_coach: "Luboš Kozel",
    location: {
      country: "Czech Republic",
      city: "Jablonec nad Nisou",
      district: null,
    },
    club_website: "https://www.fkjablonec.cz/",
    colors: {
      primary: "Green",
      secondary: "White",
      hex: ["#007B47", "#FFFFFF"],
      emoji: "🟢⚪",
    },
    achievements: {
      league_titles: 0,
      domestic_cups: 2,
    },
    rivals: [
      {
        name: "FC Slovan Liberec",
        rivalry_name: "Severočeské derby",
        reason: "regional",
      },
    ],
    affiliatedClubs: null,
    mascot: null,
    club_legends: [
      {
        name: "David Lafata",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fkjablonec/",
      facebook: "https://www.facebook.com/FKJablonec/",
      x: "https://x.com/FKJablonec",
      youtube: "https://www.youtube.com/user/fkjablonecofficial",
      tiktok: null,
    },
  },
  {
    id: 6,
    title: "liberec",
    name: "FC Slovan Liberec, a.s.",
    short_name: "FC Slovan Liberec",
    logo: "https://www.fcslovanliberec.cz/img/logo_2024.png",
    nicknames: null,
    founded: 1958,
    stadium: {
      name: "Stadion U Nisy",
      capacity: 9900,
      image:
        "https://tmssl.akamaized.net/images/foto/stadionnormal/stadion-u-nisy-1659446925-89456.jpg?lm=1659446966",
    },
    owner: "Ondřej Kania",
    president: "Ing. Petra Kania",
    head_coach: "Radoslav Kováč",
    location: {
      country: "Czech Republic",
      city: "Liberec",
      district: null,
    },
    club_website: "https://www.fcslovanliberec.cz/",
    colors: {
      primary: "Blue",
      secondary: "White",
      hex: ["#63A1FF", "#FFFFFF"],
      emoji: "🔵⚪",
    },
    achievements: {
      league_titles: 3,
      domestic_cups: 2,
    },
    rivals: [
      {
        name: "FK Jablonec",
        rivalry_name: "Severočeské derby",
        reason: "regional",
      },
    ],
    affiliatedClubs: null,
    mascot: null,
    club_legends: [
      {
        name: "Jiří Štajner",
        reason: "player",
      },
      {
        name: "Theodor Gebre Selassie",
        reason: "player",
      },
      {
        name: "Jan Nezmar",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fcslovanliberec/",
      facebook: "https://www.facebook.com/fcslovanliberec",
      x: "https://x.com/fcslovanliberec",
      youtube: "https://www.youtube.com/c/slovanliberec",
      tiktok: null,
    },
  },
  {
    id: 7,
    title: "boleslav",
    name: "FK Mladá Boleslav, a.s.",
    short_name: "FK Mladá Boleslav",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/FK_Mlad%C3%A1_Boleslav_logo.png/200px-FK_Mlad%C3%A1_Boleslav_logo.png",
    nicknames: ["Bolka"],
    founded: 1902,
    stadium: {
      name: "Městský stadion Mladá Boleslav",
      capacity: 5000,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/M%C4%9Bstsk%C3%BD_stadion_Mlad%C3%A1_Boleslav_DSC_6649.jpg",
    },
    owner: "David Trunda",
    president: "David Trunda",
    head_coach: "Andreas Brännström",
    location: {
      country: "Czech Republic",
      city: "Mladá Boleslav",
      district: null,
    },
    club_website: "https://www.fkmb.cz/",
    colors: {
      primary: "Blue",
      secondary: "White",
      hex: ["#126AA6", "#FFFFFF"],
      emoji: "🔵⚪",
    },
    achievements: {
      league_titles: 0,
      domestic_cups: 2,
    },
    rivals: null,
    affiliatedClubs: ["FC Hradec Králové"],
    mascot: null,
    club_legends: [
      {
        name: "Marek Matějovský",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fkmladaboleslav/",
      facebook: "https://www.facebook.com/fkmladaboleslav",
      x: "https://x.com/fkmladaboleslav",
      youtube: "https://www.youtube.com/channel/UCCiK2klIQHd16aA9nUgpixQ",
      tiktok: "https://www.tiktok.com/@fkmladaboleslavcz",
    },
  },
  {
    id: 8,
    title: "plzen",
    name: "FC Viktoria Plzeň",
    short_name: "FC Viktoria Plzeň",
    logo: "https://www.fcviktoria.cz/img/logo.png",
    nicknames: ["Viktorka", "FCVP", "Západočeši"],
    founded: 1911,
    stadium: {
      name: "Doosan Arena",
      capacity: 11700,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Doosan_Arena_-_%C5%A0truncovy_sady.jpg",
    },
    owner: "FCVP GmbH",
    president: "Adolf Šádek",
    head_coach: "Miroslav Koubek",
    location: {
      country: "Czech Republic",
      city: "Plzeň",
      district: null,
    },
    club_website: "https://www.fcviktoria.cz/",
    colors: {
      primary: "Red",
      secondary: "Blue",
      hex: ["#E60000", "#004B87"],
      emoji: "🔴🔵",
    },
    achievements: {
      league_titles: 6,
      domestic_cups: 2,
    },
    rivals: [
      {
        name: "SK Slavia Praha",
        rivalry_name: null,
        reason: "competitive",
      },
      {
        name: "AC Sparta Praha",
        rivalry_name: null,
        reason: "competitive",
      },
    ],
    affiliatedClubs: null,
    mascot: null,
    club_legends: [
      {
        name: "Pavel Horváth",
        reason: "player",
      },
      {
        name: "František Rajtoral",
        reason: "player",
      },
      {
        name: "Marián Čišovský",
        reason: "player",
      },
      {
        name: "David Limberský",
        reason: "player",
      },
      {
        name: "Pavel Vrba",
        reason: "coach",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fcviktoria_official/",
      facebook: "https://www.facebook.com/fcviktoria.cz",
      x: "https://x.com/fcviktorkaplzen",
      youtube: "https://www.youtube.com/@fcvpTV",
      tiktok: null,
    },
  },
  {
    id: 9,
    title: "olomouc",
    name: "SK Sigma Olomouc, a.s.",
    short_name: "SK Sigma Olomouc",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/SK_Sigma_Olomouc_logo.png/200px-SK_Sigma_Olomouc_logo.png",
    nicknames: ["Hanáci", "Modrá lavina"],
    founded: 1919,
    stadium: {
      name: "Andrův stadion",
      capacity: 12500,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Andruv_stadion.jpg/250px-Andruv_stadion.jpg",
    },
    owner: "Ladislav Minář",
    president: "Mgr. Ing. Petr Konečný",
    head_coach: "Tomáš Janotka",
    location: {
      country: "Czech Republic",
      city: "Olomouc",
      district: null,
    },
    club_website: "https://www.sigmafotbal.cz/",
    colors: {
      primary: "Blue",
      secondary: "White",
      hex: ["#00599C", "#FFFFFF"],
      emoji: "🔵⚪",
    },
    achievements: {
      league_titles: 0,
      domestic_cups: 1,
    },
    rivals: [
      {
        name: "1. SK Prostějov",
        rivalry_name: "Hanácké derby",
        reason: "regional",
      },
    ],
    affiliatedClubs: null,
    mascot: "Sigmund",
    club_legends: [
      {
        name: "Karel Brückner",
        reason: "coach",
      },
      {
        name: "Michal Hubník",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/sigma_olomouc/",
      facebook: "https://www.facebook.com/sksigmaolomouc",
      x: "https://x.com/SKSigmaOlomouc",
      youtube: "https://www.youtube.com/channel/UC7p-I5SNUzoVoM6IANONPHQ",
      tiktok: "https://www.tiktok.com/@sksigmaolomouc",
    },
  },
  {
    id: 10,
    title: "banik",
    name: "FC Baník Ostrava, a.s.",
    short_name: "FC Baník Ostrava",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FC_Ban%C3%ADk_Ostrava_%28logo%29.svg/200px-FC_Ban%C3%ADk_Ostrava_%28logo%29.svg.png",
    nicknames: ["Chachaři", "Baníček"],
    founded: 1922,
    stadium: {
      name: "Městský stadion v Ostravě-Vítkovicích",
      capacity: 15123,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Ostrava-V%C3%ADtkovice_stadium.jpg/250px-Ostrava-V%C3%ADtkovice_stadium.jpg",
    },
    owner: "Václav Brabec",
    president: "Václav Brabec",
    head_coach: "Pavel Hapal",
    location: {
      country: "Czech Republic",
      city: "Ostrava",
      district: "Vítkovice",
    },
    club_website: "https://www.fcb.cz/",
    colors: {
      primary: "Blue",
      secondary: "White",
      hex: ["#1E68A5", "#FFFFFF"],
      emoji: "🔵⚪",
    },
    achievements: {
      league_titles: 4,
      domestic_cups: 8,
    },
    rivals: [
      {
        name: "SFC Opava",
        rivalry_name: "Slezské derby",
        reason: "regional",
      },
      {
        name: "AC Sparta Praha",
        rivalry_name: null,
        reason: "historic",
      },
    ],
    affiliatedClubs: ["FC Spartak Trnava", "GKS Katowice"],
    mascot: null,
    club_legends: [
      {
        name: "Milan Baroš",
        reason: "player",
      },
      {
        name: "Luděk Mikloško",
        reason: "goalkeeper",
      },
      {
        name: "Pavel Srniček",
        reason: "goalkeeper",
      },
      {
        name: "Jan Laštůvka",
        reason: "goalkeeper",
      },
      {
        name: "Marek Jankulovski",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fcbanikostrava",
      facebook: "https://www.facebook.com/fcbanik.cz",
      x: "https://x.com/fcbanikostrava",
      youtube: "https://www.youtube.com/tvbanik",
      tiktok: null,
    },
  },
  {
    id: 11,
    title: "pardubice",
    name: "FK Pardubice, a.s.",
    short_name: "FK Pardubice",
    logo: "https://www.fkpardubice.cz/dist/img/FKPCE_barevne2.png",
    nicknames: ["Východočeši", "Tesla"],
    founded: 2008,
    stadium: {
      name: "CFIG Aréna",
      capacity: 4620,
      image: "https://1gr.cz/fotky/idnes/23/021/cl6h/MVO993011_7.jpg",
    },
    owner: "Vladimír Pitter",
    president: "Vladimír Pitter",
    head_coach: "Jiří Saňák",
    location: {
      country: "Czech Republic",
      city: "Pardubice",
      district: null,
    },
    club_website: "https://fkpardubice.cz/",
    colors: {
      primary: "Red",
      secondary: "White",
      hex: ["#D8232A", "#FFFFFF"],
      emoji: "🔴⚪",
    },
    achievements: {
      league_titles: 0,
      domestic_cups: 0,
    },
    rivals: [
      {
        name: "FC Hradec Králové",
        rivalry_name: "Východočeské derby",
        reason: "regional",
      },
    ],
    affiliatedClubs: ["Bohemians Praha 1905"],
    mascot: "Perníček",
    club_legends: [
      {
        name: "Jan Jeřábek",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fkpardubice/",
      facebook: "https://www.facebook.com/fkpardubice.cz",
      x: "https://x.com/FK_Pardubice",
      youtube: "https://www.youtube.com/PardubiceFK",
      tiktok: "https://www.tiktok.com/@fk_pardubice",
    },
  },
  {
    id: 12,
    title: "slavia",
    name: "SK Slavia Praha - fotbal a.s.",
    short_name: "SK Slavia Praha",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Slavia-symbol-nowordmark-RGB.png/200px-Slavia-symbol-nowordmark-RGB.png",
    nicknames: ["Sešívaní", "Červenobílí", "SKS"],
    founded: 1892,
    stadium: {
      name: "Fortuna Arena",
      capacity: 19370,
      image:
        "https://img.ihned.cz/attachment.php/790/40760790/aosuv345BDJKLMjlPWbcdfqxz0Sw29mn/141-16-otvrk-Eden-1.jpg",
    },
    owner: "Pavel Tykač",
    president: "Jaroslav Tvrdík",
    head_coach: "Jindřich Trpišovský",
    location: {
      country: "Czech Republic",
      city: "Prague",
      district: "Vršovice",
    },
    club_website: "https://www.slavia.cz/",
    colors: {
      primary: "Red",
      secondary: "White",
      hex: ["#D82333", "#FFFFFF"],
      emoji: "🔴⚪",
    },
    achievements: {
      league_titles: 21,
      domestic_cups: 11,
    },
    rivals: [
      {
        name: "AC Sparta Praha",
        rivalry_name: "Pražské derby",
        reason: "historical",
      },
      {
        name: "Bohemians Praha 1905",
        rivalry_name: "Vršovické derby",
        reason: "local",
      },
      {
        name: "FK Dukla Praha",
        rivalry_name: "Malé pražské derby",
        reason: "local",
      },
      {
        name: "FC Viktoria Plzeň",
        rivalry_name: null,
        reason: "competitive",
      },
    ],
    affiliatedClubs: [
      "FC Sellier & Bellot Vlašim",
      "HNK Hajduk Split",
      "Zagłębie Sosnowiec",
    ],
    mascot: null,
    club_legends: [
      {
        name: "Josef Bican",
        reason: "player",
      },
      {
        name: "František Plánička",
        reason: "goalkeeper",
      },
      {
        name: "Antoní Puč",
        reason: "player",
      },
      {
        name: "Ivo Knoflíček",
        reason: "player",
      },
      {
        name: "Vladimír Šmicer",
        reason: "player",
      },
      {
        name: "Stanislav Vlček",
        reason: "player",
      },
      {
        name: "John William Madden",
        reason: "coach",
      },
      {
        name: "Jindřich Trpišovský",
        reason: "coach",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/slaviapraha/",
      facebook: "https://www.facebook.com/SKSlaviaPrahaFotbal",
      x: "https://x.com/slaviaofficial",
      youtube: "https://www.youtube.com/channel/UCPi3_GbTljPZ6b2Laiw-Z5g",
      tiktok: "https://www.tiktok.com/@slaviapraha",
    },
  },
  {
    id: 13,
    title: "slovacko",
    name: "1. FC Slovácko, a.s.",
    short_name: "1. FC Slovácko",
    logo: "https://www.fcslovacko.cz/templates/main/assets/img/logo-footer.png",
    nicknames: ["Synot", "Slovácko"],
    founded: 2000,
    stadium: {
      name: "Městský fotbalový stadion Miroslava Valenty",
      capacity: 8000,
      image:
        "https://icdn.football-italia.net/wp-content/uploads/2023/02/bl16009675302635.jpg",
    },
    owner: "Z-Group, Solar Global",
    president: "Ing. Vítězslav Skopal",
    head_coach: "Roman West",
    location: {
      country: "Czech Republic",
      city: "Uherské Hradiště",
      district: null,
    },
    club_website: "https://www.fcslovacko.cz/",
    colors: {
      primary: "Blue",
      secondary: "White",
      hex: ["#00305F", "#FFFFFF"],
      emoji: "🔵⚪",
    },
    achievements: {
      league_titles: null,
      domestic_cups: 11,
    },
    rivals: [
      {
        name: "FC Zlín",
        rivalry_name: null,
        reason: "regional",
      },
    ],
    affiliatedClubs: null,
    mascot: null,
    club_legends: [
      {
        name: "Libor Došek",
        reason: "player",
      },
      {
        name: "Milan Petržela",
        reason: "player",
      },
      {
        name: "Martin Svědík",
        reason: "coach",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fcslovacko/",
      facebook: "https://www.facebook.com/fcslovacko.cz/",
      x: "https://x.com/1_FCS",
      youtube: "https://www.youtube.com/TVSlovacko",
      tiktok: null,
    },
  },
  {
    id: 14,
    title: "sparta",
    name: "AC Sparta Praha",
    short_name: "AC Sparta Praha",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/AC-Sparta-LOGO2021.svg/220px-AC-Sparta-LOGO2021.svg.png",
    nicknames: ["Železná Sparta", "ACS", "Letenští", "Rudí"],
    founded: 1893,
    stadium: {
      name: "epet ARENA",
      capacity: 18349,
      image:
        "https://1742741114.rsc.cdn77.org/files/2024/04/05/10192270247259809840.webp",
    },
    owner: "Daniel Křetínský",
    president: "Daniel Křetínský",
    head_coach: "Lars Friis",
    location: {
      country: "Czech Republic",
      city: "Prague",
      district: "Letná",
    },
    club_website: "https://www.sparta.cz/",
    colors: {
      primary: "Red",
      secondary: "Yellow and Blue",
      hex: ["#C81313", "#FAA713", "#1F58AC"],
      emoji: "🔵🟡🔴",
    },
    achievements: {
      league_titles: 38,
      domestic_cups: 22,
    },
    rivals: [
      {
        name: "SK Slavia Praha",
        rivalry_name: "Pražské derby",
        reason: "historical",
      },
      {
        name: "FC Baník Ostrava",
        rivalry_name: null,
        reason: "historical",
      },
      {
        name: "FC Viktoria Plzeň",
        rivalry_name: null,
        reason: "competitive",
      },
      {
        name: "Zbrojovka Brno",
        rivalry_name: null,
        reason: "historic",
      },
    ],
    affiliatedClubs: [],
    mascot: null,
    club_legends: [
      {
        name: "Pavel Nedvěd",
        reason: "player",
      },
      {
        name: "Petr Čech",
        reason: "goalkeeper",
      },
      {
        name: "Tomáš Rosický",
        reason: "player, sport director",
      },
      {
        name: "Jan Koller",
        reason: "player",
      },
      {
        name: "David Lafata",
        reason: "player",
      },
      {
        name: "Horst Siegl",
        reason: "player",
      },
      {
        name: "Karel Pešek",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/acsparta_cz/",
      facebook: "https://www.facebook.com/acsparta/",
      x: "https://x.com/acsparta",
      youtube: "https://www.youtube.com/user/ACSpartaTV",
      tiktok: "https://www.tiktok.com/@acsparta",
    },
  },
  {
    id: 15,
    title: "teplice",
    name: "FK Teplice, a.s.",
    short_name: "FK Teplice",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/FK_Teplice_logo.svg/150px-FK_Teplice_logo.svg.png",
    nicknames: ["Skláři", "Glassboys"],
    founded: 1945,
    stadium: {
      name: "AGC Aréna Na Stínadlech",
      capacity: 18221,
      image:
        "https://www.efotbal.cz/files/thumbnails/20200728-19-22-04-stinadla-thumb-700-1000-1595956924.jpg",
    },
    owner: "AGC Flat Glass Czech a.s.",
    president: "Pavel Šedlbauer",
    head_coach: "Zdenko Frťala",
    location: {
      country: "Czech Republic",
      city: "Teplice",
      district: null,
    },
    club_website: "https://www.fkteplice.cz/",
    colors: {
      primary: "Yellow",
      secondary: "Blue",
      hex: ["#FFC007", "#002FB9"],
      emoji: "🟡🔵",
    },
    achievements: {
      league_titles: 0,
      domestic_cups: 1,
    },
    rivals: [
      {
        name: "FK Baník Most 1909",
        rivalry_name: "Severočeské derby",
        reason: "local",
      },
    ],
    affiliatedClubs: null,
    mascot: "Gepardice Jane",
    club_legends: [
      {
        name: "Tomáš Grigar",
        reason: "goalkeeper",
      },
      {
        name: "Martin Fenin",
        reason: "player",
      },
      {
        name: "Josef Masopust",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/fkteplice/",
      facebook: "https://www.facebook.com/fkteplice",
      x: "https://x.com/fk_teplice",
      youtube: "https://www.youtube.com/fkteplice1945",
      tiktok: null,
    },
  },
  {
    id: 16,
    title: "karvina",
    name: "MFK Karviná, a.s.",
    short_name: "MFK Karviná",
    logo: "https://www.mfkkarvina.cz/znaky/kar.png?1",
    nicknames: ["Karviňáci"],
    founded: 2003,
    stadium: {
      name: "Městský stadion Karviná",
      capacity: 4862,
      image:
        "https://www.silektro.cz/wp-content/uploads/2019/11/Realizace-z%C3%A1lohov%C3%A1n%C3%AD-fotbalov%C3%A9ho-stadionu-v-Karvin%C3%A9-1.jpg",
    },
    owner: "sdružení občanů",
    president: "Ing. Jan Wolf",
    head_coach: "Martin Hyský",
    location: {
      country: "Czech Republic",
      city: "Karviná",
    },
    club_website: "https://www.mfkkarvina.cz/",
    colors: {
      primary: "Green",
      secondary: "White",
      hex: ["#009140", "#FFFFFF"],
      emoji: "🟢⚪",
    },
    achievements: {
      league_titles: 0,
      domestic_cups: 0,
    },
    rivals: [
      {
        name: "FC Baník Ostrava",
        rivalry_name: "Slezské derby",
        reason: "local",
      },
    ],
    affiliatedClubs: [],
    mascot: null,
    club_legends: [
      {
        name: "Michal Papadopulos",
        reason: "player",
      },
    ],
    socials: {
      instagram: "https://www.instagram.com/mfkkarvina/",
      facebook: "https://www.facebook.com/MFKKarvina",
      x: "https://x.com/mfkkarvina",
      youtube: "https://www.youtube.com/mfkkarvina2003",
      tiktok: null,
    },
  },
];

module.exports = { teams };

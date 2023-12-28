import ConsultlyLogo from "../images/logos/consultly.svg";
import ClevertechLogo from "../images/logos/clevertech.png";
import MonitoLogo from "../images/logos/monito.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Evelyn Chin",
  initials: "EC",
  location: "New York, NY, USA",
  locationLink: "https://www.google.com/maps/place/newyork",
  about:
    "Product manager & software engineer. I design beautiful products and write beautiful software with only one belief: customer obsession.",
  summary:
    "With experience in software engineering, product design, customer research, and marketing, my goal is to take products from 0 to 1. I have 3+ years of experience working in tech startups, from developing on VR haptics to organizing the web. I can learn anything quickly (with the references to prove it), and I believe there is always a way to do better and be better. If you'd like to talk, click here and hit send.",
  avatarUrl:
    "https://github.com/evchin/home/assets/49426183/d3a9a55d-380e-4832-bb04-d54c6a30d921",
  personalWebsiteUrl: "https://evchin.com",
  contact: {
    email: "evchin2@gmail.com",
    tel: "+16266073880",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/evchin",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/evchin/",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/roevyen",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of California, Irvine",
      degree: "Bachelor's Degree in Computer Science (3.94 GPA)",
      start: "2021",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Atlas",
      link: "https://atlasrooms.co",
      badges: ["Organizing the Internet's short-term housing"],
      title: "Co-Founder and CEO",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "We're reinventing the search experience to create a world where housing finds you. The world's housing delivered in realtime - with just one click.",
    },
    {
      company: "Emerge",
      link: "https://emerge.io",
      badges: ["Bringing touch to VR."],
      title: "Product Manager",
      logo: ClevertechLogo,
      start: "2023",
      end: "2023",
      description:
        "Led the design of the onboarding process for a groundbreaking hardware product with 3 separate hardware components. Worked across engineering, design, and customer support to align product functionality with user expectation.",
    },
    {
      company: "",
      link: "",
      badges: [],
      title: "Head of Customer Success and Insights",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Built a customer knowledge base, an onboarding framework, and a support infrastructure from the ground up. Led end-to-end product fulfillment and onboarding to build a beta community of Emerge's first 300+ customers. Led data analytics to directly influence product design in search of PMF.",
    },
    {
      company: "",
      link: "",
      badges: [],
      title: "Special Projects Lead",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Led a small team of 3 to develop advanced technology prototypes at record speed. Worked on partnerships strategy that led to multi-million dollar partnerships with Disney and Sony. Ghostwrote thought pieces published by WEF. Designed slides in investor decks that led to the funding of $6M.",
    },
    {
      company: "",
      link: "",
      badges: [],
      title: "Company Assistant",
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description:
        "Shadowed and supported the CEO in all office, administrative, creative, and miscellaneous tasks. Attended investor, customer, and partnership meetings with the CEO and discussed strategy.",
    },
    {
      company: "Sister District",
      link: "https://sisterdistrict.com",
      badges: ["Building progressive power in state legislatures"],
      title: "Organizing Fellow",
      logo: ParabolLogo,
      start: "",
      end: "2022",
      description:
        "Formed 4 new volunteer teams and supported the development of existing teams nationwide. Made 30+ outreach calls a day, leading to a 25% increase in campaign participation and support. Orchestrated community events and volunteer coordination, increasing volunteer engagement by 40%. Organized and coordinated 4+ virtual events for progressive campaign calling initiatives",
    },
    {
      company: "University of California, Irvine",
      link: "https://escholarship.org/uc/item/45q5v126",
      badges: ["Proof-By-Location in Cryptocurrency"],
      title: "Undergraduate Researcher",
      logo: ParabolLogo,
      start: "",
      end: "2022",
      description:
        "Conducted the numerical analyses of energy usage and socially inegalitarian structures of dominant financial institutions and the cryptocurrencies BTC and ETH.",
    },
    {
      company: "Draper",
      link: "https://draper.com",
      badges: ["Solving the most complex technical challenges of the nation"],
      title: "Software Engineer Intern",
      logo: ParabolLogo,
      start: "",
      end: "2021",
      description:
        "Worked on GN&C for a lunar lander. Created an automated testing framework that developed CI/CD infrastructure. Employed simulation configuration (DEALS and DSF), constraint testing (Matlab), and the automated generation of software test reports.",
    },
    {
      company: "NASA JPL",
      link: "https://ntrs.nasa.gov/citations/20230005794",
      badges: ["AI for First Responder Safety"],
      title: "Software Engineer Intern",
      logo: ParabolLogo,
      start: "",
      end: "2021",
      description:
        "Conducted deep learning research for object, speech, and image recognition. Created test data using the CARLA simulation environment. Worked on a deep learning model for object detection and classification.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "Django",
    "Flask",
    "HTML/CSS/SCSS",
    "Tailwind",
    "Unity",
    "C#",
    "Java",
  ],
  projects: [
    {
      title: "Emerge",
      techStack: ["Webflow"],
      description: "Website design.",
      logo: ConsultlyLogo,
      link: {
        label: "emerge.io",
        href: "https://emerge.io/",
      },
    },
    {
      title: "The Archive",
      techStack: ["Just For Fun", "Unity", "C#", "Oculus VR", "SideQuest"],
      description: "VR art museum. 1.6K downloads. 4.8/5 stars.",
      logo: MonitoLogo,
      link: {
        label: "sidequestvr.com",
        href: "https://sidequestvr.com/app/1537",
      },
    },
    {
      title: "The Astronaut",
      techStack: ["Unity", "C#"],
      description: "Short animated video. Became Brooke Owens Fellow of 2021.",
      logo: MonitoLogo,
      link: {
        label: "repl.it",
        href: "https://www.youtube.com/watch?v=Xw8wf0STNWk",
      },
    },
    {
      title: "First Tactile NFTs",
      techStack: ["Opensea", "Unity", "C#"],
      description:
        "Minted the first tactile NFTs in the world. Featured in NFT LA 2022.",
      logo: MonitoLogo,
      link: {
        label: "zingandspark.com",
        href: "https://www.zingandspark.com/nftla",
      },
    },
    {
      title: "Flux",
      techStack: ["HTML/CSS", "Javascript", "Azure", "Functions"],
      description:
        "Selected as 1/8 to work with Microsoft engineers in BitCamp. Final project.",
      logo: MonitoLogo,
      link: {
        label: "youtube.com",
        href: "https://www.youtube.com/watch?v=e782dEDRA38",
      },
    },
    {
      title: "JunoCity",
      techStack: [
        "Just For Fun",
        "Django",
        "Python",
        "Heroku",
        "Postgres",
        "AWS",
      ],
      description: "First full-stack website I ever built.",
      logo: MonitoLogo,
      link: {
        label: "producthunt.com",
        href: "https://www.producthunt.com/products/junocity#junocity",
      },
    },
    {
      title: "SQL from Scratch",
      techStack: ["C++"],
      description: "A SQL database from scratch.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/evchin/sql",
      },
    },
    {
      title: "Novus Memoriae",
      techStack: ["C++"],
      description: "The C++ pointer from scratch.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/evchin/novus_memoriae",
      },
    },
    {
      title: "Gitlet",
      techStack: ["C++"],
      description: "A mini version of Git from scratch.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/evchin/gitlet",
      },
    },
    {
      title: "Tomorrowland 2.0",
      techStack: ["Just For Fun", "HTML/CSS", "Javascript"],
      description: "One of the first static websites I ever built.",
      logo: MonitoLogo,
      link: {
        label: "evchin.github.io",
        href: "https://evchin.github.io/tomorrowland2.0/",
      },
    },
    {
      title: "Empire",
      techStack: ["C++"],
      description: "My first ever software project. Defend the empire.",
      logo: MonitoLogo,
      link: {
        label: "repl.it",
        href: "https://repl.it/@EChin/empire#empire.cpp",
      },
    },
  ],
} as const;

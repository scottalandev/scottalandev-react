export const contactHead = {
  title: "Contact Scott Alan",
  text: "Please use the form below to reach me, or send a direct email to scottalandev@gmail.com. I look forward to discussing your project.",
};

export const techHead = {
  title: "Tech",
  text: "This page contains a sorted listing of core technologies relevant to my engineering and development work. The lists and non-exhaustive, but should provide useful context.",
};

export const tech = [
  {
    id: 1,
    title: "HTML",
    type: "deployed",
    level: 5,
    addText: "I enjoy using symantic HTML and searching for the best elements for each use case. It's always <div>, right...?",
    logo: "img/html-logo.png",
  },
  {
    id: 2,
    title: "CSS",
    type: "deployed",
    level: 5,
    addText:
      "A key part of my progression as a developer came from eschewing Bootstrap and other such libraries in favor of building my own layout systems. This is frequently inefficient in practice but taught me a great deal about how to meet precise design specs with CSS.",
    logo: "img/css-logo.png",
  },
  {
    id: 3,
    title: "JavaScript",
    type: "deployed",
    level: 4,
    addText: "This is my home language, and I have used it extensively with React and Express. I am native to ES6+ capabilities.",
    logo: "img/js-logo.png",
  },
  {
    id: 4,
    title: "React.js",
    type: "deployed",
    level: 4,
    addText: "React is my primary medium for building user interfaces. My awakening to the core React principles of declarative, component-based composition were a turning point for me. Where I previously built websites, with React I can program dynamic and flexible user interfaces.",
    logo: "img/react-logo.png",
  },
  {
    id: 5,
    title: "TypeScript",
    type: "deployed",
    level: 3,
    addText: "I am currently integrating this technology into new React projects and in my ongoing Angular education.",
    logo: "img/typescript-logo.png",
  },
  {
    id: 6,
    title: "SASS/SCSS",
    type: "deployed",
    level: 3,
    addText: "I have generally built with vanilla CSS, due the scope (small-/medium-sized projects) and workflow (solo development) of much of my deployed work. That said, I am familiar with SASS syntax and capabilities and have utilized it in several projects.",
    logo: "img/sass-logo.png",
  },
  {
    id: 10,
    title: "node.js",
    type: "deployed",
    level: 4,
    addText: "My primary application of node is for running backend logic, either in local development or on production servers.",
    logo: "img/node-logo.png",
  },
  {
    id: 11,
    title: "Express.js",
    type: "deployed",
    level: 3,
    addText: "I build RESTful APIs in Express that connect application data to/from user interfaces.",
    logo: "img/express-logo.png",
  },
  {
    id: 12,
    title: "MongoDB",
    type: "deployed",
    level: 3,
    addText: "MongoDB is my primary database choice, and I have numerous applications deployed with Express/Node APIs providing connection between the client and application data stored in Mongo.",
    logo: "img/mongo-logo.png",
  },
  {
    id: 100,
    title: "redux",
    type: "obtained",
    level: 2,
    addText: "Redux was integral to class projects in the bootcamp I completed. I have found other state-management approaches better suited to my projects, but am prepared to interact with a Redux environment.",
    logo: "img/redux-logo.png",
  },
  {
    id: 101,
    title: "React Native",
    type: "obtained",
    level: 3,
    addText: "I built some small projects and tested them on both iOS and Android as a part of a bootcamp curriculum. I have not yet had occasion to put this skillset to use on a production project.",
    logo: "img/react-logo.png",
  },

  {
    id: 201,
    title: "Angular",
    type: "planned",
    level: 2,
    addText: "This is an area of current interest. I am focused on increasing my fluency integrating TypeScript (which is integral to Angular) into the React development environment I am so familiar with as a cross-supportive learning mechnanism as I pick up Angular methods and syntax.",
    logo: "img/angular-logo.png",
  },
];

export const projects = [
  {
    id: 1,
    name: "Calapooia River",
    type: "public",
    url: "https://calapooiariver.com",
    screenshot: "img/cala-screen.png",
    logo: "img/calapooia-logo.png",
    description: "An interactive informational site about Oregon's Calapooia River.",
    tech: "Built with the MERN stack.",
    deploy: "Ubuntu/Nginx/MongoDB/Express/AWS-EC2",
  },
  {
    id: 2,
    name: "Diversified Creative",
    type: "public",
    url: "https://diversifiedcreative.com",
    screenshot: "img/dc-screen.png",
    logo: "img/dcr-logo.png",
    description: "Homepage of Diversifed Creative, Mr. Alan's business for freelance work as a developer, writer, and musician.",
    tech: "Built with the MERN stack.",
    deploy: "Ubuntu/Nginx/Express/AWS-EC2",
  },
  {
    id: 3,
    name: "Willamette Piano Service",
    type: "public",
    url: "https://willamettepiano.com",
    screenshot: "img/wps-screen.png",
    logo: "img/wps-logo.png",
    description: "Homepage built for Willamette Piano Service, a small business dedicated to maintaining pianos in Western Oregon.",
    tech: "Built with the MERN stack.",
    deploy: "Ubuntu/Nginx/Express/AWS-EC2",
  },
  {
    id: 202,
    name: "MERN Fully-Stacked",
    type: "development",
    url: "",
    screenshot: "",
    logo: "img/SAFavicon80px.png",
    description:
      "Getting the MERN stack from development to deployment is not always a clear-cut process. The project is intended to create a pre-built project architecture that transitions easily from development to deployment.",
    tech: "Generates a full MERN project architecture in both development and deployment.",
    deploy: "In development and to be determined.",
  },
  {
    id: 201,
    name: "Super Smash Bros. Ultimate: Character Creator",
    type: "development",
    url: "https://smashbroscreator.com/",
    screenshot: "",
    logo: "img/SAFavicon80px.png",
    description:
      "This project was inspired by my 8-year-old son, who loves imagining adding characters to Nintendo's Super Smash Bros. Ultimate fighting game by creating exhaustively complete sets of moves and attributes. This app presents a simple web interface which prompts the user to define all of these nuanced details. Characters created can be saved, published, and shared.",
    tech: "React/Typescript frontend. Backend TBD.",
    deploy: "In development.",
  },
];

export const about = {
  personal:
    "A native and life-long resident of the beautiful pacific northwestern United States, I am an avid enjoyer of the outdoors and a true lover of the region I live in. Specifically, hiking, skiing, golf, and cycling, along with landscape and wildlife photography, keep me excited to be out-of-doors. I spent more than a decade earning my primary living in the music world, and still play music every day. I live with my wife, elementary-aged son, and a sweet little runt of a cat we rescued from starvation.",
  developer:
    'Web development has been a natural transition for me, after numerous prior experiences of being the individual assigned to "just figure it out" when some technical need arose with nobody in the organization able to meet the challenge. It was by that process that I built my first several websites for organizations I was key member of. Those early sites were built with very little coding--I used squarespace, wix, and several different wordpress approaches--but I found that I really enjoyed the logical challenge and value of precision that I encountered in those experiences. When it came time for change, I engaged myself in truly learning the craft and technique of web development and am proud of my accomplishments and progress to date.',
  work: "My past experience is in the fields of music, education, and business administration. As a musician, I am an experienced symphonic brass player, composer and conductor, and I taught music in the classroom for more than ten years. As an administrator, I have experience in both the non-profit and for-profit sectors, as Executive Director of a performing arts organization and as the non-clinical administrator for boutique healthcare firm providing creative arts therapies under government contracts. Both experiences were formative and exciting. I have also worked in logistics, restaurant management and sales.",
};

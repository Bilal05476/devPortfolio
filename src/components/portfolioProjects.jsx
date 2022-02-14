import linkedIn from "./img/linkedInClone.png";
import eStore from "./img/ecommWeb.png";
import coursesPortal from "./img/batechnosCourses.png";
import netflix from "./img/netflixClone.png";
import tracker from "./img/coronaTracker.png";
import wtClone from "./img/whatsAppClone.png";
import hotel from "./img/hotelWeb.png";
import gaming from "./img/gamingVibes.png";

const portfolioProjects = [
  {
    projectName: "Linkedin Clone",
    projectDesc:
      "The core objective of this project is to handle multiple user data. Every user creates posts and only deletes their post. View other users' posts, authentication, and update your data like about info also included.",
    projectPurpose: "Multi-User Web Application",
    projectFeatures: [
      "ReactJs, Firebase, Reducer",
      "Google, Email and Pass Auth",
      "Dark and Light Theme",
      "Create and like Post",
      "CRUD Operations with Firebase",
    ],
    projectFeaturesWill: [
      "Mobile Friendly",
      "Comments on Post",
      "Add Video Post",
    ],
    projectImg: linkedIn,
    projectVisit: "https://linkedin-clone-web.netlify.app/",
  },
  {
    projectName: "Learning Management System",
    projectDesc:
      "The core objective of this project is to handle multiple user data. Students add their skills, enroll in courses. This is just a demo project as I deliver a courses portal project to the client.",
    projectPurpose: "Portal Web Application",
    projectFeatures: [
      "ReactJs, Firebase, Reducer",
      "Email and Pass Auth",
      "Mobile Friendly",
      "Add Skills, Add about",
      "CRUD Operations with Firebase",
    ],
    projectFeaturesWill: [
      "Enroll in Course",
      "Dark Theme",
      "Updated Course Content",
    ],
    projectImg: coursesPortal,
    projectVisit: "https://courses-from-me.netlify.app/",
  },
  {
    projectName: "Organic Food E-Store",
    projectDesc:
      "The core objective of this project is to develop an E-commerce website application. This project covers a lot of functionality like authentication, single blog, and product open. Add item to a wishlist, add to cart, and card animation on checkout.",
    projectPurpose: "E-Commerce Web Application",
    projectFeatures: [
      "ReactJs, Firebase, Reducer",
      "Google, Email and Pass Auth",
      "Mobile Friendly",
      "Add to Cart and Wishlist, Checkout Card Animation",
      "CRUD Operations with Firebase",
    ],
    projectFeaturesWill: ["None"],
    projectImg: eStore,
    projectVisit: "https://skillsme-81986.web.app/",
  },
  {
    projectName: "Netflix Clone",
    projectDesc:
      "The core objective of this project is to develop a Netflix clone, add some styling like banner and horizontal scrolling of film posters, fetch data from an API.",
    projectPurpose: "Fetching Data from an Api",
    projectFeatures: [
      "ReactJs, Api",
      "Mobile Friendly",
      "Banner Styling + Movie Banner Scrolling",
    ],
    projectFeaturesWill: ["None"],
    projectImg: netflix,
    projectVisit: "https://netflixclone-clone.surge.sh/",
  },
  {
    projectName: "Corona Tracker",
    projectDesc:
      "The core objective of this project is to develop a Corona tracker, use ChartJS, fetch data from an API, and perform visualization of data in a respective manner. ",
    projectPurpose: "Fetching Data from an Api",
    projectFeatures: [
      "ReactJs, ChartJs",
      "Fetch Corona Data",
      "Mobile Friendly",
    ],
    projectFeaturesWill: ["None"],
    projectImg: tracker,
    projectVisit: "http://trackerproject.surge.sh/",
  },
  {
    projectName: "WhatsApp Clone",
    projectDesc:
      "The core objective of this project is to develop a WhatsApp clone to perform the functionality of multiple user chatting. The database of this project is built with firebase. This is exciting stuff for me as I was on one client's project who needed the same thing.",
    projectPurpose: "Multi-User Chatting Application",
    projectFeatures: [
      "ReactJs, Firebase, Reducer",
      "Google Auth",
      "Fetch Data from Database(firestore)",
      "Only Desktop Screen",
    ],
    projectFeaturesWill: ["None"],
    projectImg: wtClone,
    projectVisit: "https://mywhatsapp-clone-project.web.app/",
  },
  {
    projectName: "Gaming Guides Web",
    projectDesc:
      "",
    projectPurpose: "Use Netlify Auth, Functions",
    projectFeatures: [
      "NextJs, Netlify",
      "Google, Email and Pass Auth",
      "Fetch Data from Netlify",
      "Mobile Friendly",
      "Netlify Functions, Auth Tracker",
    ],
    projectFeaturesWill: ["None"],
    projectImg: gaming,
    projectVisit: "https://next-gaming-vibes.netlify.app/",
  },
  {
    projectName: "Hotel Web Application",
    projectDesc:
      "",
    projectPurpose: "Static Hotel Website",
    projectFeatures: [
      "Html, Css, Media Queries",
      "Static Website",
      "Mobile Friendly",
    ],
    projectFeaturesWill: ["None"],
    projectImg: hotel,
    projectVisit: "https://next-gaming-vibes.netlify.app/",
  },
];

export default portfolioProjects;

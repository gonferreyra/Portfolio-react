import logoNucba from "../assets/nucba-logo.png";
import LogoISPC from "../assets/Isologotipo_ISPC_blanco-transparente-300x200.png";
import AluraLogo from "../assets/alura-logo.1647533644.svg";
import Project1 from "../assets/react1.png";
import Landing from "../assets/landing1.png";
import Hangman from "../assets/ahorcado.png";
import EcommerceJS from "../assets/ecommerceJs.png";
import Decrypter from "../assets/decripter.png";

type Education = {
  id: number;
  webDirection: string;
  title: string;
  logo: string;
  status: string;
  shortTitle: boolean;
};

export const education: Education[] = [
  {
    id: 1,
    webDirection: "ispc.edu.ar",
    title: "Tecnicatura en Desarrollo Web",
    logo: LogoISPC,
    status: "En curso",
    shortTitle: false,
  },
  {
    id: 2,
    webDirection: "nucba.com",
    title: "Full Stack Bootcamp",
    logo: logoNucba,
    status: "2021 - 2022",
    shortTitle: true,
  },
  {
    id: 3,
    webDirection: "aluracursos.com",
    title: "Oracle Next Education",
    logo: AluraLogo,
    status: "2022 - 2022",
    shortTitle: true,
  },
];

type Projects = {
  id: number;
  projectImg: string;
  name: string;
  description: string;
  link: string;
  right: boolean;
};

export const projects: Projects[] = [
  {
    id: 1,
    projectImg: Project1,
    name: "Sneakers Ecommerce",
    description: `Proyecto Full Stack, front-end realizado con React y Redux,
    back-end con NodeJS, Express y MongoDB.-`,
    link: "https://github.com/gonferreyra/MERN-ecommerce",
    right: false,
  },
  {
    id: 2,
    projectImg: Landing,
    name: "Crypto Landing Web",
    description: `Landing page para trabajo integrador de HTML y CSS.-`,
    link: "https://github.com/gonferreyra/landing-crypto",
    right: true,
  },
  {
    id: 3,
    projectImg: Hangman,
    name: "Hangman",
    description: `Juego del ahorcado, realizado como practica con HTML, CSS y
    Javascript.-`,
    link: "https://github.com/gonferreyra/Alura-Challenge2-Ahorcado",
    right: false,
  },
  {
    id: 4,
    projectImg: EcommerceJS,
    name: "Ecommerce",
    description: `Proyecto realizado integramente con Javascript Vainilla, teniendo funcionalidad completa CRUD con JS.-`,
    link: "https://github.com/gonferreyra/AluraGeek-ecommerce-CRUD",
    right: true,
  },
  {
    id: 5,
    projectImg: Decrypter,
    name: "Text Encrypter/Decryptor",
    description: `Proyecto encriptador y desencriptador de texto. Logica con JS.-`,
    link: "https://github.com/gonferreyra/Alura-Challenge1-Encriptador",
    right: false,
  },
];

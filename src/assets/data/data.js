import rockpaperscissior from '../images/rockpaperscissior.png'
import dailyWeather from '../images/Daily_weather.png'
import currencyConverter from '../images/currency_converter.png'
import teamCollab from '../images/teamcollab.png'
import digitClassifier from '../images/digit_classifier.png'
import portfolio from '../images/portfolio.png'
import profilePic1 from '../images/profilepic.jpg'
import profilePic2 from '../images/profilepic2.jpg'
import financeManager from "../images/financeManager.png"
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiExpress } from 'react-icons/si'
const Projects = [
  {
    image: teamCollab,
    description: 'TeamCollab is a collaborative platform that enables real-time communication and task management for teams.',
    title: 'Teamcollab',
    link:'https://samiraahmed6.github.io/TeamCollab_Frontend/',
   description2: [
  'Built a full-stack collaboration platform with real-time chat using Socket.IO',
  'Implemented task creation, assignment, and project tracking',
  'Developed group messaging with centralized message history',
  'Created REST APIs using Node.js & Express',
  'Used MySQL for database management',
  'Designed responsive UI with Angular & Tailwind CSS',
  'Demonstrates real-time communication and full-stack development'
]
  },
  {
    image: financeManager,
    description: 'For managing finance automatically, keeps record of income and expenses also AI gets prediction for next months expense',
    title: 'Finance Manager',
    link:'https://github.com/samIRaahmeD6/FinWise',
    description2: [
  "Built a full-stack finance tracker using React, Node.js, and MySQL",
  "Tracks income, expenses, and remaining balance",
  "Integrated AI-powered expense prediction for future spending forecasting"
]
  },
  {
    image: digitClassifier,
    description: 'A digit classifier using convolutional neural network.',
    title: 'Digit Classifier',
    link:'https://digit-classification-vgg19-1.onrender.com/',
    description2: [
  "Developed a CNN-based digit classification system for recognizing handwritten digits (0–9)",
  "Trained and evaluated the model using MNIST dataset with high accuracy",
  "Implemented image preprocessing pipeline including normalization and resizing",
  "Built convolutional neural network to extract spatial patterns from images",
  "Improved model interpretability using visualization of feature importance",
  "Tech stack: Python, TensorFlow/Keras, NumPy, OpenCV"
]
  },
  {
    image: rockpaperscissior,
    description: 'A fun rock-paper-scissors game built with JavaScript.',
    title: 'Rock Paper Scissors',
    link:'https://samiraahmed6.github.io/Rock_Paper_Scissiors/',
    description2: [
  "Built a digital Rock Paper Scissors game based on classic decision-making rules",
  "Implemented game logic using conditional statements (if/else) to determine winner",
  "Enabled user vs computer gameplay with random computer choices",
  "Designed a clean and interactive UI using HTML, CSS, and JavaScript",
  "Added instant result display with option to replay the game",
  "Improved user experience with simple animations and smooth interactions",
  "Optional features include score tracking and countdown timer",
  "Strengthened understanding of event handling and user input processing"
]
  },
  {
    image: dailyWeather,
    description: 'A weather app that shows daily forecasts using APIs.',
    title: 'Daily Weather',
    link: 'https://samiraahmed6.github.io/Daily_Weather/',
    description2: [
  "Built a daily weather app that provides real-time weather updates",
  "Integrated weather APIs like OpenWeatherMap or AccuWeather for live data",
  "Displays temperature, humidity, precipitation, and wind speed",
  "Supports user input for city or location-based weather search",
  "Shows dynamic weather icons for conditions like sunny, rainy, and cloudy",
  "Implemented responsive UI for desktop, tablet, and mobile devices",
  "Added optional features like 7-day forecast and unit conversion (Celsius/Fahrenheit)",
  "Can include geolocation support for automatic location detection",
  "Strengthened skills in API integration, JavaScript, and responsive design"
]
  },
  {
    image: currencyConverter,
    description: 'A currency converter app using live exchange rates.',
    title: 'Currency Converter',
    link:'https://samiraahmed6.github.io/CurrencyConverter/',
    description2: [
  "Built a currency converter app for real-time currency exchange calculations",
  "Integrated external APIs like XE or CurrencyLayer to fetch live exchange rates",
  "Allows users to convert between multiple currencies (e.g., USD to EUR)",
  "Implemented user input system for amount entry and currency selection",
  "Used dropdown menus for selecting source and target currencies",
  "Displayed real-time converted results dynamically in the UI",
  "Designed a simple and responsive interface for mobile and desktop users",
  "Added optional features like conversion history and multi-currency support",
  "Strengthened skills in API integration, JavaScript, and data manipulation"
]
  },
  // {
  //   image: portfolio,
  //   description: 'A simple demo portfolio designed using react',
  //   link: 'https://samiraahmed6.github.io/portfolioProject_react/',
  //   title: 'Portfolio Demo',
  //   // description2: '',
  // },
]

const Experiences = [
  {
    description:
      'Assisted professors and students with course-related tasks, including grading assignments, conducting study sessions, and providing technical support. Collaborated with faculty on research projects and helped create educational materials for students.',
    jobTitle: 'Undergraduate Assistant',
    date: 'January 2024',
    institute: 'United International University',
  },
  {
    description:
      'Evaluated and graded assignments, exams, and projects for a variety of computer science courses. Provided constructive feedback to students, ensuring clarity and accuracy in the grading process. Maintained grading records and assisted professors in administrative tasks related to course management.',
    jobTitle: 'Grader',
    date: 'October 2023',
    institute: 'United International University',
  },
  {
    description:
      'Worked as part of a development team to build and maintain software applications. Contributed to coding, debugging, and testing various modules. Collaborated with senior developers to learn best practices in software engineering and participated in agile development processes.',
    jobTitle: 'Junior Software Developer',
    date: 'Nov 2024',
    institute: 'LCT',
  },
]
const aboutMe = [
  {
    profilepic1: profilePic1,
    profilepic2: profilePic2,
    description1:
      "I'm Samira Ahmed, a passionate and driven Full Stack Developer, freshly graduated from United International University. With a strong foundation in both frontend and backend technologies, I'm excited to bring creativity and functionality together to craft seamless digital experiences. I'm always eager to dive into new challenges, solve complex problems, and continuously learn cutting-edge tools to build innovative web applications.",
    description2:
      'I am Samira Ahmed, a passionate Full Stack Developer with a recent graduation from United International University, where I earned my degree in Computer Science Engineering with a major in Data Science. Throughout my academic journey, I developed a strong foundation in both frontend and backend technologies, allowing me to build efficient, user-friendly, and scalable web applications. My expertise spans key development tools, frameworks, and languages including HTML, CSS, JavaScript, React.js, Node.js, and MySQL, with a keen focus on user-centered design and performance optimization. I have successfully worked on several personal and collaborative projects, ranging from dynamic websites to web-based applications, where I combined creative thinking with technical skills to develop solutions that meet user needs.',
  },
]

const Skills = [
  {
    title: 'Java',
    logo: FaJava,
  },
  {
    title: 'React',
    logo: FaReact,
  },
  {
    title: 'JavaScript',
    logo: IoLogoJavascript,
  },
  {
    title: 'HTML',
    logo: FaHtml5,
  },
  {
    title: 'CSS',
    logo: FaCss3Alt,
  },
  {
    title: 'PHP',
    logo: FaPhp,
  },
  {
    title: 'Node',
    logo: FaNodeJs,
  },
  {
    title: 'Express',
    logo: SiExpress,
  },
  {
    title: 'MySql',
    logo: GrMysql,
  },
  {
    title: 'Python',
    logo: FaPython,
  },
]

export { Projects, Experiences, aboutMe, Skills }

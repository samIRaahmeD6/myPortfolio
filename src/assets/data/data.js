import rockpaperscissior from '../images/rockpaperscissior.png'
import dailyWeather from '../images/Daily_weather.png'
import currencyConverter from '../images/currency_converter.png'
import teamCollab from '../images/teamcollab.png'
import digitClassifier from '../images/digit_classifier.png'
import portfolio from '../images/portfolio.png'
import profilePic1 from '../images/profilepic.jpg'
import profilePic2 from '../images/profilepic2.jpg'
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
    link:'https://github.com/samIRaahmeD6/Teamcollab',
    description2:
      'TeamCollab is a comprehensive team collaboration platform designed to streamline communication and project management. It allows team members to chat in real-time, create and assign tasks, share updates, and manage projects efficiently within a single workspace. With features like group discussions, status tracking, and centralized message history, TeamCollab ensures that teams stay organized, connected, and productive. This project was built using Node.js, Express.js, MySQL, Socket.IO, Angular, and Tailwind CSS, combining real-time communication with a responsive and interactive user interface.',
  },
  {
    image: digitClassifier,
    description: 'A digit classifier using convolutional neural network.',
    title: 'Digit Classifier',
    link:'https://digit-classification-vgg19-1.onrender.com/',
    description2:
      'Digit Classifier is an intelligent machine learning system designed to recognize and classify handwritten digits from 0 to 9. Using a dataset of labeled handwritten digit images, such as the popular MNIST dataset, the model is trained to identify the correct digit with high accuracy. The system leverages image preprocessing techniques—including normalization, resizing, and grayscale conversion—to prepare the raw images for optimal model performance. At its core, the classifier uses neural networks, typically a Convolutional Neural Network (CNN), which excels at detecting spatial patterns and features in images. The model learns to extract key features such as edges, curves, and intersections, allowing it to distinguish between visually similar digits. After training, the classifier can accurately predict the digit in new, unseen images, making it useful for applications like automated form recognition, postal code reading, and digit-based authentication systems. This project highlights skills in Python, TensorFlow/Keras or PyTorch, NumPy, and OpenCV, and demonstrates a strong understanding of data preprocessing, model training, evaluation, and deployment. With visualization tools, users can also see which parts of the image contributed most to the model’s predictions, adding interpretability to the system.',
  },
  {
    image: rockpaperscissior,
    description: 'A fun rock-paper-scissors game built with JavaScript.',
    title: 'Rock Paper Scissors',
    link:'https://samiraahmed6.github.io/Rock_Paper_Scissiors/',
    description2:
      'Rock Paper Scissors is a classic hand game usually played between two people. The game is a simple yet engaging way to make decisions, where each player simultaneously forms one of three shapes: rock, paper, or scissors. The winner is determined by the rules: rock crushes scissors, scissors cuts paper, and paper covers rock. The game is often used as a quick decision-making tool or as a fun activity to pass the time. In a digital version, users can challenge the computer or a friend to play. The game logic can be easily implemented using basic programming structures like conditional statements (if/else) to determine the winner based on the input choices. The user interface (UI) can be designed with a clean, intuitive layout to enhance user experience, including animations for smooth transitions and interactions. Users can see the results of their game immediately, with the option to play again. Features like score tracking or a countdown timer can add excitement to the game. It’s an excellent project for beginner developers to learn about event handling, user inputs, and conditional logic in programming languages like JavaScript, HTML, and CSS.',
  },
  {
    image: dailyWeather,
    description: 'A weather app that shows daily forecasts using APIs.',
    title: 'Daily Weather',
    link: 'https://samiraahmed6.github.io/Daily_Weather/',
    description2:
      'A daily weather app provides real-time weather updates, including details such as temperature, humidity, precipitation, and wind speed. The app typically integrates with a weather API, like OpenWeatherMap or AccuWeather, to retrieve accurate and up-to-date information. Users can input their location (city or zip code) to get a forecast for the current day. The app can also display weather icons corresponding to different conditions like sunny, rainy, cloudy, or snowy. Features such as temperature units (Celsius/Fahrenheit), a 7-day forecast, and background images based on the weather conditions can enhance user experience. To make the app interactive, developers can implement responsive layouts to ensure it works smoothly on various devices (desktop, tablet, and mobile). For added functionality, developers might also incorporate geolocation features to automatically detect a user’s location and show weather data for that area. The app can be designed with a clean UI, showing a mix of visuals (like weather icons) and textual information (such as temperature, conditions, etc.). JavaScript and APIs are crucial for fetching the weather data and dynamically updating the interface. This project helps developers practice API integration, responsive design, and user interaction handling.',
  },
  {
    image: currencyConverter,
    description: 'A currency converter app using live exchange rates.',
    title: 'Currency Converter',
    link:'https://samiraahmed6.github.io/CurrencyConverter/',
    description2:
      'A currency converter app allows users to convert between different currencies based on real-time exchange rates. It is a practical tool, especially for travelers, business people, or anyone dealing with international financial transactions. The app typically relies on an external API, such as XE or CurrencyLayer, to fetch the latest exchange rates. Users input the amount they wish to convert, select the source and target currencies (e.g., USD to EUR), and the app provides the converted value. The user interface (UI) is generally simple, with dropdown menus for currency selection, an input field for the amount, and a result area showing the converted amount. Additional features can include automatic updates of the exchange rates, a history of recent conversions, and support for multiple languages or currencies. The app can also have options for converting cryptocurrency or include country flags to make the UI more visually appealing. To make the app user-friendly, developers can ensure a responsive design so that it works smoothly on mobile devices and desktops. The currency converter project is ideal for learning how to work with APIs, handle user input, and manipulate data using JavaScript. It also provides practical experience with real-time data fetching and dynamic updating of the UI.',
  },
  {
    image: portfolio,
    description: 'A simple demo portfolio designed using react',
    link: 'https://samiraahmed6.github.io/portfolioProject_react/',
    title: 'Portfolio Demo',
    description2: '',
  },
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

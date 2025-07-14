import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  companyLogos = [
    'assets/logo.png',
    'assets/logo2.png',
    'assets/logo3.png',
    'assets/logo4.png',
    'assets/logo5.png',
    'assets/logo6.png',
    'assets/logo7.png',
    'assets/logo8.png',
    'assets/logo9.png',
    'assets/logo10.png',
    'assets/logo11.png',
    'assets/logo12.png'
  ];

categories = [
  {
    icon: 'bi bi-laptop',
    title: 'Web Development',
    courses: 42,
    description: 'Master front-end and back-end development using modern tools and frameworks.'
  },
  {
    icon: 'bi bi-cpu',
    title: 'AI & Machine Learning',
    courses: 28,
    description: 'Explore AI models, data science, and deep learning to build intelligent apps.'
  },
  {
    icon: 'bi bi-phone',
    title: 'Mobile App Dev',
    courses: 33,
    description: 'Build native and cross-platform apps using Flutter, Kotlin, and Swift.'
  },
  {
    icon: 'bi bi-graph-up',
    title: 'Data Science',
    courses: 37,
    description: 'Analyze data, visualize results, and make data-driven decisions.'
  },
  {
    icon: 'bi bi-cloud',
    title: 'Cloud Computing',
    courses: 24,
    description: 'Learn AWS, Azure, and Google Cloud to scale applications and services.'
  },
  {
    icon: 'bi bi-shield-lock',
    title: 'Cybersecurity',
    courses: 19,
    description: 'Protect systems, networks, and data from digital attacks.'
  },
  {
    icon: 'bi bi-globe',
    title: 'DevOps & CI/CD',
    courses: 21,
    description: 'Automate software delivery and streamline deployments using modern DevOps tools.'
  },
  {
    icon: 'bi bi-bar-chart-line',
    title: 'Business Analytics',
    courses: 18,
    description: 'Use tools like Excel, SQL, and Tableau to analyze and report business data.'
  },
  {
    icon: 'bi bi-controller',
    title: 'Game Development',
    courses: 15,
    description: 'Design and develop games using Unity, Unreal, and other engines.'
  },
  {
    icon: 'bi bi-palette',
    title: 'UI/UX Design',
    courses: 20,
    description: 'Learn wireframing, prototyping, and user interface best practices.'
  },
  {
    icon: 'bi bi-credit-card',
    title: 'Digital Marketing',
    courses: 26,
    description: 'Gain skills in SEO, social media, advertising, and content marketing.'
  },
  {
    icon: 'bi bi-people',
    title: 'Soft Skills & Leadership',
    courses: 14,
    description: 'Improve communication, team collaboration, and leadership abilities.'
  }
];


  courses = [
  {
    image: 'assets/course1.jpg',
    title: 'Full Stack Web Development',
    description: 'Learn to build modern web apps using HTML, CSS, JS & frameworks.',
    instructor: 'John Doe',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    price: '₹1999'
  },
  {
    image: 'assets/course2.jpg',
    title: 'Machine Learning with Python',
    description: 'Master ML algorithms and build real-world projects.',
    instructor: 'Jane Smith',
    duration: '10 Weeks',
    level: 'Intermediate',
    price: '₹2499'
  },
  {
    image: 'assets/course3.jpg',
    title: 'Data Structures & Algorithms',
    description: 'Ace coding interviews with in-depth DSA concepts and problems.',
    instructor: 'Ravi Kumar',
    duration: '8 Weeks',
    level: 'Intermediate',
    price: '₹1499'
  },
  {
    image: 'assets/course4.jpg',
    title: 'UI/UX Design Bootcamp',
    description: 'Design stunning interfaces using Figma and Adobe XD.',
    instructor: 'Priya Sharma',
    duration: '6 Weeks',
    level: 'Beginner',
    price: '₹1299'
  },
  {
    image: 'assets/course5.png',
    title: 'Android App Development',
    description: 'Build Android apps using Kotlin and Jetpack libraries.',
    instructor: 'Amit Verma',
    duration: '9 Weeks',
    level: 'Intermediate',
    price: '₹1999'
  },
  {
    image: 'assets/course6.jpg',
    title: 'Cybersecurity Essentials',
    description: 'Understand security principles, network attacks and protection.',
    instructor: 'Meena George',
    duration: '7 Weeks',
    level: 'Beginner to Intermediate',
    price: '₹1799'
  },
  {
    image: 'assets/course7.webp',
    title: 'Cloud Computing with AWS',
    description: 'Deploy and manage applications on AWS infrastructure.',
    instructor: 'Suresh Iyer',
    duration: '8 Weeks',
    level: 'Intermediate',
    price: '₹2299'
  },
  {
    image: 'assets/course8.jpg',
    title: 'Python for Data Science',
    description: 'Data analysis, visualization and NumPy/Pandas in Python.',
    instructor: 'Neha Singh',
    duration: '6 Weeks',
    level: 'Beginner',
    price: '₹1599'
  },
  {
    image: 'assets/course9.jpg',
    title: 'React & Redux Mastery',
    description: 'Build dynamic single-page apps with React and Redux.',
    instructor: 'Manoj Patel',
    duration: '6 Weeks',
    level: 'Intermediate',
    price: '₹1899'
  }
];

}

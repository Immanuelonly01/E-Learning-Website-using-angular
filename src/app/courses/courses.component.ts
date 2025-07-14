import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
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
  },
  {
    image: 'assets/course10.jpg',
    title: 'DevOps & CI/CD',
    description: 'Automate deployments using Jenkins, Docker and Kubernetes.',
    instructor: 'Anita Das',
    duration: '8 Weeks',
    level: 'Advanced',
    price: '₹2699'
  },
  {
    image: 'assets/course11.jpg',
    title: 'Artificial Intelligence Basics',
    description: 'Learn how AI works using Python, OpenCV and neural nets.',
    instructor: 'Vinay Rao',
    duration: '7 Weeks',
    level: 'Beginner to Intermediate',
    price: '₹2099'
  },
  {
    image: 'assets/course12.jpg',
    title: 'Blockchain Development',
    description: 'Build DApps and smart contracts using Ethereum & Solidity.',
    instructor: 'Swathi R',
    duration: '10 Weeks',
    level: 'Advanced',
    price: '₹2999'
  },
  {
    image: 'assets/course13.jpeg',
    title: 'Digital Marketing Mastery',
    description: 'Master SEO, Google Ads, social media marketing and funnels.',
    instructor: 'Rahul Mehta',
    duration: '5 Weeks',
    level: 'Beginner',
    price: '₹1399'
  },
  {
    image: 'assets/course14.jpg',
    title: 'Ethical Hacking & Pentesting',
    description: 'Ethical hacking tools, methods and hands-on simulations.',
    instructor: 'Divya Kapoor',
    duration: '8 Weeks',
    level: 'Advanced',
    price: '₹2499'
  },
  {
  image: 'assets/course15.jpeg',
  title: 'Game Development with Unity',
  description: 'Create 2D and 3D games using Unity engine and C# scripting.',
  instructor: 'Karthik Narayan',
  duration: '10 Weeks',
  level: 'Intermediate to Advanced',
  price: '₹2599'
}
];

faqs = [
  {
    question: 'How long do I have access to the courses?',
    answer: 'You will have lifetime access to all the course materials and updates.'
  },
  {
    question: 'Do I get a certificate?',
    answer: 'Yes, a certificate of completion will be provided after you finish the course.'
  },
  {
    question: 'Can I access the courses on mobile?',
    answer: 'Absolutely! Our platform is mobile-friendly and accessible on all devices.'
  }
];
}
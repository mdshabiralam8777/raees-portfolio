// Portfolio Data Constants
// Easy to update all content in one place

export const PERSONAL_INFO = {
  name: "Mohammad Raees Alam",
  tagline: "IGCSE, GCSE & CBSE Math/Physics Teacher | STEM Educator",
  subtext:
    "Specializing in nurturing high achievers and supporting academic excellence through simulation-based learning and 21st-century pedagogical tools.",
  email: "alammohammadraees@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammad-raees-alam-457038302", // Actual LinkedIn profile
  cvLink:
    "https://drive.google.com/file/d/1cgPmkwNe3apjwvZ_68vlLmTblqMliEnu/view", // Add your CV file to public folder
};

export const ABOUT = {
  summary:
    "Passionate Math & Physics educator with 4+ years of experience specializing in STEM education. I focus on bridging the gap between theoretical concepts and real-life application using smart technology. Skilled at training students for board exams and Olympiads, while fostering mental health and academic enthusiasm.",
  stats: [
    {
      value: "4+",
      label: "Years Experience",
      icon: "Calendar",
    },
    {
      value: "3",
      label: "International Certifications",
      sublabel: "Kyrgyzstan, UK, Singapore",
      icon: "Award",
    },
    {
      value: "∞",
      label: "Olympiad & STEM Specialist",
      icon: "Trophy",
    },
  ],
};

export const TOOLKIT = {
  educational: {
    title: "Educational Tech",
    skills: [
      "PhET Simulations",
      "GeoGebra",
      "Desmos",
      "Smartboard",
      "Microsoft OneNote",
      "Microsoft Teams",
    ],
  },
  pedagogical: {
    title: "Pedagogical Skills",
    skills: [
      "Lesson Study",
      "CLIL (Content & Language Integrated Learning)",
      "Student Mental Health",
      "Olympiad Diagnosis",
      "Differentiated Instruction",
      "Formative Assessment",
    ],
  },
};

export const EXPERIENCE = [
  {
    id: 1,
    title: "Math/Physics Teacher",
    company: "IQbalia International School",
    location: "Hyderabad, India",
    period: "May 2025 – Present",
    isCurrent: true,
    description:
      "Teaching CBSE curriculum with focus on flowcharts, simulations, and Olympiad training.",
    highlights: [
      "Implementing simulation-based learning using PhET and GeoGebra",
      "Training students for national and international Olympiads",
      "Developing flowchart-based problem-solving methodologies",
    ],
  },
  {
    id: 2,
    title: "Physics/Math Teacher",
    company: "Zhayil Baatyr Cambridge High School (Sapat International)",
    location: "Kyrgyzstan",
    period: "Sep 2023 – May 2025",
    isCurrent: false,
    description:
      "Served as Secretary of Head of Methodological Union. Utilized Smartboards & PhET simulations for interactive learning.",
    highlights: [
      "Secretary of Head of Methodological Union",
      "Implemented Smartboard-based interactive lessons",
      "Conducted teacher training workshops on EdTech tools",
    ],
  },
  {
    id: 3,
    title: "E-Tutor (IGCSE/IB Math & Physics)",
    company: "Zeal Educators & Tuition Highway",
    location: "Remote",
    period: "2022 – 2023",
    isCurrent: false,
    description:
      "Online tutoring for IGCSE and IB curriculum students in Mathematics and Physics.",
    highlights: [
      "IGCSE/IB Math tutoring at Zeal Educators",
      "IGCSE Physics/Math tutoring at Tuition Highway",
      "Personalized learning plans for each student",
    ],
  },
  {
    id: 4,
    title: "STEM Educator & Generalist Teacher",
    company: "Shalimar High School & Bhawani Upper Pry Pathsala",
    location: "India",
    period: "2020 – 2022",
    isCurrent: false,
    description:
      "Early career teaching experience across STEM subjects and general education.",
    highlights: [
      "Foundation teaching experience in STEM",
      "Developed classroom management skills",
      "Created engaging lesson plans for diverse learners",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "M.Sc Mathematics",
    institution: "Osmania University",
    status: "Pursuing",
    icon: "GraduationCap",
  },
  {
    degree: "B.Ed (Bachelor of Education)",
    institution: "Osmania University",
    status: "Pursuing",
    icon: "Users",
  },
  {
    degree: "B.Sc Mathematics Honours",
    institution: "University of Calcutta",
    status: "8.245 CGPA",
    icon: "BookOpen",
  },
  {
    degree: "D.Ed (Diploma in Elementary Education)",
    institution: "",
    status: "Completed",
    icon: "FileText",
  },
];

export const CERTIFICATIONS = [
  {
    name: "CTET",
    year: "2023",
    description: "Central Teacher Eligibility Test",
  },
  {
    name: "Certified Pedagogical Professional",
    year: "2024",
    description: "International Alatoo University",
  },
  {
    name: "TEFL",
    year: "",
    description: "120 Hours Certification",
  },
  {
    name: "Certified Olympiad Diagnosis Teacher",
    year: "",
    description: "Specialized in Olympiad preparation",
  },
];

export const AWARDS = [
  {
    title: "Bronze Medal",
    event: "Sapat International Teachers Exam",
    location: "Kyrgyzstan",
    year: "2024",
    icon: "Medal",
  },
  {
    title: "Best Lesson Delivery in Physics",
    event: "Sapat IEI Schools",
    location: "",
    year: "2024",
    icon: "Star",
  },
  {
    title: "Conference Panelist",
    event: "4C Skills Discussion at Sapat IEI Conference",
    location: "",
    year: "",
    icon: "Mic2",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

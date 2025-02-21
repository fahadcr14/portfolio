import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Fahad",
  lastName: "Hussain",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack AI/ML Engineer",
  avatar: "/images/avatar.jpg", 
  location: "Lahore, Pakistan",
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about AI, ML, and innovative technology solutions.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fahadcr14",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fahad-hussain99",
  },

  {
    name: "Email",
    icon: "email",
    link: "mailto:fahadseedat@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack AI/ML Engineer and Innovator</>,
  subline: (
    <>
      I'm Fahad, a Full Stack AI/ML Engineer dedicated to building innovative solutions in AI, ML, and Computer Vision.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Fahad Hussain",
  description: `Meet ${person.name}, a ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/your-scheduling-link", // Replace with your scheduling link if available.
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Fahad Hussain, a visionary Full Stack AI/ML Engineer committed to creating innovative solutions to solve complex global challenges using Machine Learning, Deep Learning, and Computer Vision.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "June 2023 – Aug 2023",
        role: "Web Development",
        achievements: [
          <>
            Developed a Django web app to manage data for 800,000 houses, significantly reducing costs.
          </>,
          <>
            Optimized database queries, resulting in a 30% improvement in performance.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "July 2023 – Sep 2024",
        role: "Advanced Web Scraping",
        achievements: [
          <>
            Built and maintained 70+ web scrapers with proxy extensions.
          </>,
          <>
            Automated data retrieval using cron jobs, reducing processing time by 40%.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "Sep 2024 – Dec 2024",
        role: "Generative AI",
        achievements: [
          <>
            Created an AI-powered lead generation system that increased conversion rates by 20% and reduced API costs by 30%.
          </>,
          <>
            Implemented a RAG-based solution to fully automate previously manual tasks.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of the Punjab, PUCIT/FCIT",
        description: (
          <>
            Bachelor’s in Data Science , Dec 2021 – June 2025, Lahore, Pakistan.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Python, JavaScript</>,
        images: [],
      },
      {
        title: "Databases",
        description: <>MySQL, PostgreSQL, MongoDB, DynamoDB, AWS S3</>,
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: <>AWS, EC2, Azure, GCP, PythonAnywhere, Docker</>,
        images: [],
      },
      {
        title: "Libraries & Frameworks",
        description: <>Selenium, BeautifulSoup, Flask, Django, React, Next.js, PyTorch, TensorFlow, Scikit-learn, SciPy, OpenCV, LangChain</>,
        images: [],
      },
      {
        title: "Other Tools",
        description: <>Power BI, Google Colab, Hugging Face, Vercel, Nginx, LocalStack, Git, GitHub Actions, Mlflow, Trello, Pyspark, Prompt Engineering, Supabase</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about AI, ML, and tech innovations...",
  description: `Read what ${person.name} has been working on recently.`,
};

const workProjects = {
  label: "Work",
  title: "My Projects",
  description: `Design and development projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My Photo Gallery",
  description: `A collection of moments captured by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "Gallery image 1",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "Gallery image 2",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "Gallery image 3",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "Gallery image 4",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "Gallery image 5",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "Gallery image 6",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "Gallery image 7",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Gallery image 8",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "Gallery image 9",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Gallery image 10",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "Gallery image 11",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "Gallery image 12",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "Gallery image 13",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "Gallery image 14",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, workProjects as work, gallery };

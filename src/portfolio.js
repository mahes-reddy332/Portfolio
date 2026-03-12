/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mahesh Reddy's Portfolio",
  description:
    "A passionate Data Science student specializing in Machine Learning and Deep Learning, building intelligent and data-driven applications that create real-world impact.",
  og: {
    title: "Mahesh Reddy Mula Portfolio",
    type: "website",
    url: "https://github.com/mahes-reddy332",
  },
};

//Home Page
const greeting = {
  title: "Mahesh Reddy Mula",
  logo_name: "MaheshReddy Mula",
  nickname: "Mula Venkata Maheshwara Reddy",
  subTitle:
    "A passionate Data Science student who thrives on building intelligent ML/DL applications, analyzing complex datasets, and solving challenging problems through data-driven insights.",
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/mahes-reddy332",
  githubProfile: "https://github.com/mahes-reddy332",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mahes-reddy332",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mahesh-reddy-mula-369z/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mahesreddymula@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building end-to-end ML pipelines for classification, regression and deep learning tasks",
        "⚡ Experience with CNNs, Transformers, and ensemble methods for real-world prediction challenges",
        "⚡ Participated in Amazon ML Challenge 2025, ranked 819th out of 82,500+ teams",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#013243",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
      ],
    },
    {
      title: "Web Development & Programming",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web applications using HTML, CSS, JavaScript and ReactJS",
        "⚡ Developed API-based news applications and AI-powered chatbots using OpenAI API",
        "⚡ Proficient in C++ and Python for competitive programming and algorithmic problem solving",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Data Analysis & Visualization",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Exploratory data analysis with Pandas, NumPy, Matplotlib and Seaborn",
        "⚡ Developed interactive Power BI dashboards to track KPIs and business metrics",
        "⚡ Expert-level SQL for complex queries, joins, window functions, and data modeling",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#3F4F75",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "MS Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/mahesreddymula",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology, Raipur",
      subtitle: "B.Tech. in Chemical Engineering",
      logo_path: "iiitk_logo.png",
      logo_url: "https://www.nitrr.ac.in/images/nitrr.gif",
      alt_name: "NIT Raipur",
      duration: "2023 - Expected Aug. 2027",
      descriptions: [
        "• Pursuing core engineering subjects alongside a strong foundation in data science and computing.",
        "• Maintaining a CGPA of 8.77/10.0 reflecting consistent academic excellence.",
        "• Serving as Tech Executive at the Entrepreneurship Cell, driving tech-driven initiatives.",
      ],
      website_link: "https://www.nitrr.ac.in/",
    },
    {
      title: "Indian Institute of Technology, Madras",
      subtitle: "B.S. in Data Science",
      logo_path: "iu_logo.png",
      logo_url: "https://study.iitm.ac.in/assets/img/logo.png",
      alt_name: "IIT Madras",
      duration: "2023 - Expected Mar. 2027",
      descriptions: [
        "• Studying advanced topics in Machine Learning, Deep Learning, Statistics and Data Engineering.",
        "• Maintaining a CGPA of 7.50/10.0 in this rigorous online degree program.",
        "• Served as Web Operations Head for Bandipur House, migrating the club website to a custom-coded platform.",
      ],
      website_link: "https://study.iitm.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Advanced ML Algorithms",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.coursera.org/",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Supervised Machine Learning",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.coursera.org/",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "5-Star SQL Badge",
      subtitle: "- HackerRank (Top 5%)",
      logo_path: "github_logo.png",
      certificate_link: "https://www.hackerrank.com/mahesreddymula",
      alt_name: "HackerRank",
      color_code: "#2EC86699",
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Positions of Responsibility & Volunteerships",
  description:
    "As a dual-degree student at NIT Raipur and IIT Madras, I have taken on leadership roles in technical and entrepreneurial clubs, driving impactful initiatives and contributing to campus communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Positions of Responsibility",
      work: true,
      experiences: [
        {
          title: "Web Operations Head",
          company: "Bandipur House, IIT Madras BS",
          company_url: "https://study.iitm.ac.in/",
          logo_path: "github_logo.png",
          duration: "2024 - 2025",
          location: "IIT Madras (Online)",
          description:
            "Migrated the club website from Google Sites to a custom-coded platform, significantly improving the user experience. Developed a dedicated election participants webpage for fair and transparent representation.",
          color: "#006EFF",
        },
        {
          title: "Tech Executive",
          company: "Entrepreneurship Cell, NIT Raipur",
          company_url: "https://www.nitrr.ac.in/",
          logo_path: "dsc_logo.png",
          duration: "Mar. 2023 - Sep. 2025",
          location: "Raipur, Chhattisgarh",
          description:
            "Redesigned and updated the E-Cell website with an improved user interface and enhanced features. Organized technical events and workshops to foster entrepreneurship awareness among students.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Featured projects are prioritized by impact and relevance: Machine Learning, Deep Learning, and challenge projects first. You can find additional lower-priority projects on my GitHub profile.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Achievements",
  description: "Competitions, certifications and recognitions I have earned.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "developerActivity.svg",
    description:
      "I am available on GitHub and LinkedIn. Feel free to reach out — I will reply within 24 hours. I can help you with Machine Learning, Data Analysis, SQL, Python, and Web Development.",
  },
  blogSection: {
    title: "GitHub",
    subtitle:
      "I love building projects and sharing them on GitHub. Check out my repositories for ML models, data analysis notebooks, and web apps.",
    link: "https://github.com/mahes-reddy332",
    avatar_image_path: "ghibli_mahesh.jpg",
  },
  addressSection: {
    title: "Location",
    subtitle: "GE Road, Raipur, Chhattisgarh 492010, India",
    locality: "Raipur",
    country: "India",
    region: "Chhattisgarh",
    postalCode: "492010",
    streetAddress: "GE Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/rAD6xN7q3YnW9GxF7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

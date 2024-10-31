/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 800 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashwath Krishnan",
  title: "Hello, I'm Ashwath",
  subTitle: emoji(
    "I'm an aspiring software engineer pursuing a Master’s in Computer Science at the University of Illinois Urbana-Champaign. Proficient in Java, Python, and React, I am exploring the potential of LLMs to build impactful, growth-driven products. I’m actively seeking full-time opportunities starting June 2025, where I can apply my expertise in new and challenging environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Y78i2rAmoyWJXOlW5_iwsqNpQ4U7xbk-/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ashwathkris",
  linkedin: "https://www.linkedin.com/in/ashwath-krishnan45/",
  gmail: "ashwathkrishnan45@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Aspiring Software Engineer",
  skills: [
    emoji("Expertise in Java, Python, and JavaScript, with a strong foundation in Full-Stack development and Machine Learning"),
    emoji("Proficient in cloud technologies and services such as Microsoft Azure and Google Cloud Platform, enhancing project scalability and performance."),
    emoji("Skilled with Docker and Kubernetes for containerization, orchestration and to monitor large-scale applications.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Urbana-Champaign",
      logo: require("./assets/images/uiucLogo.jpg"),
      subHeader: "Master of Computer Science                                                                                             GPA : 4.0 / 4.0",
      duration: "January 2024 - May 2025",
      descBullets: [
        "Software Engineer, iOS at the (x)Ability Lab"
      ],
      courses: [
        "Database Systems", "ML + Data Systems", "Artificial Intelligence", "Adv. Competitive Algorithm Programming", "Software Engineering", "Advanced Data Management",
      ]
    },
    {
      schoolName: "PES University",
      logo: require("./assets/images/pesuLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering                             GPA : 9.15 / 10.0",
      duration: "August 2019 - July 2023",
      descBullets: [
        "Recipient of the Prof. MRD scholarship for being in the top 20% of my cohort"
      ],
      courses: [
        "Python",
        "C",
        "Design and Analysis of Algorithms",
        "Data Structures",
        "Cloud Computing",
        "Operating Systems",
        "Computer Networks",
        "Object Oriented Programming",
        "Machine Learning",
        "Database Management Systems",
      ]
    }
  ]
};
// TODO: All courses not scrolling
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "80%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer, iOS",
      company: "University of Illinois Urbana-Champaign",
      companylogo: require("./assets/images/uiucLogo.jpg"),
      date: "February 2024 - Present",
      descBullets: [
       "Develop a conversational iOS app with SwiftUI for blind users, enhancing exercise tracking and user engagement by 66%.",
       "Integrate Apple HealthKit and OpenAI’s GPT and Whisper APIs to process speech for personalized health recommendations",
       "Leveraged Azure CosmosDB and Azure Cloud services to ensure scalability and reliability, increasing app performance by 57%"
      ]
    },
    {
      role: "Software Development Intern",
      company: "Zebra Technologies (Motorola) ",
      companylogo: require("./assets/images/zebra.png"),
      date: "January 2023 - July 2023",
      descBullets: [
        "Created a device tracking portal using ReactJS and Firebase, designing 8 Firebase functions to enable Walmart warehouse managers to monitor the status of Zebra devices, resulting in a 12.5% increase in operational efficiency",
        "Engineered and executed 10+ queries in BigQuery, optimizing data retrieval and analysis for device management",
        "Enhanced software reliability by designing 500+ Jest test cases, achieving an 18% increase in code coverage"
      ]},
    {
      role: "Software Engineer Intern",
      company: "Soroco",
      companylogo: require("./assets/images/sorocoLogo.jpeg"),
      date: "June 2022 - July 2022",
      descBullets: [
        'Worked on the Data Pipeline team, optimizing workflows using Apache Airflow and integrating Great Expectations into Azure Pipelines for automated data quality assurance',
        "Reduced data validation issues by 22% with a comprehensive 130+ expectation suite for SQL database tables",
        "Integrated the expectation suite into Azure Release pipelines to support a robust CI/CD process"
      ]},
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const githubProjects = {
  title: "Projects",
  // subtitle: "SOME FULL STACK AND DATA SCIENCE PROJECTS",
  projects: [
    {
      image: require("./assets/images/courser.png"),
      projectName: "Enrollmints: An improved Course Registration system for Computer Science degrees at UIUC",
      projectDesc: "Technologies: React.js, Flask, Google Cloud Platform, PostgreSQL",
                    
      footerLink: [
        {
          name: "Demo",
          url: "https://github.com/ashwathkris/Enrollmints"
        },
        {name: "Github", url: "https://github.com/ashwathkris/Enrollmints"}
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sent2img.png"),
      projectName: "Sent2Img: A Text-based Image Search Engine on the Flickr8k dataset",
      projectDesc: "Technologies: Tensorflow, OpenCV, Flask, HTML, Okapi BM25",
      footerLink: [
        {
          name: "Demo",
          url: "https://drive.google.com/file/d/1ocgiXuJMIZt5jnyTM-gKvQha7tGb9Q9i/view"
        },
        {name: "Github", url: "https://github.com/ashwathkris/Text-based-Image-retrieval-using-Image-Captioning"}
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/gym.png"),
      projectName: "Fitt: A Real-Time Gym Instructor that delivers live feedback to rectify posture while exercising",
      projectDesc: "Technologies: Flask, React.js, OpenCV, MediaPipe",
      footerLink: [
        {
          name: "Demo",
          url: "https://drive.google.com/file/d/1vF2wl3y8MT22VRFeOlDV65trtuSg1ajU/view"
        },
        {name: "Github", url: "https://github.com/ashwathkris/Real-Time-Gym-Instructor"}
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bonbot.png"),
      projectName: "BonBot: A Chatbot for Mental Health",
      projectDesc: "Technologies: Flask, React.js, NLP",
      footerLink: [
        {
          name: "Demo",
          url: "https://www.youtube.com/watch?v=ARw1DvzMrKM"
        },
        {name: "Github", url: "https://github.com/ashwathkris/BonBot-A-chatbot-for-Mental-health"}
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true
}

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications"),
  achievementsCards: [
    {
      title: "A Comparative Analysis of Chest X-rays and CT Scans Towards COVID-19 Detection",
      subtitle: "IEEE INCET 2023",
      image: require("./assets/images/covid.png"),
      footerLink: [
        {name: "View Publication", url: "https://ieeexplore.ieee.org/abstract/document/10170302"}, 
      ]
    },
    {
      title: "Text-based Image Retrieval Using Captioning",
      subtitle: "IEEE ICECCT 2021",
      image: require("./assets/images/IR.png"),
      footerLink: [
        {
          name: "View Publication", url: "https://ieeexplore.ieee.org/abstract/document/9616897"
        }
      ]
    },
    {
      title: "Sign2Sign: A Novel Approach Towards Real-Time ASL to ISL Translation",
      subtitle: "ETTIS 2022 (Springer Nature)",
      image: require("./assets/images/sign2sign.png"),
      footerLink: [
        {name: "View Publication", url: "https://link.springer.com/chapter/10.1007/978-981-19-4182-5_4"},
        
      ]
    },
    {
      title: "An Ensemble Approach Towards Correlating Articles and their Corresponding Images",
      subtitle: "MediaEval 2022",
      image: require("./assets/images/ensemble.png"),
      footerLink: [
        {
          name: "View Publication",
          url: "https://ceur-ws.org/Vol-3583/paper43.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "ashwathkrishnan45@gmail.com",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  githubProjects,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

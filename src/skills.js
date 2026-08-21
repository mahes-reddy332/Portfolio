// Updated technical skills based on Mahesh Reddy Mula's current resume.
const skills = {
  data: [
    {
      title: "Languages & Databases",
      fileName: "FullStackImg",
      skills: [
        "⚡ Python (Pandas, NumPy, Scikit-learn, SciPy), SQL (PostgreSQL, MySQL), C++, JavaScript, HTML/CSS",
        "⚡ Relational databases and data-focused programming workflows",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "simple-icons:python", style: { color: "#3776AB" } },
        { skillName: "C++", fontAwesomeClassname: "simple-icons:cplusplus", style: { color: "#00599C" } },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { color: "#F7DF1E" } },
        { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5", style: { color: "#E34F26" } },
        { skillName: "CSS3", fontAwesomeClassname: "simple-icons:css3", style: { color: "#1572B6" } },
        { skillName: "PostgreSQL", fontAwesomeClassname: "simple-icons:postgresql", style: { color: "#4169E1" } },
        { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
      ],
    },
    {
      title: "Data Analytics & BI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Exploratory Data Analysis (EDA), statistical analysis, data profiling, and feature engineering",
        "⚡ Advanced Excel, Tableau, Power BI, KPI dashboards, and stakeholder-focused data visualization",
        "⚡ Turning structured datasets into actionable business insights and analytical recommendations",
      ],
      softwareSkills: [
        { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas", style: { color: "#150458" } },
        { skillName: "NumPy", fontAwesomeClassname: "simple-icons:numpy", style: { color: "#013243" } },
        { skillName: "SciPy", fontAwesomeClassname: "simple-icons:scipy", style: { color: "#0C55A5" } },
        { skillName: "Tableau", fontAwesomeClassname: "simple-icons:tableau", style: { color: "#E97627" } },
        { skillName: "Power BI", fontAwesomeClassname: "simple-icons:powerbi", style: { color: "#F2C811" } },
        { skillName: "Microsoft Excel", fontAwesomeClassname: "simple-icons:microsoftexcel", style: { color: "#217346" } },
      ],
    },
    {
      title: "SQL & Data Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Complex SQL joins, window functions, data cleaning, and relational data modeling",
        "⚡ ETL pipeline development and API integration for reliable data workflows",
      ],
      softwareSkills: [
        { skillName: "SQL", fontAwesomeClassname: "simple-icons:postgresql", style: { color: "#4169E1" } },
        { skillName: "PostgreSQL", fontAwesomeClassname: "simple-icons:postgresql", style: { color: "#4169E1" } },
        { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
        { skillName: "REST APIs", fontAwesomeClassname: "simple-icons:fastapi", style: { color: "#009688" } },
      ],
    },
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Supervised and unsupervised learning, Random Forests, XGBoost, regression, and model evaluation",
        "⚡ Deep Learning with CNNs, LLMs, and prompt engineering",
        "⚡ Applying statistical and machine learning methods to real-world prediction and analytics problems",
      ],
      softwareSkills: [
        { skillName: "Scikit-learn", fontAwesomeClassname: "simple-icons:scikitlearn", style: { color: "#F7931E" } },
        { skillName: "XGBoost", fontAwesomeClassname: "simple-icons:xgboost", style: { color: "#189FDD" } },
        { skillName: "TensorFlow", fontAwesomeClassname: "simple-icons:tensorflow", style: { color: "#FF6F00" } },
        { skillName: "PyTorch", fontAwesomeClassname: "simple-icons:pytorch", style: { color: "#EE4C2C" } },
        { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas", style: { color: "#150458" } },
        { skillName: "NumPy", fontAwesomeClassname: "simple-icons:numpy", style: { color: "#013243" } },
      ],
    },
    {
      title: "LLMs & Agentic AI",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ LangChain, LangGraph, Multi-Agent Systems, RAG, and Model Context Protocol (MCP)",
        "⚡ LoRA/PEFT, prompt engineering, tool calling, and human-in-the-loop workflows",
        "⚡ OpenAI and Groq APIs",
      ],
      softwareSkills: [
        { skillName: "LangChain", fontAwesomeClassname: "simple-icons:langchain", style: { color: "#1C3C3C" } },
        { skillName: "LangGraph", fontAwesomeClassname: "simple-icons:graphql", style: { color: "#E10098" } },
        { skillName: "OpenAI", fontAwesomeClassname: "simple-icons:openai", style: { color: "#000000" } },
      ],
    },
    {
      title: "NLP & Computer Vision",
      fileName: "DesignImg",
      skills: [
        "⚡ Transformers (BERT, GPT), text/image classification, semantic search, and named entity recognition (NER)",
        "⚡ OpenCV, image segmentation, CLAHE, adaptive thresholding, and watershed segmentation",
      ],
      softwareSkills: [
        { skillName: "Hugging Face", fontAwesomeClassname: "simple-icons:huggingface", style: { color: "#FFD21E" } },
        { skillName: "OpenCV", fontAwesomeClassname: "simple-icons:opencv", style: { color: "#5C3EE8" } },
        { skillName: "Python", fontAwesomeClassname: "simple-icons:python", style: { color: "#3776AB" } },
      ],
    },
    {
      title: "Software, Cloud & DevOps",
      fileName: "FullStackImg",
      skills: [
        "⚡ Git/GitHub, Jupyter Notebook, VS Code, REST APIs, Docker, and Linux",
        "⚡ Google Cloud Platform (GCP) and practical software development workflows",
      ],
      softwareSkills: [
        { skillName: "Git", fontAwesomeClassname: "simple-icons:git", style: { color: "#F05032" } },
        { skillName: "GitHub", fontAwesomeClassname: "simple-icons:github", style: { color: "#181717" } },
        { skillName: "Jupyter", fontAwesomeClassname: "simple-icons:jupyter", style: { color: "#F37626" } },
        { skillName: "Google Cloud", fontAwesomeClassname: "simple-icons:googlecloud", style: { color: "#4285F4" } },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#2496ED" } },
        { skillName: "Linux", fontAwesomeClassname: "simple-icons:linux", style: { color: "#FCC624" } },
      ],
    },
  ],
};

export { skills };

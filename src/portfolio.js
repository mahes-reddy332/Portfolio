import { experience } from "./portfolio.base";

const internships = experience.sections.find(
  (section) => section.title === "Internships"
);

if (internships) {
  internships.experiences.unshift({
    title: "Research Intern — AI-Driven Biomaterials Analysis",
    company: "Indian Institute of Technology Madras",
    company_url: "https://www.iitm.ac.in/",
    logo_path: "iitm_logo.svg",
    duration: "May 2025 – Jul 2025",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Built an automated SEM image-analysis pipeline (OpenCV, scikit-image) using CLAHE and watershed segmentation to extract nanorod morphology and PCA orientation angles for 200+ particles/image. Fitted Power-Law & Cross rheology models via nonlinear regression (SciPy) and developed a Bayesian optimization framework (GP surrogate + Expected Improvement) to predict optimal bioink composition for extrusion-based 3D bioprinting.",
    color: "#800000",
  });
}

export * from "./portfolio.base";

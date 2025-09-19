import { useState } from "react";
import "../styles/project.css";

interface Project {
  id: number;
  title: string;
  category: "App" | "website" | "more";
  image: string;
  description: string;
  githubUrl: string;
  liveUrl?: string; 
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "scantra",
      category: "App",
      image: "/placeholder.svg?height=300&width=400",
      description: "A mobile application that helps users identify potentially recalled products from their store receipts.",
      githubUrl: "https://github.com/",
      liveUrl: "https://arqyn.vercel.app",
    },
    {
      id: 2,
      title: "sustainability-app",
      category: "App",
      image: "/placeholder.svg?height=300&width=400",
      description: "Map-based application where users can log eco friendly actions (recycling drives, tree plantings, trash cleanups) to see neighborhood impact. ",
      githubUrl: "https://github.com",
      liveUrl: "https://arqyn.vercel.app",
    },
    {
      id: 3,
      title: "Web",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "...",
      githubUrl: "https://github.com",
      liveUrl: "https://arqyn.vercel.app",
    },
    {
      id: 4,
      title: "..",
      category: "more",
      image: "/placeholder.svg?height=300&width=400",
      description: "....",
      githubUrl: "https://github.com",
      liveUrl: "https://arqyn.vercel.app",
    },
    {
      id: 11,
      title: "..",
      category: "more",
      image: "/placeholder.svg?height=300&width=400",
      description: "This EDA demonstrates that Algeria's labor market data tells a story far richer than employment statistics alone. The patterns of missing data, the evolution of gender-disaggregated statistics, and the cyclical nature of data quality all reflect the country's complex journey through socialism, civil conflict, economic reform, and political transformation.",
      githubUrl: "https://github.com",
      liveUrl: "https://arqyn.vercel.app",
    },
    {
      id: 22,
      title: "web",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "This project analyzes Algerian market price data to predict price relative spreads between lower and upper bounds, providing insights into market volatility and price variations across different product categories This project analyzes Algerian market price data to predict price relative spreads between jjtt",
      githubUrl: "https://github.com",
      liveUrl: "https://arqyn.vercel.app",
    },
  
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

   return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Our Projects</h2>
          <p className="projects-subtitle">
            Explore our open source projects spanning web development and data science
          </p>
        </div>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleFilterClick("all")}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === "website" ? "active" : ""}`}
            onClick={() => handleFilterClick("website")}
          >
            Websites
          </button>
          <button 
            className={`filter-btn ${activeFilter === "app" ? "active" : ""}`}
            onClick={() => handleFilterClick("app")}
          >
            Apps
          </button>
          <button 
            className={`filter-btn ${activeFilter === "more" ? "active" : ""}`}
            onClick={() => handleFilterClick("more")}
          >
            More
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category-badge">
                  {project.category === "website" ? "Website" : project.category === "App" ? "App" : "More"}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description.length > 100 
                    ? `${project.description.substring(0, 100)}...` 
                    : project.description
                  }
                </p>
                <div className="project-buttons">
                  {project.liveUrl && (
                    <button 
                      className="btn-primary"
                      onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                    >
                      {project.category === "website" ? "View Website" : project.category === "App" ? "View App" : "View Demo"}
                    </button>
                  )}
                  <button 
                    className="btn-secondary"
                    onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
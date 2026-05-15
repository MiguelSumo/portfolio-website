import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  
   
  {
    title: "Lone Pilot Protocal",
    description:
      "A collaborative made game built with Unity. Using Design Patterns to implement C# code.",
    image: "/LonePilotProtocal.png",
    video: "/Game-Presentation.mp4",
    tags: ["C#", "Unity", "Design Patterns", "Game Development"],
    link: "https://lonepilotprotocol-arh6bpegbyexbwd9.canadacentral-01.azurewebsites.net/",
    github: "https://github.com/MiguelSumo/LonePilotProtocal",
  },
  {
    title: "Hospitality Analysis Dashboard",
    description:
      "Developed a python based ETL pipeline to extract, transform, and load hospitality data into a data warehouse from a SQL Server relational OLTPdatabase and a MongoDB non-relational database. Created a Power BI dashboard to visualize key performance indicators and trends in the hospitality industry.",
    image: "/DataFlow.png",
    video: "/Data-Analytics-Project.mp4",
    tags: ["Power BI", "Python", "Data Analysis", "Data Visualization", "ETL", "SQL Server", "MongoDB", "Data Warehouse", "OLTP"],
    link: "#",
    github: "#",
  },
  {
    title: "Customer Management System",
    description:
      "A full-stack CRUD application designed for efficient customer tracking and data management.",
    image: "/CustomerCRUD.png", 
    video: "/Customer-Management-System.mp4",
    tags: ["React", "Node.js", "SQL/NoSQL", "MIS"],
    link: "", 
    github: "",
  },
  {
    title: "Data Analytic Dashboard",
    description:
      "Developed an interactive data analytics dashboard using Power BI. The dashboard provides real-time insights and visualizations for business performance metrics, enabling data-driven decision-making.",
    image: "/powerbi.png",
    tags: ["Power BI", "Problem Solving", "Data Analysis", "Data Visualization"],
    link: "#",
    github: "#",
  },
  {
    title: "440 Database Project",
    description:
      "A rental car management database built for MIS 440. It includes schema scripts, sample data, and documentation for creating and testing the database in SQL Server Management Studio (SSMS) and MySQL",
    image: "/databaseschema.png",
    tags: ["SQL", "SSMS", "MySQL", "Database Design"],
    link: "#",
    github: "https://github.com/MiguelSumo/440DatabaseProject",
  },
  {
    title: "Salary and Performance Management System",
    description:
      "Developed a web application for managing employee salaries and performance reviews. The system includes features for tracking employee performance, calculating salaries based on performance metrics, and generating reports for HR and management.",
    image: "/figma.png",
    tags: ["Figma", "UI/UX Design", "Requirement Gathering", "Web Application"],
    link: "#",
    github: "#",
  },
   {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects, skills, and experience.",
    image: "/portfoliowebsite.png",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    github: "https://github.com/MiguelSumo/portfolio-website",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activePreview, setActivePreview] = useState(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  const gridRef = useRef(null);
  const [gridMaxHeight, setGridMaxHeight] = useState("0px");

  const updateGridHeight = () => {
    if (!gridRef.current) {
      return;
    }

    setGridMaxHeight(`${gridRef.current.scrollHeight}px`);
  };

  useEffect(() => {
    updateGridHeight();
  }, [showAll, visibleProjects.length]);

  useEffect(() => {
    if (!gridRef.current || typeof window === "undefined") {
      return;
    }

    const handleResize = () => updateGridHeight();
    window.addEventListener("resize", handleResize);

    let observer;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => updateGridHeight());
      observer.observe(gridRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-32">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="mt-4 mb-4 animate-fade-in text-3xl font-bold text-secondary-foreground animation-delay-100 sm:text-4xl md:mb-6 md:text-5xl">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              create curiosity.
            </span>
          </h2>
          <p className="animate-fade-in text-sm text-muted-foreground animation-delay-200 sm:text-base">
            A selection of my recent work, that showcase my skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          id="projects-grid"
          ref={gridRef}
          className="grid gap-5 overflow-hidden transition-[max-height] duration-700 ease-in-out sm:gap-6 md:grid-cols-2 md:gap-8"
          style={{ maxHeight: gridMaxHeight }}
        >
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Media */}
              <div className="relative aspect-video overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-surface text-sm text-muted-foreground">
                    Preview coming soon
                  </div>
                )}
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-x-3 bottom-3 z-10 flex flex-wrap items-center justify-center gap-2 opacity-100 transition-opacity duration-300 md:inset-0 md:gap-4 md:opacity-0 md:group-hover:opacity-100">
                  {project.video && (
                    <button
                      type="button"
                      onClick={() => setActivePreview(project)}
                      className="rounded-full glass px-3 py-1.5 text-xs font-medium transition-all hover:bg-primary hover:text-primary-foreground sm:px-4 sm:py-2 sm:text-sm"
                    >
                      View Slideshow
                    </button>
                  )}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      className="rounded-full glass p-2.5 transition-all hover:bg-primary hover:text-primary-foreground sm:p-3"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      className="rounded-full glass p-2.5 transition-all hover:bg-primary hover:text-primary-foreground sm:p-3"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary sm:text-xl">
                    {project.title}
                  </h3>
                  {project.link && project.link !== "#" && (
                    <ArrowUpRight
                      className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                    />
                  )}
                </div>
                <p className="mobile-project-clamp text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="rounded-full border border-border/50 bg-surface px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary sm:px-4 sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {projects.length > 4 && (
          <div className="mt-10 text-center animate-fade-in animation-delay-500 md:mt-12">
            <AnimatedBorderButton
              type="button"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
              aria-controls="projects-grid"
            >
              {showAll ? "Show Fewer Projects" : "View All Projects"}
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        )}

        {activePreview && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
            onClick={() => setActivePreview(null)}
          >
            <div
              className="max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                <div>
                  <h3 className="text-base font-semibold text-secondary-foreground sm:text-lg">
                    {activePreview.title}
                  </h3>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Video preview
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="rounded-full px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-surface hover:text-secondary-foreground sm:text-sm"
                >
                  Close
                </button>
              </div>
              <div className="bg-black">
                <video
                  src={activePreview.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="h-full w-full max-h-[75vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
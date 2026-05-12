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

  useEffect(() => {
    if (!gridRef.current) {
      return;
    }

    const nextHeight = gridRef.current.scrollHeight;
    setGridMaxHeight(`${nextHeight}px`);
  }, [showAll, visibleProjects.length]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              create curiosity.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, that showcase my skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          id="projects-grid"
          ref={gridRef}
          className="grid md:grid-cols-2 gap-8 overflow-hidden transition-[max-height] duration-700 ease-in-out"
          style={{ maxHeight: gridMaxHeight }}
        >
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Media */}
              <div className="relative overflow-hidden aspect-video">
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
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.video && (
                    <button
                      type="button"
                      onClick={() => setActivePreview(project)}
                      className="px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                    >
                      View Slideshow
                    </button>
                  )}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
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
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
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
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
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
              className="w-full max-w-4xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground">
                    {activePreview.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Video preview
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="rounded-full px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-secondary-foreground"
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
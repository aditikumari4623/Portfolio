import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Train Ticket Booking System",
    description: "Developed a MERN-based online ticket booking system with user registration, seat selection, and payment integration, contributing to a responsive frontend using HTML, CSS, and JavaScript.",
    image: "/projects/project1.png",
    tags: ["React", "Express", "NodeJs", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Application",
    description:
      "Built a responsive MERN stack e-commerce application with secure RESTful APIs (MVC), authentication/authorization, and seamless frontend-backend integration for a smooth shopping experience.",
    image: "/projects/project2.png",
    tags: ["React", "Express", "NodeJs", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/aditikumari4623"
            target="_blank"
            className="
              inline-flex items-center gap-2
              px-6 py-2 rounded-full
              bg-[hsl(var(--primary))]
              text-[hsl(var(--primary-foreground))]
              font-medium
              transition-all duration-300
              hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]
              hover:scale-105
              active:scale-95
            "
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

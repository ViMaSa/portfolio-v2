
import Image from "next/image";

const technologies = [
  { name: "TypeScript", icon: "/icons/tech/typescript-original.svg" },
  { name: "JavaScript", icon: "/icons/tech/javascript-original.svg" },
  { name: "React", icon: "/icons/tech/react-original.svg" },
  { name: "Next.js", icon: "/icons/tech/nextjs-original.svg" },
  { name: "Python", icon: "/icons/tech/python-original.svg" },
  { name: "PostgreSQL", icon: "/icons/tech/postgresql-original.svg" },
  { name: "Ruby", icon: "/icons/tech/ruby-original.svg" },
];

export default function TechStack() {
  return (
    <section
      className="tech-showcase container-wide"
      aria-labelledby="tech-heading"
    >
      <div className="tech-showcase-copy">
        <p className="eyebrow">
          TECHNOLOGIES I WORK WITH
        </p>

        <h2 id="tech-heading">
          My Core Toolkit
        </h2>

        <p>
          The technologies I use to build and ship software.
        </p>
      </div>

      <div className="tech-stack-list">
        {technologies.map((tech) => (
          <div className="tech-icon-card" key={tech.name}>
            <Image
              src={tech.icon}
              alt=""
              width={44}
              height={44}
              className={
                tech.name === "Next.js"
                  ? "tech-icon tech-icon-invert"
                  : "tech-icon"
              }
            />

            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

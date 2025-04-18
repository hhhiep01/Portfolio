import styles from "./About.module.css";
import TechnologyItem from "../../components/TechnologyItem/TechnologyItem";
import Paragraph from "../../components/AboutMeParagraph/AboutMeParagraph";
import htmlIcon from "../../../src/assets/html.png";
import cssIcon from "../../../src/assets/css.png";
import reactIcon from "../../../src/assets/react.png";
import gitIcon from "../../../src/assets/git.png";
import cSharpIcon from "../../../src/assets/csharp.png";
import sqlServerIcon from "../../../src/assets/sql-server.png";
import mySQLIcon from "../../../src/assets/mysql.png";
import dotNetIcon from "../../../src/assets/dotnet.png";
import javaIcon from "../../../src/assets/java.png";
import springBootIcon from "../../../src/assets/springboot.png";
import figmaIcon from "../../../src/assets/figma.png";

const technologies = [
  { src: htmlIcon, alt: "Html Icon", name: "Html" },
  { src: cssIcon, alt: "Css Icon", name: "Css" },
  { src: reactIcon, alt: "React Icon", name: "React" },
  { src: gitIcon, alt: "Git Icon", name: "Git" },
  { src: cSharpIcon, alt: "C# Icon", name: "C#" },
  { src: dotNetIcon, alt: "Dot Net Icon", name: "Dot Net" },
  { src: sqlServerIcon, alt: "SQL Server Icon", name: "SQL Server" },
  { src: mySQLIcon, alt: "MySQL Icon", name: "My SQL" },
  { src: javaIcon, alt: "Java Icon", name: "Java" },
  { src: springBootIcon, alt: "SpringBoot Icon", name: "SpringBoot" },
  { src: figmaIcon, alt: "Figma Icon", name: "Figma" },
];

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutContentLeft}>
          <div>
              <Paragraph text="Hello! My name is Hồ Hoàng Hiệp, and I am a passionate Software Engineer and UI/UX Designer with a strong focus on creating intuitive and user-friendly applications. I specialize in both front-end development and UI/UX design, enabling me to build functional, scalable applications and provide users with a seamless experience." />
              <Paragraph text="With expertise in .NET, React, HTML, CSS, and design principles, I bridge the gap between design and technology. I use React to create interactive and responsive web applications, while ensuring they are visually appealing using HTML and CSS. On the back-end, I leverage .NET to build robust solutions that integrate seamlessly with the user interface." />
              <Paragraph text="As a UI/UX Designer, I focus on creating clear, simple, and visually engaging interfaces. I conduct user research, wireframing, prototyping, and usability testing to ensure that the products I develop meet user needs." />
              <Paragraph text="I am passionate about improving my skills and staying updated with the latest design trends and technologies. My goal is to create software that is both visually appealing and technically efficient, ensuring a seamless experience for users across all devices." />
            
          </div>
        </div>
        <div className={styles.aboutContentRight}>
          {technologies.map((tech, index) => (
            <TechnologyItem
              key={index}
              src={tech.src}
              alt={tech.alt}
              name={tech.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

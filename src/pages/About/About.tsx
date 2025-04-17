import styles from './About.module.css'; 
import avatar from '../../../src/assets/avatar.jpg';
import htmlIcon from '../../../src/assets/html.png';
import cssIcon from '../../../src/assets/css.png';
import reactIcon from '../../../src/assets/react.png';
const About = () => {
    return (
      <section id="about" className={styles.aboutSection}>
        <h2>About Me</h2>
        <div className={styles.aboutContent}>
        <div className={styles.aboutContentLeft}>
        <div>
          <img src={avatar} alt="My Photo" className={styles.avatarImage} />
        <div>
        <p>Hello! My name is Hồ Hoàng Hiệp, and I am a passionate Software Engineer and UI/UX Designer with a strong focus on creating intuitive and user-friendly applications. I specialize in a combination of both front-end development and UI/UX design, which allows me to not only build functional, scalable applications but also ensure that users have an enjoyable and seamless experience.</p>
        <p>With expertise in .NET, React, HTML, CSS, and design principles, I bridge the gap between design and technology. On the front-end, I use React to create interactive and responsive web applications, while ensuring they are visually appealing with modern design trends using HTML and CSS. On the back-end, I leverage .NET to build robust solutions that integrate well with the user interface.</p>
        <p>As a UI/UX Designer, I focus on designing clear, simple, and visually engaging interfaces that enhance user experience. I believe in creating designs that are not only aesthetically pleasing but also functional and accessible. I conduct user research, wireframing, prototyping, and usability testing to ensure that the products I develop meet the needs of users.</p>
        <p>I am always excited about improving my skills and staying updated with the latest design trends and technologies. My goal is to create software that is both visually appealing and technically efficient, ensuring a seamless experience for users across all devices.</p>
        </div>  
        </div>
        </div>  
        <div className={styles.abotContentRight}>
          Technology use
          <div>
            <img src={htmlIcon}  alt="Html Icon"/>
            <div>Html</div>
          </div>
          <div>
          <img src={cssIcon}  alt="Css Icon"/>
          <div>Css</div>
          </div>
          <div>
          <img src={reactIcon}  alt="react Icon"/>
          <div>React</div>
          </div>          
        </div>     
        </div>
       
      </section>
    );
  };
  
  export default About;
  
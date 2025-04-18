import styles from "./Home.module.css";
import avatarImage from "../../../src/assets/avatar.jpg"
const Home = () => {
    return (
      <section id="home" className={styles.homeContainer}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <div className={styles.homeContent}>
        <p>Hi, I am Ho Hoang Hiep</p>
        <img src={avatarImage} alt="My Photo" className={styles.avatarImage} />   
        </div>       
      </section>
    );
  };
  
  export default Home;
  
import styles from './Footer.module.css';
import linkedinIcon from '../../../src/assets/linkedin.png';
import gitHubIcon from '../../../src/assets/github.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <div className={styles.socialLinksItem}>
          <a href="https://www.linkedin.com/in/ho%C3%A0ng-hi%E1%BB%87p-h%E1%BB%93-65a16a270/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.linkedin.com/in/ho%C3%A0ng-hi%E1%BB%87p-h%E1%BB%93-65a16a270/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className={styles.socialLinksItem}>
          <a href="https://github.com/hhhiep01" target="_blank" rel="noopener noreferrer">
              <img src={gitHubIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/hhhiep01" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>          
        </div>
        <div className={styles.contactInfo}>
          <p>Email: hoanghiep8401@gmail.com</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Hồ Hoàng Hiệp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

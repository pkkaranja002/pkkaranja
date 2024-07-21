import styles  from './HeroStyles.module.css';
import profilepic from '../../assets/pkcircular.png'
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import gitHubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import LinkedinDark from '../../assets/linkedin-dark.svg';
import CV from "../../assets/cv.pdf"
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme,toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : gitHubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : LinkedinDark;

  return (
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
         className={styles.hero} 
         src={profilepic} 
         alt="profile picture of peter karanja"
          />
          <img 
          className={styles.colorMode} 
          src={themeIcon} 
          alt="color mode icon"
          onClick={toggleTheme}
          />
         
    </div>
    <div className={styles.info}>
        <h1>
            Peter
            <br/>
            Karanja
        </h1>
        <h2>Software Developer</h2>
        <span>
            <a href='https://x.com/__pkay___' target='_blank'>
            <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href='https://github.com/pkkaranja002' target='_blank'>
            <img src={githubIcon} alt="github Icon" />
            </a>
            <a href='https://www.linkedin.com/in/peter-karanja-mwania/' target='_blank'>
            <img src={linkedinIcon} alt="linkedin Icon" />
            </a>
        </span>
        <p className={styles.description}>
        Hey, I'm Peter K. Karanja (pee-kay). I'm a passionate software developer specializing in modern web applications. Currently, I work at <a href="https://silqu.com" target="_blank">Silqu</a>, where I contribute to innovative tech solutions, and I also handle freelance projects. Contact me at <a href="mailto:pkkaranja002@gmail.com">pkkaranja002@gmail.com</a> or <a href="https://x.com/__pkay___" target="_blank">__pkay___</a>.
        </p>
       
        {/* <a href={CV}  download >
            <button className='hover'>
                Resume
            </button>
        </a> */}
    </div>
  </section>
  );
}

export default Hero;
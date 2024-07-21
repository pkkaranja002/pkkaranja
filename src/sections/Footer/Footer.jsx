import styles from './FooterStyles.module.css'

function Footer() {
  return (
  <section id='footer' className={styles.container}>
    <p>&copy;2024 Peter Karanja.<br/>
    All Rights Deserved.
    </p>
  </section>
  );
}

export default Footer
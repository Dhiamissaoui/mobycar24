import Styles from '../styles/Hero.module.css';

function Hero() {
  return (
    <div className={Styles.hero}>
      <div className={Styles.watermark}>MOBYCAR24</div>
      <div className={Styles.hero_content}>
        <div className={Styles.head}>WELCOME TO MOBYCAR24</div>
        <div className={Styles.para}>Lorem ipsum dolor sit amet consectetur. Adipiscing morbi tellus arcu sed morbi. Nibh amet dignissim in ac duis etiam consectetur dolor ultrices. Commodo risus egestas hendrerit morbi mattis ut vitae arcu.</div>
      </div>
    </div>
  );
}

export default Hero;


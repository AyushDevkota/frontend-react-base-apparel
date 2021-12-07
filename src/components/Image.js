import heroMobileImg from "../images/hero-mobile.jpg";
import heroDesktopImg from "../images/hero-desktop.jpg";
import classes from "./Image.module.css";

const Image = () => {
	return (
		<div className={classes.imgArea}>
			<img src={heroMobileImg} alt="hero" className={classes.heroMimg} />
			<img src={heroDesktopImg} alt="hero" className={classes.heroDimg} />
		</div>
	);
};

export default Image;

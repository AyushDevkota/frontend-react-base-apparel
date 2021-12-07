import logo from "../images/logo.svg";
import classes from "./Logo.module.css";

const Logo = () => {
	return (
		<header>
			<div className={classes.logo}>
				<img src={logo} alt="logo" />
			</div>
		</header>
	);
};

export default Logo;

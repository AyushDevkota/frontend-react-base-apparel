import { useState } from "react";
import classes from "./Form.module.css";
import iconArrow from "../images/icon-arrow.svg";
import iconError from "../images/icon-error.svg";

const Form = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const errorClass = error ? classes.error : "";
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
	};

	const formHandler = (e) => {
		e.preventDefault();
		if (email.match(mailformat)) {
			setError(false);
		} else {
			setError(true);
		}
	};

	return (
		<>
			<form onSubmit={formHandler}>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Email Address"
					onChange={emailChangeHandler}
					className={`${errorClass}`}
				/>
				<button
					className={classes.btn}
					style={{
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundImage: `url(${iconArrow}), linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))`,
					}}
					aria-label="submit"
				>
					{error && (
						<img src={iconError} alt="error" className={classes.erroricon} />
					)}
				</button>
			</form>
			{error && (
				<p className={classes.errortext}>Please provide a valid email.</p>
			)}
		</>
	);
};

export default Form;

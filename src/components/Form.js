import { useState } from "react";
import classes from "./Form.module.css";
import iconArrow from "../images/icon-arrow.svg";
import iconError from "../images/icon-error.svg";

const Form = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const errorClass = error ? classes.error : "";

	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
	};

	const formHandler = (e) => {
		e.preventDefault();
		if (email.length < 6 && !email.includes("@")) {
			setError(true);
			return;
		}
		setError(false);
	};

	return (
		<>
			<form onSubmit={formHandler}>
				<input
					type="email"
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

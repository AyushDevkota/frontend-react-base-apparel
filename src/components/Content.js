import classes from "./Content.module.css";
import Form from "./Form";

const Content = () => {
	return (
		<section>
			<div className={classes.content}>
				<div className={classes.title}>
					<span className={classes.highlight}>We're</span>
					<span className={classes.bold}>coming</span>
					<span className={classes.bold}>soon</span>
				</div>
				<p className={classes.text}>
					Hello fellow shoppers! We're currently building our new fashion store.
					Add your email below to stay up-to-date with announcements and our
					launch deals.
				</p>
				<Form />
			</div>
		</section>
	);
};

export default Content;

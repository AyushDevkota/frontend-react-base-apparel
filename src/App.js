import Content from "./components/Content";
import Image from "./components/Image";
import Logo from "./components/Logo";
import classes from "./App.module.css";

function App() {
	return (
		<main className={classes.grid}>
			<Logo />
			<Image />
			<Content />
		</main>
	);
}

export default App;

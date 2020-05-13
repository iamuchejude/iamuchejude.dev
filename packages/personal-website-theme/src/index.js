import Theme from "./components";

const personalWebsiteTheme = {
	name: "personal-website-theme",
	roots: {
		theme: Theme
	},
	state: {
		theme: {
			socials: [
				["TW", "https://twitter.com/iamuchejude"],
				["GT", "https://github.com/iamuchejude"],
				["LN", "https://linkedin.com/in/iamuchejude"],
				["FB", "https://facebook.com/iamuchejude"]
			],
			dark: {
				primaryColor: "#ffffff"
			},
			light: {
				primaryColor: "#141618"
			}
		}
	},
	actions: {},
	libraries: {}
};

export default personalWebsiteTheme;

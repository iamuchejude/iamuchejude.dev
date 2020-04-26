const settings = [
	{
		name: "iamuchejude.dev",
		state: {
			frontity: {
				url: "http://localhost:3000",
				title: "Uche Jude",
				description: "My personal website"
			}
		},
		packages: [
			"raditian-theme",
			"@frontity/tiny-router",
			"@frontity/html2react",
			"@frontity/head-tags",
			{
				name: "@frontity/wp-source",
				state: {
					source: {
						api: "http://iamuchejude.local/wp-json",
						homepage: "/home"
					}
				}
			}
		]
	},
	{
		name: "blog.iamuchejude.dev",
		state: {
			frontity: {
				url: "http://localhost:3001",
				title: "Jude's Blog",
				description: "My personal blog"
			}
		},
		packages: ["@frontity/mars-theme"]
	}
];

export default settings;

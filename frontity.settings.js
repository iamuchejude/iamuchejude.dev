const settings = [
	{
		name: "iamuchejude.dev",
		state: {
			frontity: {
				url: "https://iamuchejude.dev",
				title: "Uche Jude",
				description: "My personal website"
			}
		},
		packages: [
			"personal-website-theme",
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
	}
];

export default settings;

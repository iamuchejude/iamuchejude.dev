import React from 'react';
import { styled, connect } from 'frontity';

import me from '../images/me.svg';
import dots from '../images/dots.svg';

const Home = ({ state, libraries }) => {
	const data = state.source.get(state.router.link);
	const HTML2React = libraries.html2react.Component;
	const page = state.source.page[data.id];

  return (
		<Container>
			<HTML2React html={page.content.rendered} />
		</Container>
	);
};

const Container = styled.section`
	.hero {
		height: 90vh;
	}

	.hero > div {
		height: 100%;

		.row {
			height: 100%;
		}

		.row > div {
			width: 1000px;
			padding: 0em 4.7em 0 2em;
			height: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.hero-about {
				margin-right: 3em;

				h3 {
					font-size: 2.4em;
					font-weight: bold;
					margin: 0;

					&.marked {
						font-size: 2.2em;

						mark {
							color: inherit;
							/* background: */
							background-attachment: initial;
							background-origin: initial;
							background-clip: initial;
							background-color: initial;
							background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
							position: relative;
							background-size: 98% 0.3em;
							padding: 0px;
							background-repeat: no-repeat;
							background-position: 0px 100%;
						}
					}
				}

				#more {
					color: var(--primary-color);
					display: inline-block;
					margin-top: 3em;
				}

				p {
					line-height: 30px;
					margin-top: .8em;

					&:first-of-type {
						margin-top: 2em;
					}
				}
			}

			.hero-image {

				.hero-image-bg {
					width: 350px;
					background: url(${dots});
					background-size: cover;
					background-repeat: no-repeat;

					img {
						/* display: none; */
						transform: translate(15%, -10%);
					}
				}
			}
		}
	}
`;

export default connect(Home);

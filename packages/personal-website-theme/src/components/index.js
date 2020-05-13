import React from "react";
import { styled, connect, Global } from "frontity";

import styles from "../styles";

import Home from "../pages/home";
import Blog from "../pages/blog";
import Error from "../pages/error";

import Loading from "./loading";
import Header from "./header";
import Footer from "./footer";

const HeadTags = ({ tags }) => (
	<>
		{tags.map((tag, index) => {
			if (tag.tag === "title") {
				return <title key={index}>{tag.content}</title>;
			}

			if (tag.tag === "link") {
				return <link key={index} {...tag.attributes} />;
			}

			return <meta key={index} {...tag.attributes} />;
		})}
	</>
);

const Theme = ({ state }) => {
	const data = state.source.get(state.router.link);
	const headTags = state.headTags.get(state.router.link);

	return (
		<Wrapper>
			<HeadTags tags={headTags} />
			<Global styles={styles} />
			<BackgroundText>EAT.SLEEP.CODE</BackgroundText>
			<Header />
			<Main>
				{(data.isFetching && <Loading />) ||
					(state.router.link === "/" && <Home />) ||
					(data.isArchive && <Blog />) ||
					(data.isError && <Error />)}
			</Main>
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
`;

const Main = styled.main`
	height: 1000px;
	margin-top: 5rem;
`;

const BackgroundText = styled.h1`
	font-size: 19em;
	font-weight: bold;
	color: rgba(0, 0, 0, 0.04);
	transform: rotate(-90deg);
	position: fixed;
	opacity: 1;
	z-index: -2;
	top: 3.3em;
	left: -3em;
`;

export default connect(Theme);

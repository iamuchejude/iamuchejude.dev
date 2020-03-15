import { styled, connect } from 'frontity';
import Contact from './contact';

const Footer = ({ state }) => (
  <Section>
    <Contact />
    
    <Container>
      <Socials>
        {/* {state.theme.socials.map(social => (
          <Social key={ Math.trunc(Math.random() * Date.now()) }>
            <a href={ social[1] }>{ social[0] }</a>
          </Social>
        ))} */}
        <Social>
          <a href="https://twitter.com/iamuchejude">TW</a>
        </Social>
        <Social>
          <a href="https://github.com/iamuchejude">GT</a>
        </Social>
        <Social>
          <a href="https://linkedin.com/in/iamuchejude">LN</a>
        </Social>
        <Social>
          <a href="https://facebook.com/iamuchejude">FB</a>
        </Social>
      </Socials>

      <Copyright>
        Copyright { (new Date).getFullYear() } Uche Jude.
      </Copyright>
    </Container>
  </Section>
);

const Section = styled.footer`
  position: relative;
`;

const Container = styled.div`
  background: #141618;
  color: #fff;
  padding: 22em 0 3em;
  text-align: center;
`;

const Socials = styled.ul`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
  }
`;

const Social = styled.li`
  display: inline-block;
  margin: 0 10px;
`;

const Copyright = styled.p`
  margin-top: .8em;
`;

export default connect(Footer);

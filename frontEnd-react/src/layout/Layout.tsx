import { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Header,
  Title,
  Wrapper,
  InnerWrapper,
  Navigation,
} from "./Layout.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className: string;
  title: string;
}

function Layout({ children, className, title, ...rest }: Partial<Props>) {
  return (
    <Container className={className} {...rest}>
      <Header>
        <Title level={1} style={{ margin: 0, color: "#747474" }}>
          {title}
        </Title>

        <Navigation>
          <li>
            <NavLink to="/data">DATA</NavLink>
          </li>
          <li>
            <NavLink to="/chart">CHART</NavLink>
          </li>
        </Navigation>
      </Header>

      <Wrapper>
        <InnerWrapper>{children}</InnerWrapper>
      </Wrapper>
    </Container>
  );
}

export default Layout;

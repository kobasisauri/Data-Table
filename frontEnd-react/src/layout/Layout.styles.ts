import styled from "styled-components";
import { Row, Typography } from "antd";

export const Container = styled(Row)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f7f7f7;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  background: #fff;
  box-shadow: 0 5px 10px 0 rgb(82 63 105 / 3%);

  padding: 0.7rem 1rem;

  @media (min-width: ${1000}px) {
    padding: 0.7rem 1.8rem;
  }
`;

export const Title = styled(Typography.Title)``;

export const Wrapper = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  position: relative;
  padding: 1.25rem 1rem;
  height: 100%;
`;

export const Navigation = styled.ul`
  display: flex;
  list-style: none;

  li a {
    margin-left: 10px;
    color: #000;

    &:hover {
      color: rgb(116, 116, 116);
    }

    &.active {
      color: #1677ff;
    }
  }
`;

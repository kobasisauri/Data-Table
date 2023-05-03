import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  margin-bottom: 1rem;

  .ant-card-body {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      height: 3.5rem;
      background-color: rgba(#aaa, 0.6);
      background-clip: content-box;
      border: 0.25rem solid transparent;
      border-radius: 0.5rem;

      &:hover {
        background-color: rgba(#aaa, 0.8);
      }
    }
  }
`;

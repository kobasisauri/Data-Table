import styled from "styled-components";
import { Button, Input } from "antd";

export const StyledInput = styled(Input)`
  border: 1px solid #eff1f4;
  border-radius: 0.25rem;
  outline: none;
  box-shadow: none !important;

  color: 5e6278;

  &:hover,
  &:focus-within {
    border-color: #e99ab0;
  }
`;

export const SelectWrapper = styled.div`
  label {
    display: block;
  }

  .ant-select {
    width: 100%;

    .ant-select-selector {
      border: 1px solid #eff1f4;
    }
  }

  .ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector,
  .ant-select:hover .ant-select-selector {
    border-color: #e99ab0 !important;
    box-shadow: none !important;
  }
`;

export const CancelButton = styled(Button)`
  margin-left: 10px;
`;

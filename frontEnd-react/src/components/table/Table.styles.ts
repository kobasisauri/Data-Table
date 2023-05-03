import styled from "styled-components";

export const TableWrapper = styled.div`
  .ant-table-wrapper table {
    position: relative;
  }

  .table-responsive .ant-table-content {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 12px;
      height: 13px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 3px solid transparent;
      background-clip: content-box;
      background-color: rgba(99, 99, 99, 0.4);
      &:hover {
        background-color: rgba(#aaa, 0.3);
      }
    }
  }

  .ant-table-body {
    &::-webkit-scrollbar {
      width: 12px;
      height: 13px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 3px solid transparent;
      background-clip: content-box;
      background-color: rgba(99, 99, 99, 0.4);
      &:hover {
        background-color: rgba(#aaa, 0.3);
      }
    }
  }

  .ant-table-thead {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  .table-responsive .ant-table-content {
    max-height: 50vh;
  }

  .ant-table-cell.sticky-column {
    position: sticky;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .ant-table-cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 200px;
    &:hover {
      text-overflow: clip;
      white-space: normal;
      word-break: break-all;
    }
  }
`;

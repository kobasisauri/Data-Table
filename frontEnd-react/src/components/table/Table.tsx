import { Button, Table } from "antd";
import useStore, { DataType } from "../../stores/store";
import useValuesStore from "../../stores/ValuesStore";
import { TableWrapper } from "./Table.styles";
import axios from "axios";

function DataTable() {
  const { data, modal, setModal, setData } = useStore((state) => state);
  const { setValues } = useValuesStore((state) => state);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 250,
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (_value: string, record: DataType) => {
        return `${record.address.city}, ${record.address.street}`;
      },
      width: 250,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: 100,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: 200,
    },
    {
      title: "Delete",
      dataIndex: "deleteButton",
      render: (_value: string, record: DataType) => {
        return (
          <Button
            aria-label="delete"
            type="primary"
            danger
            ghost
            onClick={
              () => handleSubmit(record.id)
              // remove(record.id)
            }
          >
            Delate
          </Button>
        );
      },
      width: 100,
    },
  ];

  const handleSubmit = (id: number) => {
    axios
      .post(
        "http://localhost:8080/data/delete",
        { id: id },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(({ data }) => {
        setData(data.data);
      });
  };

  const editHandler = (id: number) => {
    setModal(!modal);
    setValues(data.filter((item) => item.id === id)[0]);
  };

  return (
    <TableWrapper>
      <div className="table-responsive components-table-demo-nested">
        <Table
          columns={columns}
          dataSource={
            (data.length && data.map((item) => ({ ...item, key: item.id }))) ||
            []
          }
          onRow={(record: DataType) => {
            return {
              onDoubleClick: () => editHandler(record.id),
            };
          }}
          size="small"
          scroll={{ y: "calc(100vh - 109px)" }}
        />
      </div>
    </TableWrapper>
  );
}

export default DataTable;

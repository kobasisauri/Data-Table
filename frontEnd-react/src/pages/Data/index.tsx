import { Button, Row } from "antd";
import { Table, FormModal } from "../../components";
import useStore from "../../stores/store";
import { StyledCard } from "./styles";

function Data() {
  const { modal, setModal } = useStore((state) => state);

  const toggle = () => setModal(!modal);

  return (
    <>
      <StyledCard>
        <Row justify="end" style={{ marginBottom: "1rem" }}>
          <Button type="primary" size="large" onClick={toggle}>
            Add
          </Button>
        </Row>

        <Table />
      </StyledCard>

      <FormModal onClose={() => setModal(false)} />
    </>
  );
}

export default Data;

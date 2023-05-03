import { Select, Button, Row, Col, Modal, Form } from "antd";
import useStore from "../../stores/store";
import axios from "axios";
import useValuesStore, { ValuesType } from "../../stores/ValuesStore";
import { StyledInput, SelectWrapper, CancelButton } from "./Modal.styles";

function FormModal({ onClose }: { onClose: () => void }) {
  const [form] = Form.useForm();
  const { Option } = Select;

  const { data, edit, modal, setData } = useStore((state) => state);
  const { values, setValues } = useValuesStore((state) => state);

  // const addData = (values: ValuesType) => setData([...data, values]);

  const clear = () => {
    setValues({
      name: "",
      email: "",
      address: { city: "", street: "" },
      gender: "",
      phone: "",
      id: 0,
    });
  };

  const handleSubmit = () => {
    // values.id
    //   ? edit(values)
    //   : addData({
    //       ...values,
    //       id: data[data.length - 1].id + 1,
    //     });
    if (values.id) {
      // edit
      axios
        .post("http://localhost:8080/data/edit", JSON.stringify(values), {
          headers: { "Content-Type": "application/json" },
        })
        .then(({ data }) => {
          setData(data.data);
        });
    } else {
      // add
      axios
        .post("http://localhost:8080/data/add", JSON.stringify(values), {
          headers: { "Content-Type": "application/json" },
        })
        .then(({ data }) => {
          setData(data.data);
        });
    }
    onClose();
    clear();
  };

  const handleClose = () => {
    onClose();
    form.resetFields();
    clear();
  };

  return (
    <Modal
      open={modal}
      onOk={handleClose}
      onCancel={handleClose}
      title={values.id ? "Edit User" : "Add User"}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
        fields={[
          { name: "name", value: values.name },
          { name: "email", value: values.email },
          { name: "city", value: values.address.city },
          { name: "street", value: values.address.street },
          { name: "gender", value: values.gender },
          { name: "phone", value: values.phone },
        ]}
      >
        <Row gutter={{ xs: 8, sm: 16 }} style={{ marginBottom: "1rem" }}>
          <Col span={12}>
            <Form.Item
              label="Name:"
              name="name"
              rules={[{ required: true, message: "Name is required Field" }]}
            >
              <StyledInput
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <SelectWrapper>
              <Form.Item
                label="Gender:"
                name="gender"
                rules={[
                  { required: true, message: "Gender is required Field" },
                ]}
              >
                <Select
                  value={values.gender}
                  onChange={(value) => setValues({ ...values, gender: value })}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
            </SelectWrapper>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16 }} style={{ marginBottom: "1rem" }}>
          <Col span={12}>
            <Form.Item
              label="Phone:"
              name="phone"
              rules={[
                { required: true, message: "Phone is required Field" },
                {
                  message: "Please enter valid data",
                },
              ]}
            >
              <StyledInput
                type="text"
                placeholder="Phone"
                value={values.phone}
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Email:"
              name="email"
              rules={[
                { required: true, message: "Email is required Field" },
                {
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter valid data",
                },
              ]}
            >
              <StyledInput
                type="text"
                placeholder="Email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16 }} style={{ marginBottom: "1rem" }}>
          <Col span={12}>
            <Form.Item
              label="City:"
              name="city"
              rules={[{ required: true, message: "City is required Field" }]}
            >
              <StyledInput
                type="text"
                placeholder="city"
                value={values.address.city}
                onChange={(e) =>
                  setValues({
                    ...values,
                    address: { ...values.address, city: e.target.value },
                  })
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Street:"
              name="street"
              rules={[{ required: true, message: "Street is required Field" }]}
            >
              <StyledInput
                type="text"
                placeholder="street"
                value={values.address.street}
                onChange={(e) =>
                  setValues({
                    ...values,
                    address: { ...values.address, street: e.target.value },
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end">
          <Button htmlType="submit" type="primary">
            Save
          </Button>

          <CancelButton
            type="primary"
            htmlType="button"
            danger
            ghost
            onClick={handleClose}
          >
            Cancel
          </CancelButton>
        </Row>
      </Form>
    </Modal>
  );
}

export default FormModal;

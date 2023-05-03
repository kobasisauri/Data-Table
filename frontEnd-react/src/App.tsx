import { useEffect } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import axios from "axios";
import useStore, { DataType } from "./stores/store";
import Layout from "./layout";
import Data from "./pages/Data";
import Chart from "./pages/Chart";

function App() {
  const { setData } = useStore((state) => state);

  // get data
  useEffect(() => {
    axios
      .get<{ data: DataType[] }>("http://localhost:8080/data/get")
      .then(({ data }) => {
        setData(data.data);
      });
  }, [setData]);

  return (
    <Layout title="Data Base">
      <Routes>
        <Route path="/" element={<Navigate replace to="/data" />} />

        <Route path="/">
          <Route path="/data" element={<Data />} />
          <Route path="/chart" element={<Chart />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;

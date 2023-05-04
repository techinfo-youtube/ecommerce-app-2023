import React from "react";
import Layout from "./../components/Layout/Layout";
// import {} from '';
import { useAuth } from "../Context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth()

  return (
    <Layout>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;

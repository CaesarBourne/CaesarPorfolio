import React from "react";
import styled from "styled-components";
// import "./index.css";
import img from "../../Assets/pre.svg";

type loaderType = {
  loading: boolean;
};
const Loader = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: #021818eb;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
}
`;
const Noload = styled.div`
  opacity: 0;
`;
const Apploader = ({ loading }: loaderType) => {
  const LoadStatus = loading ? <Loader /> : <Noload />;

  return LoadStatus;
};

export default Apploader;

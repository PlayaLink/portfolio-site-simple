import styled from "styled-components";

export const Progress = styled.div`
  position: fixed;
  top: ${props => props.top};
  background: linear-gradient(
    to right,
    #e7530b ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 10px;
  z-index: 100;
`;


export const ProgressBackground = styled.div`
  display: ${props => !!props.hide ? "none" : "block"}
  position: fixed;
  top: ${props => props.top};
  background: linear-gradient(
    to right,
    #d8d8d8 ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 10px;
  z-index: 99;
`;


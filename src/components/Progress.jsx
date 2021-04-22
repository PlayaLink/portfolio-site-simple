import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  top: ${props => props.top};
  background: linear-gradient(
    to right,
    #e7530b ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 5px;
  z-index: 100;
`;

export default Progress;

import styled from "styled-components";

const SideBar = styled.nav`
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 180px;
  transition: width 0.35s ease-in-out;
  background: linear-gradient(
    182.91deg,
    #ffb06b 0,
    #d27b19 24.48%,
    #d07f34 50%,
    #ce710b 72.83%,
    #c75f06 95.83%
  );
  > .nav {
    margin-top: 40vh;
    > h1 {
      color: #fff;
      cursor: pointer;
      margin-top: 0;
      font: 700 20px/24px Inter, Arial, sans-serif;
    }
    > .links {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }
`;

export default SideBar;

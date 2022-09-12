import styled from "styled-components";

const WeatherWrapper = styled.div`
  padding: 16px;
  .countrySelect {
    width: 300px;
    height: 30px;
    border-color: #fbac64;
    border-radius: 2px;
  }

  .sections {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 50px;
    section {
      background-color: #fff;
      box-shadow: 0px 0px 5px 0px #ca67084d;
      border-radius: 5px;
      margin: 10px;
      padding: 15px 10px;
      &:hover {
        box-shadow: 0px 0px 13px 0px #ca67084d;
      }
      .text-grey {
        color: grey;
        font-weight: 500;
      }
    }
  }
`;

export { WeatherWrapper };

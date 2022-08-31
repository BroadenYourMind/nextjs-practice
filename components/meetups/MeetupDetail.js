import { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

function MeetupDetail(props) {
  return (
    <Wrapper>
      <Image src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </Wrapper>
  );
}

export default MeetupDetail;

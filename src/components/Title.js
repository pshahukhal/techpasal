import React from "react";
import styled from "styled-components";

export default function Title({title,center}){
  return <TitleWrapper className="row" center={center}>
 <div className="col">
 <h2 className="text-tile" >{title} </h2>
 </div>
 </TitleWrapper>

}

const TitleWrapper = styled.div`
 text-align:${props => props.center?"center":"left"};
 margin:${props => props.center?"0 auto":"0"};
 text-transform: capitalize

}
`;

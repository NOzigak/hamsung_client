import styled from "styled-components";
import { getStudyImage } from "../../utils/get-study-image";

export const CardWrapper = styled.div`
    background-image: url(${(props) => getStudyImage(props.category)});
    background-size: cover;
    box-shadow: 2vh 2vh 3vh rgba(0, 0, 0, 0.2);
    border-radius: 3vh;

    width: 23vw;
    height: 29vh;
    margin-top: 5vh;
    cursor : pointer;
`
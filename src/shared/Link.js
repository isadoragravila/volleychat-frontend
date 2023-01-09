import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
    color: #f2f2f2;
    font-size: 16px;
    text-decoration-line: underline;
    font-family: 'Poppins';
    margin-top: 40px;
    margin-bottom: 20px;
    
    @media (max-width: 611px) {
        font-size: 14px;
    }
`;
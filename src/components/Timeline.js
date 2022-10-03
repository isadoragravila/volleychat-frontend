import styled from "styled-components";
import FeedCard from "./FeedCard";

export default function Timeline() {
    const posts = [];

    return (
        <>
            {posts.length === 0 ? (
                <Informative>
                    <p>There aren't any post yet! Create a chat room or join one!</p>
                </Informative>
            ) : (
                "tchau"
            )}
        </>
    )
}

const Informative = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    p {
        font-family: "Poppins";
        font-weight: 400;
        line-height: 24px;
        font-size: 20px;
        color: #142b73;
        text-align: center;
        width: 300px;
    }
    @media (max-width: 611px) {
        p {
            font-size: 18px;
            max-width: 300px;
        }
    }
`


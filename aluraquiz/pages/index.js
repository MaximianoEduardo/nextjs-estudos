import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";

const Background = styled.div`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
`;

const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    }
`;

export default function Home() {
    return (
        <Background>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1> The legend of zelda </h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p> Lorem ipsum </p>
                    </Widget.Content>
                </Widget>
                <Widget>
                    <h1> The legend of zelda </h1>

                    <p> Lorem ipsum </p>
                </Widget>
            </QuizContainer>
        </Background>
    );
}

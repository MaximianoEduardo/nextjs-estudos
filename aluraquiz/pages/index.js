import styled from "styled-components";
import db from "../db.json";

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

const Widget = styled.div`
    margin: 0 24px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: #1c1814;
    border-radius: 4px;
    overflow: hidden;

    h1,
    h2,
    h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
    }
`;

Widget.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.primary};
    * {
        margin: 0;
    }
`;

Widget.Content = styled.div`
    padding: 24px 32px 32px;
    & > *:last-child,
    & > *:first-child {
        margin-top: 0;
    }

    ul {
        list-style: none;
        padding: 0;
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

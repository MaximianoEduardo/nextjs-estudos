import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer'
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import InputBase from '../src/components/InputBase'
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>
                {db.title}
              </h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(e) => {
                e.preventDefault();

                router.push(`/quiz?name=${name}`);
              }}
              >
				<InputBase onChange={(e) => {
                    setName(e.target.value);
                  }} placeholder="Diz ai seu nome pra jogar :)" name="nomeDoUsuario" value={name} />
				<Button type='submit' disabled={name.length === 0}> {`Jogar ${name} `} </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/MaximianoEduardo" />
      </QuizBackground>
    </>
  );
}

 /* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import db from '../db.json'
import QuizContainer from '../src/components/QuizContainer'
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import Button from '../src/components/Button'


const LoadingWidget = () => {
	return(
		<Widget>
			<Widget.Header>
				Carregando...
			</Widget.Header>
			<Widget.Content>
				[Desafio do Loading]
			</Widget.Content>
		</Widget>
	)
}

const ResultWidget = ({ results }) => {

return(
		<Widget>
			<Widget.Header>
				Parabens
			</Widget.Header>
			<Widget.Content>
				<p> Você acertou 
					{' '}
					{ results.filter((x) => x).length }
					{' '}
					perguntas! </p>
				<ul>
					{
						results.map((result, index) => (
							<li key={index}>
								# {index + 1} {' '} Resultado:
								{ result === true 
								  ? ' Acertou' 
								  : ' Errou'
								}	
							</li>

						))
					}
					
				</ul>
			</Widget.Content>
		</Widget>
	)



}

const QuestionWidget = ({ question, questionIndex, totalQuestions, onSubmit, addResults }) =>{

	const [selectedAlternative, setSelectedAlternative] = useState(undefined)
	const [ isQuestionSubmited, seIsQuestionSubmited ] = useState(false)
	const hasAlternativeSelected = selectedAlternative !== undefined
	const questionId = `question__${questionIndex}`
	const isCorrect = selectedAlternative === question.answer

	return(
		<Widget>
            <Widget.Header>
				{/* <BackLinkArrow href="/" /> */}
                <h3>
					{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
				</h3>
            </Widget.Header>
			<img
				alt="Descrição"
				style={{
				width: '100%',
				height: '150px',
				objectFit: 'cover',
				}}
				src={question.image}
			/>
            <Widget.Content>
				<h2>
					{question.title}
				</h2>
				<p>
					{question.description}
				</p>
				<form
					onSubmit={(ev) => {
						ev.preventDefault()
						seIsQuestionSubmited(true)
						setTimeout(() => {
							addResults(isCorrect)
							onSubmit()
							seIsQuestionSubmited(false)
							setSelectedAlternative(undefined)
						}, 2 * 1000)
						
					}}
				>
				{question.alternatives.map((alternative, alternativeIndex) => {
					const alternativeId = `alternative__${alternativeIndex}`
					return (
					<Widget.Topic
						as="label"
						htmlFor={alternativeId}
						key={alternativeId}
					>
						<input
						id={alternativeId}
						name={questionId}
						type="radio"
						onChange={ () => {
							setSelectedAlternative(alternativeIndex)
						}}
						/>
						{alternative}
					</Widget.Topic>
					)
				})}

				
				<Button type="submit" disable={!hasAlternativeSelected}>
					Confirmar
				</Button>

				{ isQuestionSubmited && isCorrect && <p>Você acertou! </p> }
				{ isQuestionSubmited && !isCorrect && <p>Você errou! </p> }

				</form>
            </Widget.Content>
          </Widget>
	)


}

const screenStates = {

	QUIZ: 'QUIZ',
	LOADING: 'LOADING',
	RESULT: 'RESULT',

}

export default function QuizPage() {

	const [screenState, setScreenState] = useState(screenStates.QUIZ)
	const [ results, setResults ] = useState([])
	const totalQuestions = db.questions.length
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const questionIndex = currentQuestion
	const question = db.questions[questionIndex]

	const addResults = result => {

		setResults([
			...results,
			result
		])

	}


	useEffect(() => {
		setTimeout( () => {

			setScreenState(screenStates.QUIZ)
	
		}, 1 * 1000)
	}, [])

	const handleSubmit = () => {

		const nextQuestion = questionIndex + 1

		if (nextQuestion < totalQuestions) {
		  setCurrentQuestion(nextQuestion)
		} else {
		  setScreenState(screenStates.RESULT)
		}

	}
	
	return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
		  {screenState === screenStates.QUIZ && (
			  <QuestionWidget  
				 question={question}
				 questionIndex={questionIndex}
				 totalQuestions={totalQuestions}
				 onSubmit={handleSubmit}
				 addResults={addResults}
			  />)
		  }
		  {screenState === screenStates.LOADING && <LoadingWidget />}

		  {screenState === screenStates.RESULT && <ResultWidget results={results} />}
		  
        </QuizContainer>
      </QuizBackground>
    </>
  )
}

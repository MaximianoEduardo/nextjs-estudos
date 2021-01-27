import styled from 'styled-components';

const Widget = styled.div`
    margin: 24px 0;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
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

	form{
		display: flex;
		flex-direction: column;
		width: 100%;

		input{
			height: 36px;
			padding-left: 15px;
			border: 1px solid ${({ theme }) => theme.colors.contrastText};
			border-radius: 3.5px;
			background: transparent;
			color: ${({ theme }) => theme.colors.contrastText};
			font-weight: 400;
			font-size: 14px;
			letter-spacing: 0.15px;
		}

		button{
			margin-top: 25px;
			height: 36px;
			border: none;
			border-radius: ${({ theme }) => theme.borderRadius};
			background-color: ${({ theme }) => theme.colors.primary};
			font-weight: 700;
			color: ${({ theme }) => theme.colors.contrastText};
			font-size: 14px;
			letter-spacing: 1.25px;
			transition: 300ms ease-in;
		}

		button:disabled,
		button[disabled]{
			background: #979797;
		}

	}

    
`;

export default Widget;

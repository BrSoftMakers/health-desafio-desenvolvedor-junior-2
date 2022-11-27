import styled from 'styled-components';

export const CreatePetPageContainer = styled.div`
	padding-bottom: 200px;

	h2 {
		text-align: center;
	}
`;

export const CreatePetFormWrapper = styled.div`
	width: 90%;
	margin: 3rem auto 0 auto;
`;

export const CreatePetForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding: 20px 50px 50px 50px;
	margin: 20px auto 0 auto;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: white;
	box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.1);

	h3{
		text-align: center;
		margin-bottom: 1rem;
	}

	select {
		width: 200px;
		padding: 5px;
		margin-bottom: .5rem;
	}

	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button{
 		-webkit-appearance: none;
 		margin: 0;
		-moz-appearance: textfield;
	}

	input[type="submit"]{
		border: none;
		border: 1px solid #ccc;
		padding: 10px;
		font-weight: 700;
		font-size: 1rem;
		transition: .2s ease-in-out;
		border-radius: 8px;
		margin-top: 1.5rem;

		&:hover{
			background-color: #ccc;
		}
	}

	@media (max-width: 768px) {
		padding: 20px;
		width: 90%;
	}

`;

export const InputLabel = styled.label`
	font-weight: 500;
	margin-bottom: .2rem;
`;

export const FormInput = styled.input`
	width: 95%;
	border: none;
	border-bottom: 1px solid #ccc;
	padding: 10px;
	margin-bottom: 10px;

	&:focus {
		outline: 1px solid #ccc;
		border: none;
		border-radius: 8px;
	}
`;

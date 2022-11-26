import styled from 'styled-components';

export const PetsPageContainer = styled.div`
	width: 100vw;
	max-width: 100%;
	height: calc(100vh - 80px);
`;

export const LoadingMessage = styled.p`
	text-align: center;
`;

export const PetCardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0 20px;

	> div {
		border: 1px solid black;
		width: 200px;
		padding: 10px;
		transition: .2s ease-in-out;

		.buttons-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			margin-top: 20px;

			button {
				border: none;
				border: 1px solid #ccc;
				padding: 8px 14px;
				font-weight: 700;
				transition: .2s ease-in-out;
				border-radius: 8px;
			}

			.edit-button:hover {
				background-color: #000;
				color: #fff;
			}

			.delete-button:hover {
				background-color: #d11a2a;
				color: #fff;
			}
		}

		&:hover {
			transform: scale(1.05);
		}

		h3 {
			text-align: center;
			margin-bottom: 1rem;
		}
	}
`;

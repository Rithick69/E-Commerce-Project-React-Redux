/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

const ProdImg = ({ imgs = [{ url: '' }] }) => {
	const [mainImg, setMainImg] = useState(imgs[0]);
	return (
		<Wrapper>
			<div className="grid grid-four-column">
				{imgs.map((curr, idx) => {
					return (
						<figure key={idx}>
							<img
								src={curr.url}
								alt={curr.filename}
								className="box-image--style"
								onClick={() => setMainImg(curr)}
							/>
						</figure>
					);
				})}
			</div>

			{/* 2nd column  */}

			<div className="main-image">
				<img src={mainImg.url} alt={mainImg.filename} />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 0.4fr 1fr;
	gap: 1rem;

	.grid {
		flex-direction: row;
		justify-items: center;
		align-items: center;
		width: 100%;
		gap: 1rem;

		img {
			max-width: 100%;
			max-height: 100%;
			background-size: cover;
			object-fit: contain;
			cursor: pointer;
			box-shadow: ${({ theme }) => theme.colors.shadow};
		}
	}

	.grid-four-column {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 1fr);
	}

	.main-image {
		display: grid;
		place-items: center;
		order: 1;

		img {
			max-width: 100%;
			height: auto;
			box-shadow: ${({ theme }) => theme.colors.shadow};
		}
	}

	@media (max-width: ${({ theme }) => theme.media.mobile}) {
		display: flex;
		flex-direction: column;
		order: 1;

		.grid-four-column {
			grid-template-rows: 1fr;
			grid-template-columns: repeat(4, 1fr);
		}
	}
`;

export default ProdImg;

import { styled } from 'styled-components';

const Contact = () => {
	// In Vite inorder to import data from env file we write the below code.
	const FORM_KEY = import.meta.env.VITE_FORMSPREE_KEY;

	const Form_URL = `https://formspree.io/f/${FORM_KEY}`;
	return (
		<Wrapper className="section">
			<h2 className="common-heading">Feel Free to Contact Us</h2>
			<iframe
				title="location"
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7217.254268093251!2d88.34135211806192!3d22.53702880433989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1690654983562!5m2!1sen!2sin"
				width="100%"
				height="450"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
			<div className="container">
				<div className="contact-form">
					<form action={Form_URL} method="POST" className="contact-inputs">
						<input
							type="text"
							name="Username"
							placeholder="Username"
							autoComplete="off"
							required
						/>
						<input
							type="email"
							name="Email"
							placeholder="Email"
							autoComplete="off"
							required
						/>
						<textarea
							name="message"
							cols="30"
							rows="6"
							autoComplete="off"
							required
						></textarea>
						<input type="submit" value="send" />
					</form>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 9rem 0 5rem 0;

	h2 {
		text-align: center;
	}

	.container {
		margin-top: 6rem;
		text-align: center;

		.contact-form {
			max-width: 50rem;
			margin: auto;
		}

		.contact-inputs {
			display: flex;
			flex-direction: column;
			gap: 3rem;

			input[type='submit'] {
				cursor: pointer;
				transition: all 0.2s;

				&:hover {
					background-color: ${({ theme }) => theme.colors.white};
					border: 1px solid ${({ theme }) => theme.colors.btn};
					color: ${({ theme }) => theme.colors.btn};
					transform: scale(0.9);
				}
			}
		}
	}
`;

export default Contact;

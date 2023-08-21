// import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button } from '../styles/Button';
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	const Wrapper = styled.section`
		.contact-short {
			max-width: 60vw;
			margin: auto;
			padding: 5rem 10rem;
			background-color: ${({ theme }) => theme.colors.bg};
			border-radius: 1rem;
			box-shadow: ${({ theme }) => theme.colors.shadowSupport};
			transform: translateY(50%);

			.grid div:last-child {
				justify-self: end;
				align-self: center;
			}
		}

		footer {
			padding: 14rem 0 9rem 0;
			background-color: ${({ theme }) => theme.colors.footer_bg};

			h3 {
				color: ${({ theme }) => theme.colors.hr};
				margin-bottom: 2.4rem;
			}

			p {
				color: ${({ theme }) => theme.colors.white};
			}

			.footer-social--icons {
				display: flex;
				gap: 2rem;

				div {
					padding: 1rem;
					border-radius: 50%;
					border: 2px solid ${({ theme }) => theme.colors.white};
				}

				.icons {
					color: ${({ theme }) => theme.colors.white};
					font-size: 2.4rem;
					position: relative;
					cursor: pointer;
				}
			}
		}

		.footer-bottom--section {
			padding-top: 9rem;

			hr {
				margin-bottom: 2rem;
				color: ${({ theme }) => theme.colors.hr};
				height: 0.1px;
			}
		}

		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			.contact-short {
				max-width: 95vw;
				padding: 2rem 0rem;
				display: flex;

				justify-content: center;
				align-items: center;

				.grid div:last-child {
					justify-self: flex-start;
					align-self: center;
				}
			}

			.footer-bottom--section {
				padding-top: 3rem;
			}
		}
	`;
	return (
		<Wrapper>
			<section className="contact-short">
				<div className="grid grid-two-column">
					<div>
						<h3>Ready to get started ?</h3>
						<h3>Talk to us today</h3>
					</div>
					<div className="contact-short-btn">
						<NavLink to="/">
							<Button>Get Started</Button>
						</NavLink>
					</div>
				</div>
			</section>

			{/* Footer Section */}
			<footer>
				<div className="container grid grid-four-column">
					<div className="footer-about">
						<h3>Rithick Chowdhury</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<div className="footer-subscribe">
						<h3>Subscribe to get important updates.</h3>
						<form>
							<input
								type="email"
								name="email"
								id="email"
								required
								autoComplete="off"
								placeholder="email"
							/>
							<input type="submit" value="Subscribe" />
						</form>
					</div>
					<div className="footer-social">
						<h3>Follow Us</h3>
						<div className="footer-social--icons">
							<div>
								<FaDiscord className="icons" />
							</div>
							<div>
								<FaInstagram className="icons" />
							</div>
							<div>
								<FaYoutube className="icons" />
							</div>
						</div>
					</div>
					<div className="footer-contact">
						<h3>Contact Us</h3>
						<h3>+91 12234343445</h3>
					</div>
				</div>

				{/* bottom section */}

				<div className="footer-bottom--section">
					<hr />
					<div className="container grid grid-two-column">
						<p>
							@{new Date().getFullYear()} Rithick Chowdhury. All Rights Reserved
						</p>
						<div>
							<p>PRIVACY POLICY</p>
							<p>TERMS & CONDITIONS</p>
						</div>
					</div>
				</div>
			</footer>
		</Wrapper>
	);
};

export default Footer;

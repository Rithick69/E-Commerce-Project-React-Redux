import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { CgMenu, CgClose } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		function updateSize() {
			openMenu && window.innerWidth <= '998'
				? (document.getElementsByTagName('html')[0].style.overflow = 'hidden')
				: (document.getElementsByTagName('html')[0].style.overflow = 'auto');
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, [openMenu]);

	const Nav = styled.nav`
		.navbar-list {
			display: flex;
			gap: 4.8rem;
			align-items: center;

			li {
				list-style: none;

				.navbar-link {
					&:link,
					&:visited {
						display: inline-block;
						text-decoration: none;
						font-size: 1.8rem;
						font-weight: 500;
						text-transform: uppercase;
						color: ${({ theme }) => theme.colors.black};
						transition: color 0.1s linear;
					}
					&:hover,
					&:active {
						color: ${({ theme }) => theme.colors.helper};
					}
				}
			}
		}

		.mobile-navbar-btn {
			display: none;
			background-color: transparent;
			cursor: pointer;
			border: none;

			.close-outline {
				display: none;
			}
		}

		.mobile-navbar-btn[name='close-outline'] {
			display: none;
		}

		.cart-trolley--link {
			position: relative;

			.cart-trolley {
				position: relative;
				font-size: 3.2rem;
			}

			.cart-total--item {
				width: 2.5rem;
				height: 2.4rem;
				position: absolute;
				color: #fff;
				border-radius: 50%;
				display: grid;
				place-items: center;
				top: -30%;
				left: 70%;
				text-align: center;
				background-color: red;
			}
		}

		.user-login--name {
			text-transform: capitalize;
		}

		.user-logout,
		.user-login {
			font-size: 1.4rem;
			padding: 0.8rem 1.4rem;
		}

		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			.mobile-navbar-btn {
				display: inline-block;
				z-index: 999;
				border: ${({ theme }) => theme.colors.black};

				.mobile-nav-icon {
					font-size: 4.2rem;
					color: ${({ theme }) => theme.colors.black};
				}
			}

			/* hide the original nav menu  */

			.navbar-list {
				width: 100vw;
				height: 100vh;
				position: fixed;
				z-index: 999;
				top: 0;
				left: 0;
				overflow-x: hidden;
				transition: 0.5s;
				background-color: #fff;

				display: flex;
				flex-grow: 1;
				justify-content: center;
				align-content: center;
				flex-direction: column;
				text-align: center;

				visibility: hidden;
				opacity: 0;

				transform: translateX(100%);
				transition: all 3s linear;

				li {
					.navbar-link {
						&:link,
						&:visited {
							font-size: 4.2rem;
						}

						&:hover,
						&:active {
							color: ${({ theme }) => theme.colors.helper};
						}
					}
				}
			}

			.active .mobile-nav-icon {
				display: none;
				font-size: 4.2rem;
				position: absolute;
				top: 3%;
				right: 10%;
				color: ${({ theme }) => theme.colors.black};
				z-index: 9999;
			}

			.active .close-outline {
				display: inline-block;
			}

			.active .navbar-list {
				visibility: visible;
				opacity: 1;
				transform: translateX(0);
				z-index: 9999;
				transform-origin: right;
				transition: all 3s linear;
			}

			.cart-trolley--link {
				position: relative;

				.cart-trolley {
					position: relative;
					font-size: 5.2rem;
				}

				.cart-total--item {
					width: 4.2rem;
					height: 4.2rem;
					font-size: 2rem;
				}
			}

			.user-logout,
			.user-login {
				font-size: 2.2rem;
				padding: 0.8rem 1.4rem;
			}
		}
	`;
	return (
		<Nav>
			<div className={openMenu ? 'menuIcon active' : 'menuIcon'}>
				<ul className="navbar-list">
					<li>
						<NavLink
							className="navbar-link"
							to="/"
							onClick={() => setOpenMenu(false)}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navbar-link"
							to="/about"
							onClick={() => setOpenMenu(false)}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navbar-link"
							to="/products"
							onClick={() => setOpenMenu(false)}
						>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navbar-link"
							to="/contact"
							onClick={() => setOpenMenu(false)}
						>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navbar-link cart-trolley--link"
							to="/cart"
							onClick={() => setOpenMenu(false)}
						>
							<FiShoppingCart className="cart-trolley" />
							<span className="cart-total--item">10</span>
						</NavLink>
					</li>
				</ul>
				<div className="mobile-navbar-btn">
					<CgMenu
						name="menu-outline"
						className="mobile-nav-icon"
						onClick={() => setOpenMenu(true)}
					/>
					<CgClose
						name="close-outline"
						className="close-outline mobile-nav-icon"
						onClick={() => setOpenMenu(false)}
					/>
				</div>
			</div>
		</Nav>
	);
};

export default Navbar;

import React from 'react'
import styled from 'styled-components'
import { Button } from './Styles/Button';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className="container">
                <div>
                    <h2>404</h2>
                    <h3>UH OH! You're lost.</h3>
                    <p>The page your are looking for does not exist. How you get here is a mystery. But you can click the button below to go back to the homepage</p>

                    <NavLink to="/">
                        <Button>
                            Go back to Home
                        </Button>
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .container{
        padding : 9rem 0;
        text-align : center;

        h2{
            font-size : 10rem;
        }

        h3{
            font-size : 4.2rem;
        }

        p{
            margin : 2rem 0;
        }
    }
`;


export default ErrorPage
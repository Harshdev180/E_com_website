import React from 'react'
import styled from 'styled-components'

const Contact = () => {

    const Wrapper = styled.section`

        padding: 9rem 0 5rem 0;
        text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
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
    }
    `;

    return (
        <Wrapper>
            <h2 className='common-heading'>Contact Page</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8944337499584!2d77.35516911810673!3d28.572932554135136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54f9f9059e3%3A0xe745316aa9898ea5!2sLogix%20Mall%2C%20Wave%20City%20Centre!5e0!3m2!1sen!2sin!4v1744089992377!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>

            <div className='container'>
                <div className='contact-form'>
                    <form action="https://formspree.io/f/xeoapnwn" method='POST' className='contact-inputs'>
                        <input type='text' placeholder='username' name='username' required autoComplete='off' value="" />

                        <input type='email' placeholder='Email' name='Email' required autoComplete='off' value="" />

                        <textarea name='Message' cols="30" rows="10" required autoComplete='off' placeholder='Enter your message'></textarea>

                        <input type='submit' value="send" />
                    </form>
                </div>
            </div>


        </Wrapper>
    )
}

export default Contact
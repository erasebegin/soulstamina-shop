import React from 'react'
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          <article className='media center'>
            <span className='icon'>
              <a href={data.site.siteMetadata.twitter}>
                <FaTwitter color='blue' />
              </a>
            </span>
            &nbsp;
            <span className='icon'>
              <a href={data.site.siteMetadata.github}>
                <FaGithub color='black' />
              </a>
            </span>
            &nbsp;
            <span className='icon'>
              <a href={data.site.siteMetadata.medium}>
                <FaMedium color='green' />
              </a>
            </span>
            &nbsp;
          </article>
          &nbsp;
          <p className='is-size-5'>
            You can also back or support this project for me to keep it updated
            by{' '}
            <a href='https://www.paypal.me/amanhimself/2'>Buying Me a Coffee</a>
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer

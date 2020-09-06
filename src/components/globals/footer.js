import React from 'react'
import { SiEtsy } from 'react-icons/si'
import { AiFillMail, AiFillInstagram } from 'react-icons/ai'
import { StaticQuery, graphql } from 'gatsby'
import '../style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            email
            etsy
            instagram
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          <article className='media center'>
            <span className='icon'>
              <a href={data.site.siteMetadata.email}>
                <AiFillMail color='blue' />
              </a>
            </span>
            &nbsp;
            <span className='icon'>
              <a href={data.site.siteMetadata.etsy}>
                <SiEtsy color='orange' />
              </a>
            </span>
            &nbsp;
            <span className='icon'>
              <a href={data.site.siteMetadata.instagram}>
                <AiFillInstagram color='purple' />
              </a>
            </span>
            &nbsp;
          </article>
          &nbsp;
          <p className='is-size-5'>
            Soulstamina &copy;
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer

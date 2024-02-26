import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {` alert("welcome to contact page");`}
      </Script>
      I am Contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook - Contact with peoples",
  description: "This is Contact facebook",
};
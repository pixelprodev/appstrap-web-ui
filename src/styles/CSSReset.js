import React from 'react'
import { Global, css } from '@emotion/react'

export default function CSSReset ({ children }) {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,900&display=swap');

          html,
          body,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font-size: 14px;
            vertical-align: baseline;
          }
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }
          body {
            line-height: 1;
            min-height: 100vh;
            min-width: 100vw;
          }
          ol,
          ul {
            list-style: none;
          }

          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          button {
            cursor: pointer;
          }

          *,
          *:before,
          *:after {
            font-family: "Nunito Sans", Sans-Serif;
            font-style: normal;
            box-sizing: border-box;
            color: #444;
          },
          html {
            position: relative;
          },
          .hljs {
            background: #222;
          }
        `}
      />
      {children}
    </>
  )
}

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Header } from './components/Header/Header'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { styleReset } from 'react95'
/* Pick a theme of your choice */
import original from 'react95/dist/themes/original'

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'
import { ItemDetails } from './components/ItemDetails/ItemDetails'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Outlet />
            </>
        ),
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/:id',
                element: <ItemDetails />,
            },
        ],
    },
])

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)
root.render(
    <>
        <GlobalStyles />
        <ThemeProvider theme={original}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </>
)

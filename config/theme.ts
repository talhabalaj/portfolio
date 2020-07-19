import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    textDark: "#121212",
    textLight: "#eaeaea",
    primary: "#F0A500",
    backDark: "#111111",
    watermarkDark: "#ffffff08",
    backLight: "#EEEEEE",
    watermarkLight: "#e2e2e2",
    cardLightBack: "white",
    cardLightText: "#121212",
    cardDarkBack: "#1A1919",
    cardDarkText: "#eaeaea",
  },

  innerShadow: "inset 0px 1px 4px rgba(0, 0, 0, 0.05)",
  boxShadow: "0px 5px 11px rgba(0,0,0,0.10)",
  pressedBoxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",

  sectionTopPadding: (level: number = 1) => `${level * 20}rem`,
};

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    html {
        font-size: 10px;
        @media (min-width: 1920px) 
        {
            font-size: 12px;
        }
        @media (max-width: 1200px) {
            font-size: 8px;
        }
        @media (max-width: 864px) {
            font-size: 7px;
        }
        scroll-behavior: smooth;
    }
    body {
        background-image:linear-gradient(to bottom, rgba(0,0,0, .6), rgba(0,0,0, .7)), url('images/peter-thomas-6pem5V75I1s-unsplash_1_1_jpsaqc_c_scale,w_1400.jpg');
        background-attachment: fixed;
        background-size: cover;
    }

    a {
        color: ${theme.colors.primary};
        text-decoration-color: transparent;
        &:hover {
            text-decoration-color: ${theme.colors.primary};
        }
    }


    h3, h4, h2 {
        text-transform: uppercase;
        margin: 2rem 0 0.5rem 0;
    }
        
    h2 {
        font-size: 5.4rem;
        font-weight: 800;
    }
    h3 {
        font-size: 3.4rem;
        font-weight: 800;
    }
    p, ul {
        font-size: 1.7rem;
        line-height: 140%;
    }
    h4 {
        font-size: 2.1rem;
    }

    @keyframes riseUpAbsolute {
        from { top: 50%; opacity: 0; }
    }

    .riseUpAbsolute {
        animation-name: riseUpAbsolute;
    }
`;

import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            textDark: string;
            primary: string;
            backDark: string;
            watermarkDark: string;
            backLight: string;
            watermarkLight: string;
            cardLightBack: string;
            cardLightText: string;
            cardDarkBack: string;
            cardDarkText: string;
        }
        innerShadow: string;
        boxShadow: string;
        pressedBoxShadow: string;
        sectionTopPadding: Function;
    }
}
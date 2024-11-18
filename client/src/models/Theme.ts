export interface ITheme {
    name: string;
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    tetriaryColor:string;
    linkColor: string;
    color: string;

  };
  
  export interface IThemes {
    dark: ITheme;
    light: ITheme;
  };

 


  
  export const themes: IThemes = {
    dark: {
      name: "Night",
      backgroundColor: '#191917',
      primaryColor: '#353530',
      secondaryColor: '#5C5B50',
      tetriaryColor: '#727163',
      linkColor: '#B1B2A7',
      color: '#B1B2A7'
    },
    light: {
      name: "Day",
      backgroundColor: '#C1C2B6',
      primaryColor: '#9C9C92',
      secondaryColor: '#828171',
      tetriaryColor: '#5C5A4B',
      linkColor: '#363429',
      color: 'black'
    },
  };
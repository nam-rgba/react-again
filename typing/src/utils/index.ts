import { Theme, Tutor } from "../interface/type";

export const themes : {[key: string]: Theme} = {
  blueDolphin: {
    name: 'Blue Dolphin',
    background: {
      primary: '#003950',
      secondary: '#014961',
    },
    text: {
      primary: '#6DEAFF',
      secondary: '#FFCEFB',
      title: '#6DEAFF',
    },
  },
  aurora: {
    name: 'Aurora',
    background: {
      primary: '#011926',
      secondary: '#000C13',
    },
    text: {
      primary: '#235A68',
      secondary: '#00E980',
      title: '#00E980',
    },
  },
  paper: {
    name: 'Paper',
    background: {
      primary: '#EEEEEE',
      secondary: '#DDDDDD',
    },
    text: {
      primary: '#B4B4B4',
      secondary: '#444444',
      title: '#444444',
    },
  },
  cyberspace: {
    name: 'Cyberspace',
    background: {
      primary: '#181C18',
      secondary: '#131613',
    },
    text: {
      primary: '#9578D3',
      secondary: '#04AF6A',
      title: '#9578D3',
    },
  },
  cheesecake: {
    name: 'Cheesecake',
    background: {
      primary: '#FDF0D5',
      secondary: '#F3E2BF',
    },
    text: {
      primary: '#E14C94',
      secondary: '#3A3335',
      title: '#E14C94',
    },
  },
  bouquet: {
    name: 'Bouquet',
    background: {
      primary: '#173F35',
      secondary: '#1F4E43',
    },
    text: {
      primary: '#408E7B',
      secondary: '#DBE0D2',
      title: '#DBE0D2',
    },
  },
};

export const times : {[key: string]: number} = {
  '15s': 15,
  '30s': 30,
  '60s': 60,
};

export const tutor : {[key: string]: Tutor} = {
  'Code With Gionatha: ': {
    name: 'Code With Gionatha',
    link: 'https://www.youtube.com/watch?v=oc7BMlIU3VY&t=1070s&ab_channel=CodeWithGionatha'
  },
  'Estifanos12: ': {
    name: 'Estifanos12',
    link: 'https://github.com/Estifanos12'
  },
}


export const isKeyboardCodeValid = (code: string) => {
  return(
    code.startsWith('Key') ||
    code === 'Backspace' ||
    code.startsWith('Digit') ||
    code === 'Space' ||
    code === 'Escape'
  );
};

export const countErrors = (actual:string, expected:string) => {
  const expectedArray = expected.split('');

  return expectedArray.reduce((error, letter, index) => {
    const actualLetter = actual[index];
    if(actualLetter !== letter){
      return error + 1;
    }
    return error; 
  },0);
};

export const calcAccuracy = (totalTyped:number, error:number) => {
  if(totalTyped === 0){
    return 0;
  }
  return Math.floor(((totalTyped - error) / totalTyped) * 100);
}

export const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0) + "%";
};

export const calcWPM = (totalTyped:number, time:number) => {
  const minutes = time / 60;
  const words = totalTyped / 5;
  return Math.floor(words / minutes);
}

export const debug = (str: string) => {
  if (process.env.NODE_ENV === "development") {
    console.debug(str);
  }
};


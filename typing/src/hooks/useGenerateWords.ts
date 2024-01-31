import { useState, useEffect } from 'react';
import {faker} from '@faker-js/faker';

const useGenerateWords = (numWords: number) => {
  const [words, setWords] = useState<string>('');

  useEffect(() => {
    const newWords = faker.lorem.words(numWords);
    setWords(newWords);
  }, [numWords]);

  return {words, setWords};
};

export default useGenerateWords;

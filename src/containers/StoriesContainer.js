import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    console.log('count: ', count);
  }, [count]);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};

import type { Votes, VoteType } from '../../types/votes';
import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import css from './App.module.css';

export type handleVoteFunction = (type: VoteType) => void;
export type resetVotesFunction = () => void;

const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote: handleVoteFunction = (type: VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  const resetVotes: resetVotesFunction = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo></CafeInfo>
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={true}
      ></VoteOptions>
    </div>
  );
};

export default App;

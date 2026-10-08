import type { VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import css from './App.module.css';

export function handleVote(type: VoteType): void {}
export function resetVotes(): void {}

const App = () => {
  return (
    <div className={css.app}>
      <CafeInfo></CafeInfo>
      <VoteOptions></VoteOptions>
    </div>
  );
};

export default App;

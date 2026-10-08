import css from './VoteOptions.module.css';
import { handleVote, resetVotes } from '../App/App';

interface VoteOptionsProps {
  onVote: typeof handleVote;
  onReset: typeof resetVotes;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>
      <button
        className={`${css.button} ${css.reset}`}
        onClick={canReset ? onReset : undefined}
      >
        Reset
      </button>
    </div>
  );
};

export default VoteOptions;

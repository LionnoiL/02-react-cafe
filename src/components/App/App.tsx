import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.app}>
      <CafeInfo></CafeInfo>
      <VoteOptions></VoteOptions>
    </div>
  );
};

export default App;

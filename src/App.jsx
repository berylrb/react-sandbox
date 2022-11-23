import logo from './logo.svg';
import styles from './App.module.css';
import Counter from './Counter/Counter';
import Date from './Date/Date';
import LikeButton from './LikeButton/LikeButton';

function App() {
  return (
    <>
      <div className={styles.appBody}>
        <Counter />
        <Date />
        <LikeButton />
      </div>
    </>
  );
}

export default App;

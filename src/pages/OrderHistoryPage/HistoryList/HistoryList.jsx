import { useSelector } from 'react-redux';
import { selectHistory, selectHistoryLoading } from 'redux/selectors';
import Loader from 'shared/components/Loader/Loader';
import HistoryItem from './HistoryItem/HistoryItem';

const HistoryList = () => {
  const history = useSelector(selectHistory);
  const isLoading = useSelector(selectHistoryLoading);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <ul>
          {history.map(item => (
            <HistoryItem key={item._id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default HistoryList;

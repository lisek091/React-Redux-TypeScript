import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';
import { RootState } from '../redux/reducers';

const Display = () => {

    const state = useSelector((state: RootState) => state.count)
    const dispatch = useDispatch();

    const { addCount, subCount, reset } = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
            <h3>{state}</h3>
            <button onClick={() => addCount(1000)}>Deposit</button>
            <button onClick={() => subCount(1000)}>Withdraw</button>
            <button onClick={() => reset()}>Bankrupt</button>
        </div>
    )
}

export default Display

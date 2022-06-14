import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
// import Counter from '../src/components/Counter'
//import {useSelector,useDispatch} from "react-redux" 
import { minCounter } from './redux/Actions';
import { addCounter,resetCounter } from "../src/redux/Actions"





function App(props) {
let {data,addCounter,minCounter,resetCounter} = props

  //  // Select the state inside rudecer 
  //   const mystate = useSelector((state) => state.counterApp)
  //   const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">


        <div className="container">

          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={minCounter}><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input"
              value={data}

            />
            <a className="quantity__plus" title="Increment" onClick={addCounter}><span>+</span></a>
          </div>

        </div>
        <a className="quantity__minus" title="Decrement" typeof="button" className="btn btn-primary" onClick={resetCounter}><span>Reset Counter</span></a>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state.counterApp, "state")
  return { data: state.counterApp }
}

const mapStateToDispatch = (state) => {

  return {
    addCounter: () => state(addCounter()),
    minCounter: () => state(minCounter()),
    resetCounter: () => state(resetCounter())


  }
}


export default connect(mapStateToProps, mapStateToDispatch)(App)
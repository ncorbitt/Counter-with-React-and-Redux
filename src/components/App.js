import React from "react";
// import Counter from './Counter';
import Counterv2 from "./Counterv2";
import { connect } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  updateCount,
  getUpdate,
  keepTrackOfIncrementClicks,
  keepTrackOfDecrementClicks
} from "../actions/index";

const headerStyles = {
  height: "150px",
  color: "white"
};

class App extends React.Component {
  shouldComponentUpdate() {
    console.log(`COUNT: ${this.props.count}`);

    if (
      this.props.update >= parseInt(10000) ||
      this.props.count >= parseInt(9999) ||
      this.props.count <= parseInt(-9999)
    ) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div>
        <header
          className="shadow d-flex align-items-center"
          id="header"
          style={headerStyles}
        >
          <div style={{ margin: "0px auto" }}>
            <h1>
              Counter | <span>{this.props.count}</span>
            </h1>
          </div>
        </header>

        <Counterv2 {...this.props} />

        <h3 id="footer">2019</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      dispatch(increment());
      dispatch(keepTrackOfIncrementClicks());
    },
    onDecrement: () => {
      dispatch(decrement());
      dispatch(keepTrackOfDecrementClicks());
    },
    onUpdate: number => {
      dispatch(updateCount(number));
    },
    onGetUpdate: () => {
      dispatch(getUpdate());
    }
  };
}

function mapStateToProps(state) {
  return {
    count: state.count,
    trackedIncrementedClicks: state.trackIncrementClicks,
    trackedDecrementedClicks: state.trackDecrementClicks,
    update: state.updateCount
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

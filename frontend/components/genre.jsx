import React from 'react';
import { connect } from 'react-redux';
import { fetchSeries } from '../actions/series_actions';
import Series from './series';

class Genre extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.fetchSeries(this.props.params.id);
  }

  render() {
    let seriesButtons;

    if (this.props.seriesList) {
      seriesButtons = this.props.seriesList.map(serie=><Series key={serie.id} serie={serie} />);
    } else {
      seriesButtons = "";
    }
    return(
      <div className="genre" >
        <aside>
          <p>Pass Down Genre.name in Props</p>
        </aside>
        <main>{seriesButtons}</main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    seriesList: state.series.seriesList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSeries: (genreId) => (dispatch(fetchSeries(genreId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genre);

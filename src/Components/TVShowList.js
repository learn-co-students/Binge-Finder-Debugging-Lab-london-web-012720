import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

class TVShowList extends Component {
  mapAllShows = () => {
    let arr = this.props.shows;
    if (!!this.props.searchTerm) {
      arr = [];
      this.props.shows.map(s => {
        if (s.name.toLowerCase().includes(this.props.searchTerm)) {
          arr.push(s);
        }
      });
    }
    return arr.map(s => (
      <TVShow show={s} key={s.id} selectShow={this.props.selectShow} />
    ));
  };

  render() {
    return (
      <div className="TVShowList">
        <Grid>{this.mapAllShows()}</Grid>
      </div>
    );
  }
}

export default TVShowList;

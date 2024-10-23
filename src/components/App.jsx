import React, { Component } from "react";
import Header from "./Header";
import CardList from "./CardList";

class App extends Component {
  state = {
    grouping: "status", // Default grouping
    ordering: "priority", // Default ordering
  };

  handleGroupingChange = (newGrouping) => {
    this.setState({ grouping: newGrouping });
  };

  handleOrderingChange = (newOrdering) => {
    this.setState({ ordering: newOrdering });
  };

  render() {
    const { grouping, ordering } = this.state;

    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          margin: "0px",
          padding: "0px",
          overflow: "hidden",
          backgroundColor: "#E6E6E6",
          display: "flex",
          flexDirection: "column", // Change to column for header and list
          justifyContent: "flex-start",
        }}>
        <Header
          grouping={grouping}
          ordering={ordering}
          onGroupingChange={this.handleGroupingChange}
          onOrderingChange={this.handleOrderingChange}
        />
        <CardList grouping={grouping} ordering={ordering} />
      </div>
    );
  }
}

export default App;

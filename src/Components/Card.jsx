import React, { Component } from "react";
import axios from "axios";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lists: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((Response) => {
        console.log(Response);
        this.setState({
          Lists: Response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { Lists } = this.state;

    return (
      <div>
        Hello {this.state.Lists.length}
        {/* {Lists.map((list) => {
          return <div key={list.id}> {list.id}</div>;
        })} */}
      </div>
    );
  }
}

export default Card;

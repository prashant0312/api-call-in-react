import React from "react";

class Photos extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    };
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((response) => {
        this.setState({
          photos: response,
          loading: false
        });
      });
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading....</h1>;
    }
    return (
      <>
        {this.state.photos.map((photo) => {
          return (
            <div key={photo.id}>
              <img src={photo.url} height={100} width={100} />
              <div>{photo.title}</div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Photos;

//fetch().then().catch()

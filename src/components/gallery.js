import React, { Component } from "react";
import ".././style/css/style.css";
import Images from ".././data/images.json";

const activeList = [];

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: null
    };
  }

  addClass(keyId) {
    this.setState({
      clickedItem: keyId
    });

    if (this.state.clickedItem === keyId) {
      this.setState({
        clickedItem: null
      });
    }
  }

  render() {
    return (
      <div className="gallery-section__images-container">
        {this.props.images.map(item => (
          <div
            id={item.id}
            key={item.id}
            className={
              this.state.clickedItem === item.id
                ? "gallery-section__item gallery-section__item--big"
                : "gallery-section__item"
            }
            onClick={() => this.addClass(item.id)}
          >
            <img
              category={item.category}
              src={item.url}
              className="gallery-section__image"
            />
          </div>
        ))}
      </div>
    );
  }
}

const CheckCategory = ({ activeCategory }) => {
  const activeList = [];

  for (var i = 0; i < Images.length; i++) {
    if (activeCategory === "All") {
      activeList.push(Images[i]);
    }
  }

  for (var j = 0; j < Images.length; j++) {
    if (Images[j].category === activeCategory) {
      activeList.push(Images[j]);
    }
  }

  return <Photo images={activeList} category={activeCategory} />;
};

const ButtonCategories = ({ setCategory, activeCategory }) => {
  const uniqueTags = [];
  uniqueTags.push("All");

  Images.map(img => {
    if (uniqueTags.indexOf(img.category) === -1) {
      uniqueTags.push(img.category);
    }
  });

  return (
    <ul className="gallery-section__list">
      {uniqueTags.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => setCategory(item)}
            className={
              activeCategory === item
                ? "gallery-section__list-item gallery-section__list-item--active"
                : "gallery-section__list-item"
            }
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images: activeList,
      activeCategory: "All",
      open: false
    };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(item) {
    this.setState({
      images: activeList,
      activeCategory: item
    });
  }

  render() {
    return (
      <div className="gallery-section">
        <ButtonCategories
          setCategory={this.setCategory}
          activeCategory={this.state.activeCategory}
        />
        <CheckCategory
          activeCategory={this.state.activeCategory}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default Gallery;

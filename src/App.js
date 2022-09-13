import './App.css';
import React from 'react';
import showcases from './text';


function App() {
  return (
    <div>
      <header />
        <Showcases />
      <p>
        This is where all my projects are stored. Click any you like the look of!
      </p>
      <a href="/" rel="noopener noreferrer">Back</a>
      <footer />
    </div>
  );
}

class Showcases extends React.Component {
  showcaseWidgets = [];
  constructor(props) {
    super(props)
    for (let showcase of showcases) {
      this.showcaseWidgets.push(
        <Showcase showcase={showcase} key={showcase.link}/>
      )
    }
  }
  render() {
    return (
      <div className="showcase-container">
        <SearchBar parent={this} />
        <div>
          {this.showcaseWidgets}
        </div>
      </div>
    )
  }
  search(query) {
    query = query.toLowerCase();
    let searchedShowcases = [];
    for (let showcase of showcases) {
      if (showcase.link.toLowerCase().includes(query) || 
        showcase.name.toLowerCase().includes(query) || 
        showcase.keywords.includes(query)
      ) {
        searchedShowcases.push(<Showcase showcase={showcase} key={showcase.link}/>);
      }
    }
    this.showcaseWidgets = searchedShowcases;
    this.forceUpdate();
  }
}
class Showcase extends React.Component {
  render() {
    return (
      <span className="showcase-widget">
        <span className="showcase-flex">
          <span className="showcase-header">{this.props.showcase.name}</span>
          <span className="showcase-desc">{this.props.showcase.desc}</span>
          <button className="showcase-button" onClick={() => window.location.href = this.props.showcase.link}>Go!</button>
        </span>
      </span>
    )
  }
}
class SearchBar extends React.Component {
  render() {
    return (
      <span className="searchbar">
        <input className="searchbar-input" placeholder="Search..." onChange={this.handleChange.bind(this)} autoFocus />
        <button className="searchbar-button">
          <img className="searchbar-icon" src="/projects/static/search.png" alt="" />
        </button>
      </span>
    )
  }
  handleChange() {
    this.props.parent.search(document.getElementsByClassName("searchbar-input")[0].value);
  }
}

export default App;

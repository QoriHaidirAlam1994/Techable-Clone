import React, { Component } from "react";
import classNames from "classnames";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "Video 1",
          url: "https://mystorage/video1.jpeg"
        },
        {
          title: "Video 2",
          url: "https://mystorage/video2.jpeg"
        },
        {
          title: "Video 3",
          url: "https://mystorage/video3.jpeg"
        }
      ],
      items: [],
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  
  render() {
    let filteredSearch = this.state.data;
    return (
      <div>
        <div>
          <ul>
            {filteredSearch.map((data, i) => {
              return <Search data={data} key={i} />;
            })}
          </ul>
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>

        <div className="view-school">
          <div className="view-directory course-directory signed-in-directory">
            <div className="container">
              <div className="row search">
                <div className="col-lg-12 col-md-12 col-xs-12 pull-right">
                  <form method="get" action="/courses">
                    <div className="input-group">
                      <label for="search-courses" className="sr-only">
                        Find
                      </label>
                      <input
                        className="form-control search input-lg"
                        data-list=".list"
                        id="search-courses"
                        name="query"
                        placeholder="Find"
                        type="text"
                      />
                      <span className="input-group-btn">
                        <label for="search-course-button" className="sr-only">
                          Search
                        </label>
                        <button
                          id="search-course-button"
                          className="btn search btn-default btn-lg"
                          type="submit"
                        >
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

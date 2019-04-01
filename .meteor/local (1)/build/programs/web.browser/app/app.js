var require = meteorInstall({"imports":{"ui":{"pages":{"new":{"contact.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/new/contact.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Contact
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let createContainer;
module.link("meteor/react-meteor-data", {
  createContainer(v) {
    createContainer = v;
  }

}, 2);
let Header;
module.link("./header", {
  default(v) {
    Header = v;
  }

}, 3);
let Footer;
module.link("./footer", {
  default(v) {
    Footer = v;
  }

}, 4);

class Contact extends Component {
  render() {
    return React.createElement("div", {
      className: "super_container"
    }, React.createElement(Header, null), React.createElement("div", {
      className: "menu_container menu_mm"
    }, React.createElement("div", {
      className: "menu_close_container"
    }, React.createElement("div", {
      className: "menu_close"
    })), React.createElement("div", {
      className: "menu_inner menu_mm"
    }, React.createElement("div", {
      className: "menu menu_mm"
    }, React.createElement("ul", {
      className: "menu_list menu_mm"
    }, React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "index.html"
    }, "Home")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "About us")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "courses.html"
    }, "Courses")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "elements.html"
    }, "Elements")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "news.html"
    }, "News")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "Contact"))), React.createElement("div", {
      className: "menu_social_container menu_mm"
    }, React.createElement("ul", {
      className: "menu_social menu_mm"
    }, React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    }))))), React.createElement("div", {
      className: "menu_copyright menu_mm"
    }, "Colorlib All rights reserved")))), React.createElement("div", {
      className: "home"
    }, React.createElement("div", {
      className: "home_background_container prlx_parent"
    }, React.createElement("div", {
      className: "home_background prlx",
      style: {
        backgroundImage: "url(images/contact_background.jpg)"
      }
    })), React.createElement("div", {
      className: "home_content"
    }, React.createElement("h1", null, "Contact"))), React.createElement("div", {
      className: "contact"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-8"
    }, React.createElement("div", {
      className: "contact_form"
    }, React.createElement("div", {
      className: "contact_title"
    }, "Get in touch"), React.createElement("div", {
      className: "contact_form_container"
    }, React.createElement("form", {
      action: "post"
    }, React.createElement("input", {
      id: "contact_form_name",
      className: "input_field contact_form_name",
      type: "text",
      placeholder: "Name",
      required: "required",
      "data-error": "Name is required."
    }), React.createElement("input", {
      id: "contact_form_email",
      className: "input_field contact_form_email",
      type: "email",
      placeholder: "E-mail",
      required: "required",
      "data-error": "Valid email is required."
    }), React.createElement("textarea", {
      id: "contact_form_message",
      className: "text_field contact_form_message",
      name: "message",
      placeholder: "Message",
      required: "required",
      "data-error": "Please, write us a message.",
      defaultValue: ""
    }), React.createElement("button", {
      id: "contact_send_btn",
      type: "button",
      className: "contact_send_btn trans_200",
      value: "Submit"
    }, "send message"))))), React.createElement("div", {
      className: "col-lg-4"
    }, React.createElement("div", {
      className: "about"
    }, React.createElement("div", {
      className: "about_title"
    }, "Join Courses"), React.createElement("p", {
      className: "about_text"
    }, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies. Etiam eu purus nec eros varius luctus."), React.createElement("div", {
      className: "contact_info"
    }, React.createElement("ul", null, React.createElement("li", {
      className: "contact_info_item"
    }, React.createElement("div", {
      className: "contact_info_icon"
    }, React.createElement("img", {
      src: "images/placeholder.svg",
      alt: "https://www.flaticon.com/authors/lucy-g"
    })), "Blvd Libertad, 34 m05200 Ar\xE9valo"), React.createElement("li", {
      className: "contact_info_item"
    }, React.createElement("div", {
      className: "contact_info_icon"
    }, React.createElement("img", {
      src: "images/smartphone.svg",
      alt: "https://www.flaticon.com/authors/lucy-g"
    })), "0034 37483 2445 322"), React.createElement("li", {
      className: "contact_info_item"
    }, React.createElement("div", {
      className: "contact_info_icon"
    }, React.createElement("img", {
      src: "images/envelope.svg",
      alt: "https://www.flaticon.com/authors/lucy-g"
    })), "hello@company.com")))))), React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      id: "google_map"
    }, React.createElement("div", {
      className: "map_container"
    }, React.createElement("div", {
      id: "map"
    }))))))), React.createElement(Footer, null));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"courses.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/new/courses.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let ReactDOM;
module.link("react-dom", {
  default(v) {
    ReactDOM = v;
  }

}, 1);
let withHistory;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  }

}, 2);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 3);
let Header;
module.link("./header", {
  default(v) {
    Header = v;
  }

}, 4);
let Footer;
module.link("./footer", {
  default(v) {
    Footer = v;
  }

}, 5);
let Courses;
module.link("../../../api/courses.jsx", {
  Courses(v) {
    Courses = v;
  }

}, 6);
let Course;
module.link("../../containers/Course.jsx", {
  default(v) {
    Course = v;
  }

}, 7);

//import backgroun from '../../../../client/assets/images/courses_background.jpg'
class Cours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(event) {
    event.preventDefault(); // Find the text field via the React ref

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    console.log(text);
    Meteor.call('courses.insert', text); // Clear form

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }

  sortCourses(event) {
    let x = event.target.value; //console.log(x); 

    this.setState({
      text: x
    });
  }

  renderCourses() {
    let filteredCourses = this.props.courses; //console.log(this.state.text)

    if (this.state.text == "text") {
      filteredCourses = filteredCourses.sort((a, b) => {
        return a.text.localeCompare(b.text);
      });
    } else if (this.state.text == "createdAt") {
      filteredCourses = filteredCourses.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
    }

    if (this.state.hideCompleted) {
      filteredCourses = filteredCourses.filter(course => !course.checked);
    }

    return filteredCourses.map(course => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = course.owner === currentUserId;
      return React.createElement(Course, {
        key: course._id,
        course: course,
        showPrivateButton: showPrivateButton
      });
    });
  }

  render() {
    return React.createElement("div", {
      className: "super_container"
    }, React.createElement("header", null, React.createElement("h1", null, "Courses "), React.createElement("label", {
      className: "hide-completed"
    }, React.createElement("input", {
      type: "checkbox",
      readOnly: true,
      checked: this.state.hideCompleted,
      onClick: this.toggleHideCompleted.bind(this)
    }), "Hide Completed Courses"), React.createElement("select", {
      onChange: e => {
        this.sortCourses(e);
      }
    }, React.createElement("option", {
      value: "text"
    }, "Nom"), React.createElement("option", {
      value: "createdAt"
    }, "Date de creation")), this.props.currentUser ? React.createElement("form", {
      className: "new-course",
      onSubmit: this.handleSubmit.bind(this)
    }, React.createElement("input", {
      type: "text",
      ref: "textInput",
      placeholder: "Type to add new courses"
    })) : ''), React.createElement("div", null, this.renderCourses()), React.createElement("div", {
      className: "menu_container menu_mm"
    }, React.createElement("div", {
      className: "menu_close_container"
    }, React.createElement("div", {
      className: "menu_close"
    })), React.createElement("div", {
      className: "menu_inner menu_mm"
    }, React.createElement("div", {
      className: "menu menu_mm"
    }, React.createElement("ul", {
      className: "menu_list menu_mm"
    }, React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "index.html"
    }, "Home")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "About us")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "Courses")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "elements.html"
    }, "Elements")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "news.html"
    }, "News")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "contact.html"
    }, "Contact"))), React.createElement("div", {
      className: "menu_social_container menu_mm"
    }, React.createElement("ul", {
      className: "menu_social menu_mm"
    }, React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    }))))), React.createElement("div", {
      className: "menu_copyright menu_mm"
    }, "Colorlib All rights reserved")))), React.createElement("div", {
      className: "home"
    }, React.createElement("div", {
      className: "home_background_container prlx_parent"
    }, React.createElement("div", {
      className: "home_background prlx",
      style: {
        backgroundImage: "url(images/courses_background.jpg)"
      }
    })), React.createElement("div", {
      className: "home_content"
    }, React.createElement("h1", null, "Courses"))), React.createElement("div", {
      className: "popular page_section"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    })), React.createElement("div", {
      className: "row course_boxes"
    }, React.createElement("div", {
      className: "col-lg-4 course_box"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("img", {
      className: "card-img-top",
      src: "images/course_9.jpg",
      alt: "https://unsplash.com/@kimberlyfarmer"
    }), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "#"
    })), React.createElement("div", {
      className: "card-text"
    }, this.props.courses.currentUserId)), React.createElement("div", {
      className: "price_box d-flex flex-row align-items-center"
    }, React.createElement("div", {
      className: "course_author_image"
    }, React.createElement("img", {
      src: "images/author.jpg",
      alt: "https://unsplash.com/@mehdizadeh"
    })), React.createElement("div", {
      className: "course_author_name"
    }, "Michael Smith, ", React.createElement("span", null, " ", this.props.courses.text)))))))), React.createElement(Footer, null));
  }

}

module.exportDefault(withTracker(() => {
  Meteor.subscribe('courses');
  return {
    courses: Courses.find({}).fetch(),
    incompleteCount: Courses.find({
      checked: {
        $ne: true
      }
    }).count(),
    currentUser: Meteor.user()
  };
})(Cours));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"elements.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/new/elements.jsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Elements
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let createContainer;
module.link("meteor/react-meteor-data", {
  createContainer(v) {
    createContainer = v;
  }

}, 2);
let Header;
module.link("./header", {
  default(v) {
    Header = v;
  }

}, 3);
let Footer;
module.link("./footer", {
  default(v) {
    Footer = v;
  }

}, 4);

class Elements extends Component {
  render() {
    return React.createElement("div", {
      className: "super_container"
    }, React.createElement(Header, null), React.createElement("div", {
      className: "menu_container menu_mm"
    }, React.createElement("div", {
      className: "menu_close_container"
    }, React.createElement("div", {
      className: "menu_close"
    })), React.createElement("div", {
      className: "menu_inner menu_mm"
    }, React.createElement("div", {
      className: "menu menu_mm"
    }, React.createElement("ul", {
      className: "menu_list menu_mm"
    }, React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "index.html"
    }, "Home")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "About us")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "courses.html"
    }, "Courses")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "Elements")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "news.html"
    }, "News")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "contact.html"
    }, "Contact"))), React.createElement("div", {
      className: "menu_social_container menu_mm"
    }, React.createElement("ul", {
      className: "menu_social menu_mm"
    }, React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    }))))), React.createElement("div", {
      className: "menu_copyright menu_mm"
    }, "Copyright \xA9 All rights reserved | This template is made with", " ", React.createElement("i", {
      className: "fa fa-heart",
      "aria-hidden": "true"
    }), " by", " ", React.createElement("a", {
      href: "https://colorlib.com",
      target: "_blank"
    }, "Colorlib"))))), React.createElement("div", {
      className: "home"
    }, React.createElement("div", {
      className: "home_background_container prlx_parent"
    }, React.createElement("div", {
      className: "home_background prlx",
      style: {
        backgroundImage: "url(images/contact_background.jpg)"
      }
    })), React.createElement("div", {
      className: "home_content"
    }, React.createElement("h1", null, "Contact"))), React.createElement("div", {
      className: "elements"
    }, React.createElement("div", {
      className: "buttons"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "elements_title"
    }, "Buttons"), React.createElement("div", {
      className: "buttons_container"
    }, React.createElement("div", {
      className: "button button_color_1 text-center trans_200"
    }, React.createElement("a", {
      href: "#"
    }, "Read More")), React.createElement("div", {
      className: "button button_color_2 text-center trans_200"
    }, React.createElement("a", {
      href: "#"
    }, "Read More")), React.createElement("div", {
      className: "button button_line_1 text-center trans_200"
    }, React.createElement("a", {
      href: "#"
    }, "Read More")), React.createElement("div", {
      className: "button button_line_2 text-center trans_200"
    }, React.createElement("a", {
      href: "#"
    }, "Read More"))))))), React.createElement("div", {
      className: "pbars_accordions"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-12"
    }, React.createElement("div", {
      className: "elements_title"
    }, "Progress Bars & Accordions"))), React.createElement("div", {
      className: "row pbars_accordions_container"
    }, React.createElement("div", {
      className: "col-lg-6"
    }, React.createElement("div", {
      className: "elements_progress_bars"
    }, React.createElement("div", {
      className: "pbar_container"
    }, React.createElement("ul", {
      className: "progress_bar_container col_12 clearfix"
    }, React.createElement("li", {
      className: "pb_item"
    }, React.createElement("h4", null, "Developement"), React.createElement("div", {
      id: "skill_1_pbar",
      className: "skill_bars",
      "data-perc": "0.85"
    })), React.createElement("li", {
      className: "pb_item"
    }, React.createElement("h4", null, "Design"), React.createElement("div", {
      id: "skill_2_pbar",
      className: "skill_bars",
      "data-perc": 1
    })), React.createElement("li", {
      className: "pb_item"
    }, React.createElement("h4", null, "SEO"), React.createElement("div", {
      id: "skill_3_pbar",
      className: "skill_bars",
      "data-perc": "0.75"
    })), React.createElement("li", {
      className: "pb_item"
    }, React.createElement("h4", null, "Marketing"), React.createElement("div", {
      id: "skill_4_pbar",
      className: "skill_bars",
      "data-perc": "0.95"
    })))))), React.createElement("div", {
      className: "col-lg-6"
    }, React.createElement("div", {
      className: "elements_accordions"
    }, React.createElement("div", {
      className: "accordion_container"
    }, React.createElement("div", {
      className: "accordion d-flex flex-row align-items-center"
    }, " ", "Phasellus vestibulum, quam tincidunt venen."), React.createElement("div", {
      className: "accordion_panel"
    }, React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venenatis ultrices, est libero mattis ante, ac consectetur diam neque eget quam."))), React.createElement("div", {
      className: "accordion_container"
    }, React.createElement("div", {
      className: "accordion d-flex flex-row align-items-center"
    }, " ", "Phasellus vestibulum, quam tincidunt venen."), React.createElement("div", {
      className: "accordion_panel"
    }, React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venenatis ultrices, est libero mattis ante, ac consectetur diam neque eget quam."))), React.createElement("div", {
      className: "accordion_container"
    }, React.createElement("div", {
      className: "accordion d-flex flex-row align-items-center"
    }, " ", "Phasellus vestibulum, quam tincidunt venen."), React.createElement("div", {
      className: "accordion_panel"
    }, React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venenatis ultrices, est libero mattis ante, ac consectetur diam neque eget quam.")))))))), React.createElement("div", {
      className: "loaders"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "elements_title"
    }, "Loaders"))), React.createElement("div", {
      className: "row elements_loaders_container"
    }, React.createElement("div", {
      className: "col-lg-3 loader_col"
    }, React.createElement("div", {
      className: "loader",
      "data-perc": "0.75"
    }), React.createElement("div", {
      className: "loader_text text-center"
    }, "Photos Taken"), React.createElement("div", {
      className: "loader_sub text-center"
    }, "Etiam nec odio vestibulum est.")), React.createElement("div", {
      className: "col-lg-3 loader_col"
    }, React.createElement("div", {
      className: "loader",
      "data-perc": "0.83"
    }), React.createElement("div", {
      className: "loader_text text-center"
    }, "Km Walked"), React.createElement("div", {
      className: "loader_sub text-center"
    }, "Odio vestibulum est mattis."), React.createElement("span", null)), React.createElement("div", {
      className: "col-lg-3 loader_col"
    }, React.createElement("div", {
      className: "loader",
      "data-perc": "0.25"
    }), React.createElement("div", {
      className: "loader_text text-center"
    }, "Cities Visited"), React.createElement("div", {
      className: "loader_sub text-center"
    }, "Vestibulum est mattis effic.")), React.createElement("div", {
      className: "col-lg-3 loader_col"
    }, React.createElement("div", {
      className: "loader",
      "data-perc": "0.95"
    }), React.createElement("div", {
      className: "loader_text text-center"
    }, "Cities Visited"), React.createElement("div", {
      className: "loader_sub text-center"
    }, "Vestibulum est mattis effic."))))), React.createElement("div", {
      className: "milestones"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "elements_title"
    }, "Milestones")))), React.createElement("div", {
      className: "milestones_container"
    }, React.createElement("div", {
      className: "milestones_background",
      style: {
        backgroundImage: "url(images/milestones_background.jpg)"
      }
    }), React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-3 milestone_col"
    }, React.createElement("div", {
      className: "milestone text-center"
    }, React.createElement("div", {
      className: "milestone_icon"
    }, React.createElement("img", {
      src: "images/milestone_1.svg",
      alt: "https://www.flaticon.com/authors/zlatko-najdenovski"
    })), React.createElement("div", {
      className: "milestone_counter",
      "data-end-value": 750
    }, "0"), React.createElement("div", {
      className: "milestone_text"
    }, "Current Students"))), React.createElement("div", {
      className: "col-lg-3 milestone_col"
    }, React.createElement("div", {
      className: "milestone text-center"
    }, React.createElement("div", {
      className: "milestone_icon"
    }, React.createElement("img", {
      src: "images/milestone_2.svg",
      alt: "https://www.flaticon.com/authors/zlatko-najdenovski"
    })), React.createElement("div", {
      className: "milestone_counter",
      "data-end-value": 120
    }, "0"), React.createElement("div", {
      className: "milestone_text"
    }, "Certified Teachers"))), React.createElement("div", {
      className: "col-lg-3 milestone_col"
    }, React.createElement("div", {
      className: "milestone text-center"
    }, React.createElement("div", {
      className: "milestone_icon"
    }, React.createElement("img", {
      src: "images/milestone_3.svg",
      alt: "https://www.flaticon.com/authors/zlatko-najdenovski"
    })), React.createElement("div", {
      className: "milestone_counter",
      "data-end-value": 39
    }, "0"), React.createElement("div", {
      className: "milestone_text"
    }, "Approved Courses"))), React.createElement("div", {
      className: "col-lg-3 milestone_col"
    }, React.createElement("div", {
      className: "milestone text-center"
    }, React.createElement("div", {
      className: "milestone_icon"
    }, React.createElement("img", {
      src: "images/milestone_4.svg",
      alt: "https://www.flaticon.com/authors/zlatko-najdenovski"
    })), React.createElement("div", {
      className: "milestone_counter",
      "data-end-value": 3500,
      "data-sign-before": "+"
    }, "0"), React.createElement("div", {
      className: "milestone_text"
    }, "Graduate Students"))))))), React.createElement("div", {
      className: "icon_boxes"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "elements_title"
    }, "Icon Boxes"))), React.createElement("div", {
      className: "row icon_boxes_container"
    }, React.createElement("div", {
      className: "col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start"
    }, React.createElement("div", {
      className: "icon_container d-flex flex-column justify-content-end"
    }, React.createElement("img", {
      src: "images/earth-globe.svg",
      alt: true
    })), React.createElement("h3", null, "Online Courses"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.")), React.createElement("div", {
      className: "col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start"
    }, React.createElement("div", {
      className: "icon_container d-flex flex-column justify-content-end"
    }, React.createElement("img", {
      src: "images/exam.svg",
      alt: true
    })), React.createElement("h3", null, "Indoor Courses"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.")), React.createElement("div", {
      className: "col-lg-4 icon_box text-left d-flex flex-column align-items-start justify-content-start"
    }, React.createElement("div", {
      className: "icon_container d-flex flex-column justify-content-end"
    }, React.createElement("img", {
      src: "images/books.svg",
      alt: true
    })), React.createElement("h3", null, "Amazing Library"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.")))))), React.createElement(Footer, null));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"footer.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/new/footer.jsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Footer
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let createContainer;
module.link("meteor/react-meteor-data", {
  createContainer(v) {
    createContainer = v;
  }

}, 2);
let logo;
module.link("../../../../client/assets/images/astrolab.png", {
  default(v) {
    logo = v;
  }

}, 3);
let placeholder;
module.link("../../../../client/assets/images/placeholder.svg", {
  default(v) {
    placeholder = v;
  }

}, 4);
let smartphone;
module.link("../../../../client/assets/images/smartphone.svg", {
  default(v) {
    smartphone = v;
  }

}, 5);
let envelope;
module.link("../../../../client/assets/images/envelope.svg", {
  default(v) {
    envelope = v;
  }

}, 6);

class Footer extends Component {
  render() {
    return React.createElement("div", {
      className: "super_container"
    }, React.createElement("footer", {
      className: "footer"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "newsletter"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "section_title text-center"
    }, React.createElement("h1", null, "Subscribe to newsletter")))), React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col text-center"
    }, React.createElement("div", {
      className: "newsletter_form_container mx-auto"
    }, React.createElement("form", {
      action: "post"
    }, React.createElement("div", {
      className: "newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-center"
    }, React.createElement("input", {
      id: "newsletter_email",
      className: "newsletter_email",
      type: "email",
      placeholder: "Email Address",
      required: "required",
      "data-error": "Valid email is required."
    }), React.createElement("button", {
      id: "newsletter_submit",
      type: "submit",
      className: "newsletter_submit_btn trans_300",
      value: "Submit"
    }, "Subscribe"))))))), React.createElement("div", {
      className: "footer_content"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-3 footer_col"
    }, React.createElement("div", {
      className: "logo_container"
    }, React.createElement("div", {
      className: "logo"
    }, React.createElement("img", {
      src: logo,
      alt: ""
    }), React.createElement("span", null, "Astrolab"))), React.createElement("p", {
      className: "footer_about_text"
    }, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.")), React.createElement("div", {
      className: "col-lg-3 footer_col"
    }, React.createElement("div", {
      className: "footer_column_title"
    }, "Menu"), React.createElement("div", {
      className: "footer_column_content"
    }, React.createElement("ul", null, React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "/"
    }, "Home")), React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "About Us")), React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "/Courses"
    }, "Courses")), React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "/News"
    }, "News")), React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "/Contact"
    }, "Contact"))))), React.createElement("div", {
      className: "col-lg-3 footer_col"
    }, React.createElement("div", {
      className: "footer_column_title"
    }, "Usefull Links"), React.createElement("div", {
      className: "footer_column_content"
    }, React.createElement("ul", null, React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Testimonials")), React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "FAQ")), React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Community")), React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Campus Pictures")), React.createElement("li", {
      className: "footer_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Tuitions"))))), React.createElement("div", {
      className: "col-lg-3 footer_col"
    }, React.createElement("div", {
      className: "footer_column_title"
    }, "Contact"), React.createElement("div", {
      className: "footer_column_content"
    }, React.createElement("ul", null, React.createElement("li", {
      className: "footer_contact_item"
    }, React.createElement("div", {
      className: "footer_contact_icon"
    }, React.createElement("img", {
      src: placeholder,
      alt: "https://www.flaticon.com/authors/lucy-g"
    })), "Sahloul 3 Sousse-Tunis"), React.createElement("li", {
      className: "footer_contact_item"
    }, React.createElement("div", {
      className: "footer_contact_icon"
    }, React.createElement("img", {
      src: smartphone,
      alt: "https://www.flaticon.com/authors/lucy-g"
    })), "+216 53 897 129"), React.createElement("li", {
      className: "footer_contact_item"
    }, React.createElement("div", {
      className: "footer_contact_icon"
    }, React.createElement("img", {
      src: envelope,
      alt: "https://www.flaticon.com/authors/lucy-g"
    })), "gammoudifedi@gmail.com")))))), React.createElement("div", {
      className: "footer_bar d-flex flex-column flex-sm-row align-items-center"
    }, React.createElement("div", {
      className: "footer_social ml-sm-auto"
    }, React.createElement("ul", {
      className: "menu_social"
    }, React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    })))))))));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/new/header.jsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Header
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let createContainer;
module.link("meteor/react-meteor-data", {
  createContainer(v) {
    createContainer = v;
  }

}, 2);
let logo;
module.link("../../../../client/assets/images/astrolab.png", {
  default(v) {
    logo = v;
  }

}, 3);
let phone_call;
module.link("../../../../client/assets/images/phone-call.svg", {
  default(v) {
    phone_call = v;
  }

}, 4);

class Header extends Component {
  render() {
    return React.createElement("div", {
      className: "super_container"
    }, React.createElement("header", {
      className: "header d-flex flex-row"
    }, React.createElement("div", {
      className: "header_content d-flex flex-row align-items-center"
    }, React.createElement("div", {
      className: "logo_container"
    }, React.createElement("div", {
      className: "logo"
    }, React.createElement("img", {
      src: logo,
      alt: ""
    }))), React.createElement("nav", {
      className: "main_nav_container"
    }, React.createElement("div", {
      className: "main_nav"
    }, React.createElement("ul", {
      className: "main_nav_list"
    }, React.createElement("li", {
      className: "main_nav_item"
    }, React.createElement("a", {
      href: "/"
    }, "home")), React.createElement("li", {
      className: "main_nav_item"
    }, React.createElement("a", {
      href: "#"
    }, "about us")), React.createElement("li", {
      className: "main_nav_item"
    }, React.createElement("a", {
      href: "/Courses"
    }, "courses")), React.createElement("li", {
      className: "main_nav_item"
    }, React.createElement("a", {
      href: "Elements"
    }, "elements")), React.createElement("li", {
      className: "main_nav_item"
    }, React.createElement("a", {
      href: "/New"
    }, "news")), React.createElement("li", {
      className: "main_nav_item"
    }, React.createElement("a", {
      href: "/Contact"
    }, "contact")))))), React.createElement("div", {
      className: "header_side d-flex flex-row justify-content-center align-items-center"
    }, React.createElement("img", {
      src: phone_call,
      alt: ""
    }), React.createElement("span", null, "+216 53 897 129")), React.createElement("div", {
      className: "hamburger_container"
    }, React.createElement("i", {
      className: "fas fa-bars trans_200"
    }))));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"new.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/new/new.jsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => New
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let createContainer;
module.link("meteor/react-meteor-data", {
  createContainer(v) {
    createContainer = v;
  }

}, 2);
let Header;
module.link("./header", {
  default(v) {
    Header = v;
  }

}, 3);
let Footer;
module.link("./footer", {
  default(v) {
    Footer = v;
  }

}, 4);

class New extends Component {
  render() {
    return React.createElement("div", {
      className: "super_container"
    }, React.createElement(Header, null), React.createElement("div", {
      className: "menu_container menu_mm"
    }, React.createElement("div", {
      className: "menu_close_container"
    }, React.createElement("div", {
      className: "menu_close"
    })), React.createElement("div", {
      className: "menu_inner menu_mm"
    }, React.createElement("div", {
      className: "menu menu_mm"
    }, React.createElement("ul", {
      className: "menu_list menu_mm"
    }, React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "index.html"
    }, "Home")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "About us")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "courses.html"
    }, "Courses")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "elements.html"
    }, "Elements")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "News")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "contact.html"
    }, "Contact"))), React.createElement("div", {
      className: "menu_social_container menu_mm"
    }, React.createElement("ul", {
      className: "menu_social menu_mm"
    }, React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    }))))), React.createElement("div", {
      className: "menu_copyright menu_mm"
    }, "Copyright \xA9 All rights reserved | This template is made with", " ", React.createElement("i", {
      className: "fa fa-heart",
      "aria-hidden": "true"
    }), " by", " ", React.createElement("a", {
      href: "https://colorlib.com",
      target: "_blank"
    }, "Colorlib"))))), React.createElement("div", {
      className: "home"
    }, React.createElement("div", {
      className: "home_background_container prlx_parent"
    }, React.createElement("div", {
      className: "home_background prlx",
      style: {
        backgroundImage: "url(images/news_background.jpg)"
      }
    })), React.createElement("div", {
      className: "home_content"
    }, React.createElement("h1", null, "The News"))), React.createElement("div", {
      className: "news"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-8"
    }, React.createElement("div", {
      className: "news_posts"
    }, React.createElement("div", {
      className: "news_post"
    }, React.createElement("div", {
      className: "news_post_image"
    }, React.createElement("img", {
      src: "images/news_1.jpg",
      alt: "https://unsplash.com/@dsmacinnes"
    })), React.createElement("div", {
      className: "news_post_top d-flex flex-column flex-sm-row"
    }, React.createElement("div", {
      className: "news_post_date_container"
    }, React.createElement("div", {
      className: "news_post_date d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", null, "18"), React.createElement("div", null, "dec"))), React.createElement("div", {
      className: "news_post_title_container"
    }, React.createElement("div", {
      className: "news_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Why do you need a qualification?")), React.createElement("div", {
      className: "news_post_meta"
    }, React.createElement("span", {
      className: "news_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "news_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments"))))), React.createElement("div", {
      className: "news_post_text"
    }, React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies.")), React.createElement("div", {
      className: "news_post_button text-center trans_200"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Read More"))), React.createElement("div", {
      className: "news_post"
    }, React.createElement("div", {
      className: "news_post_image"
    }, React.createElement("img", {
      src: "images/news_2.jpg",
      alt: "https://unsplash.com/@dsmacinnes"
    })), React.createElement("div", {
      className: "news_post_top d-flex flex-column flex-sm-row"
    }, React.createElement("div", {
      className: "news_post_date_container"
    }, React.createElement("div", {
      className: "news_post_date d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", null, "18"), React.createElement("div", null, "dec"))), React.createElement("div", {
      className: "news_post_title_container"
    }, React.createElement("div", {
      className: "news_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Our new courses just for you?")), React.createElement("div", {
      className: "news_post_meta"
    }, React.createElement("span", {
      className: "news_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "news_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments"))))), React.createElement("div", {
      className: "news_post_text"
    }, React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies.")), React.createElement("div", {
      className: "news_post_button text-center trans_200"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Read More"))), React.createElement("div", {
      className: "news_post"
    }, React.createElement("div", {
      className: "news_post_image"
    }, React.createElement("img", {
      src: "images/news_3.jpg",
      alt: "https://unsplash.com/@dsmacinnes"
    })), React.createElement("div", {
      className: "news_post_top d-flex flex-column flex-sm-row"
    }, React.createElement("div", {
      className: "news_post_date_container"
    }, React.createElement("div", {
      className: "news_post_date d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", null, "18"), React.createElement("div", null, "dec"))), React.createElement("div", {
      className: "news_post_title_container"
    }, React.createElement("div", {
      className: "news_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Why take our graduate program??")), React.createElement("div", {
      className: "news_post_meta"
    }, React.createElement("span", {
      className: "news_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "news_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments"))))), React.createElement("div", {
      className: "news_post_text"
    }, React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies.")), React.createElement("div", {
      className: "news_post_button text-center trans_200"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Read More")))), React.createElement("div", {
      className: "news_page_nav"
    }, React.createElement("ul", null, React.createElement("li", {
      className: "active text-center trans_200"
    }, React.createElement("a", {
      href: "#"
    }, "01")), React.createElement("li", {
      className: "text-center trans_200"
    }, React.createElement("a", {
      href: "#"
    }, "02")), React.createElement("li", {
      className: "text-center trans_200"
    }, React.createElement("a", {
      href: "#"
    }, "03"))))), React.createElement("div", {
      className: "col-lg-4"
    }, React.createElement("div", {
      className: "sidebar"
    }, React.createElement("div", {
      className: "sidebar_section"
    }, React.createElement("div", {
      className: "sidebar_section_title"
    }, React.createElement("h3", null, "Archives")), React.createElement("ul", {
      className: "sidebar_list"
    }, React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Design Courses")), React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "All you need to know")), React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Uncategorized")), React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "About Our Departments")), React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Choose the right course")))), React.createElement("div", {
      className: "sidebar_section"
    }, React.createElement("div", {
      className: "sidebar_section_title"
    }, React.createElement("h3", null, "Latest posts")), React.createElement("div", {
      className: "latest_posts"
    }, React.createElement("div", {
      className: "latest_post"
    }, React.createElement("div", {
      className: "latest_post_image"
    }, React.createElement("img", {
      src: "images/latest_1.jpg",
      alt: "https://unsplash.com/@dsmacinnes"
    })), React.createElement("div", {
      className: "latest_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Why do you need a qualification?")), React.createElement("div", {
      className: "latest_post_meta"
    }, React.createElement("span", {
      className: "latest_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "latest_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments")))), React.createElement("div", {
      className: "latest_post"
    }, React.createElement("div", {
      className: "latest_post_image"
    }, React.createElement("img", {
      src: "images/latest_2.jpg",
      alt: "https://unsplash.com/@erothermel"
    })), React.createElement("div", {
      className: "latest_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Why do you need a qualification?")), React.createElement("div", {
      className: "latest_post_meta"
    }, React.createElement("span", {
      className: "latest_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "latest_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments")))), React.createElement("div", {
      className: "latest_post"
    }, React.createElement("div", {
      className: "latest_post_image"
    }, React.createElement("img", {
      src: "images/latest_3.jpg",
      alt: "https://unsplash.com/@element5digital"
    })), React.createElement("div", {
      className: "latest_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Why do you need a qualification?")), React.createElement("div", {
      className: "latest_post_meta"
    }, React.createElement("span", {
      className: "latest_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "latest_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments")))))), React.createElement("div", {
      className: "sidebar_section"
    }, React.createElement("div", {
      className: "sidebar_section_title"
    }, React.createElement("h3", null, "Tags")), React.createElement("div", {
      className: "tags d-flex flex-row flex-wrap"
    }, React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "Course")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "Design")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "FAQ")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "Teachers")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "School")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "Graduate"))))))))), React.createElement(Footer, null));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"new_post.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/new/new_post.jsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => New_Post
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let createContainer;
module.link("meteor/react-meteor-data", {
  createContainer(v) {
    createContainer = v;
  }

}, 2);
let Header;
module.link("./header", {
  default(v) {
    Header = v;
  }

}, 3);
let Footer;
module.link("./footer", {
  default(v) {
    Footer = v;
  }

}, 4);

class New_Post extends Component {
  render() {
    return React.createElement("div", {
      className: "super_container"
    }, React.createElement(Header, null), React.createElement("div", {
      className: "menu_container menu_mm"
    }, React.createElement("div", {
      className: "menu_close_container"
    }, React.createElement("div", {
      className: "menu_close"
    })), React.createElement("div", {
      className: "menu_inner menu_mm"
    }, React.createElement("div", {
      className: "menu menu_mm"
    }, React.createElement("ul", {
      className: "menu_list menu_mm"
    }, React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "index.html"
    }, "Home")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "About us")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "courses.html"
    }, "Courses")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "elements.html"
    }, "Elements")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "news.html"
    }, "News")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "contact.html"
    }, "Contact"))), React.createElement("div", {
      className: "menu_social_container menu_mm"
    }, React.createElement("ul", {
      className: "menu_social menu_mm"
    }, React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    }))))), React.createElement("div", {
      className: "menu_copyright menu_mm"
    }, "Colorlib All rights reserved")))), React.createElement("div", {
      className: "home"
    }, React.createElement("div", {
      className: "home_background_container prlx_parent"
    }, React.createElement("div", {
      className: "home_background prlx",
      style: {
        backgroundImage: "url(images/news_background.jpg)"
      }
    })), React.createElement("div", {
      className: "home_content"
    }, React.createElement("h1", null, "The News"))), React.createElement("div", {
      className: "news"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-8"
    }, React.createElement("div", {
      className: "news_post_container"
    }, React.createElement("div", {
      className: "news_post"
    }, React.createElement("div", {
      className: "news_post_image"
    }, React.createElement("img", {
      src: "images/news_1.jpg",
      alt: "https://unsplash.com/@dsmacinnes"
    })), React.createElement("div", {
      className: "news_post_top d-flex flex-column flex-sm-row"
    }, React.createElement("div", {
      className: "news_post_date_container"
    }, React.createElement("div", {
      className: "news_post_date d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", null, "18"), React.createElement("div", null, "dec"))), React.createElement("div", {
      className: "news_post_title_container"
    }, React.createElement("div", {
      className: "news_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Why do you need a qualification?")), React.createElement("div", {
      className: "news_post_meta"
    }, React.createElement("span", {
      className: "news_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "news_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments"))))), React.createElement("div", {
      className: "news_post_text"
    }, React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies venenatis. Suspendisse fermentum sodales lacus, lacinia gravida elit dapibus sed. Cras in lectus elit. Maecenas tempus nunc vitae mi egestas venenatis. Aliquam rhoncus, purus in vehicula porttitor, lacus ante consequat purus, id elementum enim purus nec enim. In sed odio rhoncus, tristique ipsum id, pharetra neque.", " ")), React.createElement("div", {
      className: "news_post_quote"
    }, React.createElement("p", {
      className: "news_post_quote_text"
    }, React.createElement("span", null, "E"), "tiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies venena tis. Suspendisse fermentum sodales lacus, lacinia gravida elit.")), React.createElement("p", {
      className: "news_post_text",
      style: {
        marginTop: 59
      }
    }, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies venenatis. Suspendisse fermentum sodales lacus, lacinia gravida elit dapibus sed. Cras in lectus elit. Maecenas tempus nunc vitae mi egestas venenatis. Aliquam rhoncus, purus in vehicula porttitor, lacus ante consequat purus, id elementum enim purus nec enim. In sed odio rhoncus, tristique ipsum id, pharetra neque.", " "))), React.createElement("div", {
      className: "news_post_comments"
    }, React.createElement("div", {
      className: "comments_title"
    }, "Comments"), React.createElement("ul", {
      className: "comments_list"
    }, React.createElement("li", {
      className: "comment"
    }, React.createElement("div", {
      className: "comment_container d-flex flex-row"
    }, React.createElement("div", null, React.createElement("div", {
      className: "comment_image"
    }, React.createElement("img", {
      src: "images/comment_1.jpg",
      alt: true
    }))), React.createElement("div", {
      className: "comment_content"
    }, React.createElement("div", {
      className: "comment_meta"
    }, React.createElement("span", {
      className: "comment_name"
    }, React.createElement("a", {
      href: "#"
    }, "Mark Smith")), React.createElement("span", {
      className: "comment_separator"
    }, "|"), React.createElement("span", {
      className: "comment_date"
    }, "Dec 18, 2017"), React.createElement("span", {
      className: "comment_separator"
    }, "|"), React.createElement("span", {
      className: "comment_reply_link"
    }, React.createElement("a", {
      href: "#"
    }, "Reply"))), React.createElement("p", {
      className: "comment_text"
    }, "Aliquam rhoncus, purus in vehicula porttitor, lacus ante consequat purus, id elementum enim purus nec enim. In sed odio rhoncus, tristique ipsum id, pharetra neque.", " ")))), React.createElement("li", {
      className: "comment"
    }, React.createElement("div", {
      className: "comment_container d-flex flex-row"
    }, React.createElement("div", null, React.createElement("div", {
      className: "comment_image"
    }, React.createElement("img", {
      src: "images/comment_2.jpg",
      alt: true
    }))), React.createElement("div", {
      className: "comment_content"
    }, React.createElement("div", {
      className: "comment_meta"
    }, React.createElement("span", {
      className: "comment_name"
    }, React.createElement("a", {
      href: "#"
    }, "Mark Smith")), React.createElement("span", {
      className: "comment_separator"
    }, "|"), React.createElement("span", {
      className: "comment_date"
    }, "Dec 18, 2017"), React.createElement("span", {
      className: "comment_separator"
    }, "|"), React.createElement("span", {
      className: "comment_reply_link"
    }, React.createElement("a", {
      href: "#"
    }, "Reply"))), React.createElement("p", {
      className: "comment_text"
    }, "Aliquam rhoncus, purus in vehicula porttitor, lacus ante consequat purus, id elementum enim purus nec enim. In sed odio rhoncus, tristique ipsum id, pharetra neque.", " ")))))), React.createElement("div", {
      className: "leave_comment"
    }, React.createElement("div", {
      className: "leave_comment_title"
    }, "Leave a comment"), React.createElement("div", {
      className: "leave_comment_form_container"
    }, React.createElement("form", {
      action: "post"
    }, React.createElement("input", {
      id: "comment_form_name",
      className: "input_field contact_form_name",
      type: "text",
      placeholder: "Name",
      required: "required",
      "data-error": "Name is required."
    }), React.createElement("input", {
      id: "comment_form_email",
      className: "input_field contact_form_email",
      type: "email",
      placeholder: "E-mail",
      required: "required",
      "data-error": "Valid email is required."
    }), React.createElement("textarea", {
      id: "comment_form_message",
      className: "text_field contact_form_message",
      name: "message",
      placeholder: "Message",
      required: "required",
      "data-error": "Please, write us a message.",
      defaultValue: ""
    }), React.createElement("button", {
      id: "comment_send_btn",
      type: "submit",
      className: "comment_send_btn trans_200",
      value: "Submit"
    }, "send message"))))), React.createElement("div", {
      className: "col-lg-4"
    }, React.createElement("div", {
      className: "sidebar"
    }, React.createElement("div", {
      className: "sidebar_section"
    }, React.createElement("div", {
      className: "sidebar_section_title"
    }, React.createElement("h3", null, "Archives")), React.createElement("ul", {
      className: "sidebar_list"
    }, React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Design Courses")), React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "All you need to know")), React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Uncategorized")), React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "About Our Departments")), React.createElement("li", {
      className: "sidebar_list_item"
    }, React.createElement("a", {
      href: "#"
    }, "Choose the right course")))), React.createElement("div", {
      className: "sidebar_section"
    }, React.createElement("div", {
      className: "sidebar_section_title"
    }, React.createElement("h3", null, "Latest posts")), React.createElement("div", {
      className: "latest_posts"
    }, React.createElement("div", {
      className: "latest_post"
    }, React.createElement("div", {
      className: "latest_post_image"
    }, React.createElement("img", {
      src: "images/latest_1.jpg",
      alt: "https://unsplash.com/@dsmacinnes"
    })), React.createElement("div", {
      className: "latest_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Why do you need a qualification?")), React.createElement("div", {
      className: "latest_post_meta"
    }, React.createElement("span", {
      className: "latest_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "latest_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments")))), React.createElement("div", {
      className: "latest_post"
    }, React.createElement("div", {
      className: "latest_post_image"
    }, React.createElement("img", {
      src: "images/latest_2.jpg",
      alt: "https://unsplash.com/@erothermel"
    })), React.createElement("div", {
      className: "latest_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Why do you need a qualification?")), React.createElement("div", {
      className: "latest_post_meta"
    }, React.createElement("span", {
      className: "latest_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "latest_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments")))), React.createElement("div", {
      className: "latest_post"
    }, React.createElement("div", {
      className: "latest_post_image"
    }, React.createElement("img", {
      src: "images/latest_3.jpg",
      alt: "https://unsplash.com/@element5digital"
    })), React.createElement("div", {
      className: "latest_post_title"
    }, React.createElement("a", {
      href: "news_post.html"
    }, "Why do you need a qualification?")), React.createElement("div", {
      className: "latest_post_meta"
    }, React.createElement("span", {
      className: "latest_post_author"
    }, React.createElement("a", {
      href: "#"
    }, "By Christian Smith")), React.createElement("span", null, "|"), React.createElement("span", {
      className: "latest_post_comments"
    }, React.createElement("a", {
      href: "#"
    }, "3 Comments")))))), React.createElement("div", {
      className: "sidebar_section"
    }, React.createElement("div", {
      className: "sidebar_section_title"
    }, React.createElement("h3", null, "Tags")), React.createElement("div", {
      className: "tags d-flex flex-row flex-wrap"
    }, React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "Course")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "Design")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "FAQ")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "Teachers")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "School")), React.createElement("div", {
      className: "tag"
    }, React.createElement("a", {
      href: "#"
    }, "Graduate"))))))))), React.createElement(Footer, null));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"teachers.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/new/teachers.jsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Teachers
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let createContainer;
module.link("meteor/react-meteor-data", {
  createContainer(v) {
    createContainer = v;
  }

}, 2);
let Header;
module.link("./header", {
  default(v) {
    Header = v;
  }

}, 3);
let Footer;
module.link("./footer", {
  default(v) {
    Footer = v;
  }

}, 4);

class Teachers extends Component {
  render() {
    return React.createElement("div", {
      className: "super_container"
    }, React.createElement(Header, null), React.createElement("div", {
      className: "menu_container menu_mm"
    }, React.createElement("div", {
      className: "menu_close_container"
    }, React.createElement("div", {
      className: "menu_close"
    })), React.createElement("div", {
      className: "menu_inner menu_mm"
    }, React.createElement("div", {
      className: "menu menu_mm"
    }, React.createElement("ul", {
      className: "menu_list menu_mm"
    }, React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "index.html"
    }, "Home")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "about.html"
    }, "About us")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "courses.html"
    }, "Courses")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "elements.html"
    }, "Elements")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "news.html"
    }, "News")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "contact.html"
    }, "Contact"))), React.createElement("div", {
      className: "menu_social_container menu_mm"
    }, React.createElement("ul", {
      className: "menu_social menu_mm"
    }, React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    }))))), React.createElement("div", {
      className: "menu_copyright menu_mm"
    }, "Colorlib All rights reserved")))), React.createElement("div", {
      className: "home"
    }, React.createElement("div", {
      className: "home_background_container prlx_parent"
    }, React.createElement("div", {
      className: "home_background prlx",
      style: {
        backgroundImage: "url(images/teachers_background.jpg)"
      }
    })), React.createElement("div", {
      className: "home_content"
    }, React.createElement("h1", null, "Teachers"))), React.createElement("div", {
      className: "teachers page_section"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-4 teacher"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("div", {
      className: "card_img"
    }, React.createElement("div", {
      className: "card_plus trans_200 text-center"
    }, React.createElement("a", {
      href: "#"
    }, "+")), React.createElement("img", {
      className: "card-img-top trans_200",
      src: "images/teacher_1.jpg",
      alt: "https://unsplash.com/@michaeldam"
    })), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "#"
    }, "Maria Smith")), React.createElement("div", {
      className: "card-text"
    }, "Graphic Designer"), React.createElement("div", {
      className: "teacher_social"
    }, React.createElement("ul", {
      className: "menu_social"
    }, React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    })))))))), React.createElement("div", {
      className: "col-lg-4 teacher"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("div", {
      className: "card_img"
    }, React.createElement("div", {
      className: "card_plus trans_200 text-center"
    }, React.createElement("a", {
      href: "#"
    }, "+")), React.createElement("img", {
      className: "card-img-top trans_200",
      src: "images/teacher_2.jpg",
      alt: "https://unsplash.com/@jcpeacock"
    })), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "#"
    }, "Christian Blue")), React.createElement("div", {
      className: "card-text"
    }, "Graphic Designer"), React.createElement("div", {
      className: "teacher_social"
    }, React.createElement("ul", {
      className: "menu_social"
    }, React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    })))))))), React.createElement("div", {
      className: "col-lg-4 teacher"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("div", {
      className: "card_img"
    }, React.createElement("div", {
      className: "card_plus trans_200 text-center"
    }, React.createElement("a", {
      href: "#"
    }, "+")), React.createElement("img", {
      className: "card-img-top trans_200",
      src: "images/teacher_3.jpg",
      alt: "https://unsplash.com/photos/n8jeOSxCRfQ"
    })), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "#"
    }, "James Brown")), React.createElement("div", {
      className: "card-text"
    }, "Graphic Designer"), React.createElement("div", {
      className: "teacher_social"
    }, React.createElement("ul", {
      className: "menu_social"
    }, React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    })))))))), React.createElement("div", {
      className: "col-lg-4 teacher"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("div", {
      className: "card_img"
    }, React.createElement("div", {
      className: "card_plus trans_200 text-center"
    }, React.createElement("a", {
      href: "#"
    }, "+")), React.createElement("img", {
      className: "card-img-top trans_200",
      src: "images/teacher_4.jpg",
      alt: "https://unsplash.com/@seteales"
    })), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "#"
    }, "Julie Denver")), React.createElement("div", {
      className: "card-text"
    }, "Graphic Designer"), React.createElement("div", {
      className: "teacher_social"
    }, React.createElement("ul", {
      className: "menu_social"
    }, React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    })))))))), React.createElement("div", {
      className: "col-lg-4 teacher"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("div", {
      className: "card_img"
    }, React.createElement("div", {
      className: "card_plus trans_200 text-center"
    }, React.createElement("a", {
      href: "#"
    }, "+")), React.createElement("img", {
      className: "card-img-top trans_200",
      src: "images/teacher_5.jpg",
      alt: "https://unsplash.com/@jaredsluyter"
    })), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "#"
    }, "Julie Denver")), React.createElement("div", {
      className: "card-text"
    }, "Graphic Designer"), React.createElement("div", {
      className: "teacher_social"
    }, React.createElement("ul", {
      className: "menu_social"
    }, React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    })))))))), React.createElement("div", {
      className: "col-lg-4 teacher"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("div", {
      className: "card_img"
    }, React.createElement("div", {
      className: "card_plus trans_200 text-center"
    }, React.createElement("a", {
      href: "#"
    }, "+")), React.createElement("img", {
      className: "card-img-top trans_200",
      src: "images/teacher_6.jpg",
      alt: "https://unsplash.com/@mehdizadeh"
    })), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "#"
    }, "Julie Denver")), React.createElement("div", {
      className: "card-text"
    }, "Graphic Designer"), React.createElement("div", {
      className: "teacher_social"
    }, React.createElement("ul", {
      className: "menu_social"
    }, React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    }))))))))))), React.createElement("div", {
      className: "milestones"
    }, React.createElement("div", {
      className: "milestones_background",
      style: {
        backgroundImage: "url(images/milestones_background.jpg)"
      }
    }), React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-3 milestone_col"
    }, React.createElement("div", {
      className: "milestone text-center"
    }, React.createElement("div", {
      className: "milestone_icon"
    }, React.createElement("img", {
      src: "images/milestone_1.svg",
      alt: "https://www.flaticon.com/authors/zlatko-najdenovski"
    })), React.createElement("div", {
      className: "milestone_counter",
      "data-end-value": 750
    }, "0"), React.createElement("div", {
      className: "milestone_text"
    }, "Current Students"))), React.createElement("div", {
      className: "col-lg-3 milestone_col"
    }, React.createElement("div", {
      className: "milestone text-center"
    }, React.createElement("div", {
      className: "milestone_icon"
    }, React.createElement("img", {
      src: "images/milestone_2.svg",
      alt: "https://www.flaticon.com/authors/zlatko-najdenovski"
    })), React.createElement("div", {
      className: "milestone_counter",
      "data-end-value": 120
    }, "0"), React.createElement("div", {
      className: "milestone_text"
    }, "Certified Teachers"))), React.createElement("div", {
      className: "col-lg-3 milestone_col"
    }, React.createElement("div", {
      className: "milestone text-center"
    }, React.createElement("div", {
      className: "milestone_icon"
    }, React.createElement("img", {
      src: "images/milestone_3.svg",
      alt: "https://www.flaticon.com/authors/zlatko-najdenovski"
    })), React.createElement("div", {
      className: "milestone_counter",
      "data-end-value": 39
    }, "0"), React.createElement("div", {
      className: "milestone_text"
    }, "Approved Courses"))), React.createElement("div", {
      className: "col-lg-3 milestone_col"
    }, React.createElement("div", {
      className: "milestone text-center"
    }, React.createElement("div", {
      className: "milestone_icon"
    }, React.createElement("img", {
      src: "images/milestone_4.svg",
      alt: "https://www.flaticon.com/authors/zlatko-najdenovski"
    })), React.createElement("div", {
      className: "milestone_counter",
      "data-end-value": 3500,
      "data-sign-before": "+"
    }, "0"), React.createElement("div", {
      className: "milestone_text"
    }, "Graduate Students")))))), React.createElement("div", {
      className: "become"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row row-eq-height"
    }, React.createElement("div", {
      className: "col-lg-6 order-2 order-lg-1"
    }, React.createElement("div", {
      className: "become_title"
    }, React.createElement("h1", null, "Become a teacher")), React.createElement("p", {
      className: "become_text"
    }, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies venenatis. Suspendisse fermentum sodales lacus, lacinia gravida elit dapibus sed. Cras in lectus elit. Maecenas tempus nunc vitae mi egestas venenatis. Aliquam rhoncus, purus in vehicula porttitor, lacus ante consequat purus, id elementum enim purus nec enim. In sed odio rhoncus, tristique ipsum id, pharetra neque."), React.createElement("div", {
      className: "become_button text-center trans_200"
    }, React.createElement("a", {
      href: "#"
    }, "Read More"))), React.createElement("div", {
      className: "col-lg-6 order-1 order-lg-2"
    }, React.createElement("div", {
      className: "become_image"
    }, React.createElement("img", {
      src: "images/become.jpg",
      alt: true
    })))))), React.createElement(Footer, null));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"LoginPage.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/LoginPage.jsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => LoginPage
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let createContainer;
module.link("meteor/react-meteor-data", {
  createContainer(v) {
    createContainer = v;
  }

}, 2);

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push('/');
      }
    });
  }

  render() {
    const error = this.state.error;
    return React.createElement("div", {
      className: "modal show"
    }, React.createElement("div", {
      className: "modal-dialog"
    }, React.createElement("div", {
      className: "modal-content"
    }, React.createElement("div", {
      className: "modal-header"
    }, React.createElement("h1", {
      className: "text-center"
    }, "Login")), React.createElement("div", {
      className: "modal-body"
    }, error.length > 0 ? React.createElement("div", {
      className: "alert alert-danger fade in"
    }, error) : '', React.createElement("form", {
      id: "login-form",
      className: "form col-md-12 center-block",
      onSubmit: this.handleSubmit
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "email",
      id: "login-email",
      className: "form-control input-lg",
      placeholder: "email"
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "password",
      id: "login-password",
      className: "form-control input-lg",
      placeholder: "password"
    })), React.createElement("div", {
      className: "form-group text-center"
    }, React.createElement("input", {
      type: "submit",
      id: "login-button",
      className: "btn btn-primary btn-lg btn-block",
      value: "Login"
    })), React.createElement("div", {
      className: "form-group text-center"
    }, React.createElement("p", {
      className: "text-center"
    }, "Don't have an account? Register ", React.createElement(Link, {
      to: "/signup"
    }, "here"))))), React.createElement("div", {
      className: "modal-footer",
      style: {
        borderTop: 0
      }
    }))));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"MainPage.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/MainPage.jsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => MainPage
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 2);

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    let currentUser = this.props.currentUser;
    let userDataAvailable = currentUser !== undefined;
    let loggedIn = currentUser && userDataAvailable;
    return React.createElement("div", null, React.createElement("div", null, React.createElement("div", {
      className: "container"
    }, React.createElement("h1", {
      className: "text-center"
    }, loggedIn ? 'Welcome ' + currentUser.username : ''))));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SignupPage.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/SignupPage.jsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => SignupPage
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory, Link;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  },

  Link(v) {
    Link = v;
  }

}, 1);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 2);

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    this.setState({
      error: "test"
    });
    Accounts.createUser({
      email: email,
      username: name,
      password: password
    }, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    const error = this.state.error;
    return React.createElement("div", {
      className: "modal show"
    }, React.createElement("div", {
      className: "modal-dialog"
    }, React.createElement("div", {
      className: "modal-content"
    }, React.createElement("div", {
      className: "modal-header"
    }, React.createElement("h1", {
      className: "text-center"
    }, "Sign up")), React.createElement("div", {
      className: "modal-body"
    }, error.length > 0 ? React.createElement("div", {
      className: "alert alert-danger fade in"
    }, error) : '', React.createElement("form", {
      id: "login-form",
      className: "form col-md-12 center-block",
      onSubmit: this.handleSubmit
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "text",
      id: "signup-name",
      className: "form-control input-lg",
      placeholder: "name"
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "email",
      id: "signup-email",
      className: "form-control input-lg",
      placeholder: "email"
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "password",
      id: "signup-password",
      className: "form-control input-lg",
      placeholder: "password"
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("input", {
      type: "submit",
      id: "login-button",
      className: "btn btn-lg btn-primary btn-block",
      value: "Sign Up"
    })), React.createElement("div", {
      className: "form-group"
    }, React.createElement("p", {
      className: "text-center"
    }, "Already have an account? Login ", React.createElement(Link, {
      to: "/login"
    }, "here"))))), React.createElement("div", {
      className: "modal-footer",
      style: {
        borderTop: 0
      }
    }))));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"containers":{"AppContainer.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/containers/AppContainer.jsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => AppContainer
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withHistory;
module.link("react-router-dom", {
  withHistory(v) {
    withHistory = v;
  }

}, 1);
let MainContainer;
module.link("./MainContainer.jsx", {
  default(v) {
    MainContainer = v;
  }

}, 2);
let Header;
module.link("../../ui/pages/new/header", {
  default(v) {
    Header = v;
  }

}, 3);
let Footer;
module.link("../../ui/pages/new/footer", {
  default(v) {
    Footer = v;
  }

}, 4);

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData() {
    return {
      isAuthenticated: Meteor.userId() !== null
    };
  }

  componentWillMount() {
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  logout(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return React.createElement("div", {
      className: "super_container"
    }, React.createElement("button", {
      href: "#",
      onClick: this.logout
    }, "Logout"), React.createElement(MainContainer, null), React.createElement(Header, null), React.createElement("div", {
      className: "menu_container menu_mm"
    }, React.createElement("div", {
      className: "menu_close_container"
    }, React.createElement("div", {
      className: "menu_close"
    })), React.createElement("div", {
      className: "menu_inner menu_mm"
    }, React.createElement("div", {
      className: "menu menu_mm"
    }, React.createElement("ul", {
      className: "menu_list menu_mm"
    }, React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "/"
    }, "Home")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, "About us")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "/Courses"
    }, "Courses")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "/Elements"
    }, "Elements")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "/News"
    }, "News")), React.createElement("li", {
      className: "menu_item menu_mm"
    }, React.createElement("a", {
      href: "/Contact"
    }, "Contact"))), React.createElement("div", {
      className: "menu_social_container menu_mm"
    }, React.createElement("ul", {
      className: "menu_social menu_mm"
    }, React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-pinterest"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-linkedin-in"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-instagram"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-facebook-f"
    }))), React.createElement("li", {
      className: "menu_social_item menu_mm"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fab fa-twitter"
    }))))), React.createElement("div", {
      className: "menu_copyright menu_mm"
    }, "Colorlib All rights reserved")))), React.createElement("div", {
      className: "home"
    }, React.createElement("div", {
      className: "hero_slider_container"
    }, React.createElement("div", {
      className: "hero_slider owl-carousel"
    }, React.createElement("div", {
      className: "hero_slide"
    }, React.createElement("div", {
      className: "hero_slide_background",
      style: {
        backgroundImage: "url(/images/slider_background.jpg)"
      }
    }), React.createElement("div", {
      className: "hero_slide_container d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", {
      className: "hero_slide_content text-center"
    }, React.createElement("h1", {
      "data-animation-in": "fadeInUp",
      "data-animation-out": "animate-out fadeOut"
    }, "Get your ", React.createElement("span", null, "Education"), " today!")))), React.createElement("div", {
      className: "hero_slide"
    }, React.createElement("div", {
      className: "hero_slide_background",
      style: {
        backgroundImage: "url(/images/slider_background.jpg)"
      }
    }), React.createElement("div", {
      className: "hero_slide_container d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", {
      className: "hero_slide_content text-center"
    }, React.createElement("h1", {
      "data-animation-in": "fadeInUp",
      "data-animation-out": "animate-out fadeOut"
    }, "Get your ", React.createElement("span", null, "Education"), " today!")))), React.createElement("div", {
      className: "hero_slide"
    }, React.createElement("div", {
      className: "hero_slide_background",
      style: {
        backgroundImage: "url(/images/slider_background.jpg)"
      }
    }), React.createElement("div", {
      className: "hero_slide_container d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", {
      className: "hero_slide_content text-center"
    }, React.createElement("h1", {
      "data-animation-in": "fadeInUp",
      "data-animation-out": "animate-out fadeOut"
    }, "Get your ", React.createElement("span", null, "Education"), " today!"))))), React.createElement("div", {
      className: "hero_slider_left hero_slider_nav trans_200"
    }, React.createElement("span", {
      className: "trans_200"
    }, "prev")), React.createElement("div", {
      className: "hero_slider_right hero_slider_nav trans_200"
    }, React.createElement("span", {
      className: "trans_200"
    }, "next")))), React.createElement("div", {
      className: "hero_boxes"
    }, React.createElement("div", {
      className: "hero_boxes_inner"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-4 hero_box_col"
    }, React.createElement("div", {
      className: "hero_box d-flex flex-row align-items-center justify-content-start"
    }, React.createElement("img", {
      src: "images/earth-globe.svg",
      className: "svg",
      alt: ""
    }), React.createElement("div", {
      className: "hero_box_content"
    }, React.createElement("h2", {
      className: "hero_box_title"
    }, "Online Courses"), React.createElement("a", {
      href: "/Courses",
      className: "hero_box_link"
    }, "view more")))), React.createElement("div", {
      className: "col-lg-4 hero_box_col"
    }, React.createElement("div", {
      className: "hero_box d-flex flex-row align-items-center justify-content-start"
    }, React.createElement("img", {
      src: "/images/books.svg",
      className: "svg",
      alt: ""
    }), React.createElement("div", {
      className: "hero_box_content"
    }, React.createElement("h2", {
      className: "hero_box_title"
    }, "Our Library"), React.createElement("a", {
      href: "/Courses",
      className: "hero_box_link"
    }, "view more")))), React.createElement("div", {
      className: "col-lg-4 hero_box_col"
    }, React.createElement("div", {
      className: "hero_box d-flex flex-row align-items-center justify-content-start"
    }, React.createElement("img", {
      src: "/images/professor.svg",
      className: "svg",
      alt: ""
    }), React.createElement("div", {
      className: "hero_box_content"
    }, React.createElement("h2", {
      className: "hero_box_title"
    }, "Our Teachers"), React.createElement("a", {
      href: "/Teachers",
      className: "hero_box_link"
    }, "view more")))))))), React.createElement("div", {
      className: "popular page_section"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "section_title text-center"
    }, React.createElement("h1", null, "Popular Courses")))), React.createElement("div", {
      className: "row course_boxes"
    }, React.createElement("div", {
      className: "col-lg-4 course_box"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("img", {
      className: "card-img-top",
      src: "images/course_1.jpg",
      alt: "https://unsplash.com/@kellybrito"
    }), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "courses.html"
    }, "A complete guide to design")), React.createElement("div", {
      className: "card-text"
    }, "Adobe Guide, Layes, Smart Objects etc...")), React.createElement("div", {
      className: "price_box d-flex flex-row align-items-center"
    }, React.createElement("div", {
      className: "course_author_image"
    }, React.createElement("img", {
      src: "images/author.jpg",
      alt: "https://unsplash.com/@mehdizadeh"
    })), React.createElement("div", {
      className: "course_author_name"
    }, "Michael Smith, ", React.createElement("span", null, "Author")), React.createElement("div", {
      className: "course_price d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("span", null, "$29"))))), React.createElement("div", {
      className: "col-lg-4 course_box"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("img", {
      className: "card-img-top",
      src: "images/course_2.jpg",
      alt: "https://unsplash.com/@cikstefan"
    }), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "courses.html"
    }, "Beginners guide to HTML")), React.createElement("div", {
      className: "card-text"
    }, "Adobe Guide, Layes, Smart Objects etc...")), React.createElement("div", {
      className: "price_box d-flex flex-row align-items-center"
    }, React.createElement("div", {
      className: "course_author_image"
    }, React.createElement("img", {
      src: "images/author.jpg",
      alt: "https://unsplash.com/@mehdizadeh"
    })), React.createElement("div", {
      className: "course_author_name"
    }, "Michael Smith, ", React.createElement("span", null, "Author")), React.createElement("div", {
      className: "course_price d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("span", null, "$29"))))), React.createElement("div", {
      className: "col-lg-4 course_box"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("img", {
      className: "card-img-top",
      src: "images/course_3.jpg",
      alt: "https://unsplash.com/@dsmacinnes"
    }), React.createElement("div", {
      className: "card-body text-center"
    }, React.createElement("div", {
      className: "card-title"
    }, React.createElement("a", {
      href: "courses.html"
    }, "Advanced Photoshop")), React.createElement("div", {
      className: "card-text"
    }, "Adobe Guide, Layes, Smart Objects etc...")), React.createElement("div", {
      className: "price_box d-flex flex-row align-items-center"
    }, React.createElement("div", {
      className: "course_author_image"
    }, React.createElement("img", {
      src: "images/author.jpg",
      alt: "https://unsplash.com/@mehdizadeh"
    })), React.createElement("div", {
      className: "course_author_name"
    }, "Michael Smith, ", React.createElement("span", null, "Author")), React.createElement("div", {
      className: "course_price d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("span", null, "$29")))))))), React.createElement("div", {
      className: "register"
    }, React.createElement("div", {
      className: "container-fluid"
    }, React.createElement("div", {
      className: "row row-eq-height"
    }, React.createElement("div", {
      className: "col-lg-6 nopadding"
    }, React.createElement("div", {
      className: "register_section d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", {
      className: "register_content text-center"
    }, React.createElement("h1", {
      className: "register_title"
    }, "Register now and get a discount ", React.createElement("span", null, "50%"), " ", "discount until 1 January"), React.createElement("p", {
      className: "register_text"
    }, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo."), React.createElement("div", {
      className: "button button_1 register_button mx-auto trans_200"
    }, React.createElement("a", {
      href: "#"
    }, "register now"))))), React.createElement("div", {
      className: "col-lg-6 nopadding"
    }, React.createElement("div", {
      className: "search_section d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", {
      className: "search_background",
      style: {
        backgroundImage: "url(images/search_background.jpg)"
      }
    }), React.createElement("div", {
      className: "search_content text-center"
    }, React.createElement("h1", {
      className: "search_title"
    }, "Search for your course"), React.createElement("form", {
      id: "search_form",
      className: "search_form",
      action: "post"
    }, React.createElement("input", {
      id: "search_form_name",
      className: "input_field search_form_name",
      type: "text",
      placeholder: "Course Name",
      required: "required",
      "data-error": "Course name is required."
    }), React.createElement("input", {
      id: "search_form_category",
      className: "input_field search_form_category",
      type: "text",
      placeholder: "Category"
    }), React.createElement("input", {
      id: "search_form_degree",
      className: "input_field search_form_degree",
      type: "text",
      placeholder: "Degree"
    }), React.createElement("button", {
      id: "search_submit_button",
      type: "submit",
      className: "search_submit_button trans_200",
      value: "Submit"
    }, "search course")))))))), React.createElement("div", {
      className: "services page_section"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "section_title text-center"
    }, React.createElement("h1", null, "Our Services")))), React.createElement("div", {
      className: "row services_row"
    }, React.createElement("div", {
      className: "col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start"
    }, React.createElement("div", {
      className: "icon_container d-flex flex-column justify-content-end"
    }, React.createElement("img", {
      src: "images/earth-globe.svg",
      alt: ""
    })), React.createElement("h3", null, "Online Courses"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.")), React.createElement("div", {
      className: "col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start"
    }, React.createElement("div", {
      className: "icon_container d-flex flex-column justify-content-end"
    }, React.createElement("img", {
      src: "images/exam.svg",
      alt: ""
    })), React.createElement("h3", null, "Indoor Courses"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.")), React.createElement("div", {
      className: "col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start"
    }, React.createElement("div", {
      className: "icon_container d-flex flex-column justify-content-end"
    }, React.createElement("img", {
      src: "images/books.svg",
      alt: ""
    })), React.createElement("h3", null, "Amazing Library"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.")), React.createElement("div", {
      className: "col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start"
    }, React.createElement("div", {
      className: "icon_container d-flex flex-column justify-content-end"
    }, React.createElement("img", {
      src: "images/professor.svg",
      alt: ""
    })), React.createElement("h3", null, "Exceptional Professors"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.")), React.createElement("div", {
      className: "col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start"
    }, React.createElement("div", {
      className: "icon_container d-flex flex-column justify-content-end"
    }, React.createElement("img", {
      src: "images/blackboard.svg",
      alt: ""
    })), React.createElement("h3", null, "Top Programs"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.")), React.createElement("div", {
      className: "col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start"
    }, React.createElement("div", {
      className: "icon_container d-flex flex-column justify-content-end"
    }, React.createElement("img", {
      src: "images/mortarboard.svg",
      alt: ""
    })), React.createElement("h3", null, "Graduate Diploma"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum."))))), React.createElement("div", {
      className: "testimonials page_section"
    }, React.createElement("div", {
      className: "testimonials_background_container prlx_parent"
    }, React.createElement("div", {
      className: "testimonials_background prlx",
      style: {
        backgroundImage: "url(images/testimonials_background.jpg)"
      }
    })), React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "section_title text-center"
    }, React.createElement("h1", null, "What our students say")))), React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-10 offset-lg-1"
    }, React.createElement("div", {
      className: "testimonials_slider_container"
    }, React.createElement("div", {
      className: "owl-carousel owl-theme testimonials_slider"
    }, React.createElement("div", {
      className: "owl-item"
    }, React.createElement("div", {
      className: "testimonials_item text-center"
    }, React.createElement("div", {
      className: "quote"
    }, "\u201C"), React.createElement("p", {
      className: "testimonials_text"
    }, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum."), React.createElement("div", {
      className: "testimonial_user"
    }, React.createElement("div", {
      className: "testimonial_image mx-auto"
    }, React.createElement("img", {
      src: "images/testimonials_user.jpg",
      alt: ""
    })), React.createElement("div", {
      className: "testimonial_name"
    }, "james cooper"), React.createElement("div", {
      className: "testimonial_title"
    }, "Graduate Student")))), React.createElement("div", {
      className: "owl-item"
    }, React.createElement("div", {
      className: "testimonials_item text-center"
    }, React.createElement("div", {
      className: "quote"
    }, "\u201C"), React.createElement("p", {
      className: "testimonials_text"
    }, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum."), React.createElement("div", {
      className: "testimonial_user"
    }, React.createElement("div", {
      className: "testimonial_image mx-auto"
    }, React.createElement("img", {
      src: "images/testimonials_user.jpg",
      alt: ""
    })), React.createElement("div", {
      className: "testimonial_name"
    }, "james cooper"), React.createElement("div", {
      className: "testimonial_title"
    }, "Graduate Student")))), React.createElement("div", {
      className: "owl-item"
    }, React.createElement("div", {
      className: "testimonials_item text-center"
    }, React.createElement("div", {
      className: "quote"
    }, "\u201C"), React.createElement("p", {
      className: "testimonials_text"
    }, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum."), React.createElement("div", {
      className: "testimonial_user"
    }, React.createElement("div", {
      className: "testimonial_image mx-auto"
    }, React.createElement("img", {
      src: "images/testimonials_user.jpg",
      alt: ""
    })), React.createElement("div", {
      className: "testimonial_name"
    }, "james cooper"), React.createElement("div", {
      className: "testimonial_title"
    }, "Graduate Student")))))))))), React.createElement("div", {
      className: "events page_section"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "section_title text-center"
    }, React.createElement("h1", null, "Upcoming Events")))), React.createElement("div", {
      className: "event_items"
    }, React.createElement("div", {
      className: "row event_item"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "row d-flex flex-row align-items-end"
    }, React.createElement("div", {
      className: "col-lg-2 order-lg-1 order-2"
    }, React.createElement("div", {
      className: "event_date d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", {
      className: "event_day"
    }, "07"), React.createElement("div", {
      className: "event_month"
    }, "January"))), React.createElement("div", {
      className: "col-lg-6 order-lg-2 order-3"
    }, React.createElement("div", {
      className: "event_content"
    }, React.createElement("div", {
      className: "event_name"
    }, React.createElement("a", {
      className: "trans_200",
      href: "#"
    }, "Student Festival")), React.createElement("div", {
      className: "event_location"
    }, "Grand Central Park"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor."))), React.createElement("div", {
      className: "col-lg-4 order-lg-3 order-1"
    }, React.createElement("div", {
      className: "event_image"
    }, React.createElement("img", {
      src: "images/event_1.jpg",
      alt: "https://unsplash.com/@theunsteady5"
    })))))), React.createElement("div", {
      className: "row event_item"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "row d-flex flex-row align-items-end"
    }, React.createElement("div", {
      className: "col-lg-2 order-lg-1 order-2"
    }, React.createElement("div", {
      className: "event_date d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", {
      className: "event_day"
    }, "07"), React.createElement("div", {
      className: "event_month"
    }, "January"))), React.createElement("div", {
      className: "col-lg-6 order-lg-2 order-3"
    }, React.createElement("div", {
      className: "event_content"
    }, React.createElement("div", {
      className: "event_name"
    }, React.createElement("a", {
      className: "trans_200",
      href: "#"
    }, "Open day in the Univesrsity campus")), React.createElement("div", {
      className: "event_location"
    }, "Grand Central Park"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor."))), React.createElement("div", {
      className: "col-lg-4 order-lg-3 order-1"
    }, React.createElement("div", {
      className: "event_image"
    }, React.createElement("img", {
      src: "images/event_2.jpg",
      alt: "https://unsplash.com/@claybanks1989"
    })))))), React.createElement("div", {
      className: "row event_item"
    }, React.createElement("div", {
      className: "col"
    }, React.createElement("div", {
      className: "row d-flex flex-row align-items-end"
    }, React.createElement("div", {
      className: "col-lg-2 order-lg-1 order-2"
    }, React.createElement("div", {
      className: "event_date d-flex flex-column align-items-center justify-content-center"
    }, React.createElement("div", {
      className: "event_day"
    }, "07"), React.createElement("div", {
      className: "event_month"
    }, "January"))), React.createElement("div", {
      className: "col-lg-6 order-lg-2 order-3"
    }, React.createElement("div", {
      className: "event_content"
    }, React.createElement("div", {
      className: "event_name"
    }, React.createElement("a", {
      className: "trans_200",
      href: "#"
    }, "Student Graduation Ceremony")), React.createElement("div", {
      className: "event_location"
    }, "Grand Central Park"), React.createElement("p", null, "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor."))), React.createElement("div", {
      className: "col-lg-4 order-lg-3 order-1"
    }, React.createElement("div", {
      className: "event_image"
    }, React.createElement("img", {
      src: "images/event_3.jpg",
      alt: "https://unsplash.com/@juanmramosjr"
    }))))))))), React.createElement(Footer, null));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Course.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/containers/Course.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Course
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let classnames;
module.link("classnames", {
  default(v) {
    classnames = v;
  }

}, 2);
let Courses;
module.link("../../api/courses", {
  Courses(v) {
    Courses = v;
  }

}, 3);

class Course extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('courses.setChecked', this.props.course._id, !this.props.course.checked);
  }

  deleteThisCourse() {
    Meteor.call('courses.remove', this.props.course._id);
  }

  togglePrivate() {
    Meteor.call('courses.setPrivate', this.props.course._id, !this.props.course.private);
  }

  render() {
    // Give courses a different className when they are checked off,
    // so that we can style them nicely in CSS
    const courseClassName = classnames({
      checked: this.props.course.checked,
      private: this.props.course.private
    });
    return React.createElement("div", {
      className: courseClassName
    }, React.createElement("button", {
      className: "delete",
      onClick: this.deleteThisCourse.bind(this)
    }, "\xD7"), React.createElement("input", {
      type: "checkbox",
      readOnly: true,
      checked: !!this.props.course.checked,
      onClick: this.toggleChecked.bind(this)
    }), this.props.showPrivateButton ? React.createElement("button", {
      className: "toggle-private",
      onClick: this.togglePrivate.bind(this)
    }, this.props.course.private ? 'Private' : 'Public') : '', React.createElement("span", {
      className: "text"
    }, React.createElement("strong", null, this.props.course.username), ": ", this.props.course.text));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"MainContainer.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/containers/MainContainer.jsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let createContainer;
module.link("meteor/react-meteor-data", {
  createContainer(v) {
    createContainer = v;
  }

}, 0);
let MainPage;
module.link("../pages/MainPage.jsx", {
  default(v) {
    MainPage = v;
  }

}, 1);
module.exportDefault(MainContainer = createContainer((_ref) => {
  let {
    params
  } = _ref;
  const currentUser = Meteor.user();
  return {
    currentUser
  };
}, MainPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"client":{"routes.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/routes.jsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  renderRoutes: () => renderRoutes
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Router, Route;
module.link("react-router-dom", {
  BrowserRouter(v) {
    Router = v;
  },

  Route(v) {
    Route = v;
  }

}, 1);
let AppContainer;
module.link("../../ui/containers/AppContainer.jsx", {
  default(v) {
    AppContainer = v;
  }

}, 2);
let MainContainer;
module.link("../../ui/containers/MainContainer.jsx", {
  default(v) {
    MainContainer = v;
  }

}, 3);
let SignupPage;
module.link("../../ui/pages/SignupPage.jsx", {
  default(v) {
    SignupPage = v;
  }

}, 4);
let LoginPage;
module.link("../../ui/pages/LoginPage.jsx", {
  default(v) {
    LoginPage = v;
  }

}, 5);
let MainPage;
module.link("../../ui/pages/MainPage", {
  default(v) {
    MainPage = v;
  }

}, 6);
let Contact;
module.link("../../ui/pages/new/contact.jsx", {
  default(v) {
    Contact = v;
  }

}, 7);
let Courses;
module.link("../../ui/pages/new/courses.jsx", {
  default(v) {
    Courses = v;
  }

}, 8);
let Elements;
module.link("../../ui/pages/new/elements.jsx", {
  default(v) {
    Elements = v;
  }

}, 9);
let New_Post;
module.link("../../ui/pages/new/new_post.jsx", {
  default(v) {
    New_Post = v;
  }

}, 10);
let New;
module.link("../../ui/pages/new/new.jsx", {
  default(v) {
    New = v;
  }

}, 11);
let Teachers;
module.link("../../ui/pages/new/teachers.jsx", {
  default(v) {
    Teachers = v;
  }

}, 12);

const renderRoutes = () => React.createElement(Router, null, React.createElement("div", null, React.createElement(Route, {
  path: "/login",
  component: LoginPage
}), React.createElement(Route, {
  path: "/signup",
  component: SignupPage
}), React.createElement(Route, {
  exact: true,
  path: "/",
  component: AppContainer
}), React.createElement(Route, {
  path: "/Contact",
  component: Contact
}), React.createElement(Route, {
  path: "/Courses",
  component: Courses
}), React.createElement(Route, {
  path: "/Elements",
  component: Elements
}), React.createElement(Route, {
  path: "/New_Post",
  component: New_Post
}), React.createElement(Route, {
  path: "/New",
  component: New
}), React.createElement(Route, {
  path: "/Teachers",
  component: Teachers
})));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"api":{"courses.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/courses.jsx                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Courses: () => Courses
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 2);
const Courses = new Mongo.Collection('courses');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish courses that are public or belong to the current user
  Meteor.publish('courses', function coursesPublication() {
    return Courses.find({
      $or: [{
        private: {
          $ne: true
        }
      }, {
        owner: this.userId
      }]
    });
  });
}

Meteor.methods({
  'courses.insert'(text) {
    check(text, String); // Make sure the user is logged in before inserting a course

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Courses.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },

  'courses.remove'(courseId) {
    check(courseId, String);
    const course = Courses.findOne(courseId);

    if (course.private && course.owner !== this.userId) {
      // If the course is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Courses.remove(courseId);
  },

  'courses.setChecked'(courseId, setChecked) {
    check(courseId, String);
    check(setChecked, Boolean);
    const course = Courses.findOne(courseId);

    if (course.private && course.owner !== this.userId) {
      // If the course is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Courses.update(courseId, {
      $set: {
        checked: setChecked
      }
    });
  },

  'courses.setPrivate'(courseId, setToPrivate) {
    check(courseId, String);
    check(setToPrivate, Boolean);
    const course = Courses.findOne(courseId); // Make sure only the course owner can make a course private

    if (course.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Courses.update(courseId, {
      $set: {
        private: setToPrivate
      }
    });
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"assets":{"images":{"astrolab.png":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/astrolab.png                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./astrolab.png.js", { "*": "*+" });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"astrolab.png.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/astrolab.png.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require('meteor/meteor').Meteor.absoluteUrl('static/client/assets/images/astrolab.png');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"envelope.svg":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/envelope.svg                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./envelope.svg.js", { "*": "*+" });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"envelope.svg.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/envelope.svg.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require('meteor/meteor').Meteor.absoluteUrl('static/client/assets/images/envelope.svg');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"phone-call.svg":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/phone-call.svg                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./phone-call.svg.js", { "*": "*+" });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"phone-call.svg.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/phone-call.svg.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require('meteor/meteor').Meteor.absoluteUrl('static/client/assets/images/phone-call.svg');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"placeholder.svg":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/placeholder.svg                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./placeholder.svg.js", { "*": "*+" });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"placeholder.svg.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/placeholder.svg.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require('meteor/meteor').Meteor.absoluteUrl('static/client/assets/images/placeholder.svg');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"smartphone.svg":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/smartphone.svg                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./smartphone.svg.js", { "*": "*+" });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"smartphone.svg.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/assets/images/smartphone.svg.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require('meteor/meteor').Meteor.absoluteUrl('static/client/assets/images/smartphone.svg');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"main.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.jsx                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 2);
let renderRoutes;
module.link("../imports/startup/client/routes.jsx", {
  renderRoutes(v) {
    renderRoutes = v;
  }

}, 3);
// render routes after DOM has loaded
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('target'));
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".svg",
    ".gif",
    ".png",
    ".jsx",
    ".jpg"
  ]
});

var exports = require("/client/main.jsx");
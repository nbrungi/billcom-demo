/* jshint ignore:start */

import Backbone from "backbone";
import React from "react";
import ReactDOM from "react-dom";
import config from "./examples/config";
import GalleryPage from "./GalleryPage";

export default Backbone.View.extend({

    render: function() {
        ReactDOM.render(<GalleryPage config={config} />, this.el);

        return this;
    }

});

/* jshint ignore:end */

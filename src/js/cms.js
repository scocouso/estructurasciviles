import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import BlogPreview from "./cms-preview-templates/blog";
import ProyectosPreview from "./cms-preview-templates/proyectos";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewStyle("/css/style.css");
CMS.registerPreviewStyle("/css/bootstrap.min.css");
CMS.registerPreviewStyle("/css/font-awesome.min.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("blog", BlogPreview);
CMS.registerPreviewTemplate("proyectos", ProyectosPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerWidget("color", ColorControl);

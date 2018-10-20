import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }
    return <li class={ entry.getIn(["data", "tipo"])}>
                            <div class="item-inner">

                                <img src={ entry.getIn(["data", "image"])} alt="proyecto foto" />
                                <h5>{ entry.getIn(["data", "title"])}</h5>
                                <div class="overlay">
                                    <a class="preview btn btn-outlined btn-primary" title={ entry.getIn(["data", "description"])} href={ entry.getIn(["data", "tipo"])} rel="prettyPhoto"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                        </li>;

  }
}

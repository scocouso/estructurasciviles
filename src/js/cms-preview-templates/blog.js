import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div class="col-sm-8 col-sm-pull-4">
    <div class="blog-item">
    <div class="blog-featured-image">
      <img class="img-responsive img-blog" src="{getAsset(product.get("image"))}" alt="" />
        <div class="overlay">
          <a class="preview btn btn-outlined btn-primary" href="blog-item.html" rel="prettyPhoto"><i class="fa fa-link"></i></a>
        </div>
      </div>
      <div class="blog-content">
                                    <h3 class="main-title">{ entry.getIn(["data", "title"])}</h3>
                                    <div class="entry-meta">
                                      <span><i class="fa fa-clock-o"></i> { format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</span>
                                        <span><i class="fa fa-folder"></i>
                                          {{ range $i,$value := $.Param "categories" }}
                                								<a href="{{ "/categories/" | relLangURL }}{{ $value | urlize }}"> {{ $value }}</a>,
                                					{{ end }}

                                        </span>

                                    </div>
                                    <p class="lead">{{ .Description }}</p>
                                    <p>{ widgetFor("body") }</p>
                                    <hr>

                                    <div class="tags">
                                        <i class="fas fa-tag"></i>
                                        {{ range $i,$value := $.Param "tags" }}
                                							<a  class="btn btn-xs btn-primary btn-outlined" href="{{.buttonLink}}"> {entry.getIn(["data", "values", "tag"])}</a>
                                				{{ end }}

                                    </div>

                                    <hr>
                                </div>
                            </div>

                        </div>
                    </div>

    </div>;
  }
}

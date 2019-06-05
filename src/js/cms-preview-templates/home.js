import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>


        <section id="estructuras" class="white">
          <div class="container">
            <div class="gap"></div>
            <div class="row">
              <div class="col-md-12">
                <div class="center gap fade-down section-heading">
                  <h2 class="main-title">{entry.getIn(["data", "estructuras", "title"])}</h2>
                  <hr/>
                  <p>{entry.getIn(["data", "estructuras", "subtitle"])}</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 fade-up">
                <p>{entry.getIn(["data", "estructuras", "paragraph1"])}</p>
                <p>{entry.getIn(["data", "estructuras", "paragraph2"])}</p>
              </div>
            </div>
            <div class="gap"></div>
            <div class="row">

              {(entry.getIn(["data", "estructuras", "puntos"]) || []).map((punto, index) =>   <div class="col-md-4 col-sm-12" key={index}><div class="service-block">
                <div class="pull-left bounce-in"><i class={punto.get("icono")}></i></div><div class="media-body fade-up"><h3 class="media-heading">{punto.get("titulo")}</h3>
                <p>   {punto.get("text")}         </p>  </div></div>
            </div>)}
            </div>
          </div>
          <div class="gap"></div>
        </section>

        <section id="single-quote" class="divider-section">
          <div class="container">
            <div class="gap"></div>
            <div class="row">
              <div class='col-md-offset-2 col-md-8 fade-up'>
                <div class="row">
                  <div class="col-sm-12">
                    <p class="quote">
                      <i class="fas fa-quote-left"></i>
                      {entry.getIn(["data", "lema", "title"])}
                      <i class="fas fa-quote-right"></i>
                    </p>
                    <small>{entry.getIn(["data", "lema", "subtitle"])}</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="gap"></div>
          </div>
        </section>

        <section id="business" class="white">
          <div class="container">
            <div class="center gap fade-down section-heading">
              <h2 class="main-title">{entry.getIn(["data", "business", "title"])}</h2>
              <hr/>
              <p>{entry.getIn(["data", "business", "subtitle"])}</p>
            </div>
            <div class="gap"></div>
            <div class="row">
              <div class="col-md-12 fade-up">
                <p>{entry.getIn(["data", "business", "paragraph"])}</p>
                <br/>
                <ul>
                {(entry.getIn(["data", "business", "ventajas"]) || []).map((ventaja, index) =>   <li key={index}>{ventaja.get("description")}</li>)}
                </ul>
                </div>
              </div>
              <div class="gap"></div>
              <div class="row">
                <div class="col-md-12">
                  <div class="center gap fade-down section-heading">
                    <h2 class="main-title">{entry.getIn(["data", "business", "title2"])}</h2>
                    <hr/>
                  </div>
                </div>
              </div>
              <div id="advantages_table" class="row">
                {(entry.getIn(["data", "business", "puntos"]) || []).map((punto, index) =>
                <div class="col-md-3 col-xs-6 flip-in"  key={index}>
                  <ul class="plan plan2 featured">

                    <li class="plan-name">
                      <h3>{punto.get("title")}</h3>
                    </li>
                    <li class="ventajas">{punto.get("paragraph")}</li>
                  </ul>
                </div>
                )}
                <div class="gap"></div>
              </div>
              </div>
            </section>

            <section id="stats" class="divider-section">
              <div class="gap"></div>
              <div class="container">
                <div class="row">
                {(entry.getIn(["data", "counters"]) || []).map((contador, i) => <div  class="col-md-3 col-xs-6" key={i}><div class="center bounce-in">
                 <span class="stat-icon"><span class={contador.get("icono")} clas="bounce-in"></span></span>
                 <h1>+<span class="counter">{contador.get("cifra")}</span></h1>
                 <h3>{contador.get("titulo")}</h3>
                </div></div>)}

              </div>
              </div>
              <div class="gap"></div>
            </section>

            <section id="about-us" class="white">
              <div class="container">
                <div class="gap"></div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="center gap fade-down section-heading">
                      <h2 class="main-title">{entry.getIn(["data", "about", "title"])}</h2>
                      <hr/>
                      <p>{entry.getIn(["data", "about", "subtitle"])}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-10 col-md-offset-1 fade-up">
                      {(entry.getIn(["data", "about", "parrafos"]) || []).map((parrafo, i) => <p>{parrafo.get("texto")}</p>)}
                  </div>
                  <div class="col-md-4 fade-up">
                  </div>
                </div>
                <div class="gap"></div>
                <div class="gap"></div>
                <div class="center gap fade-down section-heading">
                  <h2 class="main-title">{entry.getIn(["data", "about", "title2"])}</h2>
                  <hr/>
                </div>
                <div class="gap"></div>
                <div id="meet-the-team" class="row">
                  {(entry.getIn(["data", "about", "equipo"]) || []).map((miembro, i) => <p></p>)}
                 <div class="col-md-5 col-md-offset-1 col-xs-12">
                    <div class="center team-member">
                      <div class="team-image">
                        <img class="img-responsive img-thumbnail bounce-in" src={miembro.get("foto")} alt="" />
                        <div class="overlay">
                          <a class="preview btn btn-outlined btn-primary" href={miembro.get("foto")} rel="prettyPhoto"><i class="fa fa-eye"></i></a>
                        </div>
                      </div>
                      <div class="team-content fade-up">
                        <h5>{miembro.get("nombre")}<small class="role muted">{miembro.get("puesto")}</small></h5>
                        <p>{miembro.get("descripcion")}</p>
                        <a class="btn btn-social btn-linkedin" href={miembro.get("linkedin")}><i class="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
                <div class="gap"></div>
                <div class="gap"></div>
              </div>
            </section>


            <section id="testimonial-carousel" class="divider-section">
              <div class="gap"></div>
              <div class="container">
                <div class="row">
                  <div class="center gap fade-down section-heading">
                    <h2 class="main-title">{entry.getIn(["data", "trustus", "title"])}</h2>
                    <hr/>
                    <div class="gap"></div>
                  </div>
                  <div class='col-md-offset-2 col-md-8 fade-up'>
                    <div class="row">
                        {(entry.getIn(["data", "about", "clientes"]) || []).map((cliente, i) =>
                      <div class="col-sm-3 text-center">
                        <img class="img-responsive" src={miembro.get("foto")} />
                      </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="gap"></div>
            </section>



    </div>
  }
}

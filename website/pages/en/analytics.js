const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = { 
  "title":"Métricas e Analytics",
  "subtitle":"Tire o máximo de proveito utilizando as ferramentas Métricas e Analytics",
  "img":"/img/illustrations/ilustracao-categorias.svg",
  "from":"BLiP Help Center >",
  "session": "Áreas do BLiP",
  "session_url": "/blipareas", 
  "here":"Métricas e Analytics",
  "intro":"Com a abertura da API oficial do WhatsApp (início de Agosto de 2018), tornou-se possível utilizar este canal para melhorar a comunicação entre clientes e empresas. Uma das soluções possíveis, neste cenário, é utilizar o BLiP para organizar e escalar o atendimento humano de uma empresa.",
  "cards":[  
     {  
        "title":"Integração com a ferramenta de Analytics 1",
        "type": "text",
        "url": "#", 
        "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
        "text":"Ver mais!"
     },
     {  
      "title":"Integração com a ferramenta de Analytics 1",
      "type": "video",
      "url": "#", 
      "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text":"Ver mais!"
   },
   {  
    "title":"Integração com a ferramenta de Analytics 1",
    "type": "text",
    "url": "#", 
    "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
    "text":"Ver mais!"
    },
    {  
      "title":"Integração com a ferramenta de Analytics 1",
      "type": "text",
      "url": "#", 
      "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text":"Ver mais!"
    },
    {  
    "title":"Integração com a ferramenta de Analytics 1",
    "type": "text",
    "url": "#", 
    "abstract":"Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
    "text":"Ver mais!"
    },
  ]
};
//BLiP Icon for SVGs
const defs = '/img/defs.svg';
class BlipIcon extends React.Component {
  render() {
    const className = 'blip-icon' + (this.props.className ? (' ' + this.props.className) : '')
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      width="1em" height="1em"
    >
      <use xlinkHref={`${defs}#${this.props.name}`}/>
    </svg>
    );
  }
}


class Analytics extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
        return(
           
            <div>

            {/* Topo */}
            <div>
                <div className="pages-top-category">
                  <div className="main-category">
                    <p className="title-category">{data.title}</p>
                    <p className="subtitle-category">{data.subtitle}</p>
                  </div>
                  <div className="image-category">
                    <img className="img" src={data.img} />
                  </div>
                </div>
              </div>

              {/* Conteudo */}
              <div className="pages-content">
                <div className="navigation">
                  <p className="from">{data.from}</p>
                  <p className="from"><a className="link-from" href={data.session_url}>{data.session}</a> ></p>
                  <p className="here">{data.here}</p>
                </div>
                <div className="info">
                  <p className="intro">{data.intro}</p>
                </div>


                {/* Cards */}
                <div className="cards">
                  {data.cards.map((c, index) => ( 
                  <a href={c.url} className="card" key={index}>
                   
                      { c.type === "video" ? 
                      <div className="title-with-icon">
                        <BlipIcon name="tutorials" className="bp-fs-3 bp-fill-watermelon"></BlipIcon>
                        <p className="title-video">{c.title}</p>
                      </div>
                      :
                      <div className="title-with-icon">
                        <BlipIcon name="txt-file" className="bp-fs-3 bp-fill-sea"></BlipIcon>
                        <p className="title">{c.title}</p>
                      </div>
                      }
                   
                    <p className="abstract">{c.abstract}</p>
                    <div className="seeMore">
                      <p className="text">{c.text}</p>
                      <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                    </div>
                  </a>
                  ))}

                </div>
              </div>
          </div>
        );
    }
}

Analytics.title = 'Growth';
module.exports = Analytics; 
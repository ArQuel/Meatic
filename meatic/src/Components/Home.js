import React, { Component } from "react";
import "../Styles.css" 



class Home extends Component {
  render() {

    return (
        <div id="conteneur2">
            <div class="element"><img src="https://argenteuil.bibenligne.fr/data/argenteuil.bibenligne.fr/application/node/104966/thumb.jpg?v=1538748117"></img></div>
            <div class="element"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSD98MDNxLiuLLN5Xk96w44coNYteQ9AWPqXTK6Z0lBXrDpFXEJw&s"></img></div>
            <div class="element"><img src="data:image/png;base64,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"></img></div>
        </div>
    );
}
}

export default Home;
import React from "react";
import ReactToPrint from "react-to-print";

import ComponentToPrint from "./index";

class Printer extends React.Component {
  render() {
    const { dados } = this.props;

    return (
      <div>
        <ReactToPrint
          trigger={() => <a href={window.location.href}>GERAR PDF</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint
          dados={dados}
          ref={(el) => (this.componentRef = el)}
        />
      </div>
    );
  }
}

export default Printer;

import React from "react";
import ReactToPrint from "react-to-print";

import ComponentToPrint from "./index";

class Printer extends React.Component {
  render() {
    const { dados } = this.props;

    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <div style={styles}>
              <a
                href={window.location.href}
                className="badge badge-danger button-report"
              >
                GERAR PDF
              </a>
            </div>
          )}
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

const styles = {
  textAlign: "center",
  padding: 15,
};

export default Printer;

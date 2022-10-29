import ConsumerProdeContext, { ProdeProvider } from "./index";
import { render, screen } from "@testing-library/react";

describe("unit test prodeProvider", () => {
  it("should render", () => {
    const Component = () => {
      const {resultados} = ConsumerProdeContext();
      return(
        <div>
            {resultados.map(grupo => <p>grupo {grupo.nombre}</p>)}
      </div>
      ) 
      
    };

    render(
      <ProdeProvider>
        <Component />
      </ProdeProvider>
    );
    expect(screen.getByText("grupo A")).toBeInTheDocument();
  });
});

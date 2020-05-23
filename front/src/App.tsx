import React, { useEffect, useState } from "react";
import api from "./service/api";
import { Usuario } from "./shared/domain/model/interface/usuario";
import UsuarioComponent from "./components/usuario";

function App() {
  const [usuarios, definirUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    api.get<Usuario[]>("/usuario").then((response) => {
      definirUsuarios(response.data);
    });
  }, []);
  return (
    <div className="App">
      {usuarios.map((usuario) => (
        <UsuarioComponent key={usuario.email} usuario={usuario} />
      ))}
    </div>
  );
}

export default App;

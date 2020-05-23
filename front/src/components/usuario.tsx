import React from "react";
import { Usuario } from "../shared/domain/model/interface/usuario";

const usuario: React.FC<{ usuario: Usuario }> = ({ usuario }) => {
  return (
    <div>
      <b>Nome: </b> {usuario.nome} <br />
      <b>E-mail: </b> {usuario.email} <br />
    </div>
  );
};

export default usuario;

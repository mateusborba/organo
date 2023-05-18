import "./ListaSuspensa.css";
import React from "react";

interface ListaSuspensaProps{
  label: string;
  aoAlterado: (valor: string) => void;
  itens: string[];
  required: boolean;
  valor: string;
}

const ListaSuspensa = ({label, aoAlterado, itens, required, valor}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={valor}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;


import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { RotasPrivadas } from "./rotasPrivadas";
import { RotasPublicas } from './rotasPublicas';

export const Rotas = () => {
  const { estaLogado } = useContext(AuthContext);
  return <>{estaLogado ? <RotasPrivadas /> : <RotasPublicas />}</>;
};

import React from "react";
import { Markup } from "interweave";
import { getCommandsGit } from "./commands-git";

const EssentialGit: React.FC = () => {
  return (
    <>
      <div className="container">
        <p className="text-center h1">Essencial Git</p>
        <p className="">
          Olá, não irei gastar seu tempo justificando a importancia de utilizar
          uma ferramenta de versionamento de código e como ela pode ajudar seu
          trabalho, por isso já vou direto para uma lista de comandos essenciais
          que um desenvolvedor ou qualquer pessoa que trabalhe com arquivos
          versionados utiliza com frequencia.
        </p>
        <p className="font-italic lead">
          Pense nessa listagem como um guia de busca rapida, então já manda para
          os favoritos :)
        </p>
        <p className="text-center h3">Principais comandos</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Comando</th>
              <th scope="col">Explicação</th>
              <th scope="col">#Dica</th>
            </tr>
          </thead>
          <tbody>
            {getCommandsGit().map((command) => (
              <tr>
                <th scope="row">{command.command}</th>
                <td>
                  <Markup content={command.explanation} />
                </td>
                <td>
                  <Markup content={command.tip} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-center h3">Problemas diarios</p>
        <div>
          <div>
            <strong>Cenario:</strong>
          </div>
          <div>
            <strong>Solução:</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default EssentialGit;

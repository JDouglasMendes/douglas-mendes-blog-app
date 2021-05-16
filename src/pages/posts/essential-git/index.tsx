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
          versionados utiliza com frequência.
        </p>
        <p className="font-italic lead text-center">
          Pense nessa listagem como um guia de busca rapida, então já manda para
          os favoritos :)
        </p>
        <p className="text-center h3">Principais comandos</p>
        <div className="row border">
          <div className="col-3 border-right"><b>Comando</b></div>
          <div className="col-5 border-right"><b>Explicação</b></div>
          <div className="col-4"><b>#Dica</b></div>
        </div>
        {getCommandsGit().map((command) => (
          <div className="row border">
            <div className="col-3 border-right"><b>{command.command}</b></div>
            <div className="col-5 border-right"> <Markup content={command.explanation} /></div>
            <div className="col-4"><Markup content={command.tip} /></div>
          </div>
        ))}        
      </div>
    </>
  );
};

export default EssentialGit;

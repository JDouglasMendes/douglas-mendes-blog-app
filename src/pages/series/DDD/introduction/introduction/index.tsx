import React from "react";

const DDDIntroduction: React.FC = () => {
  return (
    <article>
      <div className="container">
        <p className="text-center h2">
          Por que pensar em DDD (Domain Driven Design)?
        </p>
        <p>
          Domain Driven Design que a partir desse momento chamarei apenas de
          DDD teve sua popularidade alcançada a partir do livro{" "}
          <i>
            "Domain-Driven Design: atacando as complexidades no coração do
            software"
          </i>{" "}
          escritor por Eric Evans, porém mesmo sendo um livro antigo (2003)
          pensando em tecnologia ainda é um assunto pouco compreendido e
          carregado do polêmicas, então já vou mandando a minha primeira opnião:
        </p>
        <p className="personal-comment font-weight-light">
          Grande parte das polêmicas relacionadas ao DDD se deve ao fato de nós,
          pessoas desenvolvedoras de software, se preocupar exageradamente com
          aspectos técnicos e ignorar o que de fato importa, a
          solução do problema de negócio.
        </p>
        <p>
          Temos que entender a essência do DDD para tomar a descisão inicial, e
          essa descisão vem de uma simples pergunta:{" "}
          <span className="font-italic font-weight-light">
            <u>Como DDD pode ajudar no meu contexto atual?</u>
          </span>{" "}
          isso mesmo! o que você ganha em ter um contexto com DDD?{" "}
          <span className="font-italic font-weight-light">
            (uso a palavra <span className="font-weight-bold">contexto</span> de
            propósito, pois como você verá DDD não se aplica a um{" "}
            <span className="font-weight-bold">projeto</span>).
          </span>
          <p className="text-center">
            Tudo bem! isso gera outra questão: <u>Quais os benéficios do DDD?</u>?
          </p>
          <p className="personal-comment font-weight-light">
            DDD te ajuda a modelar o sistema e seus componentes de forma a
            atacar a complexidade das regras do domínio.
          </p>
          <div className="mb-1">
            Se você tem pouca experiência com DDD posso ler seu pensamento nesse
            momento:{" "}
            <span className="font-italic font-weight-light">"Só isso?"</span>.
          </div>
          <div>
            Se você já possui alguma experiência com DDD pode ter pensado:{" "}
            <span className="font-italic font-weight-light">
              "Só isso? consigo listar mais uma pilha de benefícios".
            </span>
          </div>
        </p>
        <p>
          Ok, então irei detalhar os pontos dessa frase com insights e
          provocações práticas que toda pessoa que trabalha com desenvolvimento
          de software já enfrentou.
        </p>
        <div>
          <ul className="list-group">
            <li className="list-group-item">
              Quantos projetos você já viu falhar devido a escolha do banco de
              dados?
            </li>
            <li className="list-group-item">
              Quantos projetos você já viu falhar devido a linguagem de
              programação?
            </li>
            <li className="list-group-item">
              E o uso daquele framework da moda? será que existe projeto decente
              sem ele?
            </li>
          </ul>
        </div>
        <p className="text-center">Agora insights e provocações porém sob outra perspectiva.</p>
        <div>
          <ul className="list-group">
            <li className="list-group-item">
              Quantos projetos você já viu falhar por definição errada de
              escopo?
            </li>
            <li className="list-group-item">
              Quantos projetos você já viu falhar/atrasar porque o próprio time
              se perde no próprio código?
            </li>
            <li className="list-group-item">
              Quantos projetos você já viu ficar cada vez mais oneroso aplicar
              uma nova feature?
            </li>
            <li className="list-group-item">
              Quantas vezes você já esteve na situação ou conhece alguém que é
              única pessoa capaz de explicar certa parte do sistema.
            </li>
          </ul>
        </div>
        <p>
          Nesse momento você já deve ter percebido o ponto chave da questão, se
          ainda não percebeu, volte e compare as listas acima.{" "}
        </p>
        <p className="text-center h1">...</p>
        <div>
          DDD não é sobre técnica, é sobre resolver problema do dominio, Sim OK!
          estamos falando de desenvolvimento de software e por sua essência é um
          assunto técnico, mas o ponto chave é que o DDD é uma <i>idéia</i> para modelar
          sistemas de domínio complexo, onde o investimento e/ou os riscos
          compensa a utilização de uma abordagem centrada no domínio.
        </div>
        <div>
          No entando, complexidade pode ser relativo e com isso dificil de
          decidir quando tem pouca experiência no assunto. No livro "Implementando Domain-Driven Design" de
          Vaughn Vernon contém uma listagem bem explicativa com alguns questionamentos
          sobre o contexto para te ajudar a decidir se o seu contexto se
          enquadra na utilização do DDD. Tomei a libertade de customizar e deixar
          à brasileira essa lista (ou seja, deixar mais curta direta e reta!).
        </div>
        <br></br>
        <div></div>
        <div className="row border">
          <div className="col-9 border-right"><b>Cenário/Contexto</b></div>
          <div className="col-3 text-right"><b>Devo utilizar DDD?</b></div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Você e o time concorda que as regras de negócio são complexas.
          </div>
          <div className="col-3 text-right">
            <span className="badge badge-success">Sim</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Devido ao contexto do projeto não é possível ter um visão ampla do
            negócio, mas a parte conhecida já tem uma certa complexidade nas regras de negócio.
          </div>
          <div className="col-3 text-right">
            <span className="badge badge-success">Sim</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Bugs em determinadas regras/partes do sistema podem trazer sérias
            consequências a empresa.
          </div>
          <div className="col-3 text-right">
            <span className="badge badge-success">Sim</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Poucas pessoas no time tem conhecimento ou já viu falar de DDD.
          </div>
          <div className="col-3 text-right">
            <span className="badge badge-warning">Fique atento</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            O time não tem uma pessoa especialista no donínio, deixando a equipe
            técnica com a responsabilidade de investigar e definir regras.
          </div>
          <div className="col-3 text-right">
            <span className="badge badge-warning">Fique atento</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            O projeto tem regra de negócio complexa porém o tempo de vida do
            sistema depende de outros fatores, o que está sendo desenvolvido é
            uma validação de idéia(Spike).
          </div>
          <div className="col-3 text-right">
            <span className="badge badge-warning">Fique atento</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Grande parte do sistema é cadastro.
          </div>
          <div className="col-3 text-right">
            <span className="badge badge-danger">Não</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            A maioria dos desafios são relativos a requisitos não funcionais
            como: <i>desempenho, uptime, escalabilidade.</i>
          </div>
          <div className="col-3 text-right">
            <span className="badge badge-danger">Não</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            O tempo de vida do projeto e do sistema muito curto e para um fim
            específico.
          </div>
          <div className="col-3 text-right">
            <span className="badge badge-danger">Não</span>
          </div>
        </div>
        <p>
          Essa lista pode te ajudar a decidir, obviamente não tem todos os casos, mas já é possível ter um visão geral.</p>
        <p> Não aceite e não acredite em
        nenhuma receita de bolo a respeito dessa descisão, jamais delege esse
        ponto a pessoas com pouco experiência em desenvolvimento de software,
        nesse momento o especialista do domínio será a melhor pessoa na sua
        vida, pergunte, questione, valide seu entendimento, veja se o time
        concorda com a abordagem, faça uma alinhamento de expectativas com o
        com as pessoas envolvidas diretamente e indiretamente no projeto, esse
        fluxo de trabalho com certeza te ajudará a ter melhores informações
        para tomar a descisão.
        </p>
      </div>
    </article>
  );
};

export default DDDIntroduction;

import React from "react";

const DDDIntroduction: React.FC = () => {
  return (
    <article>
      <div className="container">
        <p className="text-center h2">
          Por que pensar em DDD (Domain Driven Design)?
        </p>
        <p>
          Domain Driven Design que a partir desse momento será chamado de apenas
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
          aspectos técnicos e ignorando o que de fato realmente importa, a
          resolução do problema de negócio.
        </p>
        <p>
          Temos que entender a essencia do DDD para tomar a descisão inicial, e
          essa descisão vem de uma Simples pergunta:{" "}
          <span className="font-italic font-weight-light">
            O que eu ganharia com DDD no meu contexto atual?
          </span>{" "}
          isso mesmo! o que você ganha em ter um contexto com DDD?{" "}
          <span className="font-italic font-weight-light">
            (uso a palavra <span className="font-weight-bold">contexto</span> de
            proposito, pois como você verá DDD não se aplica a um{" "}
            <span className="font-weight-bold">projeto</span>).
          </span>
          <p className="text-center">
            Tudo bem! então no que DDD pode ajudar meu contexto?
          </p>
          <p className="personal-comment font-weight-light">
            DDD te ajuda a modelar o sistema e seus componentes de forma a
            atacar a complexidade das regras do dominio.
          </p>
          <div className="mb-1">
            Se você tem pouca experiência com DDD posso ler seu pensamento nesse
            momento:{" "}
            <span className="font-italic font-weight-light">"Só isso?"</span>.
          </div>
          <div>
            Se você já possui alguma experiência com DDD pode ter pensando:{" "}
            <span className="font-italic font-weight-light">
              "Só isso? consigo listar mais uma pilha de beneficios".
            </span>
          </div>
        </p>
        <p>
          Ok, então irei detalhar os pontos dessa frase com insights e
          provocações práticas que toda pessoa que trabalha com desenvolvimento
          de software já enfrentou.
        </p>
        <div>
          <ul className="list-group list-group-flush">
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
        <p>Agora insights e provocações mas sob outra otica.</p>
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Quantos projetos você já viu falhar por definição errada de
              escopo?
            </li>
            <li className="list-group-item">
              Quantos projetos você já viu falhar/atrasar porque o proprio time
              se perde no proprio código?
            </li>
            <li className="list-group-item">
              Quantos projetos você já viu ficar cada dia mais honeroso aplicar
              uma nova feature?
            </li>
            <li className="list-group-item">
              Quantas vezes você já esteve na situação ou conhecer alguém que é
              única pessoa capaz de explicar certa parte do sistema.
            </li>
          </ul>
        </div>
        <p>
          Nesse momento você já deve ter percebido o ponto chave da questão, se
          ainda não percebeu, tente voltar comparar as listas acima.{" "}
        </p>
        <p className="text-center h1">...</p>
        <div>
          DDD não é sobre técnica, e sobre resolver problema do dominio, Sim OK,
          estamos falando de desenvolvimento de software e por sua essencia e um
          assunto técnico, mas o ponto chave é que DDD é uma ideia para modelar
          sistemas de dominio complexo, onde o investimento e/ou os riscos
          compensa utilizar uma abordagem centrada no dominio.
        </div>
        <div>
          No entando, complexidade pode ser relativo e com isso dificil de
          decidir quando tem pouca experiencia no assunto. No livro XXXXX de
          XXXX contém uma listagem bem explicativa com alguns questionamentos
          sobre o contexto para te ajudar a decidir se o seu contexto se
          enquadra na utilização do DDD. Tomei a liberta de customizar e deixar
          a brasileira essa lista (ou seja, deixar mais curta direta e reta!).
        </div>
        <br></br>
        <div></div>
        <div className="row border">
          <div className="col-9 border-right">Cenário ou Contexto</div>
          <div className="col-3">DDD e pra você?</div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Você e o time concorda que o dominio do problema e complexo?
          </div>
          <div className="col-3 ">
            <span className="badge badge-success">Sim</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Devido ao contexto do projeto não é possível ter um visão ampla do
            negócio, mas a parte conhecida já tem uma certa complexidade.
          </div>
          <div className="col-3 ">
            <span className="badge badge-success">Sim</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Bugs em determinadas regras/partes do sistema podem trazer serias
            consequencias a empresa.
          </div>
          <div className="col-3 ">
            <span className="badge badge-success">Sim</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Poucas pessoas no time tem conhecimento ou já viu falar de DDD.
          </div>
          <div className="col-3 ">
            <span className="badge badge-warning">Fique atento</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            O time não tem uma pessoa especialista no dominio, deixando a equipe
            técnica com a responsabilidade de investigar e definir regras.
          </div>
          <div className="col-3 ">
            <span className="badge badge-warning">Fique atento</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            O projeto tem regra de negócio complexa porém o tempo de vida do
            sistema depende de outros fatores, o que está sendo desenvolvido é
            uma validação de ideia.
          </div>
          <div className="col-3 ">
            <span className="badge badge-warning">Fique atento</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            Grande parte do sistema é cadastro.
          </div>
          <div className="col-3 ">
            <span className="badge badge-danger">Não</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            A maioria dos desafios são relativos a requisitos não funcionais
            como: desempenho, uptime, escalabilidade.
          </div>
          <div className="col-3 ">
            <span className="badge badge-danger">Não</span>
          </div>
        </div>
        <div className="row border">
          <div className="col-9 border-right">
            O tempo de vida do projeto é do sistema muito curto e para um fim
            especifico.
          </div>
          <div className="col-3 ">
            <span className="badge badge-danger">Não</span>
          </div>
        </div>
        <p>
          Essa lista pode te ajudar a decidir, não aceite e não acredite em
          nenhuma receita de bolo a respeito dessa descisão, jamais delege esse
          ponto a pessoas com pouco experiência em desenvolvimento de software,
          nesse momento o especialista do dominio será a melhor pessoa na sua
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

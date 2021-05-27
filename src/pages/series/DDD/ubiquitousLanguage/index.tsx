import React from "react";

// import { Container } from './styles';

const UbiquitousLanguage: React.FC = () => {
  return <div />;
};
/**
 * Comunicação
 *
 */
export default UbiquitousLanguage;

/**
 * Nesse segundo tópico irei falar sobre linguagem ubíqua, e sua importância para um código de qualidade,
 * interferências na arquitetura e até mesmo na estrutura dos times que trabalha(rá) no projeto.
 *
 * Mas como de praxe iniciarei pelo básico, "O que é línguagem ubíqua?"
 *
 * A forma mais simples de entender o que é linguagem ubíqua, é imagina-lá como um dialeto em que TODAS as pessoas do
 * time entende o que está sendo dito, sem ambiguidades ou confusões.
 *
 * A linguagem ubíqua deve ser um mantra para o time, onde TODAS as pessoas são os guardiões dela, onde os stakeholders
 * tem o papel de direcionar o time em sua criação e as pessoas desenvolvedoras, analistas ou qualquer pessoa que
 * produza artefato (código, requisito, readme, apresentação para diretória) deve aplicar exatamente a linguagem ubíqua do time em suas execuções.
 *
 * Quanto ao código deve ter uma atenção especial, é muito comum ver times que aplica técnicas de DDD mas o código
 * não expressa a linguagem ubíqua do time, cada variável, método, classe e componentes deve refletir a uma regra de negócio  que
 * faz parte da linguagem ubíqua do time. Os componentes de infraestrutura deixe o mais isolado possível do seu domínio, nessa parte sim
 * você deve utilizar os vargões técnicos que tanto gostamos. Para deixar um pouco mais tangível veja um erro comum em "projetos DDD":
 *
 * Jamais coloque o nome de seus objeto de valor como MoedaVO, CPFVO, NomeVO! Em artigos futuros irei detalhar sobre Value Objects,
 * mas antecipei esse exemplo pois é perfeito para exemplificar a mistura de linguaguem úbiqua com o 'tecniques' de cada dia.
 *
 * Ainda sobre linguagem ubíqua e código tem 2 pontos que geralmente levanta poeira na comunidade, o primeiro é
 * envolvendo a comunidade .Net, com o uso da prefixo "I" em suas interfaces, como por exemplo IDiposable, IConverter e assim por diante,
 * algumas pessoas alega que esse prefixo não é util e atrabalha expressar a realidade/linguagem ubíqua no código, o meu
 * ponto de vista é simples! se a Microsoft não tivesse colocado esse "I" em tudo eu não utilizaria, porém
 * é uma coisa que existe e acabou sendo padrão na comunidade .Net, nesse caso acabo utilizando em meus projetos,
 * se você não utiliza "I", OK, se utiliza, OK também.
 * Outra questão, agora um pouco mais polêmica é codificar em inglês ou na linguagem nativa, para os dois lados exitem argumentos
 * fortes, e também exageros, como ter API que o @Get  foi encapsulado para @Pegar. Tirando esses exageros o idioma do código é um ponto que deve ser discutido
 * no time e TODOS devem estar de acordo ou pelo menos chegar um consenso, porém vejo que essa discusão fica calorosa e desvia o assunto do que realmente importa
 * que é linguagem ubíqua, se for possível codar em inglês e ter uma representação fiel da lingaguem, manda v! mas não se for possível deixe seu
 * orgulho de lado e faça o simples.
 *
 * Dado o contexto mais introdutório irei exemplificiar sobre outro ponto de vista a linguagem ubíqua, imagine um objeto/classe chamado Colaborador em um ERP de recursos humanos,
 * será que esse  nome atende a todos os cenários/modulos? para o módulo de recrutamento a pessoa ainda não é um funcionário/colaborador,
 * para o módulo de cálculo não importa se é colaborador ou autonômo mas sim seu(s) contrato(s), já para medicina e segurança é um paciente,
 * percebe que um nome que parece bom no início ao submeter ao mundo real e as várias visões ele acaba não representando o que realmente é!
 * Agora imagime os Domain Experts/PO/Analista de Negócio de cada módulo desse brigando para manter o nome para seu contexto (rsrs de nervoso).
 *
 * Beleza, o projeto precisa dessa definição qual seria o um nome adequado?
 *
 * Ao chegar nessa pergunta você terá a oportunidade de entender a beleza de ter uma linguagem ubíqua, e a reposta
 * é a mais classica possível, DEPENDE, isso mesmo! depende de qual contexto você está falando.
 * Para o Recrutamento e Seleção poderia ser Candidato, para Cálculo pode ser apenas Contrato e para Medicina e Segurança pode ser um Paciente,
 * e por ter essa visão você começa a dividir sua solução, dando visivilidade para definições de MVP, Roadmap de produtos.
 *
 * Essa é uma dica valiosa! quando você percebe que a linguagem ubiqua não está fazendo o mesmo sentindo, ou começou
 * a ficar ambíguo isso é um forte sinal que você está entrando em outro contexto de negócio,
 * talvez seja o momento de você conversar com os Domain Experts/PO/Analista de Negócio e separar a solução, isso mesmo
 * o bom é velho dividir para conquistar, se você já tem um certo conhecimento ou experiência com DDD sabe que estou falando
 *  Bounded Context mas esse é um assunto que ficará para o próximo artigo dessa serie.
 *
 */

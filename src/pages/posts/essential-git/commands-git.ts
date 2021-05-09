export interface CommandGit {
  command: string;
  explanation: string;
  tip: string;
}
export const getCommandsGit = (): CommandGit[] => [
  /**    
  {
    command: ``,
    explanation: ``,
    tip: ``,
  },       
     */
  {
    command: "git init",
    explanation:
      "Inicia um repositório local, porém o servidor ainda não conhece esse branch.",
    tip: " Utilizado para versionar arquivos enquanto não tem o branch remoto.",
  },
  {
    command: `git clone`,
    explanation: `Faz download do branch remoto.`,
    tip: `<kbd>git clone [url-branch]</kbd>`,
  },
  {
    command: "git add",
    explanation: "Utilizado para adicionar um novo arquivo ao stage.",
    tip: ` <kbd>git add .</kbd> - Adiciona todos os arquivos criados, modificados e excluidos ao stage. </br> 
           <kbd>git add [nome-arquivo]</kbd> - Como alternativa pode ser utilizado o nome do arquivo`,
  },
  {
    command: "git status",
    explanation:
      "Mostra o status dos arquivos alterados, separando das alterações locais e stage.",
    tip: ``,
  },
  {
    command: "git commit -m ''",
    explanation: `Faz commit de todos os arquivos que estão na <i>stage</i> para o repositório local. </br>
     Isso mesmo ainda falta um passo para seus arquivos ir para o servidor.`,
    tip: `Seja bastante claro e objetivo nas mensagems de commit. </br> 
    Você e seu time irão agradecer.`,
  },
];

# To-Do List React Native
## Lista de tarefas em React Native - (Front-end)
<p>Este é o repositório do código responsável pelo front-end da aplicação de lista de tarefas que desenvolvi utilizando React Native e Expo.<br> 
Para inicializar a execução do app será necessário:</p>
<ul>
  <li>Fazer o git clone do repositório do back-end do projeto que está nesse endereço: <a href="https://github.com/Guilherme-07062002    /APIToDoList">Clique aqui</a> e inicializar o servidor;</li>
  <li>Instalar os pacotes necessários digitando 'npm i' no terminal;</li> 
  <li>Utilizar algum emulador ou o seu proṕrio smartphone com o app Expo Go (como eu fiz) para vê-lo funcionar;</li> 
</ul>
<p>Após tudo ok espera-se que será possivel ver a aplicação funcionando normalmente.</p>

### Funcionamento:
<img style="height: 500px" src="img_readme/print.jpg"></img>
<p>O app consiste em um sistema simples de lista de tarefas, ainda pretendo trabalhar nele e adicionar mais algumas melhorias e funcionalidades.</p>
<p>Com ele é possível:</p>
<ul>
  <li>Adicionar tarefas: apertando no botão com o "+" no canto inferior esquerdo da tela.</li>
  <li>Marcar uma tarefa como concluída, aonde ela fica com um aspecto transparente na tela, caso o usuário queira realizar aquela tarefa novamente é só apertar de novo o checkbox, e ela ficará novamente com a aparência inicial.</li>
  <li>Remover tarefas: Se o usuário não quiser que aquela tarefa continue sendo exibida na tela, após apertar no botão de marcar como concluída é exibido logo abaixo a opção de remover (em vermelho), dessa forma a tarefa será apagada.</li>
</ul>
<p>O repositório do back-end desta aplicação é necessário para executar pois todas as operações e os dados são realizadas e armazenadas no banco de dados, que neste caso optei em utilizar o sqlite3, pelo fato deste ser um banco embutido que conforme eu teorizo vai junto da aplicação, portanto ao disponibilizar este projeto para download em algum momento, o usuário poderia fechar o aplicativo e ao abrir novamente os dados permaneceriam salvos, sem maiores problemas.</p>
<p>E sim, para isso tudo que acontece reflete no banco, ao apagar tarefas, elas também serão apagadas no banco, ao adicionar da mesma forma, e quando o usuário abrisse a aplicação ela retornaria os dados que até então teriam sido salvos pela ultima vez no banco.</p>

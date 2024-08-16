let alunos = [];

function adicionarAluno() {
    const nomeAluno = document.getElementById('nomeAluno').value;
    const nomeTurma = document.getElementById('nomeTurma').value;
    const notaMatematica = document.getElementById('notaMatematica').value;
    const notaPortugues = document.getElementById('notaPortugues').value;
    const notaCiencias = document.getElementById('notaCiencias').value;

    const aluno = {
        nome: nomeAluno,
        turma: nomeTurma,
        disciplinas: {
            Matematica: notaMatematica,
            Portugues: notaPortugues,
            Ciencias: notaCiencias,
        }
    };

    alunos.push(aluno);

    // Limpar os campos para a próxima entrada
    document.getElementById('nomeAluno').value = '';
    document.getElementById('nomeTurma').value = '';
    document.getElementById('notaMatematica').value = '';
    document.getElementById('notaPortugues').value = '';
    document.getElementById('notaCiencias').value = '';

    alert(`Aluno ${nomeAluno} adicionado com sucesso!`);
}

function finalizarCadastro() {
    // Salvar os dados dos alunos no armazenamento local (localStorage)
    localStorage.setItem('alunos', JSON.stringify(alunos));

    // Redirecionar para a página de resultado
    window.location.href = 'result.html';
}

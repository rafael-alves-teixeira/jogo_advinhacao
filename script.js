function testar() {
    alert('Bem vindo ao jogo da advinhação!!!\nTente advinhar qual número entre 1 e 10 o computador pensou.\nSerá que você consegue acertar?')
    let numero = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    let chute = prompt("Qual o valor que você deseja chutar?")

    let i = 2

    while (i != 0) {
        i--
        if (numero == chute) {
            alert("Parabéns! Você é sensacional!!!")
            break
        } else {

            chute = prompt(`Você errou! 🤔 Agora você tem mais ${i + 1} tentativa(s).\n Qual o seu chute?`);
        }
    }

    alert(`O computador pensou no número ${numero}.\n Fim do jogo!`)
}



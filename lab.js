var lab = [
        [1,1,1,1,1,1,1,1,1,0,1],
        [1,1,0,0,0,0,0,1,1,0,1],
        [1,1,0,1,1,1,0,1,0,0,1],
        [1,1,0,0,0,1,0,0,0,1,1],
        [0,0,0,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1]
        ]

// var lab = [
//              [1,0,1,1,1],
//              [1,0,0,0,1],
//              [1,1,0,1,1],
//              [0,0,0,0,1],
//              [1,1,1,1,1],
//              ]

var caminho = []

/**
 testes:
 testar se lin e col estao na borda
 testar se lin e col estao dentro do labirinto mas nao na borda
 testar se a ultima posiçao é null(inicio)
 */

function labirinto(lin, col, ultimaPos){
    print(`[${lin}] [${col}] - ultima pos: ${ultimaPos} `)

    if( ( lin > 0 && lin < lab.length -1 && col > 0 && col < lab[0].length -1 ) && lab[lin][col] == 0 ){

        if( ultimaPos != 'baixo' && labirinto(lin+1, col, 'cima') ){
            caminho.unshift('baixo')
        }else if( ultimaPos != 'cima' && labirinto(lin-1, col, 'baixo') ){
            caminho.unshift('cima')
        }else if( ultimaPos != 'direita' && labirinto(lin, col+1, 'esquerda') ){
            caminho.unshift('direita')
        }else if( ultimaPos != 'esquerda' && labirinto(lin, col-1, 'direita') ){
            caminho.unshift('esquerda')
        }else{
            return false
        }
        return true

    }else if( ( lin == 0 || lin == lab.length -1 || col == 0 || col == lab[0].length -1 ) && lab[lin][col] == 0){
        if( ultimaPos == null ){

            /*
            unshift adiciona um elemento no inicio do array, assim como o push adiciona no final
            a primeira funçao executa primeiro, mas por ser a primeira da pilha de funçoes, ela termina por ultimo
            assim a ordem do caminho fica certa

            ultimaPos serve pra verificar a ultima posiçao: se veio da direita, so posso ir pra cima, dir e esq. a msm coisa pras outras direçoes
            */
            if( ultimaPos != 'baixo' && labirinto(lin+1, col, 'cima') ){
                caminho.unshift('baixo')
            }else if( ultimaPos != 'cima' && labirinto(lin-1, col, 'baixo') ){
                caminho.unshift('cima')
            }else if( ultimaPos != 'direita' && labirinto(lin, col+1, 'esquerda') ){
                caminho.unshift('direita')
            }else if( ultimaPos != 'esquerda' && labirinto(lin, col-1, 'direita') ){
                caminho.unshift('esquerda')
            }else{
                return false
            }

            return true
        }else{
            return true
        }
    }else{
        return false
    }
}

labirinto(4, 0, null)
print(caminho)

function print(a){
    console.log(a)
}

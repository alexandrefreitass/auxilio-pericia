//este é o script do jogodeAzar.html
function gohome(){
    window.location='pericia3.html';
}
function save(){
    	window.localStorage.setItem('campo1', $('#campo1').val());//QUE TIPO DE LOCAL ACONTECEU?
	window.localStorage.setItem('campo1_1', $('#campo1_1').val());//O LOCAL ESTÁ PRESERVADO?
	window.localStorage.setItem('campo1_2', $('#campo1_2').val());//SE NECESSÁRIO ESPECIFIQUE:
	window.localStorage.setItem('campo1_3', $('#campo1_3').val());//NOME DO COMÉRCIO OU LOCAL:
	window.localStorage.setItem('campo1_4', $('#campo1_4').val());//QUANTIDADE DE MÁQUINAS LIGADAS:
	window.localStorage.setItem('campo1_5', $('#campo1_5').val());//QUANTIDADE DE MÁQUINAS DESLIGADAS:
	window.localStorage.setItem('campo1_6', $('#campo1_6').val());//O PROPRIETÁRIO ESTÁ NO LOCAL?
	window.localStorage.setItem('campo1_7', $('#campo1_7').val());//RG DO PROPRIETÁRIO:
	window.localStorage.setItem('campo1_8', $('#campo1_8').val());//TEM JOGADORES DETIDOS?
	window.localStorage.setItem('campo1_9', $('#campo1_9').val());//QUANTIDADE DE DETIDOS:
	window.localStorage.setItem('campo1_10', $('#campo1_10').val());//NOME E RG DOS DETIDOS:
	window.localStorage.setItem('campo1_11', $('#campo1_11').val());//EM QUAL CÔMODO ESTÃO AS MAQUINAS?
	window.localStorage.setItem('campo1_12', $('#campo1_12').val());//LOCAL DE FÁCIL ACESSO?
	window.localStorage.setItem('campo1_13', $('#campo1_13').val());//SE NECESSÁRIO ESPECIFIQUE:
	window.localStorage.setItem('campo1_14', $('#campo1_14').val());//HÁ OBJETOS PARA RECOLHER?
	window.localStorage.setItem('campo1_15', $('#campo1_15').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_16', $('#campo1_16').val());//INFORMAÇÕES COMPLEMENTARES:
	window.localStorage.setItem('campo1_17', $('#campo1_17').val());//INFORMAÇÕES COMPLEMENTARES:
	window.localStorage.setItem('campoTeste2', $('#campoTeste2').val());//	
	//nessa parte ele salva os dados que estao nos campos

}
function load(){
//nesta funçao carrega na outra pagina os dados salvos temporariamente
	$('#campo2').val(window.localStorage.getItem('campo1')+' '
					+window.localStorage.getItem('campo1_1')+' '
					+window.localStorage.getItem('campo1_2')+' '
					+window.localStorage.getItem('campo1_3')+' '	
					+window.localStorage.getItem('campo1_4')+', MÁQUINAS LIGADAS:'
					+window.localStorage.getItem('campo1_5')+', MÁQUINAS DESLIGADAS:'
					+window.localStorage.getItem('campo1_6')+' '
					+window.localStorage.getItem('campo1_7')+' '
					+window.localStorage.getItem('campo1_8')+' '
					+window.localStorage.getItem('campo1_9')+' '
					+window.localStorage.getItem('campo1_10')+' '
					+window.localStorage.getItem('campo1_11')+', '
					+window.localStorage.getItem('campo1_12')+' '
					+window.localStorage.getItem('campo1_13')+' '
					+window.localStorage.getItem('campo1_14')+' '
					+window.localStorage.getItem('campo1_15')+' '
					+window.localStorage.getItem('campo1_16')+' '					
					+window.localStorage.getItem('campo1_17')+' '		
					+window.localStorage.getItem('campoTeste2')+' '	
				);				
	
}
function erase(){
    window.localStorage.removeItem('campo1');
	window.localStorage.removeItem('campo1_1');
	window.localStorage.removeItem('campo1_2');
	window.localStorage.removeItem('campo1_3');
	window.localStorage.removeItem('campo1_4');
	window.localStorage.removeItem('campo1_5');
	window.localStorage.removeItem('campo1_6');	
	window.localStorage.removeItem('campo1_7');	
	window.localStorage.removeItem('campo1_8');
	window.localStorage.removeItem('campo1_9');
	window.localStorage.removeItem('campo1_10');
	window.localStorage.removeItem('campo1_11');
	window.localStorage.removeItem('campo1_12');
	window.localStorage.removeItem('campo1_13');	
	window.localStorage.removeItem('campo1_14');	
	window.localStorage.removeItem('campo1_15');	
	window.localStorage.removeItem('campo1_16');	
}

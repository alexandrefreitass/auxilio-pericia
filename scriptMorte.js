//este é o script da morte.html
function gohome(){
    window.location='pericia3.html';
}
function save(){
    window.localStorage.setItem('campoTeste', $('#campoTeste').val());//AONDE FOI ENCONTRADO O CORPO?
	window.localStorage.setItem('campo1', $('#campo1').val());//O LOCAL ESTÁ PRESERVADO?
	window.localStorage.setItem('campo1_1_1', $('#campo1_1_1').val());//O LOCAL ESTÁ PRESERVADO?
	window.localStorage.setItem('campo1_1', $('#campo1_1').val());//O LOCAL ESTÁ PRESERVADO?
	window.localStorage.setItem('campo1_2', $('#campo1_2').val());//O SOCORRO MÉDICO FOI NO LOCAL?
	window.localStorage.setItem('campo1_3', $('#campo1_3').val());//QUAL MODALIDADE?
	window.localStorage.setItem('campo1_4', $('#campo1_4').val());//QUAL O PREFIXO?
	window.localStorage.setItem('campo1_5', $('#campo1_5').val());//NOME DO ENCARREGADO/PROFISSIONAL DA SAÚDE:
	window.localStorage.setItem('campo1_6', $('#campo1_6').val());//ATESTOU O ÓBITO POR CAUSAS NATURAIS?
	window.localStorage.setItem('campo1_7', $('#campo1_7').val());//A VÍTIMA TINHA HISTÓRICO DE DOENÇAS?
	window.localStorage.setItem('campo1_8', $('#campo1_8').val());//SE NECESSÁRIO ESPECIFIQUE:
	window.localStorage.setItem('campo1_9', $('#campo1_9').val());//QUEM ENCONTROU A VÍTIMA?
	window.localStorage.setItem('campo1_1_2', $('#campo1_1_2').val());//
	window.localStorage.setItem('campo1_10', $('#campo1_10').val());//POSSUI IDENTIFICAÇÃO DA VÍTIMA? 
	window.localStorage.setItem('campo1_11', $('#campo1_11').val());//RG DA VITIMA:
	window.localStorage.setItem('campo1_12', $('#campo1_12').val());//IDADE DA VITIMA:
	window.localStorage.setItem('campo1_13', $('#campo1_13').val());//SEXO DA VÍTIMA:
	window.localStorage.setItem('campo1_14', $('#campo1_14').val());//PESO DA VÍTIMA: 
	window.localStorage.setItem('campo1_15', $('#campo1_15').val());//ALTURA DA VÍTIMA:
	window.localStorage.setItem('campo1_16', $('#campo1_16').val());//COR DA PELE DA VÍTIMA:
	window.localStorage.setItem('campo1_17', $('#campo1_17').val());//MORAVA SOZINHO?
	window.localStorage.setItem('campo1_18', $('#campo1_18').val());//OS FAMILIARES ESTÃO NO LOCAL?
	window.localStorage.setItem('campo1_19', $('#campo1_19').val());//INFORMAÇÕES COMPLEMENTARES
	window.localStorage.setItem('campoTeste2', $('#campoTeste2').val());//O LOCAL ESTÁ PRESERVADO?	
	
	//nessa parte ele salva os dados que estao nos campos

}
function load(){
//nesta funçao carrega na outra pagina os dados salvos temporariamente
	$('#campo2').val(window.localStorage.getItem ('campoTeste')+' '
					+window.localStorage.getItem('campo1')+' '
					+window.localStorage.getItem('campo1_1_1')+' '
					+window.localStorage.getItem('campo1_1')+' '
					+window.localStorage.getItem('campo1_2')+' '
					+window.localStorage.getItem('campo1_3')+' '
					+window.localStorage.getItem('campo1_4')+' '
					+window.localStorage.getItem('campo1_5')+' '
					+window.localStorage.getItem('campo1_6')+' '
					+window.localStorage.getItem('campo1_7')+' '
					+window.localStorage.getItem('campo1_8')+' '
					+window.localStorage.getItem('campo1_9')+' '
					+window.localStorage.getItem('campo1_1_2')+' '
					+window.localStorage.getItem('campo1_10')+' '
					+window.localStorage.getItem('campo1_11')+', '
					+window.localStorage.getItem('campo1_12')+', '
					+window.localStorage.getItem('campo1_13')+', '
					+window.localStorage.getItem('campo1_14')+', '
					+window.localStorage.getItem('campo1_15')+', '
					+window.localStorage.getItem('campo1_16')+' '
					+window.localStorage.getItem('campo1_17')+' '
					+window.localStorage.getItem('campo1_18')+' '
					+window.localStorage.getItem('campo1_19')+' '
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
	window.localStorage.removeItem('campo1_17');	
	window.localStorage.removeItem('campo1_18');	
	window.localStorage.removeItem('campo1_19');	
}

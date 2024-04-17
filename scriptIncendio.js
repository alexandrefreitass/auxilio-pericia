//este é o script da incendio.html
function gohome(){
    window.location='pericia3.html';
}
function save(){
    window.localStorage.setItem('campoTeste', $('#campoTeste').val());//QUE TIPO DE LOCAL ACONTECEU?
	window.localStorage.setItem('campo1', $('#campo1').val());//TEVE GRANDE PROPORÇÃO?
	window.localStorage.setItem('campo1_1_1', $('#campo1_1_1').val());//
	window.localStorage.setItem('campo1_1', $('#campo1_1').val());//TEVE GRANDE PROPORÇÃO?
	window.localStorage.setItem('campo1_2', $('#campo1_2').val());//ESPECIFIQUE:
	window.localStorage.setItem('campo1_3', $('#campo1_3').val());//O LOCAL ESTÁ PRESERVADO?
	window.localStorage.setItem('campo1_4', $('#campo1_4').val());//SE NECESSÁRIO ESPECIFIQUE:
	window.localStorage.setItem('campo1_5', $('#campo1_5').val());//É FLAGRANTE?
	window.localStorage.setItem('campo1_6', $('#campo1_6').val());//TEM INDIVÍDUOS DETIDOS?
	window.localStorage.setItem('campo1_7', $('#campo1_7').val());//NOME E RG DOS DETIDOS:
	window.localStorage.setItem('campo1_8', $('#campo1_8').val());//O PROPRIETÁRIO ESTÁ NO LOCAL?
	window.localStorage.setItem('campo1_9', $('#campo1_9').val());//RG DO PROPRIETÁRIO:
	window.localStorage.setItem('campo1_10', $('#campo1_10').val());//TEM VÍTIMAS? 
	window.localStorage.setItem('campo1_11', $('#campo1_11').val());//QUANTIDADE DE VÍTIMAS:
	window.localStorage.setItem('campo1_12', $('#campo1_12').val());//COLOQUE NOME, RG E ESTADO DAS VITIMAS:
	window.localStorage.setItem('campo1_13', $('#campo1_13').val());//O SOCORRO MÉDICO FOI NO LOCAL?
	window.localStorage.setItem('campo1_14', $('#campo1_14').val());//QUAL MODALIDADE?
	window.localStorage.setItem('campo1_15', $('#campo1_15').val());//QUAL O PREFIXO?
	window.localStorage.setItem('campo1_16', $('#campo1_16').val());//NOME DO ENCARREGADO/PROFISSIONAL DA SAÚDE:
	window.localStorage.setItem('campo1_17', $('#campo1_17').val());//PARA ONDE FOI SOCORRIDA?
	window.localStorage.setItem('campo1_18', $('#campo1_18').val());//HOUVE ARROMBAMENTO OU DANOS PELA EQUIPE DO BOMBEIRO OU SAMU?
	window.localStorage.setItem('campo1_19', $('#campo1_19').val());//SE NECESSÁRIO ESPECIFIQUE:
	window.localStorage.setItem('campo1_20', $('#campo1_20').val());//SABE AONDE INICIOU O FOCO DO INCÊNDIO?
	window.localStorage.setItem('campo1_21', $('#campo1_21').val());//SE NECESSÁRIO ESPECIFIQUE:
	window.localStorage.setItem('campo1_22', $('#campo1_22').val());//TEM OBJETOS A SEREM RECOLHIDOS?
	window.localStorage.setItem('campo1_23', $('#campo1_23').val());//SE NECESSÁRIO ESPECIFIQUE:
	window.localStorage.setItem('campo1_24', $('#campo1_24').val());//TEM MARCAS DE SANGUE OU PEGADAS?
	window.localStorage.setItem('campo1_25', $('#campo1_25').val());//SE NECESSÁRIO ESPECIFIQUE:
	window.localStorage.setItem('campo1_26', $('#campo1_26').val());//O FOGO ATINGIU OUTROS LOCAIS?
	window.localStorage.setItem('campo1_27', $('#campo1_27').val());//SE NECESSÁRIO ESPECIFIQUE:
	window.localStorage.setItem('campo1_28', $('#campo1_28').val());//INFORMAÇÕES COMPLEMENTARES:
	window.localStorage.setItem('campoTeste2', $('#campoTeste2').val());//INFORMAÇÕES COMPLEMENTARES:
	
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
					+window.localStorage.getItem('campo1_10')+' '
					+window.localStorage.getItem('campo1_11')+' '
					+window.localStorage.getItem('campo1_12')+', '
					+window.localStorage.getItem('campo1_13')+' '
					+window.localStorage.getItem('campo1_14')+' '
					+window.localStorage.getItem('campo1_15')+' '
					+window.localStorage.getItem('campo1_16')+' '
					+window.localStorage.getItem('campo1_17')+' '
					+window.localStorage.getItem('campo1_18')+' '
					+window.localStorage.getItem('campo1_19')+' '
					+window.localStorage.getItem('campo1_20')+' '
					+window.localStorage.getItem('campo1_21')+' '
					+window.localStorage.getItem('campo1_22')+' '
					+window.localStorage.getItem('campo1_23')+' '
					+window.localStorage.getItem('campo1_24')+' '
					+window.localStorage.getItem('campo1_25')+' '
					+window.localStorage.getItem('campo1_26')+' '
					+window.localStorage.getItem('campo1_27')+' '
					+window.localStorage.getItem('campo1_28')+' '	
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
	window.localStorage.removeItem('campo1_20');	
	window.localStorage.removeItem('campo1_21');	
	window.localStorage.removeItem('campo1_22');	
	window.localStorage.removeItem('campo1_23');	
	window.localStorage.removeItem('campo1_24');	
	window.localStorage.removeItem('campo1_25');
	window.localStorage.removeItem('campo1_26');	
	window.localStorage.removeItem('campo1_27');	
	window.localStorage.removeItem('campo1_28');	
}

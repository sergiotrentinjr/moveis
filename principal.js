var banners = ["Os melhores do Brasil!", "Qualidade e pre&ccedil;o baixo!"];
var bannerAtual = 0;

function trocaBanner(){
	bannerAtual = (bannerAtual + 1 )%2;
	document.querySelector("h2#mensagem").textContent = banners[bannerAtual];
}

setInterval(trocaBanner, 2000);
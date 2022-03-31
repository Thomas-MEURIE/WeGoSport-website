function carrousel() {
	
	var images = document.querySelectorAll('.image');

    var imgSize = window.innerWidth;;

	var dureeTransition = 2000;
	var deltaEntreTransition = 1000;
	var dureeAnimation = dureeTransition + images.length * dureeTransition + 
		((images.length - 1) * deltaEntreTransition);

	images.forEach(function(img, indiceImg) {

		img.style.zIndex = images.length - indiceImg;

	});

	var animation = anime.timeline({loop: true, delay: 0});
	animation.add({
       	targets: images,
        translateX: [
        	{value: imgSize, duration: dureeTransition},
        	{value: -imgSize, 
        	 duration: 0, 
        	 delay: function(img,indiceImg) {
        	 	if (indiceImg < 3) 
        	 		return (((3 - indiceImg) * deltaEntreTransition) + 
        	 			((2 - indiceImg) * dureeTransition)); return 0}},
        	{value: '0', 
        	 duration: function(img, indiceImg) {
        		if (indiceImg < 3) return dureeTransition; return 0;}, 
        	 easing: 'linear'}
        ],
        delay: function(img,indiceImg) {
        	return deltaEntreTransition + (indiceImg * dureeTransition) + (indiceImg * deltaEntreTransition) ;
        },
        easing: 'linear'
    });

}

function compte_a_rebours()
{
    var compte_a_rebours = document.getElementById("compte_a_rebours");
    var compte_unité = document.getElementById("compte_unité");

    var date_actuelle = new Date();
    var date_evenement = new Date("Jun 8 12:00:00 2022");
    var total_secondes = (date_evenement - date_actuelle) / 1000;
    
    if (total_secondes < 0)
    {
        compte_a_rebours.innerHTML = '';
        compte_unité.innerHTML = 'L\'application est sortie !!!';
    }
    else if (total_secondes > 0)
    {
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        
        var unitJours = 'Jours';
        var unitHeures = 'Heures';
        var unitMinutes = 'Minutes';
        var unitSecondes = 'Secondes';

        if (jours < 2)
            unitJours = 'Jour';
        if (heures < 2)
            unitHeures = 'Heure';
        if (minutes < 2)
            unitMinutes = 'Minute';
        if (secondes < 2)
            unitSecondes = 'Seconde';

        compte_a_rebours.innerHTML = jours + ' : ' + heures + ' : ' + minutes + ' : ' + secondes;
        compte_unité.innerHTML = unitJours + ' ' + unitHeures + '  ' + unitMinutes + '  ' + unitSecondes;
    }

    var actualisation = setTimeout("compte_a_rebours();", 1000);
}
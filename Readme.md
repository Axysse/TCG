# **TCG**
[![forthebadge](https://forthebadge.com/images/featured/featured-built-with-love.svg)](https://forthebadge.com)
## A PROPOS

Site réalisé dans le cadre d'un TD durant la formation développeur WEB à l'AFPA de Châtellerault.

# Table des matières

 - [A propos](##Apropos)
 - [Prérequis](#Prérequis)
 - [Contribution](#Contribution)
 - [Documentation](#Documentation)
 - [Licence](#Licence)


# Prérequis

Les ressources sont disponibles plus haut sur la page GitHub du projet.

# Contributions

Un grand merci à:

 - L'API Flesh and blood


# Logiciels/Langages/Librairies

 - Visual Studio Code
 - HTML/CSS
 - Javascript
 - Tailwind CSS

# Documentation

 - [Maquette](##Maquette) 
 - [Index](##Index)

## Maquette

![Maquette](https://ibb.co/BwTNnKQ)

La maquette originelle, plutôt spartiate, est dans l'ensemble identique au produit final, si ce n'est le changement de couleurs pour rendre moins terne le produit fini et qui correspond mieux à la DA du jeu originel.

## Index
La page contient un header et un footer classiques sans aucune spécificités. Le centre de la page est découpé en deux zones de jeu. La zone supérieure représentant la main de l’adversaire (non cliquable du coup) et la zone inférieure représente la main du joueur. Les 4 cartes du joueur sont cliquables mais n'ont d'effet que si la carte a une valeur d'attaque.

**Le responsive**

Le site a été codé en responsive-first. Son affichage par défaut est donc en colonne. Mais dès que la taille de l'écran dépasse une valeur le site passe en affichage horizontal, plus adapté aux écrans d'ordinateur.

![responsive](https://ibb.co/bRZcXQ0)

**Le javascript**

On fetch d'abord l'API pour récupérer toutes les cartes du jeu et on stocke dans un tableau les données qui nous intéresse: l'id, l'attaque, la défense, l'image, ect..
Puis on distribue 4 cartes au hasard au joueur et à son adversaire chacun dans leur zone de jeu. Pour cela on crée des éléments images qu'on ajoute aux zones de jeu, ces images, côté joueur, on pour valeur l'id de la carte, comme ça on peut facilement retrouver les informations nécessaires au jeu en fonction du choix de la carte. 

Les 4 cartes de la main sont cliquables mais n'ont d'effet que si on est sûr de faire des dégâts à l'adversaire qui, lui, va se défendre avec une carte prise aléatoirement de sa main. Ce qui veut dire que, parfois, il va se défendre avec sa seule carte qui n'a pas de valeur de défense.
Les PV de l'adversaire baissent en conséquence et un texte affiche le nombre de dégâts infligés.



# Licence

Tout droits reservés Nicolas Vouillerot

Linkedin: https://www.linkedin.com/in/nicolas-vouillerot-a62402287/

CoursDuDev: https://www.coursdudev.com/profil/Axysse

GitHub: https://github.com/Axysse

> Written with [StackEdit](https://stackedit.io/).

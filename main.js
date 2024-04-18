function estBissextile(annee) {
  if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function prixBillet(age) {
  switch (true) {
    case age <= 0:
      return "veuillez saisir un age valide";
    case age <= 12:
      return 10;
    case age >= 13 && age <= 17:
      return 15;
    case age >= 18:
      return 20;
    default:
      return "age invalide";
  }
}

function conseillerTenue(temp, pluie) {
  if (temp < 0) {
    return "veuillez prendre des vetememnt très chauds et impérméable";
  } else if (temp >= 0 && temp <= 10) {
    if (pluie) {
      return "vous pouvez prendre votre manteau très chaud et parapluie";
    } else {
      return "vous pouvez prendre votre manteau très chaud ";
    }
  } else if (temp > 10 && temp <= 20) {
    if (pluie) {
      return "vous pouvez prendre votre veste légère et votre parapluie";
    } else {
      return "vous pouvez prendre votre  veste légère";
    }
  } else {
    if (pluie) {
      return "vous pouvez prendre vêtement léger et votre parapluie";
    } else {
      return "Portez des vêtement legers";
    }
  }
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function isPalindrome(word) {
  // Convertit le mot en minuscules pour ignorer la casse
  word = word.toLowerCase();
  // Vérifie la condition d'arrêt : un mot vide ou un mot d'un seul caractère est un palindrome
  if (word.length === 0 || word.length === 1) {
    return true;
  }
  // Compare le premier et le dernier caractère du mot
  if (word[0] === word[word.length - 1]) {
    // Récursivement, vérifie si le reste du mot est un palindrome
    console.log(word.slice(1, word.length - 1));
    return isPalindrome(word.slice(1, word.length - 1));
  } else {
    // Si les caractères sont différents, le mot n'est pas un palindrome
    return false;
  }
}

function Puissance(base, exposant) {
  // si l'exposant est 0 return 1 sinon return la base multiplée par la base à la puissance de l'exposant moins un
  if (exposant === 0) {
    return 1;
  } else {
    return base * Puissance(base, exposant - 1);
  }
}



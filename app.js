function addTokens(input, tokens) {
    //validam daca input este un string
    if (typeof input !== 'string') {
        throw new Error("Invalid input");
    }
    //validam daca string-ul de input are minim 6 caractere
    else {
        if (input.length < 6) {
            throw new Error('Input should have at least 6 characters');
        }
    }
    //validam daca array-ul contine doar stringuri
    for (let i = 0; i < tokens.length; i++) {
        if (typeof (tokens[i].tokenName) !== 'string') {
            throw new Error('Invalid array format');
        }
    }
    //daca input nu contine niciun substring "..." returnam textul
    if (input.includes('...') != true) {
        return input;
    }
    else {
        //altfel inlocuim substring-urile "..." cu tokenii corespunzatori
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i]["tokenName"];
            token = "${" + token + "}";
            let puncteDeSuspensie = "...";
            let index = input.indexOf(puncteDeSuspensie);
            if (index !== -1) {
                input = input.replace(puncteDeSuspensie, token);
            }
        }
    }
    return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;
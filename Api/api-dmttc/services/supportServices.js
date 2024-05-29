const fs = require('fs');

exports.addRequest = (name, email, phone, subject, description) => {
    const jsonData = fs.readFileSync('support.json', 'utf-8');
    //converter o arquivo para um json
    const info = JSON.parse(jsonData);
    //criar um novo usuário
    const newInfo = {name: name, email: email, phone: phone, subject: subject, description: description};
    //adicionar o novo usuário ao json
    info.push(newInfo);
    //salvar o json no arquivo
    fs.writeFileSync('support.json', JSON.stringify(info), 'utf-8');
}


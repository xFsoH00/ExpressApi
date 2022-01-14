var admin = require("firebase-admin");

var serviceAccount = require("");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = {db};

// * Responsavel por iniciar o banco de dados no modo admin, assim permitindo todas as alterações
// * Banco usado firebase
// * Necessário criar uma conta de serviço e referenciar o Json em  { serviceAccount }
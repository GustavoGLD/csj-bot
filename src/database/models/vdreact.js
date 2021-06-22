/**
 * o que é o videoreaction?
 * bot mandar enviar mensagem de elogio quando um vídeo for postado no chat #videos-novos
 */

const db = require('../connection');

const videoreaction_schema = new db.Schema({
    reaction: String
});

 //armaza o número da próxima frase mandar, e o chat a qual mandar
 const vdr_events_schema = new db.Schema({
    count: Number,
    chatID: String
});

const videoreaction = db.model('videoreaction', videoreaction_schema);

const vdr_events_model = db.model('vdr_events', vdr_events_schema);

exports.vdr_model = videoreaction;
exports.vdr_events_model = vdr_events_model;


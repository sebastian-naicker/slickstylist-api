const responsePayload = (status, data, msg) => ({
  status,
  data,
  message: msg,
});

module.exports =  { responsePayload };

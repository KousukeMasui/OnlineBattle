
//�����sql�Ɏg�����̈����n�����s��

//--------------------------------------
// ���W���[���ǂݍ���
//--------------------------------------
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//--------------------------------------
// Web�T�[�o
//--------------------------------------
app.get('/', function (req, res) {
    res.sendFile(__dirname + '../html/title.html');
});
app.get('/jquery.min.js', function (req, res) {
    res.sendFile(__dirname + '/jquery.min.js');
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});

//--------------------------------------
// Socket.io
//--------------------------------------
io.on('connection', function (socket) {
    //�ڑ����̃��b�Z�[�W
    console.log('a user connected');

    //�`���b�g���b�Z�[�W
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });
    //���[�U�[�l�[��
    socket.on('userName', function (name) {
        io.emit('userName', name);
    });
    //


    //�ؒf
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

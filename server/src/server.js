const app = require('express')();
const httpServer = require('http').Server(app);
const port=4444;

// Habilitació per CORS
// https://socket.io/docs/v3/handling-cors/
const io = require("socket.io")(httpServer, {
    cors: {
      origin: '*',
    }
  });

const equips = {};
const jugadors = {};
const peces = {};

httpServer.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

io.on("connection", socket => {
    let previousId;
    console.log(`Socket ${socket.id} has connected`);

    io.emit("equips", Object.keys(equips));
    io.emit("jugadors", Object.keys(jugadors));
    io.emit("peces", Object.keys(peces));


    socket.on("newEquip", equip => {
        equips[equip.num] = equip;
        safeJoin(equip.num);
        io.emit("equips", Object.keys(equips));
        socket.emit("equip", equip);
    });

    socket.on("getEquip", equipNum => {
        safeJoin(equipNum);
        socket.emit("equip", equips[equipNum]);
    });

    socket.on("getEquips", () => {
        socket.emit("equips", Object.keys(equips));
    });

    socket.on("guardarPecaTreta", peca => {
        peces.push(peca);
    });

    socket.on("getPecesTretes", () => {
        socket.emit("peces", peces);
    });

    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined from ${currentId}`));
        previousId = currentId;
    }
});
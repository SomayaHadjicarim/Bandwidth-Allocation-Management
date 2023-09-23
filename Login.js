

// LOGIN PO TO --------------------------------------------------------------------                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ----->
export const connectToMikrotik = async (username, password) => {
  const apiServer = new RestfulMikrotik({
    host: '192.168.88.1',
    user: username,         
    password: password,  
    listen_port: 5000, 
    listen_host: '127.0.0.1'
  });

  try {
    await apiServer.connect();
    return apiServer;
  } catch (err) {
    throw new Error('Unable to establish connection to Mikrotik');
  }
};


// LOG OUT------------------------------------------------------------------------------>
const disconnectFromMikrotik = async (apiServer) => {
  try {
    if (apiServer && apiServer.connected) {
      await apiServer.disconnect();
      console.log('Disconnected from Mikrotik');
    } else {
      console.log('Not connected to Mikrotik');
    }
  } catch (err) {
    console.error('Error while disconnecting from Mikrotik:', err.message);
  }
};

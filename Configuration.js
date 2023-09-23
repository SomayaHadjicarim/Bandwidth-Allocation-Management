export const configureBandwidthAndPriority = async (apiServer, username, priority) => {
  try {
    if (!apiServer.connected) {
      console.log('Not connected to Mikrotik');
      return;
    }

    // Find the user by username
    const response = await apiServer.execute('/ppp/secret/print', {
      '?name': username,
    });

    if (response.length === 0) {
      console.log(`User ${username} not found`);
      return;
    }

    const userId = response[0]['.id'];

    let uploadSpeed, downloadSpeed;

 
    switch (priority) {
      case 1:
        uploadSpeed = '10M'; 
        downloadSpeed = '10M';
        break;
      case 2:
        uploadSpeed = '5M';
        downloadSpeed = '5M';
        break;
      case 3:
        uploadSpeed = '2M';
        downloadSpeed = '5M';
        break;
      default:
        console.log('Invalid priority');
        return;
    }

    await apiServer.execute('/queue/simple/set', {
      '=.id': userId,
      'max-limit': `${downloadSpeed}/${uploadSpeed}`,
      'priority': priority, 
    });

    console.log(`Bandwidth and priority settings configured for user ${username}`);
  } catch (err) {
    console.error('Error while configuring bandwidth and priority:', err.message);
  }
};

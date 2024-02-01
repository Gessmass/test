export const discoverBluetoothDevices = async () => {
  try {
    const devices = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
    });
  } catch (error) {
    console.error("Erreur lors de la recherche d'appareils Bluetooth :", error);
  }
};
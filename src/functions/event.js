async function change(event) {
    const id = event.target.id
    switch (id) {
      case 'clientID':
        setClientID(event.target.value);
        break;
      case 'secretKey':
        setSecretKey(event.target.value);
        break;
      default:
      // code block
    }
};

export default change

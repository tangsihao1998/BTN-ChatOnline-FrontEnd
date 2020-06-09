import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import { SOCKET_IO_URLS } from '../constant/urls';

// import reduxifyServices, { getServicesStatus } from 'feathers-reduxify-services';
// import reduxifyAuthentication from 'feathers-reduxify-authentication';

const socket = io(SOCKET_IO_URLS);
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(
	feathers.authentication({
		storage: window.localStorage,
	})
);

export default client;

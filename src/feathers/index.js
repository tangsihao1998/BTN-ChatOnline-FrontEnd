import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import reduxifyServices from 'feathers-redux';

import { SOCKET_IO_URLS } from '../constant/urls';

const socket = io(SOCKET_IO_URLS);
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(
	feathers.authentication({
		storage: window.localStorage,
	})
);

// import Feathers Reduxify
const services = reduxifyServices(client, ['users', 'messages', 'rooms', 'authentication', 'authManagement']);

export {
	services,
	client,
};

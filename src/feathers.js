import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import { SOCKET_IO_URLS } from './constant/urls';

const socket = io(SOCKET_IO_URLS);
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(
	feathers.authentication({
		storage: window.localStorage,
	})
);

client.mixins.push((service, path) => {
	service.mixin({
		on(...args) {
			const event = args[0];

			// If it is a socket client service
			if (service.connection && typeof service.connection.emit === 'function') {
				service.connection.emit('subscribe', {
					path,
					event,
				});
			}

			// Call the old .on
			return this._super(...args);
		},
	});
});

export default client;

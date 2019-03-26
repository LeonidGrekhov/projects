import io from 'socket.io-client';
import serverAddress from './serverAddress';

export default io.connect(serverAddress);

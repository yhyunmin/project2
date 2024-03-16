import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

//This configures a Services Worker with the given request handlers.
const worker = setupWorker(...handlers);

export default worker;

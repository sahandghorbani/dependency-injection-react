import { initAppModule } from '@/app/application/module.config';
import { initInfraModule } from '@/infrastructure/module.config';
import { createContainer } from 'awilix';

const container = createContainer();

initInfraModule(container); // our main registers
initAppModule(container); // our bridge registers

export default container;

import { CreateUserController } from '@modules/users/services/CreateUsers/CreateUserController';
import { DeleteUserController } from '@modules/users/services/DeleteUsers/DeleteUsersController';
import { ListUserController } from '@modules/users/services/ListUsers/ListUsersController';
import { UpdateUserController } from '@modules/users/services/UpdateUsers/UpdateUsersController';
import { Router } from 'express';

const route = Router();

route.post('/user', CreateUserController.handle);
route.get('/user', ListUserController.handle);
route.delete('/user/:id', DeleteUserController.handle);
route.put('/user', UpdateUserController.handle);

export default route;

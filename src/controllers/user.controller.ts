import { Controller, Get, Route } from 'tsoa';

@Route('/user')
export class UserController extends Controller {
    @Get('')
    public async index() {
        return { msg: 'user' };
    }

    @Get('/msg')
    public msg() {
        return { msg: 'user message' };
    }
}
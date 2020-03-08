import { Controller, Get, Route, Query, OperationId, Tags } from 'tsoa';

@Route('/user')
@Tags('用户API')
export class UserController extends Controller {
    /**
     * 根据多个用户Id查询多个用户信息
     * @param ids 多个用户Id(数组)
     */
    @Get('usersInfo')
    public async getUsersInfo(@Query() ids: string[]): Promise<UserInfo[]> {
        return ids.map(x => {
            return {
                id: x,
                nickName: `nickName_${x}`,
                activeValue: 66,
                avatar: "avatar01.jpg"
            }
        });
    }

    /**
     * 根据用户到token查询用户信息
     * @param token 跳转到聊天服务时带过来到token
     */
    @Get('{token}')
    public async getUserInfoByToken(token: string): Promise<UserInfo> {
        return {
            id: 'userid需要保持唯一切不会改变',
            nickName: `nickName_${token}`,
            activeValue: 66,
            avatar: "avatar01.jpg"
        }
    }
}

export interface UserInfo {
    /** 平台id */
    id: string;
    /** 昵称 */
    nickName: string;
    /** 活跃值 */
    activeValue: number;
    /** 头像 */
    avatar: string;
}
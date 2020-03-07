import { Controller, Get, Route, Query, OperationId, Tags } from 'tsoa';

@Route('/user')
@Tags('用户API')
export class UserController extends Controller {
    /**
     * 
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
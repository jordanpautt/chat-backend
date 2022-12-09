import { JsonController, Post, Body, Get } from "routing-controllers";

@JsonController('/auth', { transformResponse: true })
class AuthController {

  @Get('/')
  insertOrder(): { status: number; success: boolean; message: string } {

    return {
      status: 200,
      success: true,
      message: 'ayy miguel'
    };
  }
}

export default AuthController;

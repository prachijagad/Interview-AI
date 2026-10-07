const {Router} = require('express')  // Destructure and requiring the router, mostly seen in codebases
const authRouter = Router()   // There are more than one style to write the code but the main thing is the flow and what was the code actually

const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware")


/** 
   * @route POST /api/auth/register
   * @description Register new user
   * @acess public
*/
authRouter.post("/register", authController.registerUserController);


/** 
   * @route POST /api/auth/login
   * @description Login user with e and p
   * @acess publically is API ko use kiya ja sakta hai   
*/
authRouter.post("/login", authController.loginUserController)


/** 
   * @route GET /api/auth/logout
   * @description clear token from cookie and add in blacklist
   * @acess public
*/
authRouter.get("/logout", authController.logoutUserController)


/**
 * @route GET /api/auth/getme
 * @description get current login user details
 * @access private
 */
authRouter.get("/get-me", authMiddleware.authUser, authController.)

module.exports = authRouter;
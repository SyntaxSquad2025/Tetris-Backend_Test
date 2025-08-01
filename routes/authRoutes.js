const express = require("express");
const router = express.Router();
//admin controller
const { Adminsignup,AdminSetReferralReward,Usernotification, Adminlogin, getAllUsers, EditProfile, AdmingetProfile, AdminSetReward,
     GetAllDailyReward, approvewithdraw,transferwithdraw, getAllWithdrawStatus, withdrawLimits, rejectwithdraw, changePassword,
      forgotPassword, resetPassword, AdminLogout, addAd, getAds, getCompletedTasksByUser, getCompletedAdsByUser, getAllClaimHistory,
       AdminGetReferralReward,getUserHistory,searchRecords,getUserProfile, dashBoard,referralCount  } = require("../controller/admin/adminController");
const { validateToken,validateClientId,validateReferralCount, isAdmin, isuser,validateTelegramHash } = require("../middleware/token")
//user controller
const { signup, UserClaimReward,GetUserClaimHistory,getuserads,getGameStats, login, withdrawrequest, getProfile, updateProfile, getWithdrawStatus ,dashBoardUser,getreferralHistory,UserGetReferralReward,GetDailyReward} = require("../controller/user/userController")
//task controller
const { Addtask, Tasks } = require("../controller/admin/taskController")
//booster controller


const { Totalgamehistory, gameController, getAllGames, getSingleGame, createOrUpdateGame } = require("../controller/admin/gameController")

const { placeBet, gameHistory,getUserSingleGame } = require("../controller/user/gameController")

const { getUserTask, CompleteUserTask, getUserCompletedTasks, getUserTasksWithStatus, CompleteUserAd,getUserCompletedAds} = require('../controller/user/taskController');
const { updateOrCreateWithdrawLimits, getWithdrawalLimits} = require("../controller/admin/withdrawLimits");
const { getUserWithdrawalLimits,getUserTicketConvertion} = require("../controller/user/userwithdrawLimits");
const {Tickets,getTicketConvertion} = require("../controller/admin/ticketsController");
// const { validate } = require("../models/rewardSettingSchema");


//Admin Routes
router.post("/adminsignup", Adminsignup);    
router.post("/adminlogin", Adminlogin);    
router.get("/admingetallusers",
       validateToken,
       validateClientId,
        isAdmin,
        getAllUsers);    
router.put("/admineditprofile/:_id",
         validateToken, validateClientId, isAdmin,
        EditProfile);   
router.get("/admingetprofile/:_id",
         validateToken, validateClientId, isAdmin,
        AdmingetProfile);    
router.post("/setdailyReward", 
         validateToken, validateClientId, isAdmin,
       AdminSetReward)   
router.get("/getalldailyreward",
         validateToken, validateClientId, isAdmin,
        GetAllDailyReward);  //✅
router.post("/approveWithdraw",
         validateToken, validateClientId, isAdmin,
approvewithdraw);    //✅
router.post("/transferWithdraw",
         validateToken, validateClientId, isAdmin,
       transferwithdraw);    //✅
router.post("/rejectWithdraw",
         validateToken, validateClientId, isAdmin,
        rejectwithdraw);   //✅
router.get("/getallwithdrawstatus",
         validateToken, validateClientId, isAdmin,
       getAllWithdrawStatus);   //✅
router.post("/addtask",
         validateToken, validateClientId, isAdmin,
         Addtask);   //✅
router.post("/updatetask/admin",
         validateToken, validateClientId, isAdmin,
       Addtask);   //✅
router.get("/getsingletask/admin/:id",
         validateToken, validateClientId, isAdmin,
        Tasks);   //✅
router.get("/gettasks/admin",
         validateToken, validateClientId, isAdmin,
        Tasks);   //✅
router.post("/changepassword", changePassword);  //✅
router.post("/forgotPassword", forgotPassword);  //✅
router.post("/resetPassword", resetPassword);   //✅
router.post("/adminLogout", AdminLogout);  //✅
router.get("/totalgamehistory",
         validateToken, validateClientId, isAdmin,
        Totalgamehistory);  //✅
router.post("/addAdUpdateAd",
         validateToken, validateClientId, isAdmin,
         addAd)  //✅-
router.get("/getads/:AdId",
         validateToken, validateClientId, isAdmin,
         getAds)  //✅-
router.get("/getads",
         validateToken, validateClientId, isAdmin,
         getAds)   //✅-
router.get('/getCompletedTasksByUser/:_id',
         validateToken, validateClientId, isAdmin,
       getCompletedTasksByUser);  //✅-
router.get('/getCompletedTasksByUser',
         validateToken, validateClientId, isAdmin,
       getCompletedTasksByUser);  //✅-
router.get('/getCompletedAdsByUser/:_id',
         validateToken, validateClientId, isAdmin,
         getCompletedAdsByUser)  //✅-
router.get('/getCompletedAdsByUser',
         validateToken, validateClientId, isAdmin,
         getCompletedAdsByUser)  //✅-
router.get('/getAllClaimHistory',
         validateToken, validateClientId, isAdmin,
         getAllClaimHistory)  //✅-
router.post("/game",
        validateToken,validateClientId, isAdmin,
         createOrUpdateGame)  //✅-
router.post("/gameUpdate/:_id",
        validateToken,
        validateClientId,
         isAdmin,
         createOrUpdateGame);  //✅-
router.get("/gettotalgames",
         validateToken, validateClientId, isAdmin,
         getAllGames);  //✅-
router.get("/getsinglegame", 
         validateToken, validateClientId, isAdmin,
        getSingleGame);  //✅-
router.post('/sendNotificationToAllUsers',
        //  validateToken, validateClientId, isAdmin,
         Usernotification);   //✅-
router.post('/set-referral-reward',
        //  validateToken, validateClientId, isAdmin,
         AdminSetReferralReward);    //✅-
router.post('/set-referral-rewardByID/:id', 
         validateToken, validateClientId, isAdmin,
       AdminSetReferralReward);    //✅-
router.get('/admin/referral-reward/:id',
         validateToken, validateClientId, isAdmin,
         AdminGetReferralReward);   //✅-
router.get('/admin/referral-rewards',
         validateToken, validateClientId, isAdmin,
       AdminGetReferralReward);  //✅-
router.get("/getreferralHistory", 
         validateToken, validateClientId, isAdmin,
        getreferralHistory);    //✅-
router.post("/CreateWithdrawLimits",
         validateToken, validateClientId, isAdmin,
        updateOrCreateWithdrawLimits);    //✅-
router.post("/updateWithdrawLimits",
         validateToken, validateClientId, isAdmin,
         updateOrCreateWithdrawLimits);    //✅-
router.get("/getWithdrawLimits",
         validateToken, validateClientId, isAdmin,
         getWithdrawalLimits);    //✅-
router.post("/createTickets" ,
        //  validateToken, validateClientId, isAdmin,
         Tickets);    //✅-
router.post("/updateTickets",
        //  validateToken, validateClientId, isAdmin,
         Tickets);    //✅-
router.get("/getTicketConvertion", 
         validateToken, validateClientId, isAdmin,
        getTicketConvertion);    //✅-
router.get("/searchRecords",
         validateToken, validateClientId, isAdmin,
       searchRecords);    //✅-


router.get('/dashboard',
         validateToken, validateClientId, isAdmin,
         dashBoard);  //--
router.get('/user/history',
         validateToken, validateClientId, isAdmin,
              getUserHistory);
router.get("/getUserProfile/:_id",
         validateToken, validateClientId, isAdmin,
         getUserProfile); 

router.get("/referralCount/:chatId",
       validateReferralCount,
         referralCount);



// user Routes
// router.post("/usersignup", signup);   //✅
router.post("/userlogin",
        // validateTelegramHash, 
        login);    //✅-
router.get("/getprofile/:_id",
        // validateToken,validateClientId, isuser,validateTelegramHash,
         getProfile);   //✅-
router.post("/updateprofile/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
         updateProfile);  //✅-
router.post("/claimdailyReward/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
        UserClaimReward);    //✅-
router.post("/withdrawRequest/:_id", 
        // validateToken,validateClientId, isuser,validateTelegramHash,
         withdrawrequest);    //✅-
router.get('/getWithdrawStatus/:_id',
        // validateToken,validateClientId, isuser,validateTelegramHash,
         getWithdrawStatus);
router.get("/getusersinglegame/:_id",
        // validateToken,validateClientId, isuser,validateTelegramHash,
        getUserSingleGame);  //✅-
router.post("/game/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
         placeBet);  //✅-
router.get("/gamehistory/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
         gameHistory);  //✅-
router.post("/completetask/:_id", 
        validateToken,validateClientId, isuser,validateTelegramHash,
         CompleteUserTask);  //✅-
router.get("/getUserTasks/:_id",
        // validateToken,validateClientId, isuser,validateTelegramHash,
         getUserTask );  //✅-
router.get("/getCompletedTasks/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
         getUserCompletedTasks);   //✅-
router.get("/getUserTasksWithStatus/:_id", 
        validateToken,validateClientId, isuser,validateTelegramHash,
         getUserTasksWithStatus);   //✅-
router.get('/withdrawallimits/:_id',
        validateToken,validateClientId, isuser,validateTelegramHash,
         withdrawLimits);   //✅
router.get('/getUserads/:_id', 
        validateToken,validateClientId, isuser,validateTelegramHash,
         getuserads);  //✅-
router.post("/completeUserAD/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
        CompleteUserAd);
router.get("/getreferralHistory/:_id",
        // validateToken,validateClientId, isuser,validateTelegramHash,
        getreferralHistory);    //✅-
router.get("/getReferralReward/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
        UserGetReferralReward);
router.get("/getUserWithdrawalLimits/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
        getUserWithdrawalLimits);
router.get("/getUserTicketConvertion/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
        getUserTicketConvertion);
router.get("/getUserCompletedAds/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
        getUserCompletedAds);
router.get("/GetDailyReward/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
        GetDailyReward);
router.get("/getUserClaimHistory/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
        GetUserClaimHistory);
router.get("/dashBoardUser/:_id",
        validateToken,validateClientId, isuser,validateTelegramHash,
        dashBoardUser);
router.get("/getGameStats/:_id",
       //  validateToken,validateClientId, isuser,validateTelegramHash,
getGameStats);




module.exports = router;
 
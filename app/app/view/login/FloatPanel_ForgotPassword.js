Ext.define('Buskart.view.login.FloatPanel_ForgotPassword', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});


var _FloatPanel_ForgotPasswordisOpen = 'N';

var _FloatPanel_ForgotPassword =
     Ext.create('Ext.Container', {     
         floated: true,
         centered: true,
         height: '100%',
         width: '100%',
         closeAction: 'hide',
        // padding: 6,
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         //modal: true,
         //hideOnMaskTap: true,
         //layout: {
         //    type: 'fit'
         //},
         hideAnimation: {
             type: 'slideOut',
             direction: 'down',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },     
         style:'background-color:white',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_ForgotPassword.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             _FloatPanel_ForgotPasswordisOpen = 'N';
                             RemovePages("FloatPanel_ForgotPasswordHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_ForgotPassword.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             _FloatPanel_ForgotPasswordisOpen = 'N';
                             RemovePages("FloatPanel_ForgotPasswordHide()");
                         }

                     }
                 });
             }
         },
         items: {
             height: '100%',
             width: '100%',
             xtype: 'container',
             style: 'border-bottom:0px solid;background-color:transparent;',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [
            {
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_ForgotPasswordBorderBg',
                docked: 'top',
                style: ' background-color:transparent;',
                height: '70%',
                width: '100%',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                items: [

                         {

                             xtype: 'container',
                             width: '100%',
                             height:35,
                             docked: 'top',
                             style: ' background-color:transparent;',
                             id: 'containerFloatPanel_ForgotPasswordHeader',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left',
                             },
                             // hidden:true,
                             items:
                                    [


                                                  {

                                                     // xtype: 'button',
                                                     // // text: 'My Button',
                                                     //  height: 30,
                                                     //  width: 205,
                                                     // html: '<img src="resources/icons/backArrow.jpg" width="25" height="20" alt="Company Name">',
                                                     //// badgeText: '2',
                                                     // handler: function () {
                                                     //     alert('tapped');
                                                     // }
                                                      xtype: 'button',
                                                      id: 'btnFloatPanel_ForgotPasswordBack',
                                                      height: 30,
                                                      width: 60,
                                                     // text:'close',
                                                      //iconCls: 'list',
                                                     html: '<div style="text-align:left;float:left;width:100%;height:30px"><img src="resources/icons/backArrow.jpg" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          FloatPanel_ForgotPasswordHide();
                                                          _FloatPanel_ForgotPasswordisOpen = 'N';
                                                          RemovePages("FloatPanel_ForgotPasswordHide()");

                                                      }
                                                  },
















                                    ]

                         },


                     {
                         height: 155,
                         width: 155,
                         html: '<div ><img src="resources/icons/buskartlogonewnew.png" width="155" height="155" alt="Company Name"></div>',
                     },
                                                    //{
                                                    //    margin: '0 0 0 0',
                                                    //    id: 'htmlFloatPanel_ForgotPasswordTxt',
                                                    //    html: '<font size=2 color=black><b>Ayoha-Reward</b></font>'
                                                    //},

                                                    // {
                                                    //     margin: '-10 0 0 0',
                                                    //     id: 'htmlFloatPanel_ForgotPassword_bottomTagLineTxt',
                                                    //     html: '<font size=1 color=black>We Double Your Reward!</font>'
                                                    // },
                                                    {
                                                        xtype: 'panel',
                                                        height: 30
                                                    },
                                                      {
                                                          html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 20px;font-weight:bold;color:black;">Forgot Password</div>',
                                                      },

                                                 {
                                                     xtype: 'panel',
                                                     height: 40
                                                 },

                                                  {
                                                      margin: '0 0 0 65',
                                                      html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:grey;">Enter your email address below to retrive password</div>',
                                                  },
                                                  {
                                                      xtype: 'panel',
                                                      height: 40
                                                  },

                //{
                //    //hidden: true,
                //    id: 'htmlFloatPanel_ForgotPasswordEmail',
                //    margin: '-2 0 0 0',
                //    width: '70%',
                //    height: 20,
                //    html: '<input type="text" id="input-FloatPanel_ForgotEmail" placeHolder="Email"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;">'


                //},
                {
                    xtype: 'textfield',
                   // name: 'name',
                    id:'FloatPanel_ForgotPassword_Email',
                    label: 'Enter your email'
                },
 //{
 //    xtype: 'panel',
 //    height: 20
 //},
                {
                    xtype: 'button',
                    width: '100%',
                    ui: 'plain',
                    height: 60,
                    margin: '0 0 0 0',
                    id: 'btnFloatPanel_ForgotPassword_SendPassword',
                    text: '<button class="buttonSendEmailForgotPassword">Send Password</button>',
                    handler: function () {
                        FloatPanel_ForgotPasswordSendEmail();
                    },


                },



                ]


            },



                {
                    xtype: 'container',
                    width: '100%',
                    height: '30%',
                    docked: 'bottom',
                    style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                    id: 'containerFloatPanel_ForgotPasswordbottom',
                  
                },



             


             ]




         }







     });
  


function FloatPanel_ForgotPasswordShow() {

    //console.log(_FloatPanel_ForgotPasswordisOpen);
    //Ext.Viewport.remove(_FloatPanel_ForgotPassword);
    //this.overlay = Ext.Viewport.add(FloatPanel_ForgotPassword());
    //this.overlay.show();

  
    _FloatPanel_ForgotPassword.show();
    _FloatPanel_ForgotPasswordisOpen = 'Y';

    AddRoutePages("FloatPanel_ForgotPasswordHide()");
}


function FloatPanel_ForgotPasswordHide() {
    _FloatPanel_ForgotPassword.hide(); _FloatPanel_ForgotPasswordisOpen = 'N';
    RemovePages("FloatPanel_ForgotPasswordHide()");

}


function FloatPanel_ForgotPassword_IsEmailExist() {
    var strEmail = document.getElementById('input-FloatPanel_ForgotEmail').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');


    if (TrimStrEmail) {
        // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Email....' });
        LoadingPanelShow(getLoadingIcon(), 'Checking Email..');





        var task = Ext.create('Ext.util.DelayedTask', function () {

            var objn = {
                "Email": TrimStrEmail
            };
            // console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileCheckIsEmailExist',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        //var newData = JSON.parse(JSON.stringify(result.results.Email))
                        //console.log(result.results.Email);
                        //  //data.results[0];
                        // console.log(data.total);
                        if (data.total > 0) {
                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Email Exist!..' });
                            var AllowToSendEmail = data.results[0].AllowToSendEmail;
                            if (AllowToSendEmail == "NotAllowed") {
                                swalFireFail("You have been exceeded maximum retrival password!");
                                Ext.Viewport.unmask();
                                return;

                            } if (AllowToSendEmail == "Allowed") {
                                Ext.Viewport.unmask();
                                FloatPanel_ForgotPasswordSendEmail_Sending();


                            }

                            LoadingPanelHide();

                            //  FloatPanel_ForgotPasswordSendEmail_Sending();


                        }
                        if (data.total == 0) {

                            swalFireFail("(" + TrimStrEmail + ") Not Exist!");
                            Ext.Viewport.unmask();
                            LoadingPanelHide();

                        }





                    }
                    else {

                        swalFireFail("Cheking Failed!!!" + result.responseText.trim());
                        Ext.Viewport.unmask();
                        LoadingPanelHide();
                    }


                },

                failure: function (result, request) {
                    Ext.Viewport.unmask();
                    swalFireFail("Cheking Failed!!!");
                    LoadingPanelHide();
                }

            });



        });
        //  Ext.Viewport.unmask();
        //LoadingPanelHide();
        task.delay(500);
    } else {
        swalFireFail("No Email!");
        LoadingPanelHide();
    }








}



function FloatPanel_ForgotPasswordSendEmail() {
    FloatPanel_ForgotPassword_IsEmailExist();
}







function FloatPanel_ForgotPasswordSendEmail_Sending() {


    var strEmail = document.getElementById('input-FloatPanel_ForgotEmail').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');



    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Sending Email..' });


    // LoadingPanelShow(getLoadingIcon(), 'Sending Email..');


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.Ajax.request({
            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileForgotPassword',
            params: {

                "Email": TrimStrEmail,
                "LoginOS": localStorage.getItem('device_platform'),
                "LoginIP": localStorage.getItem('device_ip'),
                "PhoneModel": localStorage.getItem('device_model'),
                "PhoneImeiNo": localStorage.getItem('device_uuid'),
                "PhoneVersion": localStorage.getItem('device_version'),
                "PhonePlatform": localStorage.getItem('device_platform'),
                "PhonePlatformVersion": localStorage.getItem('device_version'),
                "PhoneManufacturer": localStorage.getItem('device_manufacturer'),
                "PhoneSerial": GetCurrentdeviceserial(),
                "RawPhoneInfo": localStorage.getItem('SimInfo'),
                "PlayerID": localStorage.getItem('player_id'),

            },
            success: function (result, request) {

                swalFireSuccesSendEmail('Temporary password has been sent to your email.!');
                Ext.Viewport.unmask();
                FloatPanel_ForgotPasswordHide();
                LoadingPanelHide();

            },
            failure: function (result, request) {
                swalFireFail("Send Email Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }
        });



    });
    task.delay(1000);

}
Ext.define('Buskart.view.config.Route', {   
});

function GetAPIurl() {

    // var _value = 'http://42.1.63.57:17655';
    // var _value = 'http://192.168.0.107:9018';
    // var _value = 'https://ianmizi.com/webapiresit/webapiresit/';
    var _value = 'http://42.1.63.57/CRMOBILEAPI/';
    // var _value = 'https://192.168.0.101/CRMOBILEAPI/';
    //  var _value = 'http://tarmizi-004-site6.etempurl.com/webapiresit/webapiresit/';
    //  var _value = 'http://cloudreceipts.sytes.net:9018/'
    return _value;
}
var ArrappRouteisOpen = [];

function AddRoutePages(val) {
    // console.log(val);
    //var n = ArrappRoute.includes(Page);
    var n = ArrappRouteisOpen.includes(val);
    if (n) {
        console.log(val);
    } else {
        //ArrappRoute.push(Page);
        //ArrappRouteisOpen.push(val);

        // ArrappRoute.push(Page);
        console.log(val);
        ArrappRouteisOpen.push(val);

    }

    //console.log(ArrappRouteisOpen.length);

    // console.log(ArrappRouteisOpen.length);

}


function RoutePages() {



    var a = swal.isVisible();
    if (a) {
        swal.close();
        return;
    }

    var ii = ArrappRouteisOpen.length - 1;
    var pagesRoute;
    if (ArrappRouteisOpen.length > 0) {
        pagesRoute = ArrappRouteisOpen[ii];


        console.log(pagesRoute);

        eval(pagesRoute);

        var indexss = ArrappRouteisOpen.indexOf(pagesRoute);
        if (indexss > -1) {

            ArrappRouteisOpen.splice(indexss, 1);
        }
        ii--;

    } else {
        FloatPanel_ExitDialogBoxShow();
    }



}

//function RemovePages(Page,val) {
function RemovePages(val) {
    //var indexs = ArrappRoute.indexOf(Page);
    //if (indexs > -1) {      
    //    ArrappRoute.splice(indexs, 1);
    //}

    console.log(val);

    var indexss = ArrappRouteisOpen.indexOf(val);
    if (indexss > -1) {
        ArrappRouteisOpen.splice(indexss, 1);
    }

}

/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Signup */
    
    
        /* button  Login */
    
    
        /* button  #sigup-cont-1 */
    
    
        /* button  #signup-back-1 */
    
    
        /* button  #signup-back-1 */
    $(document).on("click", "#signup-back-1", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #back-signup-2 */
    $(document).on("click", "#back-signup-2", function(evt)
    {
         /*global activate_page */
         activate_page("#signup-form"); 
         return false;
    });
    
        /* button  #btbacklogin */
    $(document).on("click", "#btbacklogin", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #continue-signup-2 */
    
    
        /* button  #btback-serv */
    $(document).on("click", "#btback-serv", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* listitem  List item */
    $(document).on("click", ".uib_w_51", function(evt)
    {
         /*global activate_page */
         activate_page("#appointment"); 
         return false;
    });
    
        /* button  #btlogin */
    $(document).on("click", "#btlogin", function(evt)
    {
         /*global activate_page */
         loginUsr(); 
         return false;
    });
    
        /* button  #btback-serv */
    $(document).on("click", "#btback-serv", function(evt)
    {
         /*global activate_page */
         activate_page("#login-form"); 
         return false;
    });
    
        /* button  #btload-serv */
    $(document).on("click", "#btload-serv", function(evt)
    {
        /* your code goes here */ 
        listServices();
         return false;
    });
    
    
        /* button  #btbackdetail */
    $(document).on("click", "#btbackdetail", function(evt)
    {
         /*global activate_page */
         activate_page("#pg-services"); 
         return false;
    });
    
        /* button  #btbackapp */
    
    
        /* button  #btbackapp */
    $(document).on("click", "#btbackapp", function(evt)
    {
        /* your code goes here */ 
        listServices(); 
        activate_page("#pg-services");
        return false;
    });
    
        /* button  #btbooknow */
    $(document).on("click", "#btbooknow", function(evt)
    {
         /*global activate_page */
         getUserDetails();
         activate_page("#appointment"); 
         return false;
    });
    
        /* button  #btappcontinue */
    $(document).on("click", "#btappcontinue", function(evt)
    {
        if (checkDate()){
            
            activate_page("#appointment-conf");
        }
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btbackappconf */
    $(document).on("click", "#btbackappconf", function(evt)
    {
         /*global activate_page */
         activate_page("#pg-services"); 
         return false;
    });
    
        /* button  #btconfirmbooking */
    $(document).on("click", "#btconfirmbooking", function(evt)
    {
        var retorno = addBooking();f
         return false;
    });
    
        /* button  #btbackcard */
    $(document).on("click", "#btbackcard", function(evt)
    {
         /*global activate_page */
         activate_page("#pg-services"); 
         return false;
    });
    
        /* button  #btconfirmpay */
    $(document).on("click", "#btconfirmpay", function(evt)
    {
        var retorno = validateCard();
        if (retorno){
            makeStripePayment(); 
            
        }
            /* your code goes here */ 
         return false;
    });
    
        /* button  #signup-cont-1 */
    $(document).on("click", "#signup-cont-1", function(evt)
    {
         addUser();
        /* your code goes here */ 
         return false;
    });
    
        /* button  #continue-signup-2 */
    
        /* button  #continue-signup-2 */
    $(document).on("click", "#continue-signup-2", function(evt)
    {
        /* your code goes here */ 
        updateUser();
        return false;
    });
    
        /* button  #btsignupfinal */
    $(document).on("click", "#btsignupfinal", function(evt)
    {
         /*global activate_page */
         activate_page("#pg-services"); 
         return false;
    });
    
        /* button  #bthistory */
    $(document).on("click", "#bthistory", function(evt)
    {
        /* your code goes here */ 
        listBookings();
        activate_page("bookings");
         return false;
    });
    
        /* button  #bthistback */
    $(document).on("click", "#bthistback", function(evt)
    {
         /*global activate_page */
         activate_page("#pg-services"); 
         return false;
    });
    
        /* button  #btbookings */
    $(document).on("click", "#btbookings", function(evt)
    {
        /* your code goes here */ 
        listBookings();
         activate_page("#bookings");
         return false;
    });
    
        /* button  #btmenu */
    $(document).on("click", "#btmenu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#menu"));  
         return false;
    });
    
        /* button  View Bookings */
    
    
        /* button  #btbackfeed */
    $(document).on("click", "#btbackfeed", function(evt)
    {
         /*global activate_page */
         activate_page("#pg-services"); 
         return false;
    });
    
        /* button  #btsendfeed */
    $(document).on("click", "#btsendfeed", function(evt)
    {
        /* your code goes here */ 
         sendFeedback();
         return false;
    });
    
        /* button  #btviewbookingsside */
    $(document).on("click", "#btviewbookingsside", function(evt)
    {
         /*global activate_page */
        listBookings();
        activate_page("#bookings"); 
         return false;
    });
    
        /* button  #btsendcontact */
    
    
        /* button  .uib_w_149 */
    $(document).on("click", ".uib_w_149", function(evt)
    {
         /*global activate_page */
         activate_page("#pg-services"); 
         return false;
    });
    
        /* button  #btcontact */
    $(document).on("click", "#btcontact", function(evt)
    {
         /*global activate_page */
         activate_page("#contact"); 
         return false;
    });
    
        /* button  #btsendcontact */
    $(document).on("click", "#btsendcontact", function(evt)
    {
        /* your code goes here */ 
        sendEmail();
        return false;
    });
    
        /* button  #btviewprofile */
    $(document).on("click", "#btviewprofile", function(evt)
    {
        /* your code goes here */ 
        profile();
         return false;
    });
    
        /* button  .uib_w_159 */
    $(document).on("click", ".uib_w_159", function(evt)
    {
         /*global activate_page */
         activate_page("#pg-services"); 
         return false;
    });
    
        /* button  #btexit */
    $(document).on("click", "#btexit", function(evt)
    {
           if (navigator.app) {
            navigator.app.exitApp();
            }
            else if (navigator.device) {
              navigator.device.exitApp();
            }
            else {
                      window.close();
            }       
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btpgsignup */
    
    
        /* button  #distance */
    $(document).on("click", "#distance1", function(evt)
    {
        calculateDistance('5302 burning tree dr, orlando, fl, 32811', 'orlando mco');
        distance('28.4648911','-81.4616318','28.4311577','-81.3102717');
        getDistanceFromLatLonInKm('28.4648911','-81.4616318','28.4311577','-81.3102717');
        refreshIntervalId = setInterval(checkBookingUser,10000)	
        /* your code goes here */ 
        getNearestProvider(618);
         return false;
    });
    
        /* button  #distance */
    $(document).on("click", "#distance", function(evt)
    {
        /* your code goes here */ 
        getDistanceFromLatLonInKm('28.4648911','-81.4616318','28.4311577','-81.3102717');
        getNearestProvider(618);
        
         return false;
    });
    
        /* button  #btpglogin */
    $(document).on("click", "#btpglogin", function(evt)
    {
         /*global activate_page */
         activate_page("#login-form"); 
         return false;
    });
    
        /* button  #btpgsignup */
    $(document).on("click", "#btpgsignup", function(evt)
    {
         /*global activate_page */
         activate_page("#signup-form"); 
         return false;
    });
    
        /* button  #btpgservices */
    
    
        /* button  #btsignup */
    $(document).on("click", "#btsignup", function(evt)
    {
         /*global activate_page */
         activate_page("#signup-form"); 
         return false;
    });
    
        /* button  #btshowlogin */
    $(document).on("click", "#btshowlogin", function(evt)
    {
         /*global activate_page */
         activate_page("#login-form"); 
         return false;
    });
    
        /* button  #btpgservices */
    $(document).on("click", "#btpgservices", function(evt)
    {
         /*global activate_page */
        showServices();
         activate_page("#pgshowserv"); 
         return false;
    });
    
        /* button  #btbackdetshow */
    $(document).on("click", "#btbackdetshow", function(evt)
    {
         /*global activate_page */
         activate_page("#pgshowserv"); 
         return false;
    });
    
        /* button  #btexitmenu */
    $(document).on("click", "#btexitmenu", function(evt)
    {
           if (navigator.app) {
            navigator.app.exitApp();
            }
            else if (navigator.device) {
              navigator.device.exitApp();
            }
            else {
                      window.close();
            }       
        
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

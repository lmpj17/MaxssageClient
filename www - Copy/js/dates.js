function todayDate()         
{			
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1; //January is 0!
				var yyyy = today.getFullYear();  

				if(dd<10) {
					dd='0'+dd
				} 

				if(mm<10) {
					mm='0'+mm
				} 

				today = mm+'/'+dd+'/'+yyyy;
				return(today);				
			
}			

function checkDate()         
            

            {
                // Limpar todos os itens da lista...
         
                // Exibe a mensagem 'Carregndo clientes'
                var $dateapp = document.getElementById('datepicker').value;
				
				var $dateconv = dates.convert($dateapp);
				
				if (dates.compare($dateconv, todayDate()) < 0){
					
					$("#message-app1").html("<center>Invalid Date</center>");
					return false;	
				} 
				else{
					$("#message-conf").html("<b><center>Appointment Details</center>");
					$("#servDate").html('Date: '+$dateapp);
					$("#servTime").html('Time: '+document.getElementById('app-time').value);
					var MyDiv1 = document.getElementById('servName');
					var MyDiv2 = document.getElementById('serviceName');
					MyDiv1.innerHTML = MyDiv2.innerHTML; 			
					var MyDiv1 = document.getElementById('servFare');
					var MyDiv2 = document.getElementById('serviceFare');
					MyDiv1.innerHTML = MyDiv2.innerHTML; 			
					var MyDiv1 = document.getElementById('servDetail');
					var MyDiv2 = document.getElementById('serviceDescription');
					MyDiv1.innerHTML = MyDiv2.innerHTML; 			
					var MyDiv1 = document.getElementById('servAddress');
					var MyDiv2 = document.getElementById('app-address');
					MyDiv1.innerHTML = MyDiv2.innerHTML; 			
					var MyDiv1 = document.getElementById('servComments');
					var MyDiv2 = document.getElementById('app-comments');
					MyDiv1.innerHTML = MyDiv2.innerHTML; 			
					return true;	
				}
				
			}


			
var dates = {
    convert:function(d) {
        // Converts the date in d to a date-object. The input can be:
        //   a date object: returned without modification
        //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
        //   a number     : Interpreted as number of milliseconds
        //                  since 1 Jan 1970 (a timestamp) 
        //   a string     : Any format supported by the javascript engine, like
        //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
        //  an object     : Interpreted as an object with year, month and date
        //                  attributes.  **NOTE** month is 0-11.
        return (
            d.constructor === Date ? d :
            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
            d.constructor === Number ? new Date(d) :
            d.constructor === String ? new Date(d) :
            typeof d === "object" ? new Date(d.year,d.month,d.date) :
            NaN
        );
    },
    compare:function(a,b) {
        // Compare two dates (could be of any type supported by the convert
        // function above) and returns:
        //  -1 : if a < b
        //   0 : if a = b
        //   1 : if a > b
        // NaN : if a or b is an illegal date
        // NOTE: The code inside isFinite does an assignment (=).
        return (
            isFinite(a=this.convert(a).valueOf()) &&
            isFinite(b=this.convert(b).valueOf()) ?
            (a>b)-(a<b) :
            NaN
        );
    },
    inRange:function(d,start,end) {
        // Checks if date in d is between dates in start and end.
        // Returns a boolean or NaN:
        //    true  : if d is between start and end (inclusive)
        //    false : if d is before start or after end
        //    NaN   : if one or more of the dates is illegal.
        // NOTE: The code inside isFinite does an assignment (=).
       return (
            isFinite(d=this.convert(d).valueOf()) &&
            isFinite(start=this.convert(start).valueOf()) &&
            isFinite(end=this.convert(end).valueOf()) ?
            start <= d && d <= end :
            NaN
        );
    }
}	
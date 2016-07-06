jQuery(function($) {
    $("#signup_form").submit(function() {
        var email = $("#f\\:ZW1haWw\\:MA\\:").val(); // get email field value
        var name = $("#f\\:ZnVsbF9uYW1l\\:MA\\:").val(); // get name field value
        var org = $("#f\\:Y29tcGFueV9uYW1l\\:MA\\:").val(); // get message field value


//        woopra.identify({
//                email: email,
//                name: name,
//                company: org
//        });
//
//        // The identify code should be added before the "track()" function
//        woopra.track();
//
//        var data = $(this).serialize();
//        console.log(data);

        // $.ajax({
        //     url: "https://leads-capturer.futuresimple.com/form",
        //     data: data,
        //     dataType: "json",
        //     type: "post",
        //     error: errorCallback,
        //     success: successCallback
        // });
        // return false;


        $.ajax({
                url: "https://leads-capturer.futuresimple.com/form",
                data: data,
                dataType: "json",
                type: "post"
                }
            })
            .done(function(response) {
                alert('You have taken the first step! We will be in touch to get your organisation set up'); // show success message
                var submit = 1;
                $("#f\\:ZnVsbF9uYW1l\\:MA\\:").val(''); // reset field after successful submission
                $("#f\\:ZW1haWw\\:MA\\:").val(''); // reset field after successful submission
                $("#f\\:Y29tcGFueV9uYW1l\\:MA\\:").val(''); // reset field after successful submission
            })
            .fail(function(response) {
                alert('Error sending message.');
            });
        return false; // prevent page refresh
    });
});



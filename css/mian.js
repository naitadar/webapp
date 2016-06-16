
(function () {
    var email1 = 'abc.d.eddd.dd.f@gmail.com';
    var email2 = 'abcdef.ghi@gmail.com';

    function transformEmail(email) {
        // search the postion of @
        var chartPosition = email.indexOf('@');
        // return the cut string 
        var cut = email.slice(0, chartPosition);
        console.log(cut);
        // remove .
        var removeCharacters = cut.replace('.','');
        // replaces the characters and return new string
        var replaceCharacters = cut.replace('.','-');
        // return the second part of the email
        var cut2 = email.slice(chartPosition);
        return replaceCharacters + '-' + removeCharacters.length + cut2 ;
    }

    /**
     * Expected results
     */

    console.log(transformEmail(email1));
    // 'abc-def-6@gmail.com'
    console.log(transformEmail(email2));
    // 'abcdef-ghi-9@gmail.com'
}());

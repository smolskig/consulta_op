(function ($) {
    "use strict";
    $(document).ready(function () {
        $("#consultar").on("click", function () {
            $("#spin").show();
        });
    });

    $(document).ready(function () {
        var SPMaskBehavior = function (val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00000';
            },
            spOptions = {
                onKeyPress: function (val, e, field, options) {
                    field.mask(SPMaskBehavior.apply({}, arguments), options);
                }
            };
        $('#telephone').mask(SPMaskBehavior, spOptions);
    });

})(jQuery);


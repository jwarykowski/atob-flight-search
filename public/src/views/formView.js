(function($, window) {
    'use strict';

    function toggleSubmitButton() {
        var data = this.getFormValues();
        var disable = data.origin && data.destination && dateHelper.isValidSearchDate(data.date);

        this.$searchButton.prop('disabled', !disable);
    }

    function validateInput(event) {
        var $input = $(event.target);

        if ($input.val()) {
            return $input.addClass('valid').removeClass('invalid');
        }

        $input.addClass('invalid').removeClass('valid');
    }

    function validateDateInput(event) {
        var $input = $(event.target);
        var date = $input.val();

        if (dateHelper.isValidSearchDate(date)) {
            return $input.addClass('valid').removeClass('invalid');
        }

        $input.addClass('invalid').removeClass('valid');
    }

    function FormView() {
        this.$el = $('form#searchForm');
        this.$originInput = $('input#origin');
        this.$destinationInput = $('input#destination');
        this.$dateInput = $('input#date');
        this.$searchButton = $('input#search');

        this.$el.on('keyup', toggleSubmitButton.bind(this));

        this.$originInput.on('keyup', validateInput);
        this.$destinationInput.on('keyup', validateInput);
        this.$dateInput.on('keyup', validateDateInput);
    }

    FormView.prototype.disable = function() {
        this.$el.find('input').prop('disabled', true);
    }

    FormView.prototype.enable = function() {
        this.$el.find('input').prop('disabled', false);
    }

    FormView.prototype.getFormValues = function() {
        return {
            origin: this.$originInput.val().trim(),
            destination: this.$destinationInput.val().trim(),
            date: this.$dateInput.val().trim()
        };
    }

    window.application = window.application || {};
    window.application.FormView = FormView;

})(window.jQuery, window);

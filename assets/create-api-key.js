"use strict";

// Class definition
var KTModalCreateApiKey = function () {
	var submitButton;
	var cancelButton;
	var validator;
	var form;
	var modal;
	var modalEl;

	// Init form inputs
	var initForm = function() {
		// Team assign. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="category"]')).on('change', function() {
            // Revalidate the field when an option is chosen
            validator.revalidateField('category');
        });
	}

	// Handle form validation and submittion
	var handleForm = function() {
		// Stepper custom navigation

		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		validator = FormValidation.formValidation(
			form,
			{
				fields: {
					'phone': {
						validators: {
							notEmpty: {
								message: 'Số điện thoại là bắt buộc'
							}
						}
					},
					'api_key': {
						validators: {
							notEmpty: {
								message: 'API Key là bắt buộc'
							}
						}
					},
					'option': {
						validators: {
							notEmpty: {
								message: 'Chọn loại API là bắt buộc'
							}
						}
					},
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
					})
				}
			}
		);
		// Action buttons

	
	}

	return {
		// Public functions
		init: function () {
			// Elements
			modalEl = document.querySelector('#kt_modal_create_api_key');

			if (!modalEl) {
				return;
			}

			modal = new bootstrap.Modal(modalEl);

			form = document.querySelector('#kt_modal_create_api_key_form');
			submitButton = document.getElementById('kt_modal_create_api_key_submit');
			cancelButton = document.getElementById('kt_modal_create_api_key_cancel');

			initForm();
			handleForm();
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTModalCreateApiKey.init();
});
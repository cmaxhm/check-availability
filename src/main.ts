jQuery(document).ready(function () {
  // Date Range Picker
  let formData: {
    destination?: string,
    checkIn?: string,
    checkOut?: string,
    adults?: string,
    children?: string,
  } = {};

  jQuery('input[name="check-in-out"]').daterangepicker({
    autoUpdateInput: true,
    minDate: new Date(),
    locale: {
      cancelLabel: 'Clear'
    }
  });

  jQuery('input[name="check-in-out"]').on('hide.daterangepicker', function(ev: Event, picker: daterangepicker.DateRangePicker) {
    jQuery(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    formData.checkIn = picker.startDate.format('DD/MM/YYYY');
    formData.checkOut = picker.endDate.format('DD/MM/YYYY');
  });

  // Form submit
  jQuery('#availability-form-submit-button').on('click', (e: Event) => {
    e.preventDefault();

    formData = {
      destination: jQuery('#destination').val() as string,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      adults: jQuery('#adults').val().toString(),
      children: jQuery('#children').val().toString()
    }

    if (
      !jQuery('#destination').val() ||
      !formData.checkIn ||
      formData.adults === '' ||
      formData.children === ''
    ) return;

    // Request goes down here -------------------------------------
    console.log(formData);
  });
});

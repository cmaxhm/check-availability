$(document).ready(function () {
  // Date Range Picker
  let formData: {
    destination?: string,
    checkIn?: string,
    checkOut?: string,
    adults?: string,
    children?: string,
  } = {};
  const dateInput = $('input[name="check-in-out"]');

  dateInput.daterangepicker({
    autoUpdateInput: true,
    locale: {
      cancelLabel: 'Clear'
    }
  });

  dateInput.on('hide.daterangepicker', function(ev: Event, picker: daterangepicker.DateRangePicker) {
    $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    formData.checkIn = picker.startDate.format('DD/MM/YYYY');
    formData.checkOut = picker.endDate.format('DD/MM/YYYY');
  });

  // Form submit
  $('#availability-form-submit-button').on('click', (e: Event) => {
    e.preventDefault();

    formData = {
      destination: $('#destination').val() as string,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      adults: $('#adults').val().toString(),
      children: $('#children').val().toString()
    }

    if (
      !$('#destination').val() ||
      !formData.checkIn ||
      formData.adults === '' ||
      formData.children === ''
    ) return;

    // Request goes down here -------------------------------------
    console.log(formData);
  });
});

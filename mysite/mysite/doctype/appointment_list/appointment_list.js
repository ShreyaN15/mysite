// Copyright (c) 2024, abhi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Appointment List', {
	// refresh: function(frm) {

	// }
	no_of_visits: frm => {
		let visits = frm.doc.no_of_visits,
			total_visits = no_of_visits + 1

		frm.set_value('no_of_visits', total_visits)
		frm.refresh_field('no_of_visits')
	}

});

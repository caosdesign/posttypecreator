$(document).ready(function(){
	$("#post_qnt_ok_bt").on('click', function(){
		var qnt_fields = $("#post_qnt_fields").val();
		var form = $("#post_type_form");
		for(var i = 0; i<qnt_fields; i++){

			$("<label>")
				.text("Field Name")
				.appendTo(form);

			$("<input>")
				.attr("name", "field_"+i)
				.attr("id", "field_"+i)
				.appendTo(form);

			$("<br />")
				.appendTo(form);

			$("<label>")
				.text("Field Type")
				.appendTo(form);

			$("<br />")
				.appendTo(form);

			$("<label>")
				.text("Text")
				.appendTo(form);

			$("<input>")
				.attr("type", "radio")
				.attr("name", "type_field_"+i)
				.attr("id", "type_field_"+i)
				.appendTo(form);

			$("<label>")
				.text("Text Area")
				.appendTo(form);

			$("<input>")
				.attr("type", "radio")
				.attr("name", "type_field_"+i)
				.attr("id", "type_field_"+i)
				.appendTo(form);

			$("<label>")
				.text("Checkbox")
				.appendTo(form);

			$("<input>")
				.attr("type", "radio")
				.attr("name", "type_field_"+i)
				.attr("id", "type_field_"+i)
				.appendTo(form);

			$("<label>")
				.text("Radio")
				.appendTo(form);

			$("<input>")
				.attr("type", "radio")
				.attr("name", "type_field_"+i)
				.attr("id", "type_field_"+i)
				.appendTo(form);

			$("<label>")
				.text("Date")
				.appendTo(form);

			$("<input>")
				.attr("type", "radio")
				.attr("name", "type_field_"+i)
				.attr("id", "type_field_"+i)
				.appendTo(form);

			$("<label>")
				.text("Time")
				.appendTo(form);

			$("<input>")
				.attr("type", "radio")
				.attr("name", "type_field_"+i)
				.attr("id", "type_field_"+i)
				.appendTo(form);

			$("<label>")
				.text("Taxonomy")
				.appendTo(form);

			$("<input>")
				.attr("type", "radio")
				.attr("name", "type_field_"+i)
				.attr("id", "type_field_"+i)
				.appendTo(form);

			$("<label>")
				.text("Featured Image")
				.appendTo(form);

			$("<input>")
				.attr("type", "radio")
				.attr("name", "type_field_"+i)
				.attr("id", "type_field_"+i)
				.appendTo(form);

			$("<label>")
				.text("Tags")
				.appendTo(form);

			$("<input>")
				.attr("type", "radio")
				.attr("name", "type_field_"+i)
				.attr("id", "type_field_"+i)
				.appendTo(form);

			$("<br />")
				.appendTo(form);
			$("<br />")
				.appendTo(form);
		}

		$("<input>")
			.attr("type", "submit")
			.val("Create")
			.appendTo(form);
	});
});
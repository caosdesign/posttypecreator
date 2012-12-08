$(document).ready(function(){
	var i = 1;

	$("#add_field").on('click', function(){
		$("<div>")
			.attr("id", "field_options_"+i)
			.appendTo("#fields_options_container");
		$("<label>")
			.text("Field Name")
			.appendTo("#field_options_"+i);
		$("<input>")
			.attr("id", "field_name_"+i)
			.appendTo("#field_options_"+i);
		$("<label>")
			.text("Field Type")
			.appendTo("#field_options_"+i);
		$("<select>")
			.attr("id", "field_type_"+i)
			.appendTo("#field_options_"+i);
		$("<option>")
			.attr("value", "text")
			.text("Text")
			.appendTo("#field_type_"+i);
		$("<option>")
			.attr("value", "text_area")
			.text("Text Area")
			.appendTo("#field_type_"+i);
		$("<option>")
			.attr("value", "checkbox")
			.text("Checkbox")
			.appendTo("#field_type_"+i);
		$("<option>")
			.attr("value", "radio")
			.text("Radio")
			.appendTo("#field_type_"+i);
		$("<option>")
			.attr("value", "date")
			.text("Date")
			.appendTo("#field_type_"+i);
		$("<option>")
			.attr("value", "time")
			.text("Time")
			.appendTo("#field_type_"+i);
		$("<option>")
			.attr("value", "taxonomy")
			.text("Taxonomy")
			.appendTo("#field_type_"+i);
		$("<span>")
			.attr("id", "remove_bt_"+i)
			.text("[x]")
			.on('click', function(){
				$(this).parent().remove();
			})
			.appendTo("#field_options_"+i);
		i++;
	});

	$("#remove_bt_0").on('click', function(){
		$(this).parent().remove();
	});

});
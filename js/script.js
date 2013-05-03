/* Author: JVP - johnny@wishbone.com.sg
   Date Last Modified: August 21, 2012	
*/

$(document).ready(function(){

	$("a.closemodal").click(function(){
		hideLightBox();
		$(this).parent().hide();
		return false;
	});

	$("a.addmore").click(function(){
		var ddLength = parseInt($("ul#ddselect li").length);
		if(ddLength < 10) {
			createDDForm(ddLength + 1);
		} else {
			alert("You can only order 10 items at a time");
		}
		return false;
	});

	$("a.fclear").click(function(){
		$("form#contactform").clearForm();
		return false;
	});
	$('#featuredslider').anythingSlider({
		autoPlay : true,
		buildStartStop : false
	});

	$(document).bind('click', function(e) {
	    var $jclicked = $(e.target);
	    if (! $jclicked.parents().hasClass("activedropdown"))
	    $(".activedropdown").hide();
	});

	$(".ddrop").live("click",function () { 
	    $(this).parents("div.filters").find(".ddoptions").addClass('activedropdown').toggle(); //Toggle is used because if you click the dropdown twice the list should dissapear
	    return false;
	});

 // $(".ddoptions li a").live("click", function () {
 //     var value = $(this).attr("value");
 //     $(".activedropdown").hide();
 //     getProducts(value);
 //     return false;
 // });

	$(".cat").live("change",function(){
		var item = $(this).val();
		if (!item) {
			$(this).parent().find(".items").rules("remove");
			$(this).parent().find(".quant").rules("remove");
		} else {
			$(this).parent().find(".items").rules("add", {
				required: true
			});
			$(this).parent().find(".quant").rules("add", {
				required: true
			});
			getItems(item,$(this));
		}
	});


});


//Function to show lightbox
function showLightBox(){
    var lightboxContainer = jQuery('<div id="modallightbox"></div>');
    jQuery('body').append(lightboxContainer);
    var bodyheight = jQuery(window).height();
    var scrolltoph = jQuery('body').outerHeight();
    lightboxContainer.css('height', bodyheight + scrolltoph - 200);
    lightboxContainer.css('opacity', 0.4);
}
//Function for activating hidingLightbox
function hideLightBox() {
    jQuery('#modallightbox').remove();
}

function validate(formData, jqForm, options) {
    for (var i=0; i < formData.length; i++) { 
        if (!formData[i].value) { 
           	alert(this.value("name"));
            return false;
        } 
    } 
    alert('Both fields contain values.'); 
}

// post-submit callback 
function showResponse(responseText, statusText, xhr, $form)  { 
    alert("test");
} 

function getItems(item,obj){
	var html = "";
	switch(item)
	{
	case "vegetables":
	  	url = "data/vegetables.json";
	  	folder = "vegetables";
	    break;
	case "fruits":
		url = "data/fruits.json";
		folder = "fruits";
	    break;
	default:
	    url = "";
	    folder = "";
	}
	if(url){
		$.ajax({
			url: url,
			dataType: 'json',
			cache: false,
			success: function(data){
				html += "<option selected='selected' value=''>Select Items</option>";
				$.each(data, function(key, val) {
					var string = val['title'];
					if (val['subtitle']) {
		     			string += " (" + val['subtitle'] + ") ";
		     		} 
		     		string += " (" + val['chinese'] + ") ";
					html += "<option value='" + string + "'>" + string + "</option>"  
				});
				obj.next('select').html(html);
			}
		});
	} else {
		html += "<option selected='selected' value=''>No Available Items</option>";
		obj.next('select').html(html);
	}
	
}

function createDDForm(val) {
	var html = "";
	html += "<li>";
	html += "<select name='category["+ val +"]' class='cat'>";
	html +=     "<option selected='selected' value=''>Select Item</option>"
	html +=		"<option value='vegetables'>Vegetables</option>";
	html +=		"<option value='fruits'>Fruits</option>";
	html += "</select>";
	html += "<select name='item["+ val +"]' class='items'>";
	html +=		"<option selected='selected' value=''></option>";
	html += "</select>";
	html += "<select name='quantity["+ val +"]' class='quant'>";
	html +=		"<option selected='selected' value=''>Select in KG</option>";
	html +=		"<option value='1'>1 (in KG)</option>";
	html +=		"<option value='2'>2 (in KG)</option>";
	html +=		"<option value='3'>3 (in KG)</option>";
	html +=		"<option value='4'>4 (in KG)</option>";
	html +=		"<option value='5'>5 (in KG)</option>";
	html +=		"<option value='6'>6 (in KG)</option>";
	html +=		"<option value='7'>7 (in KG)</option>";
	html +=		"<option value='8'>8 (in KG)</option>";
	html +=		"<option value='9'>9 (in KG)</option>";
	html +=		"<option value='10'>10 (in KG)</option>";
	html += "</select>";
	html += "</li>";
	$("ul#ddselect").append(html);
}

function getProducts(val){
	var url;
	var folder;
	switch(val)
	{
	case "alpabetical":
	  	url = "data/vegetables.json";
	  	folder = "vegetables";
	    break;
	case "popular":
		url = "data/popular.json";
		folder = "vegetables";
	    break;
	case "vegetables":
		url = "data/vegetables.json";
		folder = "vegetables";
		break;	
	case "fruits":
		url = "data/fruits.json";
		folder = "fruits";
		break;	
	default:
	    url = "data/vegetables.json";
	    folder = "vegetables";
	}

	$.ajax({
		url: url,
		dataType: 'json',
		cache: false,
		beforeSend: function () {
			var loader = "<div id='loader'><img src='img/ajax-loader.gif' alt='loader' /></div>";
			$("#paging_container1").prepend(loader);
		},
		success: function(data){
		  	var html="";
		  	$.each(data, function(key, val) {
				html += "<li id='key" + key + "'>";  
				    html += "<figure>";
			     		html += "<a href='img/products/" + folder + "/"+ val['image'] +"' rel='prettyPhoto[gallery]'  title='" + val['title'] +"'"; 
			     		if (val['subtitle']) {
			     			html += " subtitle='" + val['subtitle'] +"'"; 
			     		} 
			     		html += " chi='" + val['chinese'] +"' ><img class='lazy' src='img/grey.gif' data-original='img/products/" + folder + "/" + val['thumb'] + "' alt='" + val['title'];
			     		if (val['subtitle']) {
			     			html += " (" + val['subtitle'] + ")";
			     		} 
			     		html += "' title='" + val['title'] +"' width='280' height='164' /></a>";
				     	html += "<figcaption>"; 
				     	html +=  val['title'];
				     	if (val['subtitle']) {
				     		html += " <em>(" +val['subtitle']+ ")</em>";
				     	}
				     	html += "<span> ("+ val['chinese'] +")</span>"
				     	html += "</figcaption>";
				     html += "</figure>";
				html += "</li>";
			});
			html += "</ul>";
				$("#loader").remove();
				$("#pagelistitem").html(html);
				$("img.lazy").lazyload({
					threshold : 200,
					skip_invisible : false
				});
				$('#paging_container1').pajinate({
				  	num_page_links_to_display : 8,
				  	items_per_page: 12,
				  	start_page : 0,
				  	show_first_last: false
				});
				$("a[rel='prettyPhoto[gallery]']").prettyPhoto({
					animation_speed: 'fast', /* fast/slow/normal */
					autoplay_slideshow: false, /* true/false */
					opacity: 0.40, /* Value between 0 and 1 */
					show_title: true, /* true/false */
					allow_resize: true, /* Resize the photos bigger than viewport. true/false */
					counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
					theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
					horizontal_padding: 20, /* The padding on each side of the picture */
					hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
					wmode: 'opaque', /* Set the flash wmode attribute */
					autoplay: false, /* Automatically start videos: True/False */
					modal: false, /* If set to true, only the close button will close the window */
					deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
					overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
					keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
					changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
					callback: function(){}, /* Called when prettyPhoto is closed */
					ie6_fallback: true,
					markup: '<div class="pp_pic_holder"> \
								<div class="ppt">&nbsp;</div> \
								<a class="pp_close" href="#">Close X</a> \
								<div class="pp_content_container"> \
									<div class="pp_content"> \
										<div class="pp_loaderIcon"></div> \
										<div class="pp_fade"> \
											<div class="pp_hoverContainer"> \
												<a class="pp_next" href="#">next</a> \
												<a class="pp_previous" href="#">previous</a> \
											</div> \
											<div id="pp_full_res"></div> \
											<div class="pp_details"> \
											</div> \
										</div> \
									</div> \
								</div> \
							</div> \
							<div class="pp_overlay"></div>',
					image_markup: '<img id="fullResImage" src="{path}" />',
					inline_markup: '<div class="pp_inline">{content}</div>',
					custom_markup: '',
					social_tools: '' /* html or false to disable */
			});
		}
	});
}
//SHOW/HIDE PREIVEW TEMPLATE MODAL
function showPreview(url){
	$('.modalOverlay').addClass('showOverlay')
	$('.previewTemplateModal').addClass('showModal');
	$('.previewTemplateModal iframe').attr('src', url)
}

function closeModal(){
	$('.modal').removeClass('showModal');
	$('.modalOverlay').removeClass('showOverlay');
}

function resizePreview(width, height){
	$('.device').removeClass('activeDeviceType');
	$(this).addClass('activeDeviceType');
	$('.previewTemplateModal').css({
		'width': width,
		'height': height
	})
}

$(document).ready(function(){
	// TEMPLATE SELECT STYLES
	$('.templateSelect').click(function(){
		$(this).toggleClass('checkBtn');
		$(this).children('span').toggleClass('hidden');
		$(this).children('img').toggleClass('show');
		$(this).parents('.template').toggleClass('selectedTemplate');
		$(this).parents('.template').siblings().removeClass('selectedTemplate');
		$(this).parents('.template').siblings().find('.templateSelect').removeClass('checkBtn');
		$(this).parents('.template').siblings().find('span').removeClass('hidden');
		$(this).parents('.template').siblings().find('img').removeClass('show');
		if (($('div').hasClass('selectedTemplate')) === true){
			$('.nextWrapper').addClass('showNext');
		} else {
			$('.nextWrapper').removeClass('showNext');
		}
	});

	//SHOW/HIDE PREIVEW TEMPLATE MODAL
	function showPreview(url){
		$('.previewTemplateModal').addClass('showModal');
		$('.previewTemplateModal iframe').attr('src', url)
	}

	// PAGE TRANSITIONS

	function showTrans(){
		$('.transGold, .transWhite').addClass('showTrans');
		setTimeout(function(){
			$('.transGold, .transWhite').removeClass('showTrans');
			$('.pageWrapper').scrollTop(0);
		},700);
	};

	$('.toLogo').click(function(){
		$('.transGold, .transWhite, .paymentTrans').addClass('showTrans');
		setTimeout(function(){
			$('.paymentMessages').addClass('showPaymentMessages');
			$('.pageWrapper').scrollTop(0);
		},400);

		setTimeout(function(){
			$('.paymentProcessing').addClass('hide');
			$('.paymentError').removeClass('hide');
		},5000);

		setTimeout(function(){
			$('.transGold, .transWhite, .paymentTrans').removeClass('showTrans');
			$('.paymentMessages').removeClass('showPaymentMessages');
			$('.toLogo').attr('href', '/logo')
		},7000);
	});

	$('.toFinish').click(function(){
		$('.finishTrans').addClass('showTrans');
		$('.pageWrapper').scrollTop(0);
		setTimeout(function(){
			$('.finishWrapper').addClass('showFinish');
		},400);
	});

	$('.backToReview').click(function(){
		$('.finishWrapper').removeClass('showFinish');
		$('.finishTrans').removeClass('showTrans');
	})

	function setStepNumber(number){
		stepNumber = number;
		$('.stepNumber').text(stepNumber)
	}

	function setStepText(smallText, bigText){
		$('.smallText').text(smallText);
		$('.stepHeadline').text(bigText);
	}

	// LABELS ON INPUTS

	var popLabel = $('.popLabel');

	$(popLabel).each(function() {
	    var placeholder = ($(this).children("input").attr("placeholder")); //Gets the placeholder text for the label.
	    $(this).append($('<span class="popPlaceholder">'+placeholder+'</span>')); //Appends a hidden span with the label text.
	});

	$(popLabel).keyup(function(){
		$(this).children('.popPlaceholder').addClass('showPopLabel'); //Shows the label text on keyup
		// TODO: Make label text hide if input is empty
	});

	//set input values when agent is clicked
	$('.agent').click(function(){
		var autoFirstName = $(this).find('.autoFirstName').text();
		var autoLastName = $(this).find('.autoLastName').text();
		var autoEmail = $(this).find('.autoEmail').text();
		var autoPhone = $(this).find('.autoPhone').text();
		$('.firstNameInput').val(autoFirstName);
		$('.lastNameInput').val(autoLastName);
		$('.emailInput').val(autoEmail);
		$('.phoneInput').val(autoPhone);
		$('.lastNameInput, .emailInput, .phoneInput').siblings('.popPlaceholder').addClass('showPopLabel');
	})

	$('.firstNameInput').keyup(function(){
		$('.autoCompleteWrapper').addClass('showAutoComplete');
	});

	$('.pageWrapper, .agentHelp').click(function(){
		$('.autoCompleteWrapper').removeClass('showAutoComplete');
	})

	//CHANGE PACKAGES
	$('.packagesBox').click(function(){
		$('.packagesBox').removeClass('selectedPackage');
		$(this).addClass('selectedPackage');
	});

	//CREDIT CARD TYPE DISPLAY
	$('.creditCardInput').keyup(function(){
		$('.creditCardType').removeClass('hide');
	})

	//HELP POPUP

	$('.getHelp').click(function(){
		$('.modalOverlay').addClass('showOverlay')
		$('.helpModal').addClass('showModal')
	});

	//PAYMENT WRAPPER

	setTimeout(function(){
		$('.loading').addClass('doneLoading')
	},2000)
})
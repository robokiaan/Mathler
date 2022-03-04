jQuery(document).on('change_typepad_key_colour_gray', function(event, char, i, column) {
    if (isNaN(Number(char))) {
        if (char == '+') {
            jQuery(`#a`).css('background-color', 'gray')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
        } else if (char == '-') {
            jQuery(`#s`).css('background-color', 'gray')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
        } else if (char == '*') {
            jQuery(`#m`).css('background-color', 'gray')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
        } else if (char == '/') {
            jQuery(`#d`).css('background-color', 'gray')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
        }
    } else {
        jQuery(`#${char}`).css('background-color', 'gray')
        jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
    }
});

jQuery(document).on('change_typepad_key_colour_lime', function(event, char, i, columb) {
    if (isNaN(Number(char))) {
        if (char == '+') {
            jQuery(`#a`).css('background-color', 'lime')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
            jQuery('#a').addClass('lime')
        } else if (char == '-') {
            jQuery(`#s`).css('background-color', 'lime')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
            jQuery('#s').addClass('lime')
        } else if (char == '*') {
            jQuery(`#m`).css('background-color', 'lime')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
            jQuery('#m').addClass('lime')
        } else if (char == '/') {
            jQuery(`#d`).css('background-color', 'lime')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
            jQuery('#d').addClass('lime')
        }
    } else {
        jQuery(`#${char}`).css('background-color', 'lime')
        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
        jQuery(`#${char}`).addClass('lime')
    }
})

jQuery(document).on('change_typepad_key_colour_orange', function(event, char, i, columb) {
    if (isNaN(Number(char))) {
        if (char == '+') {
            jQuery(`#a`).css('background-color', 'orange')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
        } else if (char == '-') {
            jQuery(`#s`).css('background-color', 'orange')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
        } else if (char == '*') {
            jQuery(`#m`).css('background-color', 'orange')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
        } else if (char == '/') {
            jQuery(`#d`).css('background-color', 'orange')
            jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
        }
    } else {
        jQuery(`#${char}`).css('background-color', 'orange')
        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
    }
    jQuery('.lime').css('background-color', 'lime')
})
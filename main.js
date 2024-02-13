console.log("StopItYoutube loaded successfully!")















setInterval(function() {
// Check if still on correct page



















if (window.location.href.substring(0, 32) === "https://www.youtube.com/watch?v=") {




// Check if a Skip Ad button is already available (before starting the ad skipping loop)
SKIP_AD_BUTTON_ELEMENTS_0 = document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button")
SKIP_AD_BUTTON_ELEMENT_0 = SKIP_AD_BUTTON_ELEMENTS_0[0]
if (SKIP_AD_BUTTON_ELEMENT_0 === null || SKIP_AD_BUTTON_ELEMENT_0 === undefined) {
//console.debug("Did not click on Skip Ad button - Button not found")
} else {
SKIP_AD_BUTTON_ELEMENT_0.click()
}

// Check if a Skip Ad button (non modern one) is already available (before starting the ad skipping loop)
SKIP_AD_BUTTON_ELEMENTS_1 = document.getElementsByClassName("ytp-ad-skip-button ytp-button")
SKIP_AD_BUTTON_ELEMENT_1 = SKIP_AD_BUTTON_ELEMENTS_1[0]
if (SKIP_AD_BUTTON_ELEMENT_1 === null || SKIP_AD_BUTTON_ELEMENT_1 === undefined) {
//console.debug("Did not click on Skip Ad button - Button not found")
} else {
SKIP_AD_BUTTON_ELEMENT_1.click()
}










// Check if there's an ad banner (on the right side)
AD_SLOT_2 = document.getElementsByClassName("style-scope ytd-in-feed-ad-layout-renderer")[0]
if (AD_SLOT_2 !== null && AD_SLOT_2 !== undefined && AD_SLOT_2.remove !== null && AD_SLOT_2.remove !== undefined) {
AD_SLOT_2.remove()
}

AD_SLOT_3 = document.getElementsByClassName("style-scope ytd-player-legacy-desktop-watch-ads-renderer")[0]
if (AD_SLOT_3 !== null && AD_SLOT_3 !== undefined) {
AD_SLOT_3.remove()
}

CURRENT_VAL = 0
STOP_LOOP = false
// Ad skipping loop
SELF_LOOP = setInterval(function() {
if (STOP_LOOP === false) {
//console.debug("Loop2")
CURRENT_VAL += 1
if (CURRENT_VAL === 50) {
//console.debug("Exiting ad skipping loop - Limit reached")
STOP_LOOP = true
clearInterval(SELF_LOOP)
}
PROGRESS_BAR_ELEMENT = document.getElementsByClassName('ytp-play-progress ytp-swatch-background-color')[0]
if (typeof PROGRESS_BAR_ELEMENT === "object" && PROGRESS_BAR_ELEMENT !== null) {
CHECKED_ELEM_COLOR = window.getComputedStyle(PROGRESS_BAR_ELEMENT).backgroundColor 
if (CHECKED_ELEM_COLOR !== "rgb(255, 204, 0)") {
if (CHECKED_ELEM_COLOR === "rgb(255, 0, 0)") {
//console.debug("Not in an ad")
STOP_LOOP = true
clearInterval(SELF_LOOP)
} else {
//console.debug("Did not ad skip - No ad detected")
}
} else {
//console.debug("In an ad")
// First, go to the end of the ad (it's considered a video)
VID_ELEM = document.querySelectorAll("video")[0]
if (VID_ELEM !== null && VID_ELEM !== undefined) {
if (VID_ELEM.currentTime !== null && VID_ELEM.currentTime !== undefined && VID_ELEM.duration !== null && VID_ELEM.duration !== undefined && VID_ELEM.currentTime !== NaN && VID_ELEM.duration !== NaN) {
VID_ELEM.currentTime = VID_ELEM.duration
}
} 
// Now, simulate a click on the Skip Ad button (if it's found, sometimes going to the end of the ad doesn't prompt the Skip Ad button and just instantly puts the video or next ad)
SKIP_AD_BUTTON_ELEMENTS = document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button")
SKIP_AD_BUTTON_ELEMENT = SKIP_AD_BUTTON_ELEMENTS[0]
if (SKIP_AD_BUTTON_ELEMENT === null || SKIP_AD_BUTTON_ELEMENT === undefined) {
//console.debug("Did not click on Skip Ad button - Button not found")
} else {
SKIP_AD_BUTTON_ELEMENT.click()
}

// Incase it's not modern
SKIP_AD_BUTTON_ELEMENTS_2 = document.getElementsByClassName("ytp-ad-skip-button ytp-button")
SKIP_AD_BUTTON_ELEMENT_2 = SKIP_AD_BUTTON_ELEMENTS_2[0]
if (SKIP_AD_BUTTON_ELEMENT_2 === null || SKIP_AD_BUTTON_ELEMENT_2 === undefined) {
//console.debug("Did not click on Skip Ad button - Button not found")
} else {
SKIP_AD_BUTTON_ELEMENT_2.click()
}






}
}
}
}
, 0)
}
}
, 0)
var startTime;
var saveDataFlag = false;
let participant_id;
$(document).ready(function() {  
    //console.log('document starts')
// Check if 'PROLIFIC_PID' exists in the query string
    if (window.location.search.indexOf('PROLIFIC_PID') > -1) {
        // 'PROLIFIC_PID' is in the query string, use its value
        participant_id = getQueryVariable('PROLIFIC_PID');
    } else {
        // 'PROLIFIC_PID' is not in the query string, add it with the default value 'new_number'
        participant_id = Math.floor(Math.random() * 1000);
        //console.log('generated pID is: ', participant_id)

        // Redirect to the updated URL with 'PROLIFIC_PID' added
    }

    // If no ID is present, generate one using random numbers - this is useful for testing
    startTime = Date.now()
})

// clickstart button to interactively switch between games and instructions
function clickStart(hide, show) {
    $("#"+hide).hide();
    $("#"+show).show();
    /*console.log(hide,'this is hidden')
    console.log(show, 'this is shown')
    console.log('display type:', $('#'+show).css('display'))*/
    $('div').each(function () {
        if ($(this).is(":visible")) {
          //console.log("Div ID: " + this.id + " is visible.");
        }});
    $("#progressContainer").show();
    window.scrollTo(0, 0);
    
    if (show == 'WMtask'){
        //console.log('WMtask is shown')
        saveEthicsCheck({
            pID: participant_id,
            experiment: 'experiment_intro',
            clickedEthics: true,
        });
        checkDataSaving();
        time_taken();
        checkDataSaving();
        //console.log('now redirecting to WMtask')
        setTimeout(redirect, 2000);
    }        
}

function redirect() {
    window.location.href = "experiments/operation_span_task.html?pID=" + participant_id
}


function time_taken() {
    const endTime = Date.now()
    const time_store = {
        pID: participant_id,
        experiment: 'experiment_intro',
        startTime: startTime,
        startTimeLocal: new Date(startTime),
        endTime: endTime,
        endTimeLocal: new Date(endTime),
    }
    saveTime(JSON.stringify(time_store));
}

function saveTime(filedata) {
    var filename = "./data/time/totalTime_participant_"+participant_id+".json";
    saveDataFlag = true
    //print('saveTime executed', saveDataFlag)
    $.post("save_data.php", { postresult: filedata + "\n", postfile: filename })
    //console.log(filedata)
}

function saveEthicsCheck(filedata) {
    let filename = "./data/checks/EthicsCheck.json";
    //console.log('saveEthicsCheck executed', filedata)
    saveDataFlag = true
    //print('saveEthicsCheck executed', saveDataFlag)
    $.post("save_data.php", { postresult: JSON.stringify(filedata) + "\n", postfile: filename })
}


function checkDataSaving(){
    if (!saveDataFlag) {
      // Data saving is not complete, wait for a few seconds and check again.
      setTimeout(checkDataSaving, 2000); // Wait for 2 seconds and check again.
    } else {
      // Data saving is complete, you can proceed with the next steps.
      //console.log("Data has been saved successfully.");
      saveDataFlag = false;
    }
}

function saveBotButtonClicked(){
    let filename = "./data/checks/BotButtonClicked.json";
    const pID = participant_id
    const filedata = {pID}
    //console.log('saveBotButtonClicked executed', filedata)
    $.post("save_data.php", { postresult: JSON.stringify(filedata) + "\n", postfile: filename })    
}
